import Image from "next/image";
import Header from "./header";

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
    <section className="mt-24 sm:mt-32 lg:mt-16">
      <Header text="Meet our cats" />
      <div className="relative">
        <div className="bg-lavender absolute top-24 w-full h-[95%] -z-50" />
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-8 text-center lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {cats.map((name, index) => {
            return (
              <li key={index}>
                <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
                  <Image
                    fill
                    alt="picture of a cat"
                    src={`/images/cat-${index + 1}.png`}
                    className="rounded-full zoom-in-transition"
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
