import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const GalleryComponent = () => {
  const sectionRef = useRef(null);
  const fixedTextRef = useRef(null);

  const imageLinks = [
    "https://i.pinimg.com/474x/bf/88/b6/bf88b6285ee6a52c8ec6cafa85eadd69.jpg",
    "https://i.ibb.co/zWVhd4cf/452569958-466204749586679-1945488946191537575-n.jpg",
    "https://i.ibb.co/vxhN4L8Q/451780353-1670926480323464-590116916172898239-n.jpg",
    "https://i.pinimg.com/474x/f9/7e/d5/f97ed52d4fb3d76a4a40ce46c5c9e5f6.jpg",
    
    "https://i.pinimg.com/474x/f3/2a/51/f32a512335b55c780e487ca4e8030d06.jpg",
    "https://i.pinimg.com/474x/66/cf/36/66cf369969e1d10e37c97fece6c65227.jpg",
    "https://i.pinimg.com/474x/d8/8a/76/d88a76cd60eb6aad38f9de08ae31865d.jpg",
    
  
    "https://i.ibb.co/8gv3LGDP/453487840-454841167522353-3970021035654831904-n.jpg",
    "https://i.ibb.co/wNZkLmcR/457607417-460024727024928-1910835592557069486-n.jpg",
    "https://i.ibb.co/BKt8y7Db/459188468-2010366236084855-7519262989932644360-n.jpg",
    "https://i.ibb.co/TxgxgYr3/Learn-coding.jpg",
    "https://i.ibb.co/3Y8C9BkG/Post-10.jpg",
    "https://i.ibb.co/TMQv7hrD/06674b215834677-677542eec0fb3.jpg",
    "https://i.ibb.co/xShzkBQP/5e6e3b215834677-677542ec25740.webp",
   "https://i.ibb.co/jZLxh1f1/724f2e215834677-6779f699c570f.webp",
   "https://i.ibb.co/ycGqnKVB/456305557-1654496561789846-4203206581849627921-n.jpg",
    "https://i.ibb.co/JFg7PPk4/1620ad215834677-677542ec25250.webp",
    
    "https://i.ibb.co/QjTMX5ND/452165034-1220113732762585-2914042744365507960-n.jpg",
    "https://i.pinimg.com/474x/02/1a/81/021a813f30195ed014f6ca669e452089.jpg",
    "https://i.ibb.co/zVXXFZbZ/Post-11.jpg"
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".elem").forEach((elem) => {
      const image = elem.querySelector("img");
      const tl = gsap.timeline();

      const xTransform = gsap.utils.random(-100, 100);

      tl.set(image, {
        transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
      }, "start")
        .to(image, {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger: elem,
            start: "top top",
            scrub: true,
          },
        }, "start")
        .to(elem, {
          xPercent: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: elem,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }, "start");
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => gsap.to(fixedTextRef.current, { autoAlpha: 1 }),
      onLeaveBack: () => gsap.to(fixedTextRef.current, { autoAlpha: 0 }),
      onLeave: () => gsap.to(fixedTextRef.current, { autoAlpha: 0 }),
      onEnterBack: () => gsap.to(fixedTextRef.current, { autoAlpha: 1 }),
    });
  });

  return (
    <section id="works">
      <style>
        {`
          .grid div {
            grid-column: var(--c);
            grid-row: var(--r);
          }
        `}
      </style>

      <div className="w-full bg-black" ref={sectionRef}>
        <div className="grid grid-cols-8 gap-2 overflow-hidden">
          {imageLinks.map((link, i) => {
            const col = [2, 6, 1, 5, 3, 7, 2, 8, 4, 6, 1, 7, 3, 5, 2, 6, 1, 4, 3, 7][i];
            const row = Math.floor(i / 2) + 1;
            return (
              <div
                key={i}
                className="elem col-span-1 row-span-1 "
                style={{
                  "--r": row,
                  "--c": col,
                  width: "180px",
                  height: "180px",
                }}
              >
                <img src={link} alt={`Image ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            );
          })}
        </div>

        <div
          ref={fixedTextRef}
          className="fixed top-0 bottom-0 w-full flex justify-center items-center text-white text-4xl font-bold pointer-events-none"
          style={{ opacity: 0 }}
        >
          Our Works
        </div>

        <div className="w-full h-screen py-70 relative z-[999] flex flex-col justify-center items-center text-orange bg-[#D1D1D1]">
          <h1 className="text-4xl font-bold mb-8 opacity-0 font-main" id="our-works-title">
            Our Works
          </h1>
          <h1 className="w-3/4 text-6xl font-bold py-8 text-black font-second">Looking to grow your social presence and explore more opportunities?</h1>
          <p className="w-3/4 text-3xl text-black font-second">
          In today’s digital world, your online presence is more powerful than ever. Whether you're a brand, creator, or entrepreneur, connecting with the right audience can open doors to endless opportunities. If you're ready to elevate your social presence, collaborate on impactful content, or just explore fresh ideas together — let’s connect and create something meaningful. Growth starts with the right partnerships.


          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryComponent;
