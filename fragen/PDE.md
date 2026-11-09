# PDE-Fragenkatalog – Magic Math Sisters

309 Multiple-Choice-Fragen auf Grundlage des Skripts „Partielle Differentialgleichungen für Nichtmathematiker“ (WS 2023/24).
Jede Frage hat genau eine richtige Antwort und eine Erklärung.

Welt 1: Kapitel 1–2 · Welt 2: Abschnitte 3.1–3.2 und Kapitel 4 · Welt 3: Kapitel 5, Kapitel 6 (ohne Rücktransformation) und Kapitel 7.
Schwerpunkt: Verständnisfragen und einfache Beispiele.

## Welt 1 – Kapitel 1 und 2 – Grundlagen und wichtige PDEs

### Grundbegriffe
Was kennzeichnet eine partielle Differentialgleichung?

- [ ] Sie muss linear sein.
- [ ] Sie enthält ausschließlich Zeitableitungen.
- [ ] Sie hat stets Ordnung zwei.
- [x] Sie enthält partielle Ableitungen einer unbekannten Funktion mehrerer Variablen.

> Partielle Ableitungen beziehen sich auf verschiedene unabhängige Variablen.

### Grundbegriffe
Welche Ordnung hat $u_{xxy}+u_t=0$?

- [ ] 4
- [ ] 2
- [x] 3
- [ ] 1

> Die höchste vorkommende Ableitung $u_{xxy}$ ist dritter Ordnung.

### Grundbegriffe
Welche PDE ist linear?

- [ ] $u_t+u^2=0$
- [ ] $u_{{xx}}+\sin u=0$
- [ ] $u_tu_x=0$
- [x] $u_t-u_{{xx}}=x$

> Die gesuchte Funktion und ihre Ableitungen treten nur linear auf.

### Grundbegriffe
Wann ist eine lineare PDE homogen?

- [ ] Wenn alle Koeffizienten konstant sind.
- [ ] Wenn die Lösung null ist.
- [x] Wenn ihre rechte Seite null ist.
- [ ] Wenn keine Randbedingungen vorliegen.

> Homogenität meint hier das Verschwinden der vorgegebenen rechten Seite.

### Grundbegriffe
Was folgt für zwei Lösungen einer homogenen linearen PDE?

- [ ] Ihr Produkt ist immer eine Lösung.
- [ ] Ihr Quotient ist immer eine Lösung.
- [ ] Ihre Summe löst immer eine inhomogene PDE.
- [x] Ihre Summe ist wieder eine Lösung.

> Das Superpositionsprinzip gilt für lineare homogene Gleichungen.

### Grundbegriffe
Was gilt für die Differenz zweier Lösungen derselben inhomogenen linearen PDE?

- [ ] Sie ist immer null.
- [ ] Sie ist stets konstant.
- [ ] Sie löst die PDE mit doppelter rechter Seite.
- [x] Sie löst die zugehörige homogene PDE.

> Die identischen rechten Seiten heben sich beim Subtrahieren auf.

### Klassifikation
Welcher Typ ist $u_{{xx}}+u_{{yy}}=0$?

- [ ] parabolisch
- [ ] hyperbolisch
- [x] elliptisch
- [ ] nichtlinear

> Die Hauptteilmatrix ist die Einheitsmatrix.

### Klassifikation
Welcher Typ ist $u_{tt}-u_{{xx}}=0$?

- [ ] elliptisch
- [ ] quasilinear, aber nicht linear
- [x] hyperbolisch
- [ ] parabolisch

> Der Hauptteil hat Eigenwerte mit verschiedenen Vorzeichen.

### Klassifikation
Welcher Typ ist $u_t-u_{{xx}}=0$ in den Variablen $(t,x)$?

- [x] parabolisch
- [ ] hyperbolisch
- [ ] elliptisch
- [ ] von Ordnung eins

> Der Hauptteil zweiter Ordnung besitzt einen Null-Eigenwert.

### Klassifikation
Welche Größe entscheidet bei $au_{{xx}}+2bu_{{xy}}+cu_{{yy}}=0$ über den Typ?

- [ ] $a^2+b^2+c^2$
- [ ] $a-c$
- [x] $ac-b^2$
- [ ] $a+b+c$

> Das Vorzeichen der Determinante der symmetrischen Hauptteilmatrix ist entscheidend.

### Wärme
Was beschreibt $u(t,x)$ in der Wärmeleitungsgleichung typischerweise?

- [ ] das elektrische Feld
- [ ] die Geschwindigkeit einer Saite
- [ ] den Druck eines idealen Gases ausschließlich
- [x] die Temperaturverteilung

> $u$ wird als Temperaturfeld interpretiert.

### Wärme
In welche Richtung zeigt der Wärmefluss $q=-k\nabla u$ für $k>0$ an Punkten mit $\nabla u\ne0$?

- [ ] immer senkrecht zur Zeitachse
- [ ] immer nach rechts
- [ ] in Richtung zunehmender Temperatur
- [x] in Richtung abnehmender Temperatur

> Das Minuszeichen beschreibt Wärmefluss von warm nach kalt.

### Wärme
Was bedeutet $f>0$ in $u_t-k\Delta u=f$?

- [ ] eine feste Randtemperatur
- [ ] eine perfekte Isolierung
- [x] eine lokale Wärmequelle
- [ ] eine verschwindende Wärmeleitfähigkeit

> Ein positiver Quellterm führt Wärme zu.

### Wärme
Was passiert mit räumlich konstanten Lösungen von $u_t=\Delta u$ ohne Quellen?

- [ ] Sie oszillieren.
- [ ] Sie werden sofort null.
- [ ] Sie wachsen exponentiell.
- [x] Sie bleiben zeitlich konstant.

> Für konstantes $u$ gilt $\Delta u=0$, also $u_t=0$.

### Wellen
Welche Größe ist $u_{tt}$ bei der schwingenden Saite, wenn $u(t,x)$ die Auslenkung bezeichnet?

- [x] die vertikale Beschleunigung
- [ ] die vertikale Geschwindigkeit
- [ ] die Temperatur
- [ ] die Krümmung der Saite

> Die zweite Zeitableitung ist die Beschleunigung.

### Wellen
Welche Wirkung hat $-\beta u_t$ mit $\beta>0$ in einer Wellengleichung?

- [ ] eine Änderung der Raumdimension
- [x] Dämpfung
- [ ] eine feste Auslenkung
- [ ] Verstärkung jeder Schwingung

> Der Term wirkt der Geschwindigkeit entgegen.

### Wellen
Welche physikalische Bedeutung hat $-ku$ für $k>0$ in $u_{tt}=c^2u_{{xx}}-ku$?

- [ ] eine Wärmequelle
- [ ] eine elektrische Ladung
- [ ] eine konstante Geschwindigkeit
- [x] eine rückstellende Federkraft

> Der Term wirkt einer Auslenkung entgegen.

### Wellen
Wie hängt die Wellengeschwindigkeit $c$ in der Saitengleichung mit Spannung $T_0$ und Massendichte $\rho$ zusammen?

- [ ] $c=T_0\rho$
- [ ] $c=T_0+\rho$
- [x] $c=\sqrt{T_0/\rho}$
- [ ] $c=\rho/T_0$

> Aus $u_{tt}=(T_0/\rho)u_{{xx}}$ folgt $c^2=T_0/\rho$.

### Maxwell
Wofür steht $E$ in den Maxwell-Gleichungen?

- [ ] Strömungsgeschwindigkeit
- [ ] Temperatur
- [ ] Massendichte
- [x] elektrisches Feld

> Im Skript sind $E$ und $H$ die elektrischen bzw. magnetischen Felder.

### Maxwell
Wofür steht $H$ in den Maxwell-Gleichungen?

- [x] magnetisches Feld
- [ ] Temperatur
- [ ] elektrische Leitfähigkeit
- [ ] Druck

> Das Feld $H$ beschreibt die magnetische Feldstärke.

### Strömung
Was beschreibt $v$ in den Euler- und Navier–Stokes-Gleichungen?

- [x] das Geschwindigkeitsfeld
- [ ] die elektrische Ladung
- [ ] die Saitenauslenkung
- [ ] die Temperatur

> $v$ ist das Geschwindigkeitsfeld der Strömung.

### Strömung
Was bedeutet $\operatorname{div}v=0$ im inkompressiblen Modell?

- [x] Das Geschwindigkeitsfeld ist divergenzfrei.
- [ ] Die Strömung ist zeitlich konstant.
- [ ] Der Druck ist überall null.
- [ ] Die Geschwindigkeit ist überall null.

> Divergenzfreiheit ist nicht gleichbedeutend mit Stillstand.

### Laplace
Wie heißen Lösungen von $\Delta u=0$?

- [ ] periodische Funktionen
- [ ] Eigenvektoren
- [ ] nur konstante Funktionen
- [x] harmonische Funktionen

> Harmonisch bedeutet, dass der Laplace-Operator verschwindet.

### Laplace
Ist $u(x,y)=x^2-y^2$ harmonisch?

- [ ] Nein, denn $u_{{xx}}=2$.
- [ ] Ja, weil jede quadratische Funktion harmonisch ist.
- [x] Ja, denn $u_{{xx}}+u_{{yy}}=0$.
- [ ] Nein, denn $u$ ist nicht konstant.

> Es gilt $u_{{xx}}=2$ und $u_{{yy}}=-2$.

### Laplace
Wie lautet der zweidimensionale Laplace-Operator in kartesischen Koordinaten?

- [ ] $\partial_{xy}$
- [x] $\partial_{xx}+\partial_{yy}$
- [ ] $\partial_x+\partial_y$
- [ ] $\partial_{tt}-\partial_{xx}$

> Der Laplace-Operator summiert die reinen zweiten räumlichen Ableitungen.

### Ableitungen
Für $u(x,y)=x^4y^2$: Was ist $u_{xx}$?

- [ ] $12x^2y$
- [ ] $4x^3y^2$
- [x] $12x^2y^2$
- [ ] $8x^3y$

> Zweimal nach $x$ ableiten: $4\cdot3\,x^2y^2=12x^2y^2$; $y$ bleibt konstant.

### Ableitungen
Für $u(t,x)=2t^2x^3$: Was ist $u_t$?

- [ ] $2t^2x^3$
- [ ] $6t^2x^2$
- [x] $4tx^3$
- [ ] $4tx^2$

> Nur nach $t$ ableiten: $2\cdot2t\cdot x^3=4tx^3$.

### Laplace
Für $u(x,y)=2x^2+3y^2$: Wie groß ist $\Delta u$?

- [ ] $4$
- [ ] $5$
- [ ] $9$
- [x] $10$

> $u_{xx}=4$ und $u_{yy}=6$, zusammen $10$.

### Klassifikation
Welchen Typ hat $2u_{xx}+3u_{yy}=0$?

- [ ] nichtlinear
- [x] elliptisch
- [ ] parabolisch
- [ ] hyperbolisch

> Beide Hauptteilkoeffizienten sind positiv.

### Klassifikation
Welchen Typ hat $2u_{xx}-3u_{yy}=0$?

- [ ] elliptisch
- [x] hyperbolisch
- [ ] von Ordnung eins
- [ ] parabolisch

> Die Hauptteilkoeffizienten haben verschiedene Vorzeichen.

### Klassifikation
Welchen Typ hat $2u_{xx}+u_y=0$?

- [ ] hyperbolisch
- [x] parabolisch
- [ ] nichtlinear
- [ ] elliptisch

> Die Hauptteilmatrix hat einen positiven und einen Null-Eigenwert.

### Wärme
Für $u(t,x)=e^{-4t}\sin(2x)$: Welche Gleichung erfüllt $u$ identisch für alle $(t,x)$?

- [ ] $u_{tt}=u_{{xx}}$
- [ ] $u_t=-u_{{xx}}$
- [ ] $u_t=u_x$
- [x] $u_t=u_{{xx}}$

> $u_t=-4u$ und $u_{xx}=-4u$.

### Wellen
Für $u(t,x)=\sin(2x-2t)$: Welche Gleichung gilt identisch für alle $(t,x)$?

- [ ] $u_t=u_{{xx}}$
- [ ] $u_{tt}=-u_{{xx}}$
- [x] $u_{tt}=u_{{xx}}$
- [ ] $u_t=u_x$

> $u_{tt}=-4u$ und $u_{xx}=-4u$.

### Wärme
Ein Stab habe das Temperaturprofil $u(x)=2x+2$ und den Wärmeleitkoeffizienten $k=2$. Wie groß ist der Wärmefluss $q=-ku_x$?

- [ ] $-8$
- [x] $-4$
- [ ] $4$
- [ ] $-2$

> $u_x=2$, also $q=-2\cdot2=-4$.

### Laplace
Ist $u(x,y)=2xy+3$ harmonisch?

- [ ] Nein, $u_{{xy}}\ne0$.
- [ ] Nein, weil $u$ nicht konstant ist.
- [ ] Nein, denn $u_{xx}+u_{yy}=1$.
- [x] Ja, $\Delta u=0$.

> Beide reinen zweiten Ableitungen verschwinden.

### Wärme
Für $u(t,x)=2t+x^2$ in der Wärmeleitungsgleichung $u_t-k\,u_{xx}=f$ mit $k=1$: Was ist die Quelle $f$?

- [ ] $-2$
- [ ] $4$
- [ ] $2$
- [x] $0$

> $u_t=2$ und $u_{xx}=2$, also $f=0$.

### Klassifikation
Für $u_{xx}+4u_{xy}+u_{yy}=0$: Welchen Typ hat die PDE?

- [ ] elliptisch
- [ ] nichtlinear
- [ ] parabolisch
- [x] hyperbolisch

> Wegen $2b=4$ ist $b=2$ und $ac-b^2=1-4=-3<0$.

### Laplace
Für $u(x,y)=2x^2-2y^2$: Wie groß ist $\Delta u$?

- [x] $0$
- [ ] $8$
- [ ] $-4$
- [ ] $4$

> Die beiden zweiten Ableitungen heben sich auf.

### Wellen
Eine Saite hat die Spannung $T_0=4$ und die Massendichte $\rho=1$. Wie groß ist die Wellengeschwindigkeit $c$?

- [x] $2$
- [ ] $3$
- [ ] $4$
- [ ] $104$

> $c=\sqrt{T_0/\rho}$.

### Wärme
Für $u(t,x)=2x^2$: Wie groß ist $u_t-u_{xx}$?

- [ ] $2$
- [x] $-4$
- [ ] $-2$
- [ ] $4$

> $u_t=0$ und $u_{xx}=4$.

### Grundbegriffe
Welche Ordnung hat die Korteweg-de-Vries-Gleichung $u_t+u\,u_x+u_{xxx}=0$ (Flachwasserwellen)?

- [ ] 2
- [ ] 4
- [ ] 1
- [x] 3

> Die höchste vorkommende Ableitung ist $u_{xxx}$.

### Grundbegriffe
Wie lässt sich die Burgers-Gleichung $u_t+u\,u_x=0$ einordnen?

- [ ] nicht quasilinear
- [ ] linear und homogen
- [ ] linear und inhomogen
- [x] quasilinear, aber nicht linear

> Der Koeffizient $u$ vor $u_x$ hängt von der Lösung ab, aber nicht von den höchsten Ableitungen.

### Grundbegriffe
Welche Gleichung ist **nicht** quasilinear?

- [ ] $u_t=u\,u_{xx}$
- [x] $u_t=(u_{xx})^2$
- [ ] $u_t=u_{xx}+u^2$
- [ ] $u_t=x\,u_{xx}$

> Hier tritt die höchste Ableitung $u_{xx}$ nichtlinear auf.

### Grundbegriffe
Wie viele Lösungen hat $\Delta u=0$ auf $\mathbb R^2$ ohne jede Zusatzbedingung?

- [ ] Keine
- [ ] Genau eine
- [x] Unendlich viele, zum Beispiel alle affinen Funktionen $ax+by+c$
- [ ] Genau zwei

> Ohne Rand- oder Abklingbedingungen ist eine PDE in der Regel nicht eindeutig lösbar.

### Grundbegriffe
Ist $u_{xx}+e^{x}u_y=\sin y$ eine lineare PDE?

- [x] Ja, linear und inhomogen
- [ ] Ja, linear und homogen
- [ ] Nein, wegen $\sin y$
- [ ] Nein, wegen $e^x$

