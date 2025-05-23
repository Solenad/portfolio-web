import "boxicons/css/boxicons.min.css";
import Button from "./Button.tsx";
import Info from "./Info.tsx";
import Tech from "./Tech.tsx";
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

  const components = [Info, Tech];

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  console.log("current: " + current);

  return (
    <div
      className={`${style}  flex flex-col w-full h-full justify-center md:justify-center lg:justify-start
                  `}
    >
      {/* transition for sidebar */}
      <div
        className={`transition-transform duration-500 ease-in-out 
                flex flex-col gap-y-4 md:gap-y-5 lg:gap-y-8 mx-4 
                ${sidebarOpen ? "lg:translate-x-[20%]" : ""}`}
      >
        {/* profile image and greeting */}
        <div className="max-h-[60%] flex flex-col md:flex-row lg:flex-row w-full justify-center lg:justify-start items-center gap-5 md:gap-10 lg:gap-25">
          <div
            className="bg-[var(--card-color1l)] dark:bg-[var(--card-block)] max-h-[225px] shadow-lg rounded-lg border border-gray-400 dark:border-[var(--card-color1)]
            transition-colors duration-300 ease-in-out
            
          "
          >
            <img
              className="w-[20vh] md:w-[30vh] lg:w-[225px] p-2"
              src="https://avatars.githubusercontent.com/u/166220458?s=96&v=4"
            />
          </div>
          <div className="text-4xl md:text-6xl lg:text-8xl text-nowrap font-['Montserrat'] text-[var(--text-light)] dark:text-[var(--text-dark)] transition-colors duration-300 ease-in-out">
            Hi, I'm Roe!
          </div>
        </div>

        {/* carousel for contents */}
        <div className="flex flex-row items-center justify-center">
          <div className="h-full w-full flex flex-grow justify-center">
            <div
              className="bg-[var(--card-color1l)] border border-gray-400 dark:border-[var(--card-block)] dark:bg-[var(--card-block)] min-w-[90%] lg:w-full min-h-[230px] md:min-h-[100px] lg:min-h-[255px] 
                             rounded-lg shadow-md transition-colors duration-300 ease-in-out flex flex-col"
            >
              <Carousel setApi={setApi} className="h-full w-full p-3 lg:p-5">
                <CarouselContent>
                  {components.map((Component, index) => (
                    <CarouselItem key={index}>
                      <Component />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="flex flex-row justify-center gap-x-4">
                <Button
                  change={() => api && api?.scrollTo(current - 1)}
                  content={
                    <i
                      className={`bx bx-chevron-left w-full h-full text-xl lg:text-3xl text-center transition-colors duration-300 ease-in-out
                      ${current == 0 ? "text-[var(--text-dhover)]" : "text-[var(--text-light)] dark:text-[var(--text-dark)]"}`}
                    />
                  }
                  style={`${current == 0 ? "pointer-events-none" : ""}`}
                />

                <Button
                  change={() => api && api?.scrollTo(current + 1)}
                  content={
                    <i
                      className={`bx bx-chevron-right w-full h-full text-xl lg:text-3xl text-center transition-colors duration-300    ease-in-out
                                ${current == components.length - 1 ? "text-[var(--text-dhover)]" : "text-[var(--text-light)] dark:text-[var(--text-dark)]"}`}
                    />
                  }
                  style={`${current == components.length - 1 ? "pointer-events-none" : ""}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
