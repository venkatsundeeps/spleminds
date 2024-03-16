"use client";
import { SignIn, useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Corrected import

const Login = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const role = user.publicMetadata.role;

      if (role === "admin") {
        router.push("/admin");
      } else {
        router.push("/user");
      }
    }
  }, [user, router]);

  return (
    <div className="mt-24 ml-4 md:ml-24">
      <SignIn afterSignInUrl="" />
    </div>
  );
};

export default Login;
