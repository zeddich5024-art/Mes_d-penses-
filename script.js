const form=document.querySelector("#form");
const nom=document.querySelector("#nom");
const montant=document.querySelector("#montant");
const catégorie=document.querySelector("#cat");
const error=document.querySelector("#error");
const total=document.querySelector("#total")
const a=document.querySelectorAll(".filtre");
const b=document.getElementsByClassName("filtre")
console.log(a.length)
console.log(b.length) 
//const n=document.createElement("button");
//n.className="filtre";
//document.querySelector("#filtres").append(n);
console.log(a.length)
console.log(b.length) 
a.forEach((btn)=>{
    console.log(btn);
})
//b.forEach((btn)=>{
 //   console.log(btn);})
const liste =document.querySelector("#liste");
console.log(liste.childNodes.length);
console.log(liste.children.length);
console.log(liste.firstChild);
let depenses = [{ id: 1, nom: "Café", montant: 12, cat: "food" }, { id: 2, nom: "Tram", montant: 8, cat: "transport" }];
function afficher(){
    liste.innerHTML="";
    depenses.forEach((depense)=>{
        const li=document.createElement("li");
        const suppr=document.createElement("button");
        suppr.className="suppr";
        const supp=document.createElement("span");
        supp.innerHTML=`<i class="fa-solid fa-trash"></i>`
        li.textContent=depense.nom + " . " +depense.montant+"DH";
        li.dataset.id = depense.id;
        suppr.append(supp);
        li.append(suppr);
        liste.append(li);

    })
}
let depens=depenses.reduce((somme,depense)=> somme+depense.montant,0);
console.log(depens);
const totals=document.querySelector("#total");
totals.textContent=depens;
afficher()
afficher()
afficher()