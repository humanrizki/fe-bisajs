// import { Outlet } from "react-bootstrap-icons"

import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

function Courses(){
  return (
    <div className="dark:bg-slate-950 dark:text-white text-slate-800 dark:border-white h-full w-full">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
export default Courses