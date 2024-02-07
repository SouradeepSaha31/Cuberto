function locomotivescrolltrigger() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotivescrolltrigger();

flag = 0;
document.querySelector("#navright").addEventListener("click", function () {
  if (flag == 0) {
    document.querySelector("#slide-cover").style.display = "block";

    setTimeout(function () {
      document.querySelector("#slide-nav").style.transform = "translateX(0%)";
      document.querySelector("#slide-nav").style.opacity = 1;
      document.querySelector("#shadow").style.opacity = 0.5;

      document.querySelector("#navright #menu").style.width = "0px";
      document.querySelector("#navright #menu").style.opacity = 0;
      document.querySelector("#line1").style.top = "17px";
      document.querySelector("#line2").style.top = "17px";
      setTimeout(function () {
        document.querySelector("#line1").style.transform = "rotate(45deg)";
        document.querySelector("#line2").style.transform = "rotate(-45deg)";
      }, 200);
      document.querySelector("body").style.overflow = "hidden";
      flag = 1;
    }, 200);
  } else {
    document.querySelector("#slide-nav").style.transform = "translateX(100%)";
    document.querySelector("#slide-nav").style.opacity = 0;
    document.querySelector("#shadow").style.opacity = 0;

    document.querySelector("#navright #menu").style.width = "51px";
    document.querySelector("#navright #menu").style.opacity = 1;
    document.querySelector("#line1").style.transform = "rotate(0deg)";
    document.querySelector("#line2").style.transform = "rotate(0deg)";
    setTimeout(function () {
      document.querySelector("#line1").style.top = "13px";
      document.querySelector("#line2").style.top = "20px";
    }, 200);
    document.querySelector("body").style.overflow = "visible";
    flag = 0;

    setTimeout(function () {
      document.querySelector("#slide-cover").style.display = "none";
    }, 500);
  }
});

function bigtextanime() {
  gsap.from("nav", {
    opacity: 0,
    duration: 1,
    delay: 1,
  });
  gsap.from(
    ".center-line:nth-child(1) h1:nth-child(1), .center-line:nth-child(1) h1:nth-child(2), .center-line:nth-child(2) h1:nth-child(2), .center-line:nth-child(2) h1:nth-child(3), .center-line:nth-child(3) h1:nth-child(1), .center-line:nth-child(3) h1:nth-child(2)",
    {
      y: "100%",
      duration: 0.6,
      opacity: 0,
      delay: 1.5,
      stagger: 0.2,
    }
  );
  gsap.from("#small-vid", {
    scale: 0,
    opacity: 0,
    duation: 4,
    delay: 2,
  });
  gsap.from("#face", {
    scale: 0,
    opacity: 0,
    duation: 4,
    delay: 2,
  });
  gsap.from("#video-div", {
    // y:"200px",
    opacity: 0,
    duation: 10,
    delay: 2.5,
  });
}
bigtextanime();

var videocon = document.querySelectorAll("#page3 #video-con .col .video");
var video = document.querySelectorAll("#page3 #video-con .col .video video");
videocon.forEach(function (vico, vide) {
  var vid = video[vide];
  vico.addEventListener("mouseenter", function () {
    vid.play();
  });
  vico.addEventListener("mouseleave", function () {
    vid.pause();
    vid.currentTime = 0;
  });
});

function checkWindowWidth() {
  if (window.innerWidth <= 768) {
    var swiper = new Swiper("#page5 .mySwiper", {
      slidesPerView: 1.15,
      spaceBetween: 20,
      freeMode: true,
    });
  } else {
    var swiper = new Swiper("#page5 .mySwiper", {
      slidesPerView: 2.65,
      spaceBetween: 20,
      freeMode: true,
    });
  }
}
checkWindowWidth();
window.addEventListener("resize", checkWindowWidth);

