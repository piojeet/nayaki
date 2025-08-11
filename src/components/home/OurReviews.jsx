import React from 'react'
import Marquee from 'react-fast-marquee'

const firstData = [
    {
        id: 1,
        name: "John Doe",
        review: "This is an amazing product! It has changed my life for the better.",
        img: "https://images.unsplash.com/photo-1742119971773-57e0131095b0?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userName: "johndoe123",
    },
    {
        id: 2,
        name: "Jane Smith",
        review: "I love using this service. It's user-friendly and efficient.",
        img: "https://images.unsplash.com/photo-1742119971773-57e0131095b0?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userName: "janesmith456",
    },
]

const secondData = [
    {
        id: 1,
        name: "Alice Johnson",
        review: "Fantastic experience! Highly recommend to everyone.",
        img: "https://images.unsplash.com/photo-1742119971773-57e0131095b0?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userName: "alicejohnson789",
    },
    {
        id: 2,
        name: "Bob Brown",
        review: "Great value for money. Will definitely use it again.",
        img: "https://images.unsplash.com/photo-1742119971773-57e0131095b0?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userName: "bobbrown1011",
    },
]

function OurReviews() {
    return (
        <div>
            <div className=''>
                <h2 className='text-center my-8 max-w-[1440px] w-full mx-auto p-4 md:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#000000] bg-clip-text text-transparent text-[100px] font-DegularSemibold'>Our Reviews</h2>
                <div className='relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(90deg,rgba(7,7,7,0.9)_0%,rgba(7,7,7,0.38)_23%,rgba(7,7,7,0.1)_43%,rgba(7,7,7,0.1)_64%,rgba(7,7,7,0.34)_82%,rgba(7,7,7,0.9)_100%)] before:pointer-events-none before:z-50 py-8'>
                    <div className=''>
                        <Marquee
                            speed={100}
                            autoFill={true}
                            direction="left"
                            pauseOnClick={true}
                        >
                            {firstData.map(user => (
                                <div key={user.id} className='mb-6 bg-white/10 p-6 rounded-lg mr-6'>
                                    <div className='flex items-center gap-4 mb-2'>
                                        <div className='size-10 rounded-full overflow-hidden'>
                                            <img src={user.img} alt="img" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='font-DMSansRegular'>
                                            <h3 className='text-xl text-light'>{user.name}</h3>
                                            <p className='text-sm text-gray-500'>@{user.userName}</p>
                                        </div>
                                    </div>
                                    <p className='text-light/60 font-DMSansRegular'>{user.review}</p>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                    <div className=''>
                        <Marquee speed={100} gradient={false} autoFill={true} direction='right' pauseOnClick={true}>
                            {secondData.map(user => (
                                <div key={user.id} className='bg-white/10 p-6 rounded-lg mr-6'>
                                    <div className='flex items-center gap-4 mb-2'>
                                        <div className='size-10 rounded-full overflow-hidden'>
                                            <img src={user.img} alt="img" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='font-DMSansRegular'>
                                            <h3 className='text-xl text-light'>{user.name}</h3>
                                            <p className='text-sm text-gray-500'>@{user.userName}</p>
                                        </div>
                                    </div>
                                    <p className='text-light/60 font-DMSansRegular'>{user.review}</p>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurReviews