import { useState } from "react";
import { motion } from "framer-motion";

const burgers = [
  { img: "/src/assets/images/burger.png", name: "Classic Burger", price: 9 },
  { img: "/src/assets/images/burger.png", name: "Cheese Burger", price: 10 },
  { img: "/src/assets/images/burger.png", name: "Double Smash", price: 12 },
  { img: "/src/assets/images/burger.png", name: "Bacon Deluxe", price: 13 },
  { img: "/src/assets/images/burger.png", name: "Classic Burger", price: 9 },
  { img: "/src/assets/images/burger.png", name: "Cheese Burger", price: 10 },
  { img: "/src/assets/images/burger.png", name: "Double Smash", price: 12 },
  { img: "/src/assets/images/burger.png", name: "Bacon Deluxe", price: 13 },
];

export default function Menu({ addToCart }) {
  return (
    <section
      id="menu"
      className="py-16 sm:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-center text-4xl font-bold mb-16">Our Menu</h2>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {burgers.map((burger, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow flex flex-col items-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={burger.img}
              alt={burger.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{burger.name}</h3>
            <p className="text-orange-500 text-lg font-semibold">
              ${burger.price}
            </p>

            <button
              onClick={() => addToCart(burger)}
              className="mt-4 text-sm px-6 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-100 transition"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
