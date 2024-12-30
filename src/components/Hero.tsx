import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-black bg-white">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
          Discover the World of Trees:
            <br className="hidden lg:inline-block" />
            Nature's Majestic Marvels
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
          Trees are the lifeline of our planet, offering beauty, shelter, and a vital connection to nature. From towering giants to delicate saplings, each type of tree tells its own unique story. Explore their fascinating world, uncover their significance, and learn how they shape our ecosystems and enrich our lives.
            
          </p>
          <div className="flex justify-center">
            <Link href="/about">
              <p className="inline-flex text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-lg">
                About Us
              </p>
            </Link>
            <Link href="/blog">
              <p className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-800 rounded text-lg">
                Explore Blogs
              </p>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/tree.webp"
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;