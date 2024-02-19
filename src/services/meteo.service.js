/**
 * Dans ce fichier, vous aurez deux éléments à exporter : la constante WEATHER_INTERPRETATIONS et la fonction getWeatherInterpretation
 * 
 * WEATHER_INTERPRETATIONS : constante qui va nous permettre de lister tous les cas possibles de temps (selon le weathercode qu'on a dans la documentation)
 * On pourra alors avoir une correspondance entre le code renvoyé par l'application, l'image qu'on voudra afficher et le label (représentant l'état du ciel)
 * qu'on voudra display dans l'application. Je vous mets un exemple pour le premier cas, à vous de compléter (je suis pas vache, je vous ai
 * regroupé les codes qui vont ensemble)
 *  
 */

const WEATHER_INTERPRETATIONS = [
    {
        code: [0],
        image: require('../../assets/images/sky/sun.png'),
        label: "Ensoleillé"
    },
    {
        code: [1, 2, 3, 45, 48], // compléter
    },
    {
        code: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86], // compléter
    },
    {
        code: [71, 73, 75, 77], // compléter
    },
    {
        code: [95, 96, 99], // compléter
    }
];

/**
 * getWeatherInterpretation() : cette fonction va nous permettre de savoir, en prenant en entrée le weathercode quelle sera la bonne interprétation du temps
 * cette fonction va nous permettre de TROUVER (spoiler !!!), dans WEATHER_INTERPRETATIONS l'élément dont le code est le meme que celui qu'on envoie en entrée à la fonction
 */
function getWeatherInterpretation() {}