window.onload = function () {
    var tabelajedan=document.getElementById("prvatabela");
    var svekolone=tabelajedan.getElementsByClassName("kolonekolone");
    Pretraga.postaviElemente(svekolone);
  }

function Predmet(){
    var predmeti=document.getElementById("inputpolje2");
    Pretraga.pretragaPredmet(predmeti);
}

function Nastavnik(){
    var nastavnik=document.getElementById("inputpolje1");
    Pretraga.pretragaNastavnik(nastavnik);
}

function Godina(){
    var godine=document.getElementById("inputpolje3");
    Pretraga.pretragaGodina(godine);
}