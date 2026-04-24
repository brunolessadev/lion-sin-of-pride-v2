import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Codes from './pages/Codes.tsx'

export default function App() {
  const location = useLocation()
  // pega a rota e transforma em id: "/" vira "home", "/codes" vira "codes"
  const pageId = location.pathname === '/' ? 'home' : location.pathname.substring(1)

  return (
    <div className="main" id={pageId}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codes" element={<Codes />} />
      </Routes>
    </div>
  )
}