import React from "react";
import styles from "./events.module.css";

function ECard(props) {
  return (
    <>
      <div className={styles.card}>
        <div className=" p-3 rounded-lg bg-white/10 h-[700px] w-[400px] border-2 border-white">
          <div
            className=" bg-cover rounded-lg h-[200px] w-full"
            style={{ backgroundImage: `url(${props.imgurl})` }}></div>
          <div className="text-white font-serif text-xl text-center">
            <div className="font-bold text-2xl mb-2 mt-3">{props.name}</div>
            <div>{props.description}</div>
            {/* <div className="mt-3">
            <a
              href={props.link}
              className="font-serif text-white text-2xl bg-[#603b76] p-2 rounded-lg hover:border-2 hover:border-white">
              Link
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ECard;
