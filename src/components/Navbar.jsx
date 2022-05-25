import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navbar() {

    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu)
    }
    return (
        <div className=''>
            <div className='px-4 flex justify-between items-center flex items-center '>

                <h3 className='font-bold text-3xl text-[#4bd4f2] w-full '>Blaze.</h3>
                <ul className='hidden md:flex text-center'>
                    <li className='px-4 mt-2'>Home</li>
                    <li className='px-4 mt-2'>Account</li>
                    <li className='px-4 mt-2'>Resources</li>
                    <li className='mt-1 px-4'>Get Started</li>
                </ul>

                <div className='md:hidden'>
                    {menu ? <XIcon onClick={handleClick} className="text-white w-5" /> : <MenuIcon onClick={handleClick} className="text-white w-5" />}

                </div>

            </div>
            {menu && <ul className='md:hidden absolute bg-[#000022] w-full h-full px-4 text-center mt-8'>
                <li className='w-full border-b-2 border-slate-400 py-4 text-lg'>
                    Home
                </li>
                <li className='w-full border-b-2 border-slate-400 py-4 text-lg'>Account</li>
                <li className='w-full border-b-2 border-slate-400 py-4 text-lg'>Resources</li>
                <li className='w-full py-4 text-lg'>Sign In</li>
                <button className='w-[40%] bg-slate-900 border border-white mt-4 py-2'>Get Started</button>

            </ul>}

        </div>
    );
}

export default Navbar;