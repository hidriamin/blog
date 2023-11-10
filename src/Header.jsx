import React from "react"
import profilePhoto from "./assets/Photo_De_Profil.jpg"

function Header() {
  return (
    <div className="border-b pb-3 overflow-x-hidden">
      <h1 className="text-black text-3xl p-3 pb-10">Welcome to my blog</h1>
      <div className="flex flex-row justify-center">
        {" "}
        <div className="text-center  items-center gap-3 md:gap-0 w-40 md:w-80 md:text-start md:items-start flex flex-col md:flex-row">
          <img className="object-cover h-48 w-48" src={profilePhoto} />{" "}
          <div className="flex flex-col items-center md:pl-3 md:items-start">
            <h2 className="text-black text-2xl">Who am i?</h2>
            <p className="text-black xsm:w-48  w-80 pb-3 text-center md:text-start md:w-72">
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
            <div className="flex flex-col items-center">
              <div className="text-black text-start justify-start ">
                <h2 className="text-black text-2xl text-center md:text-start">
                  About this website:
                </h2>
                <p className="text-black xsm:w-48 w-80 md:w-72 text-center md:text-start ">
                  This is a minimalist Blog website that uses no third party
                  blog software. Instead, it was built with ReactJS and
                  tailwindcss.
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  )
}
export default Header
