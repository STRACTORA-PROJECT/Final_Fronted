import LazyImage from "./LazyImage";

export default function About() {
  return (
    <div
      id="about"
      className="bg-stractora px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-10 md:pt-16 lg:pt-20 xl:pt-24 pb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11">
        <div className="grid grid-cols-12 lg:col-span-6">
          <div className="pt-12 pb-20 hidden lg:block">
            <div className="h-full app-bg-black"></div>
          </div>
          <div
            className="col-span-12 lg:col-span-11 flex"
            style={{ alignItems: "baseline" }}
          >
            <p className="w-1/12 h-48 app-bg-black md:hidden" />
            <LazyImage
              src="/images/jorge-de-jorge-pHbAY99SRB4-unsplash.jpeg"
              alt="A house we built"
              className="block w-10/12 md:w-full h-full  object-cover"
            />

            <p className="w-1/12 h-48 app-bg-black md:hidden" />
          </div>
        </div>
        <div className="md:pt-12 pb-20 lg:col-span-5">
          <div className="app-bg-black h-full app-white px-8 md:px-16 lg:px-20 xl:px-24  py-20 md:pt-28 lg:pt-32 xl:pt-44">
            <h3 className="text-sm md:text-md font-normal app-color">
              ABOUT US
            </h3>
            <h2 className="py-4 font-bold text-white text-lg">
              We specialize in modern house <br />
              designs and construction.
            </h2>
            <p className="py-6 text-white font-light text-xs">
              Stractora is a construction company based in
              <br /> Rwanda that focuses on modern house designs
              <br /> and doing their construction. With Stractora,
              <br /> your dream can be brought to life.
            </p>
            <div className="pt-12">
              <a
                href="#project"
                className="block letter-spacing font-light text-black w-full md:w-3/4 lg:w-2/3 app-bg text-center text-xs py-5 px-4"
              >
                OUR PROJECTS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}