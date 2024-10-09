const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//loader

// // GSAP loader animation with percentage count
// const loader = document.querySelector('.loader');
// const loadertimer = document.querySelector('.loadertimer');
// const mainContent = document.querySelector('.main-content');

// let loadPercent = 0;

// // Function to update the loader percentage
// function updateLoader() {
//     const interval = setInterval(() => {
//         if (loadPercent < 100) {
//             loadPercent++;
//             loadertimer.innerHTML = loadPercent + '%';
//         } else {
//             clearInterval(interval);
//             // Hide loader after reaching 100%
//             gsap.to(loader, { 
//                 opacity: 0, 
//                 duration: 1, 
//                 onComplete: function() {
//                     loader.style.display = 'none';
//                 } 
//             });
//         }
//     }, 50); // Adjust the speed (50ms) as needed
// }

// // Start the loader update function
// updateLoader();


//loader













    //Remove lines 41-55 for DEMO-2
    var counter = document.querySelector(".percent");

    TweenLite.set(counter, {
        xPercent: -5,
        yPercent: -5,
    });

    window.addEventListener("mousemove", moveCounter);

    function moveCounter(e) {
        TweenLite.to(counter, 0.5, {
            x: e.clientX,
            y: e.clientY,
        });
    }

    function progress() {
        var windowScrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var windowHeight = $(window).height();
        var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

        var $bgColor = progress > 99 ? "#F15025" : "#fff";
        var $textColor = progress > 99 ? "#fff" : "#fff";

        $(".counter_bar h1")
            .text(Math.round(progress) + "%")
            .css({ color: $textColor });

        $(".fill")
            .height(progress + "%")
            .css({ backgroundColor: $bgColor });
    }
    progress();
    $(document).on("scroll", progress);

    

const btnHamburguer = document.querySelector(".btn-hamburguer")
const menuBar = document.querySelector('.menu-bar')

window.addEventListener("scroll", (event) => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    
    const appearMoment = 0.05977165883143049;
    if (scrollPercentage >= appearMoment) {
        btnHamburguer.style.opacity = "1";
        btnHamburguer.style.scale = "1";
    }
    else {
        btnHamburguer.style.opacity = 0;
        btnHamburguer.style.scale = 0;
    }

})

const menuIcon = document.querySelector('.menu-icon');
const html = document.querySelector('html');

btnHamburguer.addEventListener("click", (event) => {
    menuBar.classList.toggle("menu-bar-right")
    menuIcon.classList.toggle('change')
    html.classList.toggle("stop-scrolling")
});

const setVisible = (elementOrSelector, visible) =>
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';



magnets = document.querySelectorAll(".magnetic")

magnets.forEach((magnet) => {
    if(window.innerWidth > 540) {
        magnet.addEventListener("mousemove", function(e) {
            const position = magnet.getBoundingClientRect();

            const x = e.pageX - window.scrollX - position.left-position.width/2
            const y = e.pageY - window.scrollY - position.top-position.height/2;

            magnet.style.transform = "translate(" + x * 0.3 + "px, "+ y * 0.5 + "px)";
            magnet.style.transition = "all 0s linear";
            magnet.classList.remove("shake")
            
        })
        magnet.addEventListener("mouseleave", function(e) {
            magnet.style.transition = "all 0.2s cubic-bezier(0, 0, 0.72, 0.21";
            magnet.style.transform = "translate(0px, 0px)";

        })
    }
});



// Audio

let soundButton = document.querySelector('.soundbutton'),
audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
soundButton.classList.toggle('paused')
audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
audio.pause()
}

//loader
// Loader
document.addEventListener("DOMContentLoaded", function () {
    const loaderContainer = document.querySelector('.loader-container');
    const loaderText = document.querySelector('.loader-text');
    const degree = document.querySelector('.degree1');
    const progressCircle = document.querySelector('.progress-ring__circle');
    const musicLoader = document.querySelector('.music-loader');

    // Show the loader
    loaderContainer.style.display = 'flex';

    // Start the loader
    startLoader();

    function startLoader() {
        // Play music (if needed, you can remove this if not applicable)
        // musicLoader.play();

        // Simulate loading progress
        let progress = 0;
        const loadingInterval = setInterval(() => {
            if (progress <= 100) {
                degree.textContent = `${progress}%`;

                // Calculate circle properties
                const circumference = 2 * Math.PI * 150; // Circle radius 150
                const offset = circumference - (progress / 100) * circumference;
                progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
                progressCircle.style.strokeDashoffset = offset;

                progress += 2; // Increased increment for faster progress
            } else {
                clearInterval(loadingInterval);
                // Start the reveal animation
                gsap.to(loaderText, { opacity: 0, duration: 0.2 });
                gsap.to(loaderContainer, {
                    opacity: 0,
                    duration: 0.2,
                    delay: 0.2,
                    onComplete: () => {
                        loaderContainer.style.display = 'none'; // Hide loader container
                        // Trigger the homescreen animation
                        homescreen(); // Call the homescreen function here
                    }
                });

                // Set the flag in sessionStorage to indicate that the loader has been shown
                sessionStorage.setItem('hasLoaded', 'true');
            }
        }, 50); // Decreased interval to 50ms for quicker updates
    }
});


