// Citations et proverbes affichés à gauche/droite en attendant les vraies pubs.
// Change chaque jour, comme les jeux. Fichier autonome (pas de dépendance à shared.js
// car utilisé aussi sur la page d'accueil, à la racine).
const QUOTES_DATA = {
  citations: [
    { text: "Connais-toi toi-même.", author: "Socrate" },
    { text: "Je pense, donc je suis.", author: "René Descartes" },
    { text: "Le doute est le commencement de la sagesse.", author: "Aristote" },
    { text: "Ce qui ne me tue pas me rend plus fort.", author: "Friedrich Nietzsche" },
    { text: "La patience est amère, mais son fruit est doux.", author: "Jean-Jacques Rousseau" },
    { text: "L'important n'est pas de vaincre, mais de bien combattre.", author: "Pierre de Coubertin" },
    { text: "La vie est courte, l'art est long.", author: "Hippocrate" },
    { text: "Rien ne sert de courir, il faut partir à point.", author: "Jean de La Fontaine" },
    { text: "L'homme est né libre, et partout il est dans les fers.", author: "Jean-Jacques Rousseau" },
    { text: "Il n'y a pas de vent favorable pour celui qui ne sait où il va.", author: "Sénèque" },
    { text: "On ne badine pas avec l'amour.", author: "Alfred de Musset" },
    { text: "Le génie commence les beaux ouvrages, le travail seul les achève.", author: "Joseph Joubert" },
    { text: "Il faut cultiver notre jardin.", author: "Voltaire" },
    { text: "Le courage, c'est d'aller à l'idéal en comprenant le réel.", author: "Jean Jaurès" },
    { text: "La liberté des uns s'arrête où commence celle des autres.", author: "Maxime juridique" },
  ],
  proverbes: [
    { text: "Petit à petit, l'oiseau fait son nid.", author: "Proverbe français" },
    { text: "Qui sème le vent récolte la tempête.", author: "Proverbe français" },
    { text: "L'habit ne fait pas le moine.", author: "Proverbe français" },
    { text: "Pierre qui roule n'amasse pas mousse.", author: "Proverbe français" },
    { text: "Rome ne s'est pas faite en un jour.", author: "Proverbe français" },
    { text: "Il faut battre le fer tant qu'il est chaud.", author: "Proverbe français" },
    { text: "Un tiens vaut mieux que deux tu l'auras.", author: "Proverbe français" },
    { text: "La nuit porte conseil.", author: "Proverbe français" },
    { text: "Chaque chose en son temps.", author: "Proverbe français" },
    { text: "Après la pluie, le beau temps.", author: "Proverbe français" },
    { text: "Qui vole un œuf vole un bœuf.", author: "Proverbe français" },
    { text: "Loin des yeux, loin du cœur.", author: "Proverbe français" },
    { text: "L'union fait la force.", author: "Devise belge" },
    { text: "Vouloir, c'est pouvoir.", author: "Proverbe français" },
    { text: "Un homme averti en vaut deux.", author: "Proverbe français" },
  ],
};

function quotesDayIndex(date = new Date()) {
  const start = Date.UTC(2025, 0, 1);
  const today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((today - start) / 86400000);
}

function renderDailyQuotes() {
  const dayIndex = quotesDayIndex();
  const c = QUOTES_DATA.citations[((dayIndex % QUOTES_DATA.citations.length) + QUOTES_DATA.citations.length) % QUOTES_DATA.citations.length];
  const p = QUOTES_DATA.proverbes[((dayIndex % QUOTES_DATA.proverbes.length) + QUOTES_DATA.proverbes.length) % QUOTES_DATA.proverbes.length];

  const leftText = document.getElementById("quote-left-text");
  const leftAuthor = document.getElementById("quote-left-author");
  const rightText = document.getElementById("quote-right-text");
  const rightAuthor = document.getElementById("quote-right-author");

  if (leftText) leftText.textContent = "\u00AB " + c.text + " \u00BB";
  if (leftAuthor) leftAuthor.textContent = "— " + c.author;
  if (rightText) rightText.textContent = "\u00AB " + p.text + " \u00BB";
  if (rightAuthor) rightAuthor.textContent = "— " + p.author;
}

document.addEventListener("DOMContentLoaded", renderDailyQuotes);
