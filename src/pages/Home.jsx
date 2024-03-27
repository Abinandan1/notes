import { Link } from "react-router-dom";
import noteImg from "../assets/add_notes.svg";
const Home = () => {
  return (
    <>
      <nav className="py-4 mb-20">
        <div className="max-w-[1170px] mx-auto px-8 flex justify-between items-center">
          <h1 className="font-bold text-3xl tracking-wider">notes</h1>
          <ul className=" flex justify-between gap-4">
            <li>
              <Link
                className="capitalize text-xl font-semibold tracking-wider text-yellow-600 hover:text-yellow-800 duration-300"
                to="/login"
              >
                login
              </Link>
            </li>
            <li>
              <Link
                className="capitalize text-xl font-semibold tracking-wider text-yellow-600 hover:text-yellow-800 duration-300"
                to="/register"
              >
                register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className="">
        <div className="max-w-[1170px] mx-auto p-8 flex flex-col gap-16 lg:gap-64 md:flex-row md:items-center md:justify-start">
          <div className="">
            <img className="" src={noteImg} alt="" />
          </div>
          <p className="text-7xl max-w-[250px] font-semibold md:text-6xl md:leading-[1.5] lg:text-7xl lg:leading-[1.5]">
            Stay organized with <span className=" text-yellow-200">notes</span>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
