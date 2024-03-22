import Features from "./components/Features.jsx"
import Footer from "./components/Footer.jsx"
import Hero from "./components/Hero.jsx"
import Highlights from "./components/Highlights.jsx"
import HowItWorks from "./components/HowItWorks.jsx"
import Model from "./components/Model.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {

  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features />
      <HowItWorks />
      <Footer />
    </main>
    )
}

export default App
