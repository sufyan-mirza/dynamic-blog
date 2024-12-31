import React from "react";
import Image from "next/image";

const Blog = () => {
  const blogs = [
    {
      title: "Deciduous Trees",
      category: "Trees",
      description:
        "Trees that shed their leaves annually in the fall.",
      image: "/decidous.webp",
      link: "/blogpost/Decidous",
    },
    {
      title: "Coniferous Trees (Evergreens)",
      category: "Trees",
      description:
        "Trees that remain green year-round and have needle-like leaves.",
      image: "/coniferous.webp",
      link: "/blogpost/Coniferous",
    },
    {
      title: "Tropical Trees",
      category: "Trees",
      description:
        " Trees found in tropical climates with high humidity and rainfall.",
      image: "/tropical.webp",
      link: "/blogpost/Tropical",
    },
  ];

  return (
    <div className="bg-white  text-gray-900  min-h-screen">
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogs.map((blog, index) => (
              <div className="p-4 md:w-1/3" key={index}>
                <div className="h-full border-2 border-gray-200  border-opacity-60 rounded-lg overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500  mb-1">
                      {blog.category.toUpperCase()}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900  mb-3">
                      {blog.title}
                    </h1>
                    <p className="leading-relaxed mb-3">{blog.description}</p>
                    <div className="flex items-center flex-wrap">
                      <a
                        href={blog.link}
                        className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/blog"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-indigo-600  transition"
            >
              Explore More Blogs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;