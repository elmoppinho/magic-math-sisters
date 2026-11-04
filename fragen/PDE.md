# PDE – Partielle Differentialgleichungen

Fragenkatalog für das Lernspiel **Magic Math Sisters**.
Diese Datei kann direkt auf GitHub gelesen und bearbeitet werden (Stift-Symbol oben rechts).
Das Spiel liest sie beim Start automatisch ein.

## So ist eine Frage aufgebaut

```
### Rechnen                      ← Überschrift mit drei # = neue Frage, dahinter die Kategorie
Welche Funktion löst $u_{xx}=0$?  ← Fragetext, Formeln zwischen $ ... $

- [ ] $e^x$                      ← Antworten: genau eine mit [x] markieren
- [x] $ax+b$
- [ ] $x^2$

> Zweimal integrieren.           ← Erklärung nach dem Antworten (Zeile mit >)
```

* Fragen stehen unter **„## Welt 1“**, **„## Welt 2“** oder **„## Welt 3“** und kommen nur in dieser Welt vor.
* Pro Welt dürfen **beliebig viele Fragen** stehen. Beim Wählen des Katalogs sucht das Spiel für jede Welt
  **zufällig 15 Fragen** aus und speichert diese Auswahl. Sie wird dann im Spiel (15 Σ-Kisten) und im Lernpfad
  (3 Lektionen à 5 Fragen) dauerhaft verwendet – bis man im Titelbild „Neuer Katalog / Zurücksetzen“ wählt.
* Die Reihenfolge der Antworten wird im Spiel jedes Mal gemischt; welche Antwort mit `[x]` markiert ist, bleibt richtig.
* 2 bis 4 Antworten sind möglich. **Fett** mit `**Wort**`.

---

## Welt 1 – Grundbegriffe und Typen

### Verständnis
Welche Ordnung hat $u_t=u_{xx}$?

- [ ] 1
- [x] 2
- [ ] 3
- [ ] 0

> Die höchste Ableitung ist $u_{xx}$ (zweite Ordnung).

### Verständnis
Welche Gleichung ist die Wärmeleitungsgleichung?

- [ ] $u_{tt}=c^2u_{xx}$
- [x] $u_t=k\,u_{xx}$
- [ ] $u_{xx}+u_{yy}=0$
- [ ] $u_t+c\,u_x=0$

> Erste Zeitableitung, zweite Ortsableitung.

### Verständnis
Welche Gleichung ist die Wellengleichung?

- [x] $u_{tt}=c^2u_{xx}$
- [ ] $u_t=k\,u_{xx}$
- [ ] $\Delta u=f$
- [ ] $u_t+u\,u_x=0$

> Zweite Ableitung in Zeit und Ort.

### Verständnis
Wie lautet die Laplace-Gleichung im $\mathbb{R}^2$?

- [ ] $u_t=\Delta u$
- [ ] $u_{xx}-u_{yy}=0$
- [x] $u_{xx}+u_{yy}=0$
- [ ] $u_x+u_y=0$

> $\Delta u=u_{xx}+u_{yy}=0$.

### Verständnis
Von welchem Typ ist $u_{xx}+u_{yy}=0$?

- [ ] hyperbolisch
- [ ] parabolisch
- [x] elliptisch
- [ ] keinem Typ

> Beide zweiten Ableitungen haben dasselbe Vorzeichen.

### Verständnis
Von welchem Typ ist $u_t=u_{xx}$?

- [ ] elliptisch
- [x] parabolisch
- [ ] hyperbolisch
- [ ] keinem Typ

> Nur eine zweite Ableitung; die Wärmeleitung ist das Musterbeispiel.

### Verständnis
Von welchem Typ ist $u_{tt}=u_{xx}$?

- [ ] elliptisch
- [ ] parabolisch
- [x] hyperbolisch
- [ ] keinem Typ

> Die zweiten Ableitungen haben verschiedene Vorzeichen.

### Rechnen
Ist $u(x,y)=x^2-y^2$ harmonisch?

- [x] Ja, denn $\Delta u=2-2=0$.
- [ ] Nein, denn $\Delta u=4$.
- [ ] Nur auf der Geraden $x=y$.
- [ ] Nur im Einheitskreis.

> $u_{xx}=2$ und $u_{yy}=-2$.

### Verständnis
Welche partielle Differentialgleichung ist **linear**?

- [ ] $u_t+u\,u_x=0$
- [ ] $u_t=(u_{xx})^2$
- [x] $u_t=x\,u_{xx}$
- [ ] $u_x\,u_y=1$

> Der Koeffizient $x$ darf vom Ort abhängen; $u$ selbst kommt linear vor.

