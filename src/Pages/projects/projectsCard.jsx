import React from "react";
function PCard(props) {
  return (
    <>
      <div className="m-5 p-3 rounded-lg bg-white/10 xl:flex xl:justify-around h-auto max-xl:flex-col max-xl:w-[400px] border-2 border-white shadow-lg hover:scale-[1.02] transition-all duration-300">
        <div
          className="xl:w-1/4 bg-cover rounded-lg h-[300px] max-xl:w-full"
          style={{ backgroundImage: `url(${props.imgurl})` }}></div>

        <div className="xl:w-3/4 text-white font-serif text-xl text-center px-4">
          <div className="font-bold text-2xl mb-2">{props.name}</div>
          <div className="mb-4">{props.description}</div>

          {/* Skills Developed Section */}
          {props.SkillsDevloped && (
            <div className="text-sm mt-2 italic bg-white/10 p-3 rounded-lg border border-white/20 text-left">
              <span className="font-bold text-white/90">Skills Developed: </span>
              {props.SkillsDevloped}
            </div>
          )}

          <div className="mt-4">
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-serif text-white text-xl bg-[#603b76] px-4 py-2 rounded-lg hover:border-2 hover:border-white transition-all duration-300">
              Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PCard;
