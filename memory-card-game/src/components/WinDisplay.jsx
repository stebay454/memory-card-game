export default function WinDisplay(){
    return(
     <div>
       <span className="text-7xl mb-5">😏</span>
        <p className="mb-2">well well well...</p>
        <p>okay, you won.</p>
        <div className="px-9 py-2 mt-8 gap-3 flex">
            <button className="bg-green-500 transition ease duration-[0.5s] hover:bg-green-400 text-black py-2 px-4 rounded cursor-pointer">Go home</button>
            <button className="bg-green-500 transition ease duration-[0.5s] hover:bg-green-400 text-black py-2 px-4 rounded cursor-pointer">Play again</button>
        </div>
     </div>
    );
}