> Koeffizienten und rechte Seite dürfen beliebig von den Variablen abhängen.

### Grundbegriffe
$u_1$ löst $\Delta u=f_1$, $u_2$ löst $\Delta u=f_2$. Was löst $u_1+u_2$?

- [ ] $\Delta u=f_1-f_2$
- [ ] $\Delta u=0$
- [ ] $\Delta u=f_1f_2$
- [x] $\Delta u=f_1+f_2$

> Linearität: Die rechten Seiten addieren sich.

### Grundbegriffe
Wie viele unabhängige Variablen hat eine Temperaturverteilung $u(t,x)$ mit $x\in\Omega\subseteq\mathbb R^3$?

- [ ] 6
- [ ] 1
- [x] 4
- [ ] 3

> Eine Zeitvariable und drei Ortskoordinaten.

### Klassifikation
Welchen Typ hat die Tricomi-Gleichung $y\,u_{xx}+u_{yy}=0$ im Bereich $y<0$?

- [ ] Der Typ hängt nicht von $y$ ab.
- [x] hyperbolisch
- [ ] elliptisch
- [ ] parabolisch

> Mit $a=y$, $b=0$, $c=1$ gilt $ac-b^2=y<0$.

### Klassifikation
Welchen Typ hat die Tricomi-Gleichung $y\,u_{xx}+u_{yy}=0$ auf der Geraden $y=0$?

- [x] parabolisch
- [ ] nichtlinear
- [ ] hyperbolisch
- [ ] elliptisch

> Dort ist $ac-b^2=0$. Der Typ kann sich innerhalb eines Gebiets ändern (Strömung um den Schallmauer-Übergang).

### Klassifikation
Welchen Typ hat $u_{xx}+u_{xy}+u_{yy}=0$?

- [ ] nichtlinear
- [ ] hyperbolisch
- [x] elliptisch
- [ ] parabolisch

> Wegen $2b=1$ ist $b=\tfrac12$ und $ac-b^2=\tfrac34>0$.

### Klassifikation
Welchen Typ hat $u_{xy}=0$?

- [ ] parabolisch
- [x] hyperbolisch
- [ ] elliptisch
- [ ] Sie hat keinen Typ, weil $u_{xx}$ fehlt.

> $a=c=0$, $b=\tfrac12$, also $ac-b^2=-\tfrac14<0$.

### Klassifikation
Welche Eigenwerte hat die Koeffizientenmatrix von $u_{xx}+4u_{xy}+u_{yy}=0$?

- [x] $3$ und $-1$
- [ ] $4$ und $0$
- [ ] $1$ und $1$
- [ ] $1$ und $4$

> $A=\begin{pmatrix}1&2\\2&1\end{pmatrix}$; verschiedene Vorzeichen, also hyperbolisch.

### Klassifikation
Welchen Typ hat die zweidimensionale Wellengleichung $u_{tt}=u_{xx}+u_{yy}$ in den Variablen $(t,x,y)$?

- [ ] elliptisch
- [ ] parabolisch
- [ ] nichtlinear
- [x] hyperbolisch

> Die Eigenwerte der Koeffizientenmatrix sind $1,-1,-1$: einer hat das andere Vorzeichen.

### Klassifikation
Wie ändert sich der Typ einer linearen PDE zweiter Ordnung, wenn man sie mit $-1$ multipliziert?

- [x] Gar nicht
- [ ] Sie wird nichtlinear.
- [ ] elliptisch wird hyperbolisch
- [ ] hyperbolisch wird parabolisch

> Alle Eigenwerte wechseln gleichzeitig ihr Vorzeichen; die Typbedingungen bleiben erfüllt.

### Klassifikation
Ändert der Term $5u_x+u$ den Typ von $u_{xx}-u_{yy}+5u_x+u=0$?

- [ ] Ja, sie wird nichtlinear.
- [ ] Ja, die Gleichung wird parabolisch.
- [ ] Ja, die Gleichung wird elliptisch.
- [x] Nein, der Typ wird nur durch die zweiten Ableitungen bestimmt.

> Die Klassifikation hängt allein von der Koeffizientenmatrix $A$ der zweiten Ableitungen ab.

### Wärme
Welcher Satz verwandelt bei der Herleitung der Wärmeleitungsgleichung den Randfluss $\int_{\partial O}q\cdot n$ in ein Volumenintegral?

- [ ] Der Satz von Picard-Lindelöf
- [x] Der Gaußsche Integralsatz
- [ ] Der Satz von Riemann-Lebesgue
- [ ] Die Kettenregel

> $\int_{\partial O}q\cdot n\,dS=\int_O\operatorname{div}q\,dx$.

### Wärme
Warum folgt aus $\int_O(u_t+\operatorname{div}q-f)\,dx=0$ für **jedes** Teilvolumen $O$ die punktweise Gleichung?

- [ ] Weil $O$ immer eine Kugel ist
- [x] Ein stetiger Integrand, dessen Integral über jedes Teilvolumen verschwindet, ist überall null.
- [ ] Das folgt nicht.
- [ ] Weil $u$ konstant ist

> Wäre der Integrand an einer Stelle positiv, wäre er es in einer kleinen Umgebung, und das Integral dort wäre positiv.

### Wärme
Welche Gleichung beschreibt eine stationäre (zeitlich konstante) Temperaturverteilung ohne Wärmequellen?

- [ ] $u=0$
- [ ] $u_t=0$ und sonst nichts
- [ ] $\Delta u=u_t$
- [x] $\Delta u=0$

> Mit $u_t=0$ und $f=0$ bleibt die Laplacegleichung.

### Wärme
Ein Stab der Länge $L$ hat an den Enden die Temperaturen $20$ und $80$. Wie sieht die stationäre Temperatur ohne Quellen aus?

- [ ] $u(x)=20+60\,x^2/L^2$
- [ ] $u(x)=80-20\,x/L$
- [ ] $u(x)=50$
- [x] $u(x)=20+60\,x/L$

> Stationär gilt $u''=0$: das Profil ist linear zwischen den Randwerten.

### Wärme
Ein Stab mit Nullrandtemperatur wird gleichmäßig beheizt ($f=2$, $k=1$). Wie sieht das stationäre Temperaturprofil aus?

- [ ] Eine nach oben geöffnete Parabel
- [ ] Konstant null
- [x] Eine nach unten geöffnete Parabel mit Maximum in der Mitte
- [ ] Eine Gerade

> Stationär gilt $-u''=2$, also $u''=-2$.

### Wärme
Was ändert sich, wenn der Wärmeleitungskoeffizient $k$ größer wird?

- [ ] Die Temperatur steigt überall.
- [x] Temperaturunterschiede gleichen sich schneller aus.
- [ ] Nichts.
- [ ] Die Gleichung wird hyperbolisch.

> $k$ steht vor $\Delta u$ und bestimmt die Geschwindigkeit der Diffusion.

### Wärme
Ein Tropfen Tinte verteilt sich in ruhendem Wasser. Welche Gleichung beschreibt die Konzentration $c(t,x)$?

- [ ] $c_{tt}=D\,\Delta c$
- [ ] $c_t+c\,c_x=0$
- [ ] $\Delta c=0$
- [x] $c_t=D\,\Delta c$ (Diffusionsgleichung)

> Diffusion gehorcht derselben Gleichung wie die Wärmeleitung.

### Wärme
Wie lässt sich die Perona-Malik-Gleichung $u_t-\operatorname{div}\big(c(|\operatorname{grad}u|)\operatorname{grad}u\big)=f$ einordnen?

- [x] quasilinear, aber nicht linear
- [ ] nicht quasilinear
- [ ] hyperbolisch
- [ ] linear

> Der Diffusionskoeffizient hängt von $\operatorname{grad}u$ ab, also von ersten, nicht von den höchsten Ableitungen.

### Wärme
Wozu dient der Faktor $c(|\operatorname{grad}u|)$ im Perona-Malik-Modell der Bildverarbeitung?

- [ ] Er macht das Bild heller.
- [ ] Er beschleunigt die Diffusion an Kanten.
- [ ] Er ist überall konstant.
- [x] An Kanten (großer Gradient) wird weniger geglättet als in flachen Bereichen.

> Etwa für $c(s)=e^{-s}$ wird $c$ bei großem Gradienten klein: Rauschen wird geglättet, Kanten bleiben erhalten.

### Wärme
$u(t,x)=5+e^{-t}\sin x$ löst $u_t=u_{xx}$. Gegen welche Temperatur strebt $u$ für $t\to\infty$?

- [ ] $6$
- [ ] $0$
- [ ] $\sin x$
- [x] $5$

> Der Sinusanteil klingt ab, die Konstante bleibt.

### Wärme
Welche Einheit hat $k$ in $u_t=k\,u_{xx}$, wenn $t$ in Sekunden und $x$ in Metern gemessen wird?

- [x] $\mathrm{m^2/s}$
- [ ] $\mathrm{m/s}$
- [ ] $\mathrm{1/s}$
- [ ] $\mathrm{s/m^2}$

> $u_t$ hat die Einheit $[u]/\mathrm s$, $u_{xx}$ die Einheit $[u]/\mathrm m^2$.

### Wellen
Was bedeutet die Annahme KLA (kleine Auslenkungen) bei der Herleitung der Saitengleichung?

- [x] $\sin\alpha\approx\tan\alpha=u_x$ und $\cos\alpha\approx1$
- [ ] Die Spannung ist null.
- [ ] Die Saite bewegt sich nur horizontal.
- [ ] Die Dichte ist null.

> Bei kleinen Winkeln lassen sich die Kraftkomponenten durch die Steigung $u_x$ ausdrücken.

### Wellen
Wie ändert sich die Wellengeschwindigkeit $c=\sqrt{T_0/\rho}$, wenn man die Saitenspannung $T_0$ vervierfacht?

- [x] Sie verdoppelt sich.
- [ ] Sie halbiert sich.
- [ ] Sie bleibt gleich.
- [ ] Sie vervierfacht sich.

> $\sqrt{4}=2$.

### Wellen
Ein Stab wird längs angestoßen (Dehnstab). Welche Gleichung beschreibt die Längsauslenkung?

- [x] Ebenfalls eine Wellengleichung, nur mit anderer Bedeutung der Konstanten
- [ ] Die Laplacegleichung
- [ ] Gar keine PDE
- [ ] Die Wärmeleitungsgleichung

> Die Mathematik bleibt gleich, die Konstanten ändern ihre physikalische Bedeutung.

### Wellen
Welche Funktion löst $u_{tt}=4u_{xx}$?

- [ ] $u(t,x)=e^{-4t}\sin x$
- [x] $u(t,x)=(x-2t)^3$
- [ ] $u(t,x)=(x-t)^2$
- [ ] $u(t,x)=(x-4t)^3$

> Für $f(x-ct)$ gilt $u_{tt}=c^2f''$ und $u_{xx}=f''$; hier $c=2$.

### Wellen
Welche Gleichung beschreibt eine schwingende ebene Membran (Trommelfell)?

- [x] $u_{tt}=c^2(u_{xx}+u_{yy})$
- [ ] $u_t=c^2(u_{xx}+u_{yy})$
- [ ] $u_{xx}+u_{yy}=0$
- [ ] $u_{tt}=c^2u_{xx}$

> In höheren Dimensionen ersetzt der Laplace-Operator die zweite Ortsableitung.

### Wellen
Welcher Term modelliert eine äußere Last auf der Saite, etwa Wind?

- [ ] $-ku$
- [ ] $c^2u_{xx}$
- [x] $f(t,x)$ in $u_{tt}=c^2u_{xx}+f$
- [ ] $-\beta u_t$

> Äußere Kräfte gehen als rechte Seite ein.

### Wellen
Welche Funktion ist eine stehende Welle und löst $u_{tt}=u_{xx}$?

- [ ] $\cos x\,\sin(2t)$
- [ ] $\sin x\,\cos(2t)$
- [x] $\sin x\,\cos t$
- [ ] $\sin x\,e^{-t}$

> $u_{tt}=-\sin x\cos t=u_{xx}$. Bei $\cos(2t)$ wäre $u_{tt}=-4u$.

### Wellen
Was unterscheidet die Wellengleichung von der Wärmeleitungsgleichung in der Zeitableitung?

- [x] Die Wellengleichung hat die zweite, die Wärmeleitungsgleichung die erste Zeitableitung.
- [ ] Die Wellengleichung hat gar keine Zeitableitung.
- [ ] Es gibt keinen Unterschied.
- [ ] Die Wärmeleitung hat die zweite Zeitableitung.

> Das erklärt Schwingung bzw. Abklingen.

### Maxwell
Welcher Term in $\partial_t\epsilon E-\operatorname{rot}H=-J-\sigma E$ beschreibt den Strom in einem leitenden Medium (Ohmsches Gesetz)?

- [x] $\sigma E$
- [ ] $J$
- [ ] $\operatorname{rot}H$
- [ ] $\partial_t\epsilon E$

> $\sigma$ ist die Leitfähigkeit; $J$ sind externe Ströme.

### Maxwell
Welche Gleichung drückt aus, dass Magnetfelder quellenfrei sind?

- [ ] $\operatorname{rot}H=0$
- [x] $\operatorname{div}\mu H=0$
- [ ] $\operatorname{div}\epsilon E=0$
- [ ] $\partial_t H=0$

> Es gibt keine magnetischen Ladungen.

### Maxwell
Welche Vektoridentität benutzt man, um aus den Maxwell-Gleichungen eine Wellengleichung herzuleiten?

- [x] $\operatorname{rot}\operatorname{rot}=\operatorname{grad}\operatorname{div}-\Delta$
- [ ] $\operatorname{div}\operatorname{rot}=\Delta$
- [ ] $\operatorname{grad}\operatorname{div}=0$
- [ ] $\operatorname{rot}\operatorname{grad}=\Delta$

> Mit $\operatorname{div}H=0$ bleibt $\partial_t^2H=\Delta H+\operatorname{rot}J$.

### Maxwell
Was folgt im Vakuum ohne Ströme ($\epsilon=\mu=1$, $\sigma=0$, $J=0$) für das Magnetfeld $H$?

- [ ] $H$ ist konstant.
- [x] $\partial_t^2H=\Delta H$ – es breiten sich elektromagnetische Wellen aus.
- [ ] $\Delta H=0$
- [ ] $\partial_tH=\Delta H$

> Licht und Radiowellen sind Lösungen dieser Wellengleichung.

### Maxwell
Wie viele skalare unbekannte Funktionen enthalten $E$ und $H$ zusammen im $\mathbb R^3$?

- [ ] 2
- [x] 6
- [ ] 3
- [ ] 9

> Jedes Feld hat drei Komponenten.

### Strömung
Welcher Term macht die Euler- und die Navier-Stokes-Gleichung nichtlinear?

- [ ] $\frac1\rho\operatorname{grad}p$
- [x] $(v\cdot\operatorname{grad})v$
- [ ] $k$
- [ ] $\partial_tv$

> Die Geschwindigkeit wird mit ihren eigenen Ableitungen multipliziert.

### Strömung
Was unterscheidet die Navier-Stokes-Gleichung von der Euler-Gleichung?

- [ ] Der Druckterm
- [ ] Die äußere Kraft $k$
- [x] Der Reibungsterm $-\epsilon\Delta v$ (Zähigkeit)
- [ ] Die Zeitableitung

> Die Euler-Gleichung beschreibt reibungsfreie Fluide.

### Strömung
Was bewirkt der Term $\frac1\rho\operatorname{grad}p$ in der Euler- bzw. Navier-Stokes-Gleichung?

- [x] Eine Beschleunigung durch Druckunterschiede
- [ ] Die Reibung
- [ ] Die Schwerkraft
- [ ] Die Inkompressibilität

> Das Fluid wird von hohem zu niedrigem Druck beschleunigt.

### Strömung
Was bedeutet $k$ in der Euler-Gleichung, etwa bei einem Fluss?

- [x] Eine Beschleunigung durch äußere Kräfte, zum Beispiel die Schwerkraft
- [ ] Die Dichte
- [ ] Die Viskosität
- [ ] Den Druck

> $k$ ist die äußere Beschleunigung.

### Strömung
Welche physikalische Annahme drückt $\operatorname{div}v=0$ für Wasser in einer Leitung aus?

