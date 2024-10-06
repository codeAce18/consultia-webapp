import Image from "next/image";

import testimonialImage from "../../public/assets/testimonialImg.svg"

export function Testimonial() {
    return(
        <div className="pt-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[#101828] text-[49px] leading-[68.6px] font-bold text-center">Don&apos;t Take Our Word For It, Take Theirs</h1>
            </div>
            <div className="pt-10 flex items-center justify-center gap-10 scrolling-container overflow-x-scroll scrollbar-hide">
                {/* Testimonial 1 */}
                <div className="max-w-[500px] min-w-[300px] lg:max-w-[500px] rounded-[20px] bg-[#FFFFFF] px-[20px] shadow-custom-black py-[40px] mx-4">
                    <div className="flex flex-col items-center justify-center">
                    <p className="text-[#101828] text-[16.5px] leading-[23.1px] font-normal max-w-[390.66px]">Consultia has transformed how we manage our clients and projects. It&apos;s a game-changer for our firm, streamlining our processes, improving efficiency, and enabling us to focus more on delivering exceptional results to our clients.</p>
                    </div>
                    <div className="px-[10px] pt-[30px] flex items-center justify-start gap-[20px]">
                    <Image src={testimonialImage} alt="testimonialImage" />
                    <div>
                        <h4 className="text-[#170F49] text-[16.5px] leading-[19.8px] font-bold">Sophia Moore</h4>
                        <h1 className="text-[#41404B] text-[16.5px] leading-[23.1px]">CEO at Webflow Agency</h1>
                    </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="max-w-[500px] min-w-[300px] lg:max-w-[500px] rounded-[20px] bg-[#FFFFFF] px-[20px] shadow-custom-black py-[40px] mx-4">
                    <div className="flex flex-col items-center justify-center">
                    <p className="text-[#101828] text-[16.5px] leading-[23.1px] font-normal max-w-[390.66px]">Consultia has transformed how we manage our clients and projects. It&apos;s a game-changer for our firm, streamlining our processes, improving efficiency, and enabling us to focus more on delivering exceptional results to our clients.</p>
                    </div>
                    <div className="px-[10px] pt-[30px] flex items-center justify-start gap-[20px]">
                    <Image src={testimonialImage} alt="testimonialImage" />
                    <div>
                        <h4 className="text-[#170F49] text-[16.5px] leading-[19.8px] font-bold">Sophia Moore</h4>
                        <h1 className="text-[#41404B] text-[16.5px] leading-[23.1px]">CEO at Webflow Agency</h1>
                    </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="max-w-[500px] min-w-[300px] lg:max-w-[500px] rounded-[20px] bg-[#FFFFFF] px-[20px] shadow-custom-black py-[40px] mx-4">
                    <div className="flex flex-col items-center justify-center">
                    <p className="text-[#101828] text-[16.5px] leading-[23.1px] font-normal max-w-[390.66px]">Consultia has transformed how we manage our clients and projects. It&apos;s a game-changer for our firm, streamlining our processes, improving efficiency, and enabling us to focus more on delivering exceptional results to our clients.</p>
                    </div>
                    <div className="px-[10px] pt-[30px] flex items-center justify-start gap-[20px]">
                    <Image src={testimonialImage} alt="testimonialImage" />
                    <div>
                        <h4 className="text-[#170F49] text-[16.5px] leading-[19.8px] font-bold">Sophia Moore</h4>
                        <h1 className="text-[#41404B] text-[16.5px] leading-[23.1px]">CEO at Webflow Agency</h1>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}