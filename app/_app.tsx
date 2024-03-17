import "@/styles/globals.css";
import { ClerkProvider, RedirectToSignIn, SignedIn } from "@clerk/nextjs";
import { AppProps } from "next/app";
import SignPage from "./sign-in/[[...sign-in]]/page";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <SignPage />
      </SignedIn>
    </ClerkProvider>
  );
}

export default MyApp;

// This file used for redirecting to signin page if user is not signed in
