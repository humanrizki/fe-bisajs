// import { HoverCard } from "@radix-ui/react-hover-card"
import { Avatar, Box, Button, Flex, Heading, HoverCard, Text } from "@radix-ui/themes"
import { googleLogout } from "@react-oauth/google"
import axios from "axios"
import classNames from "classnames"
import { useCookies } from "react-cookie"
import { useLocation } from "react-router-dom"
import ToogleDarkMode from "./ToogleDarkMode"
function NavbarMobile(){
    const location = useLocation().pathname
    const [cookies, _, removeCookie] = useCookies(['user'])
    const API_URL = import.meta.env.VITE_API_URL;
    async function onHandlerLogout(){
        const message = await axios.post(`${API_URL}/api/users/logout`, {}, {
            headers:{
                'Accept':'application\json',
                'Authorization':`Bearer ${cookies.token}`,
                "ngrok-skip-browser-warning": "69420"
            }
        })
        .then(response => response.data.message)
        .catch((error) => { console.log(error) })
        googleLogout()
        removeCookie('user', { path: '/' })
        removeCookie('token', { path: '/' })
        console.log(message)
    }
    return (
        <>
            <nav className='bisa-js__nav-mobile w-full md:hidden block overflow-hidden' >
                <div className='bisa-js__nav-pages p-2'>
                    <p className='font-medium text-base'>Pages</p>
                    <div className='w-full flex gap-y-2 items-start flex-col text-lg'>
                            <hr />
                            <a href='/courses' className={classNames('w-full box-border py-2 px-4 border hover:border hover:border-blue-600', {'border-white':!location.includes('/courses')}, {'border-blue-600 font-medium text-blue-600':location.includes('/courses')})}>Courses</a>
                            <a href='/blogs' className={classNames('w-full box-border py-2 px-4 border hover:border hover:border-blue-600', {'border-white':!location.includes('/blogs')}, {'border-blue-600 font-medium text-blue-600':location.includes('/blogs')})}>Blog</a>
                        {cookies.token !== undefined ?
                            <Text>

                                        
                                        <Flex gap="4">
                                        <Avatar fallback={cookies.user.username.charAt(0)}
                                            className="ml-4"
                                            radius='full' src={cookies.user.avatar ? cookies.user.avatar : "https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"}/>
                                            <Box>
                                                <Text className="text-base">
                                                    @{cookies.user.username}
                                                </Text>
                                                <Text as="div" className="text-base">
                                                    {cookies.user.name}
                                                </Text>
                                                {/* <hr /> */}
                                                <button onClick={()=>{
                                                    onHandlerLogout()
                                                }} className="my-3 hover:bg-red-900 text-red-500 border border-red-500 py-2 px-4" >Logout</button>
                                            </Box>
                                        </Flex>
                                    
                            </Text> 
                            : 
                            <>
                                <a href='/login' className={classNames('w-full box-border py-2 px-4 border hover:border hover:border-blue-600')}>Login</a>
                                <a href='/register' className={classNames('w-full box-border py-2 px-4 border hover:border hover:border-blue-600')}>Register</a>
                            </>
                        }
                    </div>
                </div>
            </nav>  
        </>
    )
}

export default NavbarMobile