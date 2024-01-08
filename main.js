// Wait for html to load before running any js

window.onload = function () {
    // These functions are from the GSAP public library, accessed 4.12.23
    // https://gsap.com/resources/

    /* ---------------------------------------- */
    /* --------- p2: WHEATSTONE --------------- */
    /* ----- 2D to 3D scroll animation -------- */

    gsap.to("#back", {
        scrollTrigger: {
            trigger: "#back",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        xPercent: -10,
        yPercent: -2,
    });

    gsap.to("#mid", {
        scrollTrigger: {
            trigger: "#mid",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        xPercent: 10,
        yPercent: 5,
    });

    gsap.to("#front", {
        scrollTrigger: {
            trigger: "#front",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        xPercent: 30,
        yPercent: 12,
    });

    /* ---------------------------------------- */
    /* --------- p3: MIRROR ------------------- */
    /* -- MIRROR stereoscope scroll animation - */

    gsap.from ("#L-panel", {
        scrollTrigger: {
            trigger: "#L-panel",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        xPercent: 8,
    });

    gsap.from ("#R-panel", {
        scrollTrigger: {
            trigger: "#R-panel",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        xPercent: -8,
    });

    /* ---------------------------------------- */
    /* --------- p4: DAGUERRE ----------------- */
    /* -- Daguerrotype opacity animation ------ */

    gsap.from ("#d-end", {
        scrollTrigger: {
            trigger: "#d-end",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        opacity: 0,
    });

    /* ---------------------------------------- */
    /* --------- p5: BREWSTER ----------------- */
    /* ------ Brewster opacity animation ------ */
    
    gsap.from ("#br-open", {
        scrollTrigger: {
            trigger: "#br-open",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        opacity: 0,
    });

    /* ---------------------------------------- */
    /* --------- p6: LENTICULAR --------------- */
    /* -- 2 images combining scroll animation - */

    gsap.from("#L-pic", {
        scrollTrigger: {
            trigger: "#L-pic",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        xPercent: -60,
    });

    gsap.from("#R-pic", {
        scrollTrigger: {
            trigger: "#R-pic",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        xPercent: 60,
    });

    /* ---------------------------------------- */
    /* --------- p7: HOLMES ------------------- */
    /* -- Holmes stereoscope scroll animation - */

    gsap.from ("#h-slider", {
        scrollTrigger: {
            trigger: "#h-slider",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        xPercent: 8,
    });

    /* ---------------------------------------- */
    /* --------- p8: VIEW-MASTER -------------- */
    /* --- View master opacity animation ------ */
    
    gsap.to ("#vm-front", {
        scrollTrigger: {
            trigger: "#vm-front",
            start: "60% 60%",
            end: "90% 60%",
            scrub: true,
        },
        opacity: 0,
    });
    
    gsap.from ("#vm-side", {
        scrollTrigger: {
            trigger: "#vm-side",
            start: "50% 60%",
            end: "90% 60%",
            scrub: true,
        },
        opacity: 0,
    });

    /* ---------------------------------------- */
    /* --------- p9: SPACEMAKING -------------- */
    /* ----- 2D to DEPTH scroll animation ----- */

    gsap.to("#depth-back", {
        scrollTrigger: {
            trigger: "#depth-back",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        scale: 0.7,
        xPercent: -10,
    });

    gsap.to("#depth-mid", {
        scrollTrigger: {
            trigger: "#depth-mid",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        scale: 0.9,
        xPercent: 10,
    });

    gsap.to("#depth-front", {
        scrollTrigger: {
            trigger: "#depth-front",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        scale: 1.1,
        xPercent: 30,
    });

    /* ---------------------------------------- */
    /* --------- p11: ANAGLYPH ---------------- */
    /* ----- Anaglyph scroll animation -------- */

    gsap.to("#sq-blue", {
        scrollTrigger: {
            trigger: "#sq-blue",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        xPercent: -5,
    });

    gsap.to("#sq-red", {
        scrollTrigger: {
            trigger: "#sq-red",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        xPercent: 5,
    });

    /* ---------------------------------------- */
    /* --------- p12: VIRTUAL REALITY --------- */
    /* ----- VR scroll animation -------------- */
    
    gsap.to("#vr-left", {
        scrollTrigger: {
            trigger: "#vr-left",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        yPercent: -10,
    });

    gsap.to("#vr-right", {
        scrollTrigger: {
            trigger: "#vr-right",
            start: "80% 60%",
            end: "110% 60%",
            scrub: true,
        },
        xPercent: 5,
        yPercent: 10,
    });

    /* ---------------------------------------- */
    /* --------- p13: CONCLUSION -------------- */
    // Interactive looping carousel adapted from 'How To Create An Animated Image Carousel With CSS/JavaScript' by Web Dev Simplified, accessed 21.12.23
    // https://www.youtube.com/watch?v=9HcxHDS2w1s

    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
          const offset = button.dataset.carouselButton === "next" ? 1 : -1
          const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

          const activeSlide = slides.querySelector("[data-active]")
          let newIndex = [...slides.children].indexOf(activeSlide) + offset
          if (newIndex < 0) newIndex = slides.children.length - 1
          if (newIndex >= slides.children.length) newIndex = 0

          slides.children[newIndex].dataset.active = true
          delete activeSlide.dataset.active
        })
    })

}