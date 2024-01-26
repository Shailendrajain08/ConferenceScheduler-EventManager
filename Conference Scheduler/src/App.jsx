import "./App.css";
import CreateEvent from "./components/Functional Components/CreateEvent";
import Login from "./components/Auth-Components/Login";
import SignUp from "./components/Auth-Components/SignUp";
// import { ToastContainer } from "react-toastify";
import Header from "./components/Functional Components/Header";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Login />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/createEvent",
        element: <CreateEvent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

export default AppLayout;
