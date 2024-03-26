// const setVwVh = () => {
//   let vw = document.documentElement.clientWidth / 100;
//   let vh = document.documentElement.clientHeight / 100;
//   document.documentElement.style.setProperty("--vw", `${vw}px`);
//   document.documentElement.style.setProperty("--vh", `${vh}px`);
// };

// /**
//  * Handle the expandable video block
//  */
// const expandableVideoBlock = () => {
//   const maxWidth = parseInt(
//     getComputedStyle(document.documentElement).getPropertyValue(
//       "--container-width"
//     )
//   );
//   const gap = 24;
//   const element = document.querySelector(".video-block");
//   const container = element.querySelector(".video-block__container");
//   const figure = element.querySelector("figure.video");
//   const video = element.querySelector("video");

//   // get values to animate clipPath property
//   const getClipPath = () => {
//     let insetX = (window.innerWidth - maxWidth - gap) / 2;
//     let insetY = (window.innerHeight - maxWidth - gap) / 2;

//     insetX = insetX > 0 ? insetX : gap;
//     insetY = insetY > 0 ? insetY : gap;

//     return `inset(${insetY}px ${insetX}px)`;
//   };

//   let isPlaying = false;

//   // On video playing toggle values
//   video.onplaying = function () {
//     isPlaying = true;
//   };

//   // On video pause toggle values
//   video.onpause = function () {
//     isPlaying = false;
//   };

//   // pause the video
//   const videoPause = () => {
//     if (video && !video.paused && isPlaying) {
//       video.pause();
//     }
//   };

//   // play the video
//   const videoPlay = async () => {
//     if (video && video.paused && !isPlaying) {
//       return await video.play();
//     }
//   };

//   // add parallax effect to the video before expanding
//   gsap.fromTo(
//     figure,
//     {
//       clipPath: getClipPath,
//       y: "-50%",
//     },
//     {
//       scrollTrigger: {
//         trigger: element,
//         start: "top bottom",
//         end: "top top",
//         scrub: true,
//         //markers: true
//       },
//       y: "0%",
//       duration: 0.5,
//       onStart: () => {
//         videoPause();
//       },
//     }
//   );

//   // init timeline
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: container,
//       start: "top top",
//       end: () => window.innerHeight * 4,
//       scrub: true,
//       pin: container,
//     },
//   });

//   // expand the video block
//   tl.fromTo(
//     figure,
//     {
//       clipPath: getClipPath,
//     },
//     {
//       clipPath: `inset(0px 0px)`,
//       duration: 0.5,
//       onUpdate: () => {
//         videoPause();
//       },
//       onComplete: () => {
//         videoPlay();
//       },
//     }
//   );

//   // keep the video block untouched on scrolling for a while
//   tl.fromTo(
//     figure,
//     {
//       opacity: 1,
//     },
//     {
//       opacity: 1,
//       duration: 1,
//       onUpdate: () => {
//         videoPlay();
//       },
//       onComplete: () => {
//         videoPause();
//       },
//     }
//   );

//   // shrink the video block to initial state
//   tl.fromTo(
//     figure,
//     {
//       clipPath: `inset(0px 0px)`,
//     },
//     {
//       clipPath: getClipPath,
//       duration: 0.5,
//     }
//   );
// };

// // run functions on page load and resize
// addEventListener("DOMContentLoaded", setVwVh);
// addEventListener("DOMContentLoaded", expandableVideoBlock);
// addEventListener("resize", setVwVh);
