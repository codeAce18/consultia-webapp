import Image from "next/image";

import Paul from "../../public/assets/Paul.svg"
import GTech from "../../public/assets/G-tech.svg"
import Tunde from "../../public/assets/Tunde.svg"
import Tlogo from "../../public/assets/T-logo.svg"
import Rebecca from "../../public/assets/Rebecca.svg"
import Farmers from "../../public/assets/Farmers.svg"
import Alabi from "../../public/assets/Alabi.svg"
import Flag from "../../public/assets/Flag.svg"
import quotedown from "../../public/assets/quotedown.svg"


export function Testimonial() {
  
    return(
      <div className="pt-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#101828] max-w-[856px] text-[49px] leading-[68.6px] font-bold text-center">
          Discover why thousands of users trust us. Hear their stories!
          </h1>
        </div>

        <div className="pt-20 p-[20px]">
          <div className="flex items-center justify-center">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-[20px] gap-x-[20px]">
              <div>
                <div className="bg-[#F9F9F9] max-w-[536px] p-[30px] rounded-[16px]">
                  <Image src={quotedown} alt="quotedown" />

                  <p className="pt-[10px] max-w-[565px] text-[16px] leading-[24px] text-[#121212] font-normal">Using Consultia for our tech consultancy services and also deploying it for managing our global clients has been a great experience. The UX is so user friendly and the ability to find and connect with global clients effortlessly is a great feature. We have been using Consultia for few months now and it has helped us grow exponentially.</p>


                  <div className="flex items-center justify-between pt-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <Image src={Paul} alt="Paul" />

                      <div>
                        <h1 className="text-[16px] leading-[24px] text-[#121212] font-bold">Paul Oseghale</h1>

                        <p className="text-[#7B91B0] text-[12.69px] leading-[21px]">CEO, Gmonie Technologies Ltd.</p>
                      </div>
                    </div>

                    <div>
                      <Image src={GTech} alt="GTech" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-[#F9F9F9] max-w-[536px] p-[30px] rounded-[16px]">
                  <Image src={quotedown} alt="quotedown" />

                  <p className="pt-[10px] max-w-[565px] text-[16px] leading-[24px] text-[#121212] font-normal">Consultia&apos;s modern approach to consultancy software has made managing our clients&apos; operations seamless. The Consultia compliance system effectively automates complacence related tasks in real-time and setting reminders has grew our business. Managing agri-consulting business has never been this easy in Nigeria.</p>


                  <div className="flex items-center justify-between pt-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <Image src={Alabi} alt="Alabi" />

                      <div>
                        <h1 className="text-[16px] leading-[24px] text-[#121212] font-bold">Akin Alabi</h1>

                        <p className="text-[#7B91B0] text-[12.69px] leading-[21px]">Managing Partner, CFIL</p>
                      </div>
                    </div>

                    <div>
                      <Image src={Farmers} alt="Farmers" />
                    </div>
                  </div>
                </div>
              </div>


              <div>
                <div className="bg-[#F9F9F9] max-w-[536px] p-[30px] rounded-[16px]">
                  <Image src={quotedown} alt="quotedown" />

                  <p className="pt-[10px] max-w-[565px] text-[16px] leading-[24px] text-[#121212] font-normal">As a brand and business strategist/strategic communications consultant, Consultia is the platform we depend on for managing client operations and relationship. It automates workflow, tracks compliance and simplifies task management with just few clicks. Its reporting features and user-friendly interface help us managing multiple clients from different parts of the world, effortlessly.</p>


                  <div className="flex items-center justify-between pt-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <Image src={Tunde} alt="Tunde" />

                      <div>
                        <h1 className="text-[16px] leading-[24px] text-[#121212] font-bold">Tunde Ojo</h1>

                        <p className="text-[#7B91B0] text-[12.69px] leading-[21px]">CEO, Touchstone Limited</p>
                      </div>
                    </div>

                    <div>
                      <Image src={Tlogo} alt="Tlogo" />
                    </div>
                  </div>
                </div>
              </div>


              <div>
                <div className="bg-[#F9F9F9] max-w-[536px] p-[30px] rounded-[16px]">
                  <Image src={quotedown} alt="quotedown" />

                  <p className="pt-[10px] max-w-[565px] text-[16px] leading-[24px] text-[#121212] font-normal">As a founder of an NGO, Consultia helps me view key metrics that measure our performance at a glance via the CFO dashboard. Additionally, it is very easy to use and provides the opportunity to find and work with global clients, proceding tools to streamline task management processes.  It is the most modernized consultancy business management software out there.</p>


                  <div className="flex items-center justify-between pt-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <Image src={Rebecca} alt="Rebecca" />

                      <div>
                        <h1 className="text-[16px] leading-[24px] text-[#121212] font-bold">Rebbecca Omojudi</h1>

                        <p className="text-[#7B91B0] text-[12.69px] leading-[21px]">Founder, The Flag Foundation.</p>
                      </div>
                    </div>

                    <div>
                      <Image src={Flag} alt="Flag" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    )
}