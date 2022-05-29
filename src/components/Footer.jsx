import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
        <div className='w-full px-8 py-8'>
            <div className='grid grid-cols-2 md:grid-cols-6 max-w-[1280px] mx-auto'>

                <div className='col-span-2'>
                    <h3 className='text-[#4db4f2] text-2xl font-bold'>BLAZE.</h3>
                    <p className='text-xs text-slate-200'>----Mounish----</p>
                    <div className='mt-4 flex'>
                        <FaInstagram className='flex mr-2' />
                        <FaTwitter className='flex mx-2' />
                        <FaLinkedin className='flex mx-2' />
                        <FaFacebook className='flex mx-2' />
                    </div>
                </div>

                <div>
                    <h3 className='text-slate-400 font-semibold mt-2 '>Solutions</h3>
                    <p className='text-xs pt-1'>Analytics</p>
                    <p className='text-xs pt-1'>Marketing</p>
                    <p className='text-xs pt-1'>Commerce</p>
                    <p className='text-xs pt-1'>Insights</p>
                </div>
                <div>
                    <h3 className='text-slate-400 font-semibold mt-2 '>Support</h3>
                    <p className='text-xs pt-1'>Pricing</p>
                    <p className='text-xs pt-1'>Guides</p>
                    <p className='text-xs pt-1'>API Status</p>
                    <p className='text-xs pt-1'>Documentation</p>
                </div>
                <div>
                    <h3 className='text-slate-400 font-semibold mt-2 '>Company</h3>
                    <p className='text-xs pt-1'>About</p>
                    <p className='text-xs pt-1'>Blog</p>
                    <p className='text-xs pt-1'>Jobs</p>
                    <p className='text-xs pt-1'>Press</p>
                    <p className='text-xs pt-1'>Partners</p>
                </div>
                <div>
                    <h3 className='text-slate-400 font-semibold mt-2 '>Legal</h3>
                    <p className='text-xs pt-1'>Claims</p>
                    <p className='text-xs pt-1'>Terms</p>
                    <p className='text-xs pt-1'>Privacy</p>

                </div>
            </div>
        </div>
    );
}

export default Footer;