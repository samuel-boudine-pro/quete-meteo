/**
 * Ecrire une fonction nowToHHMM
 * fonction qui prendra la date du jour
 * récupérera l'heure à cette date
 * et retournera une string sous forme "HH:mm" (HH pour les heures, mm pour les minutes) -> il faudra recourir à une concaténation
 * l'heure et les minutes peuvent être récupérées à partir de la date du jour, mais attention, ces éléments renvoient des types number
 * (il faudra donc convertir les minutes en string afin de pouvoir leur appliquer la méthode : padStart -> permet de rajouter un 0 quand on a des minutes à un chiffre
 * -> aller dans la doc de padStart pour voir comment fonctionne)
 */

function nowToHHMM() {}

/**
 * tableau des jours de la semaine : on pourra trouver le jour qui correspond à la prévision en chargeant le jour du tableau qui est à l'index que nous renverra notre date
 */
const DAYS = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];

function dateToDDMM() {}