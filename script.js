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

// pin
