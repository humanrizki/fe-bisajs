import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Users/Root/Home/Home";
// import Login from "../Layouts/Users/Root/Authentication/Login";
import Auth from "../Layouts/Users/Root/Authentication/Auth";
import GoogleCallback from "../Layouts/Users/Root/Authentication/GoogleCallback";
import Login from "../Layouts/Users/Login/Login";
import Courses from "../Layouts/Users/Root/Courses/Courses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        // children: [
        //     {
        //         path: "/login",
        //         element: <Login />,
        //     },
        // ],   
    },
    {
        path:"/courses",
        element: <Courses/>
    },
    {
        path: "/login",
        element: <Login/>

        // children: [
        // {
        //   path: "team",
        //   element: <Team />,
        //   loader: teamLoader,
        // },
        // ],   
    },

]);
export default router