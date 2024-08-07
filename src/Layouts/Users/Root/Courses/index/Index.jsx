import { useLoaderData, useNavigate } from "react-router-dom"
import SkeletonAllCourses from "../../Components/SkeletonCourses/SkeletonAllCourses"
import { useEffect, useState } from "react";
import axios from "axios";
import { PeopleFill } from "react-bootstrap-icons";
// import.meta.env.VITE_API_URL;

function Index(){
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;
    async function getData(){
        await axios.get(`${API_URL}/api/courses`, {
            headers: {
                Accept: 'application/json',
                "Content-Type": 'applications/json',
                "ngrok-skip-browser-warning": "69420"
            }
        })
        .then(response => {
            setData(response.data.courses)
            console.log(response.data)
        })
    }
    useEffect(()=>{
        getData()
        console.log(data)
        console.log(import.meta.env.VITE_API_URL);
    },[])
    // console.log(data)
    return (
        <div className="">
            <h1 className="text-3xl text-center font-medium md:w-10/12 lg:w-full xs:w-10/12">Pilihlah <p className="text-blue-500 inline">Materimu</p>, Ikuti <p className="text-green-500 inline">Kelasnya</p>, dan Raih <p className="text-yellow-400 inline">Pengalamanmu!</p></h1>
            {data.length != 0? 

            <div className='bisa-js__all-courses w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-[100px]'>
                
                {data.map((val, ind)=>{
                    return (
                        <div className='col-span-1 py-2 px-3 flex flex-col border border-slate-800 darK:drop-shadow-xl dark:shadow dark:shadow-slate-700 dark:bg-slate-900' key={ind}>
                            <div className='flex gap-2 h-full items-center'>
                                <img src={val.image} alt='logo course' className='w-14 h-14 mb-2'/>
                                <div className="relative">
                                    <h1 className='text-xl mb-2 font-medium w-max'>{val.name}</h1>
                                    <p className="text-sm">{val.user.name}</p>
                                    <p className="text-xs text-slate-600 font-bold">Expert Web Developer</p>
                                    {/* <div className='flex gap-2 items-center' ref={referenceElement} onMouseOver={()=>{
                                        setIsCourse(val)
                                    }} onMouseLeave={()=>{
                                        setIsCourse(null)
                                    }}>
                                        <PeopleFill/> 
                                        <p>{val.subscribers.length ? val.subscribers.length : '0'}</p>
                                    </div> */}
                                    {/* <ToolTip val={val} isCourse={isCourse} popperElement={popperElement} subscribers={val.subscribers.length}/> */}
                                    
                                </div>
                            </div>
                            <div className="p-2">
                            <PeopleFill/>
                            <p className="">{val.description.substr(0,14)+'...'}</p>
                            </div>
                            
                            <hr className="my-2"/>
                            <div className="flex ">
                                <button className="">Subscribe</button>
                                <button className='' onClick={()=>{
                                    navigate(val.slug)
                                }}>pelajari</button>
                            </div>
                        </div>
                    )})}
                </div>
                : <SkeletonAllCourses/> }
            
        </div>
    )
}
export default Index