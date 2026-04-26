import Footer from "../components/Footer.tsx";
import Menu from "../components/Menu.tsx";
import CostumeCard from "../components/CostumeCard.tsx";
import '../styles/bannerContent.css';

import { allCostumes } from "../data/costumes";

export default function Costumes() {

  return (
    <>
      <Menu />

      <section className="banner2">
        <div className="banner-content2">
          <h2>Costumes</h2>
          <p>
          Em The Seven Deadly Sins: Origin os trajes dão status de verdade. Cada um vem de um Equipamento Gravado e fica disponível na aba Skins, então você troca o visual sem perder o poder.
          Aqui você encontra, por personagem, os atributos base, os rerolls que mais valem, os bônus de conjunto e a raridade. Direto ao ponto para montar o visual certo com o build certo, sem testar às cegas.
          </p>
        </div>             
      </section>
      <section className="costumes-container">
        {allCostumes.map((costume) => (
          <CostumeCard key={costume.id} {...costume} />
        ))}
      </section>

      <Footer />
    </>
  )
}