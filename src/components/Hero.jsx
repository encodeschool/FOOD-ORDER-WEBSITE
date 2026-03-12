import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import HeroImg from "../assets/images/heroBg.jpg";
import LeftGlove from "../assets/images/leftSide.png";
import RightGlove from "../assets/images/rightSide.png";

export default function Hero() {
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    async function sequence() {
      // Start gloves off-screen
      await Promise.all([
        leftControls.start({ x: "-100vw", opacity: 0 }),
        rightControls.start({ x: "100vw", opacity: 0 }),
      ]);

      // Animate gloves into the center
      await Promise.all([
        leftControls.start({ x: "0%", opacity: 1, transition: { duration: 1 } }),
        rightControls.start({ x: "0%", opacity: 1, transition: { duration: 1 } }),
      ]);

      // Text “smash” effect
      textControls.start({
        scale: [1, 1.2, 1],
        opacity: [1, 0.8, 1],
        transition: { duration: 0.4 },
      });

      // Move gloves slightly past text
      await Promise.all([
        leftControls.start({ x: "-20%", transition: { duration: 0.5 } }),
        rightControls.start({ x: "20%", transition: { duration: 0.5 } }),
      ]);

      // Optionally, move them back to sides
      await Promise.all([
        leftControls.start({ x: "-10%", transition: { duration: 0.5 } }),
        rightControls.start({ x: "10%", transition: { duration: 0.5 } }),
      ]);
    }

    sequence();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-transparent to-white">

      {/* Left Glove */}
      <motion.img
        src={LeftGlove}
        alt="Left Glove"
        className="absolute left-0 top-1/2 w-[550px]"
        style={{ y: "-50%" }}
        animate={leftControls}
      />

      {/* Right Glove */}
      <motion.img
        src={RightGlove}
        alt="Right Glove"
        className="absolute right-0 top-1/2 w-[550px]"
        style={{ y: "-50%" }}
        animate={rightControls}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-3xl"
        animate={textControls}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl foodFont sm:text-5xl lg:text-8xl mb-6 text-gray-900"
        >
          The Champions Food
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8"
        >
          Crafted with fresh ingredients and passion
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-orange-100 text-orange-500 border-2 border-orange-500 rounded-full px-8 py-3 font-semibold hover:bg-orange-200 hover:scale-105 transition-all duration-300"
        >
          Explore Menu
        </motion.button>
      </motion.div>
    </section>
  );
}