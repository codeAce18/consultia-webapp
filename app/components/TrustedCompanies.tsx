import Image from "next/image";
import GmonieLogo from "../../public/assets/GmonieLogo.svg";
import Campfire from "../../public/assets/Campfire.svg";
import Firebase from "../../public/assets/Firebase.svg";
import eetwell from "../../public/assets/eetwell.svg";
import leland from "../../public/assets/leland.svg";
import Helio from "../../public/assets/Helio.svg";
import Makelog from "../../public/assets/Makelog.svg";
import KillCliff from "../../public/assets/KillCliff.svg";
import Helium from "../../public/assets/Helium.svg";
import Cala from "../../public/assets/Cala.svg";




export function TrustedCompanies()  {
    return (
        <div className="pt-20">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-[49px] leading-[58px] font-bold max-w-[893px] text-[#121212]">Trusted by hundreds of fast growing companies in Nigeria.</h1>
            </div>

            <div className="pt-10">
                <div className="flex justify-center items-center">
                    <div  className="grid lg:grid-cols-5 grid-cols-1 gap-y-10 lg:gap-x-10">
                        <div>
                            <Image src={GmonieLogo} alt="GmonieLogo" />
                        </div>
                        <div>
                            <Image src={Campfire} alt="Campfire" />
                        </div>
                        <div>
                            <Image src={Firebase} alt="Firebase" />
                        </div>
                        <div>
                            <Image src={eetwell} alt="eetwell" />
                        </div>
                        <div>
                            <Image src={leland} alt="leland" />
                        </div>
                        <div>
                            <Image src={Helio} alt="Helio" />
                        </div>
                        <div>
                            <Image src={Makelog} alt="Makelog" />
                        </div>
                        <div>
                            <Image src={KillCliff} alt="KillCliff" />
                        </div>
                        <div>
                            <Image src={Helium} alt="Helium" />
                        </div>
                        <div>
                            <Image src={Cala} alt="Cala" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}