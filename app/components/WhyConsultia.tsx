import Image from "next/image";
import Card1 from "../../public/assets/Card1.svg";
import Card2 from "../../public/assets/Card2.svg";
import Card3 from "../../public/assets/Card3.svg";
import Card4 from "../../public/assets/Card4.svg";


export function WhyConsultia() {
    return (
        <div className="pt-20">
            <div className="text-center">
                <h1 className="max-w-[740px] mx-auto text-[49px] leading-[58px] font-bold text-[#101828]">Few reasons why Consultia is the choice for you.</h1>
            </div>

            <div className="pt-10">
                <div className=" grid lg:grid-cols-2 grid-cols-1 p-[20px] lg:p-0 max-w-[1240px] gap-8 mx-auto">
                    <div>
                        <Image className="mx-auto" width={610} height={405} src={Card1} alt="Card1" />
                    </div>
                    <div>
                        <Image className="mx-auto" width={610} height={405} src={Card2} alt="Card2" />
                    </div>
                    <div>
                        <Image className="mx-auto" width={610} height={405} src={Card3} alt="Card3" />
                    </div>
                    <div>
                        <Image className="mx-auto" width={610} height={405} src={Card4} alt="Card4" />
                    </div>
                </div>
            </div>
        </div>
    )
}