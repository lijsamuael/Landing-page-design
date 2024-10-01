import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("is open?", !isOpen);
  };

  return (
    <nav className="">
      <div className="text-white flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          className="flex md:hidden items-center cursor-pointer"
          onClick={toggleMenu}
        >
          <img src="/Frame.png" alt="Open/Close" />
        </div>

        <ul className="md:flex gap-16 hidden">
          <li className="hover:underline">
            <a href="#features">Our Features</a>
          </li>
          <li className="">
            <a href="#areas">Areas</a>
          </li>
        </ul>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex gap-16 justify-center items-center">
            <li>
              <a
                href="#faqs"
                className="block py-2 px-3 text-white rounded"
                aria-current="page"
              >
                FAQs
              </a>
            </li>
            <li>
              <a href="#waitlists" className="block py-2 px-3 text-white rounded">
                The Waitlist
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col p-4">
          <li>
            <a href="#faqs" className="block py-2 px-3 text-white rounded">
              FAQs
            </a>
          </li>
          <li>
            <a href="#waitlists" className="block py-2 px-3 text-white rounded">
              The Waitlist
            </a>
          </li>
          <li>
            <a href="#features" className="block py-2 px-3 text-white rounded">
              Our Features
            </a>
          </li>
          <li>
            <a href="#areas" className="block py-2 px-3 text-white rounded">
              Areas
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
