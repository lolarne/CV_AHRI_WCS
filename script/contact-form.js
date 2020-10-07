const popupMsg = document.querySelector('.popup');
const buttonSubmit = document.querySelector('#btnSubmit');
const titlePopup = document.getElementById('titlePopup');
const paragraphPopup = document.getElementById('paragraphPopup');
const form = document.getElementById('form');
const menuSelect = document.getElementById('select');


buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault();

    let optionValue = document.getElementById('select').value;
    let nameUser = document.getElementById('name').value;
    const nameBox = document.getElementById('name');
    let phoneUser = document.getElementById('phoneNbr').value;
    let email = document.getElementById('email').value;
    const emailBox = document.getElementById('email');
    let textarea = document.getElementById('message').value;
    const textareaBox = document.getElementById('message');
    let citationPopup = document.getElementById('citationPopup');


    if (nameUser != "" & email != "" & textarea != "" & optionValue != "Choisir") {

        popupMsg.style.display = "block";
        form.style.display = "none";

        if (optionValue === "Monsieur") {
            titlePopup.innerHTML = "Thanks Darling";
            citationPopup.innerHTML = '"Si tu veux jouer avec moi, j\'espère que tu connais les règles..."';


            if (phoneUser != "") {
                paragraphPopup.innerHTML = (`Merci ${optionValue} ${nameUser}, une réponse te sera envoyée au ${phoneUser} ou sur ton addresse mail : ${email} 💋`);
            }
            else {
                paragraphPopup.innerHTML = (`Merci ${optionValue} ${nameUser}, une réponse te sera envoyée sur ton addresse mail : ${email} 💋`);
            }

        }

        else if (optionValue === "Madame") {
            titlePopup.innerHTML = "Merci Beautée!"
            citationPopup.innerHTML = '"Astuce beauté ? Hydratez votre peau avec les larmes de vos ennemi(e)s !"';
            if (phoneUser != "") {
                paragraphPopup.innerHTML = (`Merci ${optionValue} ${nameUser}, une réponse te sera envoyée au ${phoneUser} ou sur ton addresse mail : ${email} 💋`);
            }
            else {
                paragraphPopup.innerHTML = (`Merci ${optionValue} ${nameUser}, une réponse te sera envoyée sur ton addresse mail : ${email} 💋`);
            }
        }

        else {
            titlePopup.innerHTML = "Merci membre du peuple des Vastayas"
            citationPopup.innerHTML = '"Révélez moi vos secrets..."';
            if (phoneUser != "") {
                paragraphPopup.innerHTML = (`Merci ${nameUser}, une réponse te sera envoyée au ${phoneUser} ou sur ton addresse mail : ${email} 💋`);
            }
            else {
                paragraphPopup.innerHTML = (`Merci ${nameUser}, une réponse te sera envoyée sur ton addresse mail : ${email} 💋`);
            }
        }

    }
    else {

        if (optionValue === "Choisir") {
            menuSelect.style.borderColor = "red";
            menuSelect.addEventListener('click', function () {
                menuSelect.style.borderColor = "black";
            });
        }

        else if (nameUser === "") {
            nameBox.style.borderColor = "red";
            nameBox.addEventListener('click', function () {
                nameBox.style.borderColor = "black";
            });
        }
        else if (email === "") {
            emailBox.style.borderColor = "red";
            emailBox.addEventListener('click', function () {
                emailBox.style.borderColor = "black";
            });
        }

        else if (textarea === "") {
            textareaBox.style.borderColor = "red";
            textareaBox.addEventListener('click', function () {
                textareaBox.style.borderColor = "black";
            });
        }




        else {
            alert("Erreur");
        }
    }
});

const audioForm = () => {
    let optionValueAudio = document.getElementById('select').value;
    console.log("test");
    if (optionValueAudio === "Monsieur") {
        const audioMonsieur = new Audio();
        audioMonsieur.src = "AudioCitations/SiTuVeuxJouerAvecMoi.mp3";
        audioMonsieur.play();
    }else if(optionValueAudio === "Madame"){
        const audioMadame = new Audio();
        audioMadame.src = "AudioCitations/AstuceBeaute.mp3";
        audioMadame.play();
    }else{
        const audioAutre = new Audio();
        audioAutre.src = "AudioCitations/RévélezMoiVosSecrets.mp3";
        audioAutre.play();
    }
}
