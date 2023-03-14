import Header from "./header";
import Timer from "./timer";

const StatsItem: React.FunctionComponent<{
  item: {
    header: string;
    body: string;
    digit: number | number[];
    symbol?: string;
  };
}> = ({ item }) => {
  const { header, body, digit, symbol } = item;
  return (
    <div className="flex flex-col-reverse md:flex-row pt-8 md:pt-8 tracking-tighter justify-between w-full ">
      <div className="flex flex-col">
        <div className="flex text-3xl mb-5 mt-8 md:mt-0 tracking-normal">
          {header}
        </div>
        <div>{body}</div>
      </div>
      <div className="text-7xl text-slate-800 tracking-tighter md:self-center">
        <Timer max={digit} />
        {symbol && <span> {symbol}</span>}
      </div>
    </div>
  );
};
const Stats: React.FunctionComponent = () => {
  const data = [
    {
      header: "Maximum speed",
      body: "A cat could beat Usain Bolt in a 200-metre dash",
      digit: 47,
      symbol: "km/h",
    },
    {
      header: "Recognized cat breeds",
      body: "There's no single determined number — cats like to follow their own rules.",
      digit: [40, 70],
    },
    {
      header: "Unique “vocabularies”",
      body: "Cats have 10 times more different vocalizations than dogs",
      digit: 100,
      symbol: "+",
    },
  ];
  return (
    <section className="mt-20 md:mt-32 flex sm:flex-row flex-col space-x-4">
      <div className="flex md:flex-row flex-col gap-y-8 divide-y-2 divide-purple-200 md:divide-y-0 justify-between w-full">
        <div className="flex w-[400px]">
          <Header text="In numbers" />
        </div>
        <div className="flex flex-col gap-y-8 md:gap-y-8 divide-y-2 md:pt-0 divide-purple-200 flex-1">
          {data.map((i, index) => (
            <StatsItem key={index} item={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