- [x] Inkompressibilität: Was hineinfließt, muss auch hinausfließen.
- [ ] Es gibt keine Reibung.
- [ ] Der Druck ist konstant.
- [ ] Das Wasser steht still.

> Ein divergenzfreies Feld hat keine Quellen und Senken.

### Laplace
Ist $u(x,y)=e^x\sin y$ harmonisch?

- [x] Ja
- [ ] Nein, $\Delta u=2e^x\sin y$
- [ ] Nur für $y=0$
- [ ] Nein, $\Delta u=e^x$

> $u_{xx}=e^x\sin y$, $u_{yy}=-e^x\sin y$.

### Laplace
Ist $u(x,y)=x^3-3xy^2$ harmonisch?

- [ ] Nein, $\Delta u=6x$
- [ ] Nur für $x=0$
- [x] Ja
- [ ] Nein, $\Delta u=-6y$

> $u_{xx}=6x$ und $u_{yy}=-6x$.

### Laplace
Ist $u(x,y)=x^2+y^2$ harmonisch?

- [ ] Nein, $\Delta u=2$
- [ ] Ja
- [ ] Nur auf dem Einheitskreis
- [x] Nein, $\Delta u=4$

> Beide zweiten Ableitungen sind $2$.

### Laplace
Welche nur vom Radius $r$ abhängige Funktion ist auf $\mathbb R^2\setminus\{0\}$ harmonisch?

- [ ] $r^2$
- [ ] $1/r$
- [x] $\ln r$
- [ ] $r$

> In Polarkoordinaten: $u_{rr}+\frac1ru_r=-\frac1{r^2}+\frac1{r^2}=0$.

### Laplace
Welches Potential einer Punktmasse ist im $\mathbb R^3$ außerhalb der Masse harmonisch?

- [ ] $u(p)=|p-p_0|$
- [ ] $u(p)=|p-p_0|^2$
- [x] $u(p)=\dfrac{1}{|p-p_0|}$
- [ ] $u(p)=\ln|p-p_0|$

> Das zeigt die Rechnung zum Gravitationsfeld im Skript.

### Laplace
Wie lautet der Laplace-Operator in Polarkoordinaten?

- [ ] $u_{rr}+\frac1{r^2}u_r+\frac1ru_{\varphi\varphi}$
- [ ] $\frac1ru_{rr}+u_{\varphi\varphi}$
- [ ] $u_{rr}+u_{\varphi\varphi}$
- [x] $u_{rr}+\frac1ru_r+\frac1{r^2}u_{\varphi\varphi}$

> Das folgt mit der Kettenregel aus $x=r\cos\varphi$, $y=r\sin\varphi$.

### Laplace
Was liefert der Laplace-Operator in Polarkoordinaten für $u=r\cos\varphi$?

- [x] $0$
- [ ] $1$
- [ ] $2/r$
- [ ] $\cos\varphi$

> $0+\frac{\cos\varphi}{r}-\frac{\cos\varphi}{r}=0$ – das ist ja $u=x$.

### Laplace
Was liefert der Laplace-Operator für $u=r^2$ in Polarkoordinaten?

- [ ] $2$
- [ ] $0$
- [x] $4$
- [ ] $2r$

> $u_{rr}=2$ und $\frac1ru_r=2$; in kartesischen Koordinaten ist $u=x^2+y^2$.

### Laplace
Warum formuliert man den Laplace-Operator bei einer kreisförmigen Platte in Polarkoordinaten?

- [ ] Weil die Gleichung dann keine Ableitungen mehr enthält
- [x] Weil sich die Randbedingung auf $r=R$ dann einfach schreiben lässt
- [ ] Weil er dort linear wird
- [ ] Weil kartesische Koordinaten dort nicht definiert sind

> Die Koordinaten passen zur Symmetrie des Gebiets.

### Laplace
Welche Gleichung beschreibt die Wärmeleitung in einem dünnen Kreisring vom Radius $R$?

- [x] $u_t=\frac{1}{R^2}u_{\varphi\varphi}$
- [ ] $u_t=u_{rr}+\frac1ru_r$
- [ ] $u_{tt}=u_{\varphi\varphi}$
- [ ] $u_t=u_{rr}$

> Im dünnen Ring hängt $u$ nur vom Winkel ab; $r=R$ ist fest.

### Laplace
Welcher Term kommt in Zylinderkoordinaten zum polaren Laplace-Operator hinzu?

- [ ] $u_{\varphi z}$
- [ ] $\frac1zu_z$
- [x] $u_{zz}$
- [ ] $u_{rz}$

> Die Höhe $z$ wird kartesisch beibehalten.

### Laplace
Was sind Kugelflächenfunktionen?

- [x] Eigenfunktionen des Laplace-Operators auf der Kugeloberfläche
- [ ] Die Koordinatenlinien der Kugel
- [ ] Polynome in $x$ allein
- [ ] Lösungen der Wärmeleitung auf einem Stab

> Sie beschreiben etwa das Schwerefeld der Erde oder Atomorbitale.

### Laplace
Welche physikalische Größe erfüllt in einem ladungsfreien Gebiet die Laplacegleichung?

- [ ] Die Auslenkung einer angeschlagenen Saite
- [x] Das elektrostatische Potential
- [ ] Die Temperatur in einem Ofen mit Heizung
- [ ] Die Geschwindigkeit einer Welle

> Ohne Ladungen ist die Quellstärke null.

### Laplace
Welchen Wert hat eine auf einer Kreisscheibe harmonische Funktion im Mittelpunkt?

- [ ] Immer null
- [ ] Das Maximum der Randwerte
- [ ] Den Randwert bei $\varphi=0$
- [x] Den Mittelwert ihrer Werte auf dem Rand

> Mittelwerteigenschaft harmonischer Funktionen.

## Welt 2 – Abschnitte 3.1 und 3.2 sowie Kapitel 4 – Anfangs-/Randbedingungen und Separation

### Anfangswerte
Was bedeutet Wohlgestelltheit nach Hadamard?

- [ ] Nur eine beschränkte Lösung.
- [ ] Nur Existenz.
- [x] Existenz, Eindeutigkeit und stetige Abhängigkeit von den Daten.
- [ ] Nur eine explizite Lösungsformel.

> Alle drei Eigenschaften gehören zur Wohlgestelltheit.

### Anfangswerte
Was gibt $u(0,x)=u_0(x)$ bei der Wärmegleichung vor?

- [ ] den Wärmefluss am Rand
- [x] die anfängliche Temperaturverteilung
- [ ] die Ableitung $u_{tt}(0,x)$
- [ ] die Endtemperatur

> Die Bedingung legt den Zustand zum Startzeitpunkt fest.

### Anfangswerte
Welche Anfangsdaten sind für die Wellengleichung zweiter Ordnung in der Zeit üblich?

- [ ] nur $u(0,x)$
- [x] $u(0,x)$ und $u_t(0,x)$
- [ ] $u_{{xx}}(0,x)$ und $u_{xxx}(0,x)$
- [ ] nur $u_x(0,x)$

> Anfangsauslenkung und Anfangsgeschwindigkeit werden vorgegeben.

### Randwerte
Was bedeutet eine Dirichlet-Randbedingung?

- [ ] Nur die Normalenableitung wird vorgegeben.
- [x] Der Wert von $u$ wird am Rand vorgegeben.
- [ ] Die PDE wird am Rand ignoriert.
- [ ] Nur die Zeitableitung wird vorgegeben.

> Dirichlet legt den Funktionswert am Rand fest.

### Randwerte
Was bedeutet eine Neumann-Randbedingung?

- [ ] Der Funktionswert wird am Rand vorgegeben.
- [ ] Die gesamte Funktion wird im Inneren vorgegeben.
- [ ] Die Anfangsgeschwindigkeit wird vorgegeben.
- [x] Die Normalenableitung wird am Rand vorgegeben.

> Neumann betrifft $\partial_\nu u$.

### Randwerte
Was kombiniert eine Robin-Randbedingung?

- [ ] nur die zweite Zeitableitung
- [x] Funktionswert und Normalenableitung
- [ ] zwei Anfangszeiten
- [ ] zwei verschiedene PDEs

> Typisch ist $\partial_\nu u+ku=g$.

### Randwerte
Was bedeutet $u=0$ an beiden Enden einer Saite?

- [ ] Die Geschwindigkeit ist überall null.
- [ ] Die Enden sind frei beweglich.
- [x] Die Enden sind festgehalten.
- [ ] Die Saite ist überall unbewegt.

> Homogene Dirichlet-Werte modellieren feste Enden.

### Randwerte
Welche Bedingung beschreibt einen isolierten Rand bei konstanter Wärmeleitfähigkeit?

- [ ] $u_t=0$
- [x] $\partial_\nu u=0$
- [ ] $u=0$
- [ ] $\Delta u=1$

> Null-Normalenableitung bedeutet nach dem Fourier-Gesetz keinen normalen Wärmefluss.

### Randwerte
Was ist bei periodischen Randbedingungen auf einem Ring passend?

- [ ] Die Zeit wird periodisch gemacht.
- [ ] Beide Endwerte müssen null sein.
- [ ] Die Temperatur muss konstant sein.
- [x] Wert und räumliche Ableitung stimmen an den verbundenen Enden überein.

> Der Ring besitzt keine getrennten Endpunkte.

### Randwerte
Was bedeutet eine gemischte Randbedingung?

- [ ] Die PDE ist gleichzeitig linear und nichtlinear.
- [ ] Nur der Anfangswert ist unbekannt.
- [x] Auf verschiedenen Randteilen werden unterschiedliche Randtypen benutzt.
- [ ] Es gibt keine Randbedingungen.

> Dirichlet und Neumann können auf verschiedenen Randteilen auftreten.

### Randwerte
Welche der folgenden Randdaten bestimmen bei gegebenem $f$ die klassische Lösung von $u^{\prime\prime}=f$ auf $(0,1)$ eindeutig?

- [ ] $u^{\prime\prime}(0)$ und $u^{\prime\prime}(1)$
- [ ] nur $u(0)$
- [x] $u(0)$ und $u(1)$
- [ ] nur $u^{\prime}(0)$

> Zwei Dirichlet-Werte bestimmen die zwei Integrationskonstanten.

### Randwerte
Was ist bei ausschließlich homogenen Neumann-Randbedingungen für $u^{\prime\prime}=0$ zu beachten?

- [x] Konstanten sind Lösungen, also fehlt Eindeutigkeit.
- [ ] Die Gleichung wird nichtlinear.
- [ ] Nur die Nullfunktion ist Lösung.
- [ ] Es gibt nie eine Lösung.

> Jede konstante Funktion erfüllt $u^{\prime\prime}=u^{\prime}=0$.

### Separation
Was ist der Fourier’sche Separationsansatz?

- [ ] $u(t,x)=X(t)+Y(x)$ als einzig möglicher Ansatz
- [x] $u(t,x)=X(t)Y(x)$
- [ ] $u(t,x)=t+x$
- [ ] $u(t,x)=X(tx)$

> Ein Produkt aus Zeit- und Ortsfaktor wird angesetzt.

### Separation
Warum entsteht beim Separationsansatz eine Konstante?

- [ ] Weil $t=x$ gilt.
- [ ] Weil jede Lösung konstant ist.
- [ ] Weil die Randbedingungen entfallen.
- [x] Ein Ausdruck nur in $t$ ist gleich einem Ausdruck nur in $x$.

> Beide voneinander unabhängigen Seiten müssen konstant sein.

### Separation
Welche Ortsgleichung ergibt $u_t=u_{{xx}}$ mit dem Ansatz $u(t,x)=X(t)Y(x)$?

- [ ] $Y^{\prime\prime}=\lambda X$
- [ ] $Y=\lambda t$
- [ ] $Y^{\prime}=\lambda Y$
- [x] $Y^{\prime\prime}=\lambda Y$

> Einsetzen ergibt $X^{\prime}/X=Y^{\prime\prime}/Y=\lambda$.

### Separation
Welche Zeitgleichung ergibt $u_t=u_{{xx}}$ mit dem Ansatz $u(t,x)=X(t)Y(x)$?

- [ ] $X^{\prime\prime}=\lambda X$
- [ ] $X^{\prime}=\lambda Y$
- [x] $X^{\prime}=\lambda X$
- [ ] $X=\lambda x$

> Die Zeitableitung erster Ordnung führt auf $X^{\prime}=\lambda X$.

### Separation
Welche Ortsfunktionen erfüllen $Y^{\prime\prime}=\lambda Y$, $Y(0)=Y(1)=0$ nichttrivial?

- [ ] $e^x$
- [x] $\sin(n\pi x)$ mit $n\in\mathbb N$, $n\ge1$
- [ ] $1$
- [ ] $x$

> Die Dirichlet-Eigenfunktionen sind Sinusfunktionen.

### Separation
Welcher Separationswert gehört zu $\sin(n\pi x)$ bei $Y^{\prime\prime}=\lambda Y$?

- [ ] $\lambda=n\pi$
- [ ] $\lambda=0$
- [x] $\lambda=-n^2\pi^2$
- [ ] $\lambda=n^2\pi^2$

> Zweimaliges Ableiten liefert $Y^{\prime\prime}=-n^2\pi^2Y$.

### Separation
Wie verhält sich der $n$-te Sinusmodus $\sin(n\pi x)$ der Wärmeleitungsgleichung $u_t=u_{xx}$ auf $(0,1)$ mit Nullrändern mit der Zeit?

- [ ] Er schwingt wie $\cos(nt)$.
- [ ] Er bleibt stets konstant.
- [ ] Er wächst wie $e^{n^2\pi^2t}$.
- [x] Er fällt wie $e^{-n^2\pi^2t}$ ab.

> Die Zeitgleichung ist $X^{\prime}=-n^2\pi^2X$.

### Separation
Was geschieht bei höherer Modenzahl $n$ für die Wärmeleitungsgleichung $u_t=u_{xx}$ auf $(0,1)$ mit Nullrändern?

- [ ] Die Moden werden zeitlich periodisch.
- [ ] Höhere Moden wachsen schneller.
- [x] Höhere Sinusmoden klingen schneller ab.
- [ ] Alle Moden klingen gleich schnell ab.

> Die Abklingrate ist proportional zu $n^2$.

### Separation
Warum darf man Sinusmoden der homogenen Wärmegleichung addieren?

- [ ] Weil die Wärmegleichung nichtlinear ist.
- [x] Wegen der Linearität der Gleichung und der homogenen Randbedingungen.
- [ ] Weil sich die Anfangsdaten aufheben müssen.
- [ ] Weil Sinusfunktionen immer konstant sind.

> Das Superpositionsprinzip erlaubt endliche Summen.

### Separation
Welchen Vorteil hat die Fourier’sche Methode bei allgemeinen Anfangsdaten?

- [x] Man kann die Anfangsdaten in räumliche Eigenmoden zerlegen.
- [ ] Die Zeitvariable verschwindet vollständig.
- [ ] Jede Anfangsfunktion ist ein einzelner Sinus.
- [ ] Man braucht keine Randbedingungen.

> Die Fourier-Koeffizienten bestimmen die Beiträge der Moden.

### Separation
Welche Zeitgleichung entsteht bei $u_{tt}=u_{{xx}}$ aus dem Ansatz $u(t,x)=X(t)Y(x)$?

- [ ] $X^{\prime}=\lambda X$
- [x] $X^{\prime\prime}=\lambda X$
- [ ] $X^{\prime\prime}=\lambda Y$
- [ ] $X=\lambda x$

> Bei der Wellengleichung tritt die zweite Zeitableitung auf.

### Separation
Warum muss ein einzelner Separationsansatz nicht alle Anfangsdaten erfassen?

- [ ] Weil alle PDEs nichtlinear sind.
- [ ] Weil die Zeitvariable immer null ist.
- [x] Allgemeine Anfangsdaten können mehrere räumliche Moden enthalten.
- [ ] Weil Sinusfunktionen keine Ableitungen besitzen.

> Man benötigt im Allgemeinen eine Reihe aus Eigenmoden.

### Randwerte
Welche Randbedingung ist homogen?

- [ ] $\partial_\nu u=2$
- [ ] $u|_{\partial\Omega}=1$
- [x] $u|_{\partial\Omega}=0$
- [ ] $\partial_\nu u+u=3$

> Homogen bedeutet, dass die vorgegebene Randgröße null ist.

