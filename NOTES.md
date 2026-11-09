## Départ
-j'ai créer les files (index.html,style.css,script.js et Notes.md)
-dans file index j'ai créer le formulaire Elle contient (nom,montant,catégorie dépenses et button Ajouter)
-dans file style désaingé 
## Ètape1:
-variable b il changée parce qu'un getElementsByClassName Retourner HTMLCollection ,HTMLCollection est une liste vivante 
-je choisirai pour tes boutons de filtre liste HtmlCollection

## Ètape2:
-différents le nombres parce qu'un children Retourner seulement les nombre  des element mais childNodes que retourner les (l'elements+texte+commentaires)

## Ètape3:
-chaque fois que nous appelons la fonction ,le contenu du array se répète 
-et à notre retour innerhtml ne répète pas le contenu du array c'est parce que innerhtml supprémer le contenu avant afficher nouvelle function

## Ètape4:
-lorsqu'onsoumet le formulaire,la page se recharge automatiquement(refresh) parce que le méthode preventDefault() permet d'empecher le comportement pardéfaut dela page
-parce que les tous input retourner string , (""==0) donc ton doit etre >0.
