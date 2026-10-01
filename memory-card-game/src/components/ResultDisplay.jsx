import LoseDisplay from './LoseDisplay.jsx';
import WinDisplay from './WinDisplay.jsx';
export default function ResultDisplay({hasWin, onClick}){
    return(
        <div className="w-full flex-1 flex flex-col justify-center items-center text-white">
         {hasWin == 'lose' ? <LoseDisplay /> : <WinDisplay />}
         <div className="py-2 mt-8 gap-3 flex">
            <button className="bg-green-500 transition ease duration-[0.5s] hover:bg-green-400 text-black py-2 px-4 rounded cursor-pointer" onClick={() => onClick('home')}>Go home</button>
            <button className="bg-green-500 transition ease duration-[0.5s] hover:bg-green-400 text-black py-2 px-4 rounded cursor-pointer" onClick={() => onClick('again')}>Play again</button>
        </div>
        </div>
    );
}