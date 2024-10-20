"use client";

import { useState } from 'react';


import ClientIcon from "../../public/assets/ClientIcon.svg"
import ClientImage from "../../public/assets/ClientImage.svg"
import ConsultantImage from "../../public/assets/ConsultantImage.png"
// import ConsultantIcon from "../../public/assets/ConsultantIcon.svg"
import Image from "next/image";

export function OrientedPeople() {

    const [activeClient, setActiveClient] = useState(1); // 1 for first client, 2 for second client

    // Function to handle clicks on the client sections
    const handleClientClick = (clientId: number) => {
      setActiveClient(clientId);
    };
    return(
        <div className="pt-16">
            <div>
                <h1 className="text-[49px] leading-[58px] text-[#101828] max-w-[898px] text-center mx-auto font-bold">Result Oriented People Achieve More With Consultia, Globally.</h1>
            </div>

            <div>
               
            <div>
                {/* Toggle Buttons Section */}
                <div className="pt-10 flex items-center justify-center gap-10 lg:gap-32 flex-wrap">
                    {/* First client toggle button */}
                    <div
                        className={`flex items-center justify-start gap-2 lg:gap-[5px] cursor-pointer ${
                        activeClient === 1 ? 'opacity-100' : 'opacity-50'
                        }`}
                        onClick={() => handleClientClick(1)}
                    >
                        <Image src={ClientIcon} alt="ClientIcon" />
                        <h1
                        className={`text-[16px] lg:text-[20px] leading-[20px] lg:leading-[24.2px] font-semibold ${
                            activeClient === 1 ? 'text-[#5B52B6]' : 'text-gray-500'
                        }`}
                        >
                        Clients
                        </h1>
                    </div>

                    {/* Second client toggle button */}
                    <div
                        className={`flex items-center justify-start gap-2 lg:gap-[5px] cursor-pointer ${
                        activeClient === 2 ? 'opacity-100' : 'opacity-50'
                        }`}
                        onClick={() => handleClientClick(2)}
                    >
                        <Image src={ClientIcon} alt="ClientIcon" />
                        <h1
                        className={`text-[16px] lg:text-[20px] leading-[20px] lg:leading-[24.2px] font-semibold ${
                            activeClient === 2 ? 'text-[#5B52B6]' : 'text-gray-500'
                        }`}
                        >
                        Consultants
                        </h1>
                    </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="pt-10 lg:pt-16 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28">
                    {/* First client content (visible when activeClient is 1) */}
                    {activeClient === 1 && (
                    <>
                        <div className="max-w-[300px] lg:max-w-none ">
                            <Image src={ClientImage} alt="ClientImage 1" className="rounded-[8px]" />
                        </div>
                        <div className="text-center lg:text-left">
                        <h1 className="text-[20px] lg:text-[25px] leading-[30px] lg:leading-[37.5px] font-bold max-w-[305px] lg:max-w-[505px] text-[#101828]">
                            Your go-to platform for finding the right consulting service providers, regardless of your industry in Africa.
                        </h1>
                        <p className="pt-[15px] text-[#101828] text-[14px] lg:text-[16px] leading-[21.1px] lg:leading-[23.1px] max-w-[305px] lg:max-w-[505px]">
                            Easily find vetted consultants and leverage Consultia&apos;s tools to submit job requisitions from your personalized dashboard. Monitor the progress of your project on the go and never miss any compliance requirements for your business or your clients.
                        </p>
                        <h2 className="pt-[15px] text-[#5B52B6] underline text-[15px] lg:text-[17px] leading-[22px] lg:leading-[24px] font-semibold cursor-pointer">
                            Read more
                        </h2>
                        </div>
                    </>
                    )}

                    {/* Second client content (visible when activeClient is 2) */}
                    {activeClient === 2 && (
                    <>
                        <div className=" max-w-[300px] lg:max-w-none">
                        <Image src={ConsultantImage} alt="ConsultantImage" className="rounded-[8px]" />
                        </div>
                        <div className="text-center lg:text-left">
                        <h1 className="text-[20px] lg:text-[25px] leading-[30px] lg:leading-[37.5px] font-bold max-w-[305px] lg:max-w-[505px] text-[#101828]">
                            Consultia is your trusted platform when you need well paying consulting projects. 
                        </h1>
                        <p className="pt-[15px] text-[#101828] text-[14px] lg:text-[16px] leading-[21.1px] lg:leading-[23.1px] max-w-[305px] lg:max-w-[505px]">
                            Streamline your workflow and expand your consulting reach. Tap into the growing pool of ready clients from all over the world, effortlessly.
                        </p>
                        <h2 className="pt-[15px] text-[#5B52B6] underline text-[15px] lg:text-[17px] leading-[22px] lg:leading-[24px] font-semibold cursor-pointer">
                            Read more
                        </h2>
                        </div>
                    </>
                    )}
                </div>

                
            </div>
        </div>
    )
}