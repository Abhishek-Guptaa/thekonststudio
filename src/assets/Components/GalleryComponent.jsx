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

         <div className="w-full h-screen relative z-[999] flex flex-col justify-center items-center text-orange bg-[#D1D1D1] px-4 sm:px-8">
        <h1 className="text-4xl font-bold mb-8 opacity-0 font-main" id="our-works-title">
        Our Works
        </h1>
        <h1 className="w-full text-left sm:w-4/5 md:w-3/4 lg:w-3/4 text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold py-6 sm:py-8 text-black font-second ">
        Looking to grow your social presence and explore more opportunities?
        </h1>
        <p className="w-full sm:w-4/5 md:w-3/4 lg:w-3/4 text-base sm:text-xl md:text-2xl lg:text-3xl text-black font-second text-left">
        In today’s digital world, your online presence is more powerful than ever. Whether you're a brand, creator, or entrepreneur, connecting with the right audience can open doors to endless opportunities. If you're ready to elevate your social presence, collaborate on impactful content, or just explore fresh ideas together — let’s connect and create something meaningful. Growth starts with the right partnerships.
  </p>
  
  

<form id="contact"
  onSubmit={(e) => {
    const input = e.target.elements.text.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\+?\d{10}$/;
    if (!emailPattern.test(input) && !phonePattern.test(input)) {
      e.preventDefault();
      alert("Please enter a valid email address or phone number.");
    }
  }}
  action="https://formspree.io/f/mzzgpgrd"  
  method="POST"
  className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-3/4 md:w-2/4 py-8 sm:py-16 px-4"
>
  <input
    type="text"
    name="text"
    placeholder="Your email or number."
    required
    className="w-full sm:flex-1 placeholder:font-second px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-zinc-400 text-black  WW"
  />
  <button
    className="w-full sm:w-auto bg-black border font-main font-light border-black hover:bg-secondary text-secondary hover:text-black font-bold py-2 px-6 rounded transition-colors duration-200"
    type="submit"
  >
    Submit
  </button>
</form>


  {/* Bottom left text */}
<footer className="bottom-4 w-full px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between  text-black text-">
  {/* Left text */}
  <div className="mb-2 sm:mb-0">
    Konst Studio &copy;
  </div>

  {/* Social Icons */}
  <div className="flex space-x-4">
    {/* Instagram */}
    <a
      href="https://www.instagram.com/thekonststudio/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200 text-gray-500 hover:text-pink-500"
      aria-label="Instagram"
    >
     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 30 30">
<path d="M 15 2 C 7.832 2 2 7.832 2 15 C 2 22.168 7.832 28 15 28 C 22.168 28 28 22.168 28 15 C 28 7.832 22.168 2 15 2 z M 11.666016 6 L 18.332031 6 C 21.457031 6 24 8.5420156 24 11.666016 L 24 18.332031 C 24 21.457031 21.457984 24 18.333984 24 L 11.667969 24 C 8.5429688 24 6 21.457984 6 18.333984 L 6 11.667969 C 6 8.5429688 8.5420156 6 11.666016 6 z M 11.666016 8 C 9.6450156 8 8 9.6459688 8 11.667969 L 8 18.333984 C 8 20.354984 9.6459688 22 11.667969 22 L 18.333984 22 C 20.354984 22 22 20.354031 22 18.332031 L 22 11.666016 C 22 9.6450156 20.354031 8 18.332031 8 L 11.666016 8 z M 19.667969 9.6660156 C 20.035969 9.6660156 20.333984 9.9640312 20.333984 10.332031 C 20.333984 10.700031 20.035969 11 19.667969 11 C 19.299969 11 19 10.700031 19 10.332031 C 19 9.9640312 19.299969 9.6660156 19.667969 9.6660156 z M 15 10 C 17.757 10 20 12.243 20 15 C 20 17.757 17.757 20 15 20 C 12.243 20 10 17.757 10 15 C 10 12.243 12.243 10 15 10 z M 15 12 A 3 3 0 0 0 15 18 A 3 3 0 0 0 15 12 z"></path>
</svg> {/* SVG goes here */}
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200 text-gray-500 hover:text-blue-600"
      aria-label="Facebook"
    >
     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 30 30">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
</svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/konststudio/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200 text-gray-500 hover:text-blue-700"
      aria-label="LinkedIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/8080030349"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200 text-gray-500 hover:text-green-500"
      aria-label="Whatsapp"
    >
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
</svg>
    </a>
  </div>
</footer>

</div>

      </div>
    </section>
  );
};

export default GalleryComponent;