// Homescreen animation function
function homescreen() {
    // GSAP animation to reveal nav items, simplified stagger
    gsap.from(".nav-links li", {
        duration: 0.4,  // Reduced time for quicker reveal
        opacity: 0,
        x: -15,  // Reduced translation to lessen the animation load
        stagger: 0.1,  // Quick stagger for faster reveal
        ease: "power1.out"  // Simple easing for smoothness
    });

    // Branding animation, slight delay but quicker transition
    gsap.from(".branding", {
        duration: 0.9,  // Shortened duration
        opacity: 0,
        scale: 0.7,  // Reduced scale effect
        ease: "power1.out",  // Lighter easing
        delay: 0.4
    });

    // GSAP reveal animation for note-home, resume-btn, and glass-text
    gsap.timeline()
        .from(".note-home h3", {
            opacity: 0,
            y: 50, 
            duration: 1,
            ease: "power2.out"
        })
        .from(".resume-btn", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out"
        }, "-=0.5")  // starts 0.5s earlier
        .from(".glass-text h1", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out"
        }, "-=0.5");  // starts 0.5s earlier
}

// Other functions remain unchanged
function page2() {
    gsap.registerPlugin(ScrollTrigger);

    // Define common ScrollTrigger properties
    const scrollTriggerOptions = {
        trigger: "#page2",
        toggleActions: "play none none reverse",
        scrub: 0.5,  // Smooth scrolling
    };

    // Text Animation
    gsap.to(".stagger-text", {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.2,  // Reduced stagger for smoother animation
        ease: "power2.inOut",
        scrollTrigger: {
            ...scrollTriggerOptions,
            start: "top 50%", 
            end: "bottom 90%",
        }
    });

    // Line Animation
    gsap.to(".linezer", {
        duration: 1,
        width: "90%",
        ease: "power2.inOut",
        scrollTrigger: {
            ...scrollTriggerOptions,
            start: "top 90%", 
            end: "bottom 10%",
        }
    });
}

// Function to handle animations for page3
function page3() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            start: "top 80%", 
            end: "bottom 20%", 
            toggleActions: "play none none reverse"
        }
    });

    tl.to("#page3", { duration: 0.2, opacity: 1, ease: "power1.inOut" })  // Smoother and shorter
      .to(".top-rights", { duration: 0.3, opacity: 1, ease: "power1.inOut" })  
      .from(".top-rights h1", { duration: 0.3, y: 25, stagger: 0.04, opacity: 0, ease: "power2.out" })  
      .to(".bottom-rights", { duration: 0.3, opacity: 1, ease: "power1.inOut" }, "-=0.15")  
      .from(".left-columns h1", { duration: 0.3, y: 25, stagger: 0.04, opacity: 0, ease: "power2.out" })  
      .from(".right-columns h1", { duration: 0.3, y: 25, stagger: 0.04, opacity: 0, ease: "power2.out" }, "-=0.25");
}

// Function to handle animations for page4
function page4() {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll effects for page4
    const scrollAnimation = gsap.to(".page4", {
        scrollTrigger: {
            trigger: ".page4",
            start: "top top",
            end: "+=2000", 
            scrub: true, 
            markers: false 
        },
        y: "-=1000", 
        ease: "none"
    });

    // Additional animations for page4
    gsap.from(".abu", {
        opacity: 0,
        x: -50,
        duration: 0.75, 
        delay: 0.2, 
        ease: "bounce.out",
        scrollTrigger: {
            trigger: ".abu",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
        }
    });

    gsap.from(".accordion-item", {
        opacity: 0,
        x: -100,
        scale: 0.9,
        duration: 0.75,
        stagger: 0.15,
        delay: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".accordion-item",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
        }
    });

    gsap.from(".solution-btn", {
        opacity: 0,
        scale: 0,
        duration: 0.75,
        delay: 1,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
            trigger: ".solution-btn",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
        }
    });

    // Trigger page6 animation after page4 scroll is complete
    page6();
}

// Function to handle animations for page6
function page6() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page6",
            start: "top 80%", // Start page6 animation when 80% of page6 is in view
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Stagger service box reveal for page6
    tl.from(".service-box h2, .service-box ul li", {
        opacity: 0,
        y: 40,
        stagger: {
            amount: 1,
            from: "start"
        },
        duration: 1.3,
        ease: "power4.out",
        delay: 1
    });
}

// Load all page animations in sequence
document.addEventListener("DOMContentLoaded", function() {
    page2();
    page3(); 
    page4(); // Ensure page4 animation runs after page2 and page3
});





