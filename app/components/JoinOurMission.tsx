import Image from 'next/image';
import Link from "next/link";
import Customers from "../../public/assets/customers.png";
import missionSvg from "../../public/assets/missionSvg.svg";

export function JoinOurMission () {
    return (
        <div className='pt-10 lg:pt-20 relative'>

            <div className='relative lg:flex lg:flex-row flex-col items-center rounded-[20px] justify-between bg-[#5B52B6] lg:max-w-[1240px] max-w-[361px] lg:h-[429px] mx-auto py-[40px] lg:py-[92px] px-[20px] lg:px-[72px]'>
                
                {/* Left Side Content */}
                <div className='text-center lg:text-left'>
                <h1 className='text-[39px] lg:text-[49px] lg:leading-[73.5px] leading-[46.8px] font-bold text-white'>
                    Join Our Mission
                </h1>
                <div className='flex items-center gap-[10px] lg:gap-[20px] pt-[10px]  justify-center lg:justify-start'>
                   
                    <Image width={139.5} height={37.25} src={Customers} alt="Customers" />
                  
                    <h4 className='max-w-[214px] text-left text-white text-[13px] lg:text-[16.5px] font-medium lg:leading-[24.75px] leading-[19.5px]'>
                     Over 15k+ Customers and Companies Trust Us.
                    </h4>
                </div>
                </div>

                {/* Right Side Content */}
                <div className='mt-6 lg:mt-0'>
                <p className='text-[14px] lg:text-[16.5px] leading-[22px] lg:leading-[24.75px] font-normal max-w-[562px] text-white text-left'>
                    Consultia is more than just a platform; it&apos;s a movement to redefine consultancy in Africa. We invite you to join us on this journey as we shape the future of consultancy together.
                </p>

                <div className='flex flex-col lg:flex-row items-center justify-center  pt-6 lg:pt-10 gap-[10px]'>
                    <div>
                    <Link href="/">
                        <button className="bg-white rounded-[8px] py-[10px] px-[20px] text-[#5B52B6] text-[16px] max-w-[206px] font-bold leading-[19.2px] w-full">
                            Learn More About Us
                        </button>
                    </Link>
                    </div>

                    <div>
                        <Link href="/">
                            <button className="border-[2px] border-[#E9AF0A] rounded-[8px] py-[10px] px-[20px] text-white text-[16px] lg:max-w-[204px] w-[204px] font-medium leading-[19.2px]">
                                Join Our Team
                            </button>
                        </Link>
                    </div>
                </div>
                </div>

                
            </div>

            <div className='absolute bottom-0 right-0'>
                <Image src={missionSvg} alt="missionSvg" />
            </div>
        </div>
    )
}