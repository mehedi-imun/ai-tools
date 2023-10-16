import Link from 'next/link';
import { FaDiscord, FaLinkedin,FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="">
        <div className="border border-black max-w-[1180px]  mx-auto"></div>
      <footer className="  footer max-w-[1180px]  mx-auto py-10 justify-between  ">
        <nav>
          <header className="footer-title">ai Services</header>
          <Link href="/dashboard/submit-tool" className="link link-hover">Submit ai Tool</Link>
          <a className="link link-hover">Update ai Tool Request</a>
          <a className="link link-hover">Request A ai Feature</a>
        </nav>
    
        <nav>
          <header className="footer-title">Company</header>
          <Link href="/privacyPolicy" className="link link-hover">Privacy Policy</Link>
          <Link href="/termsAndConditions" className="link link-hover">Terms And Conditions</Link>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">About Us</a>
        </nav>
        <nav className="">
        <header className="footer-title">Social</header>
          <div className="flex space-x-6">
          <a className="link link-hover "> <FaLinkedin className="text-4xl text-[#0077B5]"></FaLinkedin></a>
          <a className="link link-hover "> <FaTwitter className="text-4xl text-[#0077B5]"></FaTwitter></a>
          <a className="link link-hover "> <FaDiscord className="text-4xl  text-[#7289DA]"></FaDiscord></a>
          </div>
        </nav>
      </footer>
      <p className="flex justify-center">Copyright © {new Date().getFullYear() } - ai Tool™</p>
    </div>
  );
};

export default Footer;
