import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Menu from "./components/Menu"
import BurgerAnimation from "./components/BurgerAnimation"
import Gallery from "./components/Gallery"
import News from "./components/News"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import BurgerHero from "./components/BurgerHero"
import LinksSection from './components/LinksSection'
import Loader from './components/Loader'

function App() {

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // fallback safety
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

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
    <>
      {loading && <Loader />}

      {!loading && (
        <div className="bg-white text-black">
          <Navbar
            cart={cart}
            setCart={setCart}
            removeFromCart={removeFromCart}
          />

          <Hero />
          <BurgerHero />
          <LinksSection />
          <About />
          <Menu addToCart={addToCart} />
          <BurgerAnimation />
          {/* <Gallery /> */}
          <Contacts />
          {/* <News /> */}
          <Footer />
        </div>
      )}
    </>
  )
}

export default App