### Rechnen
Wie lautet die allgemeine Lösung der Transportgleichung $u_t+c\,u_x=0$?

- [ ] $f(x+ct)$
- [x] $f(x-ct)$
- [ ] $f(x)\,e^{-ct}$
- [ ] $x+ct$

> Die Lösung ist entlang der Geraden $x-ct=\text{const}$ konstant.

### Rechnen
Welche Gleichung löst $u(x,t)=\sin(x-2t)$?

- [ ] $u_t=u_{xx}$
- [x] $u_t+2u_x=0$
- [ ] $u_t-2u_x=0$
- [ ] $u_{tt}=4u_t$

> $u_t=-2\cos(x-2t)$ und $u_x=\cos(x-2t)$.

### Verständnis
Was für eine Randbedingung ist $u(0,t)=0$?

- [ ] Neumann
- [x] Dirichlet
- [ ] Robin
- [ ] periodisch

> Dirichlet schreibt den Funktionswert am Rand vor.

### Verständnis
Was für eine Randbedingung ist $u_x(0,t)=0$?

- [x] Neumann
- [ ] Dirichlet
- [ ] Anfangsbedingung
- [ ] periodisch

> Neumann schreibt die Ableitung (den Fluss) am Rand vor.

### Rechnen
Welche Funktionen $u(x)$ lösen $u_{xx}=0$?

- [ ] $e^x$
- [ ] $\sin x$
- [x] $ax+b$
- [ ] $x^2$

> Zweimal integrieren.

### Verständnis
Welche Aussage über $u_{tt}=c^2u_{xx}$ für $c>0$ ist richtig?

- [ ] Es beschreibt Wärmeleitung.
- [x] $c$ ist die Ausbreitungsgeschwindigkeit.
- [ ] Alle Lösungen zerfallen exponentiell.
- [ ] Randbedingungen sind immer unnötig.

> Die Wellengleichung besitzt endliche Ausbreitungsgeschwindigkeit.

---

## Welt 2 – Wärmeleitung und Fourier-Methode

### Rechnen
Welche Funktion löst $u_t=u_{xx}$ auf $(0,\pi)$ mit $u(t,0)=u(t,\pi)=0$?

- [x] $e^{-4t}\sin(2x)$
- [ ] $e^{4t}\sin(2x)$
- [ ] $e^{-2t}\sin(2x)$
- [ ] $e^{-4t}\cos(2x)$

> $\partial_{xx}\sin(2x)=-4\sin(2x)$.

### Verständnis
Welche Aussage gilt für die Wärmeleitungsgleichung mit homogenen Dirichlet-Randbedingungen?

- [ ] Alle Lösungen sind periodisch.
- [x] Die $L^2$-Energie ist nicht zunehmend.
- [ ] Jede Lösung ist räumlich konstant.
- [ ] Es gibt keine stationäre Lösung.

> Die Energieidentität lautet $\frac{d}{dt}\int|u|^2=-2\int|u_x|^2\leq0$.

### Verständnis
Wohin führt der Separationsansatz $u=X(x)T(t)$ für $u_t=u_{xx}$?

- [x] $T'/T=X''/X=-\lambda$
- [ ] $T'=X''$
- [ ] $T''X=XT$
- [ ] $X'T'=0$

> Links hängt nur von $t$, rechts nur von $x$ ab, also sind beide konstant.

### Rechnen
Was sind die Eigenfunktionen von $-X''=\lambda X$ mit $X(0)=X(\pi)=0$?

- [ ] $\cos(nx)$
- [x] $\sin(nx)$ mit $\lambda=n^2$
- [ ] $e^{nx}$
- [ ] $x^n$

> Nur die Sinusfunktionen erfüllen beide Randbedingungen.

### Rechnen
Löse $u_t=u_{xx}$ auf $(0,\pi)$, Dirichlet-Rand 0, $u(x,0)=\sin(3x)$.

- [ ] $e^{-3t}\sin(3x)$
- [x] $e^{-9t}\sin(3x)$
- [ ] $e^{9t}\sin(3x)$
- [ ] $\cos(3t)\sin(3x)$

> Die Mode $\sin(nx)$ klingt wie $e^{-n^2t}$ ab.

### Verständnis
Wo nimmt eine Lösung der Wärmeleitungsgleichung ihr Maximum an?

- [ ] im Inneren des Gebiets
- [x] auf dem parabolischen Rand (Anfangszeit oder Ortsrand)
- [ ] erst für $t\to\infty$
- [ ] nirgends

> Das ist das schwache Maximumprinzip.

### Verständnis
Wie verhält sich die Lösung bei homogenen Dirichlet-Randbedingungen für $t\to\infty$?

