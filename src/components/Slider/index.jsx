import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Slider() {
  return (
    <div className="text-white ">
      <p className="text-[56px] pl-4 max-w-[900px] leading-none  pt-12">
        Fluid AI was born out of a desire to simplify and streamline modern life
      </p>
      <div className="py-8">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[url('/friends.png')] w-full h-[900px] flex justify-center items-center ">
              <div className="h-[560px] w-[560px] bg-white/40 rounded-[32px] p-8 flex flex-col justify-between">
                <p className="font-medium max-w-[300px] text-[24px] ">
                  Fluid has Internet access, so you can get up-to-date
                  information from it.
                </p>
                <p className="text-[56px]">Time for work</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/study.png')] w-full h-[900px] flex justify-center items-center ">
              <div className="h-[560px] w-[560px] bg-white/40 rounded-[32px] p-8 flex flex-col justify-between">
                <p className="font-medium max-w-[300px] text-[24px] ">
                  You can use Fluid as an assistant to save time - and save your
                  sanity
                </p>
                <p className="text-[56px]">Time for family</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/friends.png')] w-full h-[900px] flex justify-center items-center ">
              <div className="h-[560px] w-[560px] bg-white/40 rounded-[32px] p-8 flex flex-col justify-between">
                <p className="font-medium max-w-[300px] text-[24px] ">
                  Fluid easily integrates with your friends' calendars
                </p>
                <p className="text-[56px]">Time for friends</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
