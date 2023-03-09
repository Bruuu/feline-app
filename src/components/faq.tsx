import { useState } from "react";

const Question: React.FunctionComponent<{ question: string; body: string }> = ({
  question,
  body,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="pt-6">
      <dt>
        <button
          type="button"
          className="flex w-full items-start justify-between text-left text-gray-900"
          aria-controls="faq-0"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="h-7 pl-10 items-center">
            <svg
              className="h-6 w-6 aria-hidden:hidden"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden={open}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>

            <svg
              className="h-6 w-6 aria-hidden:hidden"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden={!open}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </span>
          <span className="ml-10 text-base font-semibold flex-1 leading-7">
            {question}
          </span>
        </button>
      </dt>
      <dd
        className="aria-hidden:hidden mt-2 pr-12"
        id="faq-0"
        aria-hidden={!open}
      >
        <p className="text-base leading-7 text-gray-600 pl-[104px]">{body}</p>
      </dd>
    </div>
  );
};

const Faq: React.FunctionComponent = () => {
  const data = [
    {
      question: "HOW LONG DO CATS LIVE?",
      body: "The average age of a cat living indoors is 12-15 years. The average age for a cat living outdoors can be as little as 2 – 5 years.",
    },
    {
      question: "WHY DOES MY CAT LICK ME?",
      body: `It is believed that cats groom and lick humans and felines as a way of displaying trust and affection. However, other reasons as to why your cat may be licking you may be due to anxiety.`,
    },
    {
      question: "WHY DO CATS MEOW?",
      body: "Kittens meow to their mother when they are hungry, scared or cold, but once they grow older this vocalisation changes to yowls, hisses and growls to communicate amongst each other. Meowing is then reserved for communication with people.",
    },
    {
      question: "WHY DO CATS HAVE WHISKERS?",
      body: `A cat’s whiskers are a lot like a human’s touch receptors, they are also known as tactile hairs, or vibrissae and are primarily located on either side of your cats nose as well as the upper facial lip. Shorter whiskers are also found above the eyes, jaw line and the back of their front legs.`,
    },
    {
      question: "WHY DO CATS LIKE CATNIP?",
      body: `Catnip being in the mint family and containing an essential oil called Nepetalactone which has a very strong impact which can turn even the laziest of cats into a fuzzy ball of mayhem. Once smelt the cats are drawn towards the mint due to ‘happy’ feeling they get when they smell it, but once eaten it will make cats feel very chilled and mellow.`,
    },
  ];
  return (
    <section className="mt-32 ">
      <h1 className="mt-10 text-7xl font-medium tracking-tight text-gray-900 sm:text-6xl">
        FAQ
      </h1>
      <div className="py-4 sm:py-6 lg:py-8">
        <div className="px-10 divide-y-2 divide-purple-200">
          <dl className="mt-10 space-y-6 divide-y-2 divide-purple-200">
            {data.map(({ question, body }, i) => {
              return <Question key={i} question={question} body={body} />;
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Faq;
