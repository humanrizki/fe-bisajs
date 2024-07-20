import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

function Auth(){
    const [cookies, _] = useCookies(['user'])
    const navigate = useNavigate()
    useEffect(()=>{
        if(cookies.user){
            navigate('/')
        }
            navigate('/login')
    }, [cookies.user, cookies.token])
    
}
export default Auth