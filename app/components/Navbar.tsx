"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import consultiaLogo from "../../public/assets/consultiaLogo.svg";
import arrowDown from "../../public/assets/arrowDown.svg";
// import arrowDowns from "../../public/assets/arrowDowns.svg";
import Menu from "../../public/assets/Menu.svg";
import Close from "../../public/assets/x-lg.svg";
import Carrers from "../../public/assets/Careers.svg"
import Insights from "../../public/assets/Insights.svg"
import Knowledgeable from "../../public/assets/Knowledgeable.svg"
import getInTouch from "../../public/assets/getInTouch.svg"
import FAQ from "../../public/assets/FAQ.svg"
import AboutUs from "../../public/assets/frame.svg"


export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    // Close both dropdowns when mobile menu is toggled
    setIsCompanyDropdownOpen(false);
    setIsSupportDropdownOpen(false);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownOpen((prev) => !prev);
    // Close Support dropdown when Company dropdown is opened
    if (!isCompanyDropdownOpen) setIsSupportDropdownOpen(false);
  };

  const toggleSupportDropdown = () => {
    setIsSupportDropdownOpen((prev) => !prev);
    // Close Company dropdown when Support dropdown is opened
    if (!isSupportDropdownOpen) setIsCompanyDropdownOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'auto';   // Enable scrolling when menu is closed
    }
  }, [isMobileMenuOpen]);
  
  
  return (
    <nav className="relative container mx-auto  px-[24px]">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <Image width={73.93} height={37.28} src={consultiaLogo} alt="Consultia Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button className="block md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <Image src={Close} alt="Close Menu Icon" width={25} />
          ) : (
            <Image src={Menu} alt="Open Menu Icon" />
          )}
        </button>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <div className="text-[14px] font-normal leading-[21px] text-[#101828]">
            <Link href="/features">Features</Link>
          </div>
          <div className="relative  z-50">
            <button onClick={toggleCompanyDropdown} className="flex items-center">
              <span className="text-[14px] font-normal leading-[21px] text-[#101828]">Company</span>
              <Image 
                src={arrowDown} 
                alt="Dropdown Arrow" 
                className={`ml-1 transition-transform duration-300 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {/* border-bottom: 1px solid var(--grey-100, #F1F1F1)
            box-shadow: 0px 9px 40px 0px #0000001B; */}

            {isCompanyDropdownOpen && (
              <div className="absolute p-4 left-0 mt-2 w-48 rounded-[8px] bg-white shadow-custom-black">
                <div className="flex items-center gap-[10px] pb-2  border-b border-grey-100 text-[14px] font-normal leading-[21px] text-[#101828]">
                  <Image src={AboutUs} alt="AboutUs" />
                  <Link href="/aboutus">About Us</Link>
                </div>
                <div className="flex items-center gap-[10px] pb-2 pt-2 border-b border-grey-100 text-[14px] font-normal leading-[21px] text-[#101828]">
                  <Image src={Carrers} alt="Carrers" />
                  <Link href="/careers">Careers</Link>
                </div>
                <div className="flex items-center gap-[10px] pt-2 text-[14px] font-normal leading-[21px] text-[#101828]">
                  <Image src={getInTouch} alt="getInTouch" />
                  <Link href="/getintouch">Get in Touch</Link>
                </div>
              </div>
            )}
          </div>
          <div className="text-[14px] font-normal leading-[21px] text-[#101828]">
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="relative  z-50">
            <button onClick={toggleSupportDropdown} className="flex items-center text-[14px] font-normal leading-[21px] text-[#101828]">
              Support
              <Image 
                src={arrowDown} 
                alt="Dropdown Arrow" 
                className={`ml-1 transition-transform duration-300 ${isSupportDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isSupportDropdownOpen && (
              <div className="absolute p-4 left-0 mt-2 w-48 rounded-[8px] bg-white shadow-custom-black">
                <div className="flex items-center gap-[10px] pb-2  border-b border-grey-100 text-[14px] font-normal leading-[21px] text-[#101828]">
                  <Image src={FAQ} alt="FAQ" />
                  <Link href="/faq">FAQ</Link>
                </div>
                
                <div className="flex items-center gap-[10px] pb-2  pt-2 border-b border-grey-100 text-[14px] font-normal leading-[21px] text-[#101828]">
                  <Image src={Knowledgeable} alt="" />
                  <Link href="/">Knowledgebase</Link>
                </div>

                <div className="flex items-center gap-[10px] pt-2 text-[14px] font-normal leading-[21px] text-[#101828]">
                  <Image src={Insights} alt="Insights" />
                  <Link href="/insights">Insights</Link>
                </div>
              </div>
            )}
          </div>
          <div className="text-[14px] font-normal leading-[21px] text-[#101828]">
            <Link href="/">Blog</Link>
          </div>
        </div>

        {/* Actions for Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <div className="text-[14px] font-normal leading-[21px] text-[#101828]">
            <Link href="/loginform">Login</Link>
          </div>
          <button className="bg-[#5B52B6] lg:w-[181px] text-[16px] leading-[19.2px] font-semibold text-white p-[10px] rounded-[8px]"><Link href="signupscreen">Sign up For Free
          </Link></button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[75px] left-1/2 transform -translate-x-1/2 w-[348px] z-10 bg-white h-full shadow-md transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        
      >
        <div className="bg-white rounded-[20px] p-4 text-[#101828] h-full flex justify-center items-center">
          <div className="flex flex-col items-center space-y-6">
            <Link href="/features">Features</Link>

            <button onClick={toggleCompanyDropdown} className="flex justify-between items-center mt-4">
              <span>Company</span>
              <Image 
                src={arrowDown} 
                alt="Dropdown Arrow" 
                className={`ml-1 transition-transform duration-300 ${
                  isCompanyDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {isCompanyDropdownOpen && (
              <div className="pl-4">
                <div className="flex items-center gap-[10px] pb-2 text-[14px] font-normal leading-[21px]">
                  <Image src={AboutUs} alt="AboutUs"/>
                  <Link href="/aboutus">About Us</Link>
                </div>
                <div className="flex items-center gap-[10px] pb-2 pt-2 text-[14px] font-normal leading-[21px]">
                  <Image src={Carrers} alt="Carrers" />
                  <Link href="/careers">Careers</Link>
                </div>
                <div className="flex items-center gap-[10px] pt-2 text-[14px] font-normal leading-[21px]">
                  <Image src={getInTouch} alt="getInTouch" />
                  <Link href="/getintouch">Get in Touch</Link>
                </div>
              </div>
            )}

            <Link href="/pricing" className="mt-4">Pricing</Link>

            <button onClick={toggleSupportDropdown} className="flex justify-between items-center mt-4">
              Support
              <Image 
                src={arrowDown} 
                alt="Dropdown Arrow" 
                className={`ml-1 transition-transform duration-300 ${
                  isSupportDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isSupportDropdownOpen && (
              <div className="pl-4">
                <div className="flex items-center gap-[10px] pb-2 text-[14px] font-normal leading-[21px]">
                  <Image src={FAQ} alt="FAQ" />
                  <Link href="/faq">FAQ</Link>
                </div>
                <div className="flex items-center gap-[10px] pb-2 pt-2 text-[14px] font-normal leading-[21px]">
                  <Image src={Knowledgeable} alt="Knowledgebase" />
                  <Link href="/">Knowledgebase</Link>
                </div>
                <div className="flex items-center gap-[10px] pt-2 text-[14px] font-normal leading-[21px]">
                  <Image src={Insights} alt="Insights" />
                  <Link href="/insights">Insights</Link>
                </div>
              </div>
            )}

            <Link href="/" className="mt-4">Blog</Link>

            <div className="mt-4">
              <div className="flex flex-col items-center justify-center">
                <Link href="/loginform">Login</Link>
              </div>
              <button className="bg-[#5B52B6] text-white font-semibold px-4 py-2 rounded mt-4">
                <Link href="/signupscreen">Sign up For Free</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
