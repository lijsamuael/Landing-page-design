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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getLogoSize = () => {
    if (windowWidth < 738) {
      return isScrolled
        ? { width: "170px", height: "36px" }
        : { width: "240px", height: "50px" };
    }
    return isScrolled
      ? { width: "170px", height: "36px" }
      : { width: "705px", height: "150px" };
  };

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
            style={getLogoSize()}
            initial={getLogoSize()}
            animate={getLogoSize()}
            transition={{ duration: 0.4 }}
          />
        </div>
        <ScrollDown />
      </div>
      <div className="h-[1500px]   mx-auto w-full flex items-center justify-between  md:justify-around bg-[url('/public/bg.png')] bg-black">
        <div className="flex w-4/12 flex-col gap-16 justify-start">
          <div
            data-aos="fade-right"
            className="flex flex-col  md:flex-row gap-8 items-end"
          >
            <Todo task="Renew Car Insurance" />
            <img
              className="relative bottom-8 mt-4 md:mt-0 "
              src="/public/Card.png"
              alt="card"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay={300}
            className="flex flex-col relative right-16 md:right-0 md:flex-row mt-4 md:mt-0 items-end gap-4 md:self-center"
          >
            <UpcomingEvent
              event={"Kite Beach"}
              startTime={"10:00"}
              endTime={"14:00"}
            />
            <Tag tag={"Cafe nearby"} />
          </div>
          <div data-aos="fade-right" className="md:self-end">
            <img src="/ticket.png" alt="ticket" />
          </div>
        </div>
        <div className="md:w-2/12   flex flex-col text-white text-center justify-center items-center logo-placer">
          <motion.img
            width={170}
            height={36}
            src="/public/logo.png"
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: !isFixed ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
          <p className=" text-[56px] md:text-[80px] pt-16">
            Unlock Seamless Efficiency
          </p>
          <button className="bg-white text-cetner py-4 px-8 mt-8 drop-shadow-lg rounded-full whitespace-nowrap text-black">
            Join Waitlist
          </button>
        </div>
        <div className="w-4/12 flex flex-col items-end gap-8 ">
          <div
            data-aos="fade-left"
            className="md:self-center relative left-24 md:left-0"
          >
            <Todo task="Renew Car Insurance" />
          </div>
          <div data-aos="fade-left" className="relative left-36 md:left-0">
            <UpcomingEvent
              event={"Kite Beach"}
              startTime={"10:00"}
              endTime={"14:00"}
            />
          </div>
          <div className="relative left-24 md:left-0">
            <Tag data-aos="fade-left" tag={"Book a flight"} />
            <Tag data-aos="fade-left" tag={"Trip ideas"} />
          </div>
          <img
            data-aos="fade-left"
            className="md:self-center relative top-24 md:top-0"
            src="/Reservation.png"
            alt="reservation"
          />
        </div>
      </div>
    </div>
  );
}
