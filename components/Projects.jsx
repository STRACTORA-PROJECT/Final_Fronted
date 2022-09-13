import { useState } from "react";
import LazyImage from "./LazyImage";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./style.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const jumpTo = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div
      id="project"
      className="bg-lines bg-attach-right  px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-10 md:pt-16 lg:pt-20 xl:pt-24 pb-6"
    >
      <h3 className="text-md font-normal app-color">OUR LATEST PROJECTS</h3>
      <h2 className="text-2xl  lg:text-3xl font-bold">
        We provide quality
        <br /> work for our clients.
      </h2>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
            el: '.swiper-custom-pagination'
          }}
          // navigation={true}
          navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 pb-8  "
        > <SwiperSlide>
            <div className="px-0 md:pr-4 py-4 relative">
              <LazyImage
                src="/images/INTERIOR-Recovered4.jpg"
                alt="interior design - Muhazi Hotel"
                className="block w-full object-cover"
                style={{ height: "30rem" }}
              />
              <div className="absolute bottom-4 w-full bg-transparent app-white px-8 py-4">
                <h3 className="font-bold" style={{ fontSize: "25px" }}>
                  Muhazi Hotel
                </h3>
                <h5 className="text-xs font-normal py-4">View projects&gt;</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-0 md:px-4 py-4 relative">
              <LazyImage
                src="/images/fguyf.jpg"
                alt="RARA Hotel construction design"
                className="block w-full object-cover"
                style={{ height: "30rem" }}
              />
              <div className="absolute bottom-4 w-full bg-transparent app-white px-8 py-4">
                <h3 className="font-bold" style={{ fontSize: "25px" }}>
                  RiRi Hotel
                </h3>
                <h5 className="text-xs font-normal py-4">View projects&gt;</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-0 md:px-4 py-4 relative">
              <LazyImage
                src="/images/fguyf.jpg"
                alt="RARA Hotel construction design"
                className="block w-full object-cover"
                style={{ height: "30rem" }}
              />
              <div className="absolute bottom-4 w-full bg-transparent app-white px-8 py-4">
                <h3 className="font-bold" style={{ fontSize: "25px" }}>
                  RiRi Hotel
                </h3>
                <h5 className="text-xs font-normal py-4">View projects&gt;</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-0 md:px-4 py-4 relative">
              <LazyImage
                src="/images/fguyf.jpg"
                alt="RARA Hotel construction design"
                className="block w-full object-cover"
                style={{ height: "30rem" }}
              />
              <div className="absolute bottom-4 w-full bg-transparent app-white px-8 py-4">
                <h3 className="font-bold" style={{ fontSize: "25px" }}>
                  RiRi Hotel
                </h3>
                <h5 className="text-xs font-normal py-4">View projects&gt;</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-0 md:px-4 py-4 relative">
              <LazyImage
                src="/images/fguyf.jpg"
                alt="RARA Hotel construction design"
                className="block w-full object-cover"
                style={{ height: "30rem" }}
              />
              <div className="absolute bottom-4 w-full bg-transparent app-white px-8 py-4">
                <h3 className="font-bold" style={{ fontSize: "25px" }}>
                  RiRi Hotel
                </h3>
                <h5 className="text-xs font-normal py-4">View projects&gt;</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-0 md:px-4 py-4 relative">
              <LazyImage
                src="/images/2_7-Photo.jpg"
                alt="interior design - Muhazi Hotel"
                className="block w-full object-cover"
                style={{ height: "30rem" }}
              />
              <div className="absolute bottom-4 w-full bg-transparent app-white px-8 py-4">
                <h3 className="font-bold" style={{ fontSize: "25px" }}>
                  Affordable House
                </h3>
                <h5 className="text-xs font-normal py-4">View projects&gt;</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className=""></div>
        <div className=" swiper-custom-pagination position-indicators">
          {/* {[1, 2, 3, 4].map((i) => (
            <button
              className={
                (currentSlide === i ? "app-bg" : "bg-gray-300") + " w-10 mx-3"
              }
              style={{ paddingTop: "5px" }}
              key={i}
              onClick={() => jumpTo(i)}
            />
          ))} */}
        </div>

        <div className="buts hidden md:flex text-right">
          <button
            className="px-2 py-2 rounded-full border border-gray-400 service-control review-swiper-button-prev"
            aria-label="swipe left"
          >
            <svg
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M8 12l6-6v12z" />
            </svg>
          </button>
          <button
            className="px-2 py-2 rounded-full border ml-4 border-gray-400 service-control review-swiper-button-next"
            aria-label="swipe right"
          >
            <svg
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M16 12l-6 6V6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}