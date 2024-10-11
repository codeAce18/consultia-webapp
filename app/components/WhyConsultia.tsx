import Image from "next/image";
import chooseCard1 from "../../public/assets/chooseCard1.png";
import chooseCard2 from "../../public/assets/chooseCard2.png";
import chooseCard3 from "../../public/assets/chooseCard3.png";
import chooseCard4 from "../../public/assets/chooseCard4.png";


export function WhyConsultia() {
    return (
        <div className="pt-32">
            <div className="text-center">
                <h1 className="text-[49px] leading-[73.5px] font-bold text-[#101828]">Why Choose Consultia?</h1>
            </div>

            <div className="pt-10">
                <div className=" grid lg:grid-cols-2 grid-cols-1 p-[20px] lg:p-0 max-w-[1240px] gap-8 mx-auto">
                    <div>
                        <Image className="mx-auto" width={610} height={405} src={chooseCard1} alt="chooseCard1" />
                    </div>
                    <div>
                        <Image className="mx-auto" width={610} height={405} src={chooseCard2} alt="chooseCard2" />
                    </div>
                    <div>
                        <Image className="mx-auto" width={610} height={405} src={chooseCard3} alt="chooseCard3" />
                    </div>
                    <div>
                        <Image className="mx-auto" width={610} height={405} src={chooseCard4} alt="chooseCard4" />
                    </div>
                </div>
            </div>
        </div>
    )
}