import React from 'react'
import Link from '../../assets/Link.png'

function JoinThousands() {
  return (
    <div>
        <div className='max-w-[1440px] w-full mx-auto p-4 md:px-8'>
            <h2 className='bg-gradient-to-b from-[#FFFFFF] to-[#000000] bg-clip-text text-transparent text-[60px] font-DegularSemibold text-center'>Join thousands</h2>
            <div className='flex justify-center items-center gap-4 mt-6'>
                <img src={Link} alt="img" />
                <img src={Link} alt="img" />
                <img src={Link} alt="img" />
                <img src={Link} alt="img" />
                <img src={Link} alt="img" />
                <img src={Link} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default JoinThousands