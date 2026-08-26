// 8 grilles. Chacune donne 6 nombres et une cible atteignable en les combinant
// avec + − × ÷ (la somme des 6 nombres est toujours une solution possible).
const COMPTE_DATA = {
  puzzles: [
    { numbers: [1, 3, 7, 8, 25, 50], target: 94 },
    { numbers: [2, 4, 6, 9, 50, 75], target: 146 },
    { numbers: [3, 5, 7, 10, 25, 75], target: 125 },
    { numbers: [1, 2, 8, 9, 50, 100], target: 170 },
    { numbers: [4, 6, 7, 8, 25, 75], target: 125 },
    { numbers: [2, 3, 5, 10, 50, 75], target: 145 },
    { numbers: [1, 4, 6, 7, 25, 100], target: 143 },
    { numbers: [3, 4, 5, 9, 50, 100], target: 171 },
  ],
};

function getDailyCompte(date = new Date()) {
  const dayIndex = getDayIndex(date);
  const list = COMPTE_DATA.puzzles;
  const puzzle = list[((dayIndex % list.length) + list.length) % list.length];
  return { dayIndex, puzzle };
}
