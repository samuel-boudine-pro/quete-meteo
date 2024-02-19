/**
 * composant Home
 * Ce composant va afficher les quatre parties de notre App
 * La première partie sera appelée grâce au composant "MeteoBasic"
 * 
 * Etape préliminaire : npx expo install expo-location -> vous permettra d'accéder au GPS du téléphone
 * import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
 * 
 * Pour gérer la partie MeteoBasic, vous aurez besoin :
 * 1) un state pour stocker les coordonnées de votre utilisateur
 * 2) un state pour stocker le temps
 * 3) un state pour stocker la ville (on pourra l'initialiser à null et s'en occuper plus tard)
 * 4) une constant currentWeather qui permettra d'extraire la propriété current_weather de votre state correspondant (on est sur le temps qu'il fait, donc je vous laisse trouver entre les deux state, sur lequel il faudra taper -> si vous avez un doute, on n'oublie pas de logger vos state pour voir ce qu'ils contiennent)
 * 
 * il vous faudra également : 
 * 5) un useEffect pour mettre à jour les coordonnées (cette mise à jour n'est nécessaire qu'au moment où on charge l'appli) -> appelle d'une fonction getUserCoords
 * 6) un second useEffect qui, si on a bien des coordonnées, permet de récupérer le temps (cela devra être fait chaque fois qu'on aura un changement de valeur
 * du state qui permet de stocker le temps) -> appelle d'une fonction fetchWeatherFromCoords + permet de récupérer la ville (cf la fonction avec appel API correspondant pour fetcher la city)
 * 
 * tips pour la fonction fetchWeatherFromCoords : cette fonction a pour but de faire l'appel API dont voici le lien vers la doc
 * https://open-meteo.com/en
 * cet appel API pourra prendre plusieurs paramètres : la latitude et la longitude, le weathercode (aller tout en bas de la documentation, vous aurez le tableau des 
 * codes avec ce à quoi ils correspondent), l'heure de coucher et de lever du soleil, la vitesse max du vent, la temperature max, et le temps qu'il fait actuellement:
 * 
 * Voici l'appel qu'il faudra faire (pensez à bien remplacer latitude et longitude): 
 * https://api.open-meteo.com/v1/forecast?latitude=LATITUDE&longitude=LONGITUDE&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true
 * 
 * Le résultat de cet appel (avec fetch ou axios, as you wish), permettra de mettre à jour le temps (je dis ça, je dis rien)
 * 
 * Mettez à jour le return du composant Home : tout ce qui se passe dans le return ne doit être affiché que si et seulement si votre variable currentWeather 
 * (on se rappelle : currentWeathernous permet de récupérer la propriété current_weather de notre state cible 
 * (donc comment fait-on pour accéder à une propriété d'un objet en JS ?...))
 * 
 * Dans notre return, on appelle le composant MeteoBasic. Attention, celui-ci doit afficher la température, la ville (cf fetchCityFromCoords), et l'interprétation
 * 
 * Nous n'avons pas encore parlé de l'interprétation !!! 
 * Je vous préconise d'aller dans le fichier data.service.js 
 * Une fois la fonction getWeatherInterpretation écrite dans data.service.js, on va pouvoir l'appeler pour passer l'interprétation au composant MeteoBasic
 * 
 * *********************************************************************************************************
 * 
 * Partie MeteoAdvanced : on appelle composant MeteoAdvanced (il faudra lui passer les éléments nécessaires à l'affichage de l'heure de l'aube, crépuscule et vitesse du vent)
 * 
 *  **********************************************************************************************************
 * 
 * Dernière partie de la page Home : la Searchbar (aller voir le composant Searchbar pour sa création) -> on veut que quand on tape une ville dans la Searchbar, ses coordonnées soient appliquées dans notre page Home (on est en écoute sur les coordonées dans la page Home)
 * 
 * sur le site open-meteo, on a geocoding :
 * https://open-meteo.com/en/docs/geocoding-api
 * 
 * On va pouvoir construire l'URL de notre requête, avec la ville et la langue -> nous renverra la latitude et la longitude de la ville recherchée
 * Création de la fonction fetchCoordsFromCity
 * 
 * Il faudra appeler cette fonction au submit de notre input, afin de lancer la nouvelle requête et d'avoir la nouvelle ville -> on récupère ses coordonnéesgrâce à l'appel
 * 
 */
