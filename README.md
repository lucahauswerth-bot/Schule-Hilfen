<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LGS-Werkstatt - Lineare Gleichungssysteme verstehen und lösen</title>
    <style>
        :root{
            --pr:#0891b2;--prd:#0e7490;--prx:#164e63;--prb:#ecfeff;
            --ok:#16a34a;--okb:#f0fdf4;--err:#dc2626;--errb:#fef2f2;
            --wrn:#f59e0b;--wrnb:#fffbeb;--ink:#172033;--muted:#64748b;
            --g50:#f8fafc;--g100:#f1f5f9;--g200:#e2e8f0;--g300:#cbd5e1;
            --paper:#ffffff;--shadow:0 18px 48px rgba(15,23,42,0.14);
        }
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:Verdana,"Segoe UI",sans-serif;background:#eef6f8;color:var(--ink);line-height:1.62;overflow-x:hidden}
        button,input,select{font:inherit}
        .hero{min-height:330px;padding:3.2rem 1.5rem 3rem;color:white;text-align:center;position:relative;overflow:hidden;background:
            linear-gradient(rgba(8,47,73,.72),rgba(14,116,144,.74)),
            radial-gradient(circle at 18% 22%,rgba(250,204,21,.38),transparent 24%),
            radial-gradient(circle at 84% 18%,rgba(45,212,191,.45),transparent 28%),
            linear-gradient(135deg,#0c4a6e,#0891b2 54%,#14b8a6)}
        .hero::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.11) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.11) 1px,transparent 1px);background-size:42px 42px;mask-image:radial-gradient(ellipse at center,#000 35%,transparent 88%)}
        .hero-line{position:absolute;height:2px;width:190px;background:#facc15;box-shadow:0 0 0 7px rgba(250,204,21,.08);transform:rotate(-18deg);left:8%;top:62%;border-radius:99px}
        .hero-line.two{width:230px;transform:rotate(23deg);left:auto;right:7%;top:38%;background:#86efac;box-shadow:0 0 0 7px rgba(134,239,172,.08)}
        .hero-dot{position:absolute;width:13px;height:13px;border-radius:50%;background:white;left:45%;top:48%;box-shadow:0 0 0 8px rgba(255,255,255,.14)}
        .hero h1{position:relative;font-size:clamp(1.65rem,4vw,2.8rem);font-weight:800;max-width:940px;margin:0 auto .55rem;letter-spacing:0}
        .hero-sub{position:relative;max-width:700px;margin:0 auto;font-size:1rem;opacity:.92}
        .hero-eq{position:relative;display:inline-block;margin-top:1.1rem;padding:.6rem 1.1rem;border-radius:10px;border:1px solid rgba(255,255,255,.26);background:rgba(255,255,255,.13);backdrop-filter:blur(5px);font-weight:700}
        .dashboard{max-width:1040px;margin:0 auto;padding:2rem 1.2rem 4rem}
        .top-progress{background:white;border:1px solid var(--g200);border-radius:14px;padding:1rem 1.2rem;margin-top:-3rem;position:relative;box-shadow:0 12px 35px rgba(15,23,42,.13)}
        .progress-head{display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:.7rem;flex-wrap:wrap}
        .progress-head strong{font-size:.95rem}
        .progress-head span{color:var(--muted);font-size:.86rem}
        .meter{height:12px;border-radius:99px;background:var(--g100);overflow:hidden;border:1px solid var(--g200)}
        .meter-fill{height:100%;width:0;background:linear-gradient(90deg,#0891b2,#14b8a6,#22c55e);transition:width .35s}
        .progress-pills{display:flex;gap:.35rem;flex-wrap:wrap;margin-top:.8rem}
        .pill{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:var(--g100);color:var(--muted);font-size:.8rem;font-weight:800;border:1px solid var(--g200)}
        .pill.done{background:var(--ok);border-color:var(--ok);color:white}
        .section-label{font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:#64748b;margin:2.1rem 0 .85rem}
        .card-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}
        .launch-card{min-height:190px;background:white;border:1px solid var(--g200);border-radius:14px;padding:1.25rem;position:relative;overflow:hidden;cursor:pointer;text-align:left;transition:transform .22s,box-shadow .22s,border-color .22s}
        .launch-card::before{content:"";position:absolute;left:0;top:0;width:5px;height:100%;background:var(--pr)}
        .launch-card:hover{transform:translateY(-5px);box-shadow:var(--shadow);border-color:transparent}
        .launch-card.done{background:linear-gradient(135deg,var(--okb),#fff)}
        .launch-card.locked{opacity:.48;cursor:not-allowed;filter:saturate(.65)}
        .launch-card.locked:hover{transform:none;box-shadow:none;border-color:var(--g200)}
        .launch-card.locked::after{content:"Noch gesperrt";position:absolute;right:.85rem;bottom:.85rem;background:var(--g100);border:1px solid var(--g200);color:var(--muted);border-radius:99px;padding:.18rem .55rem;font-size:.72rem;font-weight:800}
        .lc-icon{width:45px;height:45px;border-radius:11px;display:grid;place-items:center;background:var(--pr);color:white;font-weight:800;font-size:1.1rem;margin-bottom:.85rem}
        .lc-title{font-weight:800;color:#0f172a;margin-bottom:.35rem}
        .lc-desc{font-size:.84rem;color:var(--muted);line-height:1.48}
        .lc-arrow{position:absolute;right:1rem;top:1rem;color:#94a3b8;font-weight:800}
        .c1::before,.c1 .lc-icon{background:#0891b2}.c2::before,.c2 .lc-icon{background:#0d9488}.c3::before,.c3 .lc-icon{background:#2563eb}.c4::before,.c4 .lc-icon{background:#16a34a}
        .c5::before,.c5 .lc-icon{background:#f59e0b}.c6::before,.c6 .lc-icon{background:#0ea5e9}.c7::before,.c7 .lc-icon{background:#14b8a6}.c8::before,.c8 .lc-icon{background:#dc2626}
        .modal-overlay{position:fixed;inset:0;background:rgba(15,23,42,.58);backdrop-filter:blur(7px);display:flex;justify-content:center;align-items:flex-start;overflow:auto;padding:1.25rem;z-index:20;opacity:0;pointer-events:none;transition:opacity .25s}
        .modal-overlay.open{opacity:1;pointer-events:auto}
        .modal-panel{width:min(940px,100%);background:#eef6f8;border-radius:18px;margin:.5rem auto 3rem;box-shadow:0 28px 70px rgba(0,0,0,.24);transform:translateY(18px) scale(.985);transition:transform .28s}
        .modal-overlay.open .modal-panel{transform:translateY(0) scale(1)}
        .modal-topbar{position:sticky;top:0;z-index:2;background:white;border-bottom:1px solid var(--g200);border-radius:18px 18px 0 0;padding:1rem 1.25rem;display:flex;justify-content:space-between;align-items:center;gap:.7rem}
        .modal-topbar h2{font-size:1.05rem;display:flex;align-items:center;gap:.55rem;flex-wrap:wrap}
        .badge{display:inline-flex;align-items:center;min-height:24px;padding:.16rem .62rem;border-radius:99px;background:var(--pr);color:white;font-size:.7rem;text-transform:uppercase;letter-spacing:.6px}
        .close-btn{width:38px;height:38px;border:0;border-radius:10px;background:var(--g100);color:#475569;font-size:1.35rem;cursor:pointer}
        .close-btn:hover{background:var(--g200);color:#0f172a}
        .modal-body{padding:1.25rem}
        .station-progress{display:flex;gap:.35rem;margin-bottom:1rem}
        .dot{height:5px;flex:1;border-radius:99px;background:var(--g200)}
        .dot.on{background:var(--pr)}.dot.done{background:var(--ok)}
        .card{background:white;border:1px solid var(--g200);border-radius:12px;padding:1.2rem 1.3rem;margin-bottom:1rem;box-shadow:0 1px 4px rgba(15,23,42,.05)}
        .card.success{border-color:#86efac;background:linear-gradient(135deg,var(--okb),white)}
        .card-label{font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.9px;color:var(--muted);margin-bottom:.6rem;display:flex;align-items:center;gap:.35rem}
        .step-number{display:inline-grid;place-items:center;width:1.45rem;height:1.45rem;border-radius:50%;background:var(--pr);color:white;font-size:.72rem}
        h3{font-size:1.05rem;margin-bottom:.55rem;color:#0f172a}
        p+P,p+p{margin-top:.45rem}
        .math-display{background:var(--g50);border:1px solid var(--g200);border-radius:9px;padding:.85rem 1rem;margin:.75rem 0;text-align:center;font-size:1.02rem;font-weight:650;overflow-x:auto}
        .note-grid,.mini-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:.75rem;margin:.85rem 0}
        .info-card,.scenario-card{border:1px solid var(--g200);background:var(--g50);border-radius:10px;padding:.85rem;cursor:default;transition:border-color .2s,background .2s,transform .2s}
        .info-card:hover,.scenario-card:hover{border-color:var(--pr);background:var(--prb);transform:translateY(-2px)}
        .scenario-card.active{border-color:var(--pr);background:var(--prb)}
        .scenario-card strong,.info-card strong{display:block;margin-bottom:.25rem}
        .scenario-text{display:block;margin-top:.55rem;color:#334155;font-size:.9rem}
        .scenario-card.active .scenario-text{display:block}
        .scenario-solution{margin-top:.45rem;padding:.55rem .65rem;border-radius:8px;background:#f0fdf4;border:1px solid #bbf7d0;color:#14532d}
        .graph-box{height:230px;border:1px solid var(--g200);border-radius:12px;background:
            linear-gradient(90deg,rgba(148,163,184,.35) 1px,transparent 1px),
            linear-gradient(rgba(148,163,184,.35) 1px,transparent 1px),white;background-size:28px 28px;position:relative;overflow:hidden;margin:.85rem 0}
        .axis-x,.axis-y{position:absolute;background:#94a3b8}.axis-x{height:2px;left:0;right:0;top:50%}.axis-y{width:2px;top:0;bottom:0;left:50%}
        .line{position:absolute;height:3px;border-radius:99px;transform-origin:left center;left:11%;width:78%}
        .line.a{background:#0891b2;top:62%;transform:rotate(-27deg)}
        .line.b{background:#f59e0b;top:31%;transform:rotate(25deg)}
        .line.parallel{top:45%;transform:rotate(-27deg)}
        .line.same{top:62%;transform:rotate(-27deg);background:repeating-linear-gradient(90deg,#16a34a 0 14px,#f59e0b 14px 28px)}
        .point{position:absolute;width:16px;height:16px;border-radius:50%;background:#dc2626;left:49%;top:47%;box-shadow:0 0 0 8px rgba(220,38,38,.12)}
        .case-view{display:none}.case-view.visible{display:block}
        .input-row{display:flex;align-items:center;gap:.45rem;flex-wrap:wrap;margin:.7rem 0}
        .input-row label{font-weight:700;color:#334155}
        input[type="text"],input[type="number"]{width:88px;border:2px solid var(--g200);border-radius:8px;padding:.45rem .5rem;text-align:center;background:white}
        input.long{width:150px}
        input:focus{outline:0;border-color:var(--pr);box-shadow:0 0 0 3px rgba(8,145,178,.14)}
        .select-row{display:flex;gap:.55rem;flex-wrap:wrap;margin:.75rem 0}
        .choice{border:2px solid var(--g200);border-radius:9px;padding:.5rem .78rem;background:white;cursor:pointer;font-size:.9rem}
        .choice:hover{border-color:var(--pr);background:var(--prb)}
        .choice.selected{border-color:var(--pr);background:var(--prb);color:var(--prd);font-weight:800}
        .btn-group{display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.8rem}
        .btn{border:0;border-radius:9px;padding:.55rem 1rem;font-weight:800;cursor:pointer;transition:transform .18s,background .18s}
        .btn:hover{transform:translateY(-1px)}
        .btn-primary{background:var(--pr);color:white}.btn-primary:hover{background:var(--prd)}
        .btn-hint{background:var(--wrnb);color:#92400e;border:1px solid #facc15}
        .btn-solution{background:var(--g100);color:#334155;border:1px solid var(--g300)}
        .feedback,.hint-box,.solution-box{display:none;border-radius:9px;padding:.75rem .9rem;margin:.7rem 0;font-size:.92rem}
        .feedback.visible,.hint-box.visible,.solution-box.visible{display:block;animation:fade .22s ease}
        .feedback.success{background:var(--okb);border:1px solid #86efac;color:#166534;font-weight:700}
        .feedback.error{background:var(--errb);border:1px solid #fca5a5;color:#991b1b;font-weight:700}
        .hint-box{background:var(--wrnb);border:1px solid #fde68a;color:#78350f}
        .solution-box{background:var(--okb);border:1px solid #86efac;color:#14532d}
        .box-label{font-size:.72rem;font-weight:900;text-transform:uppercase;letter-spacing:.8px;margin-bottom:.2rem}
        .method-helper{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin:.85rem 0}
        .method-helper div{background:var(--g50);border:1px solid var(--g200);border-radius:10px;padding:.85rem}
        .final-score{font-size:1.1rem;font-weight:900;color:var(--prx);margin-top:.6rem}
        .finish-banner{display:none;background:linear-gradient(135deg,#d1fae5,#ecfeff);border:2px solid var(--ok);border-radius:12px;padding:1rem;margin-top:1rem;font-weight:900;color:#065f46;text-align:center}
        .finish-banner.visible{display:block}
        @keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:900px){.card-grid{grid-template-columns:repeat(2,1fr)}.method-helper,.note-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.hero{padding:2.4rem 1rem 2.5rem}.dashboard{padding-inline:.85rem}.top-progress{margin-top:-2.2rem}.card-grid,.mini-grid{grid-template-columns:1fr}.modal-overlay{padding:.55rem}.modal-panel,.modal-topbar{border-radius:12px}.modal-body{padding:.85rem}.card{padding:1rem}.graph-box{height:190px}.hero-line,.hero-line.two,.hero-dot{display:none}input[type="text"],input[type="number"]{width:76px}}
    </style>
</head>
<body>
    <header class="hero">
        <div class="hero-line"></div>
        <div class="hero-line two"></div>
        <div class="hero-dot"></div>
        <h1>LGS-Werkstatt - Lineare Gleichungssysteme verstehen und lösen</h1>
        <p class="hero-sub">Eine selbstständige Unterrichtsreihe für den Einstieg: erkunden, ausprobieren, prüfen, verstehen.</p>
        <div class="hero-eq">2 Gleichungen + 2 Unbekannte = ein gemeinsamer Punkt</div>
    </header>

    <main class="dashboard">
        <section class="top-progress" aria-label="Fortschritt">
            <div class="progress-head">
                <strong>Dein Werkstatt-Fortschritt</strong>
                <span id="progressText">0 von 8 Stationen abgeschlossen</span>
            </div>
            <div class="meter"><div class="meter-fill" id="meterFill"></div></div>
            <div class="progress-pills" id="progressPills"></div>
        </section>

        <div class="section-label">Stationen</div>
        <section class="card-grid">
            <button class="launch-card c1" id="card-s1" onclick="openModal('modal-s1')">
                <span class="lc-arrow">→</span><div class="lc-icon">1</div>
                <div class="lc-title">Motivation</div><div class="lc-desc">Wozu braucht man lineare Gleichungssysteme im Alltag?</div>
            </button>
            <button class="launch-card c2" id="card-s2" onclick="openModal('modal-s2')">
                <span class="lc-arrow">→</span><div class="lc-icon">2</div>
                <div class="lc-title">Lineare Gleichungen</div><div class="lc-desc">x, y, Gerade und kleine Rechenchecks.</div>
            </button>
            <button class="launch-card c3" id="card-s3" onclick="openModal('modal-s3')">
                <span class="lc-arrow">→</span><div class="lc-icon">3</div>
                <div class="lc-title">Zwei Geraden</div><div class="lc-desc">Schnittpunkt, keine Lösung oder unendlich viele?</div>
            </button>
            <button class="launch-card c4" id="card-s4" onclick="openModal('modal-s4')">
                <span class="lc-arrow">→</span><div class="lc-icon">4</div>
                <div class="lc-title">Gleichsetzen</div><div class="lc-desc">Wenn beide Gleichungen nach y aufgelöst sind.</div>
            </button>
            <button class="launch-card c5" id="card-s5" onclick="openModal('modal-s5')">
                <span class="lc-arrow">→</span><div class="lc-icon">5</div>
                <div class="lc-title">Einsetzen</div><div class="lc-desc">Eine Gleichung wird in die andere eingesetzt.</div>
            </button>
            <button class="launch-card c6" id="card-s6" onclick="openModal('modal-s6')">
                <span class="lc-arrow">→</span><div class="lc-icon">6</div>
                <div class="lc-title">Additionsverfahren</div><div class="lc-desc">Gegenzahlen nutzen und Gleichungen addieren.</div>
            </button>
            <button class="launch-card c7" id="card-s7" onclick="openModal('modal-s7')">
                <span class="lc-arrow">→</span><div class="lc-icon">7</div>
                <div class="lc-title">Methodenwahl</div><div class="lc-desc">Welche Methode passt wann?</div>
            </button>
            <button class="launch-card c8" id="card-s8" onclick="openModal('modal-s8')">
                <span class="lc-arrow">→</span><div class="lc-icon">8</div>
                <div class="lc-title">Abschlusstest</div><div class="lc-desc">5 gemischte Aufgaben mit direkter Rückmeldung.</div>
            </button>
        </section>
    </main>

    <div class="modal-overlay" id="modal-s1"><div class="modal-panel">
        <div class="modal-topbar"><h2><span class="badge">Station 1</span> Motivation: Wozu braucht man LGS?</h2><button class="close-btn" onclick="closeModal('modal-s1')">&times;</button></div>
        <div class="modal-body">
            <div class="station-progress"><div class="dot on"></div><div class="dot on"></div><div class="dot on"></div></div>
            <div class="card">
                <div class="card-label"><span class="step-number">1</span> Erkunden</div>
                <h3>Zwei Bedingungen gleichzeitig erfüllen</h3>
                <p>Ein lineares Gleichungssystem hilft, wenn zwei Aussagen gleichzeitig stimmen sollen. Hier siehst du typische Situationen mit einer direkten Lösungsidee.</p>
                <div class="mini-grid">
                    <div class="scenario-card"><strong>Handyverträge</strong>Grundgebühr und Preis pro GB vergleichen.<div class="scenario-text">Beispiel: Tarif A kostet 10 Euro Grundgebühr und 3 Euro pro GB. Tarif B kostet 22 Euro Grundgebühr und 1 Euro pro GB.<div class="scenario-solution"><strong>Lösungsidee:</strong> Beide Preise gleichsetzen. So findet man die Datenmenge, bei der beide Tarife gleich teuer sind.</div></div></div>
                    <div class="scenario-card"><strong>Mischungen</strong>Zwei Getränke oder Lösungen werden gemischt.<div class="scenario-text">Beispiel: Aus Saft und Wasser soll ein Getränk mit einer bestimmten Menge und einem bestimmten Geschmack entstehen.<div class="scenario-solution"><strong>Lösungsidee:</strong> Eine Gleichung beschreibt die Gesamtmenge, die andere den Anteil des Safts.</div></div></div>
                    <div class="scenario-card"><strong>Eintrittspreise</strong>Kino, Freizeitpark oder Theater.<div class="scenario-text">Beispiel: Eine Gruppe aus Kindern und Erwachsenen zahlt zusammen einen bekannten Gesamtpreis.<div class="scenario-solution"><strong>Lösungsidee:</strong> Eine Gleichung zählt die Personen, die zweite Gleichung beschreibt den Gesamtpreis.</div></div></div>
                    <div class="scenario-card"><strong>Wirtschaft</strong>Kosten, Gewinn und Break-even.<div class="scenario-text">Beispiel: Ein Produkt hat Herstellungskosten und bringt beim Verkauf Einnahmen.<div class="scenario-solution"><strong>Lösungsidee:</strong> Kosten und Einnahmen gleichsetzen. Der Schnittpunkt zeigt, ab wann kein Verlust mehr entsteht.</div></div></div>
                    <div class="scenario-card"><strong>Verkehr</strong>Treffpunkt zweier Fahrzeuge.<div class="scenario-text">Beispiel: Zwei Fahrzeuge starten an verschiedenen Orten und fahren aufeinander zu.<div class="scenario-solution"><strong>Lösungsidee:</strong> Für jedes Fahrzeug beschreibt eine Gleichung den Ort nach einer bestimmten Zeit. Der gemeinsame Ort ist der Treffpunkt.</div></div></div>
                    <div class="scenario-card"><strong>Ernährung</strong>Nährwerte berechnen.<div class="scenario-text">Beispiel: Zwei Lebensmittel sollen zusammen eine bestimmte Menge Kalorien und Protein liefern.<div class="scenario-solution"><strong>Lösungsidee:</strong> Eine Gleichung beschreibt die Kalorien, die andere die Proteinmenge. Die Lösung zeigt die passenden Mengen.</div></div></div>
                </div>
            </div>
            <div class="card">
                <div class="card-label"><span class="step-number">2</span> Abschluss der ersten Stunde</div>
                <h3>Was nehmen wir mit?</h3>
                <p>Lineare Gleichungssysteme sind nützlich, wenn zwei Bedingungen gleichzeitig gelten sollen. In der nächsten Station wiederholen wir die Grundlagen: lineare Gleichungen und Geraden.</p>
                <div class="feedback" id="s1fb"></div>
                <div class="hint-box" id="s1hint"><div class="box-label">Tipp</div>Lies die Beispiele und die grünen Lösungsideen. Danach kannst du die erste Station abschließen.</div>
                <div class="solution-box" id="s1sol"><div class="box-label">Merksatz</div>Ein LGS sucht Werte, die mehrere Bedingungen gleichzeitig erfüllen. Grafisch ist das oft ein gemeinsamer Schnittpunkt.</div>
                <div class="btn-group"><button class="btn btn-primary" onclick="checkS1()">Station 1 abschließen</button><button class="btn btn-hint" onclick="show('s1hint')">Tipp</button><button class="btn btn-solution" onclick="show('s1sol')">Merksatz anzeigen</button></div>
            </div>
        </div>
    </div></div>

    <div class="modal-overlay" id="modal-s2"><div class="modal-panel">
        <div class="modal-topbar"><h2><span class="badge">Station 2</span> Wiederholung: Lineare Gleichungen</h2><button class="close-btn" onclick="closeModal('modal-s2')">&times;</button></div>
        <div class="modal-body">
            <div class="station-progress"><div class="dot on"></div><div class="dot on"></div><div class="dot"></div></div>
            <div class="card">
                <div class="card-label"><span class="step-number">1</span> Kurz erklärt</div>
                <h3>Was ist eine lineare Gleichung?</h3>
                <p>Eine lineare Gleichung mit x und y beschreibt eine Gerade. x ist oft die Eingabe, y ist der passende Wert dazu.</p>
                <div class="math-display">y = 2x + 1</div>
                <div class="note-grid">
                    <div class="info-card"><strong>x</strong>Du wählst einen x-Wert, zum Beispiel x = 3.</div>
                    <div class="info-card"><strong>y</strong>Du rechnest den y-Wert aus: y = 2 · 3 + 1 = 7.</div>
                </div>
            </div>
            <div class="card">
                <div class="card-label"><span class="step-number">2</span> Aktiv werden</div>
                <h3>Prüfe und berechne</h3>
                <p>Gerade: <strong>y = 2x + 1</strong></p>
                <div class="input-row"><label>Liegt P(3 | 7) auf der Gerade?</label></div>
                <div class="select-row" data-group="s2point">
                    <button class="choice" onclick="selectChoice(this,'s2point')">Ja</button>
                    <button class="choice" onclick="selectChoice(this,'s2point')">Nein</button>
                </div>
                <div class="input-row"><label>Berechne y für x = 4:</label><input id="s2y" type="text"></div>
                <div class="feedback" id="s2fb"></div>
                <div class="hint-box" id="s2hint"><div class="box-label">Tipp</div>Setze x in y = 2x + 1 ein. Für den Punkt P(3 | 7): Prüfe 7 = 2 · 3 + 1.</div>
                <div class="solution-box" id="s2sol"><div class="box-label">Lösung</div>P(3 | 7) liegt auf der Gerade, denn 7 = 2 · 3 + 1. Für x = 4 gilt y = 2 · 4 + 1 = 9.</div>
                <div class="btn-group"><button class="btn btn-primary" onclick="checkS2()">Prüfen</button><button class="btn btn-hint" onclick="show('s2hint')">Tipp</button><button class="btn btn-solution" onclick="show('s2sol')">Lösung anzeigen</button></div>
            </div>
        </div>
    </div></div>

    <div class="modal-overlay" id="modal-s3"><div class="modal-panel">
        <div class="modal-topbar"><h2><span class="badge">Station 3</span> Zwei Geraden - eine gemeinsame Lösung</h2><button class="close-btn" onclick="closeModal('modal-s3')">&times;</button></div>
        <div class="modal-body">
            <div class="station-progress"><div class="dot on"></div><div class="dot on"></div><div class="dot on"></div></div>
            <div class="card">
                <div class="card-label"><span class="step-number">1</span> Verstehen</div>
                <h3>Die Lösung ist ein Schnittpunkt</h3>
                <p>Ein LGS mit zwei linearen Gleichungen zeigt zwei Geraden. Die gemeinsame Lösung ist der Punkt, der auf beiden Geraden liegt.</p>
                <div class="graph-box">
                    <div class="axis-x"></div><div class="axis-y"></div><div class="line a"></div><div class="line b"></div><div class="point"></div>
                </div>
                <p><strong>Drei Fälle:</strong> Genau eine Lösung, keine Lösung oder unendlich viele Lösungen.</p>
            </div>
            <div class="card">
                <div class="card-label"><span class="step-number">2</span> Auswahlaufgabe</div>
                <h3>Ordne den Fall zu</h3>
                <p>Für jedes Gleichungssystem: Welche Art von Lösung hat es?</p>
                <p><strong>A:</strong> y = x + 1 und y = -x + 5</p>
                <div class="select-row" data-group="s3a"><button class="choice" onclick="selectChoice(this,'s3a')">genau eine Lösung</button><button class="choice" onclick="selectChoice(this,'s3a')">keine Lösung</button><button class="choice" onclick="selectChoice(this,'s3a')">unendlich viele Lösungen</button></div>
                <p><strong>B:</strong> y = 2x + 1 und y = 2x - 3</p>
                <div class="select-row" data-group="s3b"><button class="choice" onclick="selectChoice(this,'s3b')">genau eine Lösung</button><button class="choice" onclick="selectChoice(this,'s3b')">keine Lösung</button><button class="choice" onclick="selectChoice(this,'s3b')">unendlich viele Lösungen</button></div>
                <p><strong>C:</strong> y = -3x + 4 und 2y = -6x + 8</p>
                <div class="select-row" data-group="s3c"><button class="choice" onclick="selectChoice(this,'s3c')">genau eine Lösung</button><button class="choice" onclick="selectChoice(this,'s3c')">keine Lösung</button><button class="choice" onclick="selectChoice(this,'s3c')">unendlich viele Lösungen</button></div>
                <div class="feedback" id="s3fb"></div>
                <div class="hint-box" id="s3hint"><div class="box-label">Tipp</div>Gleiche Steigung und anderer y-Achsenabschnitt bedeutet parallel. Genau gleiche Gerade bedeutet unendlich viele Lösungen.</div>
                <div class="solution-box" id="s3sol"><div class="box-label">Lösung</div>A: genau eine Lösung. B: keine Lösung. C: unendlich viele Lösungen, denn 2y = -6x + 8 ist dasselbe wie y = -3x + 4.</div>
                <div class="btn-group"><button class="btn btn-primary" onclick="checkS3()">Prüfen</button><button class="btn btn-hint" onclick="show('s3hint')">Tipp</button><button class="btn btn-solution" onclick="show('s3sol')">Lösung anzeigen</button></div>
            </div>
        </div>
    </div></div>

    <div class="modal-overlay" id="modal-s4"><div class="modal-panel">
        <div class="modal-topbar"><h2><span class="badge">Station 4</span> LGS lösen durch Gleichsetzen</h2><button class="close-btn" onclick="closeModal('modal-s4')">&times;</button></div>
        <div class="modal-body">
            <div class="station-progress"><div class="dot on"></div><div class="dot on"></div><div class="dot on"></div></div>
            <div class="card">
                <div class="card-label"><span class="step-number">1</span> Methode</div>
                <h3>Wenn beide Gleichungen nach y aufgelöst sind</h3>
                <p>Beide Gleichungen beschreiben y. Am Schnittpunkt ist der y-Wert gleich. Deshalb setzt man die rechten Seiten gleich.</p>
                <div class="math-display">y = 2x + 1 und y = -x + 7 → 2x + 1 = -x + 7</div>
            </div>
            <div class="card">
                <div class="card-label"><span class="step-number">2</span> Schrittweise Aufgabe</div>
                <h3>Löse: y = 2x + 1 und y = -x + 7</h3>
                <div class="input-row"><label>Nach dem Gleichsetzen: 3x =</label><input id="s4a" type="text"></div>
                <div class="input-row"><label>x =</label><input id="s4x" type="text"></div>
                <div class="input-row"><label>y =</label><input id="s4y" type="text"></div>
                <div class="feedback" id="s4fb"></div>
                <div class="hint-box" id="s4hint"><div class="box-label">Tipp</div>2x + 1 = -x + 7. Bringe die x auf eine Seite und die Zahlen auf die andere Seite.</div>
                <div class="solution-box" id="s4sol"><div class="box-label">Lösung</div>2x + 1 = -x + 7 → 3x = 6 → x = 2. Einsetzen: y = 2 · 2 + 1 = 5. Lösung: (2 | 5).</div>
                <div class="btn-group"><button class="btn btn-primary" onclick="checkS4()">Prüfen</button><button class="btn btn-hint" onclick="show('s4hint')">Tipp</button><button class="btn btn-solution" onclick="show('s4sol')">Lösung anzeigen</button></div>
            </div>
        </div>
    </div></div>

    <div class="modal-overlay" id="modal-s5"><div class="modal-panel">
        <div class="modal-topbar"><h2><span class="badge">Station 5</span> LGS lösen durch Einsetzen</h2><button class="close-btn" onclick="closeModal('modal-s5')">&times;</button></div>
        <div class="modal-body">
            <div class="station-progress"><div class="dot on"></div><div class="dot on"></div><div class="dot on"></div></div>
            <div class="card">
                <div class="card-label"><span class="step-number">1</span> Methode</div>
                <h3>Wenn eine Gleichung schon nach x oder y aufgelöst ist</h3>
                <p>Dann kannst du diesen Ausdruck in die andere Gleichung einsetzen. Aus zwei Unbekannten wird eine Unbekannte.</p>
                <div class="math-display">x = y + 1 und x + y = 7 → (y + 1) + y = 7</div>
            </div>
            <div class="card">
                <div class="card-label"><span class="step-number">2</span> Schritt-für-Schritt</div>
                <h3>Löse: x = y + 1 und x + y = 7</h3>
                <div class="input-row"><label>Nach dem Einsetzen: 2y + 1 =</label><input id="s5a" type="text"></div>
                <div class="input-row"><label>y =</label><input id="s5y" type="text"></div>
                <div class="input-row"><label>x =</label><input id="s5x" type="text"></div>
                <div class="feedback" id="s5fb"></div>
                <div class="hint-box" id="s5hint"><div class="box-label">Tipp</div>Setze für x den Term y + 1 ein: (y + 1) + y = 7.</div>
                <div class="solution-box" id="s5sol"><div class="box-label">Lösung</div>(y + 1) + y = 7 → 2y + 1 = 7 → 2y = 6 → y = 3. Dann x = y + 1 = 4. Lösung: (4 | 3).</div>
                <div class="btn-group"><button class="btn btn-primary" onclick="checkS5()">Prüfen</button><button class="btn btn-hint" onclick="show('s5hint')">Tipp</button><button class="btn btn-solution" onclick="show('s5sol')">Lösung anzeigen</button></div>
            </div>
        </div>
    </div></div>

    <div class="modal-overlay" id="modal-s6"><div class="modal-panel">
        <div class="modal-topbar"><h2><span class="badge">Station 6</span> LGS lösen durch Additionsverfahren</h2><button class="close-btn" onclick="closeModal('modal-s6')">&times;</button></div>
        <div class="modal-body">
            <div class="station-progress"><div class="dot on"></div><div class="dot on"></div><div class="dot on"></div></div>
            <div class="card">
                <div class="card-label"><span class="step-number">1</span> Methode</div>
                <h3>Besonders praktisch bei Gegenzahlen</h3>
                <p>Wenn in beiden Gleichungen zum Beispiel +2y und -2y stehen, kannst du die Gleichungen addieren. Eine Variable verschwindet.</p>
                <div class="math-display">3x + 2y = 16<br>5x - 2y = 8<br>----------------<br>8x = 24</div>
            </div>
            <div class="card">
                <div class="card-label"><span class="step-number">2</span> Übung</div>
                <h3>Löse: 3x + 2y = 16 und 5x - 2y = 8</h3>
                <div class="input-row"><label>Nach dem Addieren: 8x =</label><input id="s6a" type="text"></div>
                <div class="input-row"><label>x =</label><input id="s6x" type="text"></div>
                <div class="input-row"><label>y =</label><input id="s6y" type="text"></div>
                <div class="feedback" id="s6fb"></div>
                <div class="hint-box" id="s6hint"><div class="box-label">Tipp</div>Die Terme +2y und -2y heben sich auf. Danach x in eine der beiden Gleichungen einsetzen.</div>
                <div class="solution-box" id="s6sol"><div class="box-label">Lösung</div>3x + 2y = 16 und 5x - 2y = 8 → 8x = 24 → x = 3. Dann 3 · 3 + 2y = 16 → 2y = 7 → y = 3,5.</div>
                <div class="btn-group"><button class="btn btn-primary" onclick="checkS6()">Prüfen</button><button class="btn btn-hint" onclick="show('s6hint')">Tipp</button><button class="btn btn-solution" onclick="show('s6sol')">Lösung anzeigen</button></div>
            </div>
        </div>
    </div></div>

    <div class="modal-overlay" id="modal-s7"><div class="modal-panel">
        <div class="modal-topbar"><h2><span class="badge">Station 7</span> Methodenwahl</h2><button class="close-btn" onclick="closeModal('modal-s7')">&times;</button></div>
        <div class="modal-body">
            <div class="station-progress"><div class="dot on"></div><div class="dot on"></div><div class="dot on"></div></div>
            <div class="card">
                <div class="card-label"><span class="step-number">1</span> Entscheidungshilfe</div>
                <h3>Welche Methode passt?</h3>
                <div class="method-helper">
                    <div><strong>Gleichsetzen</strong><br>Beide Gleichungen sind nach derselben Variable aufgelöst.</div>
                    <div><strong>Einsetzen</strong><br>Eine Gleichung ist schon nach x oder y aufgelöst.</div>
                    <div><strong>Addieren</strong><br>Gegenzahlen oder passende Koeffizienten fallen schnell weg.</div>
                </div>
            </div>
            <div class="card">
                <div class="card-label"><span class="step-number">2</span> Mini-Quiz</div>
                <h3>Wähle eine passende Methode</h3>
                <p><strong>A:</strong> y = 3x - 2 und y = -x + 10</p>
                <div class="select-row" data-group="s7a"><button class="choice" onclick="selectChoice(this,'s7a')">Gleichsetzen</button><button class="choice" onclick="selectChoice(this,'s7a')">Einsetzen</button><button class="choice" onclick="selectChoice(this,'s7a')">Additionsverfahren</button></div>
                <p><strong>B:</strong> x = 2y + 1 und x + y = 10</p>
                <div class="select-row" data-group="s7b"><button class="choice" onclick="selectChoice(this,'s7b')">Gleichsetzen</button><button class="choice" onclick="selectChoice(this,'s7b')">Einsetzen</button><button class="choice" onclick="selectChoice(this,'s7b')">Additionsverfahren</button></div>
                <p><strong>C:</strong> 4x + 3y = 20 und 2x - 3y = 4</p>
                <div class="select-row" data-group="s7c"><button class="choice" onclick="selectChoice(this,'s7c')">Gleichsetzen</button><button class="choice" onclick="selectChoice(this,'s7c')">Einsetzen</button><button class="choice" onclick="selectChoice(this,'s7c')">Additionsverfahren</button></div>
                <div class="feedback" id="s7fb"></div>
                <div class="hint-box" id="s7hint"><div class="box-label">Tipp</div>A: beide nach y. B: x steht schon allein. C: +3y und -3y passen perfekt zusammen.</div>
                <div class="solution-box" id="s7sol"><div class="box-label">Lösung</div>A: Gleichsetzen. B: Einsetzen. C: Additionsverfahren.</div>
                <div class="btn-group"><button class="btn btn-primary" onclick="checkS7()">Prüfen</button><button class="btn btn-hint" onclick="show('s7hint')">Tipp</button><button class="btn btn-solution" onclick="show('s7sol')">Lösung anzeigen</button></div>
            </div>
        </div>
    </div></div>

    <div class="modal-overlay" id="modal-s8"><div class="modal-panel">
        <div class="modal-topbar"><h2><span class="badge">Station 8</span> Abschlusstest</h2><button class="close-btn" onclick="closeModal('modal-s8')">&times;</button></div>
        <div class="modal-body">
            <div class="station-progress"><div class="dot on"></div><div class="dot on"></div><div class="dot on"></div></div>
            <div class="card">
                <div class="card-label"><span class="step-number">1</span> 5 gemischte Aufgaben</div>
                <h3>Teste dich selbst</h3>
                <p>Trage Lösungen als Zahlen ein. Dezimalzahlen mit Komma oder Punkt sind möglich.</p>
                <p><strong>1.</strong> y = x + 2 und y = -x + 8</p>
                <div class="input-row"><label>x =</label><input id="t1x" type="text"><label>y =</label><input id="t1y" type="text"></div>
                <p><strong>2.</strong> x = y - 1 und x + y = 9</p>
                <div class="input-row"><label>x =</label><input id="t2x" type="text"><label>y =</label><input id="t2y" type="text"></div>
                <p><strong>3.</strong> 2x + y = 11 und 2x - y = 1</p>
                <div class="input-row"><label>x =</label><input id="t3x" type="text"><label>y =</label><input id="t3y" type="text"></div>
                <p><strong>4.</strong> y = 4x - 1. Berechne y für x = 2.</p>
                <div class="input-row"><label>y =</label><input id="t4y" type="text"></div>
                <p><strong>5.</strong> y = 2x + 3 und y = 2x - 5</p>
                <div class="select-row" data-group="t5"><button class="choice" onclick="selectChoice(this,'t5')">genau eine Lösung</button><button class="choice" onclick="selectChoice(this,'t5')">keine Lösung</button><button class="choice" onclick="selectChoice(this,'t5')">unendlich viele Lösungen</button></div>
                <div class="feedback" id="s8fb"></div>
                <div class="final-score" id="finalScore"></div>
                <div class="hint-box" id="s8hint"><div class="box-label">Tipp</div>Nutze pro Aufgabe die passende Methode. Bei Aufgabe 5 haben beide Geraden dieselbe Steigung.</div>
                <div class="solution-box" id="s8sol"><div class="box-label">Lösungen</div>1: (3 | 5). 2: (4 | 5). 3: (3 | 5). 4: y = 7. 5: keine Lösung.</div>
                <div class="finish-banner" id="finishBanner">Du hast die LGS-Werkstatt abgeschlossen.</div>
                <div class="btn-group"><button class="btn btn-primary" onclick="checkS8()">Prüfen</button><button class="btn btn-hint" onclick="show('s8hint')">Tipp</button><button class="btn btn-solution" onclick="show('s8sol')">Lösung anzeigen</button></div>
            </div>
        </div>
    </div></div>

    <script>
        const completed = new Set();
        const stationCount = 8;
        const progressKey = "lgsWerkstattProgress";

        document.addEventListener("DOMContentLoaded", () => {
            const pills = document.getElementById("progressPills");
            for (let i = 1; i <= stationCount; i++) {
                const pill = document.createElement("div");
                pill.className = "pill";
                pill.id = "pill-s" + i;
                pill.textContent = i;
                pills.appendChild(pill);
            }
            loadProgress();
            updateProgress();
            updateLocks();
        });

        function openModal(id){
            const station = Number(id.replace("modal-s", ""));
            if (!isUnlocked(station)) {
                showLockedNotice(station);
                return;
            }
            document.getElementById(id).classList.add("open");
            document.body.style.overflow = "hidden";
        }

        function closeModal(id){
            document.getElementById(id).classList.remove("open");
            document.body.style.overflow = "";
        }

        document.addEventListener("click", event => {
            if (event.target.classList.contains("modal-overlay")) closeModal(event.target.id);
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                document.querySelectorAll(".modal-overlay.open").forEach(modal => closeModal(modal.id));
            }
        });

        function show(id){
            const el = document.getElementById(id);
            if (el) el.classList.add("visible");
        }

        function feedback(id, message, type){
            const el = document.getElementById(id);
            el.textContent = message;
            el.className = "feedback visible " + type;
        }

        function markStation(n){
            completed.add(n);
            const card = document.getElementById("card-s" + n);
            const pill = document.getElementById("pill-s" + n);
            if (card) card.classList.add("done");
            if (pill) pill.classList.add("done");
            saveProgress();
            updateProgress();
            updateLocks();
        }

        function updateProgress(){
            const done = completed.size;
            document.getElementById("progressText").textContent = done + " von " + stationCount + " Stationen abgeschlossen";
            document.getElementById("meterFill").style.width = (done / stationCount * 100) + "%";
        }

        function isUnlocked(n){
            return n === 1 || completed.has(n - 1);
        }

        function updateLocks(){
            for (let i = 1; i <= stationCount; i++) {
                const card = document.getElementById("card-s" + i);
                const pill = document.getElementById("pill-s" + i);
                if (!card) continue;
                const unlocked = isUnlocked(i);
                card.setAttribute("aria-disabled", String(!unlocked));
                card.classList.toggle("locked", !unlocked);
                if (pill) pill.classList.toggle("locked", !unlocked);
            }
        }

        function showLockedNotice(n){
            const previous = n - 1;
            const text = document.getElementById("progressText");
            text.textContent = "Station " + n + " wird freigeschaltet, sobald Station " + previous + " abgeschlossen ist.";
            setTimeout(updateProgress, 2600);
        }

        function saveProgress(){
            try {
                localStorage.setItem(progressKey, JSON.stringify(Array.from(completed)));
            } catch (error) {}
        }

        function loadProgress(){
            try {
                const saved = JSON.parse(localStorage.getItem(progressKey) || "[]");
                saved.forEach(n => {
                    if (Number.isInteger(n) && n >= 1 && n <= stationCount) completed.add(n);
                });
                for (let i = 1; i <= stationCount; i++) {
                    const card = document.getElementById("card-s" + i);
                    const pill = document.getElementById("pill-s" + i);
                    if (completed.has(i)) {
                        if (card) card.classList.add("done");
                        if (pill) pill.classList.add("done");
                    }
                }
            } catch (error) {}
        }

        function toggleScenario(card){
            card.classList.toggle("active");
        }

        function selectChoice(button, group){
            document.querySelectorAll('[data-group="' + group + '"] .choice').forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        }

        function choice(group){
            const selected = document.querySelector('[data-group="' + group + '"] .choice.selected');
            return selected ? selected.textContent.trim() : "";
        }

        function val(id){
            const raw = (document.getElementById(id).value || "").trim().replace(",", ".");
            if (!raw) return null;
            if (raw.includes("/")) {
                const parts = raw.split("/");
                if (parts.length === 2) {
                    const a = Number(parts[0]);
                    const b = Number(parts[1]);
                    if (Number.isFinite(a) && Number.isFinite(b) && b !== 0) return a / b;
                }
            }
            const number = Number(raw);
            return Number.isFinite(number) ? number : null;
        }

        function closeTo(actual, expected){
            return actual !== null && Math.abs(actual - expected) < 0.02;
        }

        function markInputs(ids){
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.style.borderColor = "#16a34a";
                    el.style.background = "#f0fdf4";
                }
            });
        }

        function checkS1(){
            feedback("s1fb","Station 1 ist abgeschlossen. Station 2 ist jetzt freigeschaltet.","success");
            markStation(1);
        }

        function checkS2(){
            const okPoint = choice("s2point") === "Ja";
            const okY = closeTo(val("s2y"), 9);
            if (okPoint && okY) {
                feedback("s2fb","Richtig! Du hast eingesetzt und geprüft.","success");
                markInputs(["s2y"]);
                markStation(2);
            } else if (!okPoint) {
                feedback("s2fb","Der Punkt passt doch: 2 · 3 + 1 ergibt 7.","error");
            } else {
                feedback("s2fb","Für x = 4 gilt: y = 2 · 4 + 1. Rechne das noch einmal.","error");
            }
        }

        function checkS3(){
            const ok = choice("s3a") === "genau eine Lösung" && choice("s3b") === "keine Lösung" && choice("s3c") === "unendlich viele Lösungen";
            if (ok) {
                feedback("s3fb","Sehr gut! Du erkennst die drei Fälle.","success");
                markStation(3);
            } else {
                feedback("s3fb","Noch nicht ganz. Vergleiche jeweils die Steigung und den y-Achsenabschnitt.","error");
            }
        }

        function checkS4(){
            const ok = closeTo(val("s4a"), 6) && closeTo(val("s4x"), 2) && closeTo(val("s4y"), 5);
            if (ok) {
                feedback("s4fb","Richtig! Der Schnittpunkt ist (2 | 5).","success");
                markInputs(["s4a","s4x","s4y"]);
                markStation(4);
            } else {
                feedback("s4fb","Schau auf den ersten Schritt: 2x + 1 = -x + 7 wird zu 3x = 6.","error");
            }
        }

        function checkS5(){
            const ok = closeTo(val("s5a"), 7) && closeTo(val("s5y"), 3) && closeTo(val("s5x"), 4);
            if (ok) {
                feedback("s5fb","Richtig! Erst y finden, dann x berechnen.","success");
                markInputs(["s5a","s5y","s5x"]);
                markStation(5);
            } else {
                feedback("s5fb","Setze x = y + 1 in x + y = 7 ein. Dann entsteht 2y + 1 = 7.","error");
            }
        }

        function checkS6(){
            const ok = closeTo(val("s6a"), 24) && closeTo(val("s6x"), 3) && closeTo(val("s6y"), 3.5);
            if (ok) {
                feedback("s6fb","Richtig! Die y-Terme heben sich beim Addieren auf.","success");
                markInputs(["s6a","s6x","s6y"]);
                markStation(6);
            } else {
                feedback("s6fb","Addiere zuerst beide Gleichungen: 3x + 5x = 8x und 16 + 8 = 24.","error");
            }
        }

        function checkS7(){
            const ok = choice("s7a") === "Gleichsetzen" && choice("s7b") === "Einsetzen" && choice("s7c") === "Additionsverfahren";
            if (ok) {
                feedback("s7fb","Richtig! Du wählst die Methoden passend aus.","success");
                markStation(7);
            } else {
                feedback("s7fb","Noch nicht ganz. Suche nach aufgelösten Gleichungen oder Gegenzahlen.","error");
            }
        }

        function checkS8(){
            let score = 0;
            if (closeTo(val("t1x"), 3) && closeTo(val("t1y"), 5)) score++;
            if (closeTo(val("t2x"), 4) && closeTo(val("t2y"), 5)) score++;
            if (closeTo(val("t3x"), 3) && closeTo(val("t3y"), 5)) score++;
            if (closeTo(val("t4y"), 7)) score++;
            if (choice("t5") === "keine Lösung") score++;

            document.getElementById("finalScore").textContent = "Ergebnis: " + score + " von 5 Aufgaben richtig.";
            if (score === 5) {
                feedback("s8fb","Stark! Alles richtig.","success");
                document.getElementById("finishBanner").classList.add("visible");
                markInputs(["t1x","t1y","t2x","t2y","t3x","t3y","t4y"]);
                markStation(8);
            } else {
                feedback("s8fb","Du bist nah dran. Vergleiche deine Ergebnisse mit Tipp oder Lösung und versuche es noch einmal.","error");
            }
        }
    </script>
</body>
</html>
