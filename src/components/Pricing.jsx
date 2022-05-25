import React from 'react';

function Pricing() {
    return (
        <div className='py-24 bg-slate-100 text-black'>
            <div className='grid md:grid-cols-3 px-16 '>
                <div className='border rounded-lg px-4 text-center py-4 shadow-lg  mx-6 my-4'>
                    <h3 className='text-xl font-bold'>Basic</h3>
                    <p className='flex font-bold text-lg justify-center py-4'>Free</p>

                    <div>
                        <p className='border-b border-b-slate-300 py-2 font-semibold text-sm '>50 GB storage</p>
                        <p className='border-b border-b-slate-300 py-2 font-semibold text-sm '>1 user allowed</p>
                        <p className='border-b border-b-slate-300 py-2 font-semibold text-sm '>5 GB daily bandwidth</p>
                    </div>
                    <button className='bg-[#4db4f2] px-2 py-1 rounded text-black mt-4'>Get started</button>
                </div>

                <div className='border rounded-lg px-4 text-center py-4 shadow-lg mx-6 my-4'>
                    <h3 className='text-xl font-bold'>Standard</h3>
                    <p className='flex font-bold text-lg justify-center py-4'>$29 <span className='flex flex-col justify-end text-sm'>/mo</span></p>

                    <div>
                        <p className='border-b border-b-slate-300 py-2 font-semibold text-sm '>500 GB storage</p>
                        <p className='border-b border-b-slate-300 py-2 font-semibold text-sm '>upto 10 users</p>
                        <p className='border-b border-b-slate-300 py-2 font-semibold text-sm '>25 GB daily bandwidth</p>
                    </div>
                    <button className='bg-black my-4 px-2 py-1 rounded text-[#4db4f2] mt-4'>Get started</button>
                </div>

                <div className='border rounded-lg px-4 text-center py-4 shadow-lg mx-6 my-4'>
                    <h3 className='text-xl font-bold'>Enterprise</h3>
                    <p className='flex font-bold text-lg justify-center py-4'>$99 <span className='flex flex-col justify-end text-sm'>/mo</span></p>

                    <div>
                        <p className='border-b border-b-slate-300 py-2 font-semibold text-sm '>10 TB storage</p>
                        <p className='border-b border-b-slate-300 py-2 font-semibold text-sm '>upto 100 users</p>
                        <p className='border-b border-b-slate-300 py-2 font-semibold text-sm '>Unlimited daily bandwidth</p>
                    </div>
                    <button className='bg-[#4db4f2] px-2 py-1 rounded text-black mt-4'>Get started</button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;