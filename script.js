// alert("nino");
var nome = prompt("come ti chiami?");
console.log(nome);
document.getElementById('nome-utente').innerHTML=" " + nome ;
var cognome =prompt("qual'e' il tuo cognome?")
console.log(cognome);
document.getElementById("cognome-utente").innerHTML=" " + cognome;
var domandaSegreta = prompt("qual'e' il tuo colore preferito?");
console.log(domandaSegreta);
document.getElementById("Domanda-segreta").innerHTML = " " + domandaSegreta
// var password= nome + cognome + domandaSegreta + "19";
// console.log(password);
// document.getElementById("passwordgenerata").innerHTML =" " + password;
var numero=(prompt("Scegli un numero"));
console.log(numero);
var password= nome + cognome + domandaSegreta + numero;
document.getElementById("passwordgenerata").innerHTML=" " + password;
// bonus
var annoDiNascita = parseInt(prompt("Qual'e l'anno di nascita tuo?"));

console.log(annoDiNascita);
var annoCorrente = 2019
var laTuaEta = (annoDiNascita -annoCorrente);
document.getElementById("tuoianni").innerHTML= laTuaEta
