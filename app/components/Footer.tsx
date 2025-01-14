import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import consultiaLogo from "../../public/assets/consultiaLogo.svg";
import callIcon from "../../public/assets/call.svg";
import messageIcon from "../../public/assets/messages.svg";
import facebookIcon from "../../public/assets/Fb.svg";
import twitterIcon from "../../public/assets/Tw.svg";
import instagramIcon from "../../public/assets/Ig.svg";
import linkedinIcon from "../../public/assets/Ln.svg";
import Ndpc from "../../public/assets/ndpc.png";
import Ntda from "../../public/assets/ntda.png";

export function Footer() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubscribe = async () => {
    try {
      const response = await axios.post(
        "https://consultia-main-backend-b7eb40c87c34.herokuapp.com/v2/api/subscribe-to-newsletters",
        { email },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Thank You for Subscribing to Our Newsletter!");
        setEmail('');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <div className='pt-20'>
      <div className='bg-[#F1F1F1] w-full mx-auto py-[50px] px-[5%]'>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
          <div className='text-center lg:text-left'>
            <h1 className='text-[20px] lg:text-[28px] leading-[28.8px] text-[#101928] tracking-[-2%] font-bold'>
              Join our newsletter
            </h1>
            <p className='pt-[5px] text-[16px] lg:text-[18px] text-[#344054] font-normal leading-[23.2px] lg:max-w-[312px] max-w-[266px]'>
              Get all the latest Consultia news delivered to your inbox.
            </p>
          </div>

          <div className='pt-[20px] lg:pt-0 flex flex-col lg:flex-row items-center lg:justify-normal justify-center lg:gap-[20px]'>
            <Input
              className="max-w-[300px] mx-auto h-[48px] px-[16px] rounded-[6px] border border-[#D0D5DD] outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='pt-[15px] lg:pt-0'>
              <Button
                className="bg-[#5B52B6] w-[181px] h-[48px] p-[10px] rounded-[8px] text-[16px] font-bold leading-[19.2px] text-white"
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>


        <div className='pt-20 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between'>
          {["Features", "Company", "Support", "Contact Us"].map((section, index) => (
            <div key={index} className='pt-[20px] lg:pt-0'>
              <h1 className='text-[20px] lg:text-[24px] font-medium leading-[30px] text-[#101828] text-center lg:text-left'>{section}</h1>
              <ul className='pt-[20px] text-center lg:text-left text-[16px] lg:text-[18px] leading-[23.2px] text-[#41404B] font-medium'>
                {section === "Features" && (
                  <>
                    <li>Client Onboarding</li>
                    <li className='pt-[8px]'>Task Management</li>
                    <li className='pt-[8px]'>Compliance Tracking</li>
                    <li className='pt-[8px]'>Invoicing and Payments</li>
                    <li className='pt-[8px]'>Reporting & Analytics</li>
                  </>
                )}
                {section === "Company" && (
                  <>
                    <Link href="/aboutus">
                      <li>About Us</li>
                    </Link>
                    <Link href="/careers">
                      <li className='pt-[8px]'>Careers</li>
                    </Link>
                    <Link href="/getintouch">
                      <li className='pt-[8px]'>Get In Touch</li>
                    </Link>
                  </>
                )}
                {section === "Support" && (
                  <>
                    <Link href="/faq">
                      <li>FAQ</li>
                    </Link>
                    <Link href="/">
                      <li className='pt-[8px]'>Knowledge Base</li>
                    </Link>
                    <Link href="/insights">
                      <li className='pt-[8px]'>Insights</li>
                    </Link>
                  </>
                )}
                {section === "Contact Us" && (
                  <>
                    <div className='flex items-center gap-[10px]'>
                      <Image src={callIcon} alt="callIcon" />
                      <p className='pt-[20px] text-[16px] lg:text-[18px] leading-[23.2px] text-[#41404B] font-medium'>+234 805 598 1421</p>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                      <Image src={messageIcon} alt="messageIcon" />
                      <p className='pt-[8px] text-[16px] lg:text-[18px] leading-[23.2px] text-[#41404B] font-medium'>support@consultia.africa</p>
                    </div>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className='pt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
          <div>
            <Image className='mx-auto lg:mx-0' width={121} height={54.59} src={consultiaLogo} alt="consultiaLogo" />
            <p className='pt-[10px] text-center lg:text-left text-[16px] lg:text-[18px] font-normal leading-[23.2px] text-[#1D2739]'>&#169; 2024 Consultia. All rights reserved.</p>
            <p className='pt-[10px] text-center lg:text-left text-[16px] lg:text-[18px] font-normal leading-[23.2px] text-[#475367] max-w-[419px]'>All trademarks, logos, and brand names are the property of their respective owners.</p>
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
              <Image src={Ndpc} alt="NDPC" />
              <Image src={Ntda} alt="NTDA" />
            </div>
          </div>
        </div>

        <div className='pt-[20px] flex flex-col lg:flex-row items-center justify-center lg:justify-normal gap-10'>
          <Link href="/termsofservice">
            <p className='max-w-[113px] text-[14px] lg:text-[16px] text-[#667185] leading-[20.3px] font-medium whitespace-nowrap'>Terms of Service</p>
          </Link>
          <Link href="/privacypolicy">
            <p className='text-[14px] lg:text-[16px] text-[#667185] leading-[20.3px] font-medium'>Privacy Policy</p>
          </Link>
          <Link href="/">
            <p className='text-[14px] lg:text-[16px] text-[#667185] leading-[20.3px] font-medium'>Security</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
