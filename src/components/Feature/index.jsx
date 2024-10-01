import Tag from "../Tag";
import Todo from "../Todo";
import UpcomingEvent from "../UpcomingEvent";

export default function Feature() {
  return (
    <div className="h-[1500px] mx-auto w-full  flex items-center justify-around bg-[url('/public/bg.png')] bg-black">
      <div className="flex w-4/12 flex-col gap-16 justify-start">
        <div className="flex gap-8 items-end">
          <Todo task="Renew Car Insurance" />
          <img
            className="relative bottom-8"
            src="/public/Card.png"
            alt="card"
          />
        </div>
        <div className="flex items-end gap-4 self-center">
          <UpcomingEvent
            event={"Kite Bearch"}
            startTime={"10:00"}
            endTime={"14:00"}
          />
          <Tag tag={"Cafe nearby"} />
        </div>
        <div className="self-end">
          <img src="/ticket.png" alt="ticket" />
        </div>
      </div>
      <div className="w-2/12 flex justify-center logo-placer">
        {/* <img width={170} height={36} src="/public/logo.png" alt="" /> */}
      </div>
      <div className="w-4/12 flex flex-col items-end gap-8">
        <div className="self-center">
          <Todo task="Renew Car Insurance" />
        </div>
        <div className="">
          <UpcomingEvent
            event={"Kite Bearch"}
            startTime={"10:00"}
            endTime={"14:00"}
          />
        </div>
        <Tag tag={"Book a flight"} />
        <Tag tag={"Trip ideas"} />
        <img className="self-center" src="/Reservation.png" alt="reservation" />
      </div>
    </div>
  );
}