### Anfangswerte
Für $u_t=u_{xx}$ und $u(0,x)=2\sin(\pi x)$: Wie lautet die Lösung mit Nullrandwerten auf $(0,1)$?

- [x] $2e^{-\pi^2t}\sin(\pi x)$
- [ ] $2e^{\pi^2t}\sin(\pi x)$
- [ ] $2e^{-t}\sin(\pi x)$
- [ ] $2\sin(\pi x)$

> Der erste Dirichlet-Modus klingt mit $e^{-\pi^2t}$ ab.

### Separation
Für $Y(x)=\sin(2\pi x)$: Welcher Separationswert gilt in $Y^{\prime\prime}=\lambda Y$?

- [ ] $2\pi$
- [ ] $4\pi^2$
- [ ] $-2\pi$
- [x] $-4\pi^2$

> Zweimaliges Ableiten liefert den Faktor $-(2\pi)^2=-4\pi^2$.

### Separation
Für $X^{\prime}=-2X$ und $X(0)=2$: Welche Lösung gilt?

- [x] $2e^{-2t}$
- [ ] $2e^{2t}$
- [ ] $2-2t$
- [ ] $e^{-2t}$

> Lineare skalare ODE mit konstantem Koeffizienten.

### Randwerte
Für $u^{\prime\prime}=0$ auf $(0,1)$ mit $u(0)=0$ und $u(1)=2$: Was ist $u(x)$?

- [x] $2x$
- [ ] $2(1-x)$
- [ ] $2$
- [ ] $2x^2$

> Die allgemeine Lösung ist affin und wird durch beide Randwerte festgelegt.

### Randwerte
Für $u^{\prime\prime}=0$ auf $(0,1)$ mit $u^{\prime}(0)=u^{\prime}(1)=0$: Welche Funktion ist eine Lösung?

- [ ] $u(x)=2x^2$
- [ ] $u(x)=e^{2x}$
- [x] $u(x)=7$
- [ ] $u(x)=2x$

> Alle konstanten Funktionen erfüllen die Gleichung und die Neumann-Bedingungen.

### Randwerte
Für $u(x)=2x^2$ auf $(0,1)$: Was ist $u^{\prime}(1)$?

- [ ] $2$
- [x] $4$
- [ ] $8$
- [ ] $-4$

> $u'(x)=4x$, also $u'(1)=4$.

### Randwerte
Für $u(x)=2x+1$ auf $(0,1)$: Was ist $u(1)$?

- [ ] $-2$
- [x] $3$
- [ ] $2$
- [ ] $4$

> $u(1)=2+1=3$.

### Separation
Welche Funktion erfüllt auf ganz $\mathbb R$ $Y^{\prime\prime}=-4Y$?

- [ ] $Y(x)=\cosh(2x)$
- [x] $Y(x)=\sin(2x)$
- [ ] $Y(x)=e^{2x}$
- [ ] $Y(x)=x^3$

> $(\sin 2x)''=-4\sin 2x$.

### Separation
Welche Funktion erfüllt auf ganz $\mathbb R$ $X^{\prime\prime}=-4X$?

- [x] $X(t)=\cos(2t)$
- [ ] $X(t)=e^{2t}$
- [ ] $X(t)=t^3$
- [ ] $X(t)=\cosh(2t)$

> $(\cos 2t)''=-4\cos 2t$.

### Anfangswerte
Bei $u_t=u_{xx}$ auf $(0,1)$ mit Nullrändern sei $u(0,x)=2\sin(2\pi x)$. Welcher Sinusmodus ist vorgegeben?

- [x] der zweite Modus
- [ ] der dritte Modus
- [ ] der erste Modus
- [ ] der konstante Modus

> Die räumliche Frequenz beträgt $2\pi$.

### Separation
Für $Y(x)=\sin(2x)$: Was ist $Y^{\prime\prime}(x)$?

- [x] $-4\sin(2x)$
- [ ] $-12\sin(2x)$
- [ ] $2\cos(2x)$
- [ ] $4\sin(2x)$

> Zweimaliges Ableiten ergibt den Faktor $-2^2=-4$.

### Randwerte
Für $u(x)=2x(1-x)$: Was sind $u(0)$ und $u(1)$?

- [ ] nur $u(0)$ ist null
- [x] beide null
- [ ] beide eins
- [ ] beide $2$

> An beiden Enden verschwindet einer der Faktoren.

### Anfangswerte
Für $u(t,x)=e^{-2t}\sin x$: Was ist $u(0,x)$?

- [x] $\sin x$
- [ ] $e^{-2}\sin x$
- [ ] $0$
- [ ] $2\sin x$

> Bei $t=0$ ist der Exponentialfaktor eins.

### Randwerte
Für $u(x)=2x+2$: Welche Dirichlet-Werte hat $u$ an den Rändern des Intervalls $(0,1)$?

- [ ] $u(0)=2,\ u(1)=2$
- [ ] $u(0)=0,\ u(1)=2$
- [ ] $u(0)=4,\ u(1)=2$
- [x] $u(0)=2,\ u(1)=4$

> Die Werte erhält man durch Einsetzen der Randpunkte.

### Separation
Für $u(t,x)=e^{-4t}\sin(2x)$: Welches Anfangsprofil gilt? 

- [ ] $0$
- [ ] $2\sin x$
- [x] $\sin(2x)$
- [ ] $e^{-4}\sin(2x)$

> Zum Zeitpunkt null ist der Exponentialfaktor eins.

### Anfangswerte
Warum ist die stetige Abhängigkeit von den Daten (Wohlgestelltheit, Teil iii) bei echten Messdaten so wichtig?

- [x] Messdaten sind ungenau; kleine Messfehler dürfen die Lösung nur wenig verändern.
- [ ] Weil Messdaten immer exakt sind
- [ ] Weil sonst keine Lösung existiert
- [ ] Weil die PDE dann linear wird

> Sonst hätte die berechnete Lösung keinen verlässlichen Bezug zur Realität.

### Anfangswerte
Wie viele Anfangsbedingungen braucht die gedämpfte Wellengleichung $u_{tt}+u_t=\Delta u$?

- [ ] Keine
- [ ] Drei
- [x] Zwei: $u(0,x)$ und $u_t(0,x)$
- [ ] Eine: $u(0,x)$

> Die Zahl der Anfangsbedingungen entspricht der Ordnung der Zeitableitung.

### Anfangswerte
Wie viele Anfangsbedingungen braucht $u_t=\Delta u+u$?

- [ ] Keine
- [ ] Zwei
- [ ] Drei
- [x] Eine

> Die Gleichung ist erster Ordnung in der Zeit.

### Anfangswerte
Braucht die stationäre Gleichung $\Delta u=f$ Anfangsbedingungen?

- [ ] Ja, so viele wie Raumdimensionen
- [x] Nein, nur Randbedingungen, weil keine Zeitableitung vorkommt.
- [ ] Ja, zwei
- [ ] Ja, eine

> Anfangsbedingungen sind Randbedingungen in der Zeit bei $t=0$.

### Anfangswerte
Eine ruhende Glocke wird mit einem Hammer angeschlagen. Welche Anfangsdaten passen?

- [ ] Beide null
- [ ] Nur eine Randbedingung
- [ ] Anfangsauslenkung ungleich null, Anfangsgeschwindigkeit null
- [x] Anfangsauslenkung null, Anfangsgeschwindigkeit ungleich null

> Der Schlag versetzt die Glocke in Bewegung, ohne sie vorher zu verformen.

### Anfangswerte
Eine Gitarrensaite wird gezupft und dann losgelassen. Welche Anfangsdaten passen?

- [ ] Beide null
- [ ] Auslenkung null und Geschwindigkeit dreieckförmig
- [ ] Nur $u_{xx}(0,x)$
- [x] Eine dreieckförmige Anfangsauslenkung und Anfangsgeschwindigkeit null

> Beim Loslassen ist die Saite ausgelenkt, aber noch in Ruhe.

### Anfangswerte
Was passiert, wenn man zu wenige Anfangs- oder Randbedingungen stellt?

- [ ] Es passiert nichts.
- [x] Die Lösung ist im Allgemeinen nicht eindeutig.
- [ ] Die PDE wird elliptisch.
- [ ] Die Lösung wird automatisch null.

> Vollständige Nebenbedingungen sind Voraussetzung für Wohlgestelltheit.

### Randwerte
Ein Stab steckt links in Eiswasser, das rechte Ende ist isoliert. Welche Randbedingungen passen?

- [ ] $u_x(t,0)=0$ und $u_x(t,L)=0$
- [ ] $u(t,0)=0$ und $u(t,L)=0$
- [x] $u(t,0)=0$ und $u_x(t,L)=0$ (gemischt)
- [ ] $u(t,0)=u(t,L)$

> Links ist die Temperatur vorgegeben (Dirichlet), rechts der Wärmefluss null (Neumann).

### Randwerte
Eine Hauswand gibt Wärme an die Außenluft mit Temperatur $u_0$ ab. Welche Randbedingung passt?

- [ ] periodische Randbedingung
- [x] Robin: $\partial_\nu u+c\,(u-u_0)=0$
- [ ] Neumann: $\partial_\nu u=0$
- [ ] Dirichlet: $u=0$

> Das ist das Newtonsche Abkühlungsgesetz.

### Randwerte
Was wird aus der Robin-Bedingung $\partial_\nu u+c\,(u-u_0)=0$ für sehr großes $c$?

- [ ] Die Neumann-Bedingung $\partial_\nu u=0$
- [ ] Eine periodische Bedingung
- [x] Näherungsweise die Dirichlet-Bedingung $u=u_0$
- [ ] Gar keine Bedingung

> Nach Division durch $c$ bleibt $u-u_0\approx0$: perfekter Wärmeübergang.

### Randwerte
Was wird aus der Robin-Bedingung $\partial_\nu u+c\,(u-u_0)=0$ für $c=0$?

- [ ] Eine periodische Bedingung
- [x] Die homogene Neumann-Bedingung – ein isolierter Rand
- [ ] Die Dirichlet-Bedingung $u=u_0$
- [ ] Gar keine Bedingung

> Es bleibt $\partial_\nu u=0$.

### Randwerte
Das Ende einer Saite ist an einem Ring befestigt, der reibungsfrei auf einer Stange gleitet. Welche Randbedingung passt?

- [ ] $u_t=0$
- [ ] $u=0$ (Dirichlet)
- [ ] periodische Randbedingung
- [x] $u_x=0$ (Neumann, loses Ende)

> Senkrecht wirkt keine Kraft, die Saite verläuft dort waagerecht.

### Randwerte
Ein Trommelfell ist am Rand eingespannt. Welche Randbedingung passt?

- [ ] Neumann $\partial_\nu u=0$
- [ ] Robin mit $c=1$
- [ ] Keine
- [x] Homogene Dirichlet-Bedingung $u=0$ auf $\partial\Omega$

> Eingespannt heißt: keine Auslenkung am Rand.

### Randwerte
Was ist die Normalenableitung $\partial_\nu u$?

- [ ] $\Delta u$ am Rand
- [ ] $u_t$ am Rand
- [x] $\nu\cdot\operatorname{grad}u$ mit der äußeren Einheitsnormalen $\nu$
- [ ] Der Funktionswert am Rand

> Sie misst die Änderung von $u$ senkrecht zum Rand nach außen.

### Randwerte
Was ist auf dem Intervall $[0,L]$ die äußere Normalenableitung im linken Randpunkt $x=0$?

- [x] $-u_x(0)$
- [ ] $u_x(0)$
- [ ] $u(0)$
- [ ] $u_{xx}(0)$

> Die äußere Normale zeigt dort in Richtung $-x$.

### Randwerte
Warum genügt bei einem Ring die Bedingung $u(t,0^+)=u(t,2\pi^-)$ allein nicht?

- [ ] Weil der Ring zwei Enden hat
- [ ] Weil die Temperatur dann null sein muss
- [x] Auch die Ableitungen müssen übereinstimmen, sonst hätte die Lösung einen Knick (unstetigen Wärmefluss).
- [ ] Sie genügt immer.

> Periodische Randbedingungen verlangen Gleichheit von Wert und räumlicher Ableitung.

### Randwerte
Welche Randbedingung ist bei den Maxwell-Gleichungen zum Beispiel an einem perfekten Leiter sinnvoll?

- [ ] $E=0$ im ganzen Gebiet
- [x] Die Tangentialkomponente $\nu\times E$ verschwindet.
- [ ] $\operatorname{div}E=1$
- [ ] Die Normalenableitung jeder Komponente ist null.

> Es genügt, die Tangentialkomponente von $E$ oder $H$ festzulegen.

### Randwerte
Was gilt für die Gesamtwärme eines vollständig isolierten Körpers ohne Wärmequellen?

- [ ] Sie wächst.
- [x] Sie bleibt zeitlich konstant.
- [ ] Sie schwankt periodisch.
- [ ] Sie fällt auf null.

> Homogene Neumann-Bedingungen bedeuten: kein Wärmefluss über den Rand.

### Randwerte
Eine Kühlrippe sitzt mit dem Fuß an einem Motor der Temperatur $T_M$ und gibt an der Spitze Wärme an Luft ab. Welche Randbedingungen passen?

- [ ] Periodische Randbedingungen
- [ ] An beiden Enden Dirichlet null
- [x] Am Fuß Dirichlet $u=T_M$, an der Spitze Robin
- [ ] An beiden Enden Neumann null

> Verschiedene Randteile tragen verschiedene Bedingungen (gemischt).

### Randwerte
Eine Heizfolie führt einem Körper am Rand einen vorgegebenen Wärmestrom zu. Welche Randbedingung beschreibt das?

- [x] Eine inhomogene Neumann-Bedingung
- [ ] Eine Anfangsbedingung
- [ ] Eine periodische Bedingung
- [ ] Eine homogene Dirichlet-Bedingung

> Vorgegeben ist die Normalenableitung, also der Fluss.

### Separation
Welche Zeitgleichung entsteht aus $u_t=4u_{xx}$ mit $u=X(t)Y(x)$ und $Y''=\lambda Y$?

- [x] $X'=4\lambda X$
- [ ] $X'=\lambda X/4$
- [ ] $X'=\lambda X$
- [ ] $X''=4\lambda X$

> $X'Y=4XY''$ ergibt $\frac{X'}{4X}=\frac{Y''}{Y}=\lambda$.

### Separation
Welche Zeitgleichung entsteht aus $u_{tt}=c^2u_{xx}$ mit $u=X(t)Y(x)$ und $Y''=\lambda Y$?

- [ ] $X'=c^2\lambda X$
- [ ] $X''=\lambda Y$
- [x] $X''=c^2\lambda X$
- [ ] $X''=\lambda X/c^2$

> $X''Y=c^2XY''$.

### Separation
Welche Zeitgleichung entsteht aus $u_t=u_{xx}-u$ (Wärmeverlust an die Umgebung) mit $u(t,x)=X(t)Y(x)$ und $Y''=\lambda Y$?

- [ ] $X''=(\lambda-1)X$
- [x] $X'=(\lambda-1)X$
- [ ] $X'=(\lambda+1)X$
- [ ] $X'=\lambda X$

> $X'Y=XY''-XY$, also $X'/X=Y''/Y-1$.

### Separation
Warum liefert der Fall $\lambda=\omega^2>0$ bei $Y''=\lambda Y$, $Y(0)=Y(1)=0$ nur $Y=0$?

- [ ] Weil $e^{\omega x}$ periodisch ist
- [ ] Weil $\omega$ negativ sein muss
- [ ] Weil dann $Y=1$ folgt
- [x] Das Gleichungssystem für $c_1,c_2$ hat eine nichtverschwindende Determinante.

> Aus $c_1+c_2=0$ und $c_1e^\omega+c_2e^{-\omega}=0$ folgt $c_1=c_2=0$.

### Separation
Welche Eigenfunktionen hat $Y''=\lambda Y$ mit $Y(0)=Y(L)=0$ auf $[0,L]$?

- [ ] $\sin(kx)$ mit $\lambda=-k^2$
- [ ] $e^{kx/L}$
- [ ] $\cos(k\pi x/L)$
- [x] $\sin(k\pi x/L)$ mit $\lambda=-(k\pi/L)^2$

> Die Bedingung $\sin(\omega L)=0$ ergibt $\omega=k\pi/L$.

