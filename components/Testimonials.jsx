import { useState, useEffect } from "react";
import LazyImage from "./LazyImage";
import { Swiper, SwiperSlide } from "swiper/react";

// import { LazyLoadImage } from "react-lazy-load-image-component";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
export default function Testimonials({ data, testimonials }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const jumpTo = (index) => {
    setCurrentSlide(index);
  };
  const profiles = data.filter(img => img.folder === 'Stractora_profiles');
  console.log(profiles)
  console.log(testimonials)

  return (
    <div
      id="testimonial"
      className=" px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-10 md:pt-16 lg:pt-20 xl:pt-24 pb-6"
    >
      <h3 className="text-md font-normal app-color">OUR TESTIMONIALS</h3>
      <h2 className="text-2xl  lg:text-3xl font-bold">
        What our clients say
        <br />
        about our work
      </h2>

      {/* <div className="text-right" style={{ marginBottom: "-4rem" }}>
        <span className="font-black app-color text-7xl md:text-8xl xl:text-9xl">
          ”
        </span>
      </div> */}

      <div className="mt-12 bg-white grid grid-cols-1 lg:grid-cols-9 pb-8">
        <div className="col-span-4 pb-6 relative">
          <div className="bg-app-gray pl-6 lg:pl-0 block h-full">
            <LazyImage
              src="/images/WWW_4 - Photo.jpg"
              alt="Kabstore CEO's design"
              className="block w-full object-cover h-full"
              style={{ minHeight: "15rem" }}
            />
          </div>
          <div className="h-6 w-full lg:w-24 bg-app-gray absolute bottom-0 right-0"></div>
        </div>


        <div className="col-span-5 lg:pt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination1'
            }}
            // navigation={true}
            navigation={{
              nextEl: '.review-swiper-button-next1',
              prevEl: '.review-swiper-button-prev1',
            }}
            modules={[Pagination, Navigation]}
          >
            {
              testimonials.map((testimonial, index) => {
                return (
                  <SwiperSlide>
                    <div className="bg-app-gray py-6 px-8 lg:px-16 lg:py-20 xl:py-20">
                      <p className="text-sm lg:text-lg font-normal text-medium-black">
                        {
                          testimonial.message
                        }

                      </p>
                      <div className="pt-12">
                        <div className="flex flex-wrap justify-start items-center">
                          <LazyImage
                            src={profiles[0].image}
                            alt="Yves Munezero"
                            className="w-12 h-12 rounded-full block object-fill"
                          />
                          <div className="px-4">
                            <p className="font-normal text-md text-medium-black">
                              {
                                testimonial.name
                              }
                            </p>
                            <p className="text-xs text-medium-black font-light">
                              {testimonial.companyNames}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                )
              })
            }


          </Swiper>

        </div>






      </div>

      <div className="flex flex-wrap justify-between">
        <div className=""></div>
        <div className="swiper-custom-pagination1 position-indicators">
          {/* {[1, 2, 3, 4].map((i) => (
            <button
              className={
                (currentSlide === i ? "app-bg" : "bg-app-gray") + " w-10 mx-3"
              }
              style={{ paddingTop: "5px" }}
              key={i}
              onClick={() => jumpTo(i)}
            />
          ))} */}
        </div>

        <div className="hidden md:flex text-right">
          <button
            className="px-2 py-2 rounded-full border border-gray-400 service-control review-swiper-button-prev1"
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
            className="px-2 py-2 rounded-full border ml-4 border-gray-400 service-control review-swiper-button-next1"
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
              <path d="M16 12l-6 6V6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}