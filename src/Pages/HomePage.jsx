import React, { useEffect, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../Components/Hero";
import DearDiv from "../Components/DearDiv";
import Lenis from "@studio-freight/lenis";
// import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const component = useRef();
  const component2 = useRef();
  const slider2 = useRef();
  const slider = useRef();

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".container > section");
      let scrollTween = gsap.to(panels, {
        xPercent: -100 * panels.length,
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: true,
          end: "+=3000",
          invalidateOnRefresh: true,
        },
      });

      gsap.to(".firstImage", {
        transform: "rotate(10deg)",
        scrollTrigger: {
          scrub: 0.1,
          trigger: ".roatedImageContainer",
          containerAnimation: scrollTween,
          start: "right center+=40%",
          end: "left end+=35%",
          toggleActions: "play none none reset",
        },
      });
      gsap.to(".secondImage", {
        transform: "rotate(-12deg)",
        scrollTrigger: {
          scrub: 0.1,
          trigger: ".roatedImageContainer",
          containerAnimation: scrollTween,
          start: "right center+=40%",
          end: "left end+=35%",
          toggleActions: "play none none reset",
        },
      });
      gsap.to(".thirdImage", {
        transform: "rotate(-10deg)",
        scrollTrigger: {
          scrub: 0.1,
          trigger: ".roatedImageContainer",
          containerAnimation: scrollTween,
          start: "left center+=20%",
          end: "left end+=35%",
          toggleActions: "play none none reset",
        },
      });

      //clipmask

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".roatedImageContainer",
            start: "left left",
            end: "right left",
            scrub: true,
            containerAnimation: scrollTween,
          },
        })
        .to(".thanks-panel", { xPercent: 100, ease: "none" })
        .fromTo(
          ".roatedDarkImageContainer",
          {
            clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          },
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          0
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".bgContainerImages",
            start: "center+=20% bottom",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
          },
        })
        .to(
          ".hiddenDivImage",
          // {
          //   clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          // },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }
        );

      //normal

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".goodSectionMain",
            start: "left right",
            end: "center center+=20%",
            scrub: true,
            containerAnimation: scrollTween,
            // markers: true,
          },
        })
        .fromTo(
          ".singleImg",
          {
            scale: 0.5,
            y: "-100%",
          },
          {
            scale: 0.5,
            y: 0,
            stagger: 0.4,
          }
        )
        .fromTo(
          ".singleImg",
          {
            scale: 0.5,
          },
          {
            scale: 1,
            stagger: 0.4,
          }
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".goodDiv",
            start: "left right",
            end: "center center+=20%",
            scrub: true,
            containerAnimation: scrollTween,
            // markers: true,
          },
        })
        .fromTo(
          ".goodDiv",
          {
            y: "100%",
          },
          {
            y: 0,
          }
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".maxImagesContainer",
            start: "top center",
            end: "top top",
            scrub: true,
            // markers: true,
          },
        })
        .fromTo(
          ".singleImageinMax",
          {
            scale: 0,
          },
          {
            scale: 0.7,
            bottom: "30% ",
          }
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".maxImagesContainer",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
          },
        })
        .fromTo(
          ".maxImage1",
          {
            x: "10vw",
            y: "-10vh",
          },
          {
            scale: 1,
            x: "-40vw",
            y: "10vh",
          },
          "start"
        )
        .fromTo(
          ".maxImage2",
          {
            x: "10vw",
            y: "5vh",
          },
          {
            scale: 1,
            x: "40vw",
            y: "20%",
          },
          "start"
        )
        .fromTo(
          ".maxImage3",
          {
            x: "-10vw",
            y: "-20vh",
          },
          {
            scale: 1,
            x: "-36vw",
            y: "-42vh",
          },
          "start"
        )
        .fromTo(
          ".maxImage4",
          {
            x: "0",
            y: "0",
          },
          {
            scale: 1,
            x: 0,
            y: 0,
          },
          "start"
        )
        .fromTo(
          ".maxImage5",
          {
            x: "10vw",
            y: "10vh",
          },
          {
            scale: 1,
            x: "37vw",
            y: "-27vh",
          },

          "start"
        );
    }, component);

    let ctx2 = gsap.context(() => {
      let panels2 = gsap.utils.toArray(".container2 > section");
      let scrollTween2 = gsap.to(panels2, {
        xPercent: -100 * panels2.length,
        ease: "none",
        scrollTrigger: {
          trigger: slider2.current,
          pin: true,
          scrub: true,
          end: "+=3000",
          invalidateOnRefresh: true,
        },
      });

      gsap.to(".image1", {
        top: "0%",
        scrollTrigger: {
          trigger: ".floatingImagesCollection",
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.to(".image2", {
        top: "20%",
        scrollTrigger: {
          trigger: ".floatingImagesCollection",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".image3", {
        y: "-80%",
        scrollTrigger: {
          trigger: ".floatingImagesCollection",
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.to(".insideImg1", {
        top: "0",
        scrollTrigger: {
          trigger: ".imagesContainerDiv1",
          start: "top bottom",
          end: "top top",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".insideImg2", {
        top: "-10%",
        scrollTrigger: {
          trigger: ".imagesContainerDiv1",
          start: "top bottom",
          end: "top top",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".insideImg3", {
        top: "0%",
        scrollTrigger: {
          trigger: ".imagesContainerDiv1",
          start: "top bottom",
          end: "top top",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".insideImg4", {
        bottom: "5%",
        scrollTrigger: {
          trigger: ".imagesContainerDiv1",
          start: "top bottom",
          end: "top top",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".insideImg5", {
        bottom: "0%",
        scrollTrigger: {
          trigger: ".imagesContainerDiv1",
          start: "top bottom",
          end: "top top",
          scrub: true,
          // markers: true,
        },
      });
    }, component2);

    return () => {
      ctx.revert();
      ctx2.revert();
    };
  });

  return (
    <>
      <div ref={component} className="relative">
        <header className="fixed z-[999] top-0 left-0 right-0 w-full pl-[1.5rem] pr-[1.5rem] flex justify-between items-center p-[1rem] border-b-[1px] border-borderColor">
          <span className="uppercase text-[14px]">Virtual Gallery</span>
          <span className="uppercase text-[14px]">Thank You!!</span>
        </header>

        <div
          className=" h-screen relative flex flex-nowrap  container"
          ref={slider}
        >
          <Hero />

          <section className="mr-[100vw] bg-red-600  h-screen relative z-10 roatedImageMain block">
            <div className=" h-full flex items-start justify-start w-[100vw] thanks-panel">
              <div className="w-screen relative  h-screen flex justify-center items-center roatedImageContainer bg-background">
                <div className=" firstImage h-[12rem] w-[13rem] absolute top-[15%] left-[10%]  overflow-hidden ">
                  <img
                    className="w-full h-full object-cover duration-300 object-center"
                    src="https://virtual-gallery.okeystudio.com/thanks-1.c050f96d.webp"
                  ></img>
                </div>

                <div className=" secondImage h-[10rem] w-[13rem] rotate-[-6deg] absolute top-[13%] right-[9%]  overflow-hidden ">
                  <img
                    className="w-full h-full object-cover duration-300 object-center"
                    src="https://virtual-gallery.okeystudio.com/thanks-2.5b322fb7.webp"
                  ></img>
                </div>

                <div className="h-[9rem] thirdImage rotate-2 w-[13rem] absolute bottom-[16%]  overflow-hidden  ">
                  <img
                    className="w-full h-full object-cover duration-300 object-center"
                    src="https://virtual-gallery.okeystudio.com/thanks-3.48846b1e.webp"
                  ></img>
                </div>
                <span className="uppercase text-[22rem] font-medium">
                  Thanks
                </span>
              </div>
              <div className="w-screen absolute h-screen flex justify-center items-center roatedDarkImageContainer bg-dark">
                <div className=" firstImage h-[12rem] w-[13rem] absolute top-[15%] left-[10%] overflow-hidden ">
                  <img
                    className="w-full h-full object-cover duration-300 object-center"
                    src="https://virtual-gallery.okeystudio.com/thanks-3bis.68c75dbb.webp"
                  ></img>
                </div>

                <div className=" secondImage h-[10rem] w-[13rem] rotate-[-6deg] absolute top-[13%] right-[9%]  overflow-hidden ">
                  <img
                    className="w-full h-full object-cover duration-300 object-center"
                    src="https://virtual-gallery.okeystudio.com/thanks-2bis.0afa6688.webp"
                  ></img>
                </div>

                <div className="h-[9rem] thirdImage rotate-2 w-[13rem] absolute bottom-[16%] overflow-hidden  ">
                  <img
                    className="w-full h-full object-cover duration-300 object-center"
                    src="https://virtual-gallery.okeystudio.com/thanks-1bis.a9fa8549.webp"
                  ></img>
                </div>
                <span className="uppercase text-[22rem] text-white font-medium">
                  Thanks
                </span>
              </div>
            </div>
          </section>

          <section className="h-[200vh]  relative">
            <section className="w-screen h-screen  goodSectionMain ">
              <div className="flex h-screen w-screen overflow-hidden secondImageDiv ">
                <div className="h-full singleImg">
                  <img
                    className="object-cover "
                    src="https://virtual-gallery.okeystudio.com/duo-photo1.589f3a05.webp"
                  ></img>
                </div>
                <div className="h-full singleImg">
                  <img
                    className="object-cover"
                    src="https://virtual-gallery.okeystudio.com/duo-photo2.94837066.webp"
                  ></img>
                </div>
                <div className="flex flex-col h-full pt-12 p-4 goodDiv">
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
          </section>
        </div>

        <section className="h-[250vh] z-10 w-full relative flex  flex-col align-top items-start bgContainerImages">
          <section className="w-screen h-[150vh] sticky top-0 z-9 maxImagesContainer ">
            {/* First Image Container */}

            <div className="h-screen  w-screen sticky top-0 ">
              <div className="absolute overflow-hidden top-[50%] z-1 left-[50%] translate-x-[-50%] translate-y-[-50%] h-[32vh] w-[14rem] singleImageinMax maxImage1 ">
                <img
                  className="object-cover  h-full w-full "
                  src="https://virtual-gallery.okeystudio.com/groupe-left3.efb189cc.webp"
                ></img>
                <img
                  className="object-cover absolute top-0 left-0 bottom-0 right-0 h-full w-full hiddenDivImage "
                  src="https://virtual-gallery.okeystudio.com/groupe-left1-v2.35b78d82.webp"
                ></img>
              </div>
              <div className="absolute overflow-hidden z-[2] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   h-[32vh] w-[14rem] singleImageinMax maxImage2 ">
                <img
                  className="object-cover h-full w-full "
                  src="https://virtual-gallery.okeystudio.com/groupe-left1.c49c55ae.webp"
                ></img>
                <img
                  className="object-cover absolute top-0 left-0 bottom-0 right-0 h-full w-full hiddenDivImage "
                  src="https://virtual-gallery.okeystudio.com/groupe-left2-v2.00b0dbc2.webp"
                ></img>
              </div>

              <div className="absolute z-[3] overflow-hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   h-[34vh] w-[14rem] singleImageinMax  maxImage3">
                <img
                  className="object-cover h-full w-full    "
                  src="https://virtual-gallery.okeystudio.com/groupe-left2.b48efad2.webp"
                ></img>
                <img
                  className="object-cover absolute top-0 left-0 bottom-0 right-0 h-full w-full hiddenDivImage "
                  src="https://virtual-gallery.okeystudio.com/groupe-left3-v2.b32f9c0a.webp"
                ></img>
              </div>

              <div className="absolute overflow-hidden z-[4] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   singleImageinMax  h-full w-[40%]   maxImage4">
                <img
                  className="object-cover h-full w-full    "
                  src="https://virtual-gallery.okeystudio.com/groupe-centre1.3e60ca62.webp"
                ></img>
                <img
                  className="object-cover absolute top-0 left-0 bottom-0 right-0 h-full w-full hiddenDivImage "
                  src="https://virtual-gallery.okeystudio.com/groupe-centre2.24043a60.webp"
                ></img>
              </div>

              <div className="absolute overflow-hidden z-[5] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  singleImageinMax  h-[40vh] w-[18rem]  maxImage5">
                <img
                  className="object-cover h-full w-full    "
                  src="https://virtual-gallery.okeystudio.com/groupe-right1.da033ec5.webp"
                ></img>
                <img
                  className="object-cover absolute top-0 left-0 bottom-0 right-0 h-full w-full hiddenDivImage "
                  src="https://virtual-gallery.okeystudio.com/groupe-right2.8c20aca0.webp"
                ></img>
              </div>
            </div>
          </section>
        </section>
      </div>

      <div className="component2 relative" ref={component2}>
        <section className="w-screen min-h-screen relative floatingImagesCollection">
          <img
            src="https://virtual-gallery.okeystudio.com/groupe-left4-scroll2.08f0a4a8.webp"
            className="h-[30vh] absolute bottom-[-80%]  image1"
          ></img>

          <img
            src="https://virtual-gallery.okeystudio.com/groupe-left4-scroll.e4021ce3.webp"
            className="h-[40vh] absolute left-[40%] bottom-[-60%] image2 "
            // data-scroll
            // data-scroll-speed="0.2"
          ></img>

          <img
            src="https://virtual-gallery.okeystudio.com/groupe-right3.28a39d37.webp"
            className="h-[40vh] absolute top-[30%] right-[6%] image3 "
            data-scroll
            data-scroll-speed="0.4"
          ></img>
          <img
            src="https://virtual-gallery.okeystudio.com/groupe-left4-scroll3.0288eb04.webp"
            className="h-[40vh] absolute bottom-[-25%] right-[6%] image3 "
            data-scroll
            data-scroll-speed="0.2"
          ></img>

          <img
            src="https://virtual-gallery.okeystudio.com/groupe-end.6ec43181.webp"
            className="h-[40vh] absolute bottom-[-10%] left-[7%] image3"
            data-scroll
            data-scroll-speed="0.4"
          ></img>
        </section>
        <div
          className="h-screen relative flex flex-row flex-nowrap container2"
          ref={slider2}
        >
          <section className="h-screen relative w-screen  flex-shrink-0 imagesContainerDiv1">
            <img
              src="https://virtual-gallery.okeystudio.com/groupe-left4-scroll2.08f0a4a8.webp"
              className="h-[30vh] absolute bottom-[-80%] left-[3%] insideImg1"
              data-scroll
              data-scroll-speed="0.3"
            ></img>

            <img
              src="https://virtual-gallery.okeystudio.com/groupe-left4-scroll.e4021ce3.webp"
              className="h-[40vh] absolute left-[43%] bottom-[-50%]  insideImg2"
              data-scroll
              data-scroll-speed="0.2"
            ></img>

            <img
              src="https://virtual-gallery.okeystudio.com/groupe-right3.28a39d37.webp"
              className="h-[40vh] absolute top-[50%] right-[12%] insideImg3 "
              data-scroll
              data-scroll-speed="0.4"
            ></img>
            <img
              src="https://virtual-gallery.okeystudio.com/groupe-left4-scroll3.0288eb04.webp"
              className="h-[40vh] absolute   bottom-[-80%] right-[0%]  insideImg4"
              data-scroll
              data-scroll-speed="0.2"
            ></img>

            <img
              src="https://virtual-gallery.okeystudio.com/groupe-end.6ec43181.webp"
              className="h-[40vh] absolute bottom-[-50%] left-[7%] insideImg5 "
              data-scroll
              data-scroll-speed="0.4"
            ></img>
          </section>

          <section className="ml-[30vw] h-screen w-screen flex  flex-shrink-0">
            <div className="flex justify-between items-end w-screen">
              <div className="bg-black h-[30vh] text-white flex flex-col justify-between p-4  w-[40vw] text-[14px]">
                <div className="bg-black text-white flex justify-between items-center">
                  <span>
                    WELCOME TO OUR SMALL VIRTUAL PHOTOGRAPHIC GALLERY.
                  </span>
                  <img
                    className="h-[24px] w-[24px]"
                    src="https://virtual-gallery.okeystudio.com/favorite-light.5085079f.png"
                  ></img>
                </div>

                <div className=" font-thin">
                  <span>
                    Hi, we are Okey Studio, a French digital studio. We want to
                    talk to you about our relationship with nice photos. For us
                    photographers are artists and their pictures are so
                    inspiring. It pushes us to make great work in our turn!
                  </span>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="h-full w-[40vw] overflow-hidden">
                  <img src="https://virtual-gallery.okeystudio.com/sand1.14687ab1.webp"></img>
                </div>
                <div className="h-full w-[40vw] overflow-hidden">
                  <img src="https://virtual-gallery.okeystudio.com/sand1.14687ab1.webp"></img>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="h-screen w-screen  flex-shrink-0"></section>
          <section className="h-screen w-screen flex-shrink-0"></section> */}
        </div>
      </div>

      {/* <section ref={component2} className="relative">
        <div
          className=" relative flex flex-nowrap bg-slate-400 secondSliders"
          ref={slider2}
        >
         
        </div>
      </section> */}
    </>
  );
}

export default HomePage;
