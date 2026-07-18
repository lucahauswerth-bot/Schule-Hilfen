const DATA = {
  mathematik: {
    label: "Mathematik",
    levels: [
      { id: "klasse-05", label: "Klasse 5", courses: [] },
      { id: "klasse-06", label: "Klasse 6", courses: [] },
      { id: "klasse-07", label: "Klasse 7", courses: [] },
      { id: "klasse-08", label: "Klasse 8", courses: [] },
      {
        id: "klasse-09",
        label: "Klasse 9",
        courses: [
          {
            id: "koerper",
            label: "Körper",
            summary: "Hilfen zu Körpern, Netzen, Oberfläche und Volumen.",
            tags: ["Geometrie", "Darstellungen", "Formeln"],
            helps: [
              {
                title: "Körper erkennen",
                text: "Prüfe zuerst: Welche Grundfläche liegt vor? Gibt es parallele Flächen, Spitzen oder gekrümmte Flächen?",
                steps: ["Körper benennen", "gegebene Maße markieren", "gesuchte Größe notieren"]
              },
              {
                title: "Oberfläche berechnen",
                text: "Die Oberfläche besteht aus allen Außenflächen. Zerlege den Körper in bekannte Flächen und addiere ihre Inhalte.",
                steps: ["Netz skizzieren", "Teilflächen berechnen", "Einheiten prüfen"]
              },
              {
                title: "Volumen berechnen",
                text: "Volumen beschreibt, wie viel Raum ein Körper einnimmt. Bei Prismen gilt oft: Grundfläche mal Höhe.",
                steps: ["Grundfläche bestimmen", "Höhe senkrecht zur Grundfläche finden", "Formel einsetzen"]
              }
            ]
          }
        ]
      },
      {
        id: "klasse-10",
        label: "Klasse 10",
        courses: [
          {
            id: "quadratische-funktionen",
            label: "Quadratische Funktionen",
            summary: "Hilfen zu Parabeln, Scheitelpunkten, Nullstellen und Funktionsgleichungen.",
            tags: ["Funktionen", "Parabeln", "Graphen"],
            helps: [
              {
                title: "Normalparabel verstehen",
                text: "Die Funktion f(x) = x² ist die Grundform. Alle anderen Parabeln lassen sich als Veränderung dieser Form verstehen.",
                steps: ["Öffnung prüfen", "Verschiebung ablesen", "Streckung oder Stauchung erkennen"]
              },
              {
                title: "Scheitelpunkt ablesen",
                text: "In der Scheitelpunktform f(x) = a(x - d)² + e liegt der Scheitelpunkt bei S(d | e). Achte auf das Vorzeichen bei d.",
                steps: ["Klammerterm betrachten", "d mit Vorzeichenregel bestimmen", "e direkt übernehmen"]
              },
              {
                title: "Nullstellen prüfen",
                text: "Nullstellen sind die x-Werte, bei denen f(x) = 0 gilt. Graphisch sind es die Schnittpunkte mit der x-Achse.",
                steps: ["f(x) = 0 setzen", "Gleichung lösen", "Ergebnis durch Einsetzen kontrollieren"]
              }
            ]
          }
        ]
      },
      { id: "ef", label: "EF", courses: [] },
      { id: "q1", label: "Q1", courses: [] },
      { id: "q2", label: "Q2", courses: [] }
    ]
  },
  sport: {
    label: "Sport",
    levels: [
      { id: "klasse-05", label: "Klasse 5", courses: [] },
      { id: "klasse-06", label: "Klasse 6", courses: [] },
      { id: "klasse-07", label: "Klasse 7", courses: [] },
      { id: "klasse-08", label: "Klasse 8", courses: [] },
      { id: "klasse-09", label: "Klasse 9", courses: [] },
      { id: "klasse-10", label: "Klasse 10", courses: [] },
      { id: "ef", label: "EF", courses: [] },
      {
        id: "q1",
        label: "Q1",
        courses: [
          {
            id: "badminton",
            label: "Badminton",
            summary: "Technik- und Taktikhilfen für Einzel und Doppel.",
            tags: ["Rückschlagspiel", "Technik", "Taktik"],
            helps: [
              { title: "Clear", text: "Treffe den Ball hoch vor dem Körper und spiele ihn weit nach hinten.", steps: ["seitlich stellen", "Ausholbewegung", "Treffpunkt hoch", "Arm ausschwingen"] },
              { title: "Drop", text: "Der Drop sieht zunächst wie ein Clear aus, fällt aber kurz hinter das Netz.", steps: ["Bewegung antäuschen", "Schläger abbremsen", "kurze Flugkurve beobachten"] },
              { title: "Taktische Grundidee", text: "Bringe dein Gegenüber in Bewegung und öffne freie Räume.", steps: ["lang-kurz wechseln", "links-rechts wechseln", "nach dem Schlag Grundposition einnehmen"] }
            ]
          },
          {
            id: "calisthenics",
            label: "Calisthenics",
            summary: "Hilfen zu Körperspannung, Progressionen und sauberer Ausführung.",
            tags: ["Fitness", "Körperspannung", "Progression"],
            helps: [
              { title: "Körperspannung", text: "Spanne Bauch, Gesäß und Rücken aktiv an. Der Körper bleibt stabil und kontrolliert.", steps: ["Grundposition einnehmen", "Spannung aufbauen", "ruhig atmen"] },
              { title: "Progression wählen", text: "Wähle eine Variante, die technisch sauber gelingt und trotzdem herausfordert.", steps: ["leichtere Variante testen", "saubere Wiederholungen zählen", "erst dann steigern"] },
              { title: "Feedback geben", text: "Gutes Feedback beschreibt Beobachtbares und nennt einen nächsten konkreten Schritt.", steps: ["eine Stärke nennen", "eine Korrektur nennen", "erneut beobachten"] }
            ]
          },
          {
            id: "roundnet",
            label: "Roundnet",
            summary: "Hilfen zu Annahme, Zuspiel, Angriff und Teamkommunikation.",
            tags: ["Spiel", "Kooperation", "Taktik"],
            helps: [
              { title: "Drei-Kontakt-Idee", text: "Annahme, Zuspiel und Angriff strukturieren den Spielzug und geben dem Team Zeit.", steps: ["Ball kontrollieren", "Partner anspielbar machen", "gezielt angreifen"] },
              { title: "Positionierung", text: "Nach jedem Kontakt öffnet ihr wieder Raum und stellt euch so, dass beide reagieren können.", steps: ["nicht stehen bleiben", "freie Seite erkennen", "kommunizieren"] },
              { title: "Angriff variieren", text: "Ein guter Angriff ist nicht immer hart. Winkel, Tempo und Platzierung sind entscheidend.", steps: ["Gegner beobachten", "Richtung ändern", "kurz oder weit spielen"] }
            ]
          }
        ]
      },
      { id: "q2", label: "Q2", courses: [] }
    ]
  }
};

