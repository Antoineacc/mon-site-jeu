(function () {
  const puzzle = getDailyPuzzle();
  const solution = [...puzzle.items].sort((a, b) => a.year - b.year);

  const storageKey = "chronolog-" + puzzle.dayIndex;
  const saved = JSON.parse(localStorage.getItem(storageKey) || "null");

  let order = saved ? saved.order : shuffle(puzzle.items.map((it) => it.name));
  let finished = saved ? saved.finished : false;
  let attempts = saved ? saved.attempts : []; // liste des essais : [{ emoji, errors }]
  let showFeedback = finished; // affiche les couleurs sur la liste courante

  const themeLabel = document.getElementById("theme-label");
  const dayLabel = document.getElementById("day-label");
  const list = document.getElementById("sortable-list");
  const checkBtn = document.getElementById("check-btn");
  const result = document.getElementById("result");
  const history = document.getElementById("history-board");
  const difficultyBadge = document.getElementById("difficulty-badge");

  themeLabel.textContent = puzzle.theme.label;
  dayLabel.textContent = "Grille n°" + puzzle.dayIndex;
  if (puzzle.difficulty === "difficile") {
    difficultyBadge.textContent = "🔥 Niveau difficile";
    difficultyBadge.classList.add("difficulty-badge--hard");
  } else {
    difficultyBadge.textContent = "";
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    const sortedNames = solution.map((s) => s.name).join("|");
    if (a.join("|") === sortedNames) return shuffle(arr);
    return a;
  }

  function correctnessArray() {
    return order.map((name, i) => solution[i].name === name);
  }

  function score() {
    return correctnessArray().filter(Boolean).length;
  }

  function emojiGrid() {
    return correctnessArray().map((ok) => (ok ? "🟩" : "🟥")).join("");
  }

  function render() {
    list.innerHTML = "";
    const correctness = correctnessArray();

    order.forEach((name, index) => {
      const li = document.createElement("li");
      li.className = "sort-item";

      if (showFeedback) {
        li.classList.add(correctness[index] ? "sort-item--correct" : "sort-item--wrong");
      }

      const rank = document.createElement("span");
      rank.className = "sort-rank";
      rank.textContent = index + 1;

      const label = document.createElement("span");
      label.className = "sort-label";
      label.textContent = name;
      if (finished) {
        const item = solution.find((s) => s.name === name);
        label.textContent += "  (" + item.year + ")";
      }

      li.appendChild(rank);
      li.appendChild(label);

      if (!finished) {
        const controls = document.createElement("div");
        controls.className = "sort-controls";

        const up = document.createElement("button");
        up.textContent = "↑";
        up.setAttribute("aria-label", "Monter " + name);
        up.disabled = index === 0;
        up.onclick = () => move(index, -1);

        const down = document.createElement("button");
        down.textContent = "↓";
        down.setAttribute("aria-label", "Descendre " + name);
        down.disabled = index === order.length - 1;
        down.onclick = () => move(index, 1);

        controls.appendChild(up);
        controls.appendChild(down);
        li.appendChild(controls);
      }

      list.appendChild(li);
    });

    checkBtn.style.display = finished ? "none" : "inline-block";
    renderHistory();
    if (finished) showResult();
  }

  function renderHistory() {
    if (attempts.length === 0) {
      history.innerHTML = "";
      return;
    }
    history.innerHTML =
      "<h3 class='history-title'>Tes essais</h3>" +
      attempts
        .map(
          (a, i) =>
            `<div class="history-row">
               <span class="history-emoji">${a.emoji}</span>
               <span class="history-errors">${a.errors} erreur${a.errors > 1 ? "s" : ""}</span>
             </div>`
        )
        .join("");
  }

  function move(index, dir) {
    if (finished) return;
    const target = index + dir;
    if (target < 0 || target >= order.length) return;
    [order[index], order[target]] = [order[target], order[index]];
    showFeedback = false; // l'arrangement a changé, on retire les couleurs jusqu'au prochain essai
    save();
    render();
  }

  function save() {
    localStorage.setItem(
      storageKey,
      JSON.stringify({ order, finished, attempts })
    );
  }

  function showResult() {
    const s = score();
    result.innerHTML = `
      <p class="score-line">Réussi en ${attempts.length} essai${attempts.length > 1 ? "s" : ""} !</p>
      <p class="emoji-grid">${emojiGrid()}</p>
      <button id="share-btn" class="play-btn">Copier mon résultat</button>
    `;
    document.getElementById("share-btn").onclick = () => {
      const historyText = attempts.map((a) => a.emoji).join("\n");
      const text = `Chronolog #${puzzle.dayIndex} — ${puzzle.theme.label}\nRéussi en ${attempts.length} essai${attempts.length > 1 ? "s" : ""}\n${historyText}`;
      navigator.clipboard.writeText(text).then(() => {
        document.getElementById("share-btn").textContent = "Copié ✓";
      });
    };
  }

  checkBtn.onclick = () => {
    const s = score();
    const errors = order.length - s;
    attempts.push({ emoji: emojiGrid(), errors });
    showFeedback = true;

    if (errors === 0) {
      finished = true;
    }

    save();
    render();
  };

  render();
})();
