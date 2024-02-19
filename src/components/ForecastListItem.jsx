/**
 * Ce composant nous permet de créer une seule ligne de prévision (qu'on pourra répéter)
 * 
 * Dans chaque ligne on a : une image à gauche (qui représente l'interprétation du ciel) + une journée + une date + une température
 * 
 * Petit tips : puisque vous allez créer une ligne (ForecastListItem), que vous allez répéter autant de fois qu'il y a de jours dans la semaine (normalement ... 7 du coup) -> se créer un premier appel au composant ForecastListItem dans le composant parent Forecast (avec des valeurs de props factices), juste pour être sûr que l'affichage de tous les éléments se fait correctement (et permet de voir si à tout hasard, il ne faudrait pas passer des props au composant ForecastListItem)
 * 
 * -> vous pouvez répéter l'appel 7 fois avec vos props bidons dans Forecast, pour voir le rendu
 * 
 * -> une fois le rendu vérifié dans Forecast, enlever les faux appels à ForecastList (on va boucler)
 * 
 * La suite de la marche à suivre -> aller dans Forecast pour la boucle (étape 3 dans Forecast)
 */

function ForecastListItem() {}