- [x] $u\to0$
- [ ] $u\to\infty$
- [ ] Sie bleibt periodisch.
- [ ] Sie bleibt gleich dem Anfangswert.

> Alle Fourier-Moden klingen exponentiell ab.

### Verständnis
Ein Stab ist an beiden Enden isoliert (homogene Neumann-Bedingung). Wohin strebt die Temperatur?

- [ ] gegen 0
- [x] gegen den Mittelwert der Anfangstemperatur
- [ ] gegen das Maximum der Anfangstemperatur
- [ ] gegen unendlich

> Die Gesamtwärme bleibt erhalten.

### Rechnen
Wie berechnet man die Fourier-Sinus-Koeffizienten von $f$ auf $(0,\pi)$?

- [x] $b_n=\tfrac{2}{\pi}\int_0^\pi f(x)\sin(nx)\,dx$
- [ ] $b_n=\tfrac{1}{\pi}\int_0^\pi f(x)\cos(nx)\,dx$
- [ ] $b_n=\int_0^\pi f(x)\,dx$
- [ ] $b_n=f(n)$

> Orthogonalität der Sinusfunktionen.

### Rechnen
Welche stationäre Lösung hat $u_t=u_{xx}$ mit $u(0)=0$ und $u(1)=1$?

- [ ] $u=x^2$
- [x] $u=x$
- [ ] $u=\sin(\pi x/2)$
- [ ] $u=1$

> Stationär heißt $u_{xx}=0$, also eine Gerade durch die Randwerte.

### Verständnis
Wie lautet der Wärmeleitungskern für $u_t=u_{xx}$ auf $\mathbb{R}$?

- [x] $\frac{1}{\sqrt{4\pi t}}\,e^{-x^2/(4t)}$
- [ ] $e^{-xt}$
- [ ] $\sin(x)\,e^{-t}$
- [ ] $\frac{1}{x^2+t^2}$

> Die Gauß-Glocke, die mit der Zeit breiter wird.

### Verständnis
Wie glatt ist die Lösung der Wärmeleitungsgleichung auf $\mathbb{R}$ für $t>0$?

- [ ] nur stetig
- [x] beliebig oft differenzierbar
- [ ] unstetig
- [ ] genau so glatt wie der Anfangswert

> Die Faltung mit dem Wärmeleitungskern glättet.

### Rechnen
Wie klingt die Mode $\sin(nx)$ bei $u_t=k\,u_{xx}$ ab?

- [ ] $e^{-knt}$
- [x] $e^{-kn^2t}$
- [ ] $e^{-n^2t/k}$
- [ ] $e^{-kt}$

> $k\,\partial_{xx}\sin(nx)=-kn^2\sin(nx)$.

### Verständnis
Wie schnell breitet sich Wärme nach der Wärmeleitungsgleichung aus?

- [ ] mit endlicher Geschwindigkeit $c$
- [x] unendlich schnell: eine Störung ist sofort überall spürbar
- [ ] gar nicht
- [ ] nur so schnell wie der Rand es erlaubt

> Der Wärmeleitungskern ist für $t>0$ überall positiv.

### Verständnis
Wie behandelt man die Randwerte $u(0,t)=a$ und $u(L,t)=b$?

- [x] $u=v+w$ mit stationärem $w(x)=a+(b-a)\,x/L$ und $v$ mit Rand 0
- [ ] Man ignoriert die Randwerte.
- [ ] Man setzt $a=b=0$.
- [ ] Man nimmt nur Kosinus-Moden.

> So erhält $v$ homogene Randbedingungen.

---

## Welt 3 – Wellen, Potentiale und Charakteristiken

### Rechnen
Lösung von $u_{tt}=c^2u_{xx}$ mit $u(x,0)=f(x)$ und $u_t(x,0)=0$ auf $\mathbb{R}$?

- [x] $\tfrac12\big(f(x+ct)+f(x-ct)\big)$
- [ ] $f(x-ct)$
- [ ] $f(x)\cos(ct)$
- [ ] $f(x)\,e^{-ct}$

> Formel von d'Alembert.

### Verständnis
Was gilt für die Energie $E=\tfrac12\int(u_t^2+c^2u_x^2)\,dx$ einer Lösung der Wellengleichung (ohne Randverluste)?

- [ ] Sie nimmt ab.
- [x] Sie bleibt erhalten.
- [ ] Sie wächst.
- [ ] Sie ist immer 0.

> Ableiten und partiell integrieren ergibt $E'(t)=0$.

### Rechnen
Was sind die Charakteristiken von $u_t+c\,u_x=0$?

