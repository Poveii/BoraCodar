import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import "./Project01.scss";

import IoniconsPlay from "./assets/ionicons-play.svg";
import IoniconsPause from "./assets/ionicons-pause.svg";
import IoniconsBackward from "./assets/ionicons-backward.svg";
import IoniconsForward from "./assets/ionicons-forward.svg";

let song = new Audio("./assets/Bom_Dia_Música.mp3");

function Project01() {
  const [cardState, SetCardState] = React.useState("collapsed");
  const [iconImage, SetIconImage] = React.useState(IoniconsPlay);
  const [timelineVisibility, setTimelineVisibility] =
    React.useState("invisible");

  return (
    <div className="App">
      <div className={`card ${cardState}`}>
        <div className="header">
          <img
            src="./assets/cover.jpg"
            alt="Capa da música Acorda Devinho, é como um monte de amoebas de cor roxa com um fundo lilás"
            onClick={() => {
              if (window.outerWidth >= 768) {
                cardState == "collapsed"
                  ? SetCardState("")
                  : SetCardState("collapsed");
              }
            }}
          />
          <div>
            <h3>Acorda Devinho</h3>
            <p>Banda Rocketseat</p>
          </div>
        </div>
        <div className="player">
          <img src={IoniconsBackward} alt="Ícone de tocar a música anterior" />
          <img
            src={iconImage}
            alt="Ícone de pausar e tocar a música"
            onClick={() => {
              if (iconImage == IoniconsPlay) {
                SetIconImage(IoniconsPause);
                song.play();
                setTimelineVisibility("visible");
              } else {
                SetIconImage(IoniconsPlay);
                song.pause();
              }
            }}
          />
          <img src={IoniconsForward} alt="Ícone de tocar a próxima música" />
        </div>
        <div className={`timeline ${timelineVisibility}`}>
          <input
            type="range"
            title="timeline"
            value={0}
            min="0"
            max="100"
            onChange={(e) => {}}
          />
          <div>
            <span>0:00</span>
            <span>0:12</span>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Project01 />
  </React.StrictMode>
);
