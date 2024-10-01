import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "../NavBar";
import ScrollDown from "../ScrollDown";
import Feature from "../Feature";
import UpcomingEvent from "../UpcomingEvent";
import Todo from "../Todo";
import Tag from "../Tag";
import Aos from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported

export default function Heading() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [isSecondLogoVisible, setIsSecondLogoVisible] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
    Aos.refresh(); 
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      setIsFixed(scrollPosition < viewportHeight);
      setIsScrolled(scrollPosition > 50);

      // Implement the visibility logic for the second logo here if necessary
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="bg-black min-h-screen flex flex-col justify-between">
        <NavBar />
        <div
          className={`${
            isFixed ? "fixed" : "relative"
          } inset-0 flex justify-center items-center z-50`}
        >
          <motion.img
            src="/public/logo.png"
            alt="logo"
            className="transition-all"
            style={{
              width: isScrolled ? "170px" : "705px",
              height: isScrolled ? "36px" : "150px",
            }}
            initial={{ width: "705px", height: "150px" }}
            animate={{
              width: isScrolled ? "170px" : "705px",
              height: isScrolled ? "36px" : "150px",
              opacity: isSecondLogoVisible ? 0 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <ScrollDown />
      </div>
      <div className="h-[1500px] mx-auto w-full flex items-center justify-around bg-[url('/public/bg.png')] bg-black">
        <div className="flex w-4/12 flex-col gap-16 justify-start">
          <div data-aos="fade-right" className="flex gap-8 items-end">
            <Todo task="Renew Car Insurance" />
            <img
              className="relative bottom-8"
              src="/public/Card.png"
              alt="card"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay={300}
            className="flex items-end gap-4 self-center"
          >
            <UpcomingEvent
              event={"Kite Beach"}
              startTime={"10:00"}
              endTime={"14:00"}
            />
            <Tag tag={"Cafe nearby"} />
          </div>
          <div data-aos="fade-right" className="self-end">
            <img src="/ticket.png" alt="ticket" />
          </div>
        </div>
        <div className="w-2/12 relative bottom-[65px] flex flex-col text-white text-center justify-center items-center logo-placer">
          <motion.img
            width={170}
            height={36}
            src="/public/logo.png"
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: !isFixed ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
          <p className="text-[80px] pt-16">Unlock Seamless Efficiency</p>
        </div>
        <div className="w-4/12 flex flex-col items-end gap-8">
          <div data-aos="fade-left" className="self-center">
            <Todo task="Renew Car Insurance" />
          </div>
          <div data-aos="fade-left">
            <UpcomingEvent
              event={"Kite Beach"}
              startTime={"10:00"}
              endTime={"14:00"}
            />
          </div>
          <Tag data-aos="fade-left" tag={"Book a flight"} />
          <Tag data-aos="fade-left" tag={"Trip ideas"} />
          <img
            data-aos="fade-left"
            className="self-center"
            src="/Reservation.png"
            alt="reservation"
          />
        </div>
      </div>
    </div>
  );
}
