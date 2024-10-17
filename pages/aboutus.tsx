import { Navbar } from "@/app/components/Navbar";
import "../app/globals.css";
import Image from 'next/image';

// import blueBg from "../public/assets/blueBg.png"

import featureIcon2 from "../public/assets/featureIcon2.svg"
import featureIcon3 from "../public/assets/featureIcon3.svg"
import BlackCheck from "../public/assets/BlackCheck.svg"
import { JoinOurMission } from "@/app/components/JoinOurMission";
import { Footer } from "@/app/components/Footer";


const aboutus = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="pt-16">
          <div>
            <h1 className="text-[#101828] lg:text-[61px] text-[49px] leading-[59px] lg:leading-[73.2px] font-bold max-w-[1002px] mx-auto text-center">We&apos;re helping Consultants to scale exponentially with little effort</h1>

            <p className="text-[#41404B] pt-[20px] text-[16px] leading-[24px] max-w-[968px] text-center mx-auto">At Consultia, our journey began with a simple yet powerful realization: consultancy firms, especially in Africa, face countless operational challenges that often hold them back from reaching their full potential. We knew there had to be a better way.</p>

            <p className="text-[#41404B] pt-[16px] text-[16px] leading-[24px] max-w-[968px] text-center mx-auto">Our goal is to make it easier for consultants to focus on what they do best, offering expert advice and solving problems, while we take care of the backend: project management, client communication, compliance tracking and much more.</p>


            <p className="text-[#41404B] pt-[16px] text-[16px] leading-[24px] max-w-[968px] text-center mx-auto">Through Consultia, we want to empower consultancy firms of all sizes to scale efficiently, remain compliant with local regulations, and build lasting relationships with their clients.</p>
          </div>


          <div className="pt-24">
            <div className="flex items-center justify-center">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-[10px]">
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <Image src={featureIcon2} alt="featureIcon2" />
                  </div>
                  <h1 className="text-[#101828] pt-[10px] text-[20px] leading-[28px] font-bold">Our Vision</h1>
                  <p className="text-[#41404B] pt-[10px] text-[16px] leading-[24px] max-w-[393px] text-center">To be the leading platform that redefines consultancy management and client engagement in Africa, empowering consultancy firms and independent consultants to thrive in a digital-first, highly connected world.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <Image src={featureIcon3} alt="featureIcon3" />
                  </div>
                  <h1 className="text-[#101828] pt-[10px] text-[20px] leading-[28px] font-bold">Our Mission</h1>
                  <p className="text-[#41404B] pt-[10px] text-[16px] leading-[24px] max-w-[487px] text-center">To provide an integrated, user-friendly platform that helps consultancy firms streamline their operations, enhance client relationships, and connect with clients who need their expertise—all while addressing the unique regulatory and business landscape of Africa.</p>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className="flex flex-col items-center justify-center pt-20">
              <h1 className="text-[#101828] text-[49px] leading-[68.6px] font-bold">Our Values</h1>
            </div>

            <div className="pt-16">
              <div className="flex items-center justify-center">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-[20px] gap-y-[20px]">
                  <div className="flex items-center gap-[5px] justify-center py-[16px] px-[24px] rounded-[8px] bg-[#F1F1F1] w-[165px]">
                    <Image src={BlackCheck} alt="BlackCheck" />
                    <h1 className="text-[16px]  font-medium leading-[24px]">Innovation</h1>
                  </div>

                  <div className="flex items-center gap-[5px] justify-center py-[16px] px-[24px] rounded-[8px] bg-[#F1F1F1] w-[197px]">
                    <Image src={BlackCheck} alt="BlackCheck" />
                    <h1 className="text-[16px]  font-medium leading-[24px]">Empowerment</h1>
                  </div>
                  <div className="flex items-center gap-[5px] justify-center py-[16px] px-[24px] rounded-[8px] bg-[#F1F1F1] w-[165px]">
                    <Image src={BlackCheck} alt="BlackCheck" />
                    <h1 className="text-[16px]  font-medium leading-[24px]">Excellence</h1>
                  </div>
                  <div className="flex items-center gap-[5px] justify-center py-[16px] px-[24px] rounded-[8px] bg-[#F1F1F1] w-[188px]">
                    <Image src={BlackCheck} alt="BlackCheck" />
                    <h1 className="text-[16px]  font-medium leading-[24px]">Collaboration</h1>
                  </div>
                  <div className="flex items-center gap-[5px] justify-center py-[16px] px-[24px] rounded-[8px] bg-[#F1F1F1] w-[142px]">
                    <Image src={BlackCheck} alt="BlackCheck" />
                    <h1 className="text-[16px]  font-medium leading-[24px]">Growth</h1>
                  </div>

                  <div className="flex items-center gap-[5px] justify-center py-[16px] px-[24px] rounded-[8px] bg-[#F1F1F1] w-[150px]">
                    <Image src={BlackCheck} alt="BlackCheck" />
                    <h1 className="text-[16px]  font-medium leading-[24px]">Integrity</h1>
                  </div>

                  <div className="flex items-center gap-[5px] justify-center py-[16px] px-[24px] rounded-[8px] bg-[#F1F1F1] w-[162px]">
                    <Image src={BlackCheck} alt="BlackCheck" />
                    <h1 className="text-[16px]  font-medium leading-[24px]">Resilience</h1>
                  </div>

                  <div className="flex items-center gap-[5px] justify-center py-[16px] px-[24px] rounded-[8px] bg-[#F1F1F1] w-[243px]">
                    <Image src={BlackCheck} alt="BlackCheck" />
                    <h1 className="text-[16px] font-medium leading-[24px]">Customer-centricity</h1>
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