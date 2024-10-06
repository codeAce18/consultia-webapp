import { Navbar } from "@/app/components/Navbar";
import "../app/globals.css";
import Image from 'next/image';

import Link from "next/link";

import check from "../public/assets/tick-circle.svg";

import features1 from "../public/assets/features1.png";
import features2 from "../public/assets/features2.png";
import features3 from "../public/assets/features3.png";
import features4 from "../public/assets/feature4.png";
import features5 from "../public/assets/features5.png";
import { JoinOurMission } from "@/app/components/JoinOurMission";
import { Footer } from "@/app/components/Footer";

const features = () => {
    return(
        <>
            <Navbar />
            <div className="pt-10">
               <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="lg:text-[61px] text-[48px] lg:max-w-[1002px] max-w-[361px] lg:leading-[73.2px] leading-[57.6px] font-extrabold text-[#101828]">Powerful Features to Drive Your Consultancy&apos;s Success</h1>

                    <p className="pt-[15px] text-[14px] leading-[21px] font-normal text-[#41404B]">From Client Onboarding to Invoicing, We&apos;ve Got You Covered</p>
               </div>

               <div>
                    <div className="lg:pt-20 pt-10 lg:flex lg:flex-row flex flex-col-reverse items-center justify-center lg:gap-20">
                        <div className="flex flex-col  items-start">
                            <div className="mx-auto lg:mx-0 text-center lg:text-left">
                                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold lg:leading-[73.5px] leading-[46.8px]">Client Onboarding</h1>
                                <p className="pt-[15px] text-[14px] leading-[21px] font-medium text-[#41404B]">Effortless Client Onboarding for a Smooth Start</p>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] mx-auto lg:mx-0  flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Streamlined Process:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Add new clients easily with a user-friendly form or import from LinkedIn/CSV files.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Onboarding Checklists:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Ensure nothing is missed with customizable checklists that guide you through the onboarding process.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Integrated Communication:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Communicate with clients directly through the platform, with automated logging of all interactions.</p>
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
                            <Image width={610} height={494} src={features1} alt="features1" />
                        </div>
                    </div>
               </div>


               <div>
                    <div className="lg:pt-20 pt-10 lg:flex lg:flex-row flex flex-col items-center justify-center lg:gap-20">

                        <div className="p-[20px] lg:p-0 flex items-center justify-center">
                            <Image width={610} height={494} src={features2} alt="features2" />
                        </div>

                        <div className="flex flex-col  items-start">
                            <div className="mx-auto  lg:mx-0 text-center lg:text-left">
                                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold lg:leading-[73.5px] leading-[46.8px]">Task Management</h1>
                                <p className="pt-[15px] text-[14px] leading-[21px] font-medium text-[#41404B]">Manage Tasks with Precision and Ease</p>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px]  mx-auto lg:mx-0  flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Simple Project Creation:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Create projects and assign them to clients with clear deadlines, milestones, and tasks.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Visual Progress Tracking:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Use Kanban or Gantt views to track project progress in real-time.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Team Collaboration:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Collaborate with your team through comments, tagging, and file sharing—all in one place.</p>
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
                                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold lg:leading-[73.5px] leading-[46.8px] max-w-[465px]">Compliance Tracking</h1>
                                <p className="pt-[15px] text-[14px] leading-[21px] font-medium text-[#41404B]">Stay Ahead of Compliance Requirements</p>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] mx-auto lg:mx-0  flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Compliance Calendar:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Visualize all your compliance deadlines in one easy-to-read calendar.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Automated Alerts:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Never miss a deadline with reminders tailored to your schedule.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Document Repository:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Keep all compliance-related documents secure and accessible when you need them.</p>
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
                            <Image width={610} height={494} src={features3} alt="features3" />
                        </div>
                    </div>
               </div>


               <div>
                    <div className="lg:pt-20 pt-10 lg:flex lg:flex-row flex flex-col items-center justify-center lg:gap-20">
                        
                        <div className="p-[20px] lg:p-0 flex items-center justify-center">
                            <Image width={610} height={494} src={features4} alt="features4" />
                        </div>


                        <div className="flex flex-col  items-start">
                            <div className="mx-auto lg:mx-0 text-center lg:text-left">
                                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold lg:leading-[73.5px] leading-[46.8px]">Invoicing</h1>
                                <p className="pt-[15px] text-[14px] leading-[21px] font-medium text-[#41404B]">Simplified Invoicing and Payment Tracking</p>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] mx-auto lg:mx-0  flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Quick Invoice Creation:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Generate professional invoices with pre-loaded templates and client information.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Automated Payment Tracking:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Monitor payment status and send reminders for overdue invoices automatically.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Integration Ready:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Sync with your preferred accounting software or export invoices as needed.</p>
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
                                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold lg:leading-[73.5px] leading-[46.8px] max-w-[465px]">Reporting & Analytics</h1>
                                <p className="pt-[15px] text-[14px] leading-[21px] font-medium text-[#41404B]">Gain Insights with Comprehensive Reporting</p>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] mx-auto lg:mx-0  flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1 className="text-[20px] leading-[30px] text-[#101828] font-medium">Customizable Reports:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Generate reports tailored to your specific needs—track project success, compliance, and financial performance.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Data Visualization:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Interactive charts and graphs make it easy to analyze data and spot trends.</p>
                                </div>
                            </div>

                            <div className="p-[20px] lg:p-0 lg:pt-[15px] pt-[10px] mx-auto  lg:mx-0 flex items-start gap-[6px] justify-start">
                                <Image src={check} alt="check" />
                                <div>
                                    <h1  className="text-[20px] leading-[30px] text-[#101828] font-medium">Export Options:</h1>
                                    <p className="text-[#101828] text-[16px] leading-[24.75px] font-normal max-w-[433px]">Export your reports as PDFs or Excel files for further analysis.</p>
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
                            <Image width={610} height={494} src={features5} alt="features5" />
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










