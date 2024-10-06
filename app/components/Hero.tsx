import Image from "next/image";
import Link from "next/link";

import HeroImg from "../../public/assets/Hero.png";
import OneImg from "../../public/assets/one.png"
import TwoImg from "../../public/assets/two.png"
import ThreeImg from "../../public/assets/three.png"
import FourImg from "../../public/assets/four.png"
import FiveImg from "../../public/assets/five.png"
import SixImg from "../../public/assets/six.png"
import SevenImg from "../../public/assets/seven.png"


const Hero = () => {
    return (
        <div>
        
            <div className="relative lg:h-[calc(100vh+200px)] h-[calc(100vh+245px)] bg-hero-left bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col items-center  lg:absolute lg:inset-0 lg:bg-hero-right lg:bg-right lg:bg-no-repeat  lg:pt-20 pt-10">
                    <h1 className="lg:text-[61px] text-[45px] lg:leading-[73.2px] leading-[60px] font-extrabold text-[#101828] text-center max-w-[1188px] mx-auto">Streamline Workflows. Connect with Consultants Effortlessly.</h1>

                    <p className="pt-[10px] text-[14px] font-normal leading-[21px] text-center text-[#41404B] lg:max-w-[1092px] max-w-[345px] mx-auto">Streamline client management processes by 70% with Consultia's fit-for-purpose consulting platform.<br /> Automate workflows for onboarding, requisition, compliance and invoicing—all in one place.<br /> Connecting clients with vetted consultants simlessly.</p>

                    <div className="pt-10 flex items-center justify-center lg:gap-10 gap-6">
                        <div>
                            <button className="bg-[#5B52B6] lg:w-[160px] w-[154px] lg:text-[16px] text-[12px]leading-[19.2px] font-semibold text-white p-[10px] rounded-[8px]">
                                Book a Demo
                            </button>
                        </div>

                        <div>
                            <button className="border-2 border-custom-yellow lg:text-[16px] text-[12px] leading-[19.2px] font-semibold text-[#101828] p-[10px]  lg:w-[159px] w-[145px] rounded-[8px]">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="pt-16 p-[20px]  overflow-hidden">
                        <Image className="mx-auto overflow-hidden" width={939.85}  height={586} src={HeroImg} alt="HeroImg" />
                    </div>
                </div>
            </div>

            <div className="lg:pt-10 pt-6 p-[20px] lg:p-0">
                <div className="py-[10px] mx-auto flex items-center justify-center gap-20 bg-[#FFFFFF] max-w-[1080px]  shadow-custom-white">
                    <div>
                        <h1 className="text-[40px] text-center lg:text-left text-[#4E4B66] font-extrabold leading-[48.41px]">15,300+</h1>
                        <h3 className="text-center lg:text-left text-[16px] font-normal leading-[22px] text-[#727474] max-w-[237px]">Consultants and clients from different sectors use consultia.</h3>
                    </div>
                    <div className="hidden lg:flex items-center justify-center gap-[10px]">
                        <Image width={85} height={85} src={OneImg} alt="OneImg" />
                        <Image width={89.88} height={85} src={TwoImg} alt="TwoImg" />
                        <Image width={83.18} height={85} src={ThreeImg} alt="ThreeImg" />
                        <Image width={78.61} height={85} src={FourImg} alt="FourImg" />
                        <Image width={86.18} height={85} src={ FiveImg } alt=" FiveImg " />
                        <Image width={83.99} height={85} src={SixImg} alt="SixImg" />
                        <Image width={85} height={85} src={SevenImg} alt="SevenImg" />
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Hero;