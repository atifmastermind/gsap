// gsap.to(".box", { rotation: 360, x: 100, duration: 1 });
// gsap.to(".box", { scale: 2, duration: 1, delay: 1, stagger: 0.2 });
// gsap.from(".box", { opacity: 0, y: 50, duration: 1, delay: 1, stagger: 0.2, repeat: -1, yoyo: true });

// gsap.to(".box.green", { rotation: 360, x: 100, duration: 1, delay: 1.5 });
// gsap.to(".box.blue", { rotation: 360, x: 100, duration: 2, delay: 2.5, backgroundColor: "red" });

// ! using timeline
// let tl = gsap.timeline();

// tl.to(".box.green", {
//   rotation: 360,
//   x: 100,
//   duration: 1,
//   delay: 1.5,
// });
// tl.to(".box.purple", {
//   rotation: 360,
//   x: 100,
//   duration: 1,
//   delay: 1.5,
// });
// tl.to(".box.blue", {
//   rotation: 360,
//   x: 100,
//   duration: 1,
//   delay: 1.5,
// });

// let tl = gsap.timeline();

// tl.from("h2", {
//   y: -20,
//   opacity: 0,
//   duration: 1,
//   delay: 0.5,
// });
// tl.from("li", {
//   y: -20,
//   opacity: 0,
//   duration: 1,
//   delay: 0.5,
//   stagger: 0.3,
// });
// tl.from("h1", {
//   y: -20,
//   opacity: 0,
//   duration: 1,
//   delay: 0.5,
//   scale: 2,
// });

// ! scrollTrigger

// gsap.from(".green .box", {
//   scale: 0,
//   opacity: 0,
//   // delay: 1,
//   duration: 3,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#second .box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 2,
//   },
// });

// ! pin

// gsap.to("#page2 h1", {
//   transform: "translateX(-150%)",
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "body",
//     markers: true,
//     start: "top 0%",
//     end: "top -100%",
//     scrub: 2,
//     pin: true,
//   },
// });

// ! Create Slick SVG Animations

// let initPath = "M 10 100 Q 500 100 990 100";
// let finalPath = "M 10 100 Q 500 100 990 100";

// let string = document.querySelector("#string");
// string.addEventListener("mousemove", function (dets) {
//   initPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
//   gsap.to("svg path", {
//     attr: {
//       d: initPath,
//     },
//     duration: 0.2,
//     ease: "power3.out",
//     // stagger: 1,
//   });
// });
// string.addEventListener("mouseleave", function () {
//   gsap.to("svg path", {
//     attr: {
//       d: finalPath,
//     },
//     duration: 0.8,
//     ease: "elastic.out(1,0.1)",
//   });
// });

// ! Create cursor Animations

// let main = document.querySelector("#main");
// let cursor = document.querySelector("#cursor");
// let imageDiv = document.querySelector("#img");

// main.addEventListener("mousemove", function (dets) {
//   gsap.to(cursor, {
//     x: dets.x,
//     y: dets.y,
//     duration: 1,
//   });
// });

// imageDiv.addEventListener("mouseenter", function () {
//   cursor.innerHTML = "View More";
//   gsap.to(cursor, {
//     scale: 4,
//     backgroundColor: "gray",
//   });
// });
// imageDiv.addEventListener("mouseleave", function () {
//   cursor.innerHTML = "";

//   gsap.to(cursor, {
//     scale: 1,
//     backgroundColor: "black",
//   });
// });

// ! Create TimeLine Animation

let menu = document.querySelector("nav i");
let close = document.querySelector("#full i");

let tl = gsap.timeline();
tl.to("#full", {
  right: 0,
  duration: 0.5,
});

tl.from("#full a", {
  x: 150,
  duration: 0.6,
  stagger: 0.2,
  opacity: 0,
});
tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});
close.addEventListener("click", function () {
  tl.reverse();
});
