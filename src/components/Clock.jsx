/**
 * Composant Clock
 * 
 * Aura besoin d'un state time pour sauver l'heure
 * Conseil : créer la fonction de calcul de l'heure dans le fichier de service date.service.js
 * 
 * une fois la fonction nowToHHMM écrite dans date.service.js, elle peut être appelée de manière à donner la valeur par défaut de notre state
 * 
 * dans un useEffect, nous allons devoir mettre à jour time toutes les secondes de manière à ce que l'affichage de l'heure se mette à jour
 * (attention à bien clear le useEffect ...)
 * 
 * dans le return du composant, on pourra afficher l'heure dans un Text
 * 
 */