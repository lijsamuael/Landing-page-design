import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="z-50 relative top-0 left-0 right-0 bg-black">
      <div className="text-white flex flex-wrap items-center justify-end md:justify-between mx-auto p-4">
        <div
          className="flex md:hidden items-center cursor-pointer"
          onClick={toggleMenu}
        >
          {!isOpen ? (
            <img src="/Frame.png" alt="Open/Close" />
          ) : (
            <img src="/close.png" alt="Open/Close" />
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-16 transition-all duration-300 ease-in-out">
          <li className="hover:underline cursor-pointer">
            <a href="#features" onClick={(e) => handleLinkClick(e, "features")}>
              Our Features
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#areas" onClick={(e) => handleLinkClick(e, "areas")}>
              Areas
            </a>
          </li>
        </ul>

        <ul className="font-medium hidden md:flex gap-16 justify-center items-center transition-all duration-300 ease-in-out">
          <li>
            <a
              href="#faqs"
              className="block py-2 px-3 text-white rounded cursor-pointer"
              onClick={(e) => handleLinkClick(e, "faqs")}
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#waitlists"
              className="block py-2 px-3 text-white rounded cursor-pointer"
              onClick={(e) => handleLinkClick(e, "waitlists")}
            >
              The Waitlist
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      >
        <ul className="flex flex-col mt-8 items-center text-2xl p-4">
          <li>
            <a
              href="#faqs"
              className="block py-2 px-3 text-white rounded cursor-pointer transition-colors duration-200"
              onClick={(e) => handleLinkClick(e, "faqs")}
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#waitlists"
              className="block py-2 px-3 text-white rounded cursor-pointer transition-colors duration-200"
              onClick={(e) => handleLinkClick(e, "waitlists")}
            >
              The Waitlist
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="block py-2 px-3 text-white rounded cursor-pointer transition-colors duration-200"
              onClick={(e) => handleLinkClick(e, "features")}
            >
              Our Features
            </a>
          </li>
          <li>
            <a
              href="#areas"
              className="block py-2 px-3 text-white rounded cursor-pointer transition-colors duration-200"
              onClick={(e) => handleLinkClick(e, "areas")}
            >
              Areas
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
