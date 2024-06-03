import Hero from './components/hero/Hero'
import Header from './components/header/header'
import Accordion from './components/accordion/Accordion'
import Reviews from './components/reviews/Reviews';
import './app.scss';

function App() {
  return (
    <>
    <Header/>
    <main className="main">
      <Hero/>
      <Accordion/>
      <Reviews/>
    </main>
    </>
  )
}

export default App
