import Aos from "aos";
import SideContent from "../SideContent";
import { useEffect } from "react";

export default function Ad() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
    Aos.refresh();
  }, []);
  return (
    <div id="features" className="flex justify-center flex-col items-center  text-white">
      <p className="font-semibold text-lg opacity-50">Our Features</p>
      <p className="text-[32px] md:text-[80px] px-4 max-w-[900px] leading-none text-center pt-12">
        Fluid AI was born out of a desire to simplify and streamline modern life
      </p>
      <div className="pt-32 flex flex-col gap-16">
        <div
          data-aos="fade-right"
          className="flex flex-col-reverse md:flex-row items-end gap-24 "
        >
          <SideContent
            title={"Fluid AI: Simplify, Organize, and Acheive More"}
            desc={
              "n a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform"
            }
            step={"1/4"}
          />
          <img width={380} height={780} src="/iPhone1.png" alt="iphone1" />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col md:flex-row items-end gap-24 "
        >
          <img width={380} height={780} src="/iPhone2.png" alt="iphone1" />

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
          className="flex flex-col-reverse md:flex-row items-end gap-24 "
        >
          <SideContent
            title={"Fluid AI: Simplify, Organize, and Acheive More"}
            desc={
              "n a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform"
            }
            step={"3/4"}
          />
          <img width={380} height={780} src="/iPhone3.png" alt="iphone1" />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col md:flex-row items-end gap-24 "
        >
          <img width={380} height={780} src="/iPhone4.png" alt="iphone1" />

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
