import Image from "next/image";
import { useEffect, useState } from "react";

const Cats: React.FunctionComponent = () => {
  const cats = [
    "Boss",
    "Carrot",
    "Diego",
    "Kitty",
    "Mia",
    "Ossie",
    "Fluff",
    "Meow",
    "Lady",
    "Tom",
  ];
  return (
    <section className="mt-24 sm:mt-32 lg:mt-16 ">
      <h1 className="mt-10 text-7xl font-medium tracking-tight text-gray-900 sm:text-6xl">
        Meet our cats
      </h1>
      <div className="relative">
        <div className="bg-lavender absolute top-24 w-full h-full -z-50" />
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-8 gap-x-8 text-center lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {cats.map((name, index) => {
            return (
              <li key={index}>
                <div className="relative mx-auto h-48 w-48">
                  <Image
                    fill
                    alt="picture of a cat"
                    src={`/images/cat-${index + 1}.png`}
                    className="rounded-full"
                    sizes={"width: 100%, height: 100%"}
                  />
                </div>
                <h3 className="text-base font-semibold mt-2 leading-7 tracking-tight text-gray-900">
                  {name}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Cats;