import React from 'react';

function Newsletter() {
    return (
        <div className='bg-black max-w-[1280px] mx-auto px-4 py-12'>
            <div className='grid md:grid-cols-2'>
                <div>
                    <h3 className='font-bold text-2xl'>Want tips & tricks to speed up your workflow?</h3>
                    <h4 className='text-sm'>Sign up to our newsletter and stay up to date.</h4>
                </div>
                <div className='pl-8 pt-4'>
                    <form>
                        <input type="text" placeholder=' enter your email' className='border rounded p-1' />
                        <button className='mx-2 px-2 py-1 bg-[#4bd4f2] text-black rounded-sm'>Sign up</button>
                    </form>
                    <p className='text-xs mt-2 pr-2'>We do care about your privacy. Read our <span className='underline text-[#4bd4f2]'>Privacy Policy</span> for more details.</p>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;