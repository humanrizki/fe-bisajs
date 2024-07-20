import { useState } from 'react'
import {SunFill, MoonFill} from 'react-bootstrap-icons'
function ToogleDarkMode(){
    const [dark, setDark] = useState(false)
    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    return (
            <button onClick={darkModeHandler} className='px-4 py-2 text-2xl'>
                {
                    dark && <SunFill /> // render sunny when dark is true
                }
                {
                    !dark && <MoonFill /> // render moon when dark is false
                }
            </button>
    )
}

export default ToogleDarkMode