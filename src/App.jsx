import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import BurgerAnimation from "./components/BurgerAnimation";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white text-black">
      <Navbar cart={cart} setCart={setCart} removeFromCart={removeFromCart} />
      <Hero />
      <About />
      <Menu addToCart={addToCart} />
      <BurgerAnimation />
      {/* <Gallery /> */}
      <Booking />
      <News />
      <Footer />
    </div>
  );
}

export default App;