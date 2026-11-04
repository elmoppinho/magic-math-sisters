# Magic Math Sisters

Lern-Jump'n'Run zu Differentialgleichungen. Läuft direkt im Browser, am PC und auf dem Smartphone (im Querformat, bildschirmfüllend).

**Online spielen:** `https://elmoppinho.github.io/magic-math-sisters/` (nach Aktivierung von GitHub Pages, siehe unten)

## Dateien im Repository

| Datei | Inhalt |
|---|---|
| `index.html` | das komplette Spiel |
| `fragen/ODE.md` | Fragenkatalog **Gewöhnliche Differentialgleichungen** |
| `fragen/PDE.md` | Fragenkatalog **Partielle Differentialgleichungen** |
| `README.md` | diese Anleitung |
| `assets/` | ältere Grafiken; werden nicht mehr benötigt, können bleiben |

## Fragen bearbeiten

Die Fragenkataloge sind normale Markdown-Dateien. Auf GitHub werden sie mit Formeln und Häkchen angezeigt
und lassen sich direkt im Browser bearbeiten (Datei öffnen → Stift-Symbol → „Commit changes“).

```markdown
## Welt 1 – Grundlagen

### Rechnen
Löse das Anfangswertproblem $y'(t)+2y(t)=0,\ y(0)=3$.

- [ ] $3e^{2t}$
- [x] $3e^{-2t}$
- [ ] $e^{-2t}+2$
- [ ] $3-2t$

> $y(t)=Ce^{-2t}$; aus $y(0)=3$ folgt $C=3$.
```

* `## Welt 1`, `## Welt 2`, `## Welt 3`: Die Fragen darunter kommen nur in dieser Welt vor.
* `### Kategorie` beginnt eine neue Frage (z. B. Rechnen, Verständnis).
* Die richtige Antwort wird mit `[x]` markiert, die falschen mit `[ ]`. 2 bis 4 Antworten.
* Die Zeile mit `>` ist die Erklärung, die nach dem Antworten erscheint.
* Formeln in `$ ... $` (LaTeX, einfacher Backslash).
* Pro Welt dürfen beliebig viele Fragen stehen (großer Fragekatalog). Beim Wählen des Katalogs sucht das Spiel für jede Welt
  zufällig 15 Fragen aus und speichert diese Auswahl im Browser. Diese 15 Fragen werden dann dauerhaft gespielt:
  im Spielmodus in den 15 Σ-Kisten und bei den Endgegnern, im Lernpfad als 3 Lektionen à 5 Fragen.
* Die Antworten werden bei jeder Frage neu gemischt – A, B, C, D sind also nicht fest vergeben.

Hinweis: Wer die Fragen in der Repository-Ansicht liest, sieht auch die richtigen Antworten.

## Spielablauf

1. **Fragenkatalog wählen:** ODE oder PDE. ODE und PDE haben **getrennte Spielstände** (eigene Fragenauswahl, eigener Fortschritt).
   Im Titelbild gibt es danach: **Weiterspielen** (aktueller Katalog), **Wechseln zu PDE/ODE** (setzt den dortigen Spielstand fort
   oder legt ihn neu an) und **Zurücksetzen** (löscht nur Fortschritt und Fragenauswahl des aktuellen Katalogs; die Zufallsauswahl wird beim nächsten Start neu gezogen).
2. **Welt wählen:** Welt 1, 2 oder 3.
3. **Modus wählen:**
   * **SPIELEN** – Jump'n'Run mit drei Leveln und Endgegner (siehe unten).
   * **NUR FRAGEN** – Lernpfad wie in einer Sprachlern-App. Die Fragen der Welt sind in **Lektionen zu je 5 Fragen** aufgeteilt
     (aus den 15 ausgewählten Fragen: 1–5, 6–10, 11–15), danach folgt ein **Abschlusstest** mit allen Fragen gemischt.
     Jede Lektion wird erst freigeschaltet, wenn die vorige geschafft ist. In einer Lektion: Antwort antippen → PRÜFEN →
     Rückmeldung mit Erklärung → WEITER. Falsch beantwortete Fragen kommen am Ende der Lektion noch einmal.
     Pro Lektion gibt es 1–3 Sterne (3 Sterne ab 90 % richtig im ersten Versuch); sie werden auf dem Lernpfad und der Weltkarte angezeigt.

