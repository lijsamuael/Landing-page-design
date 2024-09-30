export default function UpcomingEvent({ event, startTime, endTime }) {
  return (
    <div className="bg-white/10 flex flex-col gap-2 w-[280px]  rounded-[24px] border border-white/10 p-4 pr-8">
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
