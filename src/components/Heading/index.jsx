import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import NavBar from "../NavBar";
import ScrollDown from "../ScrollDown";
import UpcomingEvent from "../UpcomingEvent";
import Todo from "../Todo";
import Tag from "../Tag";
import Aos from "aos";

import "aos/dist/aos.css"; // Ensure AOS CSS is imported

const getLogoSize = (windowWidth, isScrolled) => {
  if (windowWidth < 738) {
    return isScrolled
      ? { width: "170px", height: "36px" }
      : { width: "240px", height: "50px" };
  }
  return isScrolled
    ? { width: "170px", height: "36px" }
    : { width: "705px", height: "150px" };
};
export default function Heading() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isFixed, setIsFixed] = useState(true);
  const [isRelative, setIsRelative] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bgPositionY, setBgPositionY] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
    Aos.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const height = window.innerHeight;
      const width = window.innerWidth;

      const scrollPos = window.scrollY;
      const newYPosition = scrollPos * 0.5; // Adjust this value for faster/slower movement
      setBgPositionY(newYPosition);

      let viewportHeight = window.innerHeight / 10;

      setIsFixed(scrollPosition < viewportHeight);
      setIsScrolled(scrollPosition > 50);

      setIsRelative(scrollPosition >= viewportHeight);
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

  const memoizedLogoSize = useMemo(() => {
    return getLogoSize(windowWidth, isScrolled);
  }, [windowWidth, isScrolled]);

  const getTopPosition = () => {
    return "relative top-[30vh]";
  };

  return (
    <div>
      <div className="bg-black h-[300px] flex flex-col justify-between">
        <div>
          <NavBar />
        </div>
        <div
          className={`
    ${
      isFixed && !isRelative
        ? "fixed justify-center"
        : "relative justify-between"
    }
    ${isRelative && !isFixed && getTopPosition()}
    top-0 left-0 right-0 bottom-0 z-10 flex  w-full items-center
  `}
        >
          {isRelative && (
            <motion.div
              initial={{ opacity: 0, translateX: -100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{
                delay: 1,
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex  w-2/6 lg:w-4/12 relative  right-24 lg:right-0  flex-col gap-16 justify-start"
            >
              <div className="relative bottom-8 left-12 sm:left-0 sm:bottom-8 flex flex-col-reverse sm:flex-row gap-8 items-end">
                <div className="hidden sm:block relative sm:top-8">
                  <Todo task="Renew Car Insurance" />
                </div>
                <img
                  width={200}
                  className="mt-4 sm:mt-0 relative left-8 bottom-12  sm:left-0 max-w-full h-auto"
                  src="/Card.png"
                  alt="card"
                />
              </div>
              <div className="block relative left-16 sm:hidden">
                <div className="relative right-10 top-1top-0 sm:left-0">
                  <Tag tag={"Book a flight"} />
                </div>
                <div className="relative right-16 top-8 sm:top-0">
                  <Tag tag={"Trip ideas"} />
                </div>
              </div>
              <div className="hidden sm:flex flex-row mt-4 items-end gap-4 sm:self-center">
                <UpcomingEvent
                  event={"Kite Beach"}
                  startTime={"10:00"}
                  endTime={"14:00"}
                />
                <div className="relative left-32 sm:left-0">
                  <Tag tag={"Café nearby"} />
                </div>
              </div>
              <div className="relative top-6 sm:top-0 sm:self-end sm:left-24 lg:left-0">
                <img
                  className="min-w-full relative top-16 sm:top-15 sm:left-12 m:h-auto"
                  src="ticket.png"
                  alt="ticket"
                />
              </div>
            </motion.div>
          )}

          <div className="flex flex-col  w-4/12   justify-center items-center">
            <motion.img
              src="/logo.svg"
              alt="logo"
              className="max-w-full h-auto" // Use max-w-full to limit width, h-auto to maintain aspect ratio
              style={{
                ...memoizedLogoSize,
                willChange: "width, height",
                objectFit: "contain", // Ensures the logo maintains its aspect ratio
              }}
              initial={getLogoSize(windowWidth, false)}
              animate={memoizedLogoSize}
              layout
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20, // Higher to prevent bouncing
                mass: 1,
                duration: 0.8,
                ease: "easeInOut",
              }}
            />

            <div
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className={` ${
                isFixed ? "hidden" : "flex"
              } flex flex-col justify-center items-center gap-4`}
            >
              <div className="text-[56px] relative  text-white   text-center sm:text-[70px] sm:whitespace-nowrap pt-4 sm:pt-16">
                <p>Unlock Seamless</p>
                <p>Efficiency</p>
              </div>
              <button
                className="bg-white text-black text-2xl justify-center font-semibold flex items-center  p-4 rounded-[28px] w-[167px]   h-[52px] shadow-[0_0_15px_2px_rgba(255,255,255,1)] mt-2 sm:mt-0"
                // onClick={() => {
                //   document
                //     .getElementById("waitlists")
                //     .scrollIntoView({ behavior: "smooth" });
                // }}
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {isRelative && (
            <motion.div
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{
                delay: 1,
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="w-2/6 lg:w-4/12 relative  left-24 lg:left-0  flex flex-col justify-start items-end gap-8 top-0"
            >
              <div className=" sm:self-center relative left-40  xxxs:left-32 xs:left-16   sm:left-0 sm:bottom-0">
                <Todo task="Renew Car Insurance" />
              </div>
              <div className="relative top-2 sm:top-0 left-20  xxxs:left-12 xs:left-0">
                <UpcomingEvent
                  event={"Kite Beach"}
                  startTime={"10:00"}
                  endTime={"14:00"}
                />
              </div>
              <div className="hidden sm:block relative left-12 top-12 sm:top-0 sm:left-0">
                <Tag tag={"Book a flight"} />
              </div>
              <div className="hidden sm:block relative top-8 lg:right-12 sm:top-0">
                <Tag tag={"Trip ideas"} />
              </div>

              <img
                className="sm:self-center max-w-full relative right-8   sm:right-24 top-12 sm:top-0"
                src="/Reservation.png"
                alt="reservation"
              />
            </motion.div>
          )}
        </div>

        <div
          className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity ease-in-out duration-500 ${
            isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <ScrollDown />
        </div>
      </div>
      <div
        id="hero"
        className="h-[1500px] pt-32   mx-auto w-full flex items-center justify-between  sm:justify-around bg-[url('/bg.svg')] bg-no-repeat bg-cover bg-center "
        style={{
          backgroundPositionY: `-${bgPositionY / 2}px`,
        }}
      ></div>
    </div>
  );
}
