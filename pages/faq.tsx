import React, { useState } from 'react';
import { Navbar } from "@/app/components/Navbar";
import "../app/globals.css";
import Image from 'next/image';
import add from "../public/assets/add.svg";
import { JoinOurMission } from "@/app/components/JoinOurMission";
import { Footer } from "@/app/components/Footer";
import { Testimonial } from "@/app/components/Testimonial";
const Faq = () => {
    // Create an array to manage the open state of multiple accordions
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        // If the clicked accordion is already open, close it; otherwise, open the clicked one
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />
            <div className="pt-10">
                <h1 className="flex flex-col items-center justify-center text-center text-[#101828] text-[49px] leading-[68.6px] font-bold">Frequently Asked Questions</h1>
                <div className="pt-[25px] lg:pt-0 flex flex-col items-start  justify-center p-[20px]">
                    <h1 className="text-[#5B52B6] text text-[25px] leading-[37.5px]  pb-[10px] lg:pb-0 font-bold">General</h1>

                    {/* First Accordion */}
                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(0)}
                        >
                        
                            <h1 className="text-gray-700">Can I change my plan later?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                       
                        </div>
                        {openIndex === 0 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    {/* Second Accordion */}
                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(1)}
                        >
                           
                            <h1 className="text-gray-700">Is there a free trial?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200"  />
                        
                        </div>
                        {openIndex === 1 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    {/* Third Accordion */}
                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(2)}
                        >
                            
                            <h1 className="text-gray-700">What payment methods do you accept?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200"  />
                       
                        </div>
                        {openIndex === 2 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-left justify-center p-[20px]">
                    <h1 className="text-[#5B52B6] text-[25px] leading-[37.5px] font-bold pt-[10px] lg:pt-0 pb-[10px] lg:pb-0 lg:max-w-[165px] text ">Consulting Agency</h1>
                    
                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(3)}
                        >
                          
                            <h1 className="text-gray-700">What is Consultia?</h1>
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
                           
                            <h1 className="text-gray-700">What is Consultia?</h1>
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
                            
                            <h1 className="text-gray-700">Who is Consultia for?</h1>
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
                          
                            <h1 className="text-gray-700">What features does Consultia offer?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                            
                        </div>
                        {openIndex === 6 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(7)}
                        >
                          
                            <h1 className="text-gray-700">How does the subscription model work?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                           
                        </div>
                        {openIndex === 7 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(8)}
                        >
                           
                            <h1 className="text-gray-700">What are the pricing plans?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                            
                        </div>
                        {openIndex === 8 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(9)}
                        >
               
                            <h1 className="text-gray-700">Can I upgrade or downgrade my subscription plan?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                           
                        </div>
                        {openIndex === 9 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(10)}
                        >
                           
                            <h1 className="text-gray-700">Is there a free trial available?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                           
                        </div>
                        {openIndex === 10 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(11)}
                        >
                       
                            <h1 className="text-gray-700">How do I get started with Consultia?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                           
                        </div>
                        {openIndex === 11 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(12)}
                        >
                           
                            <h1 className="text-gray-700">Is my data secure on Consultia?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                        
                        </div>
                        {openIndex === 12 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(13)}
                        >
                          
                            <h1 className="text-gray-700">Can I integrate Consultia with other tools?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                          
                        </div>
                        {openIndex === 13 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(14)}
                        >
                        
                            <h1 className="text-gray-700">What kind of support does Consultia offer?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                           
                        </div>
                        {openIndex === 14 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(15)}
                        >
                           
                            <h1 className="text-gray-700">How do I manage compliance with Consultia?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                            
                        </div>
                        {openIndex === 15 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(16)}
                        >
                           
                            <h1 className="text-gray-700">Can I customize the platform to suit my business needs?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                            
                        </div>
                        {openIndex === 16 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(17)}
                        >
                           
                            <h1 className="text-gray-700">How often is Consultia updated?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                         
                        </div>
                        {openIndex === 17 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(18)}
                        >
                           
                            <h1 className="text-gray-700">What happens if I cancel my subscription?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200" />
                         
                        </div>
                        {openIndex === 18 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p>Your detailed answer goes here. This section will show when the accordion is open.</p>
                            </div>
                        )}
                    </div>


                </div>
            </div>

            <Testimonial />

            <JoinOurMission />

            <Footer />
        </>
    );
};

export default Faq;
