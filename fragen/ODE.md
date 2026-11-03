# ODE – Gewöhnliche Differentialgleichungen

Fragenkatalog für das Lernspiel **Magic Math Sisters**.
Diese Datei kann direkt auf GitHub gelesen und bearbeitet werden (Stift-Symbol oben rechts).
Das Spiel liest sie beim Start automatisch ein.

## So ist eine Frage aufgebaut

```
### Rechnen                      ← Überschrift mit drei # = neue Frage, dahinter die Kategorie
Löse $y'=-y,\ y(0)=1$.           ← Fragetext, Formeln zwischen $ ... $

- [ ] $e^{t}$                    ← Antworten: genau eine mit [x] markieren
- [x] $e^{-t}$
- [ ] $1-t$
- [ ] $t$

> Aus $y=Ce^{-t}$ und $y(0)=1$ folgt $C=1$.   ← Erklärung nach dem Antworten (Zeile mit >)
```

* Fragen stehen unter **„## Welt 1“**, **„## Welt 2“** oder **„## Welt 3“** und kommen nur in dieser Welt vor.
* Jede Welt hat 15 Σ-Kisten und einen Endgegner. Mit 15 bis 18 Fragen pro Welt wiederholt sich nichts.
* 2 bis 4 Antworten sind möglich. **Fett** mit `**Wort**`.

---

## Welt 1 – Grundlagen erster Ordnung

### Rechnen
Löse das Anfangswertproblem $y'(t)+2y(t)=0,\ y(0)=3$.

- [ ] $3e^{2t}$
- [x] $3e^{-2t}$
- [ ] $e^{-2t}+2$
- [ ] $3-2t$

> $y(t)=Ce^{-2t}$; aus $y(0)=3$ folgt $C=3$.

### Verständnis
Welche Ordnung hat die Differentialgleichung $y'''+t\,y'=\sin t$?

- [ ] 1
- [ ] 2
- [x] 3
- [ ] 4

> Die höchste vorkommende Ableitung ist $y'''$, also Ordnung 3.

### Rechnen
Wie lautet die allgemeine Lösung von $y'=3y$?

- [x] $Ce^{3t}$
- [ ] $3e^{Ct}$
- [ ] $Ct^3$
- [ ] $C+3t$

> Trennung der Variablen: $\ln|y|=3t+c$, also $y=Ce^{3t}$.

### Verständnis
Was gilt für $y'=-5y$?

- [ ] Die Nulllösung ist instabil.
- [x] Die Nulllösung ist asymptotisch stabil.
- [ ] Alle Lösungen sind periodisch.
- [ ] Jede Lösung erreicht Null in endlicher Zeit.

> Jede Lösung $y(t)=Ce^{-5t}$ konvergiert gegen Null.

### Rechnen
Löse $y'=2t,\ y(0)=1$.

- [ ] $2t+1$
- [ ] $t^2$
- [x] $t^2+1$
- [ ] $2t^2+1$

> Integrieren ergibt $y=t^2+C$; aus $y(0)=1$ folgt $C=1$.

### Verständnis
Welche dieser Differentialgleichungen ist **linear**?

- [ ] $y'=y^2$
- [ ] $y'=\sin(y)$
- [ ] $y'\,y=1$
- [x] $y'+t^2y=e^t$

> Linear heißt: $y$ und $y'$ kommen nur in erster Potenz vor und werden nicht miteinander multipliziert.

### Rechnen
Löse $y'=t\,y,\ y(0)=1$.

- [x] $e^{t^2/2}$
- [ ] $e^{t}$
- [ ] $1+t^2/2$
- [ ] $e^{2t}$

> Trennung der Variablen: $\ln y=t^2/2$, also $y=e^{t^2/2}$.

### Rechnen
Welche Funktion löst $y''=y$?

- [ ] $\sin t$
- [x] $e^{-t}$
- [ ] $t^2$
- [ ] $\ln t$

> $(e^{-t})''=e^{-t}$.

### Verständnis
Was gehört zu einem Anfangswertproblem?

- [ ] Nur die Differentialgleichung
- [x] Eine Differentialgleichung und ein Anfangswert
- [ ] Zwei Randwerte ohne Differentialgleichung
- [ ] Eine Stammfunktion

> Ein Anfangswertproblem besteht aus der Gleichung und dem Wert der Lösung zu einem Startzeitpunkt.

### Rechnen
Welche konstante Lösung (Gleichgewicht) hat $y'=4-2y$?

