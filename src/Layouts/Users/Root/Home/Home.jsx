import { useCookies } from "react-cookie"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import AllCourses from "./Content/AllCourses"
import Welcome from "./Content/Welcome"
import { Outlet } from "react-router-dom"

function Home(){
    const [cookies, _] = useCookies(['user'])
    console.log(cookies.user)
    return (
        <div className="dark:bg-slate-950 dark:text-white text-slate-800 dark:border-white">
            <Header/>
            <Welcome/>
            <AllCourses/>
            <Footer/>
        </div>
    )
}

export default Home