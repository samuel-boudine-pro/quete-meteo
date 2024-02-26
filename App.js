/**
 * Vous allez constuire une application Météo.
 * Cette application est construite en trois parties :
 * La première partie va permettre de montrer : la ville (localisée avec le GPS du téléphone), la température, une interprétation du temps, et une horloge
 *
 * La seconde partie contient :
 *
 * La troisième partie : l'heure de lever du soleil, heure de coucher du soleil, vitesse du vent
 *
 */

/**
 * Votre composant App contiendra : une ImageBackground avec background-meteo
 * une SafeAreaView
 * un composant Home (pour la premiere partie, cad sans la navigation)
 *
 */

/**
 * Navigation :
 * npx expo install @react-navigation/native react-native-screens @react-navigation/native-stack
 *
 * Conseil : mettre la navigation en place seulement après avoir terminé la partie avec MeteoBasic et MeteoAdvanced
 * Vous devrez alors entourer l'application avec NavigationContainer
 * Garder le reste comme avant (donc ImageBackougrnd et SafeAreaView)
 *
 * On n'appellera plus directement Home
 * -> Il faudra appeler votre Stack : Stack.Navigator va alors entourer toutes les routes qui seront désignées par la balise Stack.screen
 * -> pour cette partie, revoir le live sur le routing
 * -> Attention, ça casse tout niveau style, car React Native nous ajoute plein de style par défaut et c'est à nous de le retirer (donc à vos styles !! vous aurez notamment besoin de regarder la doc screenOptions pour Stack.Navigator et theme pour NavigationContainer)
 *
 * première route : Home
 * deuxieme route : Forecast (page des prévisions météo)
 *
 */

// *************************************

// const Stack = .... (pour quand on en serez à la navigation )

import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <>
      <ImageBackground>
        <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
      </ImageBackground>
    </>
  );
}
