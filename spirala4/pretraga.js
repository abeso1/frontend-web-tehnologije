var Pretraga = function(){
var pretragaPredmet = function(inputpolje){

    var istaslova, redovi, kolona1, kolona2, tabela, tekst;

    tabela=document.getElementById("prvatabela");
    redovi=tabela.getElementsByClassName("redoviredovi");
    istaslova=inputpolje.value.toUpperCase();

    for(var i=0; i<redovi.length; i++){
        kolona1=redovi[i].getElementsByTagName("td")[0];
        kolona2=redovi[i].getElementsByTagName("td")[1];
        if(kolona1){
            tekst = kolona1.textContent || kolona1.innerText;
            if(tekst.toUpperCase().indexOf(istaslova) > -1){
                redovi[i].style.display= "";
            }
            else{
                redovi[i].style.display= "none";
            }
        }

        else if(kolona2){
            tekst = kolona2.textContent || kolona2.innerText;
            if(tekst.toUpperCase().indexof(istaslova) > -1){
                redovi[i].style.display= "";
            }
            else{
                redovi[i].style.display= "none";
            }
        }
    }
}
var pretragaNastavnik = function(inputpolje){

    var istaslova, redovi, kolona, tabela, tekst;

    tabela=document.getElementById("prvatabela");
    redovi=tabela.getElementsByClassName("redoviredovi");
    istaslova=inputpolje.value.toUpperCase();

    for(var i=0; i<redovi.length; i++){
        kolona=redovi[i].getElementsByTagName("td")[2];
        if(kolona){
            tekst = kolona.textContent || kolona.innerText;
            if(tekst.toUpperCase().indexOf(istaslova) > -1){
                redovi[i].style.display= "";
            }
            else{
                redovi[i].style.display= "none";
            }
        }
    }

}
var pretragaGodina = function(inputpolje){

    var inputpolje, redovi, tabela;

    tabela=document.getElementById("prvatabela");
    redovi=tabela.getElementsByClassName("redoviredovi");

    if(inputpolje=="1"){
        for(var i=10; i<18; i++){
          redovi[i].style.display= "none";
        }
        for(var i=0; i<10; i++){
            redovi[i].style.display= "block";
        }
    }
    else if(inputpolje=="'2'"){
        for(var i=10; i<18; i++){
            redovi[i].style.display= "block";
          }
        for(var i=0; i<10; i++){
            redovi[i].style.display= "none";
        }
    }
}
var postaviElemente = function(k){
    var redovi=k;
    for(var i=0; i<redovi.length; i++){
        redovi[i].style.display="";
    }
}

return{
    pretragaPredmet: pretragaPredmet,
    pretragaNastavnik: pretragaNastavnik,
    pretragaGodina: pretragaGodina,
    postaviElemente: postaviElemente
}
}();