import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea"

type GetInTouchFormInputs = {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const GetInTouchForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<GetInTouchFormInputs>();

  const onSubmit: SubmitHandler<GetInTouchFormInputs> = (data) => {
    console.log(data);
    // handle form submission here (e.g., send data to a server)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      {/* Name Field */}
      <div className="lg:flex lg:items-center lg:justify-start flex items-center justify-center gap-6 lg:gap-10">
        <div>
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="mt-1 block lg:w-[268px] w-[172.76px]"
            placeholder="Full name"
          />
          {errors.name && <span className="text-red-600">{errors.name.message}</span>}
        </div>

        {/* Company Name Field */}
        <div>
          <label htmlFor="companyName">Company Name</label>
          <Input
            id="companyName"
            type="text"
            {...register('companyName', { required: 'Company name is required' })}
            className="mt-1 block lg:w-[268px] w-[172.76px]"
            placeholder="Enter company name"
          />
          {errors.companyName && <span className="text-red-600">{errors.companyName.message}</span>}
        </div>
      </div>

      {/* Email Field */}
      <div className="lg:flex lg:items-center lg:justify-start flex items-center justify-center gap-6 lg:gap-10">
        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
            className="mt-1 block lg:w-[268px] w-[172.76px]"
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
            className="mt-1 block lg:w-[268px] w-[172.76px]"
            placeholder="+1 (248) 000-0000"
          />
          {errors.phoneNumber && <span className="text-red-600">{errors.phoneNumber.message}</span>}
        </div>
      </div>
      

      {/* Message Field */}
      <div className="flex flex-col items-center justify-center lg:flex lg:flex-col lg:items-start lg:justify-start">
        <div>
          <label htmlFor="message">How can we help?</label>
          <Textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            className="mt-1 block lg:w-[560px] w-[361px]"
            placeholder="Message..."
          />
          {errors.message && <span className="text-red-600">{errors.message.message}</span>}
        </div>

        <button type="submit" className="bg-[#5B52B6] lg:w-[560px] w-[361px]  text-[15.13px] font-semibold leading-[24px] text-white py-2 px-4 rounded mt-4">
          Submit
        </button>
      </div>
      
    </form>
  );
};

export default GetInTouchForm;
