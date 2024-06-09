gsap.registerPlugin(ScrollTrigger);

const colors = { "Black": "#08090a", "Chrysler blue": "#5711e4", "Platinum": "#eaeaea", "Periwinkle": "#cbc5ea", "Blush": "#d55672" }

function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue == 100) {
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;
        if (currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue + "%";

        let delay = Math.floor(Math.random() * 200) + 250;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
}

startLoader();

gsap.from(".circles", 2, {
    top: "-100%",
    ease: "elastic.out",
    delay: 0.5,
});

gsap.to(".circle-inner", 1, {
    width: "75px",
    height: "75px",
    ease: "power4.inOut",
    delay: 2,
})

gsap.to(".circle-inner-rotator", 1, {
    scale: 1,
    ease: "power4.inOut",
    delay: 2.5
})

gsap.to(".circles", 1.5, {
    rotation: 360,
    ease: "power4.inOut",
    delay: 3,
})

gsap.to(".block", 0.75, {
    display: "block",
    height: "200px",
    ease: "power4.inOut",
    delay: 4,
})

gsap.to(".block", 0.75, {
    width: "800px",
    ease: "power4.inOut",
    delay: 4.5,
})

gsap.fromTo(".container", {
    duration: 2,
    left: "100%",
    scale: 0.5,
    ease: "power4.inOut",
    delay: 4,
},
    {
        duration: 2,
        left: "50%",
        scale: 0.5,
        transform: "translateX(-50%)",
        ease: "power4.inOut",
        delay: 4,
    }
)

gsap.to(".block", 1.5, {
    width: "0px",
    ease: "power4.inOut",
    delay: 5,
})

gsap.to(".block", 1.5, {
    height: "0px",
    ease: "power4.inOut",
    delay: 6,
})

gsap.to(".circles", 1.5, {
    rotation: 0,
    ease: "power4.inOut",
    delay: 6.5,
})

gsap.to(".loader", 2.5, {
    scale: 0,
    ease: "power4.inOut",
    delay: 7,
})

gsap.to(".container", 2, {
    scale: 1,
    ease: "power4.inOut",
    delay: 7.5,
    "background-color": colors.Black,
})

// gsap.to(".greetings", 1, {
//     opacity:0,
//     display:"none",
//     "margin-bottom": "5rem",
//     ease: "power4.inOut",
//     delay: 9,
// })

gsap.to(".container", 1, {
    opacity: "0",
    "z-index": "-222",
    ease: "power4.inOut",
    delay: 9.5,
})

gsap.to(".contain", .5, {
    display: "block",
    ease: "power4.inOut",
    delay: 8,
    onComplete: someFunction,
})


gsap.to(".contain", .5, {
    opacity: "1",
    ease: "power4.inOut",
    delay: 9,
})


function someFunction() {
    const footer = document.querySelector(".footer");
    const lastCard = document.querySelector(".card.scroll");
    const pinnedSections = gsap.utils.toArray(".pinned");

    pinnedSections.forEach((section, index, sections) => {
        let img = section.querySelector(".img");
        console.log(section)
        console.log(img)
        let nextSection = sections[index + 1] || lastCard;
        let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;
        console.log(endScalePoint);
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end:
                    index == sections.length
                        ? `+=${lastCard.offsetHeight / 2}`
                        : footer.offsetTop - window.innerHeight,
                pin: true,
                pinSpacing: false,
                scrub: 1,
            }
        })

        gsap.fromTo(img, { scale: 1 }, {
            scale: 0.5,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: endScalePoint,
                scrub: 1,
            }
        })

        let video = document.getElementById("video");
        ScrollTrigger.create({
            trigger: document.body,
            start: "-50px",
            end: '+=450vh',
            scrub: 1,
            onUpdate: (self) => {
                let op = self.progress;
                video.style.opacity = 1 - op;
            },
            onEnter: () => video.play(),
            onEnterBack: () => video.play(),
            onLeave: () => video.pause(),
            onLeaveBack: () => video.pause(),
        });


    })
}


let video = document.getElementById("video");
video.addEventListener("play", (event) => {
    console.log("Video played")
    console.log(event)
    let scrollkoro = document.getElementById("scrollkoro");
    let playkoro = document.getElementById("videoplay");
    playkoro.style.display = "none"
    scrollkoro.style.display = "flex"

});

let clicker = document.querySelector("#birthday-clicker");
clicker.addEventListener('click', () => {
    gsap.to(".footer-content", 1, {
        opacity: "0",
        display: "none",
        "margin-top": "5rem",
        ease: "power4.inOut",
    })

    gsap.to("#birthday", 1, {
        "delay": 1,
        "display": "flex",
        ease: "power4.inOut",
    })


});

var animation = bodymovin.loadAnimation({
    wrapper: document.getElementById('birthday'), // Required
    path: 'https://lottie.host/23c59fa2-2ccc-41ba-8317-76f55d221fdc/p7WxPqoMfW.json', // Required
    animType: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
})
animation.setSpeed(0.6)

var balloonsAnim1 = bodymovin.loadAnimation({
    wrapper: document.getElementById('balloons-contain1'), // Required
    path: 'https://lottie.host/324fc2d8-8372-4441-b4fa-7d7d1a767219/qlHEVH8a5A.json', // Required
    animType: 'svg', // Required
    loop: true, // Optional
    autoplay: false, // Optional
})
balloonsAnim1.setSpeed(0.6)

var balloonsAnim2 = bodymovin.loadAnimation({
    wrapper: document.getElementById('balloons-contain2'), // Required
    path: 'https://lottie.host/324fc2d8-8372-4441-b4fa-7d7d1a767219/qlHEVH8a5A.json', // Required
    animType: 'svg', // Required
    loop: true, // Optional
    autoplay: false, // Optional
})
balloonsAnim2.setSpeed(0.6)

var birthdayMessage = document.getElementById('birthday-message');
let footerContent = document.querySelector(".footer-content");
let done = false;
animation.addEventListener("enterFrame", function (event) {
    if (event.currentTime > 40 && !done && footerContent.style.display == "none") {
        done = true
        gsap.to("#birthday-message", 2, {
            "opacity": 1,
            "scale": 1,
            ease: "power4.inOut",
        })
    }
})




var targetNode = document.getElementById('birthday');
var observer = new MutationObserver(function () {
    if (targetNode.style.display != 'none') {
        animation.goToAndPlay(0, true)
        balloonsAnim1.goToAndPlay(0, true)
        balloonsAnim2.goToAndPlay(0, true)
    }
});
observer.observe(targetNode, { attributes: true, childList: true });


