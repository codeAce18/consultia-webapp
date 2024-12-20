import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import signupLogo from "../public/assets/signupLogo.svg";
import user from "../public/assets/user.svg";
import arrowcircleright from "../public/assets/arrowcircleright.svg";
import consult from "../public/assets/consult.svg";
import backArrow from "../public/assets/Vector.svg";
import "../app/globals.css";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons"; // Radix UI icons
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Watermark from "../public/assets/Watermark.svg";
 // Assuming you have a Select component
import Link from 'next/link';


const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().min(7, "Phone number is required"),
  referralSource: z.string().min(1, "Referral source is required"),
});

type FormSchema = z.infer<typeof formSchema>;

const SignupScreen = () => {
  const [phoneCode, setPhoneCode] = useState("+234"); // Manage phone code separately
  const { register, handleSubmit, watch, formState } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to hold each digit of OTP
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // For toggling password visibility
  const [reEnterPasswordVisible, setReEnterPasswordVisible] = useState(false);

  const formValues = watch();

  const onSubmit = async (data: FormSchema) => {
    try {
      // Combine all the signup data into a token
      const signupData = {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: phoneCode + data.phoneNumber,
        referralSource: data.referralSource,
        email: email, // from the email state in the previous step
        timestamp: Date.now()
      };
  
      // Generate a base64 encoded token with signup information
      const token = btoa(JSON.stringify(signupData));
  
      // Redirect to dashboard with token
      window.location.href = `https://consultia-client-dashboard2.vercel.app?token=${token}`;
    } catch (error) {
      console.error("Signup failed", error);
      alert('An error occurred during signup');
    }
  };


  const isFormmValid =
    formValues.firstName &&
    formValues.lastName &&
    formValues.phoneNumber &&
    formValues.referralSource;


  const handleClientClick = () => {
    setStep(2); // Move to step 2
  };

  const handleVerifyEmailClick = () => {
    if (email && isAgreed) {
      setStep(3); // Move to the "Enter verification code" step
    }
  };

  const handleVerifyOtpClick = () => {
    if (otp) {
      setStep(4); // Move to the "Enter verification code" step
    }
  };

  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsAgreed(e.target.checked);
  };

  const handleBackToEmail = () => {
    setStep(2); // Go back to the email verification step
  };

  const handleBackToOtp = () => {
    setStep(3); // Go back to the email verification step
  };

  const handleBackToPassword = () => {
    setStep(4); // Go back to the email verification step
  };

  // Handle OTP input changes
  const handleOtpChange = (index: number, value: string) => {
    // Allow only numbers or empty value
    if (/\d/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus next input if the value is entered
      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) {
          nextInput.focus(); // Only call focus if the element exists
        }
      }
    }
  };

  const isOtpFilled = otp.every((digit) => digit !== "");

  // const handleSubmit = () => {
  //   // Handle OTP submission only if all fields are filled
  //   if (isOtpFilled) {
  //     const otpCode = otp.join('');
  //     console.log("OTP submitted:", otpCode);
  //   }
  // };

  const getPasswordStrength = (password: string): string => {
    if (!password) return '';
    if (password.length < 8) return 'Weak';
  
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    if (hasLetters && hasNumbers && hasSymbols) return 'Strong';
    if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) return 'Medium';
    
    return 'Weak';
  };

  const passwordStrength = getPasswordStrength(password);

  const handlePasswordToggle = () => setPasswordVisible(!passwordVisible);
  const handleReEnterPasswordToggle = () => setReEnterPasswordVisible(!reEnterPasswordVisible);

  const isFormValid = password === reEnterPassword && passwordStrength === 'Strong';

  const handlePasswordSubmit = () => {
    if (password && reEnterPassword) {
      setStep(5); // Move to the "Enter verification code" step
    }
  };



  

  return (
    <div className="bg-[#5B52B6] h-screen flex flex-col items-center justify-center relative">
      <div className="bg-white lg:w-[540px] w-[350px] py-[48px] px-[70px] rounded-[16px] relative z-50">
        
        {/* Logo and Heading */}
        <div className="flex flex-col items-left">
        {step !== 3 && step !== 4 && step !== 5 && (
          <Link href="/">
            <div className="flex flex-col items-center justify-center">
              <Image src={signupLogo} alt="signupLogo" />
            </div>
          </Link>
        )}
          
          {step === 1 && (
            <h1 className="pt-[10px] text-[#191C1D] lg:text-left text-center text-[14px] leading-[26px] tracking-[-2%] font-semibold">
              Create your account
            </h1>
          )}

          {step === 2 && (
            <>
            <h1 className="pt-[10px] text-[#191C1D]  text-[24px] leading-[32px] font-semibold">
              Step Two
            </h1>
            <p>Provide your verifiable email address</p>
            </>
          )}

          {step === 3 && (
            <h1 className="pt-[10px] text-[#191C1D] lg:text-left text-center text-[24px] leading-[32px] font-semibold">
              Enter Verification Code
            </h1>
          )}
        </div>

        {/* Step 1: Role Selection */}
        {step === 1 && (
          <div className="pt-[16px] flex flex-col items-center justify-center gap-y-6">
            <div className="flex items-center justify-center gap-[20px] px-[10px] lg:px-0 bg-[#F0F0F9] lg:w-[400px] w-[300px] h-[108px] rounded-[6px]" onClick={handleClientClick}>
              <Image src={user} alt="user" />
              <div>
                <h1 className="text-[#000000] text-[16px] leading-[19.36px] font-medium">Client</h1>
                <p className="pt-[3px] max-w-[264px] text-[#8692A6] text-[14px] leading-[16.94px]">A person who needs a consulting service from verified consultants.</p>
              </div>
              <Image src={arrowcircleright} alt="arrowcircleright" />
            </div>

            <Link href="/consultsignup">
              <div className="flex items-center justify-center gap-[20px] px-[10px] lg:px-0 bg-[#F0F0F9] lg:w-[400px] w-[300px] h-[108px] rounded-[6px]">
                <Image src={consult} alt="consult" />
                <div>
                  <h1 className="text-[#000000] text-[16px] leading-[19.36px] font-medium">Consultant</h1>
                  <p className="max-w-[264px] pt-[3px] text-[#8692A6] text-[14px] leading-[16.94px]">A person who provides consulting services.</p>
                </div>
                <Image src={arrowcircleright} alt="arrowcircleright" />
              </div>
            </Link>
          </div>
        )}

        {/* Step 2: Email and Agreement Checkbox */}
        {step === 2 && (
          <div className="pt-[16px] flex flex-col items-center">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="you@example.com"
              className="border border-gray-300 rounded-md h-[48px] lg:w-[400px] w-[300px] p-2"
            />
            <div className="lg:flex flex lg:items-center items-left justify-start mt-4">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label className="text-[#747778] text-[14px] leading-[20px]">
                I have read and agree to our Terms of Use and Privacy Policy.
              </label>
            </div>
            <button
              className={`mt-4 lg:w-[400px] w-[300px] h-[48px] rounded-md ${email && isAgreed ? 'bg-[#5B52B6]' : 'bg-[#CFCDEC]'} text-white`}
              disabled={!email || !isAgreed}
              onClick={handleVerifyEmailClick}
            >
              Verify Email
            </button>
          </div>
        )}

        {/* Step 3: Enter Verification Code */}
        {step === 3 && (
          <div className="pt-[16px] flex flex-col items-center">
            {/* Back Button */}
            <div className="absolute top-[20px] left-[20px]" onClick={handleBackToEmail}>
              <div className="flex items-center gap-[5px]">
                <Image src={backArrow} alt="backArrow" />
                <p>Back</p>
              </div>
            </div>

            {/* Verification Code Message */}
            <p className="text-[#747778] text-[16px] leading-[20px] text-center mb-[20px]">
              The verification code has been sent to your email: <strong>{email}</strong>.
            </p>

            {/* OTP Input Fields */}
            <div className="flex gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="border border-gray-300 rounded-md w-[40px] h-[48px] text-center text-[24px] font-semibold"
                />
              ))}
            </div>

            <p className="text-[14px] leading-[20px] text-[#747778] text-left ">Resend after 59 seconds</p>

            <div className="pt-[25px]">
              <button
                onClick={handleVerifyOtpClick}
                disabled={!isOtpFilled} // Disable if OTP fields are not filled
                className="lg:w-[400px] w-[300px]"
                style={{
                  backgroundColor: isOtpFilled ? "#5B52B6" : "#CFCDEC",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: isOtpFilled ? "pointer" : "not-allowed",
                 
                  height: "48px",  // Button height
                  fontWeight: "bold",
                  fontSize: "16.5px",
                }}
              >
                Continue
              </button>
            </div>
          </div>
        )}


        {step === 4 && (
          <div className="set-password-step-container">
            <div className="absolute top-[20px] left-[20px]" onClick={handleBackToOtp}>
              <div className="flex items-center gap-[5px]">
                <Image src={backArrow} alt="backArrow" />
                <p>Back</p>
              </div>
            </div>
          {/* Set password heading */}
          <h1 className="text-2xl font-semibold">Set password</h1>
          <p className="text-sm text-gray-500">Password requires a minimum of 8 characters and contains a mix of letters, numbers, and symbols.</p>

          {/* Password form */}
          <div className="mt-6">
            {/* Create Password Field */}
            <div className="relative mb-4">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[48px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:border-blue-500"
              />
              <div 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={handlePasswordToggle}
              >
                {passwordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </div>
              {/* Password Strength Indicator */}
              {password && (
                <div className={`text-sm mt-2 ${passwordStrength === 'Strong' ? 'text-green-500' : passwordStrength === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>
                  {passwordStrength} Password
                </div>
              )}
            </div>

            {/* Re-enter Password Field */}
            <div className="relative mb-4">
              <input
                type={reEnterPasswordVisible ? "text" : "password"}
                placeholder="Re-enter password"
                value={reEnterPassword}
                onChange={(e) => setReEnterPassword(e.target.value)}
                className="w-full h-[48px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:border-blue-500"
              />
              <div 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={handleReEnterPasswordToggle}
              >
                {reEnterPasswordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handlePasswordSubmit}
              disabled={!isFormValid} // Disabled unless passwords match and are strong
              style={{
                backgroundColor: isFormValid ? "#5B52B6" : "#CFCDEC",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: isFormValid ? "pointer" : "not-allowed",
                width: "100%",
                height: "48px",
                fontWeight: "bold",
                fontSize: "16.5px",
              }}
            >
              Set Password
            </button>
          </div>
        </div>
        )}

        {step === 5 && (
          <div className="w-full flex flex-col items-center justify-center">
            <div className="absolute top-[20px] left-[20px]" onClick={handleBackToPassword}>
              <div className="flex items-center gap-[5px]">
                <Image src={backArrow} alt="backArrow" />
                <p>Back</p>
              </div>
            </div>
            <div className="bg-white lg:w-[540px] w-[350px]  px-[70px] rounded-[16px]">
              {/* Step 5 Header */}
              <h1 className="text-[24px] leading-[32px] font-semibold text-[#191C1D]">
                Sign up as a client
              </h1>
              <p className="text-[#747778] text-[16px] leading-[20px] font-normal pb-2">
                Let&apos;s get to know more about you as a client.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* First Name */}
                <div className="flex flex-col space-y-2">
             
                  <Input
                    type="text"
                    placeholder="First name"
                    {...register("firstName")}
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col space-y-2">
                 
                  <Input
                    type="text"
                    placeholder="Last name"
                    {...register("lastName")}
                  />
                </div>

                {/* Phone Number with Dropdown */}
                <div className="flex flex-col space-y-2">
                
                  <div className="flex">
                    <select
                      value={phoneCode}
                      onChange={(e) => setPhoneCode(e.target.value)} // Regular select change handling
                      className="border-1 border-[#C4C7C7] px-2 rounded-l-md w-[100px]"
                    >
                      <option value="+234">+234</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                    </select>
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      {...register("phoneNumber")}
                      className="rounded-r-md"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
         
                  <select {...register("referralSource")} className="border rounded-md p-2">
                    <option value="">How did you hear about us?</option>
                    <option value="social-media">Social Media</option>
                    <option value="friend">Friend</option>
                    <option value="search-engine">Search Engine</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                  


                {/* Submit Button */}
                <div className="pt-[25px]">

                  <Button
                    type="submit"
                    style={{
                      width: "100%",
                      height: "48px",
                      backgroundColor: isFormValid ? "#5B52B6" : "#CFCDEC",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "8px",
                    }}
                    disabled={!isFormmValid}
                  >
                    Go to Dashboard
                  </Button>

                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-[305px] left-[850px] w-[513.99px] Watermark h-[300.4px]">
        <Image  src={Watermark} alt="Watermark" />
      </div>
      
    </div>
  );
};

export default SignupScreen;
