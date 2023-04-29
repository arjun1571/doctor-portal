import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../pages/Home/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashBordLayout from "../../LayOut/DashBord/DashBordLayout";
import MyAppoinment from "../../LayOut/MyAppoinment/MyAppoinment";

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
    element: <PrivateRoute><DashBordLayout></DashBordLayout></PrivateRoute>,
    children:[
        {
          path:'/dashbord',
          element: <MyAppoinment></MyAppoinment>
        },
      ]
    
  },
]);
export default router;