import { Text } from 'react-native';

function Home() {
    // states
    // currentWeather

    // useEffect 1
    // useEffect 2 

    /**
     * dans cette fonction getUserCoords, il faudra récupérer le status de la permission de l'accès au GPS (je vous ai mis l'import de la bonne fonction, 
     * donc pas d'excuse) -> un conseil, logger ce que vous renvoie la requête de la permission, pour savoir commetn accéder au status
     * si votre status est 'granted' (donc vous avez les droits d'accès), alors vous pouvez créer une constante location qui permet de stocker le
     * retour du de la position (attention, cette requete est asynchrone comme l'indique son nom, donc il faudra attendre son retour)
     * logger la constante location
     * cette constante vous permettra d'accéder à la latitude et à la longitude de la position de votre téléphone
     * pour pourrez alors setter voter state qui contient les coordonnées ( tips : setCoords({lat: votreLatitude, lng: votreLongitude}) )
     * 
     * else (pas d'accès) : vous pouvez mettre une localisation par défaut, par exemple Paris (c'est la capitale, ça se tient) -> dans la doc vous pouvez chercher Paris et 
     * vous aurez accès aux coordonnées
     */
    function getUserCoords() {}

    /**
     * appel API dans fetchWeatherFromCoords, et mise à jour du state
     * cette fonction va devoir attendre le retour de l'API (ça peut être long)
     */
    function fetchWeatherFromCoords() {}

    /**
     * appel API dans fetchCityFromCoords, avec adresse : 
     * https://nominatim.openstreetmap.org/reverse?format=json&lat=LATITUDE&lon=LONGITUDE (pensez à remplacer latitude et longitude)
     * lorsque vous avez la réponse de cet appel, setter la city
     */
    function fetchCityFromCoords() {}

    /**
     * Va nous permettre au clic sur la temperature (donc rajouter au moment où on crée la navigation, un evenement sur le composant MeteoBasic pour pouvoir naviguer vers la page Forecast)
     * la navigation nous permet de paramétrer deux choses : là où on veut naviguer, et les donner qu'on veut envoyer à la page sur laquelle on veut aller (sous forme d'objet).
     * Nous on va envoyer la ville et la propriété daily (qui contient toutes les prévisions)
     * Et comme je suis pas vache, je vous montre comment il faudra les passer (à vous d'adapter si besoin avec le bon nom de variables, faut pas abuser) -> {city, ...weather.daily}
     * 
     * Une fois que c'est fait, aller dans Forecast
     */
    function goToForecastPage() {}

    /**
     * fonction qui prendra en entrée la ville (stockée dans votre state, pour rappel ...)
     * On aura l'URL : 
     * https://geocoding-api.open-meteo.com/v1/search?name=VOTREVILLETAPEE&langage=fr&count=1
     * cette fonction prend en entrée ce qui a été tapé par l'utilisateur (récupéré automatiquement si vous avez mis en place le système de transmission d'un composant enfant vers un parent).
     * cette fonction fera donc l'appel API ci-dessus, avec la bonne valeur de la ville (recherche)
     * lorsque vous aurez récupéré la réponse de l'appel API, vous pourrez logger ce qu'il se passe, et vous pourrez alors mettre à jours les coordonnées
     * Vous avez alors normalement votre application complète !!! En effet, étant donné que vous êtes en écoute sur les coordonnées, vous devriez maintenant relancer votre useEffect, qui contient deux appels API : un pour récupérer le temps à partir de vos coordonnées et un appel API pour récupérer le nom de la ville (permet d'avoir une forme d'autocomplétion)
     * 
     * Votre interface complète doit se mettre à jour en réponse à vos requetes !
     * Félicitations !!
     */
    function fetchCoordsFromCity() {}

    return (
        <>
        <Text> Hello </Text>
        </>
    )
}

export default Home;