import PropTypes from "prop-types";

const Button = ({ name }) => {
  return (
    <div className="dark:bg-[#2e2e2e] bg-gray-200 px-3 py-2 rounded-md text-md font-semibold dark:text-white hover:bg-gray-300 dark:hover:bg-[#3b3b3b] cursor-pointer transition-all duration-400 whitespace-nowrap">
      {name}
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
