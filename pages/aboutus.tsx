import { Navbar } from "@/app/components/Navbar";
import "../app/globals.css";
import Image from 'next/image';

import blueBg from "../public/assets/blueBg.png"
import TeamImg from "../public/assets/TeamImg.png"
import tickCircle from "../public/assets/tick-circle.svg"
import { JoinOurMission } from "@/app/components/JoinOurMission";
import { Footer } from "@/app/components/Footer";


const aboutus = () => {
  return (
  <div>
    <>
      <Navbar />
        <div className="pt-16">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="lg:text-[61px] text-[48px] leading-[57.6px] lg:leading-[73.2px] font-extrabold text-[#101828] max-w-[361px] lg:max-w-[1002px] mx-auto">Helping Consultants to Scale Effortlessly in Africa</h1>
            <p className="pt-[15px] text-[14px] leading-[21px] font-normal max-w-[349px] lg:max-w-[501px] text-[#101828]">At Consultia, our mission is to empower consultants and firms across Africa 
            with the tools they need to succeed. </p>
          </div>

          <div className="pt-20 p-[20px]">
            <div className="lg:flex lg:flex-row flex flex-col-reverse   lg:items-center lg:justify-center lg:gap-[125px]">
              <div className="flex flex-col justify-center mx-auto text-center lg:text-left">
                <h1 className="text-[#101828] text-[49px] leading-[73.5px] font-bold">Our Story</h1>

                <p className="text-[14px] leading-[21px] font-normal max-w-[361px] lg:max-w-[562px] text-[#41404B]">Consultia was born out of the challenges faced by consultants in managing their daily operations. With years of experience in the consultancy industry, we identified the need for a comprehensive solution that could address these challenges head-on. Today, Consultia is on a mission to transform how consultancy firms operate, enabling them to focus on what truly matters—serving their clients and growing their businesses.</p>
              </div>

              <div>
                <Image className="mx-auto" width={505} height={463} src={blueBg} alt="blueBg" />
              </div>
            </div>
          </div>


          <div className="lg:pt-20 pt-10 p-[20px]">
            <div className="lg:flex lg:flex-row flex flex-col items-center justify-center lg:gap-[125px]">
              <div>
                <Image width={505} height={463} src={TeamImg} alt="TeamImg" />
              </div>
             
              <div className="flex flex-col justify-center mx-auto lg:text-left text-center">
                <h1 className="text-[#101828] text-[49px] leading-[73.5px] font-bold">Our Team</h1>

                <p className="text-[14px] leading-[21px] font-normal max-w-[610px] text-[#41404B]">Our team comprises seasoned professionals with deep expertise in consultancy, technology, and business management. We are passionate about creating solutions that not only meet but exceed the needs of our users.</p>
              </div>

            </div>
          </div>


          <div className="lg:pt-20 pt-10 p-[20px]">
            <div className="bg-[#F0F0F9] max-w-[1240px] mx-auto rounded-[20px] lg:px-16 lg:py-10 py-[20px] px-[30px]">
              <div className="flex flex-col items-start">
                <h1 className="text-[#101828] lg:text-[49px] text-[39px] font-bold leading-[73.5px]">Our Values</h1>

                
                <div className="flex items-start gap-[10px] pt-[20px]">
                  <Image src={tickCircle} alt="tickCircle" />
                  <div>
                    <h2 className="text-[#101828] text-[20px] leading-[30px] font-medium">Innovation</h2>
                    <p className="text-[16.5px] leading-[24.75px] text-[#41404B] font-normal">We are committed to continuous improvement and innovation in everything we do.</p>
                  </div>
                </div>

                  
             

          
                <div className="flex items-start  gap-[10px] pt-[16px]">
                  <Image src={tickCircle} alt="tickCircle" />
                  <div>
                    <h2 className="text-[#101828] text-[20px] leading-[30px] font-medium">Customer Focus</h2>
                    <p className="text-[16.5px] leading-[24.75px] text-[#41404B] font-normal">Our users are at the heart of our business. We listen, we learn, and we deliver.</p>
                  </div>
                </div>

                  
             

             
                <div className="flex items-start  gap-[10px] pt-[16px]">
                  <Image src={tickCircle} alt="tickCircle" />
                  <div>
                    <h2 className="text-[#101828] text-[20px] leading-[30px] font-medium">Integrity</h2>
                    
                    <p className="text-[16.5px] leading-[24.75px] text-[#41404B] font-normal">We operate with transparency, honesty, and the highest ethical standards.</p>
                  </div>
                </div>

             

            
                <div className="flex items-start  gap-[10px] pt-[16px]">
                  <Image src={tickCircle} alt="tickCircle" />
                  <div>
                    <h2 className="text-[#101828] text-[20px] leading-[30px] font-medium">Collaboration</h2>
                    <p className="text-[16.5px] leading-[24.75px] text-[#41404B] font-normal">We believe in the power of teamwork—both within our organization and with our users.</p>
                  </div>
                </div>

                  
               
              </div>
            </div>
          </div>
        </div>

        <JoinOurMission />

        <Footer />
    </>
  </div>
  )
}

export default aboutus