function checkWindowWidth2() {
  if (window.innerWidth <= 768) {
    var swiper2 = new Swiper("#page6 .mySwiper", {
      slidesPerView: 1.4,
      spaceBetween: 10,
      freeMode: true,
    });
  } else {
    var swiper2 = new Swiper("#page6 .mySwiper", {
      slidesPerView: 4.2,
      spaceBetween: 10,
      freeMode: true,
    });
  }
}
checkWindowWidth2();
window.addEventListener("resize", checkWindowWidth2);

function scrolltrigger() {
  gsap.to("nav img, #navright #menu", {
    y: "-100px",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      // markers:true,
      start: "5% 3%",
      end: "5% 3%",
      scrub: 1,
    },
  });

  gsap.from("#page2 #center #video", {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2 #center #video",
      scroller: "#main",
      // markers:true,
      start: "0% 90%",
      end: "0% 90%",
      // scrub:1
    },
  });
  gsap.from("#page2 #center #button", {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2 #center #button",
      scroller: "#main",
      // markers:true,
      start: "0% 90%",
      end: "0% 90%",
      // scrub:1
    },
  });
  gsap.from("#page2 #center #text", {
    x: "200px",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2 #center #text",
      scroller: "#main",
      // markers:true,
      start: "0% 70%",
      end: "0% 70%",
      // scrub:1
    },
  });

  gsap.from("#page3 #text #center .line h1", {
    opacity: 0,
    y: "200px",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page3 #text #center",
      scroller: "#main",
      // markers:true,
      start: "50% 80%",
      end: "50% 80%",
      // scrub:1
    },
  });
  gsap.from("#page3 #text #center .line:nth-child(2) #small-vid video", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page3 #text #center",
      scroller: "#main",
      // markers:true,
      start: "50% 80%",
      end: "50% 80%",
      // scrub:1
    },
  });

  gsap.from("#page3 #video-con .col:nth-child(1) .video:nth-child(1)", {
    y: "50px",
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page3 #video-con .col:nth-child(1) .video:nth-child(1)",
      scroller: "#main",
      // markers:true,
      start: "10% 90%",
      end: "10% 90%",
      // scrub:1
    },
  });
  gsap.from("#page3 #video-con .col:nth-child(2) .video:nth-child(1)", {
    y: "50px",
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page3 #video-con .col:nth-child(2) .video:nth-child(1)",
      scroller: "#main",
      // markers:true,
      start: "10% 90%",
      end: "10% 90%",
      // scrub:1
    },
  });
  gsap.from("#page3 #video-con .col:nth-child(1) .video:nth-child(2)", {
    y: "50px",
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page3 #video-con .col:nth-child(1) .video:nth-child(2)",
      scroller: "#main",
      // markers:true,
      start: "10% 90%",
      end: "10% 90%",
      // scrub:1
    },
  });
  gsap.from("#page3 #video-con .col:nth-child(2) .video:nth-child(2)", {
    y: "50px",
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page3 #video-con .col:nth-child(2) .video:nth-child(2)",
      scroller: "#main",
      // markers:true,
      start: "10% 90%",
      end: "10% 90%",
      // scrub:1
    },
  });
  gsap.from("#page3 #video-con .col:nth-child(1) .video:nth-child(3)", {
    y: "50px",
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page3 #video-con .col:nth-child(1) .video:nth-child(3)",
      scroller: "#main",
      // markers:true,
      start: "10% 90%",
      end: "10% 90%",
      // scrub:1
    },
  });
  gsap.from("#page3 #video-con .col:nth-child(2) .video:nth-child(3)", {
    y: "50px",
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page3 #video-con .col:nth-child(2) .video:nth-child(3)",
      scroller: "#main",
      // markers:true,
      start: "10% 90%",
      end: "10% 90%",
      // scrub:1
    },
  });
  gsap.from("#page3 #video-con .col:nth-child(1) .video:nth-child(4)", {
    y: "50px",
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page3 #video-con .col:nth-child(1) .video:nth-child(4)",
      scroller: "#main",
      // markers:true,
      start: "10% 90%",
      end: "10% 90%",
      // scrub:1
    },
  });
  gsap.from("#page3 #video-con .col:nth-child(2) .video:nth-child(4)", {
    y: "50px",
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page3 #video-con .col:nth-child(2) .video:nth-child(4)",
      scroller: "#main",
      // markers:true,
      start: "10% 90%",
      end: "10% 90%",
      // scrub:1
    },
  });
  gsap.from("#page3 #video-con .col:nth-child(1) .video:nth-child(5)", {
    y: "50px",
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page3 #video-con .col:nth-child(1) .video:nth-child(5)",
      scroller: "#main",
      // markers:true,
      start: "10% 90%",
      end: "10% 90%",
      // scrub:1
    },
  });

  gsap.from("#page4 #gap-maintain #text h1", {
    opacity: 0,
    y: "100px",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page4 #gap-maintain #text",
      scroller: "#main",
      // markers:true,
      start: "10% 80%",
      end: "10% 80%",
      // scrub:1
    },
  });
  gsap.from("#page4 #gap-maintain #vid-text #vid video", {
    scale: 0,
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page4 #gap-maintain #vid-text #vid",
      scroller: "#main",
      // markers:true,
      start: "20% 80%",
      end: "20% 80%",
      // scrub:1
    },
  });
  gsap.from("#page4 #gap-maintain #vid-text #sm-text h5", {
    x: "200px",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4 #gap-maintain #vid-text #sm-text",
      scroller: "#main",
      // markers:true,
      start: "0% 70%",
      end: "0% 70%",
      // scrub:1
    },
  });

  gsap.from("#page5 #text h1", {
    opacity: 0,
    y: "100px",
    duration: 0.8,
    scrollTrigger: {
      trigger: "#page5 #text",
      scroller: "#main",
      // markers:true,
      start: "20% 80%",
      end: "20% 80%",
      // scrub:1
    },
  });
  gsap.from("#page5 .swiper", {
    opacity: 0,
    x: "100px",
    duration: 0.8,
    scrollTrigger: {
      trigger: "#page5 .swiper",
      scroller: "#main",
      // markers:true,
      start: "20% 80%",
      end: "20% 80%",
      // scrub:1
    },
  });
  gsap.from("#page5 #sm-text>h4", {
    x: "100px",
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page5 #sm-text",
      scroller: "#main",
      // markers:true,
      start: "40% 80%",
      end: "40% 80%",
      // scrub:1
    },
  });
  gsap.from("#page5 #sm-text #button", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page5 #sm-text",
      scroller: "#main",
      // markers:true,
      start: "40% 80%",
      end: "40% 80%",
      // scrub:1
    },
  });

  gsap.from("#page6 .swiper", {
    opacity: 0,
    x: "100px",
    duration: 0.8,
    scrollTrigger: {
      trigger: "#page6 .swiper",
      scroller: "#main",
      // markers:true,
      start: "20% 80%",
      end: "20% 80%",
      // scrub:1
    },
  });

  gsap.from("#page7 .ops #heading h4", {
    x: "50px",
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page7 .ops #heading",
      scroller: "#main",
      // markers:true,
      start: "10% 80%",
      end: "10% 80%",
      // scrub:1
    },
  });
  gsap.from("#page7 .ops .op", {
    transform: "scaleX(0)",
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page7 .ops",
      scroller: "#main",
      // markers:true,
      start: "50% 80%",
      end: "50% 80%",
      // scrub:1
    },
  });
  gsap.from("#page7 #twobox .box:nth-child(1)>h4", {
    x: "50px",
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#page7 #twobox .box:nth-child(1)",
      scroller: "#main",
      // markers:true,
      start: "10% 80%",
      end: "10% 80%",
      // scrub:1
    },
  });
  gsap.from("#page7 #twobox .box:nth-child(1)>#button", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#page7 #twobox .box:nth-child(1)",
      scroller: "#main",
      // markers:true,
      start: "10% 80%",
      end: "10% 80%",
      // scrub:1
    },
  });
  gsap.from("#page7 #twobox .box:nth-child(2)>h4", {
    x: "50px",
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#page7 #twobox .box:nth-child(2)",
      scroller: "#main",
      // markers:true,
      start: "10% 80%",
      end: "10% 80%",
      // scrub:1
    },
  });
  gsap.from("#page7 #twobox .box:nth-child(2)>#button", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#page7 #twobox .box:nth-child(2)",
      scroller: "#main",
      // markers:true,
      start: "10% 80%",
      end: "10% 80%",
      // scrub:1
    },
  });

  gsap.from("#page8 #footer #up #h1-wrap h1", {
    opacity: 0,
    y: "100px",
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page8 #footer #up #h1-wrap",
      scroller: "#main",
      // markers:true,
      start: "120% 80%",
      end: "120% 80%",
      // scrub:1
    },
  });
  gsap.from("#page8 #footer #up #button", {
    opacity: 0,
    y: "100px",
    transform: "rotate(40deg)",
    duration: 0.6,
    scrollTrigger: {
      trigger: "#page8 #footer #up #h1-wrap",
      scroller: "#main",
      // markers:true,
      start: "120% 80%",
      end: "120% 80%",
      // scrub:1
    },
  });
  gsap.from("#page8 #footer #down #button", {
    // opacity:0,
    transform: "scaleX(0)",
    duration: 0.8,
    // delay:1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#page8 #footer #down",
      scroller: "#main",
      // markers:true,
      start: "20% 95%",
      end: "20% 95%",
      // scrub:1
    },
  });
  gsap.from("#page8 #footer #down #h4-wraper", {
    opacity: 0,
    x: "-50px",
    duration: 0.8,
    scrollTrigger: {
      trigger: "#page8 #footer #down",
      scroller: "#main",
      // markers:true,
      start: "20% 95%",
      end: "20% 95%",
      // scrub:1
    },
  });
}
scrolltrigger();

