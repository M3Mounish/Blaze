import React from 'react';
import Img from '../assets/analytics.png'

function Info() {
    return (
        <div className='bg-slate-100 py-16 px-4 mt-16 '>
            <div className='grid md:grid-cols-5'>
                <div className='md:col-span-2'>
                    <img src={Img} alt="analytics" className='w-64 md:ml-24 mt-4' />
                </div>
                <div className='md:col-span-3 text-black flex flex-col '>
                    <h4 className='uppercase text-[#4bd4f2]'>data analytics dashboard</h4>
                    <h3 className='text-3xl font-bold py-4'>Manage data analytics centrally</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias animi a tempore qui incidunt dolorem iure. Aliquam, tempora magnam corporis commodi voluptates molestiae, quia ab aliquid eos ipsa aperiam exercitationem?</p>
                    <button className='mt-8 bg-black border rounded p-2 text-white w-[50%]'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Info;