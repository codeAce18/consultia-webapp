import { Navbar } from "@/app/components/Navbar";
import "../app/globals.css";
import Image from 'next/image';

import mobileImage from "../public/assets/mobileImage.png"
import tickCircle from "../public/assets/tick-circle.svg"
import OurValues from "../public/assets/OurValues.png"

import Henry from "../public/assets/Henry.png"
import navyblueicon from "../public/assets/navyblueicon.svg"
import lifeAssurance from "../public/assets/lifeAssurance.svg"
import annualLeave from "../public/assets/annualLeave.svg"
import careerDevelopment from "../public/assets/careerDevelopment.svg"
import Learning from "../public/assets/Learning.svg"
import Growth from "../public/assets/Growth.svg"
import More from "../public/assets/More.svg"
import CareerImage from "../public/assets/CareerImage.png"
import { JoinOurMission } from "@/app/components/JoinOurMission";
import { Footer } from "@/app/components/Footer";




const career = () => {
    return (
        <>

            <Navbar />
            <div>
                <div className="lg:pt-20 pt-10 flex flex-col items-center justify-center text-center ">
                    
                    <h1 className="text-[#101828] text-[39px] lg:text-[61px] leading-[46.8px] lg:leading-[73.2px] font-bold max-w-[393px] lg:max-w-[1002px]">
                        Join us to make an Impact in the Consulting Industry.
                    </h1>
                    
                    <p className="pt-[20px] text-[#41404B] text-[14px] lg:text-[16.5px] leading-[21px] lg:leading-[24.75px] font-normal lg:max-w-[936px] max-w-[349px]">We are building a world class team and are looking for talented, fun and passionate people to help us take Consultia to the next level. Think that sounds like you? We can&apos;t wait to hear from you!</p>
                </div>

                <div className="lg:pt-36 pt-16 lg:gap-36 lg:flex lg:flex-row flex flex-col items-center justify-center">
                       
                   <div className="p-[20px]">
                       <Image width={505} height={463} src={OurValues} alt="OurValues" className="rounded-[8px]" />
                   </div>


                    <div>
                        <div>
                            <h1 className="text-[#101828] text-[39px] lg:text-[49px] font-bold leading-[46.8px] lg:text-left text-center lg:leading-[73.5px]">Our Values</h1>
                            <p className="pt-[15px] lg:text-left text-center text-[16px] leading-[21px] text-[#41404B] lg:max-w-[562px] max-w-[337px] mx-auto">Our team comprises seasoned professionals with deep expertise in consultancy, technology, and business management. We are passionate about creating solutions that not only meet but exceed the needs of our users.</p>
                        </div>

                  
                        <div className="pt-[15px] px-[20px] lg:px-0 flex items-start gap-[5px]">
                            <Image src={tickCircle} alt="tickCircle" />
                            <div>
                                <h2 className="text-[20px] leading-[30px] text-[#101828] font-medium">Innovation:</h2>
                                <p className="text-[#41404B] text-[16.5px] leading-[24.75px] font-normal max-w-[530px]">We are committed to continuous improvement and innovation in everything we do.</p>
                            </div>
                        </div>
                        <div className="pt-[15px] px-[20px] lg:px-0 flex items-start gap-[5px]">
                            <Image src={tickCircle} alt="tickCircle" />
                            <div>
                                <h2 className="text-[20px] leading-[30px] text-[#101828] font-medium">Customer Focus:</h2>
                                <p className="text-[#41404B] text-[16.5px] leading-[24.75px] font-normal max-w-[530px]">Our users are at the heart of our business. We listen, we learn, and we deliver.</p>
                            </div>
                        </div>
                        <div className="pt-[15px] px-[20px] lg:px-0 flex items-start gap-[5px]">
                            <Image src={tickCircle} alt="tickCircle" />
                            <div>
                                <h2 className="text-[20px] leading-[30px] text-[#101828] font-medium">Integrity:</h2>
                                <p className="text-[#41404B] text-[16.5px] leading-[24.75px] font-normal max-w-[530px]">We operate with transparency, honesty and highest ethical standards</p>
                            </div>
                        </div>
                        <div className="pt-[15px] px-[20px] lg:px-0 flex items-start gap-[5px]">
                            <Image src={tickCircle} alt="tickCircle" />
                            <div>
                                <h2 className="text-[20px] leading-[30px] text-[#101828] font-medium">Collaborations:</h2>
                                <p className="text-[#41404B] text-[16.5px] leading-[24.75px] font-normal max-w-[530px]">We believe in the power of teamwork-both within our organization and with our users.</p>
                            </div>
                        </div>
                        
                    </div>
            
                </div>


                <div className="pt-20 ">
                    <div className="bg-[#F0F0F9] relative max-w-[1140px] mx-auto lg:pl-10 rounded-[8px] lg:flex lg:flex-row flex flex-col lg:items-center items-center lg:justify-center justify-center">
                        <div>
                            <h1 className="text-[#5B52B6] text-[29px] leading-[37.7px] lg:text-[49px] lg:leading-[63.7px] font-bold max-w-[301.23px] pt-20 lg:pt-0 lg:max-w-[509px]">Join a Team that&apos;s Redefining Workflow experience for millions of people in Africa.</h1>

                            <p className="lg:pt-10 pt-[20px] text-[14px] leading-[21px] font-extrabold text-[#5B52B6]">Courtney Henry <span className="font-normal">- Founder & Group CEO</span></p>
                        </div>

                        <div className="pt-20 lg:pt-0">
                            <Image className="rounded-[8px]" width={630} height={712} src={Henry} alt="HenryImage" />
                        </div>

                        <div className="absolute lg:top-[535px] top-[310px] left-[200px]">
                            <Image src={navyblueicon} alt="navyblueicon" />
                        </div>
                    </div>
                </div>


                <div className="pt-20">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-[#101828] text-[49px] leading-[68.6px] font-bold">Benefits</h1>

                        <p className="text-[#41404B] text-[14px] leading-[21px]">Beyond competitive salary, we offer perks and resources to help our team thrive.</p>
                    </div>

                    <div className="lg:pt-10">
                        <div className="flex items-center justify-center">
                            <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-10 gap-x-10">

                                <div className="bg-white max-w-[351px] px-[24px] py-[16px] shadow-lg">
                                    <Image src={lifeAssurance} alt="lifeAssurance"/>

                                    <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Life Assurance</h1>
                                    

                                    <p className="text-[13px] leading-[19.5px] font-normal text-[#41404B] max-w-[319px]">We will automatically enroll you into our pension scheme.</p>
                                </div>

                                <div className="bg-white max-w-[351px] px-[24px] py-[16px] shadow-lg">
                                    <Image src={annualLeave} alt="annualLeave"/>

                                    <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Paid Annual Leave</h1>

                                    <p className="text-[13px] leading-[19.5px] font-normal text-[#41404B] max-w-[319px]">You&apos;ll get time off work, during which you&apos;ll receive your normal pay.</p>
                                </div>

                                <div className="bg-white max-w-[351px] px-[24px] py-[16px] shadow-lg">
                                    <Image src={careerDevelopment} alt="careerDevelpment"/>

                                    <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Career Development</h1>

                                    <p className="text-[13px] leading-[19.5px] font-normal text-[#41404B] max-w-[319px]">We&apos;ll support your professional growth.</p>
                                </div>
                                

                                <div className="bg-white max-w-[351px] px-[24px] py-[16px] shadow-lg">
                                    <Image src={Learning} alt="Learning"/>

                                    <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Learning And Development</h1>

                                    <p className="text-[13px] leading-[19.5px] font-normal text-[#41404B] max-w-[319px]">You&apos;ll have full access to Consultia Academy, our learning and development platform.</p>
                                </div>

                                <div className="bg-white max-w-[351px] px-[24px] py-[16px] shadow-lg">
                                    <Image src={Growth} alt="Growth"/>

                                    <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">Growth</h1>

                                    <p className="text-[13px] leading-[19.5px] font-normal text-[#41404B] max-w-[319px]">We have two reviews annually. You&apos;ll get an honest review to help you be even better.</p>
                                </div>

                                <div className="bg-white max-w-[351px] px-[24px] py-[16px] shadow-lg">
                                    <Image src={More} alt="More"/>

                                    <h1 className="text-[20px] leading-[30px] font-bold text-[#101828]">More</h1>

                                    <p className="text-[13px] leading-[19.5px] font-normal text-[#41404B] max-w-[319px]">Additional benefits to be provided when joining the Kuda tribe.</p>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>

                
                <div className="lg:pt-16">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-[#101828] text-[49px] font-bold leading-[68.6px]">Current Openings</h1>

                        <p className="text-[#41404B] text-[14px] leading-[21px] font-medium">Here are available roles for application.</p>
                    </div>

                    <div className="lg:pt-10">
                        <div className="flex items-center justify-center">
                            <div className="grid lg:grid-cols-4 grid-cols-1 gap-y-10 gap-x-10">
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#41404B] font-medium underline">Designers</h1>
                                </div>
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#41404B] font-medium underline">Freelance Full Stack</h1>
                                </div>
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#41404B] font-medium underline">Business Operations Manager</h1>
                                </div>
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#41404B] font-medium underline">Business  Relationship Manager</h1>
                                </div>
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#41404B] font-medium underline">CRM Manager</h1>
                                </div>
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#41404B] font-medium underline">Data Engineering Lead</h1>
                                </div>
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#41404B] font-medium underline">Regional Marketing Specialist</h1>
                                </div>
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#41404B] font-medium underline">Technical Product Manager</h1>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>

            <JoinOurMission />

            <Footer />
        </>
    )
}


export default career;