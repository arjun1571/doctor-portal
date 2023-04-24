import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../pages/Home/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";
import SignUp from "../../pages/SignUp/SignUp";
import DashBord from "../../DashBord/Dashbord/DashBord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/appointment",
        element: <Appoinment></Appoinment>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashbord",
    element: <DashBord></DashBord>,
  },
]);
export default router;
