// ===== Utilitaires partagés par tous les jeux =====

// Même "jour de référence" que Chronolog, pour que tous les jeux changent
// à minuit en même temps.
function getDayIndex(date = new Date()) {
  const start = Date.UTC(2025, 0, 1);
  const today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((today - start) / 86400000);
}

// Normalise un texte pour comparer des réponses sans se soucier des accents,
// majuscules, espaces ou apostrophes ("l'Élysée" == "elysee").
function normalizeAnswer(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function isCorrectAnswer(guess, acceptedAnswers) {
  const normalizedGuess = normalizeAnswer(guess);
  return acceptedAnswers.some((a) => normalizeAnswer(a) === normalizedGuess);
}

// Distance à vol d'oiseau entre deux points (formule de haversine), en km.
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

// Cap (direction) en degrés du point 1 vers le point 2.
function bearing(lat1, lon1, lat2, lon2) {
  const toRad = (d) => (d * Math.PI) / 180;
  const toDeg = (r) => (r * 180) / Math.PI;
  const y = Math.sin(toRad(lon2 - lon1)) * Math.cos(toRad(lat2));
  const x =
    Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
    Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(toRad(lon2 - lon1));
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function bearingToArrow(deg) {
  const arrows = ["⬆️", "↗️", "➡️", "↘️", "⬇️", "↙️", "⬅️", "↖️"];
  return arrows[Math.round(deg / 45) % 8];
}

function distanceTemperature(km) {
  if (km < 300) return { emoji: "🌋", label: "Brûlant" };
  if (km < 1000) return { emoji: "🔥", label: "Chaud" };
  if (km < 3000) return { emoji: "😐", label: "Tiède" };
  if (km < 7000) return { emoji: "🧊", label: "Froid" };
  return { emoji: "🥶", label: "Glacial" };
}
