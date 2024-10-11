import { useEffect, useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import "../app/globals.css";
import { JoinOurMission } from "@/app/components/JoinOurMission";
import { Footer } from "@/app/components/Footer";
import Image from 'next/image';
import Chat from "../public/assets/Chat.svg"

const Termsofservice = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
        <>
        
            <Navbar />
            
        
            <div className="relative">
                <div className="bg-[#F0F0F9] w-full lg:h-[200px] h-[300px]">
                    <div className="flex flex-col items-center justify-center py-10">
                        <h1 className="text-[#101828] text-[61px] leading-[73.2px] font-bold mx-auto text-center">Terms of Service</h1>
                    </div>
                    <div className="lg:hidden lg:pt-[30px] flex flex-col items-center justify-center">
                        <h1>Last Updated: December 2024</h1>
                    </div>
                </div>

                <div className="hidden lg:pt-[30px] lg:flex flex-col items-end justify-end  max-w-[1240px]">
                    <h1>Last Updated: December 2024</h1>
                </div>

                <div className="p-[20px]">
                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">Welcome to Consultia!</h1>

                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">These Terms of Service (“Terms”) govern your access to and use of the Consultia website, platform, and services (collectively, the “Service”). By accessing or using our Service, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our Service.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">1. Acceptance of Terms</h1>

                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">By registering for, accessing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy, which is incorporated by reference. If you are using the Service on behalf of an organization, you agree to these Terms on behalf of that organization and represent that you have the authority to do so.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">2. Description of Service</h1>

                        <p className=" pt-[10px] text-[#41404B] text-[16px] leading-[24px]">Consultia provides a cloud-based Consultancy-as-a-Service (CaaS) platform designed to help consultancy firms manage their operations, including client onboarding, project management, compliance tracking, invoicing, and other related functions.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">3. Eligibility</h1>

                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">You must be at least 18 years old to use our Service. By using the Service, you represent and warrant that you meet this age requirement and that all information you provide is accurate and truthful.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">4. Account Registration</h1>

                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">To access certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary. You are responsible for safeguarding your account credentials and for any activities or actions that occur under your account. Consultia is not liable for any loss or damage arising from your failure to comply with this requirement.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">5. Subscription Plans and Payments</h1>

                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">Consultia offers various subscription plans, each with different levels of access and functionality. By selecting a subscription plan, you agree to pay the fees associated with that plan. All payments are due in advance and are non-refundable except as required by applicable law. Consultia reserves the right to change its subscription plans and pricing at any time, with notice to you.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">6. Use of the Service</h1>
                        <ul className="list-disc pl-5">
                            <li>
                                <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]"><span className="font-bold">License:</span> Subject to these Terms, Consultia grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service for your internal business purposes.</p>
                            </li>
                            <li>
                                <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]"><span className="font-bold">Prohibited Conduct:</span> You agree not to use the Service in any manner that:</p>
                            </li>
                            <li>
                                <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">Violates any applicable laws or regulations;</p>
                            </li>
                            <li>
                                <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">Infringes the rights of any third party, including intellectual property rights;</p>
                            </li>
                            <li>
                                <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">Interferes with or disrupts the integrity or performance of the Service;</p>
                            </li>
                            <li>
                                <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">Attempts to gain unauthorized access to the Service or its related systems or networks.</p>
                            </li>
                        </ul>
                        
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">7. User Content</h1>

                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">You are solely responsible for any content you upload, post, or otherwise transmit through the Service (“User Content”). By submitting User Content, you grant Consultia a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, modify, distribute, display, and perform such User Content in connection with the Service.
                        You represent and warrant that you have the right to grant this license and that your User Content does not violate any third-party rights or any applicable laws.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">8. Intellectual Property</h1>

                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">All rights, title, and interest in and to the Service, including any software, content, trademarks, and other intellectual property, are owned by Consultia or its licensors. You agree not to copy, modify, distribute, or create derivative works based on the Service or any part thereof without our prior written consent.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">9. Termination</h1>

                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">Consultia may suspend or terminate your access to the Service at any time, with or without cause, and with or without notice. Upon termination, your right to use the Service will immediately cease, and any data associated with your account may be deleted. You may terminate your account at any time by contacting us at support@consultia.africa.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">10. Limitation of Liability</h1>

                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">These Terms of To the maximum extent permitted by law, Consultia shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p>

                        <ul className="list-disc pl-5">
                            <li>
                                <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">Your use of or inability to use the Service;</p>
                            </li>

                            <li>
                                <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">Any unauthorized access to or use of our servers and/or any personal information stored therein;</p>
                               
                            </li>
                            <li>
                                <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">
                                    Any interruption or cessation of transmission to or from the Service;
                                </p>
                                
                            </li>
                            <li>
                                <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">
                                    Any bugs, viruses, or the like that may be transmitted to or through the Service by any third party.
                                </p>
                                
                            </li>
                        </ul>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">11. Indemnification</h1>

                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">You agree to indemnify, defend, and hold harmless Consultia, its officers, directors, employees, agents, and affiliates, from and against any and all claims, liabilities, damages, losses, and expenses, including reasonable legal fees and costs, arising out of or in any way connected with your use of the Service or your violation of these Terms.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">12. Modifications to the Service and Terms</h1>

                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">Consultia reserves the right to modify or discontinue the Service (or any part thereof) at any time, with or without notice. We may also modify these Terms at any time by posting the revised Terms on our website. Your continued use of the Service after such changes have been made constitutes your acceptance of the revised Terms.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">13. Governing Law and Dispute Resolution</h1>

                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law principles. Any disputes arising under or in connection with these Terms shall be resolved through good faith negotiations. If a resolution cannot be reached, the dispute shall be submitted to binding arbitration in Lagos, Nigeria.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto pt-[30px]">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">14. Contact Information</h1>
                        
                        <p className="pt-[10px] text-[#41404B] text-[16px] leading-[24px]">If you have any questions about these Terms or the Service, please contact us at:<br /><span className="text-[16.5px] leading-[19.8px] font-bold">The Consultia Technologies Ltd.</span><br />Email: support@consultia.africa</p>
                    </div>
                </div>

                <div className="Chat">
                <div className={`chat-box bg-[#5B52B6] flex items-center p-[12px] rounded-[20px] gap-[8px]`}>
                    <Image src={Chat} alt="Chatimg" />
                    <h1 className={`chat-text text-[20px] leading-[30px] font-medium text-[#FFFFFF] ${isScrolled ? "hidden" : ""}`}>Live Chat</h1>
                </div>
                </div>
            </div>
        
            <JoinOurMission />

            <Footer />
        
        </>
    )
}

export default Termsofservice;