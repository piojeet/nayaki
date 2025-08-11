import React from 'react'
import Simple1 from '../../assets/simple1.png'
import Simple2 from '../../assets/simple2.png'
import Simple3 from '../../assets/simple3.png'

function SimpleSetup() {
    return (
        <div>
            <div className='max-w-[1440px] w-full mx-auto p-4 md:px-8 space-y-10'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className="text-5xl text-light mb-8 font-DMSansMedium font-medium">Simple Setup</h3>
                        <ul className="font-DMSansBold text-light/80 list-disc pl-4">
                            <li>Upload Resumes</li>
                            <li>Set Application Rules</li>
                            <li>Auto-Apply</li>
                            <li>Connect Portals</li>
                        </ul>
                    </div>
                    <div>
                        <img src={Simple1} alt="img" />
                    </div>
                </div>
                <div className='flex items-center justify-between gap-8'>
                    <div>
                        <img src={Simple2} alt="img" className='max-w-[600px] w-full' />
                    </div>
                    <div className='max-w-[600px] w-full'>
                        <h3 className="text-5xl text-light mb-8 font-DMSansMedium font-medium">Boost Your Job Search</h3>
                        <p className="font-DMSansBold text-light/80 list-disc">Job Tracking: Real-time job tracking
                            Job Discovery: Smart matching Algorithms
                            Automated Question Responses: application forms
                            Resume Scoring: Ensure resume meets ATS standards</p>
                    </div>
                </div>

                <div className='flex items-center relative gap-[15rem] font-DMSansRegular'>
                    <div>
                        <h3 className="text-5xl text-light mb-8 font-DMSansMedium font-medium">Key Benefits</h3>
                        <p className="font-DMSansBold text-light/80 list-disc leading-[2.2]">
                            40% Reduction in Operating Costs <br />

                            3x Faster Time-to-Hire <br />

                            25% Improvement in Candidate Quality <br />

                            50% Increase in Recruiter Productivity
                        </p>
                    </div>
                    <div className=''>
                        <div className='max-w-[500px] w-full bg-black/90 text-light p-6 rounded-lg'>
                            <p>Your qualifications, experience, and interview performance impressed our team, and we believe you'll make a valuable contribution to our organization.</p><br />
                            <div className='text-yellow-500'>Next Steps:</div>
                            <p>Our HR team will contact you shortly with further details regarding your joining formalities, start date, and other onboarding requirements.</p><br />
                            <p>Once again, congratulations and welcome to the family!🎉</p>
                        </div>
                    </div>
                        <img src={Simple3} alt="img" className='absolute -top-10 right-0 w-[400px]' />
                </div>
            </div>
        </div>
    )
}

export default SimpleSetup