import './App.css'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import Featured from './pages/Home/components/Featured'
import { Hero } from './pages/Home/components/Hero'
import { HomePage } from './pages/Home/HomePage'
function App() {

  return (
    <>
    <Header />
    <Hero />
    <HomePage />
    <Featured />
    <Footer />
    </>
  )
}

export default App
