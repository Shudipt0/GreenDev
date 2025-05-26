'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up';

import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <section className="pt-20 w-full h-screen flex items-center justify-center">
    <SignUp.Root>
      <SignUp.Step name="start" className="container">
        
          <div className="flex flex-col gap-4">
            <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow-lg shadow-blue-500 ">
              <div className="mb-6 flex flex-col items-center">
                <h1 className="text-[22px] font-bold text-blue-500 ">
                  GreenDev
                </h1>
                
                  <h1 className="mb-2 text-2xl font-bold">Sign-Up</h1>
               
                <p className="text-muted-foreground">Welcome</p>
              </div>

              <div>
                <div className="grid gap-4">
                    <Clerk.Field name="username" >
                    <Clerk.Input asChild>
                      <Input
                        type="text"
                        placeholder="User Name"
                        required
                      />
                    </Clerk.Input>
                    <Clerk.FieldError/>
                  </Clerk.Field>

                  <Clerk.Field name="identifier" className="flex flex-col" >
                    <Clerk.Input asChild>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </Clerk.Input>
                    <Clerk.FieldError/>
                  </Clerk.Field>

                  <Clerk.Field name="password">
                    <Clerk.Input asChild>
                      <div>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                    </Clerk.Input>
                  </Clerk.Field>

                  <SignUp.Action submit asChild>
                    <Button type="submit" className="mt-2 w-full">
                      Sign-in
                    </Button>
                  </SignUp.Action>
                  <Clerk.Connection name="google" asChild>
                    <Button variant="outline" className="w-full">
                      <FcGoogle className="mr-2 size-5" />
                      Sign up with Google
                    </Button>
                  </Clerk.Connection>
                </div>

                <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                  <p>Already have an account?</p>
                  <Link href="/sign-in" className="font-medium text-primary">
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        
        </SignUp.Step>
    </SignUp.Root>
    </section>
  )
}