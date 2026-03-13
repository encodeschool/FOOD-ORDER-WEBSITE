import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Menu from "./components/Menu"
import BurgerAnimation from "./components/BurgerAnimation"
import Gallery from "./components/Gallery"
import Booking from "./components/Booking"
import News from "./components/News"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BurgerHero from "./components/BurgerHero"

function App() {

  const [cart, setCart] = useState([])

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("burger-cart")

    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("burger-cart", JSON.stringify(cart))
  }, [cart])


  const addToCart = (item) => {
    setCart((prev) => [...prev, item])
  }

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-white text-black">

      <Navbar
        cart={cart}
        setCart={setCart}
        removeFromCart={removeFromCart}
      />

      <Hero />
      <BurgerHero />
      <About />

      <Menu addToCart={addToCart} />

      <BurgerAnimation />
      {/* <Gallery /> */}
      <Booking />
      {/* <News /> */}
      {/* <Contact /> */}
      <Footer />

    </div>
  )
}

export default App