Der Spielmodus im Detail – jede Welt hat drei Level:
   * Welt 1 – Grünland: 1-1 Hügelwiese · 1-2 Kristallhöhle · 1-3 Burg Picard (Boss: Schleimkönig)
   * Welt 2 – Wüste: 2-1 Dünenmeer · 2-2 Oase am Fluss · 2-3 Pyramide der Spektren (Boss: Skarabäus-König)
   * Welt 3 – Himmel & Feuer: 3-1 Wolkenreich · 3-2 Vulkanpfad · 3-3 Drachenfestung (Boss: Feuerdrache)
* **Σ-Kisten** von unten anstoßen → Frage. Jede Kiste hat einen Versuch.
   * richtig: Kiste wird **grün**, es erscheint ein Zaubertrank oder eine Zauberblume
   * **je 3 richtige Antworten:** ein Frosch springt heraus und bringt **ein Extraleben**
   * falsch: Kiste wird **rot**, die Erklärung wird gezeigt, sonst keine Folgen
   * nach jeder Frage ist man kurz unverwundbar (Blinken), damit man nicht direkt in einen Gegner läuft
* **Endgegner:** Jeder Treffer (draufspringen oder Feuerball) löst eine Frage aus. Nur richtige Antworten verletzen ihn.
* **Bonuslevel „Sternenhimmel“:** wird freigeschaltet, wenn **alle 15 Σ-Kisten einer Welt grün** sind.

Die Level sind bewusst leicht, damit die Fragen im Mittelpunkt stehen: Wer in einen Abgrund, ins Wasser oder in Lava fällt, verliert kein Leben, sondern landet wieder auf festem Boden (nur die Zauberkraft geht eine Stufe zurück). Es gibt kein Zeitlimit.

Weitere Elemente: Zwischenziel in jedem Level, Zielband (je höher getroffen, desto mehr Punkte), Fall-Plattformen,
Feuerstangen, Stampfer, Lava, springende Fische. Der Fortschritt pro Katalog und Welt wird im Browser gespeichert.

## Die Zauberblume

* **Helga** wirft damit Feuerbälle (Taste B).
* **Emmy** kann damit **fliegen**: mit B anlaufen, bis die P-Anzeige voll ist, dann springen und A halten.
  Ohne volle Anzeige gleitet sie mit gehaltenem A langsam herab.
* Mit der Schwester-Taste kann jederzeit gewechselt werden.
* Mit ↓ ducken sich beide auf halbe Größe – praktisch gegen hohe Feuerbälle des Drachen.

## Steuerung

| | Tastatur | Smartphone |
|---|---|---|
| Laufen | ← → | Steuerkreuz links |
| Ducken (halbe Größe) | ↓ | Steuerkreuz unten |
| Springen / Fliegen | Leertaste oder ↑ | A |
| Rennen, Feuerball | Shift oder X | B |
| Schwester wechseln | E | SCHWESTER |
| Pause-Menü (Musik, Effekte, Vollbild, Welt verlassen) | Enter | START (unten in der Mitte) |
| Musik / Effekte | M / N | ♪ / ◀) im Menü oder im Pause-Menü |
| Vollbild | F | ⛶ |

Menüs lassen sich auch durch Antippen der Karten bedienen. Auf dem Smartphone sind Zoom und Lupe beim Spielen abgeschaltet.

## Auf GitHub Pages veröffentlichen

1. `index.html`, `README.md` und den Ordner `fragen/` ins Hauptverzeichnis legen.
2. **Settings → Pages → Deploy from a branch → main / (root) → Save**.
3. Nach etwa einer Minute ist das Spiel online. Änderungen an `fragen/*.md` sind sofort nach dem Commit aktiv.

## Lokal spielen

`index.html` lässt sich auch direkt öffnen. Browser erlauben dann aber nicht, die Dateien in `fragen/` zu lesen.
Das Spiel nutzt in diesem Fall eine in `index.html` eingebaute Kopie der Fragen.
Eigene, geänderte Fragen lassen sich trotzdem testen: im Katalog-Menü die SCHWESTER-Taste (E) drücken und die `.md`-Datei auswählen.
Alternativ einen lokalen Server starten, z. B. `python3 -m http.server` im Ordner, und `http://localhost:8000` öffnen.

## Musik

Alle Stücke sind gemeinfrei und wurden für das Spiel als Chiptune neu arrangiert. Es sind keine Aufnahmen enthalten, daher ist keine Lizenz nötig.
Tschaikowsky (Schwanensee), Mozart (Eine kleine Nachtmusik, Rondo alla Turca), Beethoven (Für Elise, 5. Sinfonie, Ode an die Freude),
Bach (Toccata d-Moll), Grieg (In der Halle des Bergkönigs), Vivaldi (Der Frühling), J. Strauss (An der schönen blauen Donau).
Alle Grafiken sind eigene Pixelart im Code.
