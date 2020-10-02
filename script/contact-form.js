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
            paragraphPopup.innerHTML = (`Merci ${optionValue} ${nameUser}, une réponse te sera envoyée au ${phoneUser} ou sur ton addresse mail: ${email} 💋`);
            citationPopup.innerHTML = '"Si tu veux jouer avec moi, j\'espère que tu connais les règles..."';
        }

        else if (optionValue === "Madame") {
            titlePopup.innerHTML = "Merci Beautée!"
            paragraphPopup.innerHTML = (`Merci ${optionValue} ${nameUser}, une réponse te sera envoyée au ${phoneUser} ou sur ton addresse mail: ${email} 💋`);
            citationPopup.innerHTML = '"Astuce beauté? Hydratez votre peau avec les larmes de vos ennemi(e)s!"';
        }

        else {
            titlePopup.innerHTML = "Merci membre du peuple des Vastayas"
            paragraphPopup.innerHTML = (`Merci ${nameUser}, une réponse te sera envoyée au ${phoneUser} ou sur ton addresse mail: ${email} 💋`);
            citationPopup.innerHTML = '"Révélez moi vos secrets..."';
        }

    }
    else{
        if(optionValue === "Choisir"){
            menuSelect.style.borderColor = "red";
        }
        else if(nameUser === ""){
            nameBox.style.borderColor = "red";
        }
        else if(email === ""){
            emailBox.style.borderColor = "red";
        }
        else if(textarea === ""){
            textareaBox.style.borderColor = "red";
        }
        else{
            alert("Erreur");
        }
    } 
});




