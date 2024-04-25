import { useSelector } from "react-redux";
const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`${
        isMenuOpen ? "ml-60" : "ml-28"
      } mt-20 w-screen text-black dark:text-white`}
    >
      WatchPage
    </div>
  );
};

export default WatchPage;
