import { Navbar } from "@/app/components/Navbar";
import "../app/globals.css";
import Image from 'next/image';

import EmailSvg from "../public/assets/EmailSvg.svg"
import CallSvg from "../public/assets/CallSvg.svg"
import whatsappSvg from "../public/assets/whatsappSvg.svg"
import { JoinOurMission } from "@/app/components/JoinOurMission";
import { Footer } from "@/app/components/Footer";
import GetInTouchForm from "@/app/components/GetInTouchForm";





const getintouch = () => {
    return (
        <>
            <Navbar />

            <div className="lg:pt-20 pt-16">
                <div className="lg:flex lg:flex-row flex flex-col max-w-[970.91px] mx-auto  gap-20">
                    <div>
                        <div className="flex flex-col items-center justify-center lg:flex lg:flex-col lg:items-start lg:justify-start">
                            <h1 className="lg:text-[59px] text-[39px]  leading-[1.1] max-w-[500px] text-[#101828] text-center lg:text-left font-bold">
                            Get in touch with us. We&apos;re here to assist you.
                            </h1>
                            <p className=" text-[#4D5761] text-[16.5px] text-left leading-[27px] font-normal pt-[20px]   max-w-[361px] text-center lg:text-left  ">We&apos;d love to hear from you. Please fill out this form.</p>
                        </div>
                        

                        <div className="lg:pt-20 pt-10">

                            <GetInTouchForm />

                        </div>
                    </div>


                    <div className="lg:pt-20 ">
                        <div className="border-[1px] mx-auto lg:mx-0 rounded-[8px] border-[#E5E7EB] w-[302.81px] h-[222.59px] px-[20px]">
                            <div className="flex flex-col justify-start items-left pt-[20px]">
                                <Image src={EmailSvg} alt="EmailSvg" />
                                <h1 className="pt-[15px] text-[#111827] font-semibold text-[23.06px] leading-[33.6px]">Email us</h1>
                                <h3 className="pt-[10px] text-[#4D5761] text-[16.5px] leading-[27px] font-normal">Speak to our team.</h3>
                                <p className="pt-[10px] text-[#5B52B6] text-[16px] leading-[24px]">sales@consultia.africa</p>
                            </div>
                        </div>

                        <div className="mt-[20px] mx-auto lg:mx-0 rounded-[8px] border-[1px] border-[#E5E7EB] w-[302.81px] h-[222.59px] px-[20px]">
                            <div className="flex flex-col justify-start items-left pt-[20px]">
                                <Image src={whatsappSvg} alt="whatsappSvg" />
                                <h1 className="pt-[15px] text-[#111827] font-semibold text-[23.06px] leading-[33.6px]">Email us</h1>
                                <h3 className="pt-[10px] text-[#4D5761] text-[16.5px] leading-[27px] font-normal">Speak to our team.</h3>
                                <p className="pt-[10px] text-[#5B52B6] text-[16px] leading-[24px]">sales@consultia.africa</p>
                            </div>
                        </div>

                        <div className="mt-[10px] rounded-[8px] mx-auto lg:mx-0 border-[1px] border-[#E5E7EB] w-[302.81px] h-[222.59px] px-[20px]">
                            <div className="flex flex-col justify-start items-left pt-[20px]">
                                <Image src={CallSvg} alt="CallSvg" />
                                <h1 className="pt-[15px] text-[#111827] font-semibold text-[23.06px] leading-[33.6px]">Email us</h1>
                                <h3 className="pt-[10px] text-[#4D5761] text-[16.5px] leading-[27px] font-normal">Speak to our team.</h3>
                                <p className="pt-[10px] text-[#5B52B6] text-[16px] leading-[24px]">sales@consultia.africa</p>
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


export default getintouch;