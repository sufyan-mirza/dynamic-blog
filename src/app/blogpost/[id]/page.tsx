"use client";
import { blogData } from "@/data/blogData";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

interface Comment {
  username: string;
  message: string;
}

export default function BlogPost({ params }: Props) {
  const defaultComments: Comment[] = [
    { username: "Ahmed", message: "Today I gain many Knowledge regarding trees." },
    { username: "Arfa", message: "Need more blogs like this" },
    {
      username: "Iftikhar",
      message: "very impressive knowledge",
    },
  ];

  const [id, setId] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>(defaultComments);
  const [formValues, setFormValues] = useState<{
    username: string;
    message: string;
  }>({
    username: "",
    message: "",
  });

  useEffect(() => {
    const fetchId = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };

    fetchId();
  }, [params]);

  if (!id) {
    return <div>Loading...</div>;
  }

  const blog = blogData.find((blog) => blog.id === id);

  if (!blog) {
    notFound();
  }

  const handleCommentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newComment: Comment = {
      username: formValues.username,
      message: formValues.message,
    };
    setComments([...comments, newComment]);
    setFormValues({ username: "", message: "" });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">{blog.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900">
          Introduction:
        </h2>
        <p className="text-gray-700 mt-2">{blog.intro}</p>
        <h3 className="text-4xl font-semibold text-gray-800 mt-4 mb-4">
          Advantages:
        </h3>
        <ul className="list-disc ml-6  ">
          {blog.advantages.map((advantage, index) => (
            <li key={index}>{advantage}</li>
          ))}
        </ul>
        <h3 className="text-4xl font-semibold text-gray-800">
          Pre-Requisite:
        </h3>
        <p className="text-gray-700 mt-2">{blog.prereq}</p>
        
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-300">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Comments
        </h3>
        <div className="space-y-4 mt-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800"
            >
              <p className="font-semibold">{comment.username}</p>
              <p>{comment.message}</p>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleCommentSubmit}
          className="mt-6 bg-gray-100 p-4 rounded-lg"
        >
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              required
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Comment
            </label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
}