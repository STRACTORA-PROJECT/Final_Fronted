export default function Achievements() {
  return (
    <div
      id="service"
      className=" px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-10 md:pt-16 lg:pt-20 xl:pt-24 pb-6"
    >
      <h3 className="text-md font-normal app-color">OUR ACHIEVEMENTS</h3>
      <h2 className="text-2xl lg:text-3xl font-bold">
        We are passionate
        <br /> about our work
      </h2>
      <div className="py-12 md:py-16 lg:py-24 xl:py-28 px-6 sm:px-12 md:px-16 xl:px-20 bg-achivement mt-12">
        <div className="app-bg px-2 sm:px-3 md:px-6 lg:px-10 inline-block w-4/5 md:w-auto">
          <div className="flex flex-wrap justify-between space-1">
            <div className="px-2 md:px-6 lg:px-8 xl:px-12  py-10">
              <p className="font-bold text-md text-center">10</p>
              <p className="text-md font-normal pt-3 lg:pt-6">Clients</p>
            </div>
            <div className="px-2 md:px-6 lg:px-8 xl:px-12  py-10">
              <p className="font-bold text-md text-center">02</p>
              <p className="text-md font-normal pt-3 lg:pt-6">Awards</p>
            </div>
            <div className="px-2 md:px-6 lg:px-8 xl:px-12 pt-0 md:pt-10 py-10">
              <p className="font-bold text-md text-center">02</p>
              <p className="text-md font-normal pt-3 lg:pt-6">Certificates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}