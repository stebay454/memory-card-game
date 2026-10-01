import { useState } from 'react'
import WelcomePage from './components/WelcomePage.jsx';
import ResultDisplay from './components/ResultDisplay.jsx';
import Board from './components/Board.jsx';
 export default function App(){
  const [level,setlevel] = useState('');
  const [isWin, setIsWin] = useState('');
  const [highScore,setHighScore] = useState({easy: 0,medium: 0,hard: 0});
  function levelChoosed(text){
      setlevel(text);
    }
    function displayWin(){
     if(isWin == '') return <Board levelChoosed={level} hasWin={setIsWin} updateHighScore={handleHighScore} highScoreSet={highScore[level]}/>;
     else return <ResultDisplay hasWin={isWin} onClick={handleDisplayClick}/>;
    }
    function handleDisplayClick(choice){
      if(choice == 'home') {
        setlevel('') 
        setIsWin('')
      } else if(choice == 'again') setIsWin('');
    }
     function handleHighScore(newScore){
        if(newScore > highScore[level]){
         setHighScore((prevHighScore) =>({
            ...prevHighScore,
            [level]: newScore
          }));
        }  
      }
   return(
    <div className="w-full min-h-screen py-4 px-8 text-2xl text-center font-fraunces bg-linear-[100deg] from-[#1a1a1a] to-[#000] flex flex-col overflow-x-hidden" id="main-container">
      {level == '' ? <WelcomePage levelEl={levelChoosed} /> : displayWin()}
    </div>
   );
 };