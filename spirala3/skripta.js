//Spirala 3, ZADATAK 4
function zuta(k){
    //profesor Zeljko predaje 3 predmeta pa nam treba foor loop za sve njegove id
    if(k==1){
        for(var i=1; i<4; i++)
        document.getElementById("a"+i).style.backgroundColor="yellow";
    }
    //profesorica Vensada predaje 3 predmeta pa nam treba foor loop za sve njene id
    if(k==2){
        for(var i=4; i<7; i++)
        document.getElementById("a"+i).style.backgroundColor="yellow";
    }
    //profesor Vedran predaje 3 predmeta pa nam treba foor loop za sve njegove id
    if(k==3){
        for(var i=7; i<10; i++)
        document.getElementById("a"+i).style.backgroundColor="yellow";
    }
    //profesor Samir predaje 2 predmeta pa nam treba foor loop za sve njegove id
    if(k==4){
        for(var i=10; i<12; i++)
        document.getElementById("a"+i).style.backgroundColor="yellow";
    }
    //ostali profesori predaju po jedan predmet 
    else{
        document.getElementById("b"+k).style.backgroundColor="yellow";
    }
    //nigdje u postavci zadatka nije receno da treba da se vrati kako je bilo kada se skine mis sa neke osobe
}


//Spirala 3, ZADATAK 1
function slika(k){
    //zavisno od koga predemo moramo u obzir samo predenu sliku uzeti
    var i=document.getElementById("aa"+k);
    //koju sliku predemo trebamo u potpunosti popuniti element koji smo radili u spirali 2
    if (k<7)i.style.height='400px';
    //koju sliku predemo trebamo u potpunosti popuniti ali za asistente imamo manje mjesta
    else i.style.height='360px';
    //i za asistenta i profesora sirina elementa je ista
    i.style.width='300px';
    //zelimo da popunimo cijeli element pa nam padding mora biti 0 sa svim strana
    i.style.paddingTop='0px';
    i.style.paddingBottom='0px';
    i.style.paddingRight='0px';
    i.style.paddingLeft='0px';
    // za svako osoblje kojem predemo preko slike moramo ukloniti opis ispod slike jer slika treba u citav element da ide
    if(k==1){
        for(var j=1; j<5; j++){
            document.getElementById("amila"+j).style.display="none";
        }
    }
    if(k==2){
        for(var j=1; j<5; j++){
            document.getElementById("vensada"+j).style.display="none";
        }
    }
    if(k==3){
        for(var j=1; j<5; j++){
            document.getElementById("razija"+j).style.display="none";
        }
    }
    if(k==4){
        for(var j=1; j<5; j++){
            document.getElementById("zeljko"+j).style.display="none";
        }
    }
    if(k==5){
        for(var j=1; j<5; j++){
            document.getElementById("emir"+j).style.display="none";
        }
    }
    if(k==6){
        for(var j=1; j<5; j++){
            document.getElementById("vedran"+j).style.display="none";
        }
    }
    if(k==7){
        for(var j=1; j<4; j++){
            document.getElementById("hana"+j).style.display="none";
        }
    }
    if(k==8){
        for(var j=1; j<4; j++){
            document.getElementById("irfan"+j).style.display="none";
        }
    }
    if(k==9){
        for(var j=1; j<4; j++){
            document.getElementById("emir1"+j).style.display="none";
        }
    }
    if(k==10){
        for(var j=1; j<4; j++){
            document.getElementById("mirza"+j).style.display="none";
        }
    }
    if(k==11){
        for(var j=1; j<4; j++){
            document.getElementById("edvin"+j).style.display="none";
        }
    }
    if(k==12){
        for(var j=1; j<4; j++){
            document.getElementById("enil"+j).style.display="none";
        }
    }
    //nigdje u postavci zadatka nije receno da treba da se vrati kako je bilo kada se skine mis sa neke osobe
}


//Spirala 3, ZADATAK 3
function sortiraj(k){
    // ako kliknemo na dugme druga godina moramo sakriti predmete prve godine
    if(k==2){
        document.getElementById("UBP").style.display="none";
        document.getElementById("UUP").style.display="none";
        document.getElementById("RP").style.display="none";
        document.getElementById("MUR1").style.display="none";
        document.getElementById("FWT").style.display="none";
    }
    // ako kliknemo na dugme prva godina moramo sakriti predmete druge godine
    if(k==1){
        document.getElementById("RS").style.display="none";
        document.getElementById("TP").style.display="none";
        document.getElementById("MUR2").style.display="none";
        document.getElementById("VIS").style.display="none";
        document.getElementById("RAM").style.display="none";
    }
    // ako kliknemo na dugme svi predmeti moramo pokazati sve predmete
    if(k==3){
        document.getElementById("RS").style.display="grid";
        document.getElementById("TP").style.display="grid";
        document.getElementById("MUR2").style.display="grid";
        document.getElementById("VIS").style.display="grid";
        document.getElementById("RAM").style.display="grid";
        document.getElementById("UBP").style.display="grid";
        document.getElementById("UUP").style.display="grid";
        document.getElementById("RP").style.display="grid";
        document.getElementById("MUR1").style.display="grid";
        document.getElementById("FWT").style.display="grid";
    }
}

//Spirala 3, ZADATAK 2
function sortirajabecedno(){
    //ako zelimo da sortiramo predmete to cemo uraditi tako sto poredamo u gridu predmete onako kako bi abecedno trebali biti poredani
    document.getElementById("FWT").style.gridRow="4/5";
    document.getElementById("MUR1").style.gridRow="5/6";
    document.getElementById("RP").style.gridRow="6/7";
    document.getElementById("UBP").style.gridRow="7/8";
    document.getElementById("UUP").style.gridRow="8/9";
    document.getElementById("MUR2").style.gridRow="10/11";
    document.getElementById("RAM").style.gridRow="11/12";
    document.getElementById("RS").style.gridRow="12/13";
    document.getElementById("TP").style.gridRow="13/14";
    document.getElementById("VIS").style.gridRow="14/15";
}