import React from "react"
import BlogPost from "./BlogPost"
import profilePhoto from "./assets/Photo_De_Profil.jpg"

const blogPosts = [
  {
    title: "Blog post 1",
    content:
      "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
    date: "18/11/2023",
    image: profilePhoto,
    id: 1,
  },
  {
    title: "Blog post 2",
    content:
      "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
    date: "19/11/2023",
    image: profilePhoto,
    id: 2,
  },
  {
    title: "Blog post 3",
    content:
      "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
    date: "20/11/2023",
    image: profilePhoto,
    id: 3,
  },
  {
    title: "Blog post 4",
    content:
      "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
    date: "21/11/2023",
    image: profilePhoto,
    id: 4,
  },
  {
    title: "Blog post 5",
    content:
      "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
    date: "22/11/2023",
    image: profilePhoto,
    id: 5,
  },
  {
    title: "Blog post 6",
    content:
      "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
    date: "23/11/2023",
    image: profilePhoto,
    id: 6,
  },
]
function BlogFeed() {
  return (
    <>
      <h1 className="text-black text-2xl">Blog feed:</h1>
      <BlogPost blogPosts={blogPosts} />{" "}
    </>
  )
}
export default BlogFeed
