import "boxicons/css/boxicons.min.css";
import Button from "./Button.tsx";
import Info from "./Info.tsx";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface props {
  style: string;
  sidebarOpen: boolean;
}

export default function About({ style, sidebarOpen }: props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const components = [Info];

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div
      className={`${style}  flex flex-col w-full h-full justify-center md:justify-center lg:justify-start
                  `}
    >
      {/* transition for sidebar */}
      <div
        className={`transition-transform duration-500 ease-in-out 
                flex flex-col gap-y-10 md:gap-y-5 lg:gap-y-12 mx-4 
                ${sidebarOpen ? "lg:translate-x-[20%]" : ""}`}
      >
        {/* profile image and greeting */}
        <div className="max-h-[60%] flex flex-col md:flex-row lg:flex-row w-full justify-center lg:justify-start items-center gap-5 md:gap-10 lg:gap-25">
          <div
            className="bg-[var(--card-color1l)] dark:bg-[var(--card-block)] max-h-[225px] shadow-lg rounded-lg border border-gray-400 dark:border-[var(--card-color1)]
            
          "
          >
            <img
              className="w-[20vh] md:w-[30vh] lg:w-[225px] p-2"
              src="https://avatars.githubusercontent.com/u/166220458?s=96&v=4"
            />
          </div>
          <div className="text-4xl md:text-6xl lg:text-8xl font-[1000] font-['Montserrat'] ">
            Hi, I'm Roe!
          </div>
        </div>

        {/* carousel for contents */}
        <div className="flex flex-row items-center justify-center">
          <div className="h-full w-full flex flex-grow justify-center">
            <div
              className="bg-[var(--card-color1l)] dark:bg-[var(--card-block)] w-[80%] lg:w-full min-h-[250px] md:min-h-[100px] lg:min-h-[275px] 
                             rounded-lg shadow-md flex flex-row "
            >
              <Button
                change={() => api && api?.scrollTo(current - 1)}
                content={
                  <i
                    className={`bx bx-chevron-left text-xl lg:text-4xl text-center transition duration-200
                                ${current == 0 ? "text-[var(--text-dhover)]" : ""}`}
                  />
                }
                style={`${current == 0 ? "pointer-events-none" : ""}`}
              />
              <Carousel setApi={setApi} className="h-full w-full  p-3 lg:p-7">
                <CarouselContent>
                  {components.map((Component, index) => (
                    <CarouselItem key={index}>
                      <Component />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <Button
                change={() => api && api?.scrollTo(current + 1)}
                content={
                  <i
                    className={`bx bx-chevron-right text-xl lg:text-4xl text-center transition duration-200
                                ${current == components.length - 1 ? "text-[var(--text-dhover)]" : ""}`}
                  />
                }
                style={`${current == 0 ? "pointer-events-none" : ""}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
