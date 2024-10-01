export default function WaitList() {
  const country = [
    {
      name: "United Arab Emirates",
      flag: "🇦🇪",
    },
    {
      name: "USA",
      flag: "🇺🇸",
    },
    {
      name: "Poland",
      flag: "🇵🇱",
    },
    {
      name: "France",
      flag: "🇫🇷",
    },
  ];

  return (
    <div
      id="waitlists"
      className="text-white py-32 bg-cover px-8 bg-[url('/waitlist.png')]"
    >
      <div className="max-w-[600px]">
        <p className="text-[32px] md:text-[80px]">
          Join the Fluid AI Waitlist Today!
        </p>
        <div className="flex flex-col gap-4 pt-16">
          <input
            className="outline-none border-b bg-transparent md:w-[459px] py-2 border-white/40 text-white-40"
            placeholder="Name"
            type="text"
          />
          <input
            className="outline-none border-b bg-transparent md:w-[459px] py-2 border-white/40 text-white-40"
            placeholder="Email"
            type="text"
          />
          <select
            className="outline-none border-b bg-transparent md:w-[459px] py-2 border-white/40 text-white-40"
            name=""
            id=""
          >
            {country.map((item, index) => (
              <option
                className="flex gap-2 bg-transparent text-black"
                key={index}
                value={item.name}
              >
                <div className="rounded-full">{item.flag}</div> {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
