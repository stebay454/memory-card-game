import { useState } from 'react'
import WelcomePage from './components/WelcomePage.jsx';
import ResultDisplay from './components/ResultDisplay.jsx';
import Board from './components/Board.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';
 export default function App(){
  const [level,setlevel] = useState('');
  const [isWin, setIsWin] = useState(false);
  function levelChoosed(text){
      setlevel(text);
    }
   return(
    <div className="w-full min-h-screen py-4 px-8 text-2xl text-center font-fraunces bg-[#000]" id="main-container">
     {level=='' ? <WelcomePage levelEl={levelChoosed} /> : <Board levelChoosed={level} hasWin={setIsWin}/>}
    </div>
   );
 };