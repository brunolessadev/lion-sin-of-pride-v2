import { useState } from "react";

import Footer from "../components/Footer.tsx";
import Menu from "../components/Menu.tsx";
import CostumeCard from "../components/CostumeCard.tsx";

import "../styles/bannerContent.css";

import { characters, allCostumes } from "../data/costumes";

export default function Costumes() {
  const [selectedCharacter, setSelectedCharacter] = useState<string>("all");

  const filteredCostumes =
    selectedCharacter === "all"
      ? allCostumes
      : allCostumes.filter((costume) =>
          characters
            .find((char) => char.id === selectedCharacter)
            ?.costumes.some((c) => c.id === costume.id)
        );

  return (
    <>
      <Menu />

      <section className="banner2">
        <div className="banner-content2">
          <h2>Costumes</h2>

          <p>
            Em The Seven Deadly Sins: Origin os trajes dão status de verdade. Cada um vem de um Equipamento Gravado e fica disponível na aba Skins, então você troca o visual sem perder o poder. Aqui você encontra, por personagem, os atributos base, os rerolls que mais valem, os bônus de conjunto e a raridade. Direto ao ponto para montar o visual certo com o build certo, sem testar às cegas.
          </p>

          <br />

          <p className="obs-page">
            Obs: sistema de status de trajes possuem 3 níveis, que definem sua chance de aparecer sendo: LV1 → 60% de chance (mais comum), LV2 → 30% de chance (intermediário), LV3 → 10% de chance (mais raro).
          </p>
        </div>
      </section>

      {/* 🔽 FILTRO */}
      <div className="character-filters">
        <button
          className={selectedCharacter === "all" ? "active" : ""}
          onClick={() => setSelectedCharacter("all")}
        >
          Todos
        </button>

        {characters.map((char) => (
          <button
            key={char.id}
            className={selectedCharacter === char.id ? "active" : ""}
            onClick={() => setSelectedCharacter(char.id)}
          >
            {char.name}
          </button>
        ))}
      </div>

      {/* 🔽 CARDS */}
      <section className="costumes-container">
        {filteredCostumes.map((costume) => (
          <CostumeCard key={costume.id} {...costume} />
        ))}
      </section>

      {/* 🔼 BOTÃO TOPO */}
      <button
        className="back-to-top"
        onClick={() => {
          document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
          document.body.scrollTo({ top: 0, behavior: "smooth" });
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Voltar ao topo ↑
      </button>

      <Footer />
    </>
  );
}