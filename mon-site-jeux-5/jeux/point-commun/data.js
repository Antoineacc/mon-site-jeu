// 8 grilles. Chacune : 4 catégories de 4 mots. Les 16 mots sont mélangés à l'affichage.
const CONNECTIONS_DATA = {
  puzzles: [
    { categories: [
      { name: "Fruits", color: "#F1C40F", words: ["Pomme", "Banane", "Fraise", "Mangue"] },
      { name: "Capitales", color: "#3498DB", words: ["Paris", "Tokyo", "Le Caire", "Ottawa"] },
      { name: "Planètes", color: "#9B59B6", words: ["Mars", "Vénus", "Jupiter", "Saturne"] },
      { name: "Instruments de musique", color: "#2ECC71", words: ["Guitare", "Piano", "Violon", "Trompette"] },
    ]},
    { categories: [
      { name: "Couleurs", color: "#F1C40F", words: ["Rouge", "Bleu", "Vert", "Jaune"] },
      { name: "Sports olympiques", color: "#3498DB", words: ["Judo", "Natation", "Escrime", "Aviron"] },
      { name: "Métaux", color: "#9B59B6", words: ["Or", "Argent", "Fer", "Cuivre"] },
      { name: "Félins", color: "#2ECC71", words: ["Lion", "Tigre", "Panthère", "Guépard"] },
    ]},
    { categories: [
      { name: "Légumes", color: "#F1C40F", words: ["Carotte", "Poireau", "Courgette", "Aubergine"] },
      { name: "Genres de films", color: "#3498DB", words: ["Comédie", "Horreur", "Western", "Thriller"] },
      { name: "Constellations", color: "#9B59B6", words: ["Orion", "Cassiopée", "Lyre", "Scorpion"] },
      { name: "Boissons chaudes", color: "#2ECC71", words: ["Café", "Thé", "Chocolat chaud", "Infusion"] },
    ]},
    { categories: [
      { name: "Pièces d'échecs", color: "#F1C40F", words: ["Roi", "Reine", "Tour", "Cavalier"] },
      { name: "Saisons", color: "#3498DB", words: ["Printemps", "Été", "Automne", "Hiver"] },
      { name: "Instruments de mesure", color: "#9B59B6", words: ["Thermomètre", "Baromètre", "Chronomètre", "Balance"] },
      { name: "Danses", color: "#2ECC71", words: ["Tango", "Salsa", "Valse", "Rock"] },
    ]},
    { categories: [
      { name: "Éléments naturels", color: "#F1C40F", words: ["Feu", "Eau", "Air", "Terre"] },
      { name: "Figures géométriques", color: "#3498DB", words: ["Cercle", "Carré", "Triangle", "Losange"] },
      { name: "Métiers manuels", color: "#9B59B6", words: ["Menuisier", "Plombier", "Électricien", "Maçon"] },
      { name: "Pays d'Amérique du Sud", color: "#2ECC71", words: ["Brésil", "Chili", "Pérou", "Argentine"] },
    ]},
    { categories: [
      { name: "Notes de musique", color: "#F1C40F", words: ["Do", "Ré", "Mi", "Fa"] },
      { name: "Fromages français", color: "#3498DB", words: ["Camembert", "Roquefort", "Comté", "Brie"] },
      { name: "Continents", color: "#9B59B6", words: ["Europe", "Asie", "Afrique", "Océanie"] },
      { name: "Moyens de transport", color: "#2ECC71", words: ["Train", "Avion", "Bateau", "Vélo"] },
    ]},
    { categories: [
      { name: "Épices", color: "#F1C40F", words: ["Cannelle", "Curcuma", "Poivre", "Paprika"] },
      { name: "Insectes", color: "#3498DB", words: ["Fourmi", "Abeille", "Papillon", "Libellule"] },
      { name: "Formes de nuages", color: "#9B59B6", words: ["Cumulus", "Cirrus", "Stratus", "Nimbus"] },
      { name: "Grands fleuves", color: "#2ECC71", words: ["Nil", "Amazone", "Mississippi", "Danube"] },
    ]},
    { categories: [
      { name: "Desserts français", color: "#F1C40F", words: ["Tarte Tatin", "Crème brûlée", "Éclair", "Macaron"] },
      { name: "Signes du zodiaque", color: "#3498DB", words: ["Bélier", "Taureau", "Gémeaux", "Cancer"] },
      { name: "Sports de raquette", color: "#9B59B6", words: ["Tennis", "Badminton", "Squash", "Ping-pong"] },
      { name: "Chaînes de montagnes", color: "#2ECC71", words: ["Alpes", "Himalaya", "Andes", "Pyrénées"] },
    ]},
  ],
};

function getDailyConnections(date = new Date()) {
  const dayIndex = getDayIndex(date);
  const list = CONNECTIONS_DATA.puzzles;
  const puzzle = list[((dayIndex % list.length) + list.length) % list.length];
  return { dayIndex, puzzle };
}
