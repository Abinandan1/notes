import { Link, useRouteError } from "react-router-dom";
import { Button } from "../components";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <main className="grid min-h-screen place-items-center px-8">
      <div className="text-center">
        <p className="text-9xl font-semibold text-yellow-300">404</p>
        <h1 className="mt-4 capitalize text-3xl font-bold tracking-tight sm:text-5xl">
          page not found
        </h1>
        <p className="mt-6 text-lg leading-7">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="px-4 py-2 capitalize rounded-lg bg-yellow-900 text-white transition-all duration-300 hover:bg-yellow-700"
          >
            back home
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Error;
