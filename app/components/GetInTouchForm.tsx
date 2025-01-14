import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";

import Image from "next/image"

import BigGreenCheck from "../../public/assets/BigGreenCheck.svg"

type GetInTouchFormInputs = {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  requestMessage: string;
};

const GetInTouchForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<GetInTouchFormInputs>();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<GetInTouchFormInputs> = async (data) => {
    const formData = {
      fullName: data.fullName,
      companyName: data.companyName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      requestMessage: data.requestMessage
    };

    try {
      const submitForm = await axios.post(
        "https://consultia-main-backend-b7eb40c87c34.herokuapp.com/v2/api/contact-us", 
        formData, 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (submitForm.status === 200){
        setSuccessMessage("Message Sent Successfully, Our Team Would Contact You Soonest!");
        reset(); // Clear the form fields
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-start flex flex-col items-center justify-center gap-6 lg:gap-10">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <Input
            id="fullName"
            type="text"
            {...register('fullName', { required: 'Full name is required' })}
            className="mt-1 block lg:w-[268px] w-[300px]"
            placeholder="Full name"
          />
          {errors.fullName && <span className="text-red-600">{errors.fullName.message}</span>}
        </div>

        {/* Company Name Field */}
        <div>
          <label htmlFor="companyName">Company Name</label>
          <Input
            id="companyName"
            type="text"
            {...register('companyName', { required: 'Company name is required' })}
            className="mt-1 block lg:w-[268px] w-[300px]"
            placeholder="Enter company name"
          />
          {errors.companyName && <span className="text-red-600">{errors.companyName.message}</span>}
        </div>
      </div>

      {/* Email Field */}
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-start flex flex-col items-center justify-center gap-6 lg:gap-10">
        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
            className="mt-1 block lg:w-[268px] w-[300px]"
            placeholder="your@company.com"
          />
          {errors.email && <span className="text-red-600">{errors.email.message}</span>}
        </div>

        {/* Phone Number Field */}
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <Input
            id="phoneNumber"
            type="tel"
            {...register('phoneNumber', { required: 'Phone number is required' })}
            className="mt-1 block lg:w-[268px] w-[300px]"
            placeholder="+1 (248) 000-0000"
          />
          {errors.phoneNumber && <span className="text-red-600">{errors.phoneNumber.message}</span>}
        </div>
      </div>
      
      {/* Message Field */}
      <div className="flex flex-col items-center justify-center lg:flex lg:flex-col lg:items-start lg:justify-start">
        <div>
          <label htmlFor="requestMessage">How can we help?</label>
          <Textarea
            id="requestMessage"
            {...register('requestMessage', { required: 'Message is required' })}
            className="mt-1 block lg:w-[575px]  w-[300px] "
            placeholder="Message..."
          />
          {errors.requestMessage && <span className="text-red-600">{errors.requestMessage.message}</span>}
        </div>

        <button type="submit" className="bg-[#5B52B6] lg:w-[575px]  w-[300px]  text-[15.13px] font-semibold leading-[24px] text-white py-2 px-4 rounded mt-4">
          Submit
        </button>

        <div>
          {successMessage && <p className="mt-4 flex items-center justify-center gap-2 text-green-600 max-w-[250px] lg:max-w-none">
            <Image src={BigGreenCheck} alt='BigGreenCheck' />
            {successMessage}
          </p>}
        </div>
      </div>
      
    </form>
  );
};

export default GetInTouchForm;
