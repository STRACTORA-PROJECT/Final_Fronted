import LazyImage from "./LazyImage";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./style.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Welcome() {
  return (
    <div
      id="home"
      className="px-5 sm:px-10 md:px-16 lg:pr-0 lg:pl-20 xl:pl-28 pb-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="md:pb-8 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <LazyImage
                src="/images/1212.jpg"
                className="block w-full object-cover h-full"
                alt="Shine today with Stractora designs"
              />
            </div>
            <div className="px-8 sm:px-10 py-8 md:py-16 bg-white">
              <h1 className="font-bold text-2xl  lg:text-3xl py-6">
                WE BRING YOUR DREAM HOME TO LIFE
              </h1>
              <p className="py-5 font-light text-xs">
                Stractora is a construction company based in Rwanda that focuses
                on modern house designs and doing their construction. With
                Stractora, your dream can be brought to life.
              </p>
              <div className="py-5">
                <a
                  href="#service"
                  className="block letter-spacing w-full app-bg text-center text-xs py-5"
                >
                  OUR SERVICES
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:px-0 relative pb-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination2'
            }}
            // navigation={true}
            navigation={{
              nextEl: '.review-swiper-button-next2',
              prevEl: '.review-swiper-button-prev2',
            }}
            modules={[Pagination, Navigation]}>
            <SwiperSlide>
              <LazyImage
                alt="Stractora designs"
                src="/images/WWW_4 - Photo.jpg"
                className="block w-full object-cover h-full"
              // alt="A design by Stractora"
              />
            </SwiperSlide>
            <SwiperSlide>
              <LazyImage
                alt="Stractora designs"
                src="/images/WWW_4 - Photo.jpg"
                className="block w-full object-cover h-full"
              // alt="A design by Stractora"
              />
            </SwiperSlide>

          </Swiper>

          <div className="md:block controls absolute bottom-0 right-0 inline-block">
            <div className=" view grid grid-cols-3 app-bg-black-transparent py-5 md:py-6 lg:py-8">
              <div className="px-3 md:px-5 lg:px-8">
                <span className="font-light text-lg px-2 text-gray-200 letter-spacing">
                  01
                </span>
                <span className="font-light text-lg text-gray-500 px-1">/</span>
                <span className="font-light text-lg text-gray-500 px-2 letter-spacing">
                  05
                </span>
              </div>
              <div className="px-3 md:px-5 lg:px-8 overflow-hidden swiper-custom-pagination2">
                {/* {[1, 2, 3].map((i) => (
                  <button
                    className="inline-block font-medium text-center rounded-full border-none control-btn bg-white mx-2"
                    key={i}
                  />
                ))} */}
              </div>
              <div className="">
                <button
                  className="px-3 md:px-5 lg:px-8 review-swiper-button-next2"
                  aria-label="swipe left"
                >
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="24"
                    height="24"
                  >
                    <polygon
                      points="0.72 23.5 43.63 23.5 23.72 3.11 25.87 1.01 49.28 24.99 25.79 48.99 23.65 46.9 43.61 26.5 0.72 26.5 0.72 23.5"
                      fill="#ffffff"
                    ></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}