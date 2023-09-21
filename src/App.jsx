import { useState } from "react"
import "./App.css"
import Header from "./Header"
import BlogFeed from "./pages/BlogFeed"
import Page1 from "./pages/blog posts/Page1"
import Page2 from "./pages/blog posts/Page2"
import Page3 from "./pages/blog posts/Page3"
import Page4 from "./pages/blog posts/Page4"
import Page5 from "./pages/blog posts/Page5"
import Page6 from "./pages/blog posts/Page6"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BlogFeed />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
