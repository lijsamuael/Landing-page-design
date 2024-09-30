export default function NavBar() {
  return (
    <nav className="">
      <div className=" text-white flex flex-wrap items-center justify-between mx-auto p-4">
        <ul className="flex gap-16 ">
          <li href="https://flowbite.com/" className="">
            Our Features
          </li>
          <li href="https://flowbite.com/" className="">
            Areas
          </li>
        </ul>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex  gap-16 justify-center items-center">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white  rounded  "
                aria-current="page"
              >
                FQQs
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded">
                The Waitlist
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
