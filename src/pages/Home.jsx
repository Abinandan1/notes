import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="bg-yellow-100 shadow-md py-4">
        <div className="max-w-[1170px] mx-auto px-8 flex justify-between items-center">
          <h1 className="font-bold text-3xl tracking-wider">notes</h1>
          <ul className=" flex justify-between gap-4">
            <li>
              <Link
                className="uppercase tracking-wider text-yellow-600 hover:text-yellow-800 duration-300"
                to="/login"
              >
                login
              </Link>
            </li>
            <li>
              <Link
                className="uppercase tracking-wider text-yellow-600 hover:text-yellow-800 duration-300"
                to="/register"
              >
                register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Home;
