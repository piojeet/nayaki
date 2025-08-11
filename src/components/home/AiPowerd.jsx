import React from 'react';
import Ai1 from '../../assets/ai1.png';
import Ai2 from '../../assets/ai2.png';

const data = [
    {
        id: 1,
        img: Ai1,
        heading: 'AI-Powered Job Application System ',
        disc: 'Automate your job search process and eliminate the hassle of manual applications. Our AI-powered tool applies to jobs across multiple job boards, saving you time and significantly increasing your chances of landing interviews.',
    },
    {
        id: 2,
        img: Ai2,
        heading: 'Core Features',
        disc: 'Automated Job Applications Effortless Application: Automatically submits applications to top job boards and career sites, tailored to your. \n\nMulti-Portal Integration Seamless Connectivity: Integrates with multiple job portals, streamlining your application process and saving you time.',
    },
    // Add more reviews as needed
];

function AiPowerd() {
    return (
        <div className="max-w-[1440px] mx-auto p-4 md:px-8 px-4">
            <div className="flex flex-col gap-12 py-12">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex items-center gap-20 flex-col md:flex-row ${index % 2 !== 0 ? '' : 'md:flex-row-reverse'
                            }`}
                    >
                        <img
                            src={item.img}
                            alt={item.heading}
                            className="w-full max-w-[450px] object-contain"
                        />
                        <div className="w-full">
                            <h3 className="text-5xl text-light mb-8 font-DMSansMedium font-medium">{item.heading}</h3>
                            {item.disc.split("\n\n").map((line, i) => (
                                <React.Fragment key={i}>
                                    <p className="font-DMSansBold text-light/80">{line}</p>
                                    <p className="h-6" />
                                </React.Fragment>
                            ))}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AiPowerd;
