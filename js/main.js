// -------------Header-------------

let navbarItems = ["Home", "Product", "About", "Contact"]

let elHeader = document.querySelector(".site-header")

let elContainer = document.createElement("div") //container
let elHeaderInner = document.createElement("div") // haeder
let elLogoLink = document.createElement("a") //header__logo-link
let elLogoImg = document.createElement("img") //header__logo-img

let elHeaderList = document.createElement("ul") //header__list
let elLoginBtn = document.createElement("a") //header__login-btn
elContainer.classList.add("container")
elHeaderInner.classList.add("header")

elLogoLink.classList.add("header__logo-link")
elLogoLink.href = "/"

elLogoImg.classList.add("header__logo-img")
elLogoImg.src = "./images/logo.svg"
elLogoImg.width = "186"
elLogoImg.height = "58"
elLogoImg.alt = "Site Logo"

elHeaderList.classList.add("header__list")

elLoginBtn.classList.add("header__login-btn")
elLoginBtn.href = "/"
elLoginBtn.textContent = "Login"

navbarItems.forEach(item => {
    let elHeaderItem = document.createElement("li")
    let elHeaderItemLink = document.createElement("a")
    
    
    elHeaderItem.classList.add("header__item")
    elHeaderItemLink.classList.add("header__item-link")
    elHeaderItemLink.href = "/"
    elHeaderItemLink.textContent = item
    
    elHeaderList.appendChild(elHeaderItem)
    elHeaderItem.appendChild(elHeaderItemLink)
})

elHeader.appendChild( elContainer)
elContainer.appendChild( elHeaderInner)
elHeaderInner.append(elLogoLink, elHeaderList,elLoginBtn)
elLogoLink.appendChild(elLogoImg)


// --------------main__hero-------------

let elHero = document.querySelector(".hero-section")

let elContainer2 = document.createElement("div") //container
let elHeroInner = document.createElement("div") // hero
let elTitleWrapper = document.createElement("div") //hero__title-wrapper
let elImgWrapper = document.createElement("div") //hero__img-wrapper
elContainer2 = classList.add("container")
elHeroInner = classList.add("hero")
elTitleWrapper = classList.add("hero__title-wrapper")


let elTitle = document.createElement("h1") //hero__title
elTitle.textContent =  ("Work at the speed of thought")
let elParagaph = document.createElement("p") //hero__bottom-text
elParagaph.textContent =  ("Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.")
elHeroInner.append(elTitleWrapper, elImgWrapper)
let elImg = document.createElement("img") //hero__img
elImg.src = "./images/screens.png"
elImgWrapper.appendChild(elImg)

elTitle = classList.add("hero__title")
elParagaph = classList.add("hero__bottom-text")
elImgWrapper = classList.add("hero__img-wrapper")
elImg = classList.add("hero__img")


elHero.appendChild(elContainer2)
elContainer2.appendChild(elHeroInner)
elTitleWrapper.append(elTitle, elParagaph)