### Separation
Welche Eigenfunktionen hat $Y''=\lambda Y$ mit $Y'(0)=Y'(1)=0$?

- [ ] $e^{k\pi x}$
- [x] $\cos(k\pi x)$ für $k=0,1,2,\dots$ (einschließlich der Konstanten)
- [ ] $\sin(k\pi x)$ für $k\ge1$
- [ ] Nur die Nullfunktion

> Die Ableitung $-k\pi\sin(k\pi x)$ verschwindet an beiden Enden; für $k=0$ ist die Konstante dabei.

### Separation
Welche Eigenfunktionen hat $Y''=\lambda Y$ mit $Y(0)=0$ und $Y'(1)=0$?

- [ ] $\cos(k\pi x)$
- [x] $\sin\big((k+\tfrac12)\pi x\big)$ für $k=0,1,2,\dots$
- [ ] $\sin(k\pi x)$
- [ ] Die Konstante $1$

> Aus $Y=\sin(\omega x)$ und $\omega\cos\omega=0$ folgt $\omega=(k+\tfrac12)\pi$.

### Separation
Lösung von $u_t=u_{xx}$ auf $(0,1)$ mit Nullrandwerten und $u(0,x)=\sin(\pi x)+\tfrac12\sin(3\pi x)$?

- [ ] $e^{-\pi^2t}\big(\sin(\pi x)+\tfrac12\sin(3\pi x)\big)$
- [x] $e^{-\pi^2t}\sin(\pi x)+\tfrac12e^{-9\pi^2t}\sin(3\pi x)$
- [ ] $\sin(\pi x)+\tfrac12\sin(3\pi x)$
- [ ] $e^{-t}\sin(\pi x)+\tfrac12e^{-3t}\sin(3\pi x)$

> Jede Mode klingt mit ihrer eigenen Rate $(k\pi)^2$ ab; Superposition.

### Separation
Welche Mode bestimmt bei der Wärmeleitung mit Dirichlet-Rändern das Verhalten für große Zeiten?

- [x] Die niedrigste Mode (kleinste Abklingrate)
- [ ] Die höchste Mode
- [ ] Keine, die Lösung wächst
- [ ] Alle gleich stark

> Höhere Moden sind wegen $e^{-(k\pi)^2t}$ schnell verschwunden.

### Separation
Welche Zeitfunktionen gehören bei $u_{tt}=u_{xx}$ mit Nullrändern auf $(0,1)$ zur Mode $\sin(2\pi x)$?

- [ ] $e^{-4\pi^2t}$
- [ ] Nur Konstanten
- [x] $\cos(2\pi t)$ und $\sin(2\pi t)$
- [ ] $e^{2\pi t}$ und $e^{-2\pi t}$

> $X''=-4\pi^2X$ – die Mode schwingt.

### Separation
Lösung von $u_{tt}=u_{xx}$ auf $(0,1)$ mit Nullrändern, $u(0,x)=\sin(\pi x)$, $u_t(0,x)=0$?

- [x] $\cos(\pi t)\sin(\pi x)$
- [ ] $\sin(\pi x)$
- [ ] $\sin(\pi t)\sin(\pi x)$
- [ ] $e^{-\pi^2t}\sin(\pi x)$

> $X''=-\pi^2X$, $X(0)=1$, $X'(0)=0$.

### Separation
Lösung von $u_{tt}=u_{xx}$ auf $(0,1)$ mit Nullrändern, $u(0,x)=0$, $u_t(0,x)=\sin(\pi x)$?

- [ ] $\cos(\pi t)\sin(\pi x)$
- [x] $\frac{1}{\pi}\sin(\pi t)\sin(\pi x)$
- [ ] $\sin(\pi t)\sin(\pi x)$
- [ ] $t\sin(\pi x)$

> $X(0)=0$ und $X'(0)=1$ ergeben $X=\sin(\pi t)/\pi$.

### Separation
Eine Gitarrensaite wird in der Mitte gegriffen, schwingt also nur noch auf halber Länge. Was passiert mit der Grundfrequenz?

- [ ] Sie halbiert sich.
- [x] Sie verdoppelt sich (eine Oktave höher).
- [ ] Sie vervierfacht sich.
- [ ] Sie bleibt gleich.

> Die Grundfrequenz der Mode $\sin(\pi x/L)$ ist $\pi c/L$.

### Separation
Warum verlangt der allgemeine Separationssatz für $u_t=\Delta u$ mit $u(t,x)=X(t)Y(x)$ die Bedingung $u(t_0,x_0)\neq0$?

- [ ] Damit die PDE linear wird
- [x] Damit man durch $X(t_0)Y(x_0)$ teilen darf
- [ ] Damit $\lambda=0$ gilt
- [ ] Damit die Randbedingungen entfallen

> Die Quotienten $X'/X$ und $\Delta Y/Y$ müssen definiert sein.

### Separation
Wohin führt der Ansatz $u(x,y)=X(x)Y(y)$ für $\Delta u=0$?

- [x] $X''/X=-Y''/Y=\text{const}$
- [ ] $X''=Y''$
- [ ] $X'/X=Y'/Y$
- [ ] $X=Y$

> $X''Y+XY''=0$, dann durch $XY$ teilen.

### Separation
Welche separierte Funktion ist harmonisch?

- [x] $\sin(\pi x)\sinh(\pi y)$
- [ ] $\sin(\pi x)\cosh(2\pi y)$
- [ ] $\sin(\pi x)\sin(\pi y)$
- [ ] $e^xe^y$

> $u_{xx}=-\pi^2u$ und $u_{yy}=\pi^2u$.

### Separation
Was zeigt das Beispiel mit dem Potenzreihenansatz für $\partial_tu-\partial_{xx}u=0$, $u(0,x)=0$?

- [x] Ein Ansatz kann formale Lösungen liefern, die physikalisch unsinnig sind (unendliche Energie).
- [ ] Jede PDE hat genau eine Lösung.
- [ ] Die Nulllösung ist keine Lösung.
- [ ] Potenzreihen versagen immer.

> Neben $u=0$ gibt es eine weitere, unphysikalische Lösung.

### Separation
Was ist das gemeinsame Lösungsprinzip der Fourierschen Methode?

- [ ] Die PDE wird numerisch gelöst.
- [x] Die PDE wird auf gewöhnliche Differentialgleichungen zurückgeführt.
- [ ] Man rät die Lösung.
- [ ] Man ignoriert die Randbedingungen.

> Für Zeit- und Ortsfaktor entstehen ODEs.

### Separation
Liefert der additive Ansatz $u=X(t)+Y(x)$ für $u_t=u_{xx}$ Lösungen?

- [ ] Nein, nie
- [ ] Ja, alle Lösungen
- [ ] Nur die Nulllösung
- [x] Ja, aber nur sehr spezielle, z. B. $u=t+\tfrac12x^2$

> Aus $X'=Y''=c$ folgt $u=c\,(t+\tfrac12x^2)+\text{const}$.

### Separation
Wie behandelt man $u_t=u_{xx}$ mit den inhomogenen Randwerten $u(t,0)=a$, $u(t,1)=b$?

- [ ] Das Problem ist nicht lösbar.
- [ ] Man nimmt nur Kosinusmoden.
- [ ] Man setzt einfach $a=b=0$.
- [x] Man zieht die stationäre Lösung $a+(b-a)x$ ab und löst für den Rest mit Nullrändern.

> Die Differenz erfüllt dieselbe PDE mit homogenen Randbedingungen.

### Separation
Welche stationäre Lösung hat $u_t=u_{xx}$ auf $(0,1)$ mit $u(t,0)=1$ und $u(t,1)=3$?

- [ ] $u(x)=2$
- [ ] $u(x)=1+2x^2$
- [ ] $u(x)=3x$
- [x] $u(x)=1+2x$

> Stationär heißt $u''=0$ mit den beiden Randwerten.

### Separation
Gegen welches Profil strebt die Lösung von $u_t=u_{xx}$ mit $u(t,0)=1$, $u(t,1)=3$ für $t\to\infty$?

- [ ] Gegen das Anfangsprofil
- [x] Gegen $1+2x$
- [ ] Gegen $0$
- [ ] Gegen $2$

> Der Rest mit Nullrändern klingt ab.

### Separation
Warum müssen die Separationskonstanten bei der Wärmeleitung mit Dirichlet-Rändern negativ sein – physikalisch gesehen?

- [ ] Weil Temperaturen immer negativ sind
- [ ] Das ist reiner Zufall.
- [ ] Weil die Zeit rückwärts läuft
- [x] Ohne Wärmequellen kann die Temperatur nicht von selbst anwachsen; die Moden müssen abklingen.

> Positive Werte würden exponentielles Wachstum ergeben.

### Separation
Wie hängt die Abklingrate der Grundmode der Wärmeleitung auf einem Stab der Länge $L$ mit Nullrändern von $L$ ab?

- [x] Proportional zu $1/L^2$ – ein doppelt so langer Stab kühlt viermal langsamer ab.
- [ ] Proportional zu $L$
- [ ] Unabhängig von $L$
- [ ] Proportional zu $1/L$

> Die Rate ist $(\pi/L)^2$.

### Separation
Lösung von $u_t=u_{xx}$ auf $(0,1)$ mit isolierten Enden ($u_x=0$) und $u(0,x)=1+\cos(\pi x)$?

- [x] $1+e^{-\pi^2t}\cos(\pi x)$
- [ ] $1+\cos(\pi x)$
- [ ] $e^{-\pi^2t}(1+\cos(\pi x))$
- [ ] $e^{-t}+\cos(\pi x)$

> Die konstante Mode bleibt (Eigenwert null), die Kosinusmode klingt ab.

### Separation
Gegen welchen Wert strebt die Temperatur eines isolierten Stabs mit $u(0,x)=1+\cos(\pi x)$ auf $(0,1)$?

- [ ] Gegen $2$
- [ ] Gegen $0$
- [x] Gegen $1$, den Mittelwert der Anfangstemperatur
- [ ] Gegen $\cos(\pi x)$

> Die Gesamtwärme bleibt erhalten und verteilt sich gleichmäßig.

### Separation
Welche Anfangsfunktion lässt sich bei $u_t=u_{xx}$ auf $(0,1)$ mit Nullrändern **nicht** durch einen einzigen Produktansatz erfassen?

- [x] $x(1-x)$
- [ ] $3\sin(2\pi x)$
- [ ] $\sin(\pi x)$
- [ ] $0$

> $x(1-x)$ ist kein einzelner Sinus; man braucht eine unendliche Reihe von Moden.

### Separation
Welche Zeitgleichung entsteht bei der gedämpften Wellengleichung $u_{tt}+2u_t=u_{xx}$ mit $u(t,x)=X(t)Y(x)$ und $Y''=\lambda Y$?

- [x] $X''+2X'=\lambda X$
- [ ] $X''=\lambda X$
- [ ] $X'+2X=\lambda X$
- [ ] $X''+2X=\lambda X$

> Beide Zeitableitungen landen in der Gleichung für $X$.

### Separation
Ein Stab hat anfangs überall $100\,^\circ$C, beide Enden werden auf $0\,^\circ$C gehalten. Was passiert für $t\to\infty$?

- [ ] Sie strebt gegen $50\,^\circ$C.
- [ ] Sie bleibt bei $100\,^\circ$C.
- [ ] Sie schwingt.
- [x] Die Temperatur strebt überall gegen $0\,^\circ$C.

> Alle Sinusmoden klingen ab.

### Separation
Welche Eigenfunktionen gehören bei Separation auf einem Ring (periodische Randbedingungen) zum Ortsanteil?

- [ ] Nur $\sin(kx)$
- [x] $1$, $\cos(kx)$ und $\sin(kx)$
- [ ] $e^{kx}$
- [ ] Nur $\cos(kx)$

> Beide Funktionsfamilien sind $2\pi$-periodisch.

### Anfangswerte
In welchem Sinn sind Anfangsbedingungen „Randbedingungen in der Zeit“?

- [ ] Sie gelten nur am räumlichen Rand.
- [x] Sie legen die Lösung auf dem Rand $t=0$ des Raum-Zeit-Gebiets fest.
- [ ] Sie ersetzen die PDE.
- [ ] Sie gelten für alle Zeiten.

> Das Raum-Zeit-Gebiet $(0,\infty)\times\Omega$ hat bei $t=0$ einen Rand.

### Anfangswerte
Wie viele Anfangsbedingungen braucht das ODE-System $u'=Au$ mit $u(t)\in\mathbb R^n$?

- [ ] $n^2$ Bedingungen
- [ ] Keine
- [x] Eine vektorielle Bedingung $u(0)=c\in\mathbb R^n$
- [ ] Zwei vektorielle Bedingungen

> Das System ist erster Ordnung in der Zeit.

### Randwerte
Bei der statischen Wärmeverteilung $u''=f$ auf $[0,L]$: Wie viele der Werte $u(0),u(L),u'(0),u'(L)$ legt man fest?

- [ ] Einen
- [ ] Alle vier
- [ ] Drei
- [x] Zwei

> Die allgemeine Lösung enthält zwei Integrationskonstanten.

### Randwerte
Welche Funktion löst $u''=0$ auf $(0,1)$ mit $u(0)=1$ und $u'(0)=2$?

- [ ] $u(x)=2x$
- [ ] $u(x)=1+x^2$
- [x] $u(x)=1+2x$
- [ ] $u(x)=2+x$

> Affiner Ansatz $u=a+bx$.

### Randwerte
Welche Funktion löst $u''=2$ auf $(0,1)$ mit $u(0)=u(1)=0$?

- [ ] $u(x)=x^2$
- [x] $u(x)=x^2-x$
- [ ] $u(x)=x-x^2$
- [ ] $u(x)=2x(1-x)$

> $u''=2$ und beide Randwerte verschwinden.

### Randwerte
Was bedeuten homogene Dirichlet-Randbedingungen bei der Wärmeleitung anschaulich?

- [ ] Der Rand ist isoliert.
- [x] Der Rand wird vollständig auf die Bezugstemperatur null gekühlt.
- [ ] Am Rand wird geheizt.
- [ ] Der Körper ist ein Ring.

> Die Temperatur am Rand ist fest vorgegeben, hier null.

### Separation
Welche Fälle für die Separationskonstante $\lambda$ untersucht man bei $Y''=\lambda Y$?

- [ ] Nur $\lambda>0$
- [x] $\lambda>0$, $\lambda=0$ und $\lambda<0$
- [ ] Nur ganzzahlige $\lambda$
- [ ] Nur $\lambda=1$

> Je nach Vorzeichen hat die ODE exponentielle, affine oder trigonometrische Lösungen.

### Separation
Warum betrachtet man bei den Eigenfunktionen $\sin(k\pi x)$ von $Y''=\lambda Y$, $Y(0)=Y(1)=0$ nur $k\ge1$?

- [ ] Weil negative Zahlen verboten sind
- [x] $k=0$ ergibt die Nullfunktion, negative $k$ liefern bis aufs Vorzeichen dieselben Funktionen.
- [ ] Weil $k=0$ die Randbedingung verletzt
- [ ] Das ist eine reine Konvention ohne Grund.

> $\sin(-k\pi x)=-\sin(k\pi x)$.

### Separation
Wie hängt bei $u_t=k\,u_{xx}$ mit Nullrändern auf $(0,1)$ die Abklingrate der Mode $\sin(n\pi x)$ von $k$ ab?

- [ ] Sie ist $(n\pi)^2/k$.
- [ ] Sie ist unabhängig von $k$.
- [x] Sie ist $k\,(n\pi)^2$, also proportional zu $k$.
- [ ] Sie ist $k\,n\pi$.

> Die Zeitgleichung lautet $X'=-k(n\pi)^2X$.

### Separation
Bei einer Saite mit festen Enden: Wie hängen die Frequenzen der Obertöne mit der Grundfrequenz zusammen?

- [ ] Sie sind Quadrate der Grundfrequenz.
- [x] Sie sind ganzzahlige Vielfache der Grundfrequenz.
- [ ] Sie sind alle gleich.
- [ ] Sie sind zufällig verteilt.

> Die Mode $\sin(n\pi x/L)$ schwingt mit $n\pi c/L$.

## Welt 3 – Kapitel 5, Kapitel 6 ohne Rücktransformation und Kapitel 7 – Hilberträume, Transformationen, schwache Lösungen

