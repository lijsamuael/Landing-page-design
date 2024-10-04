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
  const [isRelative, setIsRelative] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
    Aos.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const height = window.innerHeight;
      const width = window.innerWidth;
      console.log("height: ", height, "\nwidth: ", width);
      const viewportHeight = window.innerHeight / 4;
      const relativeHeight = (60 / 100) * window.innerHeight;

      setIsFixed(scrollPosition < viewportHeight);
      setIsScrolled(scrollPosition > 50);
      setIsRelative(scrollPosition >= viewportHeight);
      console.log("is relative again", scrollPosition > relativeHeight);
      console.log("is fixed ", scrollPosition < viewportHeight);
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
      <div className="bg-black min-h-[38vh] flex flex-col justify-between">
        <div>
          <NavBar />
        </div>
        <div
          className={`
           ${isFixed && !isRelative ? "fixed" : "relative"} 
           ${isRelative && !isFixed && "relative top-[40vh]"}
           top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center `}
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
        <div
          className={`hidden fixed bottom-10 duration-100 left-1/2 ${
            isScrolled ? "md:hidden" : "md:block"
          }`}
        >
          <ScrollDown />
        </div>
      </div>
      <div className="h-[1500px] pt-32   mx-auto w-full flex items-center justify-between  md:justify-around bg-[url('/public/bg.png')] bg-black">
        <div
          data-aos="fade-right"
          data-aos-delay={300}
          data-aos-offset={window.innerHeight / 1.2}
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex relative bottom-96 sm:bottom-72 mmd:bottom-96 xl:bottom-80 sm:right-12 md:right-72 mmd:right-64  lg:right-4 llg:right-0  w-2/6 md:w-4/12 flex-col gap-16 justify-start"
        >
          <div className="relative  bottom-8 right-12 md:right-0 md:bottom-16 flex flex-col-reverse  md:flex-row gap-8 items-end">
            <div className="hidden md:block relative md:top-8">
              <Todo task="Renew Car Insurance" />
            </div>
            <img
              width={500}
              className=" mt-4 md:mt-0 relative left-8 bottom-12 md:bottom-12 md:left-0  max-w-full h-auto"
              src="/images/Card.svg"
              alt="card"
            />
          </div>
          <div className="block md:hidden">
            <div className="  relative  right-10 top-1top-0 md:left-0">
              <Tag tag={"Book a flight"} />
            </div>
            <div className="  relative  right-16 top-8 md:top-0 ">
              <Tag tag={"Trip ideas"} />
            </div>
          </div>
          <div className="hidden md:flex flex-col  relative top-14 md:top-24  md:right-0 md:flex-row mt-4 md:mt-0 items-end gap-4 md:self-center">
            <UpcomingEvent
              event={"Kite Beach"}
              startTime={"10:00"}
              endTime={"14:00"}
            />
            <div className="relative left-32 md:left-0">
              <Tag tag={"Cafe nearby"} />
            </div>
          </div>
          <div className="relative top-24 md:top-0 md:self-end md:left-24 lg:left-0">
            <img
              className="min-w-full relative  top-16 sm:top-24 md:left-12  m:h-auto"
              src="/images/new tickets card.svg"
              alt="ticket"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="350"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          className=" w-2/6 md:w-2/12 relative bottom-64 xxxs:bottom-80 xxs:bottom-64 xs:bottom-72 md:bottom-48 mmd:bottom-24 llg:bottom-[300px]    sm:left-4 md:left-0   flex flex-col text-white text-center justify-center items-center logo-placer"
        >
          <div className=" text-[56px] relative   text-center md:text-[70px] md:whitespace-nowrap pt-4 md:pt-16">
            <p>Unlock Seamless</p>
            <p>Efficiency</p>
          </div>
          <button className="bg-white text-cetner py-4 px-12 font-semibold mt-8 drop-shadow-lg rounded-full whitespace-nowrap text-black">
            Join Waitlist
          </button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay={200}
          data-aos-offset={window.innerHeight / 1.2}
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className=" w-2/6 md:w-4/12 relative bottom-96 sm:bottom-72 mmd:bottom-96 xl:bottom-80  flex flex-col items-end gap-8  sm:left-0 md:left-24 mmd:left-0 llg:left-auto llg:right-12 xl:right-0 right-0 md:right-24    3xl:right-64"
        >
          <div className="hidden md:block md:self-center relative left-56  sm:bottom-24 md:bottom-0 md:left-0 ">
            <Todo task="Renew Car Insurance" />
          </div>
          <div className="relative top-2 sm:top-0 bottom-64 md:bottom-0 left-32 md:left-0">
            <UpcomingEvent
              event={"Kite Beach"}
              startTime={"10:00"}
              endTime={"14:00"}
            />
          </div>
          <div className=" hidden md:block relative left-12 top-12 md:top-0 md:left-0">
            <Tag tag={"Book a flight"} />
          </div>
          <div className=" hidden md:block relative top-8 lg:right-12 md:top-0 ">
            <Tag tag={"Trip ideas"} />
          </div>

          <img
            className="md:self-center max-w-full relative left-8 sm:left-24 xl:left-0 md:right-24 top-64 sm:top-36"
            src="/images/Reservation.svg"
            alt="reservation"
          />
        </div>
      </div>
    </div>
  );
}
