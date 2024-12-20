"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Journey To The West",
    description: "Ancient chinese mythology",
    img: "https://meet-the-myths.com/wp-content/uploads/2024/03/10ad4508-a7dd-44b4-9c3c-7e4aa0cfb25b.png",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-100 to-blue-300",
  },
  {
    id: 2,
    title: "TEKKEN 8",
    description: "High octane fighting game",
    img: "https://www.bandainamcostudios.com/en/wp-content/uploads/sites/2/2024/03/resized_TEKKEN_8_Third_KA_FINISH_4K_%E9%96%8B%E7%99%BA%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB.png",
    url: "/",
    bg: "bg-gradient-to-r from-red-300 to-blue-400",
  },
  {
    id: 3,
    title: "Blade Runner 2049",
    description: "Sequel to classic Blade Runner",
    img: "https://cdn.arstechnica.net/wp-content/uploads/2017/10/bladerunner2049-poster.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-orange-400 to-yellow-200",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4 ">
                  VIEW ITEM
                </button>
              </Link>
            </div>
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