### Hilberträume
Was zeichnet einen Hilbertraum aus?

- [x] Ein vollständiger Skalarproduktraum.
- [ ] Ein beliebiger Vektorraum ohne Norm.
- [ ] Ein endlichdimensionaler Raum ausschließlich.
- [ ] Ein Raum ohne Grenzwerte.

> Ein Hilbertraum ist bezüglich der vom Skalarprodukt erzeugten Norm vollständig.

### Hilberträume
Was bedeutet $f\in L^2(0,1)$?

- [ ] $\int_0^1|f(x)|\,dx=0$
- [ ] $f$ ist überall differenzierbar.
- [x] $\int_0^1|f(x)|^2\,dx<\infty$
- [ ] $f$ ist überall stetig.

> Quadratintegrierbarkeit ist das definierende Merkmal.

### Hilberträume
Was heißt orthogonal für $f,g\in L^2(0,1)$?

- [ ] $\|f\|=\|g\|$
- [x] $\langle f,g\rangle=0$
- [ ] $f(x)g(x)=1$ für alle $x$
- [ ] $f=g$

> Orthogonalität wird durch das Skalarprodukt beschrieben.

### Hilberträume
Was heißt orthonormal für eine Familie $(e_n)$?

- [ ] Alle Skalarprodukte sind eins.
- [ ] Alle $e_n$ haben Norm null.
- [ ] Alle $e_n$ sind identisch.
- [x] $\langle e_n,e_m\rangle=\delta_{nm}$

> Die Funktionen sind paarweise orthogonal und jeweils normiert.

### Hilberträume
Was liefert eine Orthonormalbasis zusätzlich zur Orthonormalität?

- [ ] Sie enthält nur endlich viele Vektoren.
- [x] Jedes Raumelement lässt sich durch die Basis entwickeln.
- [ ] Sie besteht nur aus Polynomen.
- [ ] Sie hat keine Eigenfunktionen.

> Vollständigkeit erlaubt eine Entwicklung in der Basis.

### Hilberträume
Was besagt die Parseval-Gleichung für eine Orthonormalbasis $(e_n)$ eines Hilbertraums $H$?

- [ ] $\|f\|=\sum_n\langle f,e_n\rangle$
- [ ] $\langle f,e_n\rangle=1$ für alle $n$
- [ ] $\|f\|^2=0$ für alle $f$
- [x] $\|f\|^2=\sum_n|\langle f,e_n\rangle|^2$

> Die Quadratsumme der Koeffizienten entspricht der Norm zum Quadrat.

### Eigenfunktionen
Was ist eine Eigenfunktion des Laplace-Operators?

- [ ] Eine Funktion ohne zweite Ableitungen.
- [ ] Jede konstante Funktion unabhängig von Randbedingungen.
- [ ] Eine Funktion mit $\Delta\varphi=1$ immer.
- [x] Eine nichtverschwindende Funktion mit $\Delta\varphi=\lambda\varphi$.

> Die Eigenwertgleichung verlangt einen skalaren Faktor.

### Eigenfunktionen
Für ganzzahliges $n\ge1$: Welche Randbedingung erfüllt $\sin(nx)$ auf $(0,\pi)$?

- [ ] homogene Neumann-Bedingungen für alle $n$
- [ ] keine Randbedingungen
- [ ] homogene Robin-Bedingungen $Y'(0)+Y(0)=Y'(\pi)+Y(\pi)=0$
- [x] homogene Dirichlet-Bedingungen

> $\sin(0)=\sin(n\pi)=0$.

### Eigenfunktionen
Für ganzzahliges $n\ge1$: Welche Randbedingung erfüllt $\cos(nx)$ auf $(0,\pi)$?

- [x] homogene Neumann-Bedingungen
- [ ] homogene Dirichlet-Bedingungen für alle $n$
- [ ] keine Randbedingungen
- [ ] homogene Robin-Bedingungen $Y'(0)+Y(0)=Y'(\pi)+Y(\pi)=0$

> Die Ableitung $-n\sin(nx)$ verschwindet an beiden Enden.

### Eigenfunktionen
Für $n\ge 1$: Welcher Eigenwert gehört zu $\sin(nx)$ für $\partial_{xx}$?

- [ ] $0$ für alle $n$
- [ ] $n^2$
- [x] $-n^2$
- [ ] $n$

> Die zweite Ableitung ist $-n^2\sin(nx)$.

### Eigenfunktionen
Welche Eigenfunktion von $\partial_{xx}$ auf einem Intervall gehört bei homogenen Neumann-Bedingungen zum Eigenwert null?

- [ ] $x$
- [ ] $e^x$
- [ ] $\sin x$
- [x] die konstante Funktion $1$

> Die konstante Funktion hat verschwindende erste und zweite Ableitung.

### Fourier
Was ist die Grundidee der Fouriertransformation bei PDEs?

- [ ] Die Zeitvariable wird durch eine Randvariable ersetzt.
- [ ] Alle Anfangswerte verschwinden.
- [ ] Alle Lösungen werden konstant.
- [x] Räumliche Ableitungen werden zu Multiplikatoren im Frequenzraum.

> Die Fouriertransformation vereinfacht räumliche Differentialoperatoren.

### Fourier
Was gilt bei geeigneten Funktionen für $\mathcal F(\partial_x f)(\xi)$?

- [ ] $\xi^2\widehat f(\xi)$
- [x] $i\xi\widehat f(\xi)$
- [ ] $-i\xi\widehat f(\xi)$
- [ ] $\widehat f(\xi)+1$

> Die im Skript verwendete Konvention hat den Kern $e^{-ix\xi}$.

### Fourier
Was gilt für $\mathcal F(\partial_{xx}f)(\xi)$?

- [ ] $i\xi\widehat f(\xi)$
- [ ] $\xi^2\widehat f(\xi)$
- [x] $-\xi^2\widehat f(\xi)$
- [ ] $\widehat f(\xi)$

> Zweimalige Differentiation multipliziert mit $(i\xi)^2=-\xi^2$.

### Fourier
Was wird aus $u_t=u_{{xx}}$ nach Fouriertransformation in $x$?

- [x] $\partial_t\widehat u=-\xi^2\widehat u$
- [ ] $\partial_t\widehat u=\partial_{xx}\widehat u$
- [ ] $\partial_t\widehat u=\xi^2\widehat u$
- [ ] $\widehat u=0$

> Die räumliche zweite Ableitung wird zu $-\xi^2$.

### Fourier
Was besagt das Riemann–Lebesgue-Lemma für $f\in L^1$?

- [ ] $f$ ist immer differenzierbar.
- [x] $\widehat f(\xi)\to0$ für $|\xi|\to\infty$
- [ ] $\widehat f(\xi)\to\infty$
- [ ] $\widehat f$ ist immer konstant.

> Die Fouriertransformierte integrierbarer Funktionen verschwindet im Unendlichen.

### Laplace
Welche Variable wird bei der Laplacetransformation zeitabhängiger PDEs typischerweise transformiert?

- [ ] nur die Randnormale
- [ ] immer beide Variablen gleichzeitig
- [ ] nur die Raumvariable $x$
- [x] die Zeit $t$

> Im Skript wird die Laplacetransformation gewöhnlich in der Zeit angewendet.

### Laplace
Was ist $\mathcal L(f^{\prime})(s)$ für geeignete $f$?

- [x] $s\mathcal Lf(s)-f(0)$
- [ ] $\mathcal Lf(s)/s$
- [ ] $f(0)$
- [ ] $s\mathcal Lf(s)+f(0)$

> Die Anfangsbedingung tritt bei der Ableitungsregel auf.

### Laplace
Was ist $\mathcal L(f^{\prime\prime})(s)$ für geeignete $f$?

- [ ] $\mathcal Lf(s)+f(0)$
- [ ] $s^2\mathcal Lf(s)$
- [x] $s^2\mathcal Lf(s)-sf(0)-f^{\prime}(0)$
- [ ] $s\mathcal Lf(s)-f^{\prime}(0)$

> Zweimalige Anwendung der Ableitungsregel liefert beide Anfangsdaten.

### Laplace
Welche Rolle spielt die Laplacetransformation bei Anfangswertproblemen?

- [ ] Alle Randbedingungen verschwinden.
- [ ] Anfangsdaten werden immer null.
- [x] Anfangsdaten erscheinen algebraisch in den transformierten Gleichungen.
- [ ] Die PDE wird immer nichtlinear.

> Die Ableitungsregeln enthalten $f(0)$ und gegebenenfalls $f^{\prime}(0)$.

### Schwache Ableitungen
Welche der folgenden Funktionen ist eine zulässige Testfunktion für eine schwache Formulierung auf einem offenen Gebiet $\Omega$?

- [x] Eine Funktion aus $C_c^\infty(\Omega)$.
- [ ] Eine beliebige Funktion, die nicht lokal integrierbar ist.
- [ ] Eine Funktion mit unendlichem Träger zwingend.
- [ ] Eine beliebige unstetige Funktion.

> Im Skript werden $C_c^\infty$-Funktionen verwendet.

### Schwache Ableitungen
Welche Funktion ist auf $(-1,1)$ schwach differenzierbar, aber bei null nicht klassisch differenzierbar?

- [x] $|x|$
- [ ] eine Dirac-Deltafunktion als gewöhnliche Funktion
- [ ] die Sprungfunktion $1_{(0,1)}$
- [ ] $1/x$ auf ganz $(-1,1)$

> $|x|$ besitzt die schwache Ableitung $\operatorname{sgn}(x)$.

### Schwache Ableitungen
Warum verwendet man schwache Ableitungen?

- [ ] Um Randbedingungen grundsätzlich zu verbieten.
- [ ] Um Integration zu vermeiden.
- [ ] Um jede PDE in eine algebraische Gleichung umzuwandeln.
- [x] Um auch nicht klassisch differenzierbare Lösungen behandeln zu können.

> Die schwache Ableitung wird über Integration gegen Testfunktionen definiert.

### FEM
Was ist die Grundidee der Finite-Elemente-Methode?

- [ ] Man verzichtet auf Randbedingungen.
- [ ] Man verwendet nur exakte Eigenfunktionen.
- [ ] Man löst jede PDE punktweise ohne Näherung.
- [x] Die gesuchte Funktion wird in einem endlichdimensionalen Ansatzraum approximiert.

> Endlich viele Basisfunktionen führen auf ein algebraisches System.

### FEM
Welche schwache Form gehört zu $-u^{\prime\prime}=f$ auf $(0,1)$ mit homogenen Dirichlet-Bedingungen, getestet gegen $v\in C_c^\infty(0,1)$?

- [ ] $\int_0^1uv\,dx=0$
- [x] $\int_0^1u^{\prime}v^{\prime}\,dx=\int_0^1fv\,dx$
- [ ] $\int_0^1u^{\prime\prime}v^{\prime}\,dx=\int_0^1fv\,dx$
- [ ] $\int_0^1u^{\prime}v\,dx=\int_0^1fv\,dx$

> Partielle Integration und verschwindende Randwerte ergeben die schwache Form.

### Hilberträume
Für $f(x)=2$ auf $(0,1)$: Was ist $\|f\|_{L^2}$?

- [ ] $4$
- [ ] $\sqrt2$
- [x] $2$
- [ ] $1$

> $\|f\|^2=\int_0^1 4\,dx=4$, also $\|f\|=2$.

### Hilberträume
Für $f(x)=2x$ auf $(0,1)$: Was ist $\|f\|_{L^2}^2$?

- [ ] $4/2$
- [x] $4/3$
- [ ] $4$
- [ ] $5/3$

> $\int_0^1 4x^2\,dx=4/3$.

### Hilberträume
Für $f(x)=2x$ und $g(x)=1$ auf $(0,1)$: Was ist $\langle f,g\rangle$?

- [ ] $2$
- [ ] $2/3$
- [x] $1$
- [ ] $4$

> $\int_0^1 2x\,dx=1$.

### Eigenfunktionen
Für $\varphi(x)=\sin(2x)$: Welcher Eigenwert gehört auf ganz $\mathbb R$ zu $\varphi^{\prime\prime}=\lambda\varphi$?

- [x] $-4$
- [ ] $12$
- [ ] $4$
- [ ] $-5$

> Zweimaliges Ableiten ergibt $-2^2\varphi=-4\varphi$.

### Eigenfunktionen
Für $\varphi(x)=\cos(2x)$: Welcher Eigenwert gehört auf ganz $\mathbb R$ zu $\varphi^{\prime\prime}=\lambda\varphi$?

- [ ] $-5$
- [x] $-4$
- [ ] $4$
- [ ] $12$

> Auch hier gilt $\varphi''=-4\varphi$.

### Fourier
Was ist $\mathcal F(\partial_x^3f)(\xi)$ für geeignetes $f$?

- [ ] $(-i\xi)^{3}\widehat f(\xi)$
- [ ] $(i\xi)^{2}\widehat f(\xi)$
- [ ] $\xi^{3}\widehat f(\xi)$
- [x] $(i\xi)^{3}\widehat f(\xi)$

> Jede Ortsableitung liefert einen weiteren Faktor $i\xi$.

### Fourier
Für $u_t=2u_{xx}$: Welche Gleichung erfüllt $\widehat u(t,\xi)$? 

- [ ] $\partial_t\widehat u=-2\xi\widehat u$
- [ ] $\partial_t\widehat u=2\xi^2\widehat u$
- [ ] $\partial_t\widehat u=2\widehat u$
- [x] $\partial_t\widehat u=-2\xi^2\widehat u$

> Fouriertransformation in $x$ ersetzt $\partial_{xx}$ durch $-\xi^2$.

### Fourier
Für $u_t=2u_x$: Welche Gleichung erfüllt $\widehat u(t,\xi)$? 

- [ ] $\partial_t\widehat u=-2i\xi\widehat u$
- [ ] $\partial_t\widehat u=2\xi^2\widehat u$
- [x] $\partial_t\widehat u=2i\xi\widehat u$
- [ ] $\partial_t\widehat u=2\widehat u$

> Die Fouriertransformierte der ersten Ortsableitung ist $i\xi\widehat u$.

### Laplace
Für $f(t)=e^{-2t}$ mit $t\ge0$: Was ist $\mathcal Lf(s)$ für $s>0$?

- [ ] $2/s$
- [ ] $1/(s+3)$
- [x] $1/(s+2)$
- [ ] $1/(s-2)$

> $\int_0^\infty e^{-(s+2)t}\,dt=1/(s+2)$.

### Laplace
Für $f(t)=2$ mit $t\ge0$: Was ist $\mathcal Lf(s)$ für $s>0$?

- [ ] $1/(s+2)$
- [ ] $2/s^2$
- [ ] $s/2$
- [x] $2/s$

> $\int_0^\infty 2e^{-st}\,dt=2/s$.

### Laplace
Für $f(t)=2t$ mit $t\ge0$: Was ist $\mathcal Lf(s)$ für $s>0$?

- [ ] $2/s$
- [x] $2/s^2$
- [ ] $2/(s+1)$
- [ ] $s/2$

> $\mathcal L(t)=1/s^2$, also $\mathcal L(2t)=2/s^2$.

### Laplace
Für $f(0)=2$: Was ist $\mathcal L(f^{\prime})(s)$?

- [x] $s\mathcal Lf(s)-2$
- [ ] $\mathcal Lf(s)-2$
- [ ] $s\mathcal Lf(s)+2$
- [ ] $s^2\mathcal Lf(s)-2$

> Die Anfangsbedingung wird bei der Ableitungsregel subtrahiert.

### Schwache Ableitungen
Für $f(x)=2|x|$ auf $(-1,1)$: Welche schwache Ableitung gilt fast überall? 

- [x] $2\operatorname{sgn}(x)$
- [ ] $2|x|$
- [ ] $4x$
- [ ] $2x$

> Außerhalb von null ist die klassische Ableitung $2\operatorname{sgn}(x)$; das ist auch die schwache Ableitung.

### FEM
Für die Hutfunktion mit $\varphi(0)=0$, $\varphi(1/2)=2$, $\varphi(1)=0$, linear auf beiden Teilintervallen: Was ist $\varphi^{\prime}(x)$ für $0<x<1/2$?

- [ ] $2$
- [x] $4$
- [ ] $1$
- [ ] $-4$

> Die Steigung ist $(2-0)/(1/2-0)=4$.

