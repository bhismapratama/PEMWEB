let menu = document.querySelector('#menu-bar') //untuk ambil elemen id menu bar
let navbar = document.querySelector('.navbar') // untuk ambil elemen class navbar

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle') //mengambil bagian navbar ^^
})

let typed = new Typed('.typed', {
    strings: ['Lifelong Learner', 'College Student', 'Web Developer'],
    smartBackspace: true, // Default value
    typeSpeed: 70,
    loop: true,
    backDelay: 700,
    startDelay: 0,
});

const btnHtml = document.getElementById("html1")
const btnCss = document.getElementById("css3")
const btnJs = document.getElementById("js")
const btnNode = document.getElementById("nodejs")
let paragraf = document.getElementById("article")

btnHtml.addEventListener("click", () => {
    paragraf.innerHTML = `
    HTML is the only markup language 
    for building the structure of web pages. 
    HTML plays a role in the implementation of the code created 
    to be translated according to the computer flow 
    with the aim of displaying appropriate content and 
    look more attractive and can be reached by 
    internet media.
        <br/>
        <br/>
        <i>source: Dicoding</i>
    `
});

btnCss.addEventListener("click", () => {
    paragraf.innerHTML = `
    Websites look so boring and "horrible" 
    without CSS. CSS or Cascading Style Sheet 
    is a standard from W3C to manage the visualization of 
    files written in HTML. In this module, we will 
    learn the basic usage of it. To be precise, starting from creating 
    CSS files, its syntax structure rules, implementation techniques, 
    concepts, to applying basic styling such as 
    giving color to a text.
    <br/>
    <br/>
    <i>source: Dicoding</i>
    `
})

btnJs.addEventListener("click", () => {
    paragraf.innerHTML = `
    JavaScript is a programming language that is used 
    in website development to make it more dynamic and 
    interactive. If you have implemented 
    HTML and CSS on the website as the framework and skin, 
    then JavaScript also aims to improve the functionality of 
    web page. Even with JavaScript one can 
    create applications, tools, or even games on the web.
    <br/>
    <br/>
    <i>source: Dicoding</i>
    `
})

btnNode.addEventListener("click", () => {
    paragraf.innerHTML = `
    Node JS is a runtime environment for JavaScript 
    that is open-source and cross-platform. 
    With Node.js we can run JavaScript code 
    code anywhere, not just limited to the browser environment.
        <br/>
        <br/>
        <i>source: Dicoding</i>
    `
})

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}


var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
})
    .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1)
    }).add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
    }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });