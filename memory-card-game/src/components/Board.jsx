import { useState, useEffect} from "react";
import Card from './Card.jsx';
import ScoreBoard from './ScoreBoard.jsx';

export default function Board({levelChoosed,hasWin}){
  const [index,setIndex] = useState(0);
  const [max,setMax] = useState(0);
  const [score,setScore] = useState(0);
  const [highScore,setHighScore] = useState({easy: 0,medium: 0,hard: 0});
  const [animeCharacters, setAnimeCharacters] = useState([]);
  const [slicedArray, setSlicedArray] = useState([]);
  const [choosedCards,setChoosedCards] = useState([]);
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
    for(let i = array.length - 1 ; i > 0 ; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [array[i],array[j]] = [array[j],array[i]];
    }
    return array;
  }
  function handleCardClick(id){
  if(choosedCards.length !== slicedArray.length){
   setSlicedArray(shuffle(slicedArray));
   if(!choosedCards.includes(id)){
    setChoosedCards([...choosedCards,id]);
   } else{
    hasWin('lose');
    console.log("you clicked one image twice");
   }
  } else{
    hasWin('win');
  } 
  }
  return(
    <div>
      <ScoreBoard levelChoosed={levelChoosed} />
      <div  className="grid grid-cols-4 gap-4 py-4 px-8">
        {slicedArray.map(card => <Card key={card.id} id={card.id} name={card.name} img={card.imageUrl} onClick={handleCardClick}/>)}
      </div>
    </div>
  );
}