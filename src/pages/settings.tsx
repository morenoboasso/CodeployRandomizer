import { Link } from "react-router-dom";
import { FaCog, FaHome, FaClock } from "react-icons/fa";

const Settings = () => {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 w-full bg-green-custom">
        <Link to="/home">
          <FaHome className="text-white cursor-pointer text-3xl" />
        </Link>
        <Link to="/timer">
          <FaClock className="text-white cursor-pointer text-3xl" />
        </Link>
      </div>
    </>
  );
};

export default Settings;
