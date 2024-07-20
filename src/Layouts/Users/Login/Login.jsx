import { useEffect, useMemo, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Callout } from "@radix-ui/themes";
import { InfoCircleFill } from "react-bootstrap-icons";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messageError, setMessageError] = useState([])
    const [messageSuccess, setMessageSuccess] = useState('')
    const [cookies, setCookie] = useCookies(['user'])
    const navigate = useNavigate()

    async function handleLogin() {
        setIsLoading(true)
        await axios.post('http://be-bisajs.test/api/users/login', {email, password})
        .then(response => {
            setCookie('user', response.data.user, { path: '/' })
            setCookie('token', response.data.access_token, { path: '/' })
            setIsLoading(false)
            setMessageSuccess(response.data.message)
            setTimeout(()=>{
                navigate('/')
            }, 3000)
        })
        .catch((error) => { console.log(error) })
    }
    const submitForm = () =>{
        event.preventDefault()
        handleLogin({ email, password })
        // navigate('/')
    }
    return (
        <>
            <div className="w-full h-screen bg-slate-950 flex flex-col justify-center">
                <div className="w-[300px] mx-auto p-5 h-max rounded bg-zinc-950 text-white shadow shadow-white">
                    {messageSuccess && <>
                        <Callout.Root variant="soft" highContrast={false} color="blue">
                            <Callout.Icon>
                                <InfoCircleFill />
                            </Callout.Icon>
                            <Callout.Text color="white">
                                {messageSuccess}
                                <p>Dalam 3 detik, anda akan dialihkan</p>
                            </Callout.Text>
                        </Callout.Root>
                    </>}
                    <form className="bisa-js__form-login" onSubmit={submitForm}>
                        <div className="bisa-js__group-form mb-5">
                            <label className="block mb-3">Email</label>
                            <input type='email' value={email} onChange={(event)=>{
                                setEmail(event.target.value)
                            }} placeholder="type here your email..." 
                            className="block p-2 text-base rounded outline-none mb-2 bg-slate-900 shadow shadow-white text-white w-full"/>
                        </div>
                        <div className="bisa-js__group-form mb-5">
                            <label className="block mb-3">Password</label>
                            <input type='password' value={password} onChange={(event)=>{
                                setPassword(event.target.value)
                            }} placeholder="type here your password..."
                            className="block p-2 text-base rounded outline-none mb-2 bg-slate-900 shadow shadow-white text-white w-full"/>
                        </div>
                        {isLoading ? 
                            <>
                                <p>Loading...</p>
                            </>
                        : messageSuccess ?
                        <>
                            <p>Wait for automatic direct to Home</p>
                        </> :
                        <>
                            <button type="submit" className="p-2 rounded shadow shadow-white">
                                Login
                            </button>
                        </>}
                        
                    </form>
                </div>
            </div>
        </>

    )
}
export default Login