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

    gsap.to(imageHeaderRef.current, {
      scale: 1,
      duration: 3,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
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
      <div>
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
          className="h-[100vh] w-full mt-[10rem]   _heroImage overflow-hidden"
          ref={imageRef}
        >
          <div className="h-full w-full overflow-hidden">
            <img
              ref={imageHeaderRef}
              className="object-cover scale-150 object-center h-full w-full  _image"
              src="https://virtual-gallery.okeystudio.com/photo1.42abc711.webp"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
