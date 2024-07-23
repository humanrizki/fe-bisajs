import {useNavigate} from 'react-router-dom'
import { FilterRight, X } from "react-bootstrap-icons"
import ToogleDarkMode from './ToogleDarkMode'
import { useCookies } from 'react-cookie'
import { Avatar, Flex, HoverCard, Text, Box, Heading, Button} from '@radix-ui/themes'
import axios from 'axios'
import { googleLogout } from '@react-oauth/google'
function ToogleMenu({stateNavMobile, setStateNavMobile}){
    const [cookies, _, removeCookie] = useCookies(['user'])
    const navigate = useNavigate()
    
    async function onHandlerLogout(){
        const message = await axios.post('http://be-bisajs.test/api/users/logout', {}, {
            headers:{
                'Accept':'application\json',
                'Authorization':`Bearer ${cookies.token}`
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
            <div className="bisa-js__toggle md:hidden block p-2">
                <button className="" onClick={setStateNavMobile.bind(this, stateNavMobile === 'open' ? 'close' : 'open')}>{stateNavMobile === 'open' ? <X size={40}/> : <FilterRight size={40}/>}</button>
            </div>

            <div className="bisa-js__auth md:block hidden">
                {cookies.token !== undefined? 
                <div className='flex justify-between w-[100px]'>
                    <ToogleDarkMode/>  
                <Text>
                    <HoverCard.Root>
                    <HoverCard.Trigger>
                        <Avatar fallback={cookies.user.username.charAt(0)} radius='full' src={cookies.user.avatar ? cookies.user.avatar : "https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"}/>
                    </HoverCard.Trigger>
                    <HoverCard.Content maxWidth="300px">
                        <Flex gap="4">
                        <Avatar
                            size="1"
                            fallback="R"
                            radius="full"
                            src={cookies.user.avatar ? cookies.user.avatar : "https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"}
                        />
                        <Box>
                            <Heading size="2" as="h3">
                            {cookies.user.username}
                            </Heading>
                            <Text as="div" size="2" color="gray" mb="2">
                            {cookies.user.name}
                            </Text>
                            <hr />
                            {/* <Text as="div" size="2">
                            React components, icons, and colors for building high-quality,
                            accessible UI.
                            </Text> */}
                            <hr />
                            <button onClick={onHandlerLogout} className='w-full py-2 px-4 border border-slate-600 mt-2 hover:bg-slate-800'>Logout</button>
                        </Box>
                        </Flex>
                    </HoverCard.Content>
                    </HoverCard.Root>
                </Text>
                </div>
                : 
                <>
                    <div className='bisa__js-authentication flex justify-between w-[250px]'>
                        <ToogleDarkMode/>   
                        <button className="py-2 px-4 border border-slate-600" type="button" onClick={
                        ()=>{
                            navigate('/login')
                        }}>Login</button>
                        <button className="py-2 px-4 bg-slate-800 text-white border border-slate-800" type="button" onClick={
                        ()=>{
                            navigate('/register')
                        }}>Register</button>
                    </div>
                </>
                }
            </div>
        </>
    )
}

export default ToogleMenu