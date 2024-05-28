import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <main className="relative px-10 py-20 text-white bg-center bg-cover" style={{ backgroundImage: `url('/assets/bg_img.jpg')` }}>
            <div className="container relative z-10 flex flex-col items-center px-4 mx-auto text-center lg:px-12">
                <h1 className="text-3xl font-bold md:text-4xl">Proper Guidance. Smarter Decisions. Better Outcomes.</h1>
                <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    <Link to="/audit-services" className="flex items-center justify-center p-4 space-x-2 bg-orange-500 rounded">
                        <i className="text-2xl fas fa-book"></i>
                        <span>AUDIT</span>
                    </Link>
                    <Link to="/direct-tax" className="flex items-center justify-center p-4 space-x-2 bg-orange-500 rounded">
                        <i className="text-2xl fas fa-file-alt"></i>
                        <span>DIRECT TAX</span>
                    </Link>
                    <Link to="/cfo-services" className="flex items-center justify-center p-4 space-x-2 bg-orange-500 rounded">
                        <i className="text-2xl fas fa-user-tie"></i>
                        <span>CFO SERVICE</span>
                    </Link>
                    <Link to="/consultancy" className="flex items-center justify-center p-4 space-x-2 bg-orange-500 rounded">
                        <i className="text-2xl fas fa-users"></i>
                        <span>CONSULTANCY SERVICE</span>
                    </Link>
                    <Link to="/indirect-tax" className="flex items-center justify-center p-4 space-x-2 bg-orange-500 rounded">
                        <i className="text-2xl fas fa-file-invoice-dollar"></i>
                        <span>INDIRECT TAX</span>
                    </Link>
                    <Link to="/corporate-services" className="flex items-center justify-center p-4 space-x-2 bg-orange-500 rounded">
                        <i className="text-2xl fas fa-briefcase"></i>
                        <span>CORPORATE SERVICE</span>
                    </Link>
                </div>
            </div>
            <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
        </main>
    );
};

export default Main;
