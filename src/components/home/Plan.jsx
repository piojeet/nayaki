import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { FaFire } from 'react-icons/fa'
import { IoCheckmarkCircle } from 'react-icons/io5'

function Plan() {
    return (
        <div>
            <div className='max-w-[1440px] w-full mx-auto p-4 md:px-8 py-20'>
                <h2 className='bg-gradient-to-b from-[#FFFFFF] to-[#000000] bg-clip-text text-transparent text-[60px] font-DegularSemibold text-center'>Subscription Plans</h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-[1000px] mx-auto'>
                    <div className='bg-[#070707] border border-[#313131] rounded-2xl p-8'>
                        <div className='font-DMSansRegular bg-light py-1 px-3 text-primary w-fit rounded-md'>Single User</div>
                        <div className='font-DMSansBold text-light flex mt-8'><span className='text-2xl font-DMSansRegular'>$</span> <span className='text-5xl'>50</span></div>
                        <button className='py-2 px-4 w-full flex items-center justify-center bg-primary text-light font-DMSansRegular text-base mt-4 mb-8 rounded-full'>Buy now</button>
                        <div>
                            <div className='flex items-center gap-2 mb-3'>
                                <span className='text-primary'><AiFillCheckCircle /></span>
                                <div className='text-lg font-DMSansRegular text-light'>1 profile</div>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <span className='text-primary'><AiFillCheckCircle /></span>
                                <div className='text-lg font-DMSansRegular text-light'>1 profile</div>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <span className='text-primary'><AiFillCheckCircle /></span>
                                <div className='text-lg font-DMSansRegular text-light'>1 profile</div>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <span className='text-primary'><AiFillCheckCircle /></span>
                                <div className='text-lg font-DMSansRegular text-light'>1 profile</div>
                            </div>

                        </div>
                    </div>
                    <div className='relative'>
                        <div className='w-fit mx-auto bg-primary text-light font-DMSansRegular text-lg py-1 px-4 absolute left-1/2 -translate-x-1/2 -top-9 before:contents-[""] before:h-4 before:w-4 before:absolute before:rounded-[0_15px_0_0] before:bg-primary before:-right-1.5 before:bottom-0 rounded-tr-xl rounded-tl-xl after:contents-[""] after:h-4 after:w-4 after:absolute after:rounded-[0_15px_0_0] after:bg-dark after:-right-3.5 after:bottom-[3.5px] after:-rotate-[145deg]'>Best value <span className='absolute h-4 w-4 rounded-[0_15px_0_0] bg-primary -left-1.5 bottom-0 rounded-tr-xl rounded-tl-xl'></span> <span className='h-4 w-4 absolute rounded-[0_15px_0_0] bg-dark -left-3.5 bottom-[2px] rotate-[70deg]'></span></div>
                        <div className='bg-[#070707] border-[3px] border-primary rounded-2xl p-8'>
                            <div className='font-DMSansRegular bg-light py-1 px-3 text-primary w-fit rounded-md'>Single User</div>
                            <div className='font-DMSansBold text-light flex mt-8'><span className='text-2xl font-DMSansRegular'>$</span> <span className='text-5xl'>50</span></div>
                            <button className='py-2 px-4 w-full flex items-center justify-center bg-primary text-light font-DMSansRegular text-base mt-4 mb-8 rounded-full gap-2'><FaFire /> Buy now</button>
                            <div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <span className='text-primary'><AiFillCheckCircle /></span>
                                    <div className='text-lg font-DMSansRegular text-light'>1 profile</div>
                                </div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <span className='text-primary'><AiFillCheckCircle /></span>
                                    <div className='text-lg font-DMSansRegular text-light'>1 profile</div>
                                </div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <span className='text-primary'><AiFillCheckCircle /></span>
                                    <div className='text-lg font-DMSansRegular text-light'>1 profile</div>
                                </div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <span className='text-primary'><AiFillCheckCircle /></span>
                                    <div className='text-lg font-DMSansRegular text-light'>1 profile</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='bg-[#070707] border border-[#313131] rounded-2xl p-8'>
                        <div className='font-DMSansRegular bg-light py-1 px-3 text-primary w-fit rounded-md'>Single User</div>
                        <div className='font-DMSansBold text-light flex mt-8'><span className='text-2xl font-DMSansRegular'>$</span> <span className='text-5xl'>50</span></div>
                        <button className='py-2 px-4 w-full flex items-center justify-center bg-primary text-light font-DMSansRegular text-base mt-4 mb-8 rounded-full'>Buy now</button>
                        <div>
                            <div className='flex items-center gap-2 mb-3'>
                                <span className='text-primary'><AiFillCheckCircle /></span>
                                <div className='text-lg font-DMSansRegular text-light'>1 profile</div>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <span className='text-primary'><AiFillCheckCircle /></span>
                                <div className='text-lg font-DMSansRegular text-light'>1 profile</div>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <span className='text-primary'><AiFillCheckCircle /></span>
                                <div className='text-lg font-DMSansRegular text-light'>1 profile</div>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <span className='text-primary'><AiFillCheckCircle /></span>
                                <div className='text-lg font-DMSansRegular text-light'>1 profile</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan