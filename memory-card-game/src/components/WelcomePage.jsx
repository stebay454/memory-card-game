export default function WelcomePage({levelEl}){
  function handleClick(e){
   levelEl(e.target.name);
  }
  return(
    <div className="w-full h-screen flex flex-col justify-center items-center text-white">
        <span className="text-5xl mb-3">🤲</span>
        <div className="flex flex-col gap-3">
        <p>Hi there!</p>
        <p>Welcome to memory mind game...</p>
        <p>One Rule: Get point by clicking different images throught out the game.</p>
        </div>
        <div id="levelBtn-container" className="w-60 px-9 py-2 mt-8 gap-3 flex flex-col">
          <button id="EasyBtn" name="easy" onClick={handleClick} className="bg-green-500 transition ease duration-[0.5s] hover:bg-green-400 text-black py-2 px-4 rounded cursor-pointer">Easy</button>
          <button id="MediumBtn" name="medium" onClick={handleClick} className="bg-green-500 transition ease duration-[0.5s] hover:bg-green-400 text-black py-2 px-4 rounded cursor-pointer">Medium</button>
          <button id="HardBtn" name="hard" onClick={handleClick} className="bg-green-500 transition ease duration-[0.5s] hover:bg-green-400 text-black py-2 px-4 rounded cursor-pointer">Hard</button>
        </div>
    </div>
  );
}