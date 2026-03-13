import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contacts() {
  return (
    <section id="booking" className="bg-[#f9f4e7] relative">
      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[120px]" preserveAspectRatio="none">
          <path d="M0,80 C360,0 1080,160 1440,80 L1440,0 L0,0 Z" className="fill-white" />
        </svg>
      </div>
      <div className="py-16 sm:py-24 grid sm:grid-cols-1 sm:text-center lg:text-left lg:grid-cols-2 items-center gap-8 justify-content-center lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div>
          <h2 className="text-4xl font-bold mb-6 foodFont">Contact Us</h2>
          <p>burgerlab@email.com</p>
          <p>+1 234 567 890</p>
          <p>New York, USA</p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
        <div>
          <form className="max-w-xl mx-auto grid gap-6">
            <input placeholder="Name" className="border p-3 rounded" />

            <input placeholder="Phone" className="border p-3 rounded" />

            <input type="date" className="border p-3 rounded" />

            <textarea placeholder="Message" className="border p-3 rounded" />

            <button className="bg-black text-white py-3 rounded">Reserve</button>
          </form>
        </div>
      </div>
      {/* BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[80px]" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,0 1440,100 L1440,120 L0,120 Z" className="fill-white" />
        </svg>
      </div>
    </section>
  );
}
