import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default function Codes() {
  return (
    <>
      <Menu />
      <section className="banner">
        <div className="table-container">
          <p>Códigos promocionais mais recentes para obter recompensas gratuitas no jogo.</p>
          <br />
          <table className="codes-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Recompensa</th>
                <th>Validade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ESCANORINORIGIN</td>
                <td>30x Special Enhancement Stone</td>
                <td>Válido até 03/06</td>
              </tr>
              <tr>
                <td>LIONSINISBACK</td>
                <td>15x Elite Trophies Chance Bundle</td>
                <td>Válido até 03/06</td>
              </tr>
              <tr>
                <td>WELCOMEORIGIN</td>
                <td>x5 Ticket de Invocação de Herói Regular<br />x10 Pedra Suprema de Aprimoramento<br />x10 Pedra Suprema de Refinamento<br />x50.000 Ouro</td>
                <td>Expira em 30/04 às 12:00 BRT</td>
              </tr>
              <tr>
                <td>ORIGINX</td>
                <td>x1 Ticket de Invocação de Herói Regular<br />x50.000 Ouro</td>
                <td>Expira em 30/04 às 12:00 BRT</td>
              </tr>
              <tr>
                <td>ORIGINSTEAM</td>
                <td>x1 Ticket de Invocação de Herói Regular<br />x10 EXP Suprema de Maestria</td>
                <td>Expira em 30/04 às 12:00 BRT</td>
              </tr>
              <tr>
                <td>ORIGINDISCORD</td>
                <td>x1 Ticket de Invocação de Herói Regular<br />x3 Pacote Pequeno de Chaves de Cubo</td>
                <td>Expira em 30/04 às 12:00 BRT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  )
}