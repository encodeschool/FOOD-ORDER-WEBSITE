import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import TruckIm from "../assets/images/truck.png"

export default function About(){

  const { t } = useTranslation()

  return(

    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
    >

      <motion.img
        src={TruckIm}
        alt="Burger"
        initial={{opacity:0,x:-80}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.7}}
        viewport={{once:true}}
        className="w-full object-contain rounded-2xl"
      />

      <motion.div
        initial={{opacity:0,x:80}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.7}}
        viewport={{once:true}}
        className="text-center md:text-left"
      >

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">

          {t("about_title")}

        </h2>

        <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">

          {t("about_text")}

        </p>

        <button
          className="bg-orange-100 text-orange-500 border-2 border-orange-500 rounded-full px-8 py-3 font-semibold hover:bg-orange-200 hover:scale-105 transition-all duration-300"
        >
          Explore Menu
        </button>

      </motion.div>

    </section>
  )
}