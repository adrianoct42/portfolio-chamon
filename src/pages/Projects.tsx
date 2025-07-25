import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projectData } from "../constants/projectsData";
import LargeText from "../components/4_SmallText";
import StandardText from "../components/3_StandardText";
import VerySmallText from "../components/5_VerySmallText";

export default function Projects() {
  return (
    <div id="projects" className="bg-slate-500 dark:bg-slate-900">
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <code className="text-3xl text-slate-900 dark:text-slate-400">
          {"<!-- projects -->"}
        </code>
        <div className="container mx-auto max-w-6xl mt-6">
          <Swiper
            modules={[Pagination]}
            grabCursor
            slidesPerView={1}
            spaceBetween={10}
            speed={500}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="w-full h-full mySwiper"
          >
            {projectData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col h-full border-2 rounded-2xl">
                  <img
                    className="object-cover object-center rounded-t-2xl"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="h-full bg-slate-400 px-4 pt-4 pb-4 rounded-b-2xl flex flex-col gap-2 dark:bg-slate-700">
                    <StandardText>{item.title}</StandardText>
                    <LargeText>{item.description}</LargeText>
                    <div className="flex gap-1 flex-wrap mt-auto">
                      {item.tags.map((tag, tagIndex) => (
                        <VerySmallText
                          key={tagIndex}
                          styles="py-0.5 px-2 font-bold border rounded-xl"
                        >
                          {tag}
                        </VerySmallText>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-swiper-pagination gap-2 mt-12 flex justify-center"></div>
        </div>
      </div>
    </div>
  );
}
