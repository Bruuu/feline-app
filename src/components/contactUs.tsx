import Header from "./header";

const ContactUs: React.FunctionComponent = () => (
  <section className="mt-20 md:mt-40 flex md:flex-row flex-col space-x-4">
    <div className="flex md:flex-row flex-col md:gap-y-8 justify-between md:gap-10 w-full">
      <Header text="Contact us" />
      <div className="flex flex-1 flex-col text-base md:text-lg">
        <div className="hidden md:flex h-0.5 my-10 w-full bg-purple-200 " />
        <form
          action="#"
          method="POST"
          className="space-y-6 max-w-4xl ml-0 md:ml-40 md:mr-10 mt-5 relative"
        >
          <img
            src="https://uploads-ssl.webflow.com/6207dfcde6b2c229418d9e73/620fd659a117ef989bc2b15d_feature-3.png"
            className="h-[250px] absolute bottom-20 -right-20 md:top-0 md:-right-12 md:left-auto -z-50  -rotate-45 "
          />
          <div>
            <label
              htmlFor="name"
              className="block font-normal leading-6 text-gray-900"
            >
              How can we call you?
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                placeholder="Enter your name"
                required
                className="block w-full max-w-4xl bg-white/60 backdrop-blur-sm  rounded-md border-0 py-4 px-5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block font-normal leading-6 text-gray-900"
            >
              How can we contact you?
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                required
                className="block w-full max-w-4xl bg-white/60 backdrop-blur-sm  rounded-md border-0 py-4 px-5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-normal leading-6 text-gray-900"
            >
              How can we help you?
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                required
                className="block w-full max-w-4xl bg-white/60 backdrop-blur-sm rounded-md border-0 py-4 px-5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full max-w-4xl justify-center rounded-md bg-indigo-600 py-4 px-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactUs;
