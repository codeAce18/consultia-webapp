import { Navbar } from "@/app/components/Navbar";
import "../app/globals.css";
import Image from 'next/image';
import InsightImage from "../public/assets/InsightImage.png"
import Email from "../public/assets/Email.svg"
import BlogsFeaturedImage1 from "../public/assets/BlogsFeaturedImage1.svg"
import BlogsFeaturedImage2 from "../public/assets/BlogsFeaturedImage2.svg"
import BlogsFeaturedImage3 from "../public/assets/BlogsFeaturedImage3.svg"
import BlogsFeaturedImage4 from "../public/assets/BlogsFeaturedImage4.svg"

import Link from "next/link";
import { JoinOurMission } from "@/app/components/JoinOurMission";
import { Footer } from "@/app/components/Footer";
import SubscriptionForm  from "@/app/components/SubscriptionForm";


const insights = () => {
    return (
        <>


            <Navbar />

            <div>
                <div className="lg:pt-20 pt-10 lg:flex lg:flex-row flex flex-col items-center justify-center gap-20">
                    <div className="flex flex-col items-left justify-start">
                       <h1 className="text-[#101828] lg:mx-0  mx-auto text-[61px] leading-[73.2px] font-bold">Insights</h1>

                       <p className="lg:pt-[25px] pt-[20px] text-[14px] leading-[21px] text-[#41404B] text-center lg:text-left max-w-[361px] lg:max-w-[505px] font-normal">Lorem ipsum dolor sit amet consectetur. Neque pharetra posuere augue eget quisque interdum. Mauris amet ornare leo congue sed elementum. </p>

                       <div className="pt-[20px] lg:flex lg:flex-row flex flex-col items-center gap-[15px]">
                            <div>
                                <h2>Explore:</h2>
                            </div>

                            <div className="bg-[#F0F0F9] py-[3px] px-[12px] w-[96px] h-[32px] rounded-[8px]">
                                <h2 className="text-[#5B52B6] text-[17px] leading-[24px] font-semibold">Reports</h2>
                            </div>

                            <div className="bg-[#F0F0F9] py-[3px] px-[12px] w-[186px] h-[32px] rounded-[8px]">
                                <h2 className="text-[#5B52B6] text-[17px] leading-[24px] font-semibold">Consultia Quarterly</h2>
                            </div>

                            <div className="bg-[#F0F0F9] w-[100px] h-[32x] py-[3px] px-[12px] rounded-[8px]">
                                <h2 className="text-[#5B52B6] text-[17px] leading-[24px] font-semibold">Analysis</h2>
                            </div>
                       </div>
                    </div>

                    <div className="p-[20px]">
                        <Image className="rounded-[8px] mx-auto" width={610}  height={293} src={InsightImage} alt="InsightImage" />
                    </div>
                </div>

                <div className="lg:pt-20 pt-10 lg:flex lg:flex-row flex flex-col items-center justify-center gap-[20px]">
                    <div className="p-[20px]">
                        <div className="border-[1px] p-[20px] lg:h-[286px] rounded-[16px] border-[#EFF0F6] max-w-[610px]">
                            <h2 className="text-[#5B52B6] text-[17px] leading-[24px] font-semibold">Featured Analysis</h2>
                            <h1 className="text-[25px] pt-[15px] text-[#101828] font-bold leading-[37.5px] max-w-[570px]">Why You Should Start Caring for Your Mother Now, A Must Read.</h1>
                            <p className="text-[#7A7D9C] pt-[10px] text-[14px] leading-[26px] font-normal tracking-[-0.4%] max-w-[570px]">When should you begin to care for your mother? The answer is simple: start now, while you&apos;re still young. </p>
                            <Link href="/">
                                <div className="pt-10 flex flex-col items-end justify-end">
                                    <h2 className="text-[#5B52B6] underline text-[17px] leading-[24px] font-semibold">Read more</h2>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="p-[20px]">
                        <div className="border-[1px] lg:h-[286px] p-[20px] rounded-[16px] border-[#EFF0F6] max-w-[610px]">
                            <h2 className="text-[#5B52B6] text-[17px] leading-[24px] font-semibold">Featured Trends</h2>
                            <h1 className="text-[25px] text-[#101828] pt-[15px] font-bold leading-[37.5px] max-w-[570px]">Consultia&apos;s 2024 Mid-Year Trends Report for All Consultants</h1>
                            <p className="text-[#7A7D9C] text-[14px] pt-[10px] leading-[26px] font-normal tracking-[-0.4%] max-w-[570px]">When should you begin to care for your mother? The answer is simple: start now, while you&apos;re still young.</p>
                            <Link href="/">
                                <div className="pt-10 flex flex-col items-end justify-end">
                                    <h2 className="text-[#5B52B6] underline text-[17px] leading-[24px] font-semibold">Read more</h2>
                                </div>
                            </Link>
                        
                        </div>
                    </div>
                </div>

                <div className="lg:pt-40 pt-60">
                           
                   <div className="lg:bg-[#F0F0F9] lg:flex lg:flex-row flex flex-col items-center h-[446px] justify-center">
                        <div className="p-[20px]">
                            <div className="py-[20px] px-[20px] lg:px-0 lg:py-0 flex flex-col items-left justify-start pl-10 lg:pl-0 bg-[#F0F0F9]  lg:bg-none">
                                <h1 className="text-[#000000] lg:text-[49px] text-[39px] leading-[46.8px] lg:leading-[68.6px] max-w-[557px] font-bold">Subscribe to our insights to stay ahead of the curve.</h1>
                            </div>
                        </div>

                        <div>
                            <SubscriptionForm />
                        </div>

                    </div>
                </div>


                <div className="lg:pt-32 pt-72">
                    <div>
                        <h1 className="lg:pl-16 pl-8 text-[#101828] text-[31px] leading-[46.5px] font-bold">Reports</h1>

                        <div className="pt-[20px] lg:flex lg:flex-row flex flex-col items-center justify-center gap-[10px]">
                            <div className="lg:w-[409px] overflow-hidden w-[361px] rounded-[16px] border-[1px] border-[#EFF0F6] p-[20px]">
                                <div className="flex bg-[#F0F0F9] max-w-[369px] items-center rounded-[8px] lg:gap-[55px] gap-[45px]">
                                    <div className="pl-[20px]">
                                        <p className="whitespace-nowrap text-[#41404B] text-[10px] leading-[15px] font-normal">Consultia&apos;s 2024 Mid-Year </p>
                                        <h1 className="text-[#101828] leading-[30px] text-[20px] font-bold whitespace-nowrap">Trends Report</h1>
                                    </div>
                                    <Image src={BlogsFeaturedImage1} alt="BlogsFeaturedImage1" />
                                </div>

                                <h1 className="pt-[20px] text-[25px] leading-[37.5px] font-bold text-[#101828]">2024 Trends Report</h1>

                                <h2 className="pt-[10px] text-[#5B52B6] underline text-[17px] leading-[24px] font-semibold">Read Report</h2>
                            </div>


                            <div className="lg:w-[409px] w-[361px] overflow-hidden rounded-[16px] border-[1px] border-[#EFF0F6] p-[20px]">
                                <div className="flex bg-[#F0F0F9] max-w-[369px] items-center rounded-[8px] gap-[55px]">
                                    <div className="pl-[20px]">
                                        <p className="whitespace-nowrap text-[#41404B] text-[10px] leading-[15px] font-normal">Consultia&apos;s 2024 Mid-Year </p>
                                        <h1 className="text-[#101828] leading-[30px] text-[20px] font-bold whitespace-nowrap">Trends Report</h1>
                                    </div>
                                    <Image src={BlogsFeaturedImage2} alt="BlogsFeaturedImage2" />
                                </div>

                                <h1 className="pt-[20px] text-[25px] leading-[37.5px] font-bold text-[#101828]">2024 Trends Report</h1>

                                <h2 className="pt-[10px] text-[#5B52B6] underline text-[17px] leading-[24px] font-semibold">Read Report</h2>
                            </div>


                            <div className="lg:w-[409px] w-[361px] overflow-hidden rounded-[16px] border-[1px] border-[#EFF0F6] p-[20px]">
                                <div className="flex bg-[#F0F0F9] max-w-[369px] items-center rounded-[8px] gap-[55px]">
                                    <div className="pl-[20px]">
                                        <p className="whitespace-nowrap text-[#41404B] text-[10px] leading-[15px] font-normal">Consultia&apos;s 2024 Mid-Year </p>
                                        <h1 className="text-[#101828] leading-[30px] text-[20px] font-bold whitespace-nowrap">Trends Report</h1>
                                    </div>
                                    <Image src={BlogsFeaturedImage3} alt="BlogsFeaturedImage3" />
                                </div>

                                <h1 className="pt-[20px] text-[25px] leading-[37.5px] font-bold text-[#101828]">2024 Trends Report</h1>

                                <h2 className="pt-[10px] text-[#5B52B6] underline text-[17px] leading-[24px] font-semibold">Read Report</h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pt-24 p-[20px]">
                    <div className="lg:flex lg:flex-row flex flex-col items-center justify-center gap-10">
                        <div className="max-w-[366px] rounded-[16px] border-[1px] border-[#EFF0F6] p-[20px]">
                            <div className="flex flex-col items-center rounded-[8px]">
                               <Image width={326} height={220} src={BlogsFeaturedImage4} alt="BlogsFeaturedImage4" />
                            </div>

                            <div className="bg-[#FDF9F1] flex flex-col items-center justify-center w-[84px] py-[3px] px-[9px] rounded-[8px]">
                                <h3 className="text-[#5B52B6] text-[17px] leading-[24px] font-semibold">Stories</h3>
                            </div>

                            <h1 className="text-[#101828] text-[25px] font-bold leading-[37.5px] max-w-[326px]">Why You Should Start Caring for Your Mother Now, A Must Read.</h1>

                            <p className="text-[#7A7D9C] pt-[10px] text-[14px] leading-[20px] tracking-[-0.4%] font-normal max-w-[326px]">Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. </p>

                            <div className="flex flex-col items-end justify-end pt-[30px]">
                                <h2 className="text-[#5B52B6] underline text-[17px] leading-[24px] font-semibold">Read more</h2>
                            </div>
                        </div>

                        <div className="max-w-[366px] rounded-[16px] border-[1px] border-[#EFF0F6] p-[20px]">
                            <div className="flex flex-col items-center rounded-[8px]">
                               <Image width={326} height={220} src={BlogsFeaturedImage4} alt="BlogsFeaturedImage4" />
                            </div>

                            <div className="bg-[#FDF9F1] flex flex-col items-center justify-center w-[84px] py-[3px] px-[9px] rounded-[8px]">
                                <h3 className="text-[#5B52B6] text-[17px] leading-[24px] font-semibold">Guide</h3>
                            </div>

                            <h1 className="text-[#101828] text-[25px] font-bold leading-[37.5px] max-w-[326px]">Why You Should Start Caring for Your Mother Now, A Must Read.</h1>

                            <p className="text-[#7A7D9C] pt-[10px] text-[14px] leading-[20px] tracking-[-0.4%] font-normal max-w-[326px]">Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. </p>

                            <div className="flex flex-col items-end justify-end pt-[30px]">
                                <h2 className="text-[#5B52B6] underline text-[17px] leading-[24px] font-semibold">Read more</h2>
                            </div>
                        </div>

                        <div className="max-w-[366px] rounded-[16px] border-[1px] border-[#EFF0F6] p-[20px]">
                            <div className="flex flex-col items-center rounded-[8px]">
                               <Image width={326} height={220} src={BlogsFeaturedImage4} alt="BlogsFeaturedImage4" />
                            </div>

                            <div className="bg-[#FDF9F1] flex flex-col items-center justify-center w-[84px] py-[3px] px-[9px] rounded-[8px]">
                                <h3 className="text-[#5B52B6] text-[17px] leading-[24px] font-semibold">Interviews</h3>
                            </div>

                            <h1 className="text-[#101828] text-[25px] font-bold leading-[37.5px] max-w-[326px]">Why You Should Start Caring for Your Mother Now, A Must Read.</h1>

                            <p className="text-[#7A7D9C] pt-[10px] text-[14px] leading-[20px] tracking-[-0.4%] font-normal max-w-[326px]">Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. </p>

                            <div className="flex flex-col items-end justify-end pt-[30px]">
                                <h2 className="text-[#5B52B6] underline text-[17px] leading-[24px] font-semibold">Read more</h2>
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


export default insights;