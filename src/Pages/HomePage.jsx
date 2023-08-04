import React, { useEffect, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../Components/Hero";
import DearDiv from "../Components/DearDiv";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const containerRef = useRef(null);

  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".container > section");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: true,
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);

    return () => ctx.revert();
  });

  return (
    <>
      <div ref={component}>
        <header className="fixed z-[999] top-0 left-0 right-0 w-full pl-[1.5rem] pr-[1.5rem] flex justify-between items-center p-[1rem] border-b-[1px] border-borderColor">
          <span className="uppercase text-[14px]">Virtual Gallery</span>
          <span className="uppercase text-[14px]">Thank You!!</span>
        </header>
        <div
          className=" h-screen relative flex flex-nowrap w-[500vw] container"
          ref={slider}
        >
          <Hero />
          <DearDiv />
          <section className="w-screen h-screen">
            <div className="w-screen relative h-screen flex justify-center items-center">
              <div className="h-[12rem] w-[13rem] rotate-6 absolute top-[15%] left-[10%]">
                <img src="https://virtual-gallery.okeystudio.com/thanks-1.c050f96d.webp"></img>
              </div>

              <div className="h-[10rem] w-[13rem] rotate-[-6deg] absolute top-[13%] right-[9%]">
                <img src="https://virtual-gallery.okeystudio.com/thanks-2.5b322fb7.webp"></img>
              </div>

              <div className="h-[9rem] rotate-2 w-[13rem] absolute bottom-[16%] ">
                <img src="https://virtual-gallery.okeystudio.com/thanks-3.48846b1e.webp"></img>
              </div>
              <span className="uppercase text-[22rem] font-medium">Thanks</span>
            </div>
          </section>

          <section className="w-screen h-screen">
            <div className="flex h-screen w-screen overflow-hidden ">
              <div className="h-full ">
                <img
                  className="object-cover"
                  src="https://virtual-gallery.okeystudio.com/duo-photo1.589f3a05.webp"
                ></img>
              </div>
              <div className="h-full">
                <img
                  className="object-cover"
                  src="https://virtual-gallery.okeystudio.com/duo-photo2.94837066.webp"
                ></img>
              </div>
              <div className="flex flex-col h-full pt-12">
                <span className="text-[1.2rem] uppercase mb-[6px] font-semibold">
                  YOU’RE SO GOOD!
                </span>
                <span className="font-light text-[.8rem] ">
                  First of all, thank you so much for sharing your photos with
                  everyone, and secondly, thank you for being so awesome!
                </span>
                <img
                  className="w-[13rem] h-[16rem]"
                  src="https://virtual-gallery.okeystudio.com/sogood.da0ed801.webp"
                ></img>
              </div>
            </div>
          </section>

          <section className="w-screen h-screen">
            <div className="h-screen w-screen relative">
              <div className="absolute top-[10%] left-[5%] h-[32vh] w-[14rem] ">
                <img
                  className="object-cover h-full w-full"
                  src="https://virtual-gallery.okeystudio.com/groupe-left3.efb189cc.webp"
                ></img>
              </div>
              <div className="absolute bottom-[10%] left-[8%] h-[32vh] w-[14rem] ">
                <img
                  className="object-cover h-full w-full"
                  src="https://virtual-gallery.okeystudio.com/groupe-left1.c49c55ae.webp"
                ></img>
              </div>

              <div className="absolute right-[10%] top-[3%] h-[34vh] w-[14rem] ">
                <img
                  className="object-cover h-full w-full"
                  src="https://virtual-gallery.okeystudio.com/groupe-left2.b48efad2.webp"
                ></img>
              </div>

              <div className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] h-full w-[40%] ">
                <img
                  className="object-cover h-full w-full"
                  src="https://virtual-gallery.okeystudio.com/groupe-centre1.3e60ca62.webp"
                ></img>
              </div>

              <div className="absolute bottom-[10%] right-[5%] h-[40vh] w-[18rem] ">
                <img
                  className="object-cover h-full w-full"
                  src="https://virtual-gallery.okeystudio.com/groupe-right1.da033ec5.webp"
                ></img>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
