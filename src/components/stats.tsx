const Stats: React.FunctionComponent = () => {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-16 flex sm:flex-row flex-col space-x-4">
      <h1 className="text-7xl font-medium tracking-tight text-gray-900 sm:text-6xl">
        In numbers
      </h1>
      <div className="flex-1">
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex text-3xl">Purring</div>
            <div>
              Cat have a unique vocal feature hat people attribute to
              peacefulness and calmness
            </div>
          </div>
          <div>25 Hz</div>
        </div>
        {/* <div>
          <div>18 years</div>
        </div>
        <div>
          <div>95.6%</div>
        </div> */}
      </div>
    </div>
  );
};

export default Stats;
