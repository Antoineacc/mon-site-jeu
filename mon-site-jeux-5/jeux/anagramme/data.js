// 16 mots par langue. Chaque jour, un mot par langue est sélectionné.
const ANAGRAM_DATA = {
  fr: [
    { word: "jardin", clue: "Espace extérieur où l'on cultive plantes et fleurs." },
    { word: "fenetre", clue: "Ouverture dans un mur, souvent vitrée, pour laisser entrer la lumière." },
    { word: "montagne", clue: "Relief élevé, parfois enneigé au sommet." },
    { word: "bibliotheque", clue: "Lieu où l'on emprunte ou consulte des livres." },
    { word: "parapluie", clue: "Objet qu'on ouvre pour se protéger de la pluie." },
    { word: "chocolat", clue: "Aliment sucré à base de cacao." },
    { word: "ordinateur", clue: "Appareil électronique pour calculer, écrire ou naviguer sur Internet." },
    { word: "papillon", clue: "Insecte aux ailes colorées qui vole de fleur en fleur." },
    { word: "voiture", clue: "Véhicule à quatre roues utilisé pour se déplacer." },
    { word: "musique", clue: "Art d'organiser des sons, souvent avec des instruments." },
    { word: "cuisine", clue: "Pièce de la maison où l'on prépare les repas." },
    { word: "lumiere", clue: "Ce qui permet de voir, produite par le soleil ou une ampoule." },
    { word: "voyage", clue: "Déplacement, souvent pour le plaisir de découvrir un lieu." },
    { word: "ecole", clue: "Lieu où les enfants apprennent à lire et à compter." },
    { word: "montre", clue: "Petit appareil porté au poignet pour lire l'heure." },
    { word: "plage", clue: "Étendue de sable au bord de la mer." },
  ],
  en: [
    { word: "garden", clue: "Outdoor space where plants and flowers are grown." },
    { word: "window", clue: "An opening in a wall, usually with glass, that lets in light." },
    { word: "mountain", clue: "A very high natural elevation of the ground." },
    { word: "library", clue: "A place where you can borrow or read books." },
    { word: "umbrella", clue: "An object you open to protect yourself from the rain." },
    { word: "chocolate", clue: "A sweet food made from cacao." },
    { word: "computer", clue: "An electronic device used to calculate, write, or browse the internet." },
    { word: "butterfly", clue: "An insect with colorful wings that flies from flower to flower." },
    { word: "bicycle", clue: "A two-wheeled vehicle you pedal to move around." },
    { word: "kitchen", clue: "The room in a house where meals are prepared." },
    { word: "sunlight", clue: "The light that comes from the sun." },
    { word: "journey", clue: "A trip, often taken to discover a new place." },
    { word: "teacher", clue: "A person whose job is to help students learn." },
    { word: "weekend", clue: "Saturday and Sunday, the days most people don't work." },
    { word: "birthday", clue: "The yearly anniversary of the day someone was born." },
    { word: "elephant", clue: "A very large grey animal with a long trunk." },
  ],
  es: [
    { word: "jardin", clue: "Espacio al aire libre donde se cultivan plantas y flores." },
    { word: "ventana", clue: "Abertura en una pared, normalmente con vidrio, para que entre la luz." },
    { word: "montana", clue: "Elevación natural del terreno, a menudo muy alta." },
    { word: "biblioteca", clue: "Lugar donde se puede leer o pedir prestados libros." },
    { word: "paraguas", clue: "Objeto que se abre para protegerse de la lluvia." },
    { word: "chocolate", clue: "Alimento dulce hecho de cacao." },
    { word: "ordenador", clue: "Aparato electrónico usado para calcular, escribir o navegar por internet." },
    { word: "mariposa", clue: "Insecto de alas coloridas que vuela de flor en flor." },
    { word: "bicicleta", clue: "Vehículo de dos ruedas que se mueve pedaleando." },
    { word: "cocina", clue: "Habitación de la casa donde se preparan las comidas." },
    { word: "escuela", clue: "Lugar donde los niños aprenden a leer y contar." },
    { word: "reloj", clue: "Pequeño aparato que se lleva en la muñeca para saber la hora." },
    { word: "playa", clue: "Extensión de arena junto al mar." },
    { word: "musica", clue: "Arte de organizar sonidos, a menudo con instrumentos." },
    { word: "viaje", clue: "Desplazamiento, a menudo para descubrir un lugar nuevo." },
    { word: "elefante", clue: "Animal muy grande y gris con una larga trompa." },
  ],
};

function shuffleLetters(word) {
  const letters = word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .split("");
  let shuffled;
  do {
    shuffled = [...letters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  } while (shuffled.join("") === letters.join(""));
  return shuffled.join(" ");
}

function getDailyAnagram(lang, date = new Date()) {
  const dayIndex = getDayIndex(date);
  const list = ANAGRAM_DATA[lang];
  const item = list[((dayIndex % list.length) + list.length) % list.length];
  return { dayIndex, item };
}
