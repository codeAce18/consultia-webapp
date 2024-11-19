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
                <div className="pt-[25px]  flex flex-col items-start  justify-center p-[20px]">

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
                                <p className="text-gray-600">Yes, you can change your plan at any time. Upgrades or downgrades will take effect immediately.</p>
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
                                <p className="text-gray-600">Yes, Consultia offers a 30-day free trial for new users. This allows consultants to explore the platform and access its features before committing to a subscription plan.</p>
                            </div>
                        )}
                    </div>

                    {/* Third Accordion */}
                    <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden ">
                        <div 
                            className="flex items-center justify-between cursor-pointer p-4" 
                            onClick={() => toggleAccordion(2)}
                        >
                            
                            <h1 className="text-gray-700">What payment methods do you accept?</h1>
                            <Image src={add} alt="add" className="ml-2 transition-transform duration-200"  />
                       
                        </div>
                        {openIndex === 2 && (
                            <div className="p-4 bg-gray-100 transition-all duration-300 ease-in-out">
                                <p className="text-gray-600">Consultia accepts major credit/debit cards, bank transfers, and mobile payment solutions to provide flexibility and convenience to users.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-left justify-center p-[20px] lg:pt-0">
                    
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
                                <p className="text-gray-600">Consultia is more than just a platform; it&apos;s a movement to redefine consultancy in Africa. It streamlines business management for consultancy firms while providing a dynamic marketplace for consultants to connect with clients. It combines essential business tools with advanced project and compliance management to empower consultants across Africa.</p>
                            </div>
                        )}
                    </div>

                    {/* <div className="w-full max-w-[1049px] mx-auto border border-[#E4E3EB] rounded-lg overflow-hidden mb-2">
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
                    </div> */}

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
                                <p className="text-gray-600">Consultia is designed for small, medium, and large consultancy firms, independent consultants, and clients seeking expert consultancy services across various industries in Africa. It caters to professionals who need a comprehensive platform to manage operations, ensure compliance, and enhance client relationships.</p>
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
                                <p  className="text-gray-600">Consultia offers a range of features, including: Client onboarding and management, Task and project management, Compliance tracking tools, Invoicing and billing system, Reporting and analytics, Custom workflows and API access, Marketplace access to connect with potential clients, Communication tools (chat, email support) and 24/7 support.</p>
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
                                <p className="text-gray-600">Consultia operates on a subscription-based model with three tiers—Essential, Professional, and Enterprise. Each tier comes with a set of features tailored to the needs of consultancies at different growth stages. Additionally, there is a 1% transaction fee on every paid invoice, capped at ₦50,000 per transaction.</p>
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
                                <p className="text-gray-600"> Essential Plan: ₦3,500 per month - Best for small consultancies just getting started.
                                Professional Plan: ₦9,000 per month - Ideal for growing firms needing advanced tools.
                                Enterprise Plan: ₦15,000 per month - Suited for large consultancies requiring custom workflows and premium support.
                                </p>
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
                                <p className="text-gray-600">Yes, users can upgrade or downgrade their subscription plans at any time. Changes will take effect immediately.</p>
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
                                <p className="text-gray-600">Yes, Consultia offers a 30-day free trial for new users. This allows consultants to explore the platform and access its features before committing to a subscription plan.</p>
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
                                <p className="text-gray-600">Getting started is simple:<br />
                                •	Sign up on the Consultia website and choose your plan.<br />
                                •	Complete the onboarding process by providing the necessary business details and documents.<br />
                                •	Start exploring the platform and utilizing its tools for your consultancy needs.
                                </p>
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
                                <p className="text-gray-600">Absolutely. Consultia uses industry-standard security measures, including data encryption, secure cloud storage, and regular security audits, to ensure that all user data is protected.</p>
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
                                <p className="text-gray-600">Yes, Consultia offers API access in the Enterprise Plan, allowing users to integrate the platform with other business tools and software for seamless operations.</p>
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
                                <p className="text-gray-600">Consultia provides:<br />
                                •	Email Support: Available for all plans.<br />
                                •	Priority Support: Included in the Professional and Enterprise plans.<br />
                                •	24/7 Premium Support: Exclusive to the Enterprise Plan.<br />
                                •	In-App Chat: For real-time assistance.<br />
                                •	Ticketing System: To raise specific queries and track their status.
                                </p>
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
                                <p className="text-gray-600">Consultia provides compliance tracking tools that help users manage regulatory requirements, monitor client documentation, and stay up-to-date with compliance obligations.</p>
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
                                <p className="text-gray-600">Yes, the Enterprise Plan allows for custom workflows and API access, making it possible to tailor the platform to fit unique business processes and requirements.</p>
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
                                <p className="text-gray-600">Consultia is continuously improved, with updates rolled out regularly. These include feature enhancements, security updates, and performance optimizations to keep the platform running smoothly.</p>
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
                                <p className="text-gray-600">If you cancel your subscription, your account will be restricted, limiting access to certain features. However, you will still be able to manage ongoing projects that clients have paid for until completion.</p>
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
