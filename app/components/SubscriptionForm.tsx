import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from "@/components/ui/input";  // Adjust the import path as needed
import { Select } from "@/components/ui/select"
type SubscriptionFormInputs = {
  businessEmail: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  company: string;
  country: string;
};

const countries = [
  { value: '', label: 'Country' },
  { value: 'usa', label: 'United States' },
  { value: 'canada', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  // Add more countries as needed
];

const SubscriptionForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SubscriptionFormInputs>();

  const onSubmit: SubmitHandler<SubscriptionFormInputs> = (data) => {
    console.log(data);
    // Handle form submission here (e.g., send data to a server)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="shadow-custom-black space-y-4 bg-[#FFFFFF] lg:w-[540px] w-[361px] py-[48px] flex flex-col items-center justify-center">
      <h2 className="text-[20px] leading-[30px] font-bold text-[#101828]">Fill out the form below to sign up</h2>

      {/* Business Email Field */}
 
      <div>
    
        <Input
          id="businessEmail"
          type="email"
          {...register('businessEmail', { required: 'Business email is required', pattern: /^\S+@\S+$/i })}
          className="mt-1 block lg:w-[400px] w-[327px]"
          placeholder="Business Email"
        />
        {errors.businessEmail && <span className="text-red-600">{errors.businessEmail.message}</span>}
      </div>

      {/* First Name Field */}
      <div>

        <Input
          id="firstName"
          type="text"
          {...register('firstName', { required: 'First name is required' })}
          className="mt-1 block lg:w-[400px] w-[327px]"
          placeholder="First Name"
        />
        {errors.firstName && <span className="text-red-600">{errors.firstName.message}</span>}
      </div>

      {/* Last Name Field */}
      <div>
        
        <Input
          id="lastName"
          type="text"
          {...register('lastName', { required: 'Last name is required' })}
          className="mt-1 block lg:w-[400px] w-[327px]"
          placeholder="Last Name"
        />
        {errors.lastName && <span className="text-red-600">{errors.lastName.message}</span>}
      </div>

      {/* Job Title Field */}
      <div>
      
        <Input
          id="jobTitle"
          type="text"
          {...register('jobTitle', { required: 'Job title is required' })}
          className="mt-1 block lg:w-[400px] w-[327px]"
          placeholder="Job Title"
        />
        {errors.jobTitle && <span className="text-red-600">{errors.jobTitle.message}</span>}
      </div>

      {/* Company Field */}
      <div>

        <Input
          id="company"
          type="text"
          {...register('company', { required: 'Company name is required' })}
          className="mt-1 block lg:w-[400px] w-[327px]"
          placeholder="Company"
        />
        {errors.company && <span className="text-red-600">{errors.company.message}</span>}
      </div>

      {/* Country Select Field */}
        <div>
      
            <select
                id="country"
                {...register('country', { required: 'Country is required' })}
                className="mt-1 block lg:w-[400px] w-[327px] h-[45px] border border-[91C0FA] focus:outline-none rounded-[8px] focus:border-blue-500 transition-colors duration-200"
                >
                {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                    {country.label}
                    </option>
                ))}
            </select>
            {errors.country && <span className="text-red-600">{errors.country.message}</span>}
      </div>

      <button type="submit" className="bg-[#5B52B6] lg:w-[400px] w-[327px] text-[16.5px] leading-[19.8px] font-bold text-white py-[12px] px-4 rounded mt-4">
        Subscribe
      </button>

      <p className="text-[#191C1D] lg:text-[16px] text-[14px] leading-[20px] lg:leading-[24px] font-normal text-center max-w-[327px]">By clicking on &apos;subscribe&apos;, Consultia may use 
        the information provided to contact you about our
        relevant content, product and services</p>
    </form>
  );
};

export default SubscriptionForm;
