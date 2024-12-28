import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen">
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              About Us !
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
            Welcome to Mohib Blogs, your go-to platform for exploring the ever-evolving landscape of technology. In an age where innovation drives progress, I am dedicated to sharing insightful articles that delve into the latest trends and developments in the realms of Data Science, Information Technology, Machine Learning and beyond. My goal is to provide you with comprehensive insights that empower you to harness these technologies effectively. Whether you are a seasoned professional, a student, or simply a tech enthusiast, there is something here for everyone.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="w-48 h-48 relative rounded-full overflow-hidden">
              <Image
                src="/mypiccc.jpeg"
                alt="Author"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Hi, I&apos;m Mohib Ali Khan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I&apos;m a web developer with a passion for creating accessible
              and user-friendly applications. I specialize in TypeScript, React,
              and modern web frameworks like Next.js. I write blogs to help
              others learn and grow in the world of Technology.I have a versatile skill set that can be applied to a wide range of data-related tasks. A budding Data enthusiast diving into the fascinating world of Web 3.0 and Agentic AI
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Feel free to reach out if you have any questions or want to
              collaborate!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/mohib-ali-khan-64518a260/"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>

              <a
            href="https://www.facebook.com/mohibali.khan.52/"
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <FaFacebook size={30} />
             </a>

              <a
                href="https://github.com/"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;