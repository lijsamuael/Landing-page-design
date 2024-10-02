export default function Footer() {
  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white pt-16">
      <div className="mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="">
            <img
              width={207}
              height={45}
              src="/logo.png"
              className=""
              alt="Fluid AI Logo"
            />
            <p className="pt-8 text-white/50">2024 Fluid AI</p>
          </div>
          <div className="grid grid-cols-2 pt-8 md:pt-0 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="text-gray-500 flex flex-col gap-4 dark:text-gray-400 font-medium">
                <li
                  className="cursor-pointer"
                  onClick={(e) => handleLinkClick(e, "features")}
                >
                  Our Features
                </li>
                <li
                  className="cursor-pointer"
                  onClick={(e) => handleLinkClick(e, "areas")}
                >
                  Areas
                </li>
                <li
                  className="cursor-pointer"
                  onClick={(e) => handleLinkClick(e, "faqs")}
                >
                  FAQs
                </li>
                <li
                  className="cursor-pointer"
                  onClick={(e) => handleLinkClick(e, "waitlists")}
                >
                  The Waitlist
                </li>
                <li className="cursor-pointer">Contact Us</li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 flex flex-col gap-4 dark:text-gray-400 font-medium">
                <li className="cursor-pointer">Terms of Service</li>
                <li className="cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
