export default function ScoreBoard({levelChoosed, scoreSet, highScoreSet}){
  function reactionDisplay(){
    if(levelChoosed == 'easy') return '💦'
    else if(levelChoosed == 'medium'){return '😎'}
    else if(levelChoosed == 'hard') {return '😵'};
  } 
  return(
     <div className="flex items-center justify-between py-4">
        <div className="text-white ml-4">
          <span className="text-4xl mr-3">{reactionDisplay()}</span>
          <p>{levelChoosed} level.</p>
        </div>
        <div className="text-grey-500 rounded bg-white max-sm:text-sm sm:text-xl px-4 py-4">
          <p>Score: {scoreSet}</p>
          <p>Highest Score: {highScoreSet}</p>
        </div>
      </div>
    );
}