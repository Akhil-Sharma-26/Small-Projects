import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-2 mt-0 w-full">
            <div className="container mx-auto flex items-center justify-evenly">
                <div className="flex text-white font-extrabold ">
                    <a href="/" className="mr-4 hover:text-gray-100">
                        Home
                    </a>
                </div>
                <div className=' text-white font-extrabold md:block hidden'>
                    <a href="/" className="mr-4 hover:text-gray-100">
                    It's just has Home tab Button
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;