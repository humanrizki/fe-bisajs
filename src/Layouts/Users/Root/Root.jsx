import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

function Root(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
        
    )
}
export default Root