export default function Card({id,name,img,onClick}){
  return(
    <div onClick={() => onClick(id)} className="bg-white rounded px-4 py-2 mb-4 cursor-pointer flex flex-col gap-4 justify-center items-center hover:scale-[1.05] transition-transform duration-600 ease">
      <img className="rounded-xl " src={img} alt="just some image" />
      <p className="text-black text-center">{name}</p>
    </div>
  );
}