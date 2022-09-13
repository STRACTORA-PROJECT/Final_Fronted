// import chrit from "../out/images/chrit.jpeg"
export default function DreamHouse() {
  return (
    <div
      id="dream"
      className="bg-white px-0 pt-10 md:pt-16 lg:pt-20 xl:pt-24 pb-6"
    >
      <div className="relative w-full md:pb-48">
        <img
          src="/images/chrit.jpeg"
          alt="Your dream house can come to life"
          className="block w-full h-full object-cover"
          style={{ maxHeight: "560px" }}
        />
        <div className="md:absolute bottom-0 py-6 md:px-16 lg:px-24 xl:px-32">
          <div
            className="py-6 px-8 lg:px-16 lg:py-12"
            style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          >
            <h2
              className="text-white font-bold py-8"
              style={{ fontSize: "30px" }}
            >
              Make your dream
              <br /> house come to life
              <br /> with us
            </h2>
            <div className="py-6">
              <button className="block w-full app-bg text-center text-xs py-5">
                VISIT PROJECTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}