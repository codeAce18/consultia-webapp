"use client"
import "/app/globals.css";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"
import Image from "next/image"

import signupLogo from '/public/assets/signupLogo.svg';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Define the schema using zod
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
})

type FormSchema = z.infer<typeof formSchema>

export function LoginForm() {
  // Initialize the form using useForm and zodResolver
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })
 

  // Form submit handler
  const onSubmit = async (data: FormSchema) => {
    try {
      // Simple validation to ensure email and password are not empty
      if (data.email && data.password) {
        // Generate a simple token with the entered email
        const token = btoa(JSON.stringify({
          email: data.email,
          timestamp: Date.now()
        }));
  
        // Redirect to dashboard with token
        // Replace with your actual dashboard URL
        window.location.href = `https://consultia-client-dashboard2.vercel.app?token=${token}`;
      } else {
        // Handle empty credentials
        alert('Please enter both email and password');
      }
    } catch (error) {
      console.error("Login failed", error);
      alert('An error occurred during login');
    }
  }

  return (
    <div  style={{ 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    
      }}
    >
        <div className="mx-auto p-6  space-y-2  lg:w-[540px] w-[350px]"
         style={{
           
            height: "409px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px", // Equivalent to Tailwind's py-12
            borderRadius: "8px",
            backgroundColor: "white", // Optional, to give a card-like effect
           
          }}
        >
            {/* Logo */}
            <Link href="/">
              <div className="flex justify-center">
                <Image src={signupLogo} alt="signupLogo"  />
              </div>
            </Link>

            {/* Heading */}
            <h2 style={{
                color: '#101828',
                fontSize: '14px',
                fontWeight: 'semibold',
                lineHeight: '26px'
            }}>Sign in to continue</h2>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="lg:w-[400px] w-[300px] mx-auto"
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                   
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="lg:w-[400px] w-[300px] mx-auto"
                    {...field}
                    
                  />
                </FormControl>
                <FormMessage />
                <div>
                  <h1 style={{
                    color: "#747778",
                    fontSize: "16px",
                    lineHeight: "16px",
                    fontWeight: "400", // 400 is equivalent to font-normal
                    }}>
                    Forgot password?
                  </h1>
                </div>
              </FormItem>
            )}
          />

          {/* Submit button */}
            {/* <Link href="/"> */}
                <Button
                className="lg:w-[400px] w-[300px] mx-auto"
                type="submit"
                style={{
                  
                    height: "48px",
                    backgroundColor: form.formState.isValid ? "#5B52B6" : "#CFCDEC",
                    outline: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '16.5px',
                    lineHeight: '19.8px',
                    fontWeight: "bold",
                    borderRadius: '8px'
                }}
                >
                Sign in
                </Button>
            {/* // </Link> */}
           
        </form>
      </Form>

            {/* Sign-up prompt */}
            <p style={{
                fontSize: '14px',
                lineHeight: '20px',
                color: '#191C1D',
                fontWeight: 'normal'
            }}>
                Don&apos;t have an account?{" "}
                <Link href="/signupscreen" style={{
                    color: '#5B52B6',
                    fontWeight: 'semibold'
                }}>
                Sign up
                </Link>
            </p>
        </div>
    </div>
  )
}
