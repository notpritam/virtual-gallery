import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import star from "../assets/star.svg";
import happyFace from "../assets/happyFace.svg";

function Hero() {
  useEffect(() => {
    gsap.to(".happyFace", {
      rotate: 360,
      duration: 1.5,
      repeat: -1,
      ease: "linear",
    });
  }, []);
  // const slider = useRef();
  return (
    <>
      <section className="min-w-[100vw] _heroDIV min-h-[100vh] relative overflow-hidden bg-transparent heroSection">
        <div className="h-[70vh] w-full absolute  z-[998]  bg-background _heroHeader flex-col justify-between flex border-b-[1px] border-borderColor">
          <div className="flex  flex-col justify-center items-center w-[80%] m-auto">
            <img className="h-[1.75rem] w-[1.75rem]" src={star}></img>
            <span className="text-[2.2857rem] leading-[2.2857rem] font-medium">
              PHOTOGRAPHER'S
            </span>
            <span className="text-[7.1429rem] leading-[7.1429rem] font-semibold">
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
        <section className="h-[100vh] w-[100vw]  overflow-hidden">
          <img
            className="w-[100vw] h-[100vh] absolute  top-0 object-cover object-center"
            src="https://virtual-gallery.okeystudio.com/photo1.42abc711.webp"
          ></img>
        </section>
      </section>
    </>
  );
}

export default Hero;
