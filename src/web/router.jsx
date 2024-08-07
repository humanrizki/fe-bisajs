import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Users/Root/Home/Home";
// import Login from "../Layouts/Users/Root/Authentication/Login";
import Auth from "../Layouts/Users/Root/Authentication/Auth";
import GoogleCallback from "../Layouts/Users/Root/Authentication/GoogleCallback";
import Login from "../Layouts/Users/Login/Login";
import Courses from "../Layouts/Users/Root/Courses/Courses";
import Index from "../Layouts/Users/Root/Courses/index/Index";
import SubCourses from "../Layouts/Users/Root/Courses/SubCourses/SubCourses";
import axios from "axios";
import Course from "../Layouts/Users/Root/Courses/Course/Course";
import DashboardLayout from "../Layouts/Admin/Layout/DashboardLayout";
import DashboardCourses from "../Layouts/Admin/Courses/DashboardCourses";
import Dashboard from "../Layouts/Admin/Dashboard";

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
        element: <Courses/>,
        children: [
            {
                index: true,
                element: <Index/>,
                // loader: () => {
                //     return axios.get('http://be-bisajs.test/api/courses')
                //     .then(response => {
                //         return response.data
                //     })
                // }
            },
            {
                path: ':courseSlug',
                element: <Course/>,
                children:[
                    {
                        path: ':subCourseSlug',
                        element: <SubCourses/>
                    }
                ]
            }

        ]
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
    {
        path: '/admin',
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path:'courses',
                element: <DashboardCourses/>
            }
        ]
    }
]);
export default router