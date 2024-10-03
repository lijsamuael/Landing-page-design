export default function UpcomingEvent({ event, startTime, endTime }) {
  return (
    <div className="bg-black/15 whitespace-nowrap flex flex-col gap-2 w-[200px] md:w-[280px]  rounded-[24px] border border-white/10 p-4 pr-8">
      <div className="flex w-full justify-end items-center">
        <img
          className="rounded-full w-12 h-12 object-cover "
          src="/person1.png"
          alt="person1"
        />
        <img
          className="rounded-full  w-12 h-12 object-cover  -ml-6"
          src="/person2.png"
          alt="person2"
        />
        <img
          className="rounded-full  w-12 h-12 object-cover  -ml-6"
          src="/person3.jpeg"
          alt="person3"
        />
      </div>
      <p className="text-white/60 text-lg">Upcoming Events</p>
      <p className="text-[28px] text-white">{event}</p>
      <div className="flex items-center text-white/60 gap-1">
        <img src="/clock.png" alt="" />
        <span>{startTime}</span>
        <span>-</span>
        <span>{endTime}</span>
      </div>
    </div>
  );
}
