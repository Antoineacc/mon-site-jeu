(function () {
  const LANGS = {
    fr: { label: "Français" },
    en: { label: "English" },
    es: { label: "Español" },
  };

  // Gestion des onglets
  document.querySelectorAll(".lang-tab").forEach((tab) => {
    tab.onclick = () => {
      document.querySelectorAll(".lang-tab").forEach((t) => t.classList.remove("lang-tab--active"));
      document.querySelectorAll(".lang-panel").forEach((p) => (p.style.display = "none"));
      tab.classList.add("lang-tab--active");
      document.getElementById("panel-" + tab.dataset.lang).style.display = "block";
    };
  });

  let dayIndexGlobal = null;

  Object.keys(LANGS).forEach((lang) => createAnagramGame(lang));

  function createAnagramGame(lang) {
    const { dayIndex, item } = getDailyAnagram(lang);
    dayIndexGlobal = dayIndex;
    document.getElementById("day-label").textContent = "Grille n°" + dayIndex;

    const storageKey = "anagramme-" + lang + "-" + dayIndex;
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null");

    let scrambled = saved ? saved.scrambled : shuffleLetters(item.word);
    let attempts = saved ? saved.attempts : [];
    let cluesShown = saved ? saved.cluesShown : false;
    let finished = saved ? saved.finished : false;

    const panel = document.getElementById("panel-" + lang);
    panel.innerHTML = `
      <p class="scrambled-letters">${scrambled}</p>
      <p id="clue-${lang}" class="clue-text"></p>
      <form id="form-${lang}" class="guess-form">
        <input id="input-${lang}" type="text" placeholder="Ta réponse..." autocomplete="off">
        <button type="submit">Valider</button>
      </form>
      <div id="attempts-${lang}" class="attempts-board"></div>
      <div id="result-${lang}" class="result"></div>
    `;

    const clueEl = document.getElementById("clue-" + lang);
    const form = document.getElementById("form-" + lang);
    const input = document.getElementById("input-" + lang);
    const board = document.getElementById("attempts-" + lang);
    const result = document.getElementById("result-" + lang);

    function save() {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ scrambled, attempts, cluesShown, finished })
      );
    }

    function render() {
      clueEl.textContent = cluesShown ? "💡 Indice : " + item.clue : "";
      board.innerHTML = attempts
        .map((a) => `<div class="attempt-row"><span class="attempt-guess">${a}</span><span class="attempt-feedback">❌</span></div>`)
        .join("");
      form.style.display = finished ? "none" : "flex";

      if (finished) {
        const errors = attempts.length;
        result.innerHTML = `
          <p class="score-line">✅ ${capitalize(item.word)} — trouvé avec ${errors} erreur${errors === 1 ? "" : "s"}.</p>
        `;
      } else {
        result.innerHTML = "";
      }
    }

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    form.onsubmit = (e) => {
      e.preventDefault();
      if (finished) return;
      const guess = input.value.trim();
      if (!guess) return;

      if (isCorrectAnswer(guess, [item.word])) {
        finished = true;
      } else {
        attempts.push(guess);
        cluesShown = true;
      }
      input.value = "";
      save();
      render();
    };

    render();
  }
})();
