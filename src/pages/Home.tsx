import { useNavigate } from 'react-router-dom'
import Footer from "../components/Footer.tsx";
import Menu from "../components/Menu.tsx";

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Menu />

      <section className="banner">
        <div className="banner-content">
          <h2>Seja bem-vindo!</h2>
          <p>
            Este site nasceu de fã para fã e é dedicado exclusivamente a The Seven Deadly Sins: Origin.
            Não é oficial e não possui vínculo com a Netmarble ou com os criadores da obra.
            Criamos este espaço para ajudar a comunidade brasileira, que muitas vezes encontra apenas conteúdos em inglês e sem tradução.
            Aqui você encontra tudo sobre o RPG de mundo aberto em um só lugar: personagens jogáveis, armas, equipamentos, criaturas e os segredos de Britannia.
            Este é um guia feito por jogadores, para jogadores — especialmente para quem quer aproveitar o jogo ao máximo sem barreiras de idioma.
          </p>

          <button onClick={() => navigate('/codes')}>
            Codes
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}