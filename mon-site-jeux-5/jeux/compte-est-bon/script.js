(function () {
  const { dayIndex, puzzle } = getDailyCompte();
  const storageKey = "compte-" + dayIndex;
  const saved = JSON.parse(localStorage.getItem(storageKey) || "null");

  const OPERATORS = ["+", "−", "×", "÷"];

  let pool = saved
    ? saved.pool
    : puzzle.numbers.map((v, i) => ({ id: i, value: v, used: false, computed: false }));
  let nextId = saved ? saved.nextId : puzzle.numbers.length;
  let log = saved ? saved.log : []; // ["75 + 25 = 100", ...]
  let finished = saved ? saved.finished : false;

  let selectedFirst = null;
  let selectedOperator = null;

  const targetValue = document.getElementById("target-value");
  const dayLabel = document.getElementById("day-label");
  const tilesEl = document.getElementById("number-tiles");
  const operatorRow = document.getElementById("operator-row");
  const undoBtn = document.getElementById("undo-btn");
  const resetBtn = document.getElementById("reset-btn");
  const opError = document.getElementById("op-error");
  const historyLog = document.getElementById("history-log");
  const result = document.getElementById("result");

  dayLabel.textContent = "Grille n°" + dayIndex;
  targetValue.textContent = puzzle.target;

  operatorRow.innerHTML = OPERATORS.map(
    (op) => `<button class="operator-btn" data-op="${op}">${op}</button>`
  ).join("");

  function save() {
    localStorage.setItem(storageKey, JSON.stringify({ pool, nextId, log, finished }));
  }

  function computeOp(a, op, b) {
    switch (op) {
      case "+":
        return { ok: true, value: a + b };
      case "×":
        return { ok: true, value: a * b };
      case "−":
        if (a < b) return { ok: false, error: "Le premier nombre doit être le plus grand pour une soustraction." };
        return { ok: true, value: a - b };
      case "÷":
        if (b === 0 || a % b !== 0) return { ok: false, error: "Cette division ne tombe pas juste." };
        return { ok: true, value: a / b };
    }
  }

  function render() {
    opError.textContent = "";

    tilesEl.innerHTML = pool
      .map((t) => {
        if (t.used) return "";
        let cls = "number-tile";
        if (t.computed) cls += " number-tile--computed";
        if (selectedFirst === t.id) cls += " number-tile--selected";
        return `<button class="${cls}" data-id="${t.id}" ${finished ? "disabled" : ""}>${t.value}</button>`;
      })
      .join("");

    tilesEl.querySelectorAll(".number-tile").forEach((btn) => {
      btn.onclick = () => onTileClick(Number(btn.dataset.id));
    });

    operatorRow.querySelectorAll(".operator-btn").forEach((btn) => {
      const isSelected = selectedOperator === btn.dataset.op;
      btn.classList.toggle("operator-btn--selected", isSelected);
      btn.disabled = finished || selectedFirst === null;
    });

    undoBtn.disabled = selectedFirst === null;

    historyLog.innerHTML = log.map((line) => `<div>${line}</div>`).join("");

    if (finished) {
      result.innerHTML = `
        <p class="score-line">🎯 Le compte est bon ! Trouvé en ${log.length} opération${log.length > 1 ? "s" : ""}.</p>
        <button id="share-btn" class="share-btn">Copier mon résultat</button>
      `;
      document.getElementById("share-btn").onclick = () => {
        const text = `Le compte est bon #${dayIndex}\nCible : ${puzzle.target}\n${log.join(" | ")}`;
        navigator.clipboard.writeText(text).then(() => {
          document.getElementById("share-btn").textContent = "Copié ✓";
        });
      };
    } else {
      result.innerHTML = "";
    }
  }

  function onTileClick(id) {
    if (finished) return;
    const tile = pool.find((t) => t.id === id);
    if (!tile || tile.used) return;

    if (selectedFirst === null) {
      selectedFirst = id;
      render();
      return;
    }

    if (selectedFirst === id) {
      // désélection
      selectedFirst = null;
      selectedOperator = null;
      render();
      return;
    }

    if (selectedOperator === null) {
      // change juste le nombre sélectionné tant qu'aucun opérateur n'est choisi
      selectedFirst = id;
      render();
      return;
    }

    // deuxième nombre + opérateur déjà choisis → on calcule
    const first = pool.find((t) => t.id === selectedFirst);
    const outcome = computeOp(first.value, selectedOperator, tile.value);

    if (!outcome.ok) {
      opError.textContent = "❌ " + outcome.error;
      selectedFirst = null;
      selectedOperator = null;
      render();
      return;
    }

    first.used = true;
    tile.used = true;
    const newTile = { id: nextId++, value: outcome.value, used: false, computed: true };
    pool.push(newTile);
    log.push(`${first.value} ${selectedOperator} ${tile.value} = ${outcome.value}`);

    selectedFirst = null;
    selectedOperator = null;

    if (outcome.value === puzzle.target) {
      finished = true;
    }

    save();
    render();
  }

  operatorRow.addEventListener("click", (e) => {
    const btn = e.target.closest(".operator-btn");
    if (!btn || finished || selectedFirst === null) return;
    selectedOperator = selectedOperator === btn.dataset.op ? null : btn.dataset.op;
    render();
  });

  undoBtn.onclick = () => {
    selectedFirst = null;
    selectedOperator = null;
    render();
  };

  resetBtn.onclick = () => {
    pool = puzzle.numbers.map((v, i) => ({ id: i, value: v, used: false, computed: false }));
    nextId = puzzle.numbers.length;
    log = [];
    finished = false;
    selectedFirst = null;
    selectedOperator = null;
    save();
    render();
  };

  render();
})();