### FEM
Für die gleiche Hutfunktion mit Höhe $2$ bei $x=1/2$: Was ist $\varphi^{\prime}(x)$ für $1/2<x<1$?

- [ ] $4$
- [ ] $-2$
- [ ] $1$
- [x] $-4$

> Die Steigung ist $(0-2)/(1-1/2)=-4$.

### Hilberträume
$A$ sei symmetrisch mit Orthonormalbasis $v_1,\dots,v_n$ aus Eigenvektoren zu $\lambda_j\neq0$. Wie lautet die Lösung von $Ax=b$?

- [ ] $x=\sum_j\lambda_j\langle v_j,b\rangle v_j$
- [x] $x=\sum_j\frac{1}{\lambda_j}\langle v_j,b\rangle v_j$
- [ ] $x=\sum_j\langle v_j,b\rangle$
- [ ] $x=b/\sum_j\lambda_j$

> Jede Koordinate entkoppelt: $\lambda_j\langle v_j,x\rangle=\langle v_j,b\rangle$. Genau diese Idee überträgt man auf PDEs.

### Hilberträume
Löse $Ax=b$ für $A=\operatorname{diag}(2,4)$ und $b=(2,8)^T$ mit der Eigenvektor-Formel.

- [ ] $x=(2,8)^T$
- [ ] $x=(4,32)^T$
- [x] $x=(1,2)^T$
- [ ] $x=(1,4)^T$

> Eigenvektoren $e_1,e_2$: $x_1=2/2$, $x_2=8/4$.

### Hilberträume
Was ist $\langle\sin,\cos\rangle$ in $L^2(0,\pi)$?

- [ ] $\pi/2$
- [ ] $1$
- [ ] $\pi$
- [x] $0$

> $\int_0^\pi\sin x\cos x\,dx=\tfrac12\sin^2x\big|_0^\pi=0$ – die Funktionen sind orthogonal.

### Hilberträume
Welche $L^2$-Norm hat $\sin x$ auf $(0,\pi)$?

- [ ] $1$
- [x] $\sqrt{\pi/2}$
- [ ] $\pi/2$
- [ ] $\sqrt\pi$

> $\int_0^\pi\sin^2x\,dx=\pi/2$.

### Hilberträume
Wie normiert man $\sin(kx)$ auf $(0,\pi)$?

- [x] $\sqrt{2/\pi}\,\sin(kx)$
- [ ] $\frac{1}{k}\sin(kx)$
- [ ] $\frac{1}{\pi}\sin(kx)$
- [ ] $2\sin(kx)$

> Man teilt durch die Norm $\sqrt{\pi/2}$.

### Hilberträume
Liegt $f(x)=1/\sqrt x$ in $L^2(0,1)$?

- [x] Nein, denn $\int_0^1\frac1x\,dx$ divergiert.
- [ ] Ja, denn $f$ ist stetig auf $(0,1)$.
- [ ] Ja, denn $f$ ist integrierbar.
- [ ] Nein, denn $f$ ist negativ.

> $f$ ist zwar integrierbar, aber nicht quadratintegrierbar.

### Hilberträume
Liegt $f(x)=x^{-1/4}$ in $L^2(0,1)$?

- [ ] Nein, $f$ ist bei $0$ unbeschränkt.
- [ ] Nur auf $(1/2,1)$
- [x] Ja, denn $\int_0^1x^{-1/2}\,dx=2<\infty$.
- [ ] Nein, $f$ ist nicht stetig fortsetzbar.

> Unbeschränktheit allein schließt $L^2$ nicht aus.

### Hilberträume
Warum steht im komplexen Skalarprodukt $\langle f,g\rangle=\int\overline f\,g$ eine komplexe Konjugation?

- [ ] Damit reelle Funktionen ausgeschlossen werden
- [ ] Aus rein historischen Gründen
- [x] Damit $\langle f,f\rangle=\int|f|^2$ reell und nichtnegativ ist
- [ ] Damit das Skalarprodukt immer null ist

> Ohne Konjugation wäre etwa $\int(i)^2=-1<0$.

### Hilberträume
Welche Koeffizienten hat $f=3\sin x+2\sin(3x)$ bezüglich der Funktionen $\sin(kx)$?

- [ ] Unendlich viele von null verschiedene Koeffizienten
- [ ] Alle Koeffizienten sind $5$.
- [x] $3$ bei $k=1$, $2$ bei $k=3$, sonst $0$
- [ ] $3$ bei $k=3$, $2$ bei $k=1$

> Die Darstellung ist bereits eine Entwicklung nach den Eigenfunktionen.

### Hilberträume
Was ist $\|f\|^2$ in $L^2(0,\pi)$ für $f=3\sin x+2\sin(3x)$?

- [x] $\frac{13\pi}{2}$
- [ ] $13$
- [ ] $5\pi/2$
- [ ] $\frac{25\pi}{2}$

> Orthogonalität: $(9+4)\cdot\frac\pi2$ – die Mischterme verschwinden.

### Eigenfunktionen
Welche Eigenwerte hat $\partial_{xx}$ auf $(0,\pi)$ mit homogenen Neumann-Bedingungen?

- [x] $-k^2$ für $k=0,1,2,\dots$
- [ ] $-k^2$ nur für $k\ge1$
- [ ] $k^2$
- [ ] $-k$

> Zu $k=0$ gehört die Konstante; der Eigenwert $0$ ist dabei.

### Eigenfunktionen
Welche Eigenfunktionen und Eigenwerte hat $\partial_{xx}$ auf $(0,L)$ mit homogenen Dirichlet-Bedingungen?

- [ ] $\cos(k\pi x/L)$ zu $-(k\pi/L)^2$
- [ ] $\sin(kx)$ zu $-k^2$
- [x] $\sin(k\pi x/L)$ zu $-(k\pi/L)^2$, $k\ge1$
- [ ] $e^{k\pi x/L}$ zu $(k\pi/L)^2$

> Die Nullstellen des Sinus müssen bei $0$ und $L$ liegen.

### Eigenfunktionen
Wie viele linear unabhängige Eigenfunktionen gehören beim Ring (periodisch auf $(0,2\pi)$) zum Eigenwert $-4$?

- [ ] Eine
- [x] Zwei: $\cos(2x)$ und $\sin(2x)$
- [ ] Keine
- [ ] Unendlich viele

> Für $k\ge1$ ist jeder Eigenwert $-k^2$ doppelt.

### Eigenfunktionen
Mit welchem Faktor normiert man $\cos(kx)$ für $k\ge1$ auf $(0,2\pi)$?

- [ ] $1/\sqrt{2\pi}$
- [ ] $1/\pi$
- [ ] $\sqrt{2/\pi}$
- [x] $1/\sqrt\pi$

> $\int_0^{2\pi}\cos^2(kx)\,dx=\pi$; für die Konstante wäre es $1/\sqrt{2\pi}$.

### Eigenfunktionen
Was garantiert Satz 5.7 für den Dirichlet-Laplace auf einem beschränkten Gebiet?

- [ ] Es gibt nur endlich viele Eigenfunktionen.
- [x] Es gibt eine Orthonormalbasis von $L^2(\Omega)$ aus Eigenfunktionen mit reellen Eigenwerten.
- [ ] Alle Eigenwerte sind komplex.
- [ ] Es gibt keine Eigenfunktionen.

> Das ist das unendlichdimensionale Gegenstück zur Diagonalisierung symmetrischer Matrizen.

### Eigenfunktionen
Welche Eigenfunktionen hat der Dirichlet-Laplace auf dem Quadrat $(0,\pi)^2$?

- [ ] $\cos(kx)\cos(ly)$ zu $k^2l^2$
- [ ] $\sin(kxy)$
- [ ] $\sin(kx)+\sin(ly)$ zu $-(k+l)$
- [x] $\sin(kx)\sin(ly)$ zum Eigenwert $-(k^2+l^2)$

> Produkte eindimensionaler Eigenfunktionen.

### Eigenfunktionen
Wie viele linear unabhängige Eigenfunktionen hat der Dirichlet-Laplace auf $(0,\pi)^2$ zum Eigenwert $-5$?

- [ ] Fünf
- [ ] Eine
- [x] Zwei: $(k,l)=(1,2)$ und $(2,1)$
- [ ] Keine

> $k^2+l^2=5$ hat zwei Lösungen mit $k,l\ge1$.

### Eigenfunktionen
Welches Vorzeichen haben die Eigenwerte von $\partial_{xx}$ mit homogenen Dirichlet-Bedingungen?

- [ ] Sie sind null.
- [ ] Sie haben wechselnde Vorzeichen.
- [x] Sie sind negativ.
- [ ] Sie sind positiv.

> $\lambda=-(k\pi/L)^2<0$.

### Eigenfunktionen
Bei $u_t=u_{xx}$ auf $(0,\pi)$ mit Dirichlet-Rand entwickelt man nach $\varphi_k(x)=\sqrt{2/\pi}\,\sin(kx)$. Welche ODE erfüllt der Koeffizient $u_k(t)=\langle\varphi_k,u(t,\cdot)\rangle$?

- [ ] $u_k''=-k^2u_k$
- [x] $u_k'=-k^2u_k$ mit $u_k(0)=\langle\varphi_k,f\rangle$
- [ ] $u_k=\text{const}$
- [ ] $u_k'=k^2u_k$

> Koeffizientenvergleich nach dem Einsetzen der Entwicklung.

### Eigenfunktionen
Lösung von $u_t=u_{xx}$ auf $(0,\pi)$ mit Nullrand und $u(0,x)=\sin x+\sin(2x)$?

- [ ] $e^{-t}\sin x+e^{-2t}\sin(2x)$
- [x] $e^{-t}\sin x+e^{-4t}\sin(2x)$
- [ ] $\sin x+\sin 2x$
- [ ] $e^{-t}(\sin x+\sin 2x)$

> Jeder Koeffizient klingt mit $e^{-k^2t}$ ab.

### Eigenfunktionen
Welche ODE erfüllen die Koeffizienten $s_k$ einer Wellengleichung $w_{tt}=\Delta w+g$ nach Entwicklung in Eigenfunktionen $\varphi_k$ des Laplace-Operators zu den Eigenwerten $\lambda_k$?

- [ ] $s_k=\lambda_kg_k$
- [ ] $s_k''=g_k$
- [ ] $s_k'=\lambda_ks_k+g_k$
- [x] $s_k''=\lambda_ks_k+g_k$

> Ein entkoppeltes System unendlich vieler ODEs zweiter Ordnung.

### Eigenfunktionen
Warum konstruiert man bei einer PDE mit inhomogenen Randdaten zuerst eine Hilfsfunktion $v$ mit denselben Randwerten?

- [ ] Damit $u=v$ gilt
- [ ] Damit die Anfangsdaten verschwinden
- [ ] Damit die PDE nichtlinear wird
- [x] Dann hat $w=u-v$ homogene Randdaten, und die Eigenfunktionsentwicklung ist anwendbar.

> Der Preis ist eine zusätzliche rechte Seite in der PDE für $w$.

### Eigenfunktionen
Welche Funktion hat auf $(0,1)^2$ bei $x=0$ die Randwerte $f(t,y)$ und bei $x=1$ den Wert $0$?

- [x] $v(t,x,y)=(1-x)\,f(t,y)$
- [ ] $v=(1-y)\,f(t,x)$
- [ ] $v=x\,f(t,y)$
- [ ] $v=f(t,x)$

> Lineare Interpolation in $x$ zwischen den beiden Randwerten.

### Fourier
Welcher Vorfaktor steht in der im Skript verwendeten Fouriertransformation im $\mathbb R^n$?

- [x] $(2\pi)^{-n/2}$
- [ ] $2\pi$
- [ ] $1$
- [ ] $(2\pi)^{-n}$

> $\mathcal F\varphi(\xi)=(2\pi)^{-n/2}\int e^{-ix\cdot\xi}\varphi(x)\,dx$.

### Fourier
Welche Funktion stimmt mit ihrer eigenen Fouriertransformierten überein?

- [x] $e^{-x^2/2}$
- [ ] $1$
- [ ] $\sin x$
- [ ] $e^{-|x|}$

> Die Gaußsche Glockenkurve ist ein Fixpunkt der Fouriertransformation.

### Fourier
Eine Gaußkurve $e^{-ax^2}$ wird schmaler ($a$ größer). Was passiert mit ihrer Fouriertransformierten $\frac{1}{\sqrt{2a}}e^{-\xi^2/(4a)}$?

- [x] Sie wird breiter.
- [ ] Sie wird auch schmaler.
- [ ] Sie verschwindet.
- [ ] Sie bleibt unverändert.

> Schmale Signale enthalten viele Frequenzen (Unschärfeprinzip).

### Fourier
Was ist die Fouriertransformierte von $e^{-2|x|}$?

- [ ] $\dfrac{2}{\sqrt{2\pi}}e^{-\xi^2/8}$
- [ ] $\sqrt{2/\pi}\,\dfrac{1}{4+\xi^2}$
- [x] $\sqrt{2/\pi}\,\dfrac{2}{4+\xi^2}$
- [ ] $e^{-2|\xi|}$

> Formel für $e^{-a|x|}$ mit $a=2$.

### Fourier
Was ist die Fouriertransformierte der Deltadistribution $\delta_0$?

- [ ] $\delta_0$
- [ ] $0$
- [x] Die Konstante $1/\sqrt{2\pi}$
- [ ] $e^{-\xi^2}$

> Ein Impuls enthält alle Frequenzen gleich stark.

### Fourier
Wie unterscheidet sich $\mathcal F(\delta_a)$ von $\mathcal F(\delta_0)$?

- [ ] Gar nicht
- [ ] $\mathcal F(\delta_a)$ ist null.
- [x] Nur durch den Phasenfaktor $e^{-ia\xi}$; der Betrag bleibt gleich.
- [ ] Der Betrag wird mit $a$ multipliziert.

> $\mathcal F(\delta_a)(\xi)=\frac{1}{\sqrt{2\pi}}e^{-ia\xi}$.

### Fourier
Was gilt für $\mathcal F\big(f(\cdot-a)\big)(\xi)$?

- [ ] $\widehat f(\xi-a)$
- [ ] $a\,\widehat f(\xi)$
- [x] $e^{-ia\xi}\,\widehat f(\xi)$
- [ ] $e^{ia\xi}\widehat f(\xi)$

> Substitution $y=x-a$ im Integral.

### Fourier
Was ergibt die Fouriertransformation von $\psi(x)=x\,\varphi(x)$?

- [ ] $i\xi\,\widehat\varphi(\xi)$
- [ ] $-\xi^2\widehat\varphi(\xi)$
- [x] $i\,\partial_\xi\widehat\varphi(\xi)$
- [ ] $\widehat\varphi(\xi)/\xi$

> Multiplikation mit $x$ wird zur Ableitung im Frequenzraum und umgekehrt.

### Fourier
Was ist $\mathcal F(\Delta u)(\xi)$ im $\mathbb R^3$?

- [ ] $(\xi_1+\xi_2+\xi_3)\widehat u$
- [x] $-(\xi_1^2+\xi_2^2+\xi_3^2)\,\widehat u(\xi)$
- [ ] $\Delta\widehat u$
- [ ] $i|\xi|\widehat u$

> Jede zweite Ableitung $\partial_j^2$ liefert $-\xi_j^2$.

### Fourier
Was wird aus $u-\Delta u=f$ nach Fouriertransformation?

- [ ] $\widehat u=\widehat f\,(1+|\xi|^2)$
- [ ] $\widehat u=\widehat f-|\xi|^2$
- [ ] $\widehat u=\widehat f$
- [x] $\widehat u(\xi)=\dfrac{\widehat f(\xi)}{1+|\xi|^2}$

> Aus einer PDE wird eine algebraische Gleichung.

### Fourier
Warum ist die Lösung von $u-u''=f$ glatter als $f$?

- [ ] Weil die Lösung konstant ist
- [x] Der Faktor $1/(1+\xi^2)$ dämpft hohe Frequenzen.
- [ ] Sie ist nicht glatter.
- [ ] Weil $f$ immer glatt ist

> Hohe Frequenzen entsprechen schnellen Änderungen.

### Fourier
Was sagt das Riemann-Lebesgue-Lemma über $\widehat f$ für $f\in L^1(\mathbb R)$ außerdem aus?