- [ ] $y=0$
- [ ] $y=4$
- [x] $y=2$
- [ ] $y=-2$

> Konstant heißt $y'=0$, also $4-2y=0$ und $y=2$.

### Rechnen
Löse $y'=1-y,\ y(0)=0$.

- [ ] $e^{-t}$
- [x] $1-e^{-t}$
- [ ] $1+e^{-t}$
- [ ] $t$

> $y=1+Ce^{-t}$; aus $y(0)=0$ folgt $C=-1$.

### Verständnis
Für $y'=f(t,y)$ sei $f$ stetig und bezüglich $y$ lokal Lipschitz-stetig. Welche Aussage gilt?

- [ ] Es gibt nie Lösungen.
- [x] Das Anfangswertproblem besitzt lokal genau eine Lösung.
- [ ] Alle Lösungen sind periodisch.
- [ ] Alle Lösungen sind global beschränkt.

> Der Satz von Picard–Lindelöf liefert lokale Existenz und Eindeutigkeit.

### Rechnen
Welche Gleichung beschreibt die Lösungen von $y'=x/y$?

- [x] $y^2-x^2=C$
- [ ] $y=x+C$
- [ ] $xy=C$
- [ ] $y^2+x^2=C$

> Trennung: $y\,dy=x\,dx$, also $y^2/2=x^2/2+c$.

### Verständnis
Für $y'=ky$ mit $k>0$: Nach welcher Zeit hat sich $y$ verdoppelt?

- [ ] $k/2$
- [ ] $2k$
- [ ] $e^k$
- [x] $\ln(2)/k$

> Aus $e^{kT}=2$ folgt $T=\ln(2)/k$.

### Rechnen
Löse $y'=\cos t,\ y(0)=2$.

- [ ] $\cos t+2$
- [x] $\sin t+2$
- [ ] $2-\sin t$
- [ ] $2\sin t$

> Eine Stammfunktion von $\cos t$ ist $\sin t$; die Konstante ist 2.

---

## Welt 2 – Lineare Gleichungen zweiter Ordnung

### Rechnen
Welche Funktion löst $y''-3y'+2y=0$ **nicht**?

- [ ] $e^t$
- [ ] $e^{2t}$
- [x] $e^{3t}$
- [ ] $4e^t-2e^{2t}$

> Die charakteristischen Nullstellen sind $1$ und $2$.

### Rechnen
Wie lautet die allgemeine Lösung von $y''+4y=0$?

- [ ] $C_1e^{2t}+C_2e^{-2t}$
- [x] $C_1\cos(2t)+C_2\sin(2t)$
- [ ] $C_1\cos(4t)+C_2\sin(4t)$
- [ ] $(C_1+C_2t)e^{2t}$

> $\lambda^2+4=0$ liefert $\lambda=\pm 2i$.

### Rechnen
Wie lautet die allgemeine Lösung von $y''+2y'+y=0$?

- [ ] $C_1e^{t}+C_2e^{-t}$
- [ ] $C_1e^{-t}+C_2e^{-2t}$
- [x] $(C_1+C_2t)e^{-t}$
- [ ] $C_1\cos t+C_2\sin t$

> $\lambda^2+2\lambda+1=(\lambda+1)^2$: doppelte Nullstelle $-1$.

### Verständnis
Welche Dimension hat der Lösungsraum einer linearen homogenen Differentialgleichung zweiter Ordnung?

- [ ] 1
- [x] 2
- [ ] 3
- [ ] unendlich

> Die Ordnung $n$ ist die Dimension des Lösungsraums.

### Verständnis
Die Wronski-Determinante zweier Lösungen ist ungleich Null. Was folgt daraus?

- [ ] Die Lösungen sind gleich.
- [x] Die Lösungen bilden ein Fundamentalsystem.
- [ ] Beide Lösungen sind Null.
- [ ] Die Gleichung ist nichtlinear.

> $W\neq0$ bedeutet lineare Unabhängigkeit.

### Rechnen
Wie lautet die allgemeine Lösung von $y''-y=0$?

- [x] $C_1e^{t}+C_2e^{-t}$
- [ ] $C_1\cos t+C_2\sin t$
- [ ] $C_1+C_2t$
- [ ] $C_1e^{t}$

> $\lambda^2-1=0$ liefert $\lambda=\pm1$.

### Verständnis
Gedämpfter Oszillator $y''+2\delta y'+\omega_0^2y=0$ mit $0<\delta<\omega_0$. Was beschreibt die Lösung?