var mousefollow = document.querySelector("#mousefollower");
var main = document.querySelector("#main");
var face = document.querySelector("#face");
var slidecover = document.querySelector("#slide-cover");
var nav = document.querySelector("nav");

//magneteffect -------------------------------------------------------------------------------

document.querySelector("#lines").addEventListener("mouseenter", function () {
  mousefollow.style.transform = "scale(5)";
  document.querySelector("#line1").style.backgroundColor = "#fff";
  document.querySelector("#line2").style.backgroundColor = "#fff";
});
document.querySelector("#lines").addEventListener("mouseleave", function () {
  mousefollow.style.transform = "scale(1)";
  document.querySelector("#line1").style.backgroundColor = "#808080";
  document.querySelector("#line2").style.backgroundColor = "#808080";
});

//face ---------------------------------------------------------------------------------

document.querySelector("#face").addEventListener("mouseenter", function () {
  mousefollow.style.backgroundColor = "#fff";
});
document.querySelector("#face").addEventListener("mouseleave", function () {
  mousefollow.style.backgroundColor = "#000";
});

//low-opacity -------------------------------------------------------------------------------

document
  .querySelector("#slide-cover #slide-nav #right")
  .addEventListener("mouseenter", function () {
    mousefollow.style.transform = "scale(5)";
    mousefollow.style.opacity = 0.5;
  });
