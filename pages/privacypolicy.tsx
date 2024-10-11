import { useEffect, useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import "../app/globals.css";
import { JoinOurMission } from "@/app/components/JoinOurMission";
import { Footer } from "@/app/components/Footer";
import Image from 'next/image';
import Chat from "../public/assets/Chat.svg"


const Privacypolicy = () => {
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
                        <h1 className="text-[#101828] text-[61px] leading-[73.2px] font-bold mx-auto text-center">Privacy Policy</h1>
                    </div>
                </div>

                <div className="pt-20 px-[20px] lg:px-0">
                    <div className="max-w-[1240px] mx-auto">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">Welcome to Consultia!</h1>

                        <p className="pt-[12px] text-[#41404B] text-[16px] leading-[24px] fontmedium">At Consultia, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, share, and protect your information when you use our website, platform, and services (collectively, the “Service”). By accessing or using the Service, you agree to the terms of this Privacy Policy. If you do not agree with this Privacy Policy, please do not use our Service.</p>
                    </div>
                </div>

                <div className="pt-[30px] px-[20px] lg:px-0">
                    <div className="max-w-[1240px] mx-auto">
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">1. Information We Collect</h1>

                        <p className="text-[#41404B] pt-[15px] text-[16px] leading-[24px] fontmedium">We collect various types of information to provide and improve our Service to you:</p>

                        <div>
                            <div>
                                <h1 className="text-[#41404B] text-[16px] leading-[24px] fontmedium">1.1. Information You Provide to Us</h1>
                                <ul className="text-[#41404B] list-disc pl-5 text-[16px] leading-[24px] fontmedium">
                                    <li>
                                        <p>Account Information: When you register for an account, we collect personal information such as your name, email address, phone number, company name, and billing information.</p>
                                    </li>
                                    <li>
                                        <p>User Content: We collect the information and content you upload, post, or otherwise transmit through the Service, including project details, client information, and other business-related data.</p>
                                    </li>
                                    <li>
                                        <p>Communication Data: If you contact us with questions or for support, we collect the content of your communications, along with your contact details.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-[15px]">
                                <h1 className="text-[#41404B] text-[16px] leading-[24px] fontmedium">1.2. Information We Collect Automatically</h1>

                                <ul className="text-[#41404B] text-[16px] list-disc pl-5 leading-[24px] fontmedium">
                                    <li>
                                        <p>Usage Data: We collect information about how you use the Service, including your IP address, browser type, device type, operating system, and pages visited.</p>
                                    </li>
                                    <li>
                                        <p>Cookies and Tracking Technologies: We use cookies and similar tracking technologies to collect information about your interactions with the Service. This helps us to enhance user experience, analyze usage patterns, and customize our services.</p>
                                    </li>
                                    
                                </ul>

                                <h1 className="text-[#41404B] pt-[15px] text-[16px] leading-[24px] fontmedium">1.3. Information We Third Parties We may receive information about you from third parties, such as payment processors or partners, to facilitate transactions or provide services.</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="max-w-[1240px] mx-auto pt-[30px] px-[20px] lg:px-0">
                    <div>
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">2. How We Use Your Information</h1>
                        <p className="text-[#41404B] pt-[15px] text-[16px] leading-[24px] fontmedium">We use the information we collect for various purposes, including:</p>
                    </div>

                    <ul className="text-[#41404B] list-disc pl-5 text-[16px] leading-[24px] fontmedium">
                        <li>
                            <p>Providing and Maintaining the Service: To operate and manage your account, process transactions, and deliver the features and functionalities of the Service.</p>
                        </li>

                        <li>
                            <p>Improving the Service: To understand how our Service is used, diagnose technical issues, and enhance the user experience.</p>
                        </li>

                        <li>
                            <p>Communication: To send you important updates, newsletters, marketing communications, and respond to your inquiries.</p>
                        </li>

                        <li>
                            <p>Compliance and Legal Obligations: To comply with applicable laws, regulations, and legal processes, and to protect our rights and the rights of our users.</p>
                        </li>
                    </ul>
                </div>

                <div className="max-w-[1240px] mx-auto pt-[30px] px-[20px] lg:px-0">
                    <div>
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">3. Sharing Your Information</h1>
                        <p className="text-[#41404B] pt-[15px] text-[16px] leading-[24px] fontmedium">We do not sell your personal information. However, we may share your information in the following circumstances:</p>
                    </div>

                    <ul className="text-[#41404B] list-disc pl-5 text-[16px] leading-[24px] fontmedium">
                        <li>
                            <p>Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and customer support.</p>
                        </li>

                        <li>
                            <p>Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</p>
                        </li>

                        <li>
                            <p>Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>
                        </li>

                        <li>
                            <p>With Your Consent: We may share your information with third parties when we have your consent to do so.</p>
                        </li>
                    </ul>
                </div>

                <div className="max-w-[1240px] mx-auto pt-[30px] px-[20px] lg:px-0">
                    <div>
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">4. Data Security</h1>
                        <p className="text-[#41404B] pt-[15px] text-[16px] leading-[24px] fontmedium">We take the security of your information seriously and implement appropriate technical and organizational measures to protect it from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
                    </div>
                </div>

                <div className="max-w-[1240px] mx-auto pt-[30px] px-[20px] lg:px-0">
                    <div>
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">5. Data Retention</h1>
                        <p className="text-[#41404B] pt-[15px] text-[16px] leading-[24px] fontmedium">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.</p>
                    </div>
                </div>

                <div className="max-w-[1240px] mx-auto pt-[30px] px-[20px] lg:px-0">
                    <div>
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">6. Your Rights and Choices</h1>
                        <p className="text-[#41404B] pt-[15px] text-[16px] leading-[24px] fontmedium">You have certain rights regarding your personal information, including:</p>
                    </div>

                    <ul className="text-[#41404B] list-disc pl-5 text-[16px] leading-[24px] fontmedium">
                        <li>
                            <p>Access and Correction: You can access and update your account information at any time through the Service. If you need assistance, please contact us.</p>
                        </li>

                        <li>
                            <p>Data Portability: You may request a copy of your personal information in a structured, machine-readable format.</p>
                        </li>

                        <li>
                            <p>Deletion: You may request the deletion of your personal information, subject to certain exceptions.</p>
                        </li>

                        <li>
                            <p>Opt-Out of Marketing Communications: You can opt-out of receiving marketing emails by following the unsubscribe instructions in those emails. Please note that even if you opt-out, we may still send you non-marketing communications, such as service-related updates.</p>
                        </li>
                    </ul>
                </div>

                <div className="max-w-[1240px] mx-auto pt-[30px] px-[20px] lg:px-0">
                    <div>
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">7. International Data Transfers</h1>
                        <p className="text-[#41404B] pt-[15px] text-[16px] leading-[24px] fontmedium">Consultia is based in Nigeria, and your information may be transferred to, and processed in, countries other than your country of residence. By using the Service, you consent to the transfer of your information to Nigeria and other jurisdictions as necessary to provide the Service.</p>
                    </div>
                </div>

                <div className="max-w-[1240px] mx-auto pt-[30px] px-[20px] lg:px-0">
                    <div>
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">8. Children&apos;s Privacy</h1>
                        <p className="text-[#41404B] pt-[15px] text-[16px] leading-[24px] fontmedium">Our Service is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete that information.</p>
                    </div>
                </div>

                <div className="max-w-[1240px] mx-auto pt-[30px] px-[20px] lg:px-0">
                    <div>
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">9. Changes to This Privacy Policy</h1>
                        <p className="text-[#41404B] pt-[15px] text-[16px] leading-[24px] fontmedium">We may update this Privacy Policy from time to time. If we make material changes, we will notify you by posting the updated policy on our website and updating the “Last Updated” date above. Your continued use of the Service after such changes constitutes your acceptance of the updated Privacy Policy.</p>
                    </div>
                </div>

                <div className="max-w-[1240px] mx-auto pt-[30px] px-[20px] lg:px-0">
                    <div>
                        <h1 className="text-[#101828] text-[25px] leading-[37.5px] font-bold">10. Contact Us</h1>
                        <p className="text-[#41404B] pt-[15px] text-[16px] leading-[24px] fontmedium">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:<br /> 
                        <span className="text-[16.5px] leading-[19.8px] font-bold">The Consultia Technologies Ltd.</span><br />
                        Email: privacy@consultia.africa</p>
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


export default Privacypolicy;