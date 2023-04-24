import { useReducer, useState } from "react";

import IoniconsPlay from "./assets/ionicons-play.svg";
import IoniconsPause from "./assets/ionicons-pause.svg";
import IoniconsBackward from "./assets/ionicons-backward.svg";
import IoniconsForward from "./assets/ionicons-forward.svg";
import coverImage from "./assets/cover.jpg";

import styles from "./Project01.module.scss";

function timelineReducer(timeline, action) {
  switch (action.type) {
    case "change": {
      return {
        ...timeline,
        changeValue: action.value,
      };
    }
    case "play_state": {
      if (action.icon === IoniconsPause)
        return {
          ...timeline,
          icon: IoniconsPlay,
        };
      return {
        ...timeline,
        icon: IoniconsPause,
        visibility: action.classText,
      };
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export function Project01() {
  const [cardState, SetCardState] = useState(styles.collapsed);
  const [timelineObject, dispatch] = useReducer(timelineReducer, {
    visibility: styles.invisible,
    changeValue: 0,
    icon: IoniconsPlay,
  });

  function handlePlayerIconChange(iconPath, classStateName) {
    dispatch({
      type: "play_state",
      icon: iconPath,
      classText: classStateName,
    });
  }

  function handleTimelineChange(e) {
    dispatch({
      type: "change",
      value: e.target.value,
    });
  }

  return (
    <div className={styles.App}>
      <div className={`${styles.card} ${cardState}`}>
        <div className={styles.header}>
          <img
            src={coverImage}
            alt="Capa da música Acorda Devinho, é como um monte de amoebas de cor roxa com um fundo lilás"
            onClick={() => {
              if (window.outerWidth >= 768) {
                cardState == styles.collapsed
                  ? SetCardState("")
                  : SetCardState(styles.collapsed);
              }
            }}
          />
          <div>
            <h3>Acorda Devinho</h3>
            <p>Banda Rocketseat</p>
          </div>
        </div>
        <div className={styles.player}>
          <img src={IoniconsBackward} alt="Ícone de tocar a música anterior" />
          <img
            src={timelineObject.icon}
            alt="Ícone de pausar e tocar a música"
            onClick={() =>
              handlePlayerIconChange(timelineObject.icon, styles.visible)
            }
          />
          <img src={IoniconsForward} alt="Ícone de tocar a próxima música" />
        </div>
        <div className={`${styles.timeline} ${timelineObject.visibility}`}>
          <input
            type="range"
            title="timeline"
            min={0}
            max={100}
            value={timelineObject.changeValue}
            onChange={handleTimelineChange}
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
