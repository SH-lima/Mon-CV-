// selectionner les onglets de la navbar 
const onglet = document.querySelector("#navBar li ")
const liens = document.querySelectorAll("#navBar li a ")
const lienLocation = location.href
// ceer une fonction qui permet de activer l'onglet en clickant 
for (let i = 0; i< liens.length; i++) {
    // lien.preventDefault();
if (liens[i].href == location.href){
    liens[i].classList.add("ongletActive") 
    console.log("hello")
}else if (liens[i].href != location.href){
    liens[i].classList.remove("ongletActive") 
}}
        





// ----------modal le bienvenue 
// selection l'element 
const modal = document.querySelector("#main")
// creer une fonction qui permet d'afficher le modal 
const afficheModal = () =>{
    // afficher la fenetre 
    modal.classList.remove('afficheMenu')
}
// appeler la fonction afficheModal apres 1.5 s de l'ouverture de site 
setTimeout(afficheModal, 2000)
// selection le bouton qui permet de fermer le modal 
const boutonFermer = document.querySelector("#close-btn")
// mettre un ecouteur qui permet de fermer le modan en clickant sur le bouton 
boutonFermer.addEventListener("click", ()=> {
    modal.classList.add('afficheMenu')
});



// fixer la navbar 
const navbar = document.querySelector("#navBar")
const main = document.querySelector("main")
   const navbarSetTop = navbar.offsetTop
window.addEventListener("scroll", ()=>{

    if(window.scrollY>= navbarSetTop){
       navbar.classList.add('fixe') 
    } else {
        navbar.classList.remove('fixe')    
    }
})




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
const button = document.querySelector("button")
const section = document.querySelectorAll("section")
const titleh3 = document.querySelector("h3")
const titleh4 = document.querySelector("h4")
const cards = document.querySelectorAll(".card")
const mainDark = document.querySelector("main")
const headerDark = document.querySelector("header")
const navDark = document.querySelector("#navBar")
const footerDark = document.querySelector("footer")
const navElements = document.querySelectorAll("#navBar li")

button.addEventListener("click", ()=>{
    
    titleh3.classList.toggle("h3Dark")
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
    debugger;
    mainDark.classList.toggle("mainDark")
    headerDark.classList.toggle("headerDark")
    navDark.classList.toggle('bleuDark')
    footerDark.classList.toggle('bleuDark')
})