import Image from 'next/image';
import Link from "next/link";

import consultiaLogo from "../../public/assets/consultiaLogo.svg"

import callIcon from "../../public/assets/call.svg"
import messageIcon from "../../public/assets/messages.svg"
import facebookIcon from "../../public/assets/Fb.svg"
import twitterIcon from "../../public/assets/Tw.svg"
import instagramIcon from "../../public/assets/Ig.svg"
import linkedinIcon from "../../public/assets/Ln.svg"
import Ndpc from "../../public/assets/ndpc.png"
import Ntda from "../../public/assets/ntda.png"


export function Footer() {
    return (
        <div className='pt-20'>
           <div className='bg-[#F1F1F1] max-w-[1440px]  py-[50px] px-[100px]'>
                <div className='lg:flex lg:flex-row flex flex-col items-center justify-center lg:justify-between'>
                    <div>
                        <h1 className='lg:text-[24px] text-[20px] text-center lg:text-left leading-[28.8px] text-[#101928] tracking-[-2%] font-bold'>Join our newsletter</h1>
                        <p className='pt-[5px] text-[16px]  text-[#344054] font-normal leading-[23.2px] lg:max-w-[312px] max-w-[266px] lg:text-left text-center'>Get all the latest Consultia news delivered to your inbox.</p>
                    </div>
                    
                    <div className='pt-[20px] lg:pt-0 lg:flex lg:flex-row flex flex-col items-center lg:justify-normal justify-center lg:gap-[10px]'>
                        <input
                            className="max-w-[300px] mx-auto h-[48px] px-[16px] rounded-[6px] border-[1px] border[#D0D5DD] outline-none"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email address"
                        />

                        <div className='pt-[15px] lg:pt-0 '>
                            <Link href="/">
                                <button className='bg-[#5B52B6] w-[181px] h-[48px] p-[10px] rounded-[8px] text-[16px] lg:mx-0 font-bold leading-[19.2px] text-white'>
                                    Subscribe
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='pt-20 lg:flex lg:flex-row flex flex-col justify-center items-center lg:items-start lg:justify-between'>
                    <div>
                        <h1 className='text-[20px] font-medium leading-[30px] text-[#101828] text-center lg:text-left'>Features</h1>
                        <ul className='text-center lg:text-left pt-[20px] text-[16px] leading-[23.2px] text-[#41404B] font-medium'>
                            <li>Client Onboarding</li>
                            <li className='pt-[8px]'>Task Management</li>
                            <li className='pt-[8px]'>Compliance Tracking</li>
                            <li className='pt-[8px]'>Invoicing and Payments</li>
                            <li className='pt-[8px]'>Reporting & Analytics</li>
                        </ul>
                    </div>

                    <div className='pt-[20px] lg:pt-0'>
                        <h1 className='text-[20px] font-medium leading-[30px] text-[#101828]'>Company</h1>
                        <ul className='pt-[20px] text-center lg:text-left text-[16px] leading-[23.2px] text-[#41404B] font-medium'>
                            <Link href="/">
                                <li>About Us</li>
                            </Link>

                            <Link href="/">
                                <li className='pt-[8px]'>Careers</li>
                            </Link>
                        </ul>
                            
                    </div>

                    <div className='pt-[20px] lg:pt-0'>
                        <h1 className='text-[20px] font-medium leading-[30px] text-center lg:text-left text-[#101828]'>Support</h1>
                        <ul className='pt-[20px] text-center lg:text-left text-[16px] leading-[23.2px] text-[#41404B] font-medium'>
                            <Link href="/">
                                <li>FAQ</li>
                            </Link>

                            <Link href="/">
                                <li className='pt-[8px]'>Knowledge Base</li>
                            </Link>

                            <Link href="/">
                                <li className='pt-[8px]'>Insights</li>
                            </Link>
                        </ul>
                    </div>

                    <div className='text-center lg:text-left pt-[20px] lg:pt-0 '>
                        <h1  className='text-[20px] font-medium leading-[30px] text-[#101828]'>Contact Us</h1>
                      
                        <div className='flex items-center gap-[10px]'>
                            <Image src={callIcon} alt="callIcon" />
                            <p className='pt-[20px] text-[16px] leading-[23.2px] text-[#41404B] font-medium'>+234 805 598 1421</p>
                        </div>

                        <div  className='flex items-center gap-[10px]'>
                            <Image src={messageIcon} alt="messageIcon" />
                            <p className='pt-[8px] text-[16px] leading-[23.2px] text-[#41404B] font-medium'>support@consultia.africa</p>
                        </div>
                    </div>
                </div>


                <div className='lg:pt-20 pt-16 lg:flex lg:flex-row flex-col flex items-center justify-center lg:items-start lg:justify-between'>
                    <div>
                        <Image className='mx-auto lg:mx-0' width={121} height={54.59} src={consultiaLogo} alt="consultiaLogo" />
                        <p className='pt-[10px] text-center lg:text-left text-[16px] font-normal leading-[23.2px] text-[#1D2739]'>&#169; 2024 Consultia. All rights reserved.</p>
                        <p className='pt-[10px] text-center lg:text-left  text-[16px] font-normal leading-[23.2px] text-[#475367] max-w-[419px]'>All trademarks, logos and brand names are the property of their respective owners.</p>
                    </div>

                    <div className='pt-[20px] lg:pt-0'>
                        <div className='flex items-center gap-[10px]'>
                            <Link href="/">
                                <Image src={facebookIcon} alt="facebookIcon" />
                            </Link>

                            <Link href="/">
                                <Image src={twitterIcon} alt="twitterIcon" />
                            </Link>
                                
                            <Link href="/">
                                <Image src={instagramIcon} alt="instagramIcon" />
                            </Link>

                            <Link href="/">
                                <Image src={linkedinIcon} alt="linkedinIcon" />
                            </Link>
                        </div>

                        <div className='lg:pt-24 pt-[35px] flex items-center gap-[10px]'>
                            <Image src={ Ndpc } alt="NDPC" />
                            <Image src={Ntda} alt="twitterIcon" />
                        </div>
                    </div>
                </div>

                <div className='lg:pt-[10px] pt-[20px] lg:flex lg:flex-row flex flex-col  items-center justify-center lg:justify-normal gap-10'>
                    <Link href="/">
                        <p className='max-w-[113px] text-[14px] text-[#667185] leading-[20.3px] font-medium whitespace-nowrap'>Terms of Service</p>
                    </Link>

                    <Link href="/">
                        <p className='text-[14px] max-w-[94px] text-[#667185] leading-[20.3px] font-medium'>Privacy Policy</p>
                    </Link>

                    <Link href="/">
                        <p className='text-[14px] text-[#667185] leading-[20.3px] font-medium'>Security</p>
                    </Link>
                </div>
           </div>
        </div>
                  
                       
                      
    )
}