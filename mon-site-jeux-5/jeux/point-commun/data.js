// 8 grilles. Chacune donne une catégorie de 16 éléments qui se ressemblent en
// surface (16 instruments, 16 pays, 16 animaux...), mais seuls 4 partagent un
// point commun précis annoncé dans la consigne (ex : "sont japonais").
const CONNECTIONS_DATA = {
  puzzles: [
    {
      category: "instruments de musique",
      criterion: "sont d'origine japonaise",
      targetWords: ["Koto", "Shamisen", "Shakuhachi", "Taiko"],
      decoyWords: ["Guitare", "Sitar", "Djembé", "Balalaïka", "Didgeridoo", "Cornemuse", "Banjo", "Harpe", "Accordéon", "Ukulélé", "Violon", "Piano"],
    },
    {
      category: "pays",
      criterion: "ont un roi ou une reine à leur tête",
      targetWords: ["Espagne", "Belgique", "Suède", "Maroc"],
      decoyWords: ["France", "Allemagne", "Italie", "Portugal", "Brésil", "Argentine", "Égypte", "Inde", "Grèce", "Turquie", "Pologne", "Mexique"],
    },
    {
      category: "animaux",
      criterion: "sont des marsupiaux",
      targetWords: ["Kangourou", "Koala", "Wombat", "Wallaby"],
      decoyWords: ["Lion", "Éléphant", "Girafe", "Zèbre", "Renard", "Loup", "Ours", "Tigre", "Panda", "Chameau", "Hérisson", "Castor"],
    },
    {
      category: "fleuves",
      criterion: "coulent en Afrique",
      targetWords: ["Nil", "Congo", "Niger", "Zambèze"],
      decoyWords: ["Amazone", "Mississippi", "Danube", "Volga", "Gange", "Yangtsé", "Rhin", "Tamise", "Colorado", "Mékong", "Seine", "Indus"],
    },
    {
      category: "desserts",
      criterion: "sont d'origine japonaise",
      targetWords: ["Mochi", "Dorayaki", "Dango", "Taiyaki"],
      decoyWords: ["Tiramisu", "Crème brûlée", "Baklava", "Churros", "Cheesecake", "Macaron", "Strudel", "Tarte Tatin", "Panna cotta", "Flan", "Brownie", "Cannoli"],
    },
    {
      category: "langues",
      criterion: "sont langues officielles de la Suisse",
      targetWords: ["Allemand", "Français", "Italien", "Romanche"],
      decoyWords: ["Anglais", "Espagnol", "Portugais", "Néerlandais", "Russe", "Polonais", "Suédois", "Grec", "Turc", "Arabe", "Japonais", "Coréen"],
    },
    {
      category: "sports olympiques",
      criterion: "sont des sports d'hiver",
      targetWords: ["Ski alpin", "Patinage artistique", "Hockey sur glace", "Bobsleigh"],
      decoyWords: ["Natation", "Athlétisme", "Judo", "Escrime", "Basketball", "Volleyball", "Tennis", "Gymnastique", "Cyclisme", "Aviron", "Boxe", "Haltérophilie"],
    },
    {
      category: "drapeaux de pays",
      criterion: "comportent au moins une étoile",
      targetWords: ["Chine", "Vietnam", "Turquie", "Brésil"],
      decoyWords: ["France", "Allemagne", "Italie", "Espagne", "Royaume-Uni", "Japon", "Pologne", "Belgique", "Pays-Bas", "Suisse", "Irlande", "Autriche"],
    },
  ],
};

function getDailyConnections(date = new Date()) {
  const dayIndex = getDayIndex(date);
  const list = CONNECTIONS_DATA.puzzles;
  const puzzle = list[((dayIndex % list.length) + list.length) % list.length];
  return { dayIndex, puzzle };
}
