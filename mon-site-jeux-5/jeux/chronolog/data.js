// ===================================================================
// Banque de données CHRONOLOG — 1 mois de contenu (32 jours, 4 thèmes)
// Thèmes : Dates historiques / Films / Inventions / Événements insolites
// Rotation : les thèmes tournent chaque jour, les grilles de chaque
// thème tournent tous les 4 jours (une grille dure ~1 mois avant repeat).
// ===================================================================

const CHRONOLOG_DATA = {
  themes: [
    // ---------------------------------------------------------------
    // 1) DATES HISTORIQUES — 6 grilles "moyen" + 2 grilles "difficile"
    // ---------------------------------------------------------------
    {
      key: "histoire",
      label: "🏛️ Dates historiques",
      puzzles: [
        { difficulty: "moyen", items: [
          { name: "Fondation de Rome", year: -753 },
          { name: "Chute de l'Empire romain d'Occident", year: 476 },
          { name: "Bataille de Hastings", year: 1066 },
          { name: "Chute de Constantinople", year: 1453 },
          { name: "Découverte de l'Amérique par Christophe Colomb", year: 1492 },
          { name: "Prise de la Bastille", year: 1789 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Signature de la Magna Carta", year: 1215 },
          { name: "Début de la guerre de Trente Ans", year: 1618 },
          { name: "Indépendance des États-Unis", year: 1776 },
          { name: "Sacre de Napoléon Ier", year: 1804 },
          { name: "Bataille de Waterloo", year: 1815 },
          { name: "Indépendance du Brésil", year: 1822 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Abolition de l'esclavage en France", year: 1848 },
          { name: "Unification de l'Italie", year: 1861 },
          { name: "Unification de l'Allemagne", year: 1871 },
          { name: "Début de la Première Guerre mondiale", year: 1914 },
          { name: "Révolution russe", year: 1917 },
          { name: "Fin de la Première Guerre mondiale", year: 1918 },
        ]},
        { difficulty: "difficile", items: [
          { name: "Défenestration de Prague", year: 1618 },
          { name: "Paix de Westphalie", year: 1648 },
          { name: "Glorieuse Révolution anglaise", year: 1688 },
          { name: "Premier partage de la Pologne", year: 1772 },
          { name: "Coup d'État du 18 Brumaire (Napoléon)", year: 1799 },
          { name: "Commune de Paris", year: 1871 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Traité de Versailles", year: 1919 },
          { name: "Marche sur Rome (Mussolini)", year: 1922 },
          { name: "Krach boursier de Wall Street", year: 1929 },
          { name: "Début de la Seconde Guerre mondiale", year: 1939 },
          { name: "Débarquement de Normandie", year: 1944 },
          { name: "Fin de la Seconde Guerre mondiale", year: 1945 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Création de l'ONU", year: 1945 },
          { name: "Indépendance de l'Inde", year: 1947 },
          { name: "Proclamation de la République populaire de Chine", year: 1949 },
          { name: "Indépendance de l'Algérie", year: 1962 },
          { name: "Assassinat de John F. Kennedy", year: 1963 },
          { name: "Premier pas sur la Lune", year: 1969 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Traité de Rome (fondation de la CEE)", year: 1957 },
          { name: "Chute de Saïgon", year: 1975 },
          { name: "Chute du mur de Berlin", year: 1989 },
          { name: "Dislocation de l'URSS", year: 1991 },
          { name: "Attentats du 11 septembre", year: 2001 },
          { name: "Élection de Barack Obama", year: 2008 },
        ]},
        { difficulty: "difficile", items: [
          { name: "Traité de Tordesillas", year: 1494 },
          { name: "Défaite de l'Invincible Armada espagnole", year: 1588 },
          { name: "Révocation de l'Édit de Nantes", year: 1685 },
          { name: "Congrès de Berlin", year: 1878 },
          { name: "Entente cordiale (France-Royaume-Uni)", year: 1904 },
          { name: "Pacte germano-soviétique", year: 1939 },
        ]},
      ],
    },

    // ---------------------------------------------------------------
    // 2) FILMS — date de sortie
    // ---------------------------------------------------------------
    {
      key: "films",
      label: "🎬 Films (date de sortie)",
      puzzles: [
        { difficulty: "moyen", items: [
          { name: "Le Voyage dans la Lune", year: 1902 },
          { name: "Naissance d'une nation", year: 1915 },
          { name: "Nosferatu", year: 1922 },
          { name: "Metropolis", year: 1927 },
          { name: "King Kong", year: 1933 },
          { name: "Blanche-Neige et les Sept Nains", year: 1937 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Autant en emporte le vent", year: 1939 },
          { name: "Citizen Kane", year: 1941 },
          { name: "Casablanca", year: 1942 },
          { name: "La Belle et la Bête", year: 1946 },
          { name: "Les Dix Commandements", year: 1956 },
          { name: "Vertigo", year: 1958 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Psychose", year: 1960 },
          { name: "Le Bon, la Brute et le Truand", year: 1966 },
          { name: "2001 : l'Odyssée de l'espace", year: 1968 },
          { name: "Le Parrain", year: 1972 },
          { name: "Les Dents de la mer", year: 1975 },
          { name: "Rocky", year: 1976 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Star Wars", year: 1977 },
          { name: "Alien", year: 1979 },
          { name: "Indiana Jones et les Aventuriers de l'arche perdue", year: 1981 },
          { name: "E.T. l'extra-terrestre", year: 1982 },
          { name: "Retour vers le futur", year: 1985 },
          { name: "Le Grand Bleu", year: 1988 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Qui veut la peau de Roger Rabbit", year: 1988 },
          { name: "Terminator 2 : le Jugement dernier", year: 1991 },
          { name: "Le Roi Lion", year: 1994 },
          { name: "Gladiator", year: 2000 },
          { name: "Le Seigneur des Anneaux : La Communauté de l'anneau", year: 2001 },
          { name: "Pirates des Caraïbes : La Malédiction du Black Pearl", year: 2003 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Pulp Fiction", year: 1994 },
          { name: "Titanic", year: 1997 },
          { name: "Matrix", year: 1999 },
          { name: "Le Fabuleux Destin d'Amélie Poulain", year: 2001 },
          { name: "Slumdog Millionaire", year: 2008 },
          { name: "Avatar", year: 2009 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Forrest Gump", year: 1994 },
          { name: "Harry Potter à l'école des sorciers", year: 2001 },
          { name: "Inception", year: 2010 },
          { name: "Intouchables", year: 2011 },
          { name: "Interstellar", year: 2014 },
          { name: "Oppenheimer", year: 2023 },
        ]},
        { difficulty: "moyen", items: [
          { name: "La La Land", year: 2016 },
          { name: "Dunkerque", year: 2017 },
          { name: "Green Book", year: 2018 },
          { name: "Parasite", year: 2019 },
          { name: "Dune", year: 2021 },
          { name: "Barbie", year: 2023 },
        ]},
      ],
    },

    // ---------------------------------------------------------------
    // 3) INVENTIONS — année d'invention
    // ---------------------------------------------------------------
    {
      key: "inventions",
      label: "💡 Inventions",
      puzzles: [
        { difficulty: "moyen", items: [
          { name: "Imprimerie à caractères mobiles (Gutenberg)", year: 1450 },
          { name: "Lunette astronomique perfectionnée (Galilée)", year: 1609 },
          { name: "Machine à calculer (la Pascaline)", year: 1642 },
          { name: "Baromètre (Torricelli)", year: 1643 },
          { name: "Horloge à pendule (Huygens)", year: 1656 },
          { name: "Machine à vapeur (Newcomen)", year: 1712 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Thermomètre à mercure (Fahrenheit)", year: 1714 },
          { name: "Paratonnerre (Franklin)", year: 1752 },
          { name: "Machine à vapeur améliorée (Watt)", year: 1769 },
          { name: "Vaccin (Jenner)", year: 1796 },
          { name: "Pile électrique (Volta)", year: 1800 },
          { name: "Métier à tisser Jacquard", year: 1801 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Vélo (draisienne)", year: 1817 },
          { name: "Allumette", year: 1826 },
          { name: "Locomotive à vapeur (Stephenson)", year: 1829 },
          { name: "Télégraphe électrique (Morse)", year: 1837 },
          { name: "Photographie (daguerréotype)", year: 1839 },
          { name: "Machine à coudre (Singer)", year: 1851 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Ascenseur sécurisé (Otis)", year: 1852 },
          { name: "Dynamite (Nobel)", year: 1867 },
          { name: "Dynamo (Gramme)", year: 1871 },
          { name: "Téléphone (Bell)", year: 1876 },
          { name: "Phonographe (Edison)", year: 1877 },
          { name: "Ampoule électrique (Edison)", year: 1879 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Automobile (Benz)", year: 1886 },
          { name: "Fermeture éclair", year: 1893 },
          { name: "Cinéma (frères Lumière)", year: 1895 },
          { name: "Aspirateur", year: 1901 },
          { name: "Avion (frères Wright)", year: 1903 },
          { name: "Machine à laver électrique", year: 1908 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Réfrigérateur domestique", year: 1913 },
          { name: "Télévision (démonstration de Baird)", year: 1926 },
          { name: "Pénicilline (Fleming)", year: 1928 },
          { name: "Stylo à bille (Bíró)", year: 1938 },
          { name: "Ordinateur ENIAC", year: 1945 },
          { name: "Four à micro-ondes", year: 1946 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Transistor", year: 1947 },
          { name: "Velcro", year: 1955 },
          { name: "Laser", year: 1960 },
          { name: "Souris d'ordinateur (Engelbart)", year: 1964 },
          { name: "Internet (ARPANET)", year: 1969 },
          { name: "Téléphone portable (premier appel)", year: 1973 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Disquette", year: 1971 },
          { name: "GPS (premier satellite)", year: 1978 },
          { name: "Walkman", year: 1979 },
          { name: "Post-it", year: 1980 },
          { name: "CD (disque compact)", year: 1982 },
          { name: "World Wide Web (Tim Berners-Lee)", year: 1989 },
        ]},
      ],
    },

    // ---------------------------------------------------------------
    // 4) ÉVÉNEMENTS INSOLITES / WTF — vrais faits, souvent drôles
    // ---------------------------------------------------------------
    {
      key: "wtf",
      label: "🤯 Événements insolites",
      puzzles: [
        { difficulty: "moyen", items: [
          { name: "Une éclipse solaire arrête une bataille (guerre des Mèdes et des Lydiens)", year: -585 },
          { name: "Krach de la « tulipomania » aux Pays-Bas", year: 1637 },
          { name: "Dernière invasion (ratée) de la Grande-Bretagne, à Fishguard", year: 1797 },
          { name: "Blague du 1er avril de « l'arbre à spaghettis » (BBC)", year: 1957 },
          { name: "Panique informatique du bug de l'an 2000 (Y2K)", year: 2000 },
          { name: "Fausse alerte du « Balloon Boy »", year: 2009 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Ruée vers l'or en Californie", year: 1848 },
          { name: "Éruption du Krakatoa (couchers de soleil rouges dans le monde entier)", year: 1883 },
          { name: "Fausse annonce de la mort de Mark Twain, de son vivant", year: 1897 },
          { name: "Lancement de Spoutnik (panique aux États-Unis)", year: 1957 },
          { name: "Naissance médiatique de l'ourson Knut au zoo de Berlin", year: 2006 },
          { name: "Blocage du canal de Suez par le porte-conteneurs Ever Given", year: 2021 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Panique mondiale lors du passage de la comète de Halley", year: 1910 },
          { name: "Vol de la Joconde au musée du Louvre", year: 1911 },
          { name: "Inondation de mélasse à Boston", year: 1919 },
          { name: "Découverte de Pluton (avant sa rétrogradation)", year: 1930 },
          { name: "Éclatement de la bulle Internet (dot-com)", year: 2000 },
          { name: "Bug de trading automatique « Knight Capital » (fortune perdue en minutes)", year: 2012 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Panique radiophonique de « La Guerre des mondes » (Orson Welles)", year: 1938 },
          { name: "« Incident de Roswell »", year: 1947 },
          { name: "Erreur de une « Dewey Defeats Truman »", year: 1948 },
          { name: "Démasquage du canular du « Piltdown Man »", year: 1953 },
          { name: "Victoire surprise du groupe déguisé en monstres Lordi à l'Eurovision", year: 2006 },
          { name: "Frénésie boursière des « actions meme » GameStop", year: 2021 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Fausse alerte de missiles pendant la crise des missiles de Cuba", year: 1962 },
          { name: "L'astronaute Alan Shepard joue au golf sur la Lune", year: 1971 },
          { name: "Vesna Vulović survit à une chute sans parachute", year: 1972 },
          { name: "Découverte du fossile « Lucy »", year: 1974 },
          { name: "Grande panne d'électricité à New York", year: 1977 },
          { name: "Pandémie de grippe porcine déclarée par l'OMS", year: 2009 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Fausse alerte nucléaire américaine causée par une puce défectueuse", year: 1980 },
          { name: "Échec commercial du lancement du « New Coke »", year: 1985 },
          { name: "Chaîne humaine géante « Hands Across America »", year: 1986 },
          { name: "Canular vidéo de « l'autopsie d'un extraterrestre »", year: 1995 },
          { name: "Engouement mondial pour le Tamagotchi", year: 1996 },
          { name: "Expérience du pigeon voyageur plus rapide qu'Internet (Afrique du Sud)", year: 2009 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Perte de la sonde Mars Climate Orbiter (confusion mètres/pieds)", year: 1999 },
          { name: "Grande panne d'électricité dans le nord-est des USA et du Canada", year: 2003 },
          { name: "Lancement de Facebook depuis un dortoir de Harvard", year: 2004 },
          { name: "Journée de blackout de Wikipédia et Reddit contre SOPA", year: 2012 },
          { name: "Krach boursier éclair « Flash Crash »", year: 2010 },
          { name: "Faux tweet piraté annonçant une explosion à la Maison-Blanche", year: 2013 },
        ]},
        { difficulty: "moyen", items: [
          { name: "Bug informatique « left-pad » qui casse une partie d'Internet", year: 2016 },
          { name: "Erreur d'enveloppe aux Oscars (mauvais film annoncé)", year: 2017 },
          { name: "Lancement d'une voiture Tesla dans l'espace", year: 2018 },
          { name: "Panne mondiale des services Google", year: 2020 },
          { name: "Panne mondiale de Facebook, Instagram et WhatsApp", year: 2021 },
          { name: "Rachat surprise de Twitter par Elon Musk", year: 2022 },
        ]},
      ],
    },
  ],
};

// Renvoie la grille du jour de façon déterministe : même jour = même grille pour tout le monde.
function getDailyPuzzle(date = new Date()) {
  const start = Date.UTC(2025, 0, 1); // point de référence fixe
  const today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const dayIndex = Math.floor((today - start) / 86400000);

  const themes = CHRONOLOG_DATA.themes;
  const theme = themes[((dayIndex % themes.length) + themes.length) % themes.length];

  const cycle = Math.floor(dayIndex / themes.length);
  const puzzle = theme.puzzles[((cycle % theme.puzzles.length) + theme.puzzles.length) % theme.puzzles.length];

  return {
    dayIndex,
    theme,
    difficulty: puzzle.difficulty,
    items: puzzle.items,
  };
}
