import { Avatar } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { ExclamationTriangle } from "react-bootstrap-icons"
import { useNavigate, useParams } from "react-router-dom";
import SkeletonCourse from "../../Components/SkeletonCourses/SkeletonCourse";
import 'highlight.js/styles/tokyo-night-dark.css';

function Course(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;
    const {courseSlug} = useParams();
    console.log(courseSlug)
    async function getCourse(){
        // setLoading(true)
        await axios.get(`${API_URL}/api/course/${courseSlug}`, {
            headers: {
                Accept: 'application/json',
                "Content-Type": 'applications/json',
                "ngrok-skip-browser-warning": "69420"
            }
        })
        .then(response => {
            setData(response.data.course)
            console.log(response.data.course)
            setLoading(false)
            console.log(response.data.course)
        }).catch(e => {console.log(e)})
    }
    useEffect(()=>{
        getCourse()
        // console.log(data)
    },[])
    return (
        <>
            {!loading ?
            <div className='bisa-js__course w-full'>
                <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-8 h-max  py-3 lg:py-3'>
                    <div className='course--image col-span-1 lg:col-span-3 inline-flex  lg:justify-center items-center'>
                        <img src={`/${data.image}`} alt='logo course' className='w-52 mb-2'/>
                    </div>
                    <div className='course--text col-span-1 lg:col-span-5 inline-flex items-center'>
                        <div>
                            <div className="flex gap-3 mt-4 justify-between text-sm items-center">
                                <h1 className='text-3xl font-medium mb-2'>{data.name}</h1>
                            </div>
                            <div className="flex gap-3 mt-4 mb-3 justify-between text-sm items-center">
                                <div className='w-9/12 inline-flex items-center gap-2'>
                                    <ExclamationTriangle className='w-24 text-xl'/>
                                    <p>Subscribe untuk mendapatkan lebih banyak notifikasi terbaru dari kelas ini!</p>
                                </div>
                            </div> 
                            <div className="flex items-center gap-3 my-4">
                                <Avatar fallback={data.user.username.charAt(0)} radius='full' src={data.user.avatar ? data.user.avatar : "https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"} className="dark:border-white dark:border"/>
                                <p className='text-base font-bold dark:text-slate-300'>{data.user.name} <p className='text-sm font-medium dark:text-slate-300'>@{data.user.username}</p></p>
                            </div>
                            <p className='text-sm font-medium dark:text-slate-300 my-4'>Categories</p>
                            <div className='flex gap-3 mt-2 text-sm text-slate-300'>
                                <div  className='p-2 bg-slate-700 border border-slate-700'>
                                    <p>{data.category.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr className="my-3 w-10/12 mx-auto"/> */}
                <div className="w-10/12 mx-auto flex gap-5">
                    <span className="w-8/12">
                    <h1 className="text-3xl font-medium">Tentang Kelas</h1>
                    </span>
                    <span className="w-4/12">
                        <h3 className="text-xl font-medium">Module Kelas</h3>
                    </span>
                </div>
                
                <div className=" app-container w-10/12 mx-auto mt-[10px] flex justify-round gap-5" >
                    <div className=" w-8/12" dangerouslySetInnerHTML={{ __html: data.description }}></div>
                    <div className="w-4/12">
                        { data.sub_courses.length != 0 ? data.sub_courses.map((val,ind)=>{
                            return (
                                <div className="mx-auto flex gap-5 items-center text-center p-3 rounded-2xl bg-slate-400" key={ind}>
                                    <div className="w-[30px] h-[30px] text-base flex items-center justify-center bg-slate-950 inline rounded-full">
                                    <span className="text-white">{ind + 1}</span>
                                    </div>
                                    <span className="text-slate-800 inline" >{val.title}</span>
                                </div>
                                
                            )
                        }) : <p>Masih Kosong</p>}
                    </div>
                </div>
            </div>
        : <SkeletonCourse/> }
        </>
        
    )
}

export default Course