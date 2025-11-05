export default function ButtonAll({ text='click me',}) {
   
  return (
    <>
      {/* <div className="pl-[15px] pr-[15px] pb-[5px] bg-linear-to-b from-blue-500 to-green-500 rounded-2xl text-black font-bold">
        <button>{text}</button>
      </div> */}

      <div className="  ">
        <button className="btn w-[6.5em] h-[38px] pt-  bg-linear-to-r from-[#2193b0] to-[#6dd5ed] text-white border-none 
         text-[15px] font-bold cursor-pointer relative z-1 overflow-hidden
         hover:text-black
         before:content-[''] before:absolute before:top-0 before:bottom-0
         before:left-[-20%] before:right-[-20%]  before:bg-linear-to-r before:from-white before:to-sky-100 before:-z-10
         before:transform-[skewX(-45deg)_scaleX(0)_scaleY(1)]
         before:transition-all before:duration-500
         hover:before:transform-[skewX(-45deg)_scaleX(1)_scaleY(1)] rounded-2xl">{text}</button> 
      </div>
    </>
  );
}
