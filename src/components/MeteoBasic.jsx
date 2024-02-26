/**
 * Composant MeteoBasic, affichera la température, la ville, l'interprétation de la météo (image nuage pour temps "Nuageux", etc), et une horloge
 * 
 * Horloge : composant Clock 
 * 
 * Text : city
 * 
 * Texte : label (savoir si "Nuageux", "Pluvieux", etc) -> nous vient de l'interprétation (cf getWeatherInterpretation)
 * 
 * View avec : température (penser à afficher l'unité qui n'est pas fournie par l'API) + une image (qui sera issue, comme le label, de l'interprétation)
 */


/**
 * Dans un temps deux, quand vous commencerez la navigation, il faudra que ce composant ait au niveau de la température la possiblité de cliquer pour pouvoir déclencher un événement de navigation au niveau de son parent (on rappelle, ce composant MeteoBasic est stupide et ne fait rien par lui-même : il reçoit tout de son parent et envoie ses événements à son parent)
 */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MeteoBasic = () => {
  return (
    <View>
      <Text>MeteoBasic</Text>
    </View>
  )
}

export default MeteoBasic

const styles = StyleSheet.create({})