import classNames from "classnames"
import { useLocation } from "react-router-dom"
function NavbarMobile(){
    const location = useLocation().pathname
    return (
        <>
            <nav className='bisa-js__nav-mobile w-full md:hidden block overflow-hidden' >
                <div className='bisa-js__nav-pages p-2'>
                    <p className='font-medium text-base'>Pages</p>
                    <div className='w-full flex gap-y-2 items-start flex-col text-lg'>
                        <a href='/courses' className={classNames('w-full box-border py-2 px-4 border hover:border hover:border-blue-600', {'border-white':!location.includes('/courses')}, {'border-blue-600 font-medium text-blue-600':location.includes('/courses')})}>Courses</a>
                        <a href='/blogs' className={classNames('w-full box-border py-2 px-4 border hover:border hover:border-blue-600', {'border-white':!location.includes('/blogs')}, {'border-blue-600 font-medium text-blue-600':location.includes('/blogs')})}>Blog</a>
                    </div>
                </div>
            </nav>  
        </>
    )
}

export default NavbarMobile