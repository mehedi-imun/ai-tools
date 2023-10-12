"use client";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Providers = ({ children, session }) => {
  // console.log(session);
  return (
    <SessionProvider session={session}>
      <ThemeProvider themes={["pink", "red", "blue"]}>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
