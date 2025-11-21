import React, { useState, useEffect } from "react";

export default function BlogModalSection() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch blogs JSON
  useEffect(() => {
    fetch("/Blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error loading blogs:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 relative">
      <h2 className="text-3xl font-bold text-center mb-8">Campus Mart Blogs</h2>

      {/* Cards Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${
          selectedBlog ? "blur-sm" : ""
        }`}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => setSelectedBlog(blog)}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2 ">{blog.title}</h3>
              <p className="text-gray-600 mb-3">{blog.shortDescription}</p>
              <div className="text-sm text-gray-500">
                By {blog.author} | {blog.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
          {/* Backdrop with Blur */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedBlog(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg max-w-3xl w-full overflow-y-auto max-h-[90vh] shadow-2xl">
            <div className="flex justify-between items-start p-4 border-b">
             <div className="w-full ">
                 <h3 className="text-2xl font-bold   bg-white">{selectedBlog.title}</h3>
             </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-gray-500 hover:text-gray-800 text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 prose prose-lg">
              <p>
                <strong>
                  By {selectedBlog.author} | {selectedBlog.date}
                </strong>
              </p>
              {selectedBlog.longDescription.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
