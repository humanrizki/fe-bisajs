import React, { useState } from 'react';
import SideNavbar from '../Components/SideNavbar';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-bootstrap-icons';

const DashboardLayout = () => {
    return (
    <div className="flex min-h-screen bg-gray-100">
        <SideNavbar/>
        <main className="flex-1 p-6">
            <Header/>
            {/* <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 shadow rounded-lg flex items-center">
                <div className="p-3 rounded-full bg-blue-600 text-white mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6h4m6 0a9 9 0 11-9-9"></path>
                </svg>
                </div>
                <div>
                <h4 className="text-xl font-semibold">Apple</h4>
                <p className="text-gray-600">$410.5</p>
                <p className="text-red-600">-1.1%</p>
                </div>
            </div>
            <div className="bg-white p-4 shadow rounded-lg flex items-center">
                <div className="p-3 rounded-full bg-blue-600 text-white mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6h4m6 0a9 9 0 11-9-9"></path>
                </svg>
                </div>
                <div>
                <h4 className="text-xl font-semibold">Meta</h4>
                <p className="text-gray-600">$157.36</p>
                <p className="text-red-600">-0.1%</p>
                </div>
            </div>
            <div className="bg-white p-4 shadow rounded-lg flex items-center">
                <div className="p-3 rounded-full bg-blue-600 text-white mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6h4m6 0a9 9 0 11-9-9"></path>
                </svg>
                </div>
                <div>
                <h4 className="text-xl font-semibold">Google</h4>
                <p className="text-gray-600">$743.76</p>
                <p className="text-green-600">0.95%</p>
                </div>
            </div>
            </section>
            <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Total Investment</h2>
                <p className="text-gray-600">Invested Value: $1,279.95 <span className="text-green-600">1.22%</span></p>
                <p className="text-gray-600">Total Returns: $22,543.87 <span className="text-green-600">10.14%</span></p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">My Stocks</h2>
                <div className="flex flex-col space-y-2">
                <div className="flex justify-between text-gray-700">
                    <span>Apple Inc</span>
                    <span>$410.5</span>
                </div>
                <div className="flex justify-between text-gray-700">
                    <span>Google</span>
                    <span>$410.5</span>
                </div>
                <div className="flex justify-between text-gray-700">
                    <span>Tesla</span>
                    <span>$410.5</span>
                </div>
                </div>
            </div>
            </section> */}
            <Outlet/>
        </main>
    </div>
    );
};

export default DashboardLayout