import { CiMenuBurger } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import Logo from "../assets/logo.png";

const Head = () => {
  const dispatch = useDispatch();

  const ShowHideMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col px-2 py-3 fixed w-full bg-[#FFFFFF] dark:bg-[#0f0f0f] z-50">
      {/*Section 1 */}
      <div className="flex col-span-1 items-center">
        <div className="p-3" onClick={ShowHideMenu}>
          <CiMenuBurger className="text-2xl cursor-pointer text-black dark:text-white" />
        </div>

        <img className="h-7 ml-3 cursor-pointer" src={Logo} alt="Echo" />
      </div>
      {/*Section 2 -> Search BOX*/}
      <div className="col-span-9 flex justify-center items-center">
        <input
          type="text"
          className="w-1/3 p-2 border rounded-l-full px-6 dark:bg-[#121212] dark:border-[#3c3c3c] dark:text-white"
          placeholder="Search"
        />
        <button className="border-y border-gray-200 dark:border-[#3c3c3c] py-2 px-5 rounded-r-full bg-gray-100 dark:bg-[#282828]">
          <IoSearchOutline className="h-6 w-6 text-white dark:text-white" />
        </button>
      </div>
      {/*Section 3 -> User*/}
      <div className="col-span-1 flex items-center">
        <FaUserCircle className="text-2xl cursor-pointer text-black dark:text-white" />
      </div>
    </div>
  );
};

export default Head;
