import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import HeroImg from "../assets/images/heroBg.jpg";
import LeftGlove from "../assets/images/leftSide.png";
import RightGlove from "../assets/images/rightSide.png";
import BigBurger from '../assets/images/burger-buns-hero.png';
import { main } from "framer-motion/client";

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
    <main>
      <section className="relative h-screen bg-white flex items-center justify-center text-center overflow-hidden">

        {/* Left Glove */}
        <motion.img
          src={LeftGlove}
          alt="Left Glove"
          className="hidden sm:block absolute left-0 top-1/2 w-[400px]"
          style={{ y: "-50%" }}
          animate={leftControls}
        />

        {/* Right Glove */}
        <motion.img
          src={RightGlove}
          alt="Right Glove"
          className="hidden sm:block absolute right-0 top-1/2 w-[400px]"
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
            className="text-4xl foodFont sm:text-5xl lg:text-7xl mb-6 text-gray-900"
          >
            Champions Food
          </motion.h1>

          <motion.a
            href="#menu"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group inline-flex items-center gap-3 bg-orange-100 text-orange-500 border-2 border-orange-500 rounded-full px-8 py-3 font-semibold hover:bg-orange-200 transition-all duration-300"
          >
            Explore Menu

            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </motion.a>
        </motion.div>
      </section>
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#fff"
          d="M0,96L120,90.7C240,85,480,75,720,69.3C960,64,1200,64,1320,64L1440,64L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
        />
      </svg>
    </main>
  );
}