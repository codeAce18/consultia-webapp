"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from 'react';
import HeroImg from "../../public/assets/Hero.png";
import OneImg from "../../public/assets/one.png"
import TwoImg from "../../public/assets/two.png"
import ThreeImg from "../../public/assets/three.png"
import FourImg from "../../public/assets/four.png"
import FiveImg from "../../public/assets/five.png"
import SixImg from "../../public/assets/six.png"
import SevenImg from "../../public/assets/seven.png"
import RightArrow from "../../public/assets/RightArrow.svg"
import LeftArrow from "../../public/assets/LeftArrow.svg"


const Hero = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollImages = (direction: 'left' | 'right') => {
      if (scrollContainerRef.current) {
        const scrollAmount = direction === 'left' ? -200 : 200; // Adjust the scroll amount as needed
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    };
    return (
        <div>
        
        <div className="relative lg:h-[830px] h-[740px] bg-hero-left bg-cover bg-center bg-no-repeat">
            {/* Main content area */}
            <div className="flex flex-col items-center lg:absolute lg:inset-0 lg:bg-hero-right lg:bg-right  lg:bg-no-repeat lg:pt-20 pt-10">
                <h1 className="lg:text-[61px] text-[45px] lg:leading-[73.2px] leading-[60px] font-extrabold text-[#101828] text-center max-w-[90%] md:max-w-[1188px] mx-auto">
                Streamline Workflows. Connect with Consultants Effortlessly.
                </h1>

                <p className="pt-[10px] text-[14px] font-normal leading-[21px] text-center text-[#41404B] lg:max-w-[1092px] max-w-[90%] md:max-w-[345px] mx-auto">
                Streamline client management processes by 70% with Consultia&apos;s fit-for-purpose consulting platform.
                <br /> Automate workflows for onboarding, requisition, compliance and invoicing—all in one place.
                <br /> Connecting clients with vetted consultants seamlessly.
                </p>

                <div className="pt-10 flex items-center justify-center lg:gap-10 gap-6 flex-wrap">
                <div>
                    <button className="bg-[#5B52B6] lg:w-[160px] w-[154px] lg:text-[16px] text-[12px] leading-[19.2px] font-semibold text-white p-[10px] rounded-[8px]">
                    Book a Demo
                    </button>
                </div>

                <div>
                    <button className="border-2 border-custom-yellow lg:text-[16px] text-[12px] leading-[19.2px] font-semibold text-[#101828] p-[10px] lg:w-[159px] w-[145px] rounded-[8px]">
                    Get Started
                    </button>
                </div>
                </div>

                <div className="pt-16 p-[20px] lg:overflow-hidden overflow-hidden">
                <Image className="mx-auto overflow-hidden" width={939.85} height={586} src={HeroImg} alt="HeroImg" />
                </div>
            </div>
            </div>

            {/* Statistics Section */}
            <div className="lg:pt-10 pt-6 p-[20px] lg:p-0">
            <div className="py-[10px] px-[30px] mx-auto lg:flex lg:flex-row flex-col flex items-center justify-center gap-20 bg-[#FFFFFF] max-w-[90%] md:max-w-[1080px] shadow-custom-white">
                <div className="text-center lg:text-left">
                <h1 className="text-[40px] text-[#4E4B66] font-extrabold leading-[48.41px]">15,300+</h1>
                <h3 className="text-[16px] font-normal leading-[22px] text-[#727474] max-w-[237px]">
                    Consultants and clients from different sectors use Consultia.
                </h3>
                </div>
                <div className="hidden lg:flex items-center justify-center gap-[10px]">
                    <div onClick={() => scrollImages('left')} className="cursor-pointer">
                        <Image src={LeftArrow} alt="LeftArrow" />
                    </div>
                    <div  ref={scrollContainerRef} className="flex   overflow-x-auto scroll-smooth gap-4 no-scrollbar">
                        <div className="flex-shrink-0">
                            <Image width={85} height={85} src={OneImg} alt="OneImg" />
                        </div>
                        <div className="flex-shrink-0">
                            <Image width={89.88} height={85} src={TwoImg} alt="TwoImg" />
                        </div>
                        <div className="flex-shrink-0">
                            <Image width={83.18} height={85} src={ThreeImg} alt="ThreeImg" />
                        </div>
                        <div className="flex-shrink-0">
                            <Image width={78.61} height={85} src={FourImg} alt="FourImg" />
                        </div>
                        <div className="flex-shrink-0">
                            <Image width={86.18} height={85} src={FiveImg} alt="FiveImg" />
                        </div>
                        <div className="flex-shrink-0">
                            <Image width={83.99} height={85} src={SixImg} alt="SixImg" />
                        </div>
                        <div className="flex-shrink-0">
                            <Image width={85} height={85} src={SevenImg} alt="SevenImg" />
                        </div>
                        <div className="flex-shrink-0">
                            <Image width={85} height={85} src={SevenImg} alt="SevenImg" />
                        </div>
                        <div className="flex-shrink-0">
                            <Image width={83.99} height={85} src={SixImg} alt="SixImg" />
                        </div>
                        <div className="flex-shrink-0">
                            <Image width={85} height={85} src={SevenImg} alt="SevenImg" />
                        </div>
                    </div>

                    <div  onClick={() => scrollImages('right')} className="cursor-pointer">
                        <Image src={RightArrow} alt="RightArrow" />
                    </div>
                </div>
            </div>
            </div>

        </div>
    )

}

export default Hero;