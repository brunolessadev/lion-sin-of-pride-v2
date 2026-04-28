import { useState } from "react";
import type { Level } from "../data/costumes";
import "../styles/costumeCards.css";

type Props = {
  name: string;
  image: string;
  costumeName: string;
  descriptions: Record<Level, string>;
};

export default function CostumeCard({
  name,
  image,
  costumeName,
  descriptions,
}: Props) {
  const [level, setLevel] = useState<Level>(1);

  // 🔥 novo estado
  const [highlight, setHighlight] = useState(false);

  const levels: Level[] = [1, 2, 3];

  // 🔥 função com efeito
  function trocarNivel(lvl: Level) {
    setLevel(lvl);
    setHighlight(true);

    setTimeout(() => setHighlight(false), 200);
  }

  return (
    <div className="costume-card">
      
      {/* LEFT */}
      <div className="costume-card__image-container">
        <img src={image} className="costume-card__image" />
      </div>

      {/* RIGHT */}
      <div className="costume-card__content">
        <h2 className="costume-card__title">{name}</h2>
        <p className="costume-card__subtitle">{costumeName}</p>

        <div className="costume-card__levels">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => trocarNivel(lvl)} // 🔥 alterado aqui
              className={`costume-card__button ${
                level === lvl ? "costume-card__button--active" : ""
              }`}
            >
              Lvl.{lvl}
            </button>
          ))}
        </div>

        {/* 🔥 highlight aplicado */}
        <div
          className={`costume-card__description ${
            highlight ? "highlight" : ""
          }`}
          dangerouslySetInnerHTML={{
            __html: descriptions[level],
          }}
        />
      </div>
    </div>
  );
}