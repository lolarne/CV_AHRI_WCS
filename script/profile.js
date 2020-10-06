 /*//CURSOR
let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"; 
});

//SURVOL SOCIAL MEDIA
const btnSM = document.querySelector('.social-media');
btnSM.addEventListener('mouseover', function(){
    cursor.style.cssText = "display: none";
})
*/

/*FICHIERS AUDIO*/
const audio1 = new Audio();
audio1.src ="AudioCitations/AhriCitation1.mp3";

/*FONCTIONS*/
const audioReponse = (audio, reponse) => {
    audio.play();
    const phrase = event.target;
    phrase.textContent = reponse;
}