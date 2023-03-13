const StatsItem: React.FunctionComponent<{
  header: string;
  body: string;
  stats: string;
}> = ({ header, body, stats }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row pt-8 md:pt-8 tracking-tighter justify-between w-full ">
      <div className="flex flex-col">
        <div className="flex text-3xl mb-5 mt-8 md:mt-0 tracking-normal">
          {header}
        </div>
        <div>{body}</div>
      </div>
      <div className="text-7xl text-slate-800 tracking-tighter md:self-center">
        {stats}
      </div>
    </div>
  );
};
const Stats: React.FunctionComponent = () => {
  const data = [
    {
      header: "Recognized cat breeds",
      body: "There's no single determined number — cats like to follow their own rules.",
      stats: "40-70",
    },
    {
      header: "Unique “vocabularies”",
      body: "Cats have 10 times more different vocalizations than dogs",
      stats: "100 +",
    },
    {
      header: "Maximum speed",
      body: "A cat could beat Usain Bolt in a 200-metre dash",
      stats: "47 km/h",
    },
  ];
  return (
    <section className="mt-20 md:mt-32 flex sm:flex-row flex-col space-x-4">
      <div className="flex md:flex-row flex-col gap-y-8 divide-y-2 divide-purple-200 md:divide-y-0 justify-between w-full">
        <h1 className="flex text-7xl font-medium tracking-tight text-gray-900 sm:text-6xl w-[400px]">
          In numbers
        </h1>
        <div className="flex flex-col gap-y-8 md:gap-y-8 divide-y-2 md:pt-0 divide-purple-200 flex-1">
          {data.map((i, index) => (
            <StatsItem
              key={index}
              header={i.header}
              body={i.body}
              stats={i.stats}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
