import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FloatingTextField from "../TextField";

export default function WaitList() {
  const [countries, setCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Select a country",
    flag: null,
  });
  useEffect(() => {
    async function fetchCountries() {
      try {
        console.log("fetching countries");
        const response = await axios.get("https://restcountries.com/v3.1/all");
        console.log("response", response.data);
        setCountries(response.data);
      } catch (error) {
        console.log("error fetching countries", error);
      }
    }

    fetchCountries();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country) => {
    setSelectedCountry({ name: country.name.common, flag: country.flags.svg });
    setIsOpen(false);
  };

  return (
    <div
      id="waitlists"
      className="text-white py-32 bg-cover px-8 bg-[url('/waitlist.png')]"
    >
      <div className="max-w-[600px]">
        <p className="text-[32px] md:text-[80px]">
          Join the Fluid AI Waitlist Today!
        </p>
        <div className="flex flex-col pt-16 md:w-[459px] w-full">
          <FloatingTextField
            label="Name"
            inputType="text"
            className="border-b border-white/40 text-white-40 bg-transparent"
            onChange={() => {}}
          />
          <FloatingTextField
            label="Email"
            inputType="email"
            className="border-b border-white/40 text-white-40 bg-transparent"
            onChange={() => {}}
          />
          <div className="relative inline-block">
            <div
              className="bg-transparent border-b rounded-[4px] border-white/40 md:w-[459px] py-2 cursor-pointer text-white flex items-center justify-between"
              onClick={toggleDropdown}
            >
              <div className="flex items-center gap-2">
                {selectedCountry.flag && (
                  <img
                    src={selectedCountry.flag}
                    alt="Selected flag"
                    className="w-6 h-6 rounded-full"
                  />
                )}
                <span>{selectedCountry.name}</span>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {isOpen && (
              <ul className=" custom-scrollbar absolute z-10 bg-black md:w-[459px] max-h-60 overflow-y-auto border border-white/40">
                {countries &&
                  countries.map((item, index) => (
                    <li
                      className="flex items-center gap-2 p-2 hover:bg-gray-700 text-white cursor-pointer"
                      key={index}
                      onClick={() => handleSelect(item)}
                    >
                      <img
                        src={item.flags.svg}
                        alt={`${item.name.common} flag`}
                        className="rounded-full w-6 h-6 bg-cover"
                      />
                      <p>{item.name.common}</p>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
