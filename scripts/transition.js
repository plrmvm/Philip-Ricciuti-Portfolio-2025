// ignore missing import statement warnings

document.addEventListener('DOMContentLoaded', () => {
    const ease = "power4inOut" // Variable for easing
    const links = [ // List of links to allow transitions
        "index.html",
        "about.html",
        "contact.html",
        "photography.html"
    ]
    function pageTransitionLoad() { // Function for page loading
        gsap.to(".transition-block-edge", {y: 2000, duration: .6, ease: ease, delay: .25 });
        gsap.to(".transition-block", {y: 2000, duration: .6, ease: ease, delay: .15 });
        let header = SplitText.create("h1", {type: "chars"});
        gsap.from(header.chars, {x: -20, autoAlpha: 0, duration: .25, ease: ease, stagger: .075, delay: .3,
        });
    }
    function pageTransitionExit() { // Function for page exit
        return new Promise((resolve) => {
            gsap.to(".transition-block-edge", {
                y: 0,
                duration: .6,
                ease: ease,
                delay: 0});
            gsap.to(".transition-block", {
                y: 0,
                duration: .6,
                ease: ease,
                delay: .15,
                onComplete: resolve });
        })
    }
    document.querySelectorAll("a").forEach(link => {
        // if href attribute is found in links, then trigger page exit animation
        link.getAttribute("href") && link.addEventListener("click", e => {
            e.preventDefault()
            if (links.includes(link.getAttribute("href"))) {
                pageTransitionExit().then(() => {
                    window.location.href = e.target.getAttribute("href")
                })
                }
            else {
                // window.location.href = e.target.getAttribute("href")
                window.open(e.target.getAttribute("href"), "_blank")
            }
            })
        })
    pageTransitionLoad()
})