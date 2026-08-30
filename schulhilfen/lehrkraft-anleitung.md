# Pflege-Anleitung für die Schulhilfen

Diese Seiten sind öffentlich erreichbar. Keine Namen, Klassenlisten, Noten, Diagnosen, Gesundheitsdaten oder andere personenbezogene Informationen eintragen.

## Verbindliche Struktur

```text
schulhilfen/FACH/JAHRGANG/THEMA/hilfekarten/NAME/index.html
```

Beispiele:

- `schulhilfen/mathematik/klasse-09/koerper/hilfekarten/...`
- `schulhilfen/sport/q2/fitfluencer/hilfekarten/...`

Größere HTML-Werkzeuge liegen ebenfalls im Themenordner, aber außerhalb von `hilfekarten`.

## Neue Hilfekarte ergänzen

1. Fach, Jahrgang und Thema auswählen.
2. Unter `hilfekarten` einen kurzen, kleingeschriebenen Ordnernamen mit Bindestrichen anlegen.
3. Die Seite dort als `index.html` speichern.
4. Bei mehreren aufklappbaren Hilfen eindeutige IDs verwenden, zum Beispiel `hilfe-1`.
5. Den neuen Link in `schulhilfen/links.json` und auf `schulhilfen/index.html` ergänzen.
6. Zieladresse live prüfen. Erst danach einen QR-Code erzeugen.

## Linkregeln

- Nur kleingeschriebene Pfade ohne Leerzeichen oder Umlaute verwenden.
- Fach: `mathematik` oder `sport`.
- Jahrgang: `klasse-05` bis `klasse-10`, `ef`, `q1`, `q2` oder transparent `jahrgang-offen`.
- Jede Seite erhält ihren eigenen Ordner mit `index.html`.
- Bestehende öffentliche Pfade nicht löschen. Bei einer späteren Verschiebung eine Weiterleitung oder einen Altzugang behalten.

## Qualitätsprüfung

- Seite mobil und mit Tastatur testen.
- Keine externen Tracker, Schriftarten oder Ergebnisübertragung.
- Keine personenbezogenen Daten.
- Endgültige HTTPS-Adresse öffnen.
- QR-Code automatisch decodieren oder mit einem zweiten Gerät scannen.
