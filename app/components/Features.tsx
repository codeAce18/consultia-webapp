import Image from "next/image";
import featureIcon1 from "../../public/assets/featureIcon1.svg";
import featureIcon2 from "../../public/assets/featureIcon2.svg";
import featureIcon3 from "../../public/assets/featureIcon3.svg";
import featureIcon4 from "../../public/assets/featureIcon4.svg";
import featureIcon5 from "../../public/assets/featureIcon5.svg";



export function Features()  {
    return (
        <div className="pt-20">
           <div>
                <div className="text-center mx-auto">
                    <h1 className="text-[49px] leading-[73.5px] font-bold text-[#101828]">Key Features</h1>
                </div>

                <div className="lg:pt-20 pt-16 lg:flex items-center justify-center  lg:gap-10">
                    <div className="flex flex-col  items-center justify-center">
                        <Image width={52} height={52} src={featureIcon1} alt="featureIcon1" />
                        <h1 className="pt-[10px] text-[20px] font-bold leading-[30px] text-[#101828]">Simple Onboarding</h1>
                        <p className="text-[#41404B] text-[16px] leading-[24px] font-normal text-center max-w-[188px]">Quickly onboard new clients with our efficient, seamless, and streamlined process.</p>
                    </div>

                    <div className="pt-20 lg:pt-0 flex flex-col items-center justify-center">
                        <Image width={52} height={52} src={featureIcon2} alt="featureIcon2" />
                        <h1 className="pt-[10px] text-[20px] font-bold leading-[30px] text-[#101828]">Task Management</h1>
                        <p className="text-[#41404B] text-[16px] leading-[24px] font-normal text-center max-w-[188px]">Onboard clients fast, manage tasks easily, and track progress with intuitive tools.</p>
                    </div>


                    <div className="pt-20 lg:pt-0 flex flex-col items-center justify-center">
                        <Image width={52} height={52} src={featureIcon3} alt="featureIcon3" />
                        <h1 className="pt-[10px] text-[20px] font-bold leading-[30px] text-[#101828]">Stay Compliant</h1>
                        <p className="text-[#41404B] text-[16px] leading-[24px] font-normal text-center max-w-[188px]">Never miss a deadline with our compliance tracking and automated alerts.</p>
                    </div>



                    <div className="pt-20 lg:pt-0 flex flex-col items-center justify-center">
                        <Image width={52} height={52} src={featureIcon4} alt="featureIcon4" />
                        <h1 className="pt-[10px] text-[20px] font-bold leading-[30px] text-[#101828]">Hassle-Free Invoicing</h1>
                        <p className="text-[#41404B] text-[16px] leading-[24px] font-normal text-center max-w-[188px]">Generate, send, and track invoices effortlessly with just a few clicks.</p>
                    </div>



                    <div className="pt-20 lg:pt-0 flex flex-col items-center justify-center">
                        <Image width={52} height={52} src={featureIcon5} alt="featureIcon5" />
                        <h1 className="pt-[10px] text-[20px] font-bold leading-[30px] text-[#101828]">Real-Time Reporting</h1>
                        <p className="text-[#41404B] text-[16px] leading-[24px] font-normal text-center max-w-[188px]">Make data-driven decisions with customizable reports and analytics.</p>
                    </div>
                </div>
           </div>
        </div>
    )
}