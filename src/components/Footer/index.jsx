export default function Footer() {
  return (
    <footer className="text-white  pt-16">
      <div className="mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="">
            <img
              width={207}
              height={45}
              src="/logo.png"
              className=""
              alt="FlowBite Logo"
            />
            <p className="pt-8 text-white/50">2024 Fluid AI</p>
          </div>
          <div className="grid grid-cols-2 pt-8 md:pt-0 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="text-gray-500  flex flex-col gap-4 dark:text-gray-400 font-medium">
                <li className="">Our featurs</li>
                <li>Areas</li>
                <li>FAQs</li>
                <li>The waitlist</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 flex flex-col gap-4 dark:text-gray-400 font-medium">
                <li className="">Terms of service</li>
                <li>Privacy policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
