import Button from "./Button";
import { useSelector } from "react-redux";
const list = [
  { name: "All" },
  { name: "Music" },
  { name: "Gaming" },
  { name: "Cricket" },
  { name: "News" },
  { name: "Sports" },
  { name: "Entertainment" },
  { name: "Fashion" },
  { name: "Food" },
  { name: "Travel" },
  { name: "Fashion" },
  { name: "Hip Hop" },
  { name: "Fast Chess" },
  { name: "JavaScript" },
  { name: "Programming" },
  { name: "Dance" },
  { name: "Fitness" },
  { name: "Technology" },
  { name: "Education" },
];
const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`${isMenuOpen ? "ml-60" : "ml-32"} flex gap-3 overflow-x-auto fixed left-0 mt-2 bg-white dark:bg-[#0f0f0f] py-4 w-full z-50`}
    >
      {list.map((item) => (
        <Button key={item.name} name={item.name} />
      ))}
    </div>
  );
};

export default ButtonList;
