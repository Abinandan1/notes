import { Link } from "react-router-dom";
import noteList from "../assets/note_list.svg";
const Landing = () => {
  return (
    <>
      <section className="">
        <div className="max-w-[1170px] mx-auto px-8 py-20 flex flex-col gap-16 lg:gap-64 md:flex-row md:items-center ">
          <div className="">
            <img
              className="h-full w-full block object-cover"
              src={noteList}
              alt=""
            />
          </div>
          <p className="text-7xl max-w-[250px] font-semibold md:text-6xl md:leading-[1.5] lg:text-7xl lg:leading-[1.5]">
            Manage your <span className=" text-yellow-200">notes</span> here.
          </p>
        </div>
      </section>
      <section className="bg-gray-50 grid place-items-center py-60">
        <h1 className="mb-4 text-2xl font-bold uppercase tracking-wider">
          Explore notes
        </h1>
        <Link
          to="notes"
          className="text-center px-4 py-2 uppercase tracking-[2px] rounded-lg bg-yellow-900 text-white transition-all duration-300 hover:bg-yellow-700 mb-8"
        >
          Notes
        </Link>
      </section>
    </>
  );
};

export default Landing;
