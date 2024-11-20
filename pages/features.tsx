import { Navbar } from "@/app/components/Navbar";
import "../app/globals.css";
import Image from 'next/image';

import Link from "next/link";

import check from "../public/assets/tick-circle.svg";

import FeaturesImage1 from "../public/assets/FeaturesImage1.svg";
import FeaturesImage2 from "../public/assets/FeaturesImage2.svg";
import FeaturesImage3 from "../public/assets/FeaturesImage3.svg";
import FeaturesImage4 from "../public/assets/FeaturesImage4.svg";
import FeaturesImage5 from "../public/assets/FeaturesImage5.svg";
import VettedImage from "../public/assets/VettedImage.svg"
import ConnectImage from "../public/assets/ConnectImage.svg"
import { JoinOurMission } from "@/app/components/JoinOurMission";
import { Footer } from "@/app/components/Footer";

const features = () => {
    return(
        <>
            <Navbar />
            <div className="pt-10">
               <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="lg:text-[61px] text-[48px] lg:max-w-[1002px] max-w-[361px] lg:leading-[73.2px] leading-[57.6px] font-extrabold text-[#101828]">Powerful Features to Drive Your Consultancy&apos;s Success</h1>

                    <p className="pt-[15px] text-[18px] leading-[21px] font-normal text-[#41404B]">From Client Onboarding to Invoicing, We&apos;ve Got You Covered</p>
               </div>

               <div>
                    <div className="lg:pt-20 pt-10 lg:flex lg:flex-row flex flex-col-reverse items-center justify-center lg:gap-16">
                        <div className="flex flex-col  items-start">
                            <div className="mx-auto lg:mx-0 text-center lg:text-left">
                                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold lg:leading-[58px] leading-[46.8px] max-w-[540px]">Find Vetted Consultants Instantly</h1>
                                <p className="pt-[15px] text-[14px] leading-[21px] font-medium text-[#41404B]">Expert Talent at Your Fingertips.</p>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] mx-auto lg:mx-0  flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Access Quality Talent:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Instantly find pre-screened consultants with proven expertise in your industry.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Verified Profiles:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Work with confidence knowing that each consultant is pre-screened for quality and professionalism.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Streamlined Collaboration:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Instantly onboard consultants to your project, saving time on recruitment and negotiations.</p>
                                </div>
                            </div>

                            <div className="pt-10 flex mx-auto lg:mx-0 items-center justify-start gap-[15px]">
                                <div>
                                    <Link href="/">
                                        <button className="bg-[#5B52B6] rounded-[8px] p-[10px] text-white text-[16px] max-w-[181px] font-bold leading-[19.2px]">
                                            Create Account
                                        </button>
                                    </Link>
                                </div>

                                <div>
                                    <Link href="/">
                                        <button className="border-[2px] border-[#E9AF0A] rounded-[8px] p-[10px] text-[#101828] text-[16px] max-w-[159px] font-medium leading-[19.2px]">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                                

                        <div className="p-[20px] lg:p-0 flex items-center justify-center">
                            <Image width={610} height={494} src={VettedImage} alt="VettedImage" />
                        </div>
                    </div>
               </div>

               <div>
                    <div className="lg:pt-20 pt-10 lg:flex lg:flex-row flex flex-col-reverse items-center justify-center lg:gap-20">


                        <div className="p-[20px] lg:p-0 flex items-center justify-center">
                            <Image width={610} height={494} src={FeaturesImage1} alt="FeaturesImage1" />
                        </div>


                        <div className="flex flex-col  items-start">
                            <div className="mx-auto lg:mx-0 text-center lg:text-left">
                                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold lg:leading-[73.5px] leading-[46.8px]">Client Onboarding</h1>
                                <p className="pt-[15px] text-[14px] leading-[21px] font-medium text-[#41404B]">Effortless Setup for Seamless Relationships.</p>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] mx-auto lg:mx-0  flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Effortless Setup:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Simplify client onboarding with automated forms, contracts and document collection.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Streamlined Communication:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Ensure clear and consistent communication throughout the onboarding process.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Tailored Processes:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Customize onboarding workflows to meet the specific requirements of each client.</p>
                                </div>
                            </div>

                            <div className="pt-10 flex mx-auto lg:mx-0 items-center justify-start gap-[15px]">
                                <div>
                                    <Link href="/">
                                        <button className="bg-[#5B52B6] rounded-[8px] p-[10px] text-white text-[16px] max-w-[181px] font-bold leading-[19.2px]">
                                            Create Account
                                        </button>
                                    </Link>
                                </div>

                                <div>
                                    <Link href="/">
                                        <button className="border-[2px] border-[#E9AF0A] rounded-[8px] p-[10px] text-[#101828] text-[16px] max-w-[159px] font-medium leading-[19.2px]">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                                

                    </div>
               </div>


               <div>
                    <div className="lg:pt-20 pt-10 lg:flex lg:flex-row flex flex-col-reverse items-center justify-center lg:gap-20">
                        <div className="flex flex-col  items-start">
                            <div className="mx-auto lg:mx-0 text-center lg:text-left">
                                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold lg:leading-[58px] leading-[46.8px] max-w-[460px]">Connect with other Consultants</h1>
                                <p className="pt-[15px] text-[14px] leading-[21px] font-medium text-[#41404B]">Collaborate, Network, and Grow Together</p>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] mx-auto lg:mx-0  flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Expand Your Network:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Join a thriving community of consultants to build partnerships and share opportunities.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Collaborative Growth:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Find consultants with complementary skills for joint ventures and large projects.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Knowledge Exchange:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Gain insights, share ideas, and stay updated on industry trends through meaningful connections.</p>
                                </div>
                            </div>

                            <div className="pt-10 flex mx-auto lg:mx-0 items-center justify-start gap-[15px]">
                                <div>
                                    <Link href="/">
                                        <button className="bg-[#5B52B6] rounded-[8px] p-[10px] text-white text-[16px] max-w-[181px] font-bold leading-[19.2px]">
                                            Create Account
                                        </button>
                                    </Link>
                                </div>

                                <div>
                                    <Link href="/">
                                        <button className="border-[2px] border-[#E9AF0A] rounded-[8px] p-[10px] text-[#101828] text-[16px] max-w-[159px] font-medium leading-[19.2px]">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                                

                        <div className="p-[20px] lg:p-0 flex items-center justify-center">
                            <Image width={610} height={494} src={ConnectImage} alt="ConnectImage" />
                        </div>
                    </div>
               </div>


               <div>
                    <div className="lg:pt-20 pt-10 lg:flex lg:flex-row flex flex-col items-center justify-center lg:gap-20">

                        <div className="p-[20px] lg:p-0 flex items-center justify-center">
                            <Image width={610} height={494} src={FeaturesImage2} alt="FeaturesImage2" />
                        </div>

                        <div className="flex flex-col  items-start">
                            <div className="mx-auto  lg:mx-0 text-center lg:text-left">
                                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold lg:leading-[73.5px] leading-[46.8px]">Task Management</h1>
                                <p className="pt-[15px] text-[14px] leading-[21px] font-medium text-[#41404B]">Stay Organized and Deliver on Time.</p>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px]  mx-auto lg:mx-0  flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Simplified Oversight:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Track tasks, deadlines, and team responsibilities in an organized workspace.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Boost Collaboration:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Assign roles, monitor progress, and keep everyone aligned with project goals.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Stay on Schedule:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Use automated notifications and reminders to meet deadlines with ease.</p>
                                </div>
                            </div>

                            <div className="pt-10 flex mx-auto lg:mx-0 items-center justify-start gap-[15px]">
                                <div>
                                    <Link href="/">
                                        <button className="bg-[#5B52B6] rounded-[8px] p-[10px] text-white text-[16px] max-w-[181px] font-bold leading-[19.2px]">
                                            Explore the Platform
                                        </button>
                                    </Link>
                                </div>

                                <div>
                                    <Link href="/">
                                        <button className="border-[2px] border-[#E9AF0A] rounded-[8px] p-[10px] text-[#101828] text-[16px] max-w-[159px] font-medium leading-[19.2px]">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>

                                
                        </div>
                    </div>
               </div>



               <div>
                    <div className="lg:pt-20 pt-10 lg:flex lg:flex-row flex flex-col-reverse items-center justify-center lg:gap-20">
                        <div className="flex flex-col  items-start">
                            <div className="mx-auto lg:mx-0 text-center lg:text-left">
                                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold lg:leading-[58px] leading-[46.8px] max-w-[465px]">Compliance Tracking</h1>
                                <p className="pt-[15px] text-[14px] leading-[21px] font-medium text-[#41404B]">Stay Ahead of Compliance Requirements</p>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] mx-auto lg:mx-0  flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Proactive Monitoring:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Get notified about changes in regulations to remain compliant at all times.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Centralized Compliance:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Manage all regulatory documents in one secure and accessible location.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Simplify Audits:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Generate compliance records quickly, ensuring readiness for inspections and audits.</p>
                                </div>
                            </div>

                            <div className="pt-10 flex mx-auto lg:mx-0 items-center justify-start gap-[15px]">
                                <div>
                                    <Link href="/">
                                        <button className="bg-[#5B52B6] rounded-[8px] p-[10px] text-white text-[16px] max-w-[181px] font-bold leading-[19.2px]">
                                            Explore the Platform
                                        </button>
                                    </Link>
                                </div>

                                <div>
                                    <Link href="/">
                                        <button className="border-[2px] border-[#E9AF0A] rounded-[8px] p-[10px] text-[#101828] text-[16px] max-w-[159px] font-medium leading-[19.2px]">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>

                                
                        </div>

                        <div className="p-[20px] lg:p-0 flex items-center justify-center">
                            <Image width={610} height={494} src={FeaturesImage3} alt="FeaturesImage3" />
                        </div>
                    </div>
               </div>


               <div>
                    <div className="lg:pt-20 pt-10 lg:flex lg:flex-row flex flex-col items-center justify-center lg:gap-20">
                        
                        <div className="p-[20px] lg:p-0 flex items-center justify-center">
                            <Image width={610} height={494} src={FeaturesImage4} alt="FeaturesImage4" />
                        </div>


                        <div className="flex flex-col  items-start">
                            <div className="mx-auto lg:mx-0 text-center lg:text-left">
                                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold lg:leading-[73.5px] leading-[46.8px]">Invoicing</h1>
                                <p className="pt-[15px] text-[14px] leading-[21px] font-medium text-[#41404B]">Simplified Invoicing and Payment Tracking</p>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] mx-auto lg:mx-0  flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Quick Invoicing:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Create and send professional invoices in just a few clicks, tailored to your brand.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Automated Reminders:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Reduce late payments with automated follow-ups and reminders to clients.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Payment Tracking:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Monitor outstanding payments and receive real-time updates on invoice statuses.</p>
                                </div>
                            </div>

                            <div className="pt-10 flex mx-auto lg:mx-0 items-center justify-start gap-[15px]">
                                <div>
                                    <Link href="/">
                                        <button className="bg-[#5B52B6] rounded-[8px] p-[10px] text-white text-[16px] max-w-[181px] font-bold leading-[19.2px]">
                                            Explore the Platform
                                        </button>
                                    </Link>
                                </div>

                                <div>
                                    <Link href="/">
                                        <button className="border-[2px] border-[#E9AF0A] rounded-[8px] p-[10px] text-[#101828] text-[16px] max-w-[159px] font-medium leading-[19.2px]">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>


               <div>
                    <div className="lg:pt-20 pt-10 lg:flex lg:flex-row flex flex-col-reverse items-center justify-center lg:gap-20">
                        <div className="flex flex-col  items-start">
                            <div className="mx-auto lg:mx-0 text-center lg:text-left">
                                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold lg:leading-[58px] leading-[46.8px] max-w-[465px]">Reporting & Analytics</h1>
                                <p className="pt-[15px] text-[14px] leading-[21px] font-medium text-[#41404B]">Gain Insights with Comprehensive Reporting</p>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] mx-auto lg:mx-0  flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Deep Insights:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Generate reports to analyze performance, identify trends, and optimize your operations.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Dynamic Dashboards:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Visualize your data in easy-to-read formats that highlight key metrics.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Strategic Forecasting:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Leverage predictive analytics to make informed decisions and plan for growth.</p>
                                </div>
                            </div>

                            <div className="pt-10 flex mx-auto lg:mx-0 items-center justify-start gap-[15px]">
                                <div>
                                    <Link href="/">
                                        <button className="bg-[#5B52B6] rounded-[8px] p-[10px] text-white text-[16px] max-w-[181px] font-bold leading-[19.2px]">
                                            Explore the Platform
                                        </button>
                                    </Link>
                                </div>

                                <div>
                                    <Link href="/">
                                        <button className="border-[2px] border-[#E9AF0A] rounded-[8px] p-[10px] text-[#101828] text-[16px] max-w-[159px] font-medium leading-[19.2px]">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>

                                
                        </div>

                        <div className="p-[20px] lg:p-0 flex items-center justify-center">
                            <Image width={610} height={494} src={FeaturesImage5} alt="FeaturesImage5" />
                        </div>
                    </div>
               </div>


               <JoinOurMission />

               <Footer />
            </div>
        </>
    )
}

export default features;










