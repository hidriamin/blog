import { Outlet, Link } from "react-router-dom"
import React from "react"

function BlogPost({ blogPosts }) {
  return (
    <div className="flex flex-col gap-8 flex-wrap items-center">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="w-80 md:w-1/3 border p-3 border-black hover:shadow-black hover:shadow-sm hover:duration-150 duration-150 hover:transition-shadow flex items-center flex-col"
        >
          <Link to={post.to} class="flex flex-col items-center">
            <img
              src={post.image}
              alt="Image"
              className="object-cover h-24  md:h-48 w-72 md:w-96"
            />
            <h2 className="text-black text-2xl pt-2 pb-1">{post.title}</h2>
            <p className="text-black w-72 md:w-100 p-2">{post.content}</p>
            <div className="md:w-96 text-gray-400 md:pb-2 md:pl-1 md:text-left">
              {post.date}
            </div>{" "}
          </Link>
        </div>
      ))}
    </div>
  )
}
export default BlogPost
