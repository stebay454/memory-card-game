import { useState, useEffect} from "react";
import Card from './Card.jsx';
import ScoreBoard from './ScoreBoard.jsx';

export default function Board({levelChoosed,hasWin,updateHighScore,highScoreSet}){
  const [score,setScore] = useState(0);
  const [animeCharacters, setAnimeCharacters] = useState([]);
  const [slicedArray, setSlicedArray] = useState([]);
  const [choosedCards,setChoosedCards] = useState([]);
  const [loading,setLoading] = useState(true);
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
      } finally{
        setLoading(false);
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
   if(!choosedCards.includes(id)){
    setChoosedCards([...choosedCards,id]);
    const newScore = score + 1;
    if(choosedCards.length + 1 !== slicedArray.length){
      setSlicedArray(shuffle([...slicedArray]));
      setScore(newScore);
      updateHighScore(newScore);
    }
    else{
      updateHighScore(newScore);
      hasWin('win');
    }
   } else{
    hasWin('lose');
    console.log("you clicked one image twice");
   }
  }
  if(loading) return <div className="text-white text-center my-auto">😊wait a minute...</div>;
  return(
    <div className="w-full h-screen flex flex-col">
      <ScoreBoard levelChoosed={levelChoosed} scoreSet={score} highScoreSet={highScoreSet}/>
      <div  className="grid  max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 py-8 px-8 my-auto">
        {slicedArray.map(card => <Card key={card.id} id={card.id} name={card.name} img={card.imageUrl} onClick={handleCardClick}/>)}
      </div>
    </div>
  );
}