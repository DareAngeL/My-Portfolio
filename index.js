
const navLinks = document.querySelectorAll(".nav-link")

const scrollHeight = document.documentElement.scrollHeight

window.addEventListener("scroll", () => {
    const rootElem = document.documentElement;
    const currentPos = window.scrollY || rootElem.scrollTop

    if (rootElem.scrollTop + window.innerHeight === rootElem.scrollHeight) {
        // User has scrolled to the bottom
        const selectedNavLink = document.querySelector(".selected")
        if (selectedNavLink) {
            selectedNavLink.classList.remove("selected")
        }

        document.querySelector("#contactme-a").classList.add("selected")
        return
    }

    const extraOffset = 90
    navLinks.forEach(navLink => {
        const sect = document.querySelector(navLink.getAttribute("href"))
        const sectPos = sect.offsetTop
        const sectHeight = sect.offsetHeight

        if (currentPos >= sectPos-extraOffset && currentPos < (sectPos-extraOffset) + sectHeight) {
            navLink.classList.add("selected")
        } else {
            navLink.classList.remove("selected")
        }
    })
})

// const homeAnchor = document.querySelector('#home-a')
// const aboutMeAnchor = document.querySelector('#aboutme-a')
// const projectAnchor = document.querySelector('#projects-a')
// const contactMeAnchor = document.querySelector('#contactme-a')

// const select = (invoker) => (e) => {
//     const highlightedAnchor = document.querySelector(".selected")
//     if (highlightedAnchor) {
//         highlightedAnchor.classList.remove("selected")
//         console.log(highlightedAnchor.classList)
//     }

//     invoker.classList.add("selected")
// }

// homeAnchor.addEventListener("click", select(homeAnchor))
// aboutMeAnchor.addEventListener("click", select(aboutMeAnchor))
// projectAnchor.addEventListener("click", select(projectAnchor))
// contactMeAnchor.addEventListener("click", select(contactMeAnchor))
