export default function LoseDisplay(){
    const loseArray = [
    {reaction:'😁',text: 'What did i say...',secondText: 'You lose papi!'},
    {reaction:'🤡',text: 'just go home pls...',secondText: 'king of losers.'},
    {reaction:'😭',text: 'make progress atleast bruh.',secondText:'Im out.'}
    ];
     const index = Math.floor(Math.random() *loseArray.length);
     const chosen = loseArray[index];
    function loseText(){
        return chosen.text;
    }
    function loseReaction(){
        return chosen.reaction;
    }
    function loseSecondText(){
        return chosen.secondText;
    }
    return(
        <div>
        <span className="text-7xl">{loseReaction()}</span>
        <p className="mb-2 mt-3">{loseText()}</p>
        <p>{loseSecondText()}</p>
        </div>
    )
}