import data_courses from "./Data/data_courses";
function AllCourses(){
    return (
        <div className='bisa-js__courses w-10/12 mx-auto gap-y-5 gap-x-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-[250px]'>
            {data_courses.map((val, ind)=>{
                return (
                    <div className='bisa-js__language col-span-1 grid grid-cols-5 gap-x-2 border dark:border-slate-600 border-slate-800' key={ind}>
                        <div className='col-span-2'>
                            <img src={val.img} alt={val.alt} className='w-full'/>
                        </div>
                        <div className='col-span-3 flex items-center'>
                            <a href={val.link} className="hover:text-blue-500"><p>{val.title}</p></a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default AllCourses;