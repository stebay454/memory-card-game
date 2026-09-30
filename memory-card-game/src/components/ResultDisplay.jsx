import LoseDisplay from "./loseDisplay.jsx";
import WinDisplay from "./winDisplay.jsx";
export default function ResultDisplay({hasWin}){
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center text-white">
         {hasWin == 'lose' ? <LoseDisplay /> : <WinDisplay />};
        </div>
    );
}