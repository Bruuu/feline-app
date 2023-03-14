const About: React.FunctionComponent = () => {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-16">
      <h1 className="mt-10 text-7xl font-medium tracking-tight text-gray-900 sm:text-6xl">
        Time spent with cats is never wasted
      </h1>
      <p className="mt-6 text-3xl leading-8 text-gray-600">
        Clever. Lovable. Independant.
      </p>
      <div className="mt-10 flex items-center gap-x-6">
        <a
          href="#"
          className="zoom-in-transition rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Documentation
        </a>
      </div>
    </div>
  );
};

export default About;
