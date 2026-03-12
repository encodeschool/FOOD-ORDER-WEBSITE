import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BunTop from "../assets/images/bun-top.png";
import Lettuce from "../assets/images/lettuce.png";
import Cheese from "../assets/images/cheese.png";
import Patty from "../assets/images/patty.png";
import BunBottom from "../assets/images/bun-bottom.png";

gsap.registerPlugin(ScrollTrigger);

export default function BurgerAnimation() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
        }
      });

      // text animation
      tl.from(".burger-text", {
        x: -200,
        opacity: 0,
        duration: 1
      });

      // ingredients fly in from different directions

      tl.from(".bun-bottom", {
        y: 400,
        x: 100,
        opacity: 0,
        duration: 1
      });

      tl.from(".lettuce", {
        x: -300,
        rotate: 20,
        opacity: 0,
        duration: 1
      });

      tl.from(".patty", {
        y: -300,
        x: -200,
        rotate: 40,
        opacity: 0,
        duration: 1
      });

      tl.from(".cheese", {
        x: 300,
        rotate: -30,
        opacity: 0,
        duration: 1
      });

      tl.from(".bun-top", {
        y: -400,
        x: 150,
        opacity: 0,
        duration: 1
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
<section ref={sectionRef} className="burger-section py-40 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-6">

        {/* TEXT LEFT */}

        <div className="burger-text">
          <h2 className="text-6xl font-bold mb-6">
            Build the Perfect Burger
          </h2>

          <p className="text-gray-600 text-lg">
            Fresh ingredients come together to create the ultimate taste
            experience.
          </p>
        </div>

        {/* BURGER RIGHT */}

        <div className="relative w-[320px] h-[400px] mx-auto">

          <img
            src={BunBottom}
            className="bun-bottom absolute bottom-0 left-1/2 -translate-x-1/2"
          />

          <img
            src={Lettuce}
            className="lettuce absolute bottom-[-50px] left-1/2 -translate-x-1/2"
          />

          <img
            src={Patty}
            className="patty absolute bottom-[50px] left-1/2 -translate-x-1/2"
          />

          <img
            src={Cheese}
            className="cheese absolute bottom-[70px] left-1/2 -translate-x-1/2"
          />

          <img
            src={BunTop}
            className="bun-top absolute bottom-[180px] left-1/2 -translate-x-1/2"
          />

        </div>

      </div>

    </section>
  );
}