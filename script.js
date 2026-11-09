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
const errornom=document.querySelector("#errornom");
const errormontant=document.querySelector("#errormontant");
let iddepense=depenses.length;
console.log(iddepense);
form.addEventListener("submit",(e)=>{
    //e.preventDefault();
    const Nom=nom.value.trim();
    const Montant=Number(montant.value);
    let valide=true;
    if(Nom === ""){
        errornom.textContent="Le nom est requis";
        valide=false;
    }
    else if(Nom.length < 2 ){
        errornom.textContent="Le nom doit contenir au moins 3 caractères";
        valide=false;
    }else{
        errornom.textContent="";
    }
    if(Montant<=0){
        errormontant.textContent="le montant spéreur 0";
        valide=false;
    }else{
        errormontant.textContent="";
    }
    if(!valide){
        return;
    }
    iddepense++;
    const depens={
        id:iddepense,
        nom:Nom,
        montant:Montant,
        cat:catégorie.value
    }
    depenses.push(depens);
    
    form.reset(); 
    console.log(depenses)
    afficher()
})


afficher()
