import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar({ cart, setCart }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    {
      code: "en",
      label: "EN",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 30"
          className="w-5 h-5"
        >
          <clipPath id="t">
            <path d="M0 0h60v30H0z" />
          </clipPath>
          <g clipPath="url(#t)">
            <path fill="#012169" d="M0 0h60v30H0z" />
            <path
              fill="#FFF"
              d="M0 0l60 30M60 0L0 30M30 0v30M0 15h60"
              strokeWidth="6"
            />
            <path
              fill="#C8102E"
              d="M0 0l60 30M60 0L0 30M30 0v30M0 15h60"
              strokeWidth="4"
            />
          </g>
        </svg>
      ),
    },
    {
      code: "ru",
      label: "RU",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 30"
          className="w-5 h-5"
        >
          <path fill="#fff" d="M0 0h60v10H0z" />
          <path fill="#0039A6" d="M0 10h60v10H0z" />
          <path fill="#D52B1E" d="M0 20h60v10H0z" />
        </svg>
      ),
    },
    {
      code: "lv",
      label: "LV",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 30"
          className="w-5 h-5"
        >
          <path fill="#8D1B3D" d="M0 0h60v10H0z" />
          <path fill="#fff" d="M0 10h60v10H0z" />
          <path fill="#8D1B3D" d="M0 20h60v10H0z" />
        </svg>
      ),
    },
  ];

  const currentLang = i18n.language.slice(0, 2);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  // Persist cart in localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("burger-cart") || "[]");
    if (savedCart.length) setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("burger-cart", JSON.stringify(cart));
  }, [cart]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Group cart items
  const groupedCart = cart.reduce((acc, item) => {
    const existing = acc.find((i) => i.name === item.name);
    if (existing) existing.qty += 1;
    else acc.push({ ...item, qty: 1 });
    return acc;
  }, []);

  const increaseQty = (name) => {
    setCart((prev) => [...prev, prev.find((i) => i.name === name)]);
  };

  const decreaseQty = (name) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.name === name);
      if (idx !== -1) {
        const copy = [...prev];
        copy.splice(idx, 1);
        return copy;
      }
      return prev;
    });
  };

  const handleCheckout = () => {
    console.log({ customer: userInfo, items: groupedCart });
    alert("Order placed successfully!");
    setCart([]);
    localStorage.removeItem("burger-cart");
    setCheckoutOpen(false);
    setUserInfo({ name: "", phone: "", email: "" });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
          <h1 className="text-xl sm:text-2xl font-bold">BurgerLab</h1>

          {/* DESKTOP NAV */}
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

            {/* LANGUAGE */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-1 rounded"
              >
                {languages.find((l) => l.code === currentLang)?.flag}{" "}
                <span>{currentLang.toUpperCase()}</span>{" "}
                <ChevronDown size={16} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded shadow">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full flex gap-1 items-center px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      {lang.flag} {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE CART + MOBILE */}
          <div className="flex items-center gap-4">
            {/* CART */}
            <div className="relative">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="relative hover:text-orange-500 transition"
              >
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>

              {cartOpen && (
                <div className="absolute right-0 mt-4 md:w-80 lg:w-80 sm:w-80 bg-white border rounded-xl shadow-lg p-4">
                  <h3 className="font-semibold mb-3">Cart</h3>
                  {groupedCart.length === 0 ? (
                    <p className="text-sm text-gray-500">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-3 max-h-56 overflow-y-auto">
                        {groupedCart.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center gap-3">
                              <div className="grid grid-cols-2 justify-content-between gap-3">
                                
                                <div className="flex items-center gap-3">
                                  <img
                                    src={item.img}
                                    className="w-10 h-10 object-contain"
                                  />
                                  <div>
                                    <p className="text-sm font-medium">
                                      {item.name}
                                    </p>
                                    <p className="text-orange-500 text-sm">
                                      ${item.price}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center justify-end gap-2 mt-1">
                                  <button
                                    onClick={() => decreaseQty(item.name)}
                                    className="px-2 border rounded"
                                  >
                                    -
                                  </button>
                                  <span>{item.qty}</span>
                                  <button
                                    onClick={() => increaseQty(item.name)}
                                    className="px-2 border rounded"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between font-semibold mt-4 mb-4">
                        <span>Total</span>
                        <span>
                          $
                          {groupedCart.reduce(
                            (sum, i) => sum + i.price * i.qty,
                            0,
                          )}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          setCartOpen(false);
                          setCheckoutOpen(true);
                        }}
                        className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition"
                      >
                        Checkout
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* MOBILE MENU */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
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
                className={`px-3 py-1 border rounded flex items-center gap-1 ${currentLang === lang.code ? "bg-black text-white" : ""}`}
              >
                {lang.flag} <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* CHECKOUT MODAL */}
      {checkoutOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-[400px] relative">
            <button
              onClick={() => setCheckoutOpen(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X size={22} />
            </button>
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="border p-2 w-full mb-3 rounded"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Phone"
              className="border p-2 w-full mb-3 rounded"
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
            <button
              onClick={handleCheckout}
              className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </>
  );
}
