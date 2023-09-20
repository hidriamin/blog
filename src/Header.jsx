import React from "react"
import profilePhoto from "./assets/Photo_De_Profil.jpg"

function Header() {
  return (
    <div className="border-b">
      <h1 className="text-black text-3xl p-3">Welcome to my blog!</h1>
      <div className="flex flex-row items-center p-3">
        {" "}
        <img className="object-cover h-48 w-48 pr-3" src={profilePhoto} />
        <div className="text-start">
          <h2 className="text-black text-2xl ">Who am i?</h2>

          <p className="text-black  w-1/3">
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
          </p>
        </div>
        <div className="text-black text-start">
          <p className="text-black ">
            This website uses no third party blog software.Instead, it was built
            with ReactJS and tailwindcss.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Header
