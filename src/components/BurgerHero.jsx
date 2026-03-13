import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BurgerHero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const moveLeft = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const moveRight = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotateRight = useTransform(scrollYProgress, [0, 1], [90, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f9f4e7] py-32 overflow-hidden"
    >

      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,0 1080,160 1440,80 L1440,0 L0,0 Z"
            className="fill-white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-32 relative z-10">

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/burger-buns/all-year-round.svg"
              className="mb-8 max-w-[280px]"
            />
            <p className="text-lg text-black">
              Burgers can be eaten any time of the year, for weekends and
              weekdays so you’ve got to make sure to always have some burger
              buns on hand.
            </p>
          </div>

          <motion.div
            style={{ x: moveLeft, rotate: rotateLeft }}
            className="relative"
          >
            <img
              src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/background-01.png"
              className="absolute inset-0 w-full"
            />
            <img
              src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/burger-buns/burger-buns-01.png"
              className="relative w-full"
            />
          </motion.div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ x: moveRight, rotate: rotateRight }}
            className="relative"
          >
            <img
              src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/background-02.png"
              className="absolute inset-0 w-full"
            />
            <img
              src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/burger-buns/burger-buns-02.png"
              className="relative w-full"
            />
          </motion.div>

          <div>
            <h2 className="text-4xl text-black font-bold mb-6">
              All About That Base
            </h2>
            <p className="text-lg text-black">
              We’ve created our range of burger buns to offer something for
              everyone. They’re cleverly packed to last longer.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl text-black font-bold mb-6">
              We’re On A Roll!
            </h2>
            <p className="text-lg text-black">
              When you fancy whipping up some takeaway-style burgers,
              creating a quick dinner or coming up with something new,
              Baker Street’s burger buns are there for you!
            </p>
          </div>

          <motion.div
            style={{ x: moveLeft, rotate: rotateLeft }}
            className="relative"
          >
            <img
              src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/background-03.png"
              className="absolute inset-0 w-full"
            />
            <img
              src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/burger-buns/burger-buns-03.png"
              className="relative w-full"
            />
          </motion.div>
        </div>

      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,120 960,0 1440,100 L1440,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </div>

    </section>
  );
}