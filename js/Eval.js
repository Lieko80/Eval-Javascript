//exo1
var bouton1= document.getElementById("btnExercice1");
bouton1.addEventListener("click",btnExercice1);

function btnExercice1()
{
    var jeunes = 0;  //mise a 0 des variables
    var moyen = 0;
    var vieux = 0;

    do
    {

    var age =  parseInt(prompt("Entrez votre âge (si > 100 termine): ", "0"), 10);
    var condjeune = age < 20;//condition pour les jeunes
    var condvieux = age > 40;//conditions pour les vieux
    var condadult = !condjeune && !condvieux; //condition pour determiner le moyen en ecluant les jeune et les vieux
    var condcentenaire = age > 99;
 
    jeunes += (condjeune ? 1 : 0);//comptage
    moyen += (condadult ? 1 : 0);
    vieux += (condvieux ? 1 : 0);

    } 

    while (!condcentenaire)//tant que pas de centenaire on continue le do

    
    window.alert("Il y a " + jeunes + " jeunes, " + moyen + " moyen, " + vieux + " vieux "); 

}







//exo2
var bouton1= document.getElementById("btnExercice2");
bouton1.addEventListener("click",TableMultiplication);

function TableMultiplication()
{
    var NX = 10;//nombre d'operation
    var XX = parseInt(window.prompt("multiplicateur")); //chiffre demander
    var nn = 0;//variable d'incrementation
    var Result;

do
{
    nn++;
    console.log(nn)
    Result = nn * XX;
    console.log("resultat " + Result);
    document.write(nn + " x " + XX + " = " + Result + "<br>");
}

while (nn < NX) //tant que la variable d'incrementation est inferrieur au nombre d'operation demander la boucle do continu

}




//exo3
var bouton1= document.getElementById("btnExercice3");
bouton1.addEventListener("click",btnExercice3);

function btnExercice3()
{
    var prenoms = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent","Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    console.log("prenoms: " + prenoms.join());

    var saisie = window.prompt("Saisissez un prenom");
    var id = prenoms.indexOf(saisie); //compare le prenom rentrer a la liste
    console.log(id);

    if (id > -1) prenoms.splice(id, 1) //si prenom trouver par l'index renvoieun chiffre superieur a 1 
    {
        console.log("prenoms: " + prenoms.join()); 

    }
    if (id == -1) //si non trouver par l'index renvoie -1
    {
        window.alert("prenom pas dans la liste");
    }
}


//exo4


/* si TOT>500 = PAP=TOT-REM 10%
    si 200<TOT<500 = PAP = TOT + ((TOT/100)*2) - ((TOT/100)*10)
        si ((TOT/100)*2)<6 = 6
    si 100<TOT<200  = PAP - TOT + ((TOT/100)*2) - ((TOT/100)*5)
        si ((TOT/100)*2)<6 = 6
    si TOT<100 = PAP = TOT +((TOT/100)*2)
        si ((TOT/100)*2)<6 = 6

*/




var bouton1= document.getElementById("btnExercice4");
bouton1.addEventListener("click",btnExercice4);

function btnExercice4()
{
    var PU = parseInt(window.prompt("Saisir le prix de l'article"));
    var QTECOM = parseInt(window.prompt("saisir le nombre d'article"));
    var PAP = 0;
    var REM;
    var TOT = (PU*QTECOM);
    var PORT;
    
if(TOT>200)
{
    REM = TOT/100*10;    
}
else if(TOT>100)
{
    REM = TOT/100*5;    
}
else
{
REM = 0;
}

PORT = ((TOT/100)*2);

if(PORT<6)
{
    PORT = 6;
}

else
{ 
    PORT = (TOT/100)*2;
}
PAP = TOT - REM;
if(PAP>500)
{
    PORT = 0;
}
PAP = TOT - REM + PORT;
console.log("3 " + "Prix total " + PAP + " Remise " + REM + " port " + PORT);
document.write("Prix total " + PAP + "€" + "<br>" + " Remise " + REM + "€" +"<br>" +  " Frais de port " + PORT +"€");



}


















