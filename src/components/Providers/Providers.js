"use client";
import { ThemeProvider } from "next-themes";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Providers;
