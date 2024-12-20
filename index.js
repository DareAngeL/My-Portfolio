// require("./components/IndicatorButtons")
const { default: API } = require("./projects/API")
const { default: Desktop } = require("./projects/Desktop")
const { default: Mobile } = require("./projects/Mobile")
const { default: Web } = require("./projects/Web")

const navLinks = document.querySelectorAll(".nav-link")
const innerProjects = document.querySelector(".project-inner")

const projectItems = () => {

    let allProjectsCard = [...Web.Cards, ...Mobile.Cards, ...Desktop.Cards, ...API.Cards]

    // sort by date created
    allProjectsCard = allProjectsCard
                        .sort((a, b) => b.dateCreated - a.dateCreated)
                        .map(card => card.element).join("\n")

    return `
    <div>
        <div class="row d-flex justify-content-center">
            ${allProjectsCard}
        </div>
    </div>
    `
}

{/* <div class="carousel-item">
    <div class="row d-flex justify-content-center">
        ${Web.Projects()}
    </div>
</div>

<div class="carousel-item">
    <div class="row d-flex justify-content-center">
        ${Mobile.Projects()}
    </div>
</div>

<div class="carousel-item">
    <div class="row d-flex justify-content-center">
        ${Desktop.Projects()}
    </div>
</div>

<div class="carousel-item">
    <div class="row d-flex justify-content-center">
        ${API.Projects()}
    </div>
</div> */}

innerProjects.innerHTML = projectItems()

//#region event listener for scrolling
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
//#endregion