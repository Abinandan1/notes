import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = ({ toggle, setToggle }) => {
  return (
    <aside
      className={` ${
        toggle ? "translate-x-0" : "-translate-x-full"
      }  bg-yellow-200 w-1/2 fixed top-0 left-0 h-screen transition-transform duration-300 md:w-1/3 lg:w-1/4 shadow-2xl`}
    >
      <div className="flex flex-col">
        <button
          onClick={() => setToggle(false)}
          className="absolute right-4 top-4 text-red-500 text-2xl hover:text-red-700 transition duration-300 hover:scale-110"
        >
          <FaTimes />
        </button>
        <ul className="mt-16 flex flex-col gap-4">
          <li className="capitalize text-xl">
            <Link
              to="notes"
              className="block px-10 hover:px-12 py-2 hover:bg-white transition-all duration-300 hover:border-l-[12px] border-yellow-800 hover:text-yellow-800"
            >
              notes
            </Link>
          </li>
          <li className="capitalize text-xl">
            <Link
              to="archive"
              className="block px-10 hover:px-12 py-2 hover:bg-white transition-all duration-300 hover:border-l-[12px] border-yellow-800 hover:text-yellow-800"
            >
              archive
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
