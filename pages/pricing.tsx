
import React, { useState } from 'react';
import { Navbar } from "@/app/components/Navbar";
import "../app/globals.css";
import Image from 'next/image';
import tickCircle from "../public/assets/tick-circle.svg"
import CheckWhite from "../public/assets/CheckWhite.svg"
import add from "../public/assets/add.svg";
import { JoinOurMission } from '@/app/components/JoinOurMission';
import { Footer } from '@/app/components/Footer';
import Link from 'next/link';



const Pricing = () => {

    // Create an array to manage the open state of multiple accordions
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        // If the clicked accordion is already open, close it; otherwise, open the clicked one
        setOpenIndex(openIndex === index ? null : index);
    };

    // State to track the toggle (false = monthly, true = annual)
    const [isAnnual, setIsAnnual] = useState(false);

    // Toggle the state when the button is clicked
    const togglePlan = () => {
        setIsAnnual((prevState: any) => !prevState);
    };
  
    return(
       <>

            <Navbar />

            <div className="pt-10">
                <div>
                    <h1 className="lg:text-[61px] text-[39px] leading-[46.8px] lg:leading-[73.2px] font-extrabold text-[#101828] max-w-[850px] text-center mx-auto">Flexible Pricing Plans to Fit Your Consultancy&apos;s Needs</h1>
                </div>

                <div className="flex items-center justify-center py-8 space-x-4">
                <span className={`text-[16px] leading-[24px] font-semibold ${!isAnnual ? 'text-[#5B52B6]' : 'text-gray-600'}`}>
                    Billed Monthly
                </span>
                <div
                     onClick={togglePlan}
                     className="relative w-[60px] h-[34px] rounded-full cursor-pointer transition-colors duration-300"
                     style={{
                         backgroundColor: isAnnual ? '#5B52B6' : 'rgb(209, 213, 219)',  // Tailwind's gray-300
                    }}
                >
                    <div
                    className={`absolute top-0.5 left-1 w-[30px] h-[30px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                        isAnnual ? 'translate-x-[26px] bg-[#5B52B6]' : ''
                    }`}
                    ></div>
                </div>
                <span className={`text-[16px] leading-[24px] font-semibold ${isAnnual ? 'text-[#5B52B6]' : 'text-gray-600'}`}>
                    Billed Yearly
                     <span className="text-[16px] leading-[22.4px] font-normal pl-[10px]">(save 20%)</span>
                </span>
                </div>

                <div className="lg:-mt-20">
                  
                        <div className="lg:flex lg:flex-row flex flex-col items-center justify-center gap-[60px]">

                            <div className="max-w-[374px] border-[1px] border-[#BEC3CE] p-[24px] rounded-[20px]">
                                <h2 className="text-[#101828] text-[24px] leading-[29.05px] font-semibold">Essential Plan</h2>
                                <h1 className="pt-[20px] text-[#101828] text-[36px] leading-[43.57px] font-semibold">{isAnnual ? "N120,000/Annum" : "N10,000/Month"}</h1>
                                <p className="pt-[10px] text-[#5B52B6] text-[20px] leading-[30px] font-normal">14 Days Free Trials</p>
                                <div className="pt-[35px] border-b-[1px] border-b-[#CFCDEC] pb-10">
                                    <button className="bg-[#5B52B6] text-white text-[16.5px] leading-[19.8px] font-bold w-[326px] p-[10px] rounded-[8px]">
                                        Get Started
                                    </button>
                                </div>
                                <div className="pt-10 flex flex-col items-left justify-start gap-y-[10px]">
                                    <h1 className="text-[#101828] text-[20px] leading-[24.2px] font-semibold">Core Features</h1>
                                    <div className="flex flex-col items-left justify-start gap-y-[10px]">
                                        <div className="flex items-center gap-[7px]">
                                            <Image src={tickCircle} alt="tickCircle" />
                                            <p className="text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Client Onboarding</p>
                                        </div>
                                        <div className="flex items-center gap-[7px]">
                                            <Image src={tickCircle} alt="tickCircle" />
                                            <p className="text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Basic Task Management</p>
                                        </div>
                                        <div className="flex items-center gap-[7px]">
                                            <Image src={tickCircle} alt="tickCircle" />
                                            <p className="text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Basic Compliance Tracking</p>
                                        </div>
                                        <div className="flex items-center gap-[7px]">
                                            <Image src={tickCircle} alt="tickCircle" />
                                            <p className="text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Invoicing</p>
                                        </div>
                                        <div className="flex items-center gap-[7px]">
                                            <Image src={tickCircle} alt="tickCircle" />
                                            <p className="text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Up to 5 clients</p>
                                        </div>
                                        <div className="flex items-center gap-[7px]">
                                            <Image src={tickCircle} alt="tickCircle" />
                                            <p className="text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Email Support</p>
                                        </div>
                                        <div className="flex items-start gap-[7px]">
                                            <Image src={tickCircle} alt="tickCircle" />
                                            <p className="max-w-[270px] text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Best for small consultancies just getting started</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:pt-[55px]">
                                <div className="max-w-[374px] lg:h-[677px]   border-[1px] border-[#BEC3CE] p-[24px] rounded-[20px]">
                                    <h2 className="text-[#101828] text-[24px] leading-[29.05px] font-semibold">Professional Plan</h2>
                                    <h1 className="pt-[20px] text-[#101828] text-[36px] leading-[43.57px] font-semibold">{isAnnual ? "N360,000/Annum" : "N30,000/Month"}</h1>
                                    <p className="pt-[10px] text-[#5B52B6] text-[20px] leading-[30px] font-normal">14 Days Free Trials</p>
                                    <div className="pt-[35px] border-b-[1px] border-b-[#CFCDEC] pb-10">
                                        <button className="bg-[#5B52B6] text-white text-[16.5px] leading-[19.8px] font-bold w-[326px] p-[10px] rounded-[8px]">
                                            Get Started
                                        </button>
                                    </div>
                                    <div className="pt-10 flex flex-col items-left justify-start gap-y-[10px]">
                                        <h1 className="text-[#101828] text-[20px] leading-[24.2px] font-semibold">Core Features</h1>
                                        <div className="flex flex-col items-left justify-start gap-y-[10px]">
                                            <div className="flex items-center gap-[7px]">
                                                <Image src={tickCircle} alt="tickCircle" />
                                                <p className="text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Everythig in essential</p>
                                            </div>
                                            <div className="flex items-center gap-[7px]">
                                                <Image src={tickCircle} alt="tickCircle" />
                                                <p className="text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Advanced Task Management</p>
                                            </div>
                                            <div className="flex items-center gap-[7px]">
                                                <Image src={tickCircle} alt="tickCircle" />
                                                <p className="text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Advanced Compliance Tracking</p>
                                            </div>
                                            <div className="flex items-center gap-[7px]">
                                                <Image src={tickCircle} alt="tickCircle" />
                                                <p className="text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Reporting & Analytics</p>
                                            </div>
                                            <div className="flex items-center gap-[7px]">
                                                <Image src={tickCircle} alt="tickCircle" />
                                                <p className="text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Up to 20 clients</p>
                                            </div>
                                            <div className="flex items-center gap-[7px]">
                                                <Image src={tickCircle} alt="tickCircle" />
                                                <p className="text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Priority Email Support</p>
                                            </div>
                                            <div className="flex items-start gap-[7px]">
                                                <Image src={tickCircle} alt="tickCircle" />
                                                <p className="max-w-[270px] text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Phone Support</p>
                                            </div>
                                            <div className="flex items-start gap-[7px]">
                                                <Image src={tickCircle} alt="tickCircle" />
                                                <p className="max-w-[260px] text-[16.5px] leading-[23.1px] font-normal text-[#101828]">Ideal for growing consultancy firms that need a few key clients to expand their client base.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:pt-[85px]">
                                <div className="max-w-[374px] bg-[#5B52B6] lg:h-[713px] border-[1px] border-[#BEC3CE] p-[24px] rounded-[20px]">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-white text-[24px] leading-[29.05px] font-semibold">Enterprise Plan</h2>

                                        <div className="w-[82px] bg-white rounded-[100px] p-[10px]">
                                            <h3 className="text-[#101828]  text-[10px] leading-[12px] font-bold">BEST VALUE</h3>
                                        </div>
                                    </div>
                                    <h1 className="pt-[20px] text-white text-[36px] leading-[43.57px] font-semibold"> {isAnnual ? "N720,000/Annum" : "N60,000/Month"}</h1>
                                    <p className="pt-[10px] text-white text-[20px] leading-[30px] font-normal">14 Days Free Trials</p>
                                    <div className="pt-[35px] border-b-[1px] border-b-[#CFCDEC] pb-10">
                                        <button className="bg-white text-[#5B52B6] text-[16.5px] leading-[19.8px] font-bold w-[326px] p-[10px] rounded-[8px]">
                                            Get Started
                                        </button>
                                    </div>
                                    <div className="pt-10 flex flex-col items-left justify-start gap-y-[10px]">
                                        <h1 className="text-white text-[20px] leading-[24.2px] font-semibold">Core Features</h1>
                                        <div className="flex flex-col text-white items-left justify-start gap-y-[10px]">
                                            <div className="flex items-center gap-[7px]">
                                                <Image src={CheckWhite} alt="CheckWhite" />
                                                <p className="text-[16.5px] leading-[23.1px] font-normal text-white">Everything in professional</p>
                                            </div>
                                            <div className="flex items-center gap-[7px]">
                                                <Image src={CheckWhite} alt="CheckWhite" />
                                                <p className="text-[16.5px] leading-[23.1px] font-normal text-white">Custom Workflows</p>
                                            </div>
                                            <div className="flex items-center gap-[7px]">
                                                <Image src={CheckWhite} alt="CheckWhite" />
                                                <p className="text-[16.5px] leading-[23.1px] font-normal text-white">API Access</p>
                                            </div>
                                            <div className="flex items-center gap-[7px]">
                                                <Image src={CheckWhite} alt="CheckWhite" />
                                                <p className="text-[16.5px] leading-[23.1px] font-normal text-white">Premium Support</p>
                                            </div>
                                            <div className="flex items-center gap-[7px]">
                                                <Image src={CheckWhite} alt="CheckWhite" />
                                                <p className="text-[16.5px] leading-[23.1px] font-normal text-white">Dedicated Account Manager</p>
                                            </div>
                                            <div className="flex items-center gap-[7px]">
                                                <Image src={CheckWhite} alt="CheckWhite" />
                                                <p className="text-[16.5px] leading-[23.1px] font-normal text-white">Unlimited clients</p>
                                            </div>
                                            <div className="flex items-start gap-[7px]">
                                                <Image src={CheckWhite} alt="CheckWhite" />
                                                <p className="max-w-[270px] text-[16.5px] leading-[23.1px] font-normal text-white">24/7 Premium Support</p>
                                            </div>

                                            <div className="flex items-start gap-[7px]">
                                                <Image src={CheckWhite} alt="CheckWhite" />
                                                <p className="max-w-[270px] text-[16.5px] leading-[23.1px] font-normal text-white">Custom Training</p>
                                            </div>

                                            <div className="flex items-start gap-[7px]">
                                                <Image src={CheckWhite} alt="CheckWhite" />
                                                <p className="max-w-[294px] text-[16.5px] leading-[23.1px] font-normal text-white">Ideal for consultancy firms seeking access to a large client base for rapid, exponential growth.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                </div>

                <div className="pt-20">
                    <h1 className="flex flex-col items-center justify-center text-center text-[#101828] text-[49px] leading-[68.6px] font-bold">Frequently Asked Questions</h1>

                    <div className="pt-10 flex flex-col items-center justify-center p-[20px]">
                        {/* First Accordion */}
                        <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                            <div 
                                className="flex items-center justify-between cursor-pointer p-4" 
                                onClick={() => toggleAccordion(0)}
                            >
                            
                                <h1 className="text-gray-700">What is Consultia?</h1>
                                <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                        
                            </div>
                            {openIndex === 0 && (
                                <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                    <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                                </div>
                            )}
                        </div>

                        <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                            <div 
                                className="flex items-center justify-between cursor-pointer p-4" 
                                onClick={() => toggleAccordion(1)}
                            >
                            
                                <h1 className="text-gray-700">Who is Consultia for?</h1>
                                <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                        
                            </div>
                            {openIndex === 1 && (
                                <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                    <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                                </div>
                            )}
                        </div>

                        <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                            <div 
                                className="flex items-center justify-between cursor-pointer p-4" 
                                onClick={() => toggleAccordion(2)}
                            >
                            
                                <h1 className="text-gray-700">What features does Consultia offer?</h1>
                                <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                        
                            </div>
                            {openIndex === 2 && (
                                <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                    <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                                </div>
                            )}
                        </div>

                        <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                            <div 
                                className="flex items-center justify-between cursor-pointer p-4" 
                                onClick={() => toggleAccordion(3)}
                            >
                            
                                <h1 className="text-gray-700">How does the subscription model work?</h1>
                                <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                        
                            </div>
                            {openIndex === 3 && (
                                <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                    <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                                </div>
                            )}
                        </div>

                        <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                            <div 
                                className="flex items-center justify-between cursor-pointer p-4" 
                                onClick={() => toggleAccordion(4)}
                            >
                            
                                <h1 className="text-gray-700">How do I get started with Consultia?</h1>
                                <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                        
                            </div>
                            {openIndex === 4 && (
                                <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                    <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                                </div>
                            )}
                        </div>

                        <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                            <div 
                                className="flex items-center justify-between cursor-pointer p-4" 
                                onClick={() => toggleAccordion(5)}
                            >
                            
                                <h1 className="text-gray-700">Is there a free trial available?</h1>
                                <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                        
                            </div>
                            {openIndex === 5 && (
                                <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                    <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                                </div>
                            )}
                        </div>

                        <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                            <div 
                                className="flex items-center justify-between cursor-pointer p-4" 
                                onClick={() => toggleAccordion(6)}
                            >
                            
                                <h1 className="text-gray-700">Is my data secure on Consultia?</h1>
                                <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                        
                            </div>
                            {openIndex === 6 && (
                                <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                    <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                                </div>
                            )}
                        </div>


                        <Link href="/faq">
                            <div className="pt-[30px]">
                                <button className="text-[16px] bg-[#5B52B6] h-[48px] text-white w-[171px] p-[10px] font-bold rounded-[8px] leading-[19.2px]">
                                    See More
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <JoinOurMission />

            <Footer />
       
       </>
    )
}


export default Pricing;