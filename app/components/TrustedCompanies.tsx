import Image from "next/image";
import GtechLogo from "../../public/assets/GtechLogo.svg";
import EcoWattLogo from "../../public/assets/EcoWattLogo.svg";
import MeenaLogo from "../../public/assets/MeenaLogo.svg";
import MsMeLogo from "../../public/assets/MsMeLogo.svg";
import LeadLogo from "../../public/assets/LeadLogo.svg";
import ConvexityLogo from "../../public/assets/ConvexityLogo.svg";
import ProidEdgeLogo from "../../public/assets/ProidEdgeLogo.svg";
import BrandEnvoLogo from "../../public/assets/BrandEnvoLogo.svg";
import KloversLogo from "../../public/assets/KloversLogo.svg";
import IndicinLogo from "../../public/assets/IndicinLogo.svg";




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
                            <Image src={GtechLogo} alt="GtechLogo" />
                        </div>
                        <div>
                            <Image src={EcoWattLogo} alt="EcoWattLogo" />
                        </div>
                        <div>
                            <Image src={MeenaLogo} alt="MeenaLogo" />
                        </div>
                        <div>
                            <Image src={MsMeLogo} alt="MsMeLogo" />
                        </div>
                        <div>
                            <Image src={LeadLogo} alt="LeadLogo" />
                        </div>
                        <div>
                            <Image src={ConvexityLogo} alt="ConvexityLogo" />
                        </div>
                        <div>
                            <Image src={ProidEdgeLogo} alt="ProidEdgeLogo" />
                        </div>
                        <div>
                            <Image src={BrandEnvoLogo} alt="BrandEnvoLogo" />
                        </div>
                        <div>
                            <Image src={KloversLogo} alt="KloversLogo" />
                        </div>
                        <div>
                            <Image src={IndicinLogo} alt="IndicinLogo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}