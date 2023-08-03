import React, { useEffect, useLayoutEffect, useRef } from "react";
import star from "../assets/star.svg";
import happyFace from "../assets/happyFace.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HomePage() {
  //   const sectionRef = useRef(null);
  //   const triggerRef = useRef(null);
  const imageRef = useRef(null);
  const imageHeaderRef = useRef(null);
  const containerRef = useRef(null);

  //   gsap.registerPlugin(ScrollTrigger);

  //   useEffect(() => {
  //     const pin = gsap.fromTo(
  //       sectionRef.current,
  //       {
  //         translateY: 0,
  //       },
  //       {
  //         translateY: "-70vh",
  //         ease: "none",
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: triggerRef.current,
  //           start: "top top",
  //           end: "bottom top",
  //           scrub: 0.6,
  //           pin: true,
  //         },
  //       }
  //     );
  //     return () => {
  //       {
  //         /* A return function for killing the animation on component unmount */
  //       }
  //       pin.kill();
  //     };
  //   }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".happyFace", {
      rotate: 360,
      duration: 1.5,
      repeat: -1,
      ease: "linear",
    });

    gsap.to("._heroHeader", {
      top: "-100%",
      duration: 2.5,
      ease: "expo.easeout",

      scrollTrigger: {
        trigger: imageRef.current,
        start: "center center",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });

    gsap.fromTo(
      imageHeaderRef.current,
      {
        scale: 1,
      },
      {
        scale: 1.5,
        duration: 3,
        scrollTrigger: {
          trigger: imageHeaderRef.current,
          start: "center center",
          end: "top+20% center",
          scrub: true,
        },
      }
    );

    const container = containerRef.current;

    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          scrub: 1,
          pin: true,
          start: "top top",
          end: "+=3300",
        },
      })
      .to(container, {
        x: () =>
          -(container.scrollWidth - document.documentElement.clientWidth - 95) +
          "px",
        ease: "none",
        duration: 1,
      });

    // gsap.to("_image", {
    //   scale: 1,
    //   duration: 2,
    //   scrollTrigger: {
    //     trigger: "._heroHeader",
    //     start: "top top",
    //     // end: "bottom top",
    //     scrub: true,
    //     markers: true,
    //   },
    // });
  }, []);

  return (
    <>
      <header className="fixed z-[999] top-0 left-0 right-0 w-full pl-[1.5rem] pr-[1.5rem] flex justify-between items-center p-[1rem] border-b-[1px] border-borderColor">
        <span className="uppercase text-[14px]">Virtual Gallery</span>
        <span className="uppercase text-[14px]">Thank You!!</span>
      </header>
      <div className="w-[3000vw] flex" ref={containerRef}>
        <div className="h-[70vh]  z-[998] top-0 absolute bg-background w-full _heroHeader flex-col justify-between flex border-b-[1px] border-borderColor">
          <div className="flex  flex-col justify-center items-center w-[80%] m-auto">
            <img className="h-[1.75rem] w-[1.75rem]" src={star}></img>
            <span className="text-[2.2857rem] leading-[2.2857rem]">
              PHOTOGRAPHER'S
            </span>
            <span className="text-[7.1429rem] leading-[7.1429rem]">
              CELEBRATION
            </span>
            <span className="w-[40%] text-center text-[14px] ">
              TODAY WE WANT TO HONOR ALL THE PHOTOGRAPHERS WHO GENEROUSLY SHARE
              THEIR PICTURES WITH THE WORLD. THIS WEBSITE IS A CELEBRATION OF
              THEIR TALENT!
            </span>
          </div>
          <div className="p-4 flex gap-2 items-center">
            <span className="uppercase text-[14px]">Enjoy Your Visit</span>
            <img
              className="h-[1.5rem] w-[1.5rem] happyFace"
              src={happyFace}
            ></img>
          </div>
        </div>

        <div
          className="h-screen w-screen mt-[10rem]   _heroImage overflow-hidden"
          ref={imageRef}
        >
          <img
            ref={imageHeaderRef}
            className=" object-cover block object-center h-full w-full _image  "
            src="https://virtual-gallery.okeystudio.com/photo1.42abc711.webp"
          ></img>
        </div>

        <div className="  flex justify-center flex-col w-[18rem] gap-2">
          <div className="h-[18rem] w-[18rem]">
            <img src="https://virtual-gallery.okeystudio.com/photo2.ca0d9d58.webp"></img>
          </div>
          <div>
            <span className="text-[.81rem] uppercase ">
              DEAR PHOTOGRAPHERS, YOU ARE CELEBRATED TODAY IN THIS LITTLE
              VIRTUAL PHOTOGRAPHIC GALLERY.
            </span>
          </div>
        </div>

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
      </div>
    </>
  );
}

export default HomePage;