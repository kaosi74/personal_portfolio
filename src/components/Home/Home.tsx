"use client";

import Image from "next/image";
import Projects from "./Projects";
import { Heading } from "../atoms/Heading";

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-8">
      <div>
        <Heading fontFace="satisfy" variant="h1" className="text-primary font-extrabold">
          -INTRODUCTION
        </Heading>
        <h2>Hi There 👏</h2>
        <h2>Hi i&lsquo;m Nwankwo kosisochukwu</h2>
        <h3>A full-stack developer</h3>
        <div className="max-w-2xl">
          <p>
            I’m a passionate full-stack developer with a knack for turning ideas
            into scalable, user-friendly applications. Skilled in both front-end
            and back-end technologies, I bridge design and functionality to
            deliver seamless digital experiences. From crafting responsive
            interfaces to building robust server-side logic, I thrive on solving
            complex problems and bringing projects to life. Driven by curiosity
            and continuous learning, I enjoy collaborating with teams and
            exploring new tools that push the boundaries of what’s possible.
          </p>
          <div>
            <p className="mx-auto md:mx-0 bg-primary w-75 rounded-lg px-10">
              Find me on:
            </p>
            <div className="flex gap-6 mt-4">
              <div>
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <Image
                  src="/twitter.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <Image
                  src="/twitter.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <button>Resume</button>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/me.png"
          alt="Kaosi"
          width={250}
          height={250}
          className=""
          quality={100}
        />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Projects /> */}
    </div>
  );
}
