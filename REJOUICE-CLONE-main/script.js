function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();


function cursorEffect() {
    var page1Content = document.querySelector("#page1-content");

    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            x: dets.x,
            y: dets.y
        });
    });

    page1Content.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            scale: 1,
            opacity: 1
        });
    });

    page1Content.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            scale: 0,
            opacity: 0
        });
    });
}
cursorEffect();


function page2Animation() {
    gsap.from("#page2-content > .elem > h1", {
        y: 120,
        stagger: 0.4,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            // markers: true,
            start: "top 40%",
            end: "top 30%",
            scrub: 2
        }
    });

    gsap.from("#page2-header h3", {
        y: 300,
        stagger: 0.4,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            // markers: true,
            start: "top 40%",
            end: "top 30%",
            scrub: 2
        }
    });
}
page2Animation();


function page4Animation() {
    gsap.from("#page4-content > .elem > h1", {
        y: 120,
        stagger: 0.4,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 60%",
            scrub: 2
        }
    });

    gsap.from("#page4-header h3", {
        y: 300,
        stagger: 0.4,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 60%",
            scrub: 2
        }
    });
}
page4Animation();


function page5Animation() {
    function counter(){
        var num = 10;
        setInterval(()=>{
            num-=1;
            if(num>1){
                document.querySelector("#cover-text > h1").innerHTML = `${num} seats`;
            }
            else{
                num = 1;
                document.querySelector("#cover-text > h1").innerHTML = `${num} seats`;
            }
        }, 100);
    }
    gsap.from("#page5 > h1", {
        duration: 1,
        delay: 1,
        onStart: counter, 
        scrollTrigger: {
            scroller: "#main",
            trigger: "#cover-text",
            start: "top 90%",
            end: "top 90%",
            // markers: true
        }
    });
}
page5Animation();


function page6Animation() {
    gsap.from("#page6-content > .elem > h1", {
        y: 120,
        stagger: 0.4,
        duration: 1,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            // markers: true,
            start: "top 60%",
            end: "top 50%",
            scrub: 2
        }
    });

    gsap.from("#page6-header h3", {
        y: 300,
        stagger: 0.4,
        duration: 1,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            // markers: true,
            start: "top 60%",
            end: "top 50%",
            scrub: 2
        }
    });
}
page6Animation();


function swiperEffect() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });
}
swiperEffect();


function loaderEffect() {
    var tl = gsap.timeline();

    tl.from("#loader > h3", {
        x: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        delay: 0.5
    });
    
    tl.to("#loader > h3", {
        x: -30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        delay: 0.5
    });
    
    tl.to("#loader", {
        opacity: 0,
        y: "-100%"
    });
    
    tl.from("#page1-content > h1 > span", {
        y: 300,
        opacity: 0,
        stagger: 0.1,
        delay: -0.5
    });
    
    tl.to("#loader", {
        display: "none"
    });
}
loaderEffect();


function footerAnimation() {
    gsap.from("#footer-top-left > h3, #footer-top-left > button", {
        x: -200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            scroller: "#main",
            trigger: "footer",
            start: "top 60%",
            end: "top 50%",
            scrub: 2,
            // markers: true
        }
    });
    
    gsap.from("#footer-top-right h3", {
        x: 200,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            scroller: "#main",
            trigger: "footer",
            start: "top 60%",
            end: "top 50%",
            scrub: 2,
            // markers: true
        }
    });
    
    gsap.from("#footer-mid-left > h4", {
        x: -200,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            scroller: "#main",
            trigger: "footer",
            start: "top 60%",
            end: "top 50%",
            scrub: 2,
            // markers: true
        }
    });
    
    gsap.from("#footer-mid-right > h4", {
        x: 200,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            scroller: "#main",
            trigger: "footer",
            start: "top 60%",
            end: "top 50%",
            scrub: 2,
            // markers: true
        }
    });
    
    gsap.from("#footer-bottom > h1 > span", {
        y: 300,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#footer-bottom",
            start: "top 75%",
            end: "top 65%",
            scrub: 2,
            // markers: true
        }
    });
}
footerAnimation();