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

  function headerAnimation() {
    const headerLoadingAnimation = gsap.timeline({repeatDelay: 1})

    headerLoadingAnimation.fromTo('.header', {
      opacity: 0,
      y:-30,
    }, {
      y:0,
      opacity: 1,
      delay: 1,
      duration:2,
    })
    .fromTo('.hero_big-pic', {
      opacity:0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
    })
    .fromTo('.hero_scrolldown', {
      opacity: 0,
      y:20,
    }, {
      y:0,
      opacity: 1, 
      duration: 1,
      zIndex: 1,
    })
    .to('.hero_scrolldown', {
      opacity: 0,
      scrub: true,
      ease: "power1.out",

      scrollTrigger: {
        trigger: '.hero_scrolldown',
        start: "top 90%",
        end: "top 90%",
        scrub: true,
        // markers: true,
        ease: "power1.out",
      },
    })

    // var splitHeroTitle = new SplitText(".hero_title", {type: "chars"});

    // gsap.from(splitHeroTitle.chars, {
    //   duration: 1, 
    //   y: 100, 
    //   autoAlpha: 0, 
    //   stagger: 0.05,
    //   delay: 1.3,
    // });

  }

  function thoughts(){
    const thoughtsConst = gsap.timeline({
      // repeatDelay: 1,
      scrollTrigger: {
        trigger: ".problems-container",
        scrub: true,
        // markers: true,
        start: "-=2% 45%",
        end: "+=300px",
      },
    })

    ScrollTrigger.create({
      trigger: ".problems_title",
      start: "-60px top",
      end: "+=350%",
      pin: true,
    })

    thoughtsConst.from('.problems_title', {fontSize: 56, duration: 1})
    if(window.innerWidth >= 1600){
      thoughtsConst.to('.problems_title', {x: '-20%', duration: 1})
      // console.log(window.innerWidth)
      // console.log('1')
    } else{
      thoughtsConst.to('.problems_title', {x: '-1%', duration: 1})
      // console.log(window.innerWidth)
      // console.log('2')
    }
    thoughtsConst.from('.problems_slider', {opacity: 0, duration: 1})
  }

  function addictionAnimation(){
    const addictionLoadingAnimation = gsap.timeline({
      repeatDelay: 1,
      scrollTrigger: {
        trigger: ".addiction-section",
        scrub: true,
        // markers: true,
        start: "top 50%",
        end: "+=400px",
      },
    })

    const addictionLoadingAnimation2 = gsap.timeline({
      repeatDelay: 1,
      scrollTrigger: {
        trigger: ".addiction-section",
        scrub: true,
        // markers: true,
        start: "20% 50%",
        end: "+=300px",
      },
    })
    const addictionLoadingAnimationVideo = gsap.timeline({
      repeatDelay: 1,
      scrollTrigger: {
        trigger: ".addiction-section",
        scrub: true,
        // markers: true,
        start: "20% 50%",
        end: "+=200px",
      },
    })

    // let splitHeroTitle = new SplitText(".addiction_title", {type: "chars"});
    // let splitHeroSubTitle = new SplitText(".addiction_paragraph", {type: "chars"});
    
    // addictionLoadingAnimation.from(splitHeroTitle.chars, {
    //   duration: 1, 
    //   y: 100, 
    //   autoAlpha: 0, 
    //   stagger: 0.01,
    //   delay: 1.3,
    // }).from(splitHeroSubTitle.chars, {
    //   duration: 1, 
    //   y: 100, 
    //   autoAlpha: 0, 
    //   stagger: 0.01,
    //   delay: 1.3,
    // })

    addictionLoadingAnimation2.fromTo('.transition_gsap', {
      opacity: 0, 
      y:40,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
    })

    addictionLoadingAnimationVideo.fromTo('.addiction_video', {
      opacity: 0, 
      y:40,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
    })
  }

  function timelineAnimation(){
    const timelineLoadingAnimation = gsap.timeline({
      repeatDelay: 1,
      duration: 59,
      scrollTrigger: {
        trigger: ".timeline-section",
        scrub: true,
        // markers: true,
        start: "-=5% 50%",
        end: "+=400px",
      },
    })

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
          end: "+45%",
          toggleClass: "active",
          // markers: true,
          // pin: true,
        },
      });
    });
  }

  function episodesAnimation(){
    const episodesLoadingAnimation = gsap.timeline({
      repeatDelay: 1,
      scrollTrigger: {
        trigger: ".episodes-section",
        scrub: true,
        // markers: true,
        start: "-=5% 50%",
        end: "+=400px",
      },
    })

    // let splitHeroTitle = new SplitText(".episodes_title", {type: "chars"});
    // let splitHeroSubTitle = new SplitText(".episodes_subtitle", {type: "chars"});
    
    // episodesLoadingAnimation.from(splitHeroTitle.chars, {
    //   duration: 3, 
    //   y: 100, 
    //   autoAlpha: 0, 
    //   stagger: 0.05,
    //   delay: 2,
    // }).from(splitHeroSubTitle.chars, {
    //   duration: 3, 
    //   y: 100, 
    //   autoAlpha: 0, 
    //   stagger: 0.05,
    //   delay: 2,
    // }).from('.episodes_transition-screen', {
    //   opacity: 0,
    //   y: 40,
    //   duration: 3,
    //   delay:1,
    // })

  }

  function commentsAnimation(){
    const commentsLoadingAnimation = gsap.timeline({
      repeatDelay: 1,
      scrollTrigger: {
        trigger: ".reviews-section",
        scrub: true,
        // markers: true,
        start: "5% 50%",
        end: "+=400px",
      },
    })

    commentsLoadingAnimation.fromTo('.reviews-section', {
      // opacity: 0,
      // y:-30,
    }, {
      // y:0,
      // opacity: 1,
      // delay: 1,
      // duration:2,
    })
    .fromTo('.reviews_article', {
      opacity:0,
      x: -50,
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
    }).fromTo('.reviews_comments', {
      opacity:0,
      x: 50,
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
    })
  }

  headerAnimation()
  addictionAnimation()
  timelineAnimation()
  episodesAnimation()
  commentsAnimation()
  thoughts()

  //* Hero Section Block Expansion -------------------------
  const blockExpansion = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero_big-pic",
        scrub: true,
        //   pin: true,
          // markers: true,
        start: "35% 50%",
        end: "+=400px",
      },
    })
    .to(".hero_big-pic", {
      scale: 2.2,
      ease: "none",
    });

  //* Hero Section Black Video -------------------------
  const videos = gsap.utils.toArray(".vid");

  videos.forEach(function (video, i) {
    ScrollTrigger.create({
      trigger: video,
      start: "40% 50%",
      end: "bottom top",
      // markers: true,
      onEnter: () => video.play(),
      onEnterBack: () => video.play(),
      onLeave: () => video.pause(),
      onLeaveBack: () => video.pause(),
    });
  });

  //* Comments Transition -------------------------
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

  //* Episodes Preview Block Transition -------------------------
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

  //* Pin Series section -------------------------
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

  //* Horizontal Reviews Block Animation -------------------------
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

});