- [ ] eine ungedämpfte Schwingung
- [ ] den aperiodischen Grenzfall
- [x] eine gedämpfte Schwingung
- [ ] exponentielles Wachstum

> Die Nullstellen sind komplex mit negativem Realteil $-\delta$.

### Verständnis
$y_1$ und $y_2$ lösen dieselbe lineare homogene Gleichung. Welche Funktion ist dann ebenfalls eine Lösung?

- [ ] nur $y_1\cdot y_2$
- [x] jede Linearkombination $c_1y_1+c_2y_2$
- [ ] nur $y_1/y_2$
- [ ] keine weitere

> Superpositionsprinzip für lineare homogene Gleichungen.

### Rechnen
Welche partikuläre Lösung hat $y''+y=1$?

- [ ] $y_p=t$
- [x] $y_p=1$
- [ ] $y_p=\sin t$
- [ ] $y_p=e^t$

> Konstanter Ansatz: $0+y_p=1$.

### Verständnis
Was passiert bei $y''+y=\cos t$?

- [x] Resonanz: die Amplitude wächst linear in $t$.
- [ ] Alle Lösungen konvergieren gegen 0.
- [ ] Es gibt keine Lösung.
- [ ] Die Lösung ist konstant.

> Eine partikuläre Lösung ist $\tfrac{t}{2}\sin t$.

### Rechnen
Die charakteristischen Nullstellen sind $1\pm 2i$. Wie lautet die reelle allgemeine Lösung?

- [x] $e^{t}(C_1\cos 2t+C_2\sin 2t)$
- [ ] $e^{2t}(C_1\cos t+C_2\sin t)$
- [ ] $C_1e^{t}+C_2e^{2t}$
- [ ] $e^{-t}(C_1\cos 2t+C_2\sin 2t)$

> Realteil im Exponenten, Imaginärteil als Frequenz.

### Rechnen
Wie lautet die allgemeine Lösung von $y''=0$?

- [ ] $C$
- [ ] $Ce^t$
- [x] $C_1+C_2t$
- [ ] $C_1t^2$

> Zweimal integrieren.

### Rechnen
Löse $y''+y=0,\ y(0)=0,\ y'(0)=1$.

- [ ] $\cos t$
- [x] $\sin t$
- [ ] $e^{t}$
- [ ] $t$

> $y=C_1\cos t+C_2\sin t$ mit $C_1=0$ und $C_2=1$.

### Rechnen
Welche partikuläre Lösung hat $y''-y=e^{2t}$?

- [ ] $e^{2t}$
- [x] $\tfrac13 e^{2t}$
- [ ] $\tfrac12 e^{2t}$
- [ ] $t\,e^{2t}$

> Ansatz $Ae^{2t}$: $(4-1)A=1$, also $A=\tfrac13$.

### Verständnis
Wie setzt sich die allgemeine Lösung einer inhomogenen linearen Gleichung zusammen?

- [x] allgemeine homogene Lösung plus eine partikuläre Lösung
- [ ] nur aus einer partikulären Lösung
- [ ] Produkt aus homogener und partikulärer Lösung
- [ ] nur aus der homogenen Lösung

> Die Differenz zweier Lösungen der inhomogenen Gleichung löst die homogene Gleichung.

---

## Welt 3 – Systeme und Stabilität

### Rechnen
Bestimme die Eigenwerte von $A=\mathrm{diag}(-1,\,2)$.

- [x] $-1$ und $2$
- [ ] $1$ und $-2$
- [ ] $-2$ und $1$
- [ ] $0$ und $1$

> Die Eigenwerte einer Diagonalmatrix sind ihre Diagonaleinträge.

### Verständnis
Für $x'=Ax$ mit $A=\mathrm{diag}(-1,\,2)$ ist die Ruhelage $0$ ein …

- [ ] stabiler Knoten
- [x] Sattelpunkt (instabil)
- [ ] Zentrum
- [ ] stabiler Strudel

> Ein negativer und ein positiver reeller Eigenwert ergeben einen Sattel.

### Verständnis
Alle Eigenwerte von $A$ haben negativen Realteil. Was gilt für $x=0$ bei $x'=Ax$?

- [ ] instabil
- [x] asymptotisch stabil
- [ ] alle Lösungen sind periodisch
- [ ] keine Aussage möglich

> Jede Lösung klingt exponentiell ab.

