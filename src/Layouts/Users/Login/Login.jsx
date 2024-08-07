import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Callout } from "@radix-ui/themes";
import { InfoCircleFill } from "react-bootstrap-icons";
import { useGoogleLogin } from '@react-oauth/google';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messageError, setMessageError] = useState([])
    const API_URL = import.meta.env.VITE_API_URL;
    const [fieldEmailMessageError, setFieldEmailMessageError] = useState('');
    const [messageSuccess, setMessageSuccess] = useState('')
    const [cookies, setCookie] = useCookies(['user'])
    const navigate = useNavigate()

    async function handleLoginGoogle(response){
        if (response) {
            await axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${response.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    handleUserRegister(res.data);
                })
                .catch((err) => console.log(err));
        }
    }

    const loginGoogle = useGoogleLogin({
        onSuccess: (codeResponse) => {
            handleLoginGoogle(codeResponse)
            console.log(codeResponse)
        },
        onError: (error) => console.log('Login Failed:', error)
    });
    
    async function handleLogin() {
        setIsLoading(true)
        await axios.post(`${API_URL}/api/users/login`, {email, password}, {
            headers: {
                Accept: 'application/json',
                "Content-Type": 'applications/json',
                "ngrok-skip-browser-warning": "69420"
            }
        })
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
    async function handleUserRegister(user) {
        setIsLoading(true)
        await axios.post(`${API_URL}/api/users/register/oauth-google`, {
            "name": user.name,
            "email": user.email,
            "avatar": user.picture,
            "gauth_id": user.id,
        }, {
            headers: {
                Accept: 'application/json',
                "Content-Type": 'applications/json',
                "ngrok-skip-browser-warning": "69420"
            }
        })
        .then(response => {
            console.log(response)
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
                            <button type="submit" className="p-2 rounded shadow shadow-white w-full">
                                Login
                            </button>
                        </>}
                        <hr className="my-3"/>
                        
                        
                    </form>
                    {!isLoading && 
                        <button className="p-2 rounded shadow shadow-white w-full" onClick={loginGoogle}>Sign in with Google 🚀 </button>
                    }
                </div>
            </div>
        </>

    )
}
export default Login