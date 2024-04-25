import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggleTheme } from "../utils/appSlice";
import { FaSun } from "react-icons/fa";
import { RiMoonClearFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const theme = useSelector((state) => state.app.theme); // Access theme from Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    // Apply the theme class to the document element on mount and theme change
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function handleClick() {
    dispatch(toggleTheme()); // Dispatch action to toggle theme
  }

  if (!isMenuOpen) return null; // early return pattern!
  return (
    <div className="p-2 fixed left-0 min-w-[240px] top-16 bg-white dark:bg-[#0f0f0f] h-screen mt-3.5">
      {/* <h1 className="pt-5 pb-3 font-bold">Subscriptions</h1> */}
      <div className="cursor-pointer flex flex-col">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-[#f4f4f4] dark:bg-[#272727] font-medium rounded-xl"
              : "bg-[#f4f4f4] dark:bg-[#272727] rounded-xl"
          }
        >
          <Link to="/">
            <div className="flex gap-6 items-center hover:bg-gray-200 dark:hover:bg-[#272727] group p-3 rounded-xl">
              <GoHomeFill className="text-2xl text-black dark:text-white group-hover:text-black dark:group-hover:text-gray-200" />
              <span className="group-hover:text-black dark:group-hover:text-white text-black dark:text-white">
                Home
              </span>
            </div>
          </Link>
        </NavLink>

        <div className="flex gap-6 items-center hover:bg-gray-200 dark:hover:bg-[#272727] group p-3 rounded-xl">
          <SiYoutubeshorts className="text-2xl text-black dark:text-white group-hover:text-black dark:group-hover:text-gray-200" />
          <span className="group-hover:text-black dark:group-hover:text-white text-black dark:text-white">
            Shorts
          </span>
        </div>
        <div className="flex gap-6 items-center hover:bg-gray-200 dark:hover:bg-[#272727] group p-3 rounded-xl">
          <MdOutlineSubscriptions className="text-2xl text-black dark:text-white group-hover:text-black dark:group-hover:text-gray-200" />
          <span className="group-hover:text-black dark:group-hover:text-white text-black dark:text-white">
            Subscriptions
          </span>
        </div>

        <div className="flex gap-6 items-center hover:bg-gray-200 dark:hover:bg-[#272727] group p-3 rounded-xl">
          <SiYoutubemusic className="text-2xl text-black dark:text-white group-hover:text-black dark:group-hover:text-gray-200" />
          <span className="group-hover:text-black dark:group-hover:text-white text-black dark:text-white">
            Youtube Music
          </span>
        </div>
      </div>
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
      <button onClick={handleClick} className="text-black dark:text-white px-5">
        {theme === "light" ? (
          <FaSun className="text-2xl" />
        ) : (
          <RiMoonClearFill className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
