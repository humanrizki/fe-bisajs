import { useState } from "react";

function SideNavbar(){
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <aside className="w-64 bg-gray-800 text-gray-100">
            <div className="p-6 text-2xl font-semibold">TailAdmin</div>
            <nav className="mt-10">
                <a href="#" className="flex items-center p-2 text-gray-400 hover:text-gray-100 hover:bg-gray-600">
                    <span className="ml-4">Dashboard</span>
                </a>
                <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center p-2 mt-2 text-gray-400 hover:text-gray-100 hover:bg-gray-600 w-full">
                    <span className="ml-4">eCommerce</span>
                    <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    </button>
                    {dropdownOpen && (
                        <div className=" w-full bg-gray-700">
                            <a href="#" className="block p-2 pl-10 text-gray-300 hover:bg-gray-600">Option 1</a>
                            <a href="#" className="block p-2 pl-10 text-gray-300 hover:bg-gray-600">Option 2</a>
                            <a href="#" className="block p-2 pl-10 text-gray-300 hover:bg-gray-600">Option 3</a>
                        </div>
                    )}
                </div>
                <a href="#" className="flex items-center p-2 mt-2 text-gray-400 hover:text-gray-100 hover:bg-gray-600">
                    <span className="ml-4">Analytics</span>
                </a>
                <a href="#" className="flex items-center p-2 mt-2 text-gray-400 hover:text-gray-100 hover:bg-gray-600">
                    <span className="ml-4">Marketing</span>
                </a>
                <a href="#" className="flex items-center p-2 mt-2 text-gray-400 hover:text-gray-100 hover:bg-gray-600">
                    <span className="ml-4">CRM</span>
                </a>
                <a href="#" className="flex items-center p-2 mt-2 text-gray-400 hover:text-gray-100 hover:bg-gray-600">
                    <span className="ml-4">Stocks</span>
                </a>
            </nav>
        </aside>
    )
}

export default SideNavbar