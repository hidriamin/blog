import { Outlet, Link } from "react-router-dom"
import React from "react"

function BlogPost({ blogPosts }) {
  return (
    <div className="flex flex-col flex-wrap items-center">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="w-1/3 border border-black m-5 flex items-center flex-col"
        >
          {" "}
          <Link to={post.to}>
            <img
              src={post.image}
              alt="Image"
              className="object-cover h-48 w-96 p-3"
            />
            <h2 className="text-black text-2xl">{post.title}</h2>
            <p className="text-black p-2">{post.content}</p>
            <div className="w-96 text-gray-400 pb-2 pl-1 text-left">
              {post.date}
            </div>{" "}
          </Link>
        </div>
      ))}
    </div>
  )
}
export default BlogPost
