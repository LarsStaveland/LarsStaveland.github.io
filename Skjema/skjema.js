
function setup(){
let inpelevnummer = document.getElementById("elevnummer");
let inpfornavn = document.getElementById("fornavn");
 let inpetternavn= document.getElementById("etternavn");
 let inpklasse= document.getElementById("klasse");
 let inpalder= document.getElementById("alder");
let inpkontaktlærer= document.getElementById("kontaktlærer");
 let btnregistrer= document.getElementById ("lagre");

btnregistrer.addEventListener("click",lagreData);



function lagreData() {
let elevnr = inpelevnummer.value;
let fornavn = inpfornavn.value;
let etternavn= inpetternavn.value;
let klasse= inpklasse.value;
let alder= inpalder.value;
let kontaktlærer= inpkontaktlærer.value;
let info= {elevnr,fornavn,etternavn,klasse,alder,kontaktlærer};
localStorage.setItem(elevnr,JSON.stringify(info))
}
}