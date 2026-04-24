import { Link } from 'react-router-dom'

// definimos o formato de cada item do menu
type Item = {
  to: string
  img: string
  label: string
}

// mesma lista que você tinha no HTML, só que em dados
const items: Item[] = [
  { to: '/', img: 'https://res.cloudinary.com/dsmwi4i94/image/upload/v1777003297/1-lion_rjxc0j.png', label: 'Home' },
  //{ to: '/characters', img: 'https://res.cloudinary.com/dsmwi4i94/image/upload/v1776397046/boar_umifoe.png', label: 'Characters' },
  //{ to: '/pets', img: 'https://res.cloudinary.com/dsmwi4i94/image/upload/v1776397074/bear_ijaedf.png', label: 'Pets' },
  //{ to: '/weapons', img: 'https://res.cloudinary.com/dsmwi4i94/image/upload/v1776396909/fox_rqrxui.png', label: 'Weapons' },
  //{ to: '/gears', img: 'https://res.cloudinary.com/dsmwi4i94/image/upload/v1776397065/snake_wc0024.png', label: 'Gears' },
  //{ to: '/items', img: 'https://res.cloudinary.com/dsmwi4i94/image/upload/v1776397037/ram_d2c9tf.png', label: 'Items' },
  //{ to: '/monsters', img: 'https://res.cloudinary.com/dsmwi4i94/image/upload/v1776397055/dragon_circle_ljeveb.png', label: 'Monsters' },
]

export default function Menu() {
  return (
    <nav className="menu">
      <div className="menu-wrapper">
        <h1 className="logo">Lion Sin Of Pride</h1>

        {/* o hambúrguer que você fez sem JS continua igual */}
        {/* só trocamos for por htmlFor e class por className */}
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">☰</label>

        <ul className="menu-list">
          {items.map((item) => (
            <li className="menu-item" key={item.label}>
              {/* Link substitui o <a href=""> para não recarregar a página */}
              <Link to={item.to}>
                <img src={item.img} alt={item.label} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}