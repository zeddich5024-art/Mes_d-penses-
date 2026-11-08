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
const n=document.createElement("button");
n.className="filtre";
document.querySelector("#filtres").append(n);
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