/*ANIMATION SKILL BAR*/
window.addEventListener('transitionend', () => {
    let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '60%',
        '90%',
        '95%',
        '100%',
    ];

    progressBars.forEach((progress, index) => {
        progress.style.width = values[index];
    });
});

/*FICHIERS AUDIO*/
const audioExp = new Audio();
audioExp.src = "AudioCitations/LesMortels.mp3";

const audioComp = new Audio();
audioComp.src = "AudioCitations/JeNeFrimePas.mp3";

const audioFormation = new Audio();
audioFormation.src = "AudioCitations/LesVraisChasseursOntDesCrocs.mp3";

const audioHobbie = new Audio();
audioHobbie.src = "AudioCitations/ProfitonsEnPourSamuser.mp3";