(function () {
  const { dayIndex, puzzle } = getDailyConnections();
  const storageKey = "pointcommun-" + dayIndex;
  const saved = JSON.parse(localStorage.getItem(storageKey) || "null");

  const allWords = puzzle.categories.flatMap((cat) =>
    cat.words.map((w) => ({ word: w, category: cat.name }))
  );

  let order = saved ? saved.order : shuffle(allWords.map((w) => w.word));
  let solvedCategories = saved ? saved.solvedCategories : []; // noms de catégories déjà trouvées
  let errors = saved ? saved.errors : 0;
  let selected = [];
  let finished = solvedCategories.length === puzzle.categories.length;

  const dayLabel = document.getElementById("day-label");
  const errorCounter = document.getElementById("error-counter");
  const solvedBoard = document.getElementById("solved-groups");
  const grid = document.getElementById("word-grid");
  const validateBtn = document.getElementById("validate-btn");
  const result = document.getElementById("result");

  dayLabel.textContent = "Grille n°" + dayIndex;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function save() {
    localStorage.setItem(
      storageKey,
      JSON.stringify({ order, solvedCategories, errors })
    );
  }

  function categoryOf(word) {
    return allWords.find((w) => w.word === word).category;
  }
  function categoryData(name) {
    return puzzle.categories.find((c) => c.name === name);
  }

  function render() {
    errorCounter.textContent = errors > 0 ? `${errors} erreur${errors > 1 ? "s" : ""}` : "";

    solvedBoard.innerHTML = solvedCategories
      .map((name) => {
        const cat = categoryData(name);
        return `<div class="solved-group-row" style="background:${cat.color}33; border:1px solid ${cat.color};">
          <p class="solved-group-name" style="color:${cat.color}">${cat.name}</p>
          <p class="solved-group-words">${cat.words.join(" · ")}</p>
        </div>`;
      })
      .join("");

    const remaining = order.filter((w) => !solvedCategories.includes(categoryOf(w)));

    grid.innerHTML = remaining
      .map((word) => {
        const cls = selected.includes(word) ? "word-tile word-tile--selected" : "word-tile";
        return `<button class="${cls}" data-word="${word}">${word}</button>`;
      })
      .join("");

    grid.querySelectorAll(".word-tile").forEach((btn) => {
      btn.onclick = () => toggleSelect(btn.dataset.word);
    });

    validateBtn.disabled = selected.length !== 4;
    validateBtn.style.display = finished ? "none" : "block";

    if (finished) {
      result.innerHTML = `
        <p class="score-line">Bravo, les 4 groupes sont trouvés ! (${errors} erreur${errors === 1 ? "" : "s"})</p>
        <button id="share-btn" class="share-btn">Copier mon résultat</button>
      `;
      document.getElementById("share-btn").onclick = () => {
        const text = `Le point commun #${dayIndex}\n${errors} erreur${errors === 1 ? "" : "s"}`;
        navigator.clipboard.writeText(text).then(() => {
          document.getElementById("share-btn").textContent = "Copié ✓";
        });
      };
    }
  }

  function toggleSelect(word) {
    if (finished) return;
    if (selected.includes(word)) {
      selected = selected.filter((w) => w !== word);
    } else if (selected.length < 4) {
      selected.push(word);
    }
    render();
  }

  validateBtn.onclick = () => {
    if (selected.length !== 4) return;
    const cats = selected.map(categoryOf);
    const allSame = cats.every((c) => c === cats[0]);

    if (allSame) {
      solvedCategories.push(cats[0]);
      selected = [];
      if (solvedCategories.length === puzzle.categories.length) finished = true;
    } else {
      errors++;
      // petite animation de secousse avant de désélectionner
      grid.querySelectorAll(".word-tile--selected").forEach((el) => el.classList.add("word-tile--shake"));
      setTimeout(() => {
        selected = [];
        save();
        render();
      }, 300);
      save();
      return;
    }

    save();
    render();
  };

  render();
})();