let currentSubject = "mathematik";

const levelSelect = document.getElementById("levelSelect");
const courseSelect = document.getElementById("courseSelect");
const app = document.getElementById("app");

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    currentSubject = button.dataset.subject;
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("is-active", tab === button));
    fillLevels();
    render();
  });
});

document.getElementById("copyLink").addEventListener("click", async () => {
  const url = buildUrl();
  try {
    await navigator.clipboard.writeText(url);
    document.getElementById("copyLink").textContent = "Kopiert";
    setTimeout(() => document.getElementById("copyLink").textContent = "Link kopieren", 1200);
  } catch {
    window.prompt("Link kopieren:", url);
  }
});

levelSelect.addEventListener("change", () => {
  fillCourses();
  render();
});

courseSelect.addEventListener("change", render);

function fillLevels() {
  levelSelect.innerHTML = DATA[currentSubject].levels
    .map((level) => `<option value="${level.id}">${level.label}</option>`)
    .join("");
  fillCourses();
}

function fillCourses() {
  const level = getLevel();
  const options = [{ id: "uebersicht", label: "Übersicht" }, ...level.courses];
  courseSelect.innerHTML = options
    .map((course) => `<option value="${course.id}">${course.label}</option>`)
    .join("");
}

function getLevel() {
  return DATA[currentSubject].levels.find((level) => level.id === levelSelect.value) || DATA[currentSubject].levels[0];
}

function getCourse(level) {
  return level.courses.find((course) => course.id === courseSelect.value);
}

function buildUrl() {
  const levelId = levelSelect.value;
  const courseId = courseSelect.value;
  const suffix = courseId === "uebersicht" ? `${currentSubject}/${levelId}` : `${currentSubject}/${levelId}/${courseId}`;
  return `${location.origin}${location.pathname}#/${suffix}`;
}

function render() {
  const level = getLevel();
  const course = getCourse(level);
  history.replaceState(null, "", buildUrl());

  if (!course) {
    app.innerHTML = renderOverview(level);
    return;
  }

  app.innerHTML = `
    <article class="panel">
      <div class="panel-head">
        <div>
          <p class="crumb">${DATA[currentSubject].label} / ${level.label}</p>
          <h2>${course.label}</h2>
          <p>${course.summary}</p>
          <div class="tag-row">${course.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        </div>
        <div class="link-box">${buildUrl()}</div>
      </div>
      <div class="help-list">
        ${course.helps.map(renderHelp).join("")}
      </div>
    </article>
  `;
}

function renderOverview(level) {
  const courses = level.courses;
  const courseCards = courses.length
    ? courses.map((course) => `
        <button class="card" type="button" data-course="${course.id}">
          <strong>${course.label}</strong>
          ${course.summary}
          <div class="tag-row">${course.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        </button>
      `).join("")
    : `<div class="empty">Für ${DATA[currentSubject].label} / ${level.label} ist die Struktur vorbereitet. Konkrete Hilfen können hier ergänzt werden, sobald eine Reihe ansteht.</div>`;

  setTimeout(() => {
    document.querySelectorAll("[data-course]").forEach((card) => {
      card.addEventListener("click", () => {
        courseSelect.value = card.dataset.course;
        render();
      });
    });
  });

  return `
    <article class="panel">
      <div class="panel-head">
        <div>
          <p class="crumb">${DATA[currentSubject].label}</p>
          <h2>${level.label}</h2>
          <p>Vorbereiteter Bereich für Hilfen dieser Stufe.</p>
        </div>
        <div class="link-box">${buildUrl()}</div>
      </div>
      <div class="grid">${courseCards}</div>
    </article>
  `;
}

function renderHelp(help) {
  return `
    <section class="help-item">
      <h3>${help.title}</h3>
      <p>${help.text}</p>
      <ol class="steps">${help.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </section>
  `;
}

function applyRoute() {
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (parts[0] && DATA[parts[0]]) currentSubject = parts[0];
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.subject === currentSubject));
  fillLevels();
  if (parts[1]) levelSelect.value = parts[1];
  fillCourses();
  if (parts[2]) courseSelect.value = parts[2];
  render();
}

window.addEventListener("hashchange", applyRoute);
applyRoute();