document
  .querySelector("#slide-cover #slide-nav #right")
  .addEventListener("mouseleave", function () {
    mousefollow.style.transform = "scale(1)";
    mousefollow.style.opacity = 1;
  });

document
  .querySelector("#slide-cover #slide-nav #left")
  .addEventListener("mouseenter", function () {
    mousefollow.style.transform = "scale(5)";
    mousefollow.style.opacity = 0.5;
  });
document
  .querySelector("#slide-cover #slide-nav #left")
  .addEventListener("mouseleave", function () {
    mousefollow.style.transform = "scale(1)";
    mousefollow.style.opacity = 1;
  });

//color change page wise -----------------------------------------------------------------------

document.querySelector("#page3").addEventListener("mouseenter", function () {
  mousefollow.style.backgroundColor = "#fff";
});
document.querySelector("#page3").addEventListener("mouseleave", function () {
  mousefollow.style.backgroundColor = "#000";
});
document.querySelector("#page5").addEventListener("mouseenter", function () {
  mousefollow.style.backgroundColor = "#fff";
});
document.querySelector("#page5").addEventListener("mouseleave", function () {
  mousefollow.style.backgroundColor = "#000";
});
document.querySelector("#page7").addEventListener("mouseenter", function () {
  mousefollow.style.backgroundColor = "#fff";
});
document.querySelector("#page7").addEventListener("mouseleave", function () {
  mousefollow.style.backgroundColor = "#000";
});
document.querySelector("#page8").addEventListener("mouseenter", function () {
  mousefollow.style.backgroundColor = "#fff";
});
document.querySelector("#page8").addEventListener("mouseleave", function () {
  mousefollow.style.backgroundColor = "#000";
});

