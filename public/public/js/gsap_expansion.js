const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

  //* Hero Section Block Expansion
  const blockExpansion = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero_big-pic",
        scrub: true,
        //   pin: true,
        //   markers: true,
        start: "35% 50%",
        end: "+=300px",
      },
    })
    .to(".hero_big-pic", {
      scale: 2.2,
      ease: "none",
    });

  //* Comments Transition
  const commentsBlock = gsap.timeline({
    scrollTrigger: {
      trigger: ".problems-section",
      scrub: true,
      pin: ".problems_title",
      start: "-400px 100px",
      end: "+=350%",
      // markers: true,
    },
  });
  let sections = gsap.utils.toArray(".problems-slider_slide");

  sections.forEach((section) => {
    gsap.to(section, {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: section,
        start: "top top+=100",
        scrub: true,
        end: "+=400",
        // markers: true,
      },
    });
  });

  //* Episodes Preview Block Transition
  const episodesPreviewBlock = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".episodes_transition-screen",
        scrub: true,
        //   pin: true,
        // markers: true,
        start: "35% 50%",
        end: "+=300px",
      },
    })
    .to(".episodes_transition-screen", {
      scale: 4,
      ease: "none",
      borderRadius: "0%",
    });

  //* Pin Series section
  const pinSeriesSection = gsap.timeline({
    scrollTrigger: {
      trigger: ".seasons-section",
      scrub: true,
      pin: true,
      // markers: true,
      start: "top top",
      end: "+=100px",
    },
  });

  //* Horizontal Reviews Block Animation
  gsap.to(".reviews-section", {
    xPercent: -100,
    scrollTrigger: {
      trigger: ".reviews-section",
      start: "top top",
      end: "+=3000px",
      pin: ".reviews-section",
      scrub: true,
      // markers: true,
    },
  });

  //* Timeline Section
  const sectionWrap = document.querySelector(".timeline");

  ScrollTrigger.create({
    trigger: ".timeline_line_line-inner_ball",
    start: "top 35%",

    endTrigger: ".timeline", // outside timeline
    end: "bottom-=24px 35%", //The end point must be the bottom point of the timeline !!! bottom-=24px 35% 

    pin: true,
    // markers: true,
    pinSpacing: false,
    scrub: 1,
  });
  
  gsap.utils.toArray(".timeline_section").forEach((tSection) => {
    const timelineSection = gsap.timeline({
      scrollTrigger: {
        trigger: tSection,
        start: "+=30px 35%",
        end: "+=35%",
        toggleClass: "active",
        markers: true,
        // pin: true,
      },
    });
  });
});
