/**
 * composant Forecast qui sera notre second écran : va avoir 
 * 1) un header avec un bouton de retour en arrière + le nom de la ville + texte "Prévisions sur 7 jours"
 * 
 * Forecast a normalement reçu des données grâce à la navigation. On va donc utiliser le hook useRoute, et récupérer la propriété params (n'hésitez pas à logger ce qu'on a dans useRoute, afin de voir comment faire pour récupérer params ET ce que contiennent les params, on en aura besoin dans un instant)
 * 
 * En premier, on se crée un backButton, pour revenir à la page Home. Pensez au hook useNavigation à nouveau
 * Ce bouton va appeler la fonctionnalité qui permet de REVENIR EN ARRIERE grâce à la navigation
 */

function Forecast() {
    return (
        // 1) mettre en place le header de la page : bouton de retour à gauche + nom de ville et texte "Prévisions ..." à droite

        // 2) on va créer le composant ForecastListItem qui va représenter une ligne de prévision (aller dans le composant pour voir la parche à suivre)

        // 3) on va mettre en place l'appel à ForecastListItem, avec une boucle pour avoir les données dynamiques : dans params, voir sur quoi on pourrait itérer (on se rappelle de comment on itère sur un petit nombre de données dans un tableau ?... On se rappelle des exos ReactJS !!)

        // pour chaque itération, il faudra passer l'image du ciel (on se rappelle qu'on avait créer une fonction qui nous renvoie un objet contenant l'image)
        // il faudra aussi passer le jour de la semaine (cf date.service.js, qui contient un talbeau de jours) : on va récupérer la date de l'itération (attention au format, ce n'est pas la totalité de la date qui nous intéresse, on veut savoir quel jour on est, on se fiche de l'heure !)
        // une fois qu'on a la date de l'élément de l'itération, on va pouvoir utiliser une fonction JS qui permet de récupérer le jour de la semaine grâce à leur index (0 à 6), ça commence par new Date().get... (aller voir la doc gestion des dates en JS)
        // on a la date -> on peut avec DAYS récupérer le jour pour chaque date

        // il faudra ensuite passer la date à notre ForecastItem : on va la renvoyer au format jj/mm (jour/moisa, avec deux chiffres à chaque fois, on se rappelle de cmment on rajoute un 0 quand on n'a qu'un chiffre et qu'on en veut 2) -> ce calcule peut être éventuellement écrit dans le service date.service.js (dans fonction dateToDDMM)

        // on envoie ensuite à ForecastListItem la température (regarder votre objet params, voyez ce qui semble correspondre à des températures, récupérer la bonne et arrondissez-la)

        <>
            {/* header */}
            {/* boucle de ForecastListItem */}
        </>
    )
}