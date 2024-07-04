import React from "react";

function PCard(props) {
  return (
    <>
      <div className="m-5 p-3 rounded-lg bg-white/10 xl:flex xl:justify-around h-auto max-xl:flex-col max-xl:w-[400px] border-2 border-white">
        <div
          className="xl:w-2/3 bg-cover rounded-lg h-[200px] max-xl:w-full"
          style={{ backgroundImage: `url(${props.imgurl})` }}></div>
        <div className="text-white font-serif text-xl text-center">
          <div className="font-bold text-2xl mb-2">{props.name}</div>
          <div>{props.description}</div>
          <div className="mt-3 ">
            <a
              href={props.link}
              className="font-serif text-white text-2xl bg-[#603b76] p-2 rounded-lg hover:border-2 hover:border-white">
              Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PCard;
