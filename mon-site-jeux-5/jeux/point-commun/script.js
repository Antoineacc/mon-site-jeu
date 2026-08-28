(function () {
  const { dayIndex, puzzle } = getDailyConnections();
  const storageKey = "pointcommun-" + dayIndex;
  const saved = JSON.parse(localStorage.getItem(storageKey) || "null");

  const allWords = [...puzzle.targetWords, ...puzzle.decoyWords];

  let order = saved ? saved.order : shuffle(allWords);
  let errors = saved ? saved.errors : 0;
  let selected = saved ? saved.selected : [];
  let finished = saved ? saved.finished : false;

  const dayLabel = document.getElementById("day-label");
  const instructionsEl = document.getElementById("puzzle-instructions");
  const errorCounter = document.getElementById("error-counter");
  const solvedBoard = document.getElementById("solved-groups");
  const grid = document.getElementById("word-grid");
  const validateBtn = document.getElementById("validate-btn");
  const result = document.getElementById("result");

  dayLabel.textContent = "Grille n°" + dayIndex;
  instructionsEl.innerHTML = `Parmi ces 16 <strong>${puzzle.category}</strong>, trouve les 4 qui ont un point commun.`;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function save() {
    localStorage.setItem(storageKey, JSON.stringify({ order, errors, selected, finished }));
  }

  function isTarget(word) {
    return puzzle.targetWords.includes(word);
  }

  function render() {
    errorCounter.textContent = errors > 0 ? `${errors} erreur${errors > 1 ? "s" : ""}` : "";

    if (finished) {
      solvedBoard.innerHTML = `<div class="solved-group-row" style="background:#F1C40F33; border:1px solid #F1C40F;">
        <p class="solved-group-name" style="color:#F1C40F">Ces 4 ${puzzle.category} ${puzzle.criterion}</p>
        <p class="solved-group-words">${puzzle.targetWords.join(" · ")}</p>
      </div>`;
    } else {
      solvedBoard.innerHTML = "";
    }

    grid.innerHTML = order
      .map((word) => {
        const cls = selected.includes(word) ? "word-tile word-tile--selected" : "word-tile";
        return `<button class="${cls}" data-word="${word}" ${finished ? "disabled" : ""}>${word}</button>`;
      })
      .join("");

    grid.querySelectorAll(".word-tile").forEach((btn) => {
      btn.onclick = () => toggleSelect(btn.dataset.word);
    });

    validateBtn.disabled = selected.length !== 4;
    validateBtn.style.display = finished ? "none" : "block";

    if (finished) {
      result.innerHTML = `
        <p class="score-line">Trouvé ! (${errors} erreur${errors === 1 ? "" : "s"})</p>
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
    save();
    render();
  }

  validateBtn.onclick = () => {
    if (selected.length !== 4) return;
    const allCorrect = selected.every(isTarget);

    if (allCorrect) {
      finished = true;
      save();
      render();
    } else {
      errors++;
      grid.querySelectorAll(".word-tile--selected").forEach((el) => el.classList.add("word-tile--shake"));
      save();
      setTimeout(() => {
        selected = [];
        save();
        render();
      }, 350);
    }
  };

  render();
})();
