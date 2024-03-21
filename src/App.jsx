import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Landing,
  Login,
  Dashboard,
  Home,
  Register,
  Error,
  SingleNote,
  Notes,
} from "./pages";

import singleNoteLoader from "./pages/SingleNote";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "archive",
        element: <Notes />,
      },
      {
        path: "notes/:id",
        element: <SingleNote />,
        loader: singleNoteLoader,
      },
      {
        path: "archive/:id",
        element: <SingleNote />,
        loader: singleNoteLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
