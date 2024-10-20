import { LoginForm } from "@/app/components/LoginForm";
import Image from 'next/image';
import Watermark from "../public/assets/Watermark.svg";
import "../app/globals.css";


const loginform = () => {
    return (
        <div className="relative" style={{
            backgroundColor: '#5B52B6',
            minHeight: '100vh', // Ensures it covers the full viewport height
            minWidth: '100vw', // Ensures it covers the full viewport width
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div className="absolute z-50">
            
                <LoginForm />
         
            
            </div>

            <div className="absolute top-[305px] left-[850px] w-[513.99px] Watermark h-[300.4px]">
                <Image  src={Watermark} alt="Watermark" />
            </div>
        </div>
        
    )
}


export default loginform;