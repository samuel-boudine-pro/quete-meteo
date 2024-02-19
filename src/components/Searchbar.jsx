/**
 * composant qui va nous permettre de saisir du texte (core composant react native)
 * ce composant va être tout bête et lorsqu'on tapera du texte dedans, ce contentera de déclencher un evenement pour dire qu'on lui a tapé du texte dedans
 * Attention ! Cette fois, la recherche ne se lancera pas à chaque fois qu'on tape un caractère, mais quand on SOUMETTRA la valeur de l'input (regarder la doc pour une notion de submit, mais attention car celui-ci ne nous renvoie pas directement la string qu'on a tapé, mais un nativeEvent, et nous on enverra donc la valeur de ce nativeEvent -> lecture de doc nécessaire)
 * 
 * Sous android, le comportement est que le clavier quand on tape sur l'input va avoir tendance à pousser le contenu de l'écran vers le haut, ce qu'on ne veut pas -> aller voir dans app.json, j'ai rajouté une config pour éviter ça : 
 * "softwareKeyboardLayoutMode": "pan"
 * (quand vous rajoutez vous même ce genre de config, il faudra redémarrer le serveur pour que ce soit pris en compte) 
 * Vous pouvez enlever cette config pour voir ce qu'il se passe sous Android sans elle (pas de souci sous iOS en revanche)
 * 
 */