function Header(){
    return (
        <header className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
                <button className="relative">
                <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-600 rounded-full"></span>
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405M19 8v3a1 1 0 001 1h3m-5 0a9 9 0 11-2.131-6.486M15 17v5a1 1 0 001 1h3a1 1 0 001-1v-5m-1 4h-2m-6-6V7m0 0H5l1.405 1.405M9 12h3m-3 4h3"></path>
                </svg>
                </button>
                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full"/>
            </div>
        </header>
    )
}

export default Header