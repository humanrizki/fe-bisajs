import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ToogleMenu from "./ToogleMenu";
import NavbarMobile from "./NavbarMobile";

function Header(){
    const [stateNavMobile, setStateNavMobile] = useState('close')
    return (
        <>
            <header className="bisa-js__header md:w-10/12 w-full mx-auto h-max py-4">
                <div className="bisa-js__header-main flex justify-between items-center ">
                    <Logo/>
                    <Navbar/>
                    <ToogleMenu stateNavMobile={stateNavMobile} setStateNavMobile={setStateNavMobile}/>
                </div>
              
            {stateNavMobile === 'open' ? <NavbarMobile/> : <></>}
            </header>
        </>
    )
}

export default Header;