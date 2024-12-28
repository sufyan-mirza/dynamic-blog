import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center sm:justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2  title-font font-medium text-gray-900 dark:text-white mb-5 sm:mb-0"
        >
          <Image src="/logoooo.png" alt="logo" width={50} height={20} />
          <span className="text-xl">MK Tech Blog's</span>
        </Link>
        <p className="text-md text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
          © All rights reserved | 2024 | Mohib Ali Khan
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/mohib-ali-khan-64518a260/"
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <FaLinkedin size={27} />
          </Link>

          <Link
            href="https://www.facebook.com/mohibali.khan.52/"
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <FaFacebook size={27} />
          </Link>

          <Link
            href="https://github.com/"
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <FaGithub size={27} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;