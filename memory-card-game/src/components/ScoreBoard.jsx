import { useState } from "react";

export default function ScoreBoard({levelChoosed, scoreSet, setHighScoreSet}){
    return(
     <div className="flex items-center justify-around py-4">
        <div className="text-white ml-4">
          <p><span className="text-4xl mr-3">😳</span>{levelChoosed} level.</p>
        </div>
        <div className="text-grey-500 rounded bg-white px-4 py-4">
          <p>Score: {scoreSet}</p>
          <p>Highest Score: {setHighScoreSet}</p>
        </div>
      </div>
    );
}