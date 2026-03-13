import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LinksSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lag1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const lag2 = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <section ref={ref} className="bg-white mt-[-50px] mb-[-150px]">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex flex-wrap justify-around items-center relative -translate-y-8 z-10">

          {/* PRODUCTS */}
          <motion.a
            href="/products"
            style={{ y: lag1 }}
            whileHover={{ scale: 1.05 }}
            className="block w-[150px] sm:w-[200px] mb-6"
          >
            <img
              src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/links-our-full-range.svg"
              className="w-full -rotate-12"
              alt="Our full range"
            />
          </motion.a>

          {/* BLOG */}
          <motion.a
            href="/blog"
            style={{ y: lag2 }}
            whileHover={{ scale: 1.05 }}
            className="block w-[150px] sm:w-[200px] mb-6"
          >
            <img
              src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/links-visit-our-blog.svg"
              className="w-full"
              alt="Visit our blog"
            />
          </motion.a>

          {/* SOCIAL */}
          <motion.div
            style={{ y: lag1 }}
            className="relative w-[150px] sm:w-[230px] flex flex-col items-center"
          >
            <img
              src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/links-follow-us.svg"
              className="w-full max-w-[180px] rotate-10 mb-4"
              alt="Follow us"
            />

            <motion.a
              whileHover={{ scale: 1.1 }}
              href=""
              target="_blank"
              className="absolute bottom-[-5px] sm:bottom-[-10px] left-[-20px] sm:left-[-20px] w-[70px] sm:w-[90px]"
            >
              <img
                src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/links-follow-us-tiktok.svg"
                className="w-full"
              />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href=""
              target="_blank"
              className="absolute bottom-[-30px] sm:bottom-[-50px] left-[55px] sm:left-[75px] w-[70px] sm:w-[90px]"
            >
              <img
                src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/links-follow-us-facebook.svg"
                className="w-full"
              />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href=""
              target="_blank"
              className="absolute bottom-[20px] sm:bottom-[30px] left-[120px] sm:left-[150px] w-[70px] sm:w-[90px]"
            >
              <img
                src="https://lovebakerstreet.com/app/themes/bakerstreet-theme/assets/gfx/product-cat/links-follow-us-instagram.svg"
                className="w-full"
              />
            </motion.a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}