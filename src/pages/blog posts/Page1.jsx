import React from "react"
import photo1 from "../../assets/photo1.jpg"
import { Outlet, Link } from "react-router-dom"

const post = {
  title: "My first day in Germany.",
  content:
    "around 3 months in Germany.

Its past 1 am. 24th of february 2024 as of me starting to write this document. 
Moving to germany and leaving my home country behind was one of the hardest if not the hardest thing i've ever done in my life. I needed a new challenge and wanted a new adventure, on the 26th of november i took my luggage, said goodbye to my family and boarded the plane. It was the first time *since i became concious of twhat is happening* that i boarded a plane. First of all, i didn't eat and drink well before boarding, in fact after leaving the house in the morning i barely consumed anything until i arrived in germany in the evening/night. The airport process was not very hard, i got to use airplane mode on my phone in a very appropriate setting. The good thing about the airport in Tunis is that it has a prayer room. 
I boarded the plane maybe after 3pm. It was a NouvelAir plane. It was a seat near the wing, next to the security exit. Of course I went through the experience of the flight attendant asking me if I was willing to cooperate in case of an emergency, or something like that.
The plane took off and it was kind of a funny feeling in my belly when the plane was doing maneuvers.
And then with the plane gaining altitude, I started feeling some pain because of the pressure. What I didn’t know at the time is that later this will escalate to probably the biggest physical pain I felt in 2023. I forgot why but I guess I probably didn’t have enough things to keep me entertained during the flight? I remember at some points in the flight I got bored. Looking at the same sight of the sea through the window got old and I was waiting for new sights to show up. It was fun trying to look at the window and then from google maps guess where the plane is at. From what I gathered, we flew through italy, and switzerland  (I saw what I assume was the alps) and finally landed in Frankfurt.
It was nice to be above the clouds and see other planes flying around.
Sometimes I feel some pains in my eyes and ears and head, maybe the face too, but generally it wasnt bad pain was. That was until we got close to landing.
If you are boarding a plane for the first time, here is my advice to you: Shew Gum. I didn’t test this yet as of me writing this sentence, but its the advice I was given from someone in my family.
I started feeling severe pain in places in my head and/or face. Probably my ears, eyes, head and face.
I lowered my head and HATIT RASI AALA FKHADHI. I wonder what the person next to me was thinking. Was that a common thing to happen to someone who’s not really used to flying? I don’t know.
The flight resulted in me feeling kind of unwell for a few days (maybe a day or 2). Is this what people mean when they say Jet Lag? I googled it. It says “extreme tiredness and other physical effects felt by a person after a long flight across different time zones.”. As of when I arrived and even right now in february, Tunis and Frankfurt have the same exact time so I didn’t experience jet lag yet.
In this low cost flight, you have to buy food on the plane seperately from the price of the ticket. I skipped on the meal. I only drank some water during the flight and thats it. 
I didn’t get to fully enjoy a first good look at frankfurt since I was feeling pain, but thats okay alhamdulillah. The plane finally landed after 5 pm. The first thing I said in germany was probably me speaking to someone on the plane. 
The first thing I said as I was leaving the plane was “Bismillah”, it was a reflex and I thank allah for that. 
Frankfurt International airport, the biggest airport in germany. 
What a first impression to a country, even though I was feeling not very well from the flight I couldn’t help but notice that I was in an economically developed country. We really should take care of our airport in Tunis because the first impression is important. Germany is not a perfect country and it has its flaws but the first impression was memorable. I wasn’t exactly sure where to go so I was following people around, I remember this moroccean person who I followed until maybe the baggage room. I had a backpack and une valise. One of them I got it fairly quick and the other I had to wait a while for. I remember I connected to the airport wifi and texted my parents that I arrived safely. I took the rest of my luggage and headed to the exit, where I met my dad’s friend for the first time, as well as his son. This said friend would be the person who probably assisted me the most in my stay in germany, even now he’s still helping me out. May Allah reward him for his good efforts.
We left the airport and headed to the car, thats where I had my first experience of the cold there. IT Probably felt different? But it wasnt too bad. Although I was still feeling the effects of the flight, I got a first look at the streets while in the car and again, another positive first impression. I remember the streets looked “big” and clean.
The first meal I ate in germany, believe it or not, was couscous. Good old tunisian couscous. And then I had a conversation with dad’s friend and his guest, and off to sleep.


I know this blog is probably called my first day in germany, but heres an insight about the first morning,
I probably arrived in germany in the beginning of the cold season (Cold as in temperature and not disease.) so I got my first taste of snow. Well it looked more like snow mixed with rain. I also went out for the first time and went to a turkish shop, where I was greeted with the muslim greeting. I also ate my first german toast breakfast.",
  date: "24/02/2024",
  image: photo1,
  id: 1,
}
function Page1() {
  return (
    <div className=" flex-col flex-wrap items-center">
      <div key={post.id} className="w-100 md:m-5 flex items-center flex-col">
        <img
          src={post.image}
          alt="Image"
          className="object-cover md:h-48 h-32 w-96 md:w-1/2 py-3"
        />
        <div className="w-80 md:w-1/2 pb-3 text-gray-400 flex justify-between items-center">
          <Link
            to="/"
            className=" text-black border hover:border-sky-500 rounded-lg p-1"
          >
            Back
          </Link>
          <h2 className="text-black text-2xl">{post.title}</h2>

          <div>{post.date}</div>
        </div>
        <p className="text-black p-2 w-80 md:w-1/2">{post.content}</p>
      </div>
    </div>
  )
}
export default Page1