- [ ] $\widehat f$ ist konstant.
- [ ] $\widehat f$ ist unstetig.
- [ ] $\widehat f$ ist periodisch.
- [x] $\widehat f$ ist stetig.

> Stetig und im Unendlichen verschwindend.

### Fourier
Kann die Fouriertransformierte einer Funktion $f\in L^1(\mathbb R)$ konstant gleich $1$ sein?

- [ ] Ja, für $f=1$
- [ ] Ja, immer
- [ ] Ja, für jede Gaußfunktion
- [x] Nein, nach Riemann-Lebesgue muss sie für $|\xi|\to\infty$ gegen $0$ gehen.

> Die Deltadistribution, deren Transformierte konstant ist, ist keine $L^1$-Funktion.

### Fourier
Was besagt der Faltungssatz der Fouriertransformation (in der Normierung des Skripts)?

- [x] $\mathcal F(f*g)=(2\pi)^{n/2}\,\mathcal Ff\cdot\mathcal Fg$
- [ ] $\mathcal F(fg)=\mathcal Ff*\mathcal Fg$ ohne Faktor
- [ ] $\mathcal F(f*g)=\mathcal Ff+\mathcal Fg$
- [ ] $\mathcal F(f*g)=0$

> Faltung wird zu Multiplikation.

### Fourier
Welche Gleichung erfüllt $v=\widehat u$ für die Transportgleichung $u_t+c\,u_x=0$?

- [x] $\partial_tv=-ic\xi\,v$
- [ ] $\partial_tv=-c\xi^2v$
- [ ] $\partial_t^2v=c^2v$
- [ ] $\partial_tv=ic\xi\,v$

> $\mathcal F(u_x)=i\xi\widehat u$.

### Fourier
Was wird aus der Wellengleichung $u_{tt}=c^2u_{xx}$ nach Fouriertransformation in $x$?

- [ ] $v''=c^2\xi^2v$
- [x] Für jedes $\xi$ eine Schwingungsgleichung $v''+c^2\xi^2v=0$
- [ ] $v'=-c^2\xi^2v$
- [ ] $v=0$

> Jede Frequenz $\xi$ schwingt mit der Kreisfrequenz $c|\xi|$.

### Fourier
Für die Wärmeleitung auf $\mathbb R$ gilt $v(t,\xi)=e^{-k\xi^2t}\widehat f(\xi)$. Welche Anteile verschwinden am schnellsten?

- [ ] Keine
- [ ] Die niedrigen Frequenzen
- [x] Die hohen Frequenzen (große $|\xi|$)
- [ ] Alle gleich schnell

> Deshalb glättet die Wärmeleitung.

### Fourier
Beim Dirichlet-Problem $\Delta u=0$ in der Halbebene $y>0$ mit Abklingbedingung liefert die Fouriertransformation in $x$ die Lösung $c_1(\xi)e^{-|\xi|y}+c_2(\xi)e^{|\xi|y}$. Warum fällt der Term $c_2(\xi)e^{|\xi|y}$ weg?

- [ ] Weil $\xi$ negativ ist
- [x] Wegen der Abklingbedingung $|u|\to0$ für $y\to\infty$
- [ ] Wegen der Randbedingung bei $y=0$
- [ ] Weil die Gleichung parabolisch ist

> Ein exponentiell wachsender Term ist ausgeschlossen.

### Fourier
Warum transformiert man beim Dirichlet-Problem $\Delta u=0$ in der Halbebene $y>0$, $x\in\mathbb R$ bezüglich $x$ und nicht bezüglich $y$?

- [x] Weil $x$ über ganz $\mathbb R$ läuft, $y$ aber nur über eine Halbachse
- [ ] Weil $y$ keine Variable ist
- [ ] Weil die Gleichung in $x$ linear ist
- [ ] Das ist beliebig.

> Die Fouriertransformation ist auf ganz $\mathbb R$ definiert.

### Fourier
Welche Gleichung erfüllt $\widehat u$ für die Balkengleichung $u_t=-u_{xxxx}$?

- [x] $\partial_t\widehat u=-\xi^4\widehat u$
- [ ] $\partial_t\widehat u=-\xi^2\widehat u$
- [ ] $\partial_t\widehat u=\xi^4\widehat u$
- [ ] $\partial_t\widehat u=-i\xi^4\widehat u$

> $(i\xi)^4=\xi^4$, mit dem Minuszeichen der Gleichung.

### Laplace
Was ist $\mathcal L\big(\cos(2t)\big)(s)$?

- [ ] $\dfrac{s}{s^2+2}$
- [ ] $\dfrac{1}{s-2}$
- [x] $\dfrac{s}{s^2+4}$
- [ ] $\dfrac{2}{s^2+4}$

> $\mathcal L(\cos(a\,\cdot))=s/(s^2+a^2)$.

### Laplace
Was ist $\mathcal L(\sin t)(s)$?

- [x] $\dfrac{1}{s^2+1}$
- [ ] $\dfrac{s}{s^2+1}$
- [ ] $\dfrac{1}{s^2-1}$
- [ ] $\dfrac{1}{s+1}$

> Zum Beispiel aus $\sin t=\frac{1}{2i}(e^{it}-e^{-it})$.

### Laplace
Was ist $\mathcal L(t^2)(s)$?

- [ ] $\dfrac{2}{s^2}$
- [ ] $\dfrac{1}{s^3}$
- [ ] $\dfrac{1}{s^2}$
- [x] $\dfrac{2}{s^3}$

> $\mathcal L(t^n)=n!/s^{n+1}$.

### Laplace
Was ist $\mathcal L\big(e^{-t}\cos t\big)(s)$?

- [ ] $\dfrac{s-1}{(s-1)^2+1}$
- [x] $\dfrac{s+1}{(s+1)^2+1}$
- [ ] $\dfrac{s}{s^2+1}$
- [ ] $\dfrac{1}{(s+1)^2+1}$

> Dämpfungssatz: $\mathcal L(e^{-at}f)(s)=\mathcal Lf(s+a)$.

### Laplace
Was bewirkt eine Zeitverschiebung $f(t-h)$ (mit $f=0$ für negative Argumente) im Bildbereich?

- [ ] Multiplikation mit $h$
- [ ] Gar nichts
- [ ] Verschiebung $s\mapsto s-h$
- [x] Multiplikation mit $e^{-hs}$

> Verschiebungssatz.

### Laplace
Was ist $\mathcal L\left(\int_0^t f(r)\,dr\right)(s)$?

- [ ] $s\,\mathcal Lf(s)$
- [ ] $\mathcal Lf(s)-f(0)$
- [ ] $\dfrac{1}{s^2}\mathcal Lf(s)$
- [x] $\dfrac1s\,\mathcal Lf(s)$

> Integration im Zeitbereich entspricht Division durch $s$.

### Laplace
Was ist $\mathcal L\big(t\,e^{-t}\big)(s)$?

- [ ] $\dfrac{t}{s+1}$
- [ ] $\dfrac{1}{s^2+1}$
- [x] $\dfrac{1}{(s+1)^2}$
- [ ] $\dfrac{1}{s+1}$

> $\mathcal L(tf)=-(\mathcal Lf)'$ mit $\mathcal L(e^{-t})=1/(s+1)$.

### Laplace
Wie ist die Faltung beim Faltungssatz der Laplacetransformation definiert?

- [ ] $\int_0^\infty f(r)g(r)\,dr$
- [x] $(f*g)(t)=\int_0^t f(t-r)g(r)\,dr$
- [ ] $f(t)g(t)$
- [ ] $\int_{-\infty}^{\infty}f(t-r)g(r)\,dr$

> Für Funktionen auf $(0,\infty)$ läuft das Integral nur bis $t$.

### Laplace
Was wird aus $u'=-2u$, $u(0)=3$ mit $U=\mathcal Lu$?

- [ ] $U(s)=3s+2$
- [ ] $U(s)=\dfrac{1}{s+2}$
- [ ] $U(s)=\dfrac{3}{s-2}$
- [x] $U(s)=\dfrac{3}{s+2}$

> $sU-3=-2U$.

### Laplace
Was wird aus $u''+u=0$, $u(0)=0$, $u'(0)=1$ mit $U=\mathcal Lu$?

- [ ] $U(s)=\dfrac{1}{s^2-1}$
- [ ] $U(s)=\dfrac{s}{s^2+1}$
- [ ] $U(s)=s^2+1$
- [x] $U(s)=\dfrac{1}{s^2+1}$

> $s^2U-s\cdot0-1+U=0$.

### Laplace
Was ist $\mathcal L(u'')$ für $u(0)=2$ und $u'(0)=-1$?

- [ ] $s^2U(s)-2s-1$
- [ ] $s^2U(s)-2$
- [ ] $s^2U(s)+2s-1$
- [x] $s^2U(s)-2s+1$

> $s^2U-s\,u(0)-u'(0)$.

### Laplace
Was ist $\mathcal L(e^{at})(s)$ für $s>a$?

- [x] $\dfrac{1}{s-a}$
- [ ] $e^{as}$
- [ ] $\dfrac{1}{s+a}$
- [ ] $\dfrac{a}{s}$

> $\int_0^\infty e^{-(s-a)t}\,dt$.

### Laplace
Bei der Wärmeleitung auf der Halbachse mit $u(0,x)=0$ entsteht $s\,v-k\,v_{xx}=0$. Warum taucht kein Anfangswert auf?

- [ ] Weil $k=0$ ist
- [ ] Weil die Laplacetransformation keine Anfangswerte kennt
- [x] Wegen $u(0,x)=0$ fällt der Term $-u(0,x)$ der Ableitungsregel weg.
- [ ] Weil $s=0$ ist

> $\mathcal L(u_t)=s\,v-u(0,x)$.

### Laplace
Warum verwendet man bei zeitabhängigen Problemen in der Zeit die Laplace- statt der Fouriertransformation?

- [x] Die Zeit läuft nur über $(0,\infty)$, und die Anfangswerte gehen über die Ableitungsregel direkt ein.
- [ ] Das ist beliebig.
- [ ] Weil die Fouriertransformation nur für die Zeit definiert ist
- [ ] Weil die Laplacetransformation Ortsableitungen beseitigt

> Die Fouriertransformation bräuchte die Lösung auch für negative Zeiten.

### Schwache Ableitungen
Welche Gleichung definiert $g$ als schwache Ableitung von $f$ nach $x_k$?

- [ ] $\int_\Omega f=\int_\Omega g$
- [x] $-\int_\Omega f\,\partial_k\varphi\,dx=\int_\Omega g\,\varphi\,dx$ für alle Testfunktionen $\varphi$
- [ ] $\int_\Omega f\,\varphi=\int_\Omega g\,\varphi$
- [ ] $f'=g$ an jeder Stelle

> Das ist die partielle Integration ohne Randterme, als Definition gelesen.

### Schwache Ableitungen
Warum verschwinden die Testfunktionen in der Definition schwacher Ableitungen in der Nähe des Randes?

- [ ] Damit sie unstetig sind
- [ ] Damit sie konstant sind
- [x] Damit bei der partiellen Integration keine Randterme entstehen
- [ ] Damit das Integral unendlich wird

> Testfunktionen haben kompakten Träger in $\Omega$.

### Schwache Ableitungen
Warum ist die Sprungfunktion $\mathbb 1_{\mathbb R^+}$ nicht schwach differenzierbar?

- [ ] Sie ist schwach differenzierbar.
- [x] Ihre „Ableitung“ wäre die Deltadistribution, also keine Funktion.
- [ ] Weil sie überall konstant ist
- [ ] Weil sie stetig ist

> Es gibt keine Funktion $g$, die die definierende Gleichung erfüllt.

### Schwache Ableitungen
Welche schwache Ableitung hat $f(x)=|x-\tfrac12|$ auf $(0,1)$?

- [x] $\operatorname{sgn}(x-\tfrac12)$
- [ ] $|x-\tfrac12|$
- [ ] $\delta_{1/2}$
- [ ] $0$

> Links fällt die Funktion mit Steigung $-1$, rechts steigt sie mit $+1$.

### Schwache Ableitungen
Was gilt für eine auf einem offenen Gebiet stetig differenzierbare Funktion?

- [x] Sie ist schwach differenzierbar, und die schwache Ableitung ist die klassische.
- [ ] Ihre schwache Ableitung ist die Deltadistribution.
- [ ] Ihre schwache Ableitung ist null.
- [ ] Sie ist nicht schwach differenzierbar.

> Schwache Ableitungen verallgemeinern den klassischen Begriff.

### FEM
Für Hutfunktionen auf einem gleichmäßigen Gitter mit Schrittweite $h$: Was ist $\langle u_j',u_j'\rangle$?

- [ ] $1/h$
- [ ] $2h$
- [x] $2/h$
- [ ] $h$

> Die Steigung ist $\pm1/h$ auf zwei Teilintervallen der Länge $h$: $2\cdot h\cdot h^{-2}$.

### FEM
Für Hutfunktionen benachbarter Knoten auf einem gleichmäßigen Gitter mit Schrittweite $h$: Was ist $\langle u_j',u_{j+1}'\rangle$?

- [ ] $0$
- [x] $-1/h$
- [ ] $-2/h$
- [ ] $1/h$

> Sie überlappen auf einem Intervall der Länge $h$ mit Steigungen $-1/h$ und $+1/h$.

### FEM
Was ist $\langle1,u_j\rangle$ für eine Hutfunktion der Höhe $1$ auf einem gleichmäßigen Gitter mit Schrittweite $h$?

- [ ] $h/2$
- [x] $h$
- [ ] $1$
- [ ] $2h$

> Fläche eines Dreiecks mit Grundseite $2h$ und Höhe $1$.

### FEM
Warum ist die Systemmatrix der FEM mit Hutfunktionen in 1D tridiagonal?

- [x] Jede Hutfunktion überlappt nur mit ihren beiden Nachbarn.
- [ ] Weil die Lösung linear ist
- [ ] Das ist sie nicht.
- [ ] Weil alle Einträge gleich sind

> Sonst verschwinden die Skalarprodukte $\langle u_i',u_j'\rangle$.

### FEM
Warum ist die FEM-Matrix $\big(\langle u_j',u_i'\rangle\big)$ symmetrisch?

- [ ] Sie ist nicht symmetrisch.
- [ ] Weil das Gitter immer gleichmäßig ist
- [x] Weil das Skalarprodukt symmetrisch ist: $\langle u_j',u_i'\rangle=\langle u_i',u_j'\rangle$
- [ ] Weil $f$ symmetrisch ist

> Bei reellen Funktionen gilt $\langle a,b\rangle=\langle b,a\rangle$.

### FEM
Wie erhält man mit der FEM eine genauere Näherung?

- [ ] Indem man die Randbedingungen streicht
- [ ] Indem man die rechte Seite weglässt
- [x] Indem man mehr Stützstellen (ein feineres Gitter) verwendet
- [ ] Indem man nur eine Basisfunktion nimmt

> Mit wachsendem $n$ konvergiert die Näherung gegen die Lösung.

### FEM
Warum erfüllt der FEM-Ansatz $\sum_j\alpha_ju_j$ für $-u''=f$ auf $(a,b)$ die Randbedingung $u(a)=u(b)=0$ automatisch?

- [x] Weil alle Hutfunktionen $u_j$ an $a$ und $b$ verschwinden
- [ ] Weil die $\alpha_j$ null sind
- [ ] Weil $f=0$ ist
- [ ] Das tut er nicht.

> Die Basisfunktionen gehören nur zu inneren Knoten.

### FEM
Wie viele Gleichungen und Unbekannte entstehen bei der FEM in 1D mit Hutfunktionen und $n$ inneren Knoten?

- [x] Je $n$
- [ ] $n$ Unbekannte und $1$ Gleichung
- [ ] $2n$ Unbekannte
- [ ] $n^2$ Gleichungen

> Man testet mit jeder der $n$ Basisfunktionen.

### FEM
Was braucht man, um die FEM auf ein zweidimensionales Gebiet anzuwenden?

- [x] Eine Zerlegung des Gebiets, etwa eine Triangulierung, und passende Basisfunktionen
- [ ] Nur eine Fouriertransformation
- [ ] Nur Randbedingungen
- [ ] Gar nichts, die Formeln sind dieselben

> Die Basisfunktionen werden über die Triangulierung festgelegt.

