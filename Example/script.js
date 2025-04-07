// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Ensure Lenis updates animations
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
    console.log(e);
});

document.querySelectorAll(".elem").forEach((elem) => {
    let image = elem.querySelector("img");
    let tl = gsap.timeline();

    let xTransform = gsap.utils.random(-100, 100);

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
    }, "start") // Keep this animation in sync

    // ✅ Properly add the movement animation to the same timeline
    .to(elem, {
        xPercent: xTransform,
        ease: "none",
        scrollTrigger: {
            trigger: elem, // Use elem instead of image
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        }
    }, "start"); // Keep all animations in sync
});
