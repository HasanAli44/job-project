import { SlHandbag } from "react-icons/sl";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 xl:px-40 px-5 py-5 relative z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="font-medium" href="#">
                Courses
              </a>
              <ul className="p-2">
                <li>
                  <a href="#">Courses 1</a>
                </li>
                <li>
                  <a href="#">Courses 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="font-medium" href="#">
                Instructors
              </a>
              <ul className="p-2">
                <li>
                  <a href="#">Instructors 1</a>
                </li>
                <li>
                  <a href="#">Instructors 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="font-medium" href="#">
                Blog
              </a>
              <ul className="p-2">
                <li>
                  <a href="#">Blog 1</a>
                </li>
                <li>
                  <a href="#">Blog 2</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#" className=" text-[32px] font-semibold inter">
            Logo
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="font-medium text-[16px] hover:bg-transparent ">
                Courses
              </summary>
              <ul className="p-2  w-52">
                <li>
                  <a href="#">Courses 1</a>
                </li>
                <li>
                  <a href="#">Courses 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="font-medium text-[16px] hover:bg-transparent">
                Instructors
              </summary>
              <ul className="p-2  w-52">
                <li>
                  <a href="#">Instructors 1</a>
                </li>
                <li>
                  <a href="#">Instructors 2</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary className="font-medium text-[16px] hover:bg-transparent">
                Blogs
              </summary>
              <ul className="p-2  w-52 ">
                <li className="">
                  <a href="#">Blogs 1</a>
                </li>
                <li>
                  <a href="#">Blogs 2</a>
                </li>
              </ul>
            </details>
          </li>

          <li className="text-[16px] font-medium ">
            <a className="hover:bg-transparent" href="#">
              About
            </a>
          </li>
          <li className="text-[16px] font-medium">
            <a className="hover:bg-transparent" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="mr-6" href="#">
          <SlHandbag className="text-[#287279] w-[28.01px] h-[25px]"></SlHandbag>
        </a>
        <button className="bg-[#287279] text-white w-[86px] h-[42px] rounded-[32px] font-semibold text-[14px]">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
