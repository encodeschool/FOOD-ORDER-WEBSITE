import { motion } from "framer-motion"
import HeroImg from "../assets/images/heroBg.jpg" // your hero image

export default function Hero() {

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Image + Gradient Overlay */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${HeroImg})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-3xl">

        <motion.h1
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.5}}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
        >
          The Perfect Burger
        </motion.h1>

        <motion.p
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8"
        >
          Crafted with fresh ingredients and passion
        </motion.p>

        <motion.button
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="bg-orange-100 text-orange-500 border-2 border-orange-500 rounded-full px-8 py-3 font-semibold hover:bg-orange-200 hover:scale-105 transition-all duration-300"
        >
          Explore Menu
        </motion.button>

      </div>

    </section>
  )
}