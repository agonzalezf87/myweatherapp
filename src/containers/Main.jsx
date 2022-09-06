import { Dashboard } from './Dashboard'
import '../styles/containers/Main.sass'

const Main = () => {
  return (
    <main className="Main">
      <section className='Main__content'>
        <Dashboard />
      </section>
    </main>
  )
}

export { Main }