import React from "react"
import profilePhoto from "./assets/Photo_De_Profil.jpg"

function Header() {
  return (
    <div className="border-b pb-3">
      <h1 className="text-black text-3xl p-3 pb-10">Welcome to my blog</h1>
      <div className="flex flex-row justify-center ">
        {" "}
        <div className="text-center items-center  gap-3 md:gap-0 w-40 md:w-100 md:text-start flex flex-col md:flex-row">
          <div className="flex flex-col ">
            <img className="object-cover h-48 w-48 pr-3" src={profilePhoto} />{" "}
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-black text-2xl">Who am i?</h2>
            <p className="text-black  w-80 text-center md:w-96 pr-0 md:pr-3">
              I'm a Marketing graduate who discovered he's into programming.
              Basically, i do web development. This website is part of my work.
              You can find my main website{" "}
              <a
                href="https://hidriamin.github.io/aminhidri.com"
                target="_blank"
                className="text-sky-600 underline"
              >
                here
              </a>{" "}
              .
            </p>{" "}
          </div>{" "}
          <div className="flex flex-col items-center">
            <div className="text-black text-start justify-start ">
              <h2 className="text-black text-2xl text-center md:text-start">
                About this website:
              </h2>
              <p className="text-black  w-80 text-center md:text-start md:w-96 ">
                This is a minimalist Blog website that uses no third party blog
                software.Instead, it was built with ReactJS and tailwindcss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
