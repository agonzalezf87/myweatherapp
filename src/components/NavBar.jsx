import '../styles/components/NavBar.sass'
import { MenuButton } from './MenuButton'

const NavBar = () => {
  return (
    <nav className="NavBar">
      <aside className="NavBar__city">
        <div className="NavBar__city__info">Monterrey, MX.</div>
        <div className="NavBar__city__info">04 Sept, 2022</div>
      </aside>
      <MenuButton />
    </nav>
  )
}

export { NavBar }