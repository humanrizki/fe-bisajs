import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Users/Root/Home/Home";
import Login from "../Layouts/Users/Login/Login";
import Auth from "../Layouts/Users/Root/Authentication/Auth";

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