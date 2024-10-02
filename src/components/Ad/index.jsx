import Aos from "aos";
import SideContent from "../SideContent";
import { useEffect } from "react";
import Iphone from "../Iphone";

export default function Ad() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
    Aos.refresh();
  }, []);
  return (
    <div
      id="features"
      className="flex justify-center flex-col items-center  text-white"
    >
      <p className="font-semibold text-lg opacity-50">Our Features</p>
      <p className="text-[32px] md:text-[80px] px-4 max-w-[900px] leading-none text-center pt-12">
        Fluid AI was born out of a desire to simplify and streamline modern life
      </p>
      <div className="pt-32 flex flex-col gap-16">
        <div
          data-aos="fade-right"
          className="flex flex-col-reverse md:flex-row items-center gap-24 "
        >
          <SideContent
            title={"Fluid AI: Simplify, Organize, and Acheive More"}
            desc={
              "n a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform"
            }
            step={"1/4"}
          />
          {/* <img width={380} height={780} src="/iPhone1.png" alt="iphone1" /> */}
          <video
            autoPlay
            muted
            className="w-[220px] h-[446px] md:w-[380px] md:h-[780px] drop-shadow-2xl border-2 border-white/50 rounded-[40px] shadow-inner"
            preload="auto"
            loop
            src="/videos/-7ce6-42b4-bcf1-77a08e332c6e"
          ></video>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col md:flex-row items-center gap-24 "
        >
          <video
            autoPlay
            muted
            className="w-[220px] h-[446px] md:w-[380px] md:h-[780px] drop-shadow-2xl border-2 border-white/50 rounded-[40px] shadow-inner"
            preload="auto"
            loop
            src="/videos/-93f8-4a44-8ffa-0c368ac8e9f8"
          ></video>

          <SideContent
            title={"Fluid AI: Simplify, Organize, and Acheive More"}
            desc={
              "n a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform"
            }
            step={"2/4"}
          />
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col-reverse md:flex-row items-center gap-24 "
        >
          <SideContent
            title={"Fluid AI: Simplify, Organize, and Acheive More"}
            desc={
              "n a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform"
            }
            step={"3/4"}
          />
          {/* <img width={380} height={780} src="/iPhone3.png" alt="iphone1" />
           */}
          <video
            autoPlay
            muted
            className="w-[220px] h-[446px] md:w-[380px] md:h-[780px] drop-shadow-2xl border-2 border-white/50 rounded-[40px] shadow-inner"
            preload="auto"
            loop
            src="/videos/-1990-460f-9519-8069f536813c"
          ></video>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col md:flex-row items-center gap-24 "
        >
          {/* <img width={380} height={780} src="/iPhone4.png" alt="iphone1" /> */}
          <video
            autoPlay
            muted
            className="w-[220px] h-[446px] md:w-[380px] md:h-[780px] drop-shadow-2xl border-2 border-white/50 rounded-[40px] shadow-inner"
            preload="auto"
            loop
            src="/videos/-7ce6-42b4-bcf1-77a08e332c6e"
          ></video>

          <SideContent
            title={"Fluid AI: Simplify, Organize, and Acheive More"}
            desc={
              "n a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform"
            }
            step={"4/4"}
          />
        </div>
      </div>
    </div>
  );
}
