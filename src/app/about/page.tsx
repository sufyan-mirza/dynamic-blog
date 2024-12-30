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
            Welcome to SM Blog, a place where natures wonders come to life through the beauty of trees. Our mission is simple: to celebrate the incredible diversity, importance, and stories of trees from around the world.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="w-48 h-48 relative rounded-full overflow-hidden">
              <Image
                src="/face.jpg"
                alt="Author"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Hi, I&apos;m Sufyan Mirza
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Hi there! Im Sufyan Mirza, the creator behind SM Blog. Ive always been fascinated by the natural world, and trees, in particular, have captured my heart. From the tallest redwoods to the most delicate saplings, Im constantly amazed by the beauty and significance of these incredible living beings.
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
                href="https://www.linkedin.com/in/sufyan-mirza-1119182bb/"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>

              <a
            href="https://www.facebook.com/sufyan.king.169067"
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500"
          >
            <FaFacebook size={30} />
             </a>

              <a
                href="/"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-500"
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