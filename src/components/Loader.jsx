import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-gray-700 font-semibold tracking-wide">
          Loading The Champions Food LV...
        </p>
      </motion.div>
    </div>
  );
}