import React from "react"
import BlogPost from "./BlogPost"
import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import photo3 from "../assets/photo3.jpg"
import photo4 from "../assets/photo4.jpg"
import photo5 from "../assets/photo5.jpg"
import photo6 from "../assets/photo6.jpg"

const blogPosts = [
  {
    title: "Blog post 1",
    content:
      "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
    date: "18/11/2023",
    image: photo1,
    id: 1,
    to: "/page1",
  },
  {
    title: "Blog post 2",
    content:
      "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
    date: "19/11/2023",
    image: photo2,
    id: 2,
    to: "/page2",
  },
  {
    title: "Blog post 3",
    content:
      "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
    date: "20/11/2023",
    image: photo3,
    id: 3,
    to: "/page3",
  },
  {
    title: "Blog post 4",
    content:
      "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
    date: "21/11/2023",
    image: photo4,
    id: 4,
    to: "/page4",
  },
  {
    title: "Blog post 5",
    content:
      "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
    date: "22/11/2023",
    image: photo5,
    id: 5,
    to: "/page5",
  },
  {
    title: "Blog post 6",
    content:
      "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
    date: "23/11/2023",
    image: photo6,
    id: 6,
    to: "/page6",
  },
]
function BlogFeed() {
  return (
    <div className="overflow-x-hidden">
      <h1 className="text-black text-3xl pt-4 pb-5">Blog feed:</h1>
      <BlogPost blogPosts={blogPosts} />{" "}
    </div>
  )
}
export default BlogFeed