### Verständnis
Ein lineares $2\times2$-System hat die Eigenwerte $\pm i$. Wie sieht das Phasenporträt aus?

- [x] Zentrum mit geschlossenen Bahnen
- [ ] Sattel
- [ ] stabiler Knoten
- [ ] instabiler Strudel

> Rein imaginäre Eigenwerte erzeugen periodische Lösungen.

### Rechnen
Wie lautet die Lösung von $x'=Ax,\ x(0)=x_0$?

- [ ] $t\,Ax_0$
- [x] $e^{tA}x_0$
- [ ] $x_0+tA$
- [ ] $e^{t}Ax_0$

> Die Matrixexponentialfunktion löst das lineare System.

### Rechnen
Welche Eigenwerte hat das System $x_1'=x_2,\ x_2'=-x_1$?

- [ ] $\pm1$
- [x] $\pm i$
- [ ] $0$ (doppelt)
- [ ] $1\pm i$

> Das charakteristische Polynom ist $\lambda^2+1$.

### Verständnis
Für eine $2\times2$-Matrix gilt $\mathrm{Spur}\,A<0$ und $\det A>0$. Was folgt für $x'=Ax$?

- [ ] instabil
- [ ] immer ein Sattel
- [x] asymptotisch stabil
- [ ] immer ein Zentrum

> Dann haben beide Eigenwerte negativen Realteil.

### Rechnen
Welche Gleichgewichte hat die logistische Gleichung $y'=y(1-y)$?

- [x] $0$ (instabil) und $1$ (stabil)
- [ ] $0$ (stabil) und $1$ (instabil)
- [ ] nur $1$
- [ ] $0$ und $1$, beide stabil

> $f'(0)=1>0$ und $f'(1)=-1<0$.

### Verständnis
Womit untersucht man die Stabilität einer Ruhelage eines nichtlinearen Systems?

- [x] mit der Jacobi-Matrix an der Ruhelage
- [ ] mit der Wronski-Determinante
- [ ] mit einer Fourier-Reihe
- [ ] gar nicht

> Linearisierung: die Eigenwerte der Jacobi-Matrix entscheiden (falls hyperbolisch).

### Rechnen
Schreibe $y''+y=0$ mit $x_1=y,\ x_2=y'$ als System.

- [ ] $x_1'=x_1,\ x_2'=x_2$
- [x] $x_1'=x_2,\ x_2'=-x_1$
- [ ] $x_1'=-x_2,\ x_2'=-x_1$
- [ ] $x_1'=x_2,\ x_2'=x_1$

> $x_1'=y'=x_2$ und $x_2'=y''=-y=-x_1$.

### Verständnis
$V$ ist positiv definit mit $\dot V<0$ für alle $x\neq0$. Was folgt für die Ruhelage?

- [x] asymptotisch stabil
- [ ] instabil
- [ ] periodisch
- [ ] keine Aussage

> Das ist der Satz von Ljapunow.

### Rechnen
Was ist $e^{tA}$ für $A=\mathrm{diag}(a,\,b)$?

- [ ] $\mathrm{diag}(at,\,bt)$
- [x] $\mathrm{diag}(e^{at},\,e^{bt})$
- [ ] $e^{t}\,\mathrm{diag}(a,\,b)$
- [ ] $\mathrm{diag}(e^{a+t},\,e^{b+t})$

> Bei Diagonalmatrizen wirkt die Exponentialfunktion eintragsweise.

### Verständnis
Wie verhalten sich die Lösungen des klassischen Räuber-Beute-Modells (Lotka–Volterra)?

- [ ] Sie explodieren.
- [x] Sie laufen auf geschlossenen Bahnen um das Gleichgewicht.
- [ ] Sie konvergieren alle gegen 0.
- [ ] Sie sind chaotisch.

> Es gibt eine Erhaltungsgröße, daher periodische Bahnen.

### Verständnis
Die Eigenwerte sind $2$ und $3$. Was ist die Ruhelage?

- [ ] stabiler Knoten
- [x] instabiler Knoten
- [ ] Sattel
- [ ] Zentrum

> Beide Eigenwerte sind reell und positiv.

### Rechnen
Was gilt für $y'=y^2,\ y(0)=1$?

- [ ] Die Lösung existiert für alle $t$.
- [x] Die Lösung $1/(1-t)$ explodiert bei $t=1$.
- [ ] $y=e^t$
- [ ] $y=1+t$

> Trennung der Variablen; Blow-up in endlicher Zeit.
