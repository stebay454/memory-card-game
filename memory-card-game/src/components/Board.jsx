import { useState, useEffect} from "react";
import Card from './Card.jsx';
import ScoreBoard from './ScoreBoard.jsx';

export default function Board({levelChoosed}){
  const [score,setScore] = useState(0);
  const [highScore,setHighScore] = useState({easy: 0,medium: 0,hard: 0});
  const [animeCharacters, setAnimeCharacters] = useState([]);
  const [slicedArray, setSlicedArray] = useState([]);
  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/top/characters?limit=20');
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`); 
        }
        const result = await response.json();
        const fetchedArray = result.data.map(item => ({
          id: item.mal_id,
          name: item.name,
          imageUrl: item.images?.jpg?.image_url
        }));
        setAnimeCharacters(fetchedArray);
      } catch(error){
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  },[]);
  useEffect(() => {
    const count = getCount(levelChoosed);
    const shuffled = shuffle(animeCharacters);
    setSlicedArray(shuffled.slice(0, count));
  },[levelChoosed,animeCharacters])

  function getCount(lev){
    if(lev == 'easy') return 8;
     else if(lev == 'medium') return 12;
   else if(lev == 'hard') return 16;
  }
  function shuffle(array){
    return [...array].sort(() => Math.random() - 0.5);
  }
  return(
    <div>
      <ScoreBoard levelChoosed={levelChoosed}/>
      <div  className="grid grid-cols-4 gap-4 py-4 px-8">
        {slicedArray.map(card => <Card key={card.id} name={card.name} img={card.imageUrl} />)}
      </div>
    </div>
  );
}