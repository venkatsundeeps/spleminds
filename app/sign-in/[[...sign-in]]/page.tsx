"use client";
import { SignIn } from "@clerk/nextjs";
import { useClerk } from "@clerk/clerk-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SignPage() {
  const { session } = useClerk();
  const pathname = usePathname();
  useEffect(() => {
    if (session) {
      // If the user is signed in, redirect to the dashboard
      window.location.href = "/dashboard";
    }
  }, [session, pathname]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center ">
        <div className="max-w-screen m-0 sm:m-10  shadow sm:rounded-lg flex   justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              {/* <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1> */}
              <SignIn />
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex  rounded-r-3xl">
            <div
              className=" w-full  rounded-r-3xl"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dzsr56zkk/image/upload/v1710616482/m8qgxy0cpd00gnuddux7.svg')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

// https://res.cloudinary.com/dzsr56zkk/image/upload/v1710616482/m8qgxy0cpd00gnuddux7.svg
