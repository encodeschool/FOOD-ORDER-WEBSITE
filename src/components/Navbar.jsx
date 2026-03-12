import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";
import MenuComponent from "./Menu";

export default function Navbar({ cart, setCart, removeFromCart }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", phone: "", email: "" });

  const { t, i18n } = useTranslation();

  const navItems = [
    { id: "about", label: t("nav.about") },
    { id: "menu", label: t("nav.menu") },
    { id: "gallery", label: t("nav.gallery") },
    { id: "booking", label: t("nav.booking") },
    { id: "news", label: t("nav.news") },
    { id: "contact", label: t("nav.contact") },
  ];

  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "lv", label: "LV" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  // Track scroll to toggle background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Checkout submit
  const handleCheckout = () => {
    console.log("Order info:", userInfo, "Items:", cart);
    alert("Order placed successfully!");
    setCart([]);
    setCheckoutOpen(false);
    setUserInfo({ name: "", phone: "", email: "" });
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
          <h1 className="text-xl sm:text-2xl font-bold">BurgerLab</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-orange-500 transition"
              >
                {item.label}
              </Link>
            ))}

            {/* Cart Icon */}
            <div className="relative">
              <button
                onClick={() => setCheckoutOpen(true)}
                className="relative"
              >
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-1 rounded"
              >
                {i18n.language.toUpperCase()}
                <ChevronDown size={16} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded shadow">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${open ? "max-h-[500px]" : "max-h-0"}`}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex gap-4 px-6 py-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-3 py-1 border rounded ${i18n.language === lang.code ? "bg-black text-white" : ""}`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Pass addToCart to Menu */}

      {/* Checkout Modal */}
      {checkoutOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-[420px] max-w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setCheckoutOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {/* Cart Items */}
                <div className="mb-4 max-h-56 overflow-y-auto space-y-3">
                  {cart.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.img}
                          className="w-12 h-12 object-contain"
                        />

                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-orange-500">${item.price}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(i)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="flex justify-between font-semibold mb-6">
                  <span>Total</span>
                  <span>
                    ${cart.reduce((sum, item) => sum + item.price, 0)}
                  </span>
                </div>

                {/* Customer Info */}
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border p-2 w-full mb-2 rounded"
                  value={userInfo.name}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Phone"
                  className="border p-2 w-full mb-2 rounded"
                  value={userInfo.phone}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 w-full mb-4 rounded"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition"
                >
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
