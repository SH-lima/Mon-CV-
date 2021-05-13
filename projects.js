const sr=ScrollReveal( {
    
    duration : 2000 ,

 } );
 ScrollReveal().reveal( '#formations h4 ',{
        delay : 10
 }, 500);
 ScrollReveal().reveal( '#formations p ',{
    delay : 10
});





// dark mode 
const darkMode = document.querySelector(".darkMode")
const buttondarkMode = document.querySelector(".darkMode i")
const section = document.querySelectorAll("section")
const titleh3 = document.querySelector("h3")
const titleh4 = document.querySelector("h4")
const cards = document.querySelectorAll(".card")
const mainDark = document.querySelector("main")
const headerDark = document.querySelector("nav")
const navDark = document.querySelector("#navBar")
const footerDark = document.querySelector("footer")
const navElements = document.querySelectorAll("#navBar li")

darkMode.addEventListener("click", ()=>{
    console.log("hi")
    buttondarkMode.classList.toggle("changeToDark")
    titleh4.classList.toggle("h4Dark")
    
    for (let index = 0; index < section.length; index++) {
        const element = section[index];
        element.classList.toggle("bodyDark")
    }
    for (let a = 0; a < cards.length; a++) {
        const card = cards[a];
        card.classList.toggle("cardDark")
        
    }
    for (let b = 0; b < navElements.length; b++) {
        const element = navElements[b];
        element.classList.toggle('bleuDark')
        
    }
    // debugger; 
    mainDark.classList.toggle("mainDark")
    headerDark.classList.toggle("headerDark")
    navDark.classList.toggle('bleuDark')
    footerDark.classList.toggle('bleuDark')
})