//video explore ----------------------------------------------------------------------------

document
  .querySelector("#page3 #video-con .col:nth-child(1) .video:nth-child(1)")
  .addEventListener("mouseenter", function () {
    mousefollow.style.width = "80px";
    mousefollow.style.height = "80px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 1;
  });
document
  .querySelector("#page3 #video-con .col:nth-child(1) .video:nth-child(1)")
  .addEventListener("mouseleave", function () {
    mousefollow.style.width = "10px";
    mousefollow.style.height = "10px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 0;
  });

document
  .querySelector("#page3 #video-con .col:nth-child(1) .video:nth-child(2)")
  .addEventListener("mouseenter", function () {
    mousefollow.style.width = "80px";
    mousefollow.style.height = "80px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 1;
  });
document
  .querySelector("#page3 #video-con .col:nth-child(1) .video:nth-child(2)")
  .addEventListener("mouseleave", function () {
    mousefollow.style.width = "10px";
    mousefollow.style.height = "10px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 0;
  });

document
  .querySelector("#page3 #video-con .col:nth-child(1) .video:nth-child(3)")
  .addEventListener("mouseenter", function () {
    mousefollow.style.width = "80px";
    mousefollow.style.height = "80px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 1;
  });
document
  .querySelector("#page3 #video-con .col:nth-child(1) .video:nth-child(3)")
  .addEventListener("mouseleave", function () {
    mousefollow.style.width = "10px";
    mousefollow.style.height = "10px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 0;
  });

document
  .querySelector("#page3 #video-con .col:nth-child(1) .video:nth-child(4)")
  .addEventListener("mouseenter", function () {
    mousefollow.style.width = "80px";
    mousefollow.style.height = "80px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 1;
  });
document
  .querySelector("#page3 #video-con .col:nth-child(1) .video:nth-child(4)")
  .addEventListener("mouseleave", function () {
    mousefollow.style.width = "10px";
    mousefollow.style.height = "10px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 0;
  });

document
  .querySelector("#page3 #video-con .col:nth-child(1) .video:nth-child(5)")
  .addEventListener("mouseenter", function () {
    mousefollow.style.width = "80px";
    mousefollow.style.height = "80px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 1;
  });
document
  .querySelector("#page3 #video-con .col:nth-child(1) .video:nth-child(5)")
  .addEventListener("mouseleave", function () {
    mousefollow.style.width = "10px";
    mousefollow.style.height = "10px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 0;
  });

document
  .querySelector("#page3 #video-con .col:nth-child(2) .video:nth-child(1)")
  .addEventListener("mouseenter", function () {
    mousefollow.style.width = "80px";
    mousefollow.style.height = "80px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 1;
  });
document
  .querySelector("#page3 #video-con .col:nth-child(2) .video:nth-child(1)")
  .addEventListener("mouseleave", function () {
    mousefollow.style.width = "10px";
    mousefollow.style.height = "10px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 0;
  });

document
  .querySelector("#page3 #video-con .col:nth-child(2) .video:nth-child(2)")
  .addEventListener("mouseenter", function () {
    mousefollow.style.width = "80px";
    mousefollow.style.height = "80px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 1;
  });
document
  .querySelector("#page3 #video-con .col:nth-child(2) .video:nth-child(2)")
  .addEventListener("mouseleave", function () {
    mousefollow.style.width = "10px";
    mousefollow.style.height = "10px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 0;
  });

document
  .querySelector("#page3 #video-con .col:nth-child(2) .video:nth-child(3)")
  .addEventListener("mouseenter", function () {
    mousefollow.style.width = "80px";
    mousefollow.style.height = "80px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 1;
  });
document
  .querySelector("#page3 #video-con .col:nth-child(2) .video:nth-child(3)")
  .addEventListener("mouseleave", function () {
    mousefollow.style.width = "10px";
    mousefollow.style.height = "10px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 0;
  });

document
  .querySelector("#page3 #video-con .col:nth-child(2) .video:nth-child(4)")
  .addEventListener("mouseenter", function () {
    mousefollow.style.width = "80px";
    mousefollow.style.height = "80px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 1;
  });
document
  .querySelector("#page3 #video-con .col:nth-child(2) .video:nth-child(4)")
  .addEventListener("mouseleave", function () {
    mousefollow.style.width = "10px";
    mousefollow.style.height = "10px";
    document.querySelector("#mousefollower h4:nth-child(1)").style.opacity = 0;
  });

//swiper drag --------------------------------------------------------------------------

document
  .querySelector("#page5 .swiper")
  .addEventListener("mouseenter", function () {
    mousefollow.style.width = "80px";
    mousefollow.style.height = "80px";
    document.querySelector("#mousefollower h4:nth-child(2)").style.opacity = 1;
  });
document
  .querySelector("#page5 .swiper")
  .addEventListener("mouseleave", function () {
    mousefollow.style.width = "10px";
    mousefollow.style.height = "10px";
    document.querySelector("#mousefollower h4:nth-child(2)").style.opacity = 0;
  });

document
  .querySelector("#page6 .swiper")
  .addEventListener("mouseenter", function () {
    mousefollow.style.width = "80px";
    mousefollow.style.height = "80px";
    document.querySelector("#mousefollower h4:nth-child(2)").style.opacity = 1;
    document.querySelector("#mousefollower h4:nth-child(2)").style.color =
      "#fff";
  });
document
  .querySelector("#page6 .swiper")
  .addEventListener("mouseleave", function () {
    mousefollow.style.width = "10px";
    mousefollow.style.height = "10px";
    document.querySelector("#mousefollower h4:nth-child(2)").style.opacity = 0;
    document.querySelector("#mousefollower h4:nth-child(2)").style.color =
      "#000";
  });

//mousemove -----------------------------------------------------------------------------

main.addEventListener("mousemove", function (dets) {
  mousefollow.style.left = dets.x + "px";
  mousefollow.style.top = dets.y + "px";
});
main.addEventListener("mouseenter", function () {
  mousefollow.style.scale = 1;
});
main.addEventListener("mouseleave", function () {
  mousefollow.style.scale = 0;
});

face.addEventListener("mousemove", function (dets) {
  mousefollow.style.left = dets.x + "px";
  mousefollow.style.top = dets.y + "px";
});
face.addEventListener("mouseenter", function () {
  mousefollow.style.scale = 1;
});
face.addEventListener("mouseleave", function () {
  mousefollow.style.scale = 0;
});

nav.addEventListener("mousemove", function (dets) {
  mousefollow.style.left = dets.x + "px";
  mousefollow.style.top = dets.y + "px";
});
nav.addEventListener("mouseenter", function () {
  mousefollow.style.scale = 1;
});
nav.addEventListener("mouseleave", function () {
  mousefollow.style.scale = 0;
});

slidecover.addEventListener("mousemove", function (dets) {
  mousefollow.style.left = dets.x + "px";
  mousefollow.style.top = dets.y + "px";
});
slidecover.addEventListener("mouseenter", function () {
  mousefollow.style.scale = 1;
});
slidecover.addEventListener("mouseleave", function () {
  mousefollow.style.scale = 0;
});

Shery.makeMagnet("#lines" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
