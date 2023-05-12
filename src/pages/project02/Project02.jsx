import { useState } from "react";
import styles from "./Project02.module.scss";

import sofa from "./assets/sofa.png";
import sofaRotating from "./assets/sofaRotating.gif";

import fullCircleIcon from "./assets/fullCircleIcon.svg";
import closeIcon from "./assets/closeIcon.svg";

export function Project02() {
  const [perspectiveIcon, setPerspectiveIcon] = useState(fullCircleIcon);
  const [image, setImage] = useState(sofa);

  function handlePerspectiveClick() {
    if (perspectiveIcon === fullCircleIcon) {
      setPerspectiveIcon(closeIcon)
      setImage(sofaRotating)
    } else {
      setPerspectiveIcon(fullCircleIcon)
      setImage(sofa)
    }
  }

  return (
    <div className={styles.App}>
      <aside className={styles.ImageBox}>
        <img 
          src={image} 
          alt="Um sofá sem apoio de braços aos lados de cor rosa com espaço para duas pessoas com quatro pés de cor marrom com um detalhe dourado no final" 
          id="sofa" 
        />
        <button type="button" title="Ver o item em 360°">
          <img src={perspectiveIcon} alt="" onClick={handlePerspectiveClick} />
        </button>
      </aside>
      <main className={styles.About}>
        <div>
          <span>CÓDIGO: 42404</span>
          <h1>Sofá Margot II - Rosé</h1>
          <p>R$ 4.000</p>
        </div>
        <button type="submit">ADICIONAR À CESTA</button>
      </main>
    </div>
  );
}