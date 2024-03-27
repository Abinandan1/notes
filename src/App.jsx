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

// LOADERS
import { loader as singleNoteLoader } from "./pages/SingleNote";
import { loader as dashboardLoader } from "./pages/Dashboard";
import { loader as notesLoader } from "./pages/Notes";

// ACTIONS
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { action as singleNoteAction } from "./pages/SingleNote";
import { action as notesAction } from "./pages/Notes";

import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction(store),
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    action: registerAction(store),
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: dashboardLoader(store),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "notes",
        loader: notesLoader(store),
        action: notesAction(store),
        element: <Notes />,
      },
      {
        path: "notes?archive=true",
        loader: notesLoader(store),
        action: notesAction(store),
        element: <Notes />,
      },
      // {
      //   path: "archive",
      //   element: <Notes />,
      // },
      {
        path: "notes/:id",
        element: <SingleNote />,
        action: singleNoteAction(store),
        loader: singleNoteLoader(store),
      },
      {
        path: "archive/:id",
        element: <SingleNote />,
        loader: singleNoteLoader(store),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