- [x] Geraden $x-ct=\text{const}$
- [ ] Geraden $x+ct=\text{const}$
- [ ] Kreise
- [ ] Parabeln $x=ct^2$

> Entlang dieser Geraden ist $u$ konstant.

### Verständnis
Was kann bei der Burgers-Gleichung $u_t+u\,u_x=0$ passieren?

- [ ] Die Lösung bleibt immer glatt.
- [x] In endlicher Zeit können Schocks entstehen.
- [ ] Sie ist linear.
- [ ] Die Lösung ist konstant.

> Charakteristiken können sich schneiden.

### Verständnis
Was besagt die Mittelwerteigenschaft harmonischer Funktionen?

- [x] $u(x_0)$ ist der Mittelwert von $u$ über jede Kugel um $x_0$.
- [ ] $u$ hat sein Maximum im Inneren.
- [ ] $u$ ist überall 0.
- [ ] Alle Ableitungen verschwinden.

> Daraus folgt unter anderem das Maximumprinzip.

### Verständnis
Wo nimmt eine harmonische Funktion auf einem beschränkten Gebiet ihr Maximum an?

- [x] auf dem Rand
- [ ] im Mittelpunkt
- [ ] dort, wo $u=0$
- [ ] nirgends

> Maximumprinzip für die Laplace-Gleichung.

### Rechnen
Welche Funktion (in Polarkoordinaten) ist harmonisch?

- [x] $r^2\cos(2\theta)$
- [ ] $r^2$
- [ ] $r\cos(2\theta)$
- [ ] $\ln\theta$

> $r^2\cos(2\theta)=x^2-y^2$.

### Verständnis
Wie verhält sich die Fundamentallösung der Laplace-Gleichung im $\mathbb{R}^2$ (bis auf Konstanten)?

- [ ] wie $|x|^{-1}$
- [x] wie $\ln|x|$
- [ ] wie $|x|^2$
- [ ] wie $e^{-|x|}$

> Im $\mathbb{R}^3$ wäre es $|x|^{-1}$.

### Verständnis
Welche Gleichung ist die Poisson-Gleichung?

- [ ] $\Delta u=0$
- [x] $\Delta u=f$
- [ ] $u_t=\Delta u$
- [ ] $u_{tt}=\Delta u$

> Die Laplace-Gleichung mit rechter Seite.

### Rechnen
Eine Saite der Länge $L$ ist an beiden Enden fest. Welche Eigenfrequenzen hat $u_{tt}=c^2u_{xx}$?

- [x] $\omega_n=\frac{n\pi c}{L}$
- [ ] $\omega_n=\frac{nc}{\pi L}$
- [ ] $\omega_n=\frac{n^2\pi^2c}{L^2}$
- [ ] $\omega_n=ncL$

> Moden $\sin(n\pi x/L)\cos(n\pi ct/L)$.

### Verständnis
Von welchen Anfangsdaten hängt $u(x,t)$ bei der eindimensionalen Wellengleichung ab?

- [ ] von allen Werten auf $\mathbb{R}$
- [x] nur von den Werten auf $[x-ct,\,x+ct]$
- [ ] nur vom Punkt $x$
- [ ] nur von $[0,x]$

> Abhängigkeitsgebiet: endliche Ausbreitungsgeschwindigkeit.

### Verständnis
Wie viele Lösungen hat $\Delta u=f$ in $\Omega$, $u=g$ auf $\partial\Omega$ (beschränktes, glattes Gebiet)?

- [ ] unendlich viele
- [x] höchstens eine
- [ ] immer keine
- [ ] genau zwei

> Eindeutigkeit über das Maximumprinzip oder eine Energieabschätzung.

### Rechnen
Löse $u_{tt}=u_{xx}$ mit $u(x,0)=\sin x$ und $u_t(x,0)=0$.

- [ ] $\sin x\,e^{-t}$
- [x] $\sin x\cos t$
- [ ] $\sin(x+t)$
- [ ] $\cos x\sin t$

> d'Alembert: $\tfrac12(\sin(x+t)+\sin(x-t))=\sin x\cos t$.

### Rechnen
Von welchem Typ ist $u_{xx}+2u_{xy}+u_{yy}=0$?

- [ ] elliptisch
- [x] parabolisch
- [ ] hyperbolisch
- [ ] keinem Typ

> Diskriminante $B^2-4AC=4-4=0$.

### Verständnis
In welchem Raum haben Wellen scharfe Fronten (starkes Huygens-Prinzip)?

- [ ] im $\mathbb{R}^2$
- [x] im $\mathbb{R}^3$
- [ ] in allen Dimensionen
- [ ] in keiner Dimension

> Das starke Huygens-Prinzip gilt in ungeraden Raumdimensionen ab 3.
