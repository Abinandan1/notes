import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="h-[calc(100vh-68px)] grid place-content-center justify-items-center">
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
  );
};

export default Landing;
