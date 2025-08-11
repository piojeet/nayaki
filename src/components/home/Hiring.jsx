import React from 'react'
import Img1 from '../../assets/brands/64066fd9ab6977ea0d96a99c_OrangeTheory-black.png'
import Img2 from '../../assets/brands/64066fd9aecb8372f7768ce2_NCR-black.svg.png'
import Img3 from '../../assets/brands/64066fd9aecb83285a768ce3_Greenhouse-black.svg.png'
import Img4 from '../../assets/brands/64066fd9d6034fce0d6adf51_mondaycom-black.svg.png'
import Img5 from '../../assets/brands/64066fd96ede5e52a5e3ff07_Philips-black.svg.png'
import Img6 from '../../assets/brands/64066fd9627136a5c3ab515a_Dropbox-black.svg.png'
import Img7 from '../../assets/brands/64066fd89707577dbdea9a58_Dell-black.svg.png'
import Img8 from '../../assets/brands/64066fda627136d848ab5163_TheNewYorkTimes-black.svg.png'
import Img9 from '../../assets/brands/64066fdaf7ec2d7c22872c42_Vice-black.svg.png'
import Img10 from '../../assets/brands/64066fdaf10ccf3fa1b5fda8_Rakuten-black.svg.png'
import Img11 from '../../assets/brands/64066fdb882a9fc8e3a79c1c_Ted-black.svg.png'
import Marquee from 'react-fast-marquee'

const data = [
    {
        id: 1,
        img: Img1
    },
    {
        id: 2,
        img: Img2
    },
    {
        id: 3,
        img: Img3
    },
    {
        id: 4,
        img: Img4
    },
    {
        id: 5,
        img: Img5
    },
    {
        id: 6,
        img: Img6
    },
    {
        id: 7,
        img: Img7
    },
    {
        id: 8,
        img: Img8
    },
    {
        id: 9,
        img: Img9
    },
    {
        id: 10,
        img: Img10
    },
    {
        id: 11,
        img: Img11
    }
];
function Hiring() {
    return (
        <div>
            <div>
                <h2 className='bg-gradient-to-b from-[#FFFFFF] to-[#000000] bg-clip-text text-transparent text-[60px] font-DegularSemibold text-center max-w-[1440px] w-full mx-auto'>They Are Hiring</h2>
                <div className='space-y-8 mt-6'>
                    <div className=''>
                        <Marquee
                            speed={70}
                            autoFill={true}
                            direction="left"
                            pauseOnClick={true}
                        >
                            {data.map((item) => (
                                <div key={item.id} className='mr-10'>
                                    <img src={item.img} alt={`Company ${item.id}`} className='h-8 object-contain' />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                    <div className=''>
                        <Marquee
                            speed={70}
                            autoFill={true}
                            direction="right"
                            pauseOnClick={true}
                        >
                            {data.map((item) => (
                                <div key={item.id} className='mr-10'>
                                    <img src={item.img} alt={`Company ${item.id}`} className='h-8 object-contain' />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hiring