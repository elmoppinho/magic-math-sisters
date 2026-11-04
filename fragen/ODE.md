# ODE-Fragenkatalog – Magic Math Sisters

296 Fragen auf Grundlage des Skripts „Gewöhnliche Differentialgleichungen für Naturwissenschaftler“ (Kapitel 1–4).
Jede Frage hat genau eine als richtig markierte Antwort und eine kurze Erläuterung.

Welt 1: Kapitel 1–2 · Welt 2: Kapitel 3 · Welt 3: Kapitel 4. Schwerpunkt: Verständnisfragen und einfache Beispiele.

## Welt 1 – Grundbegriffe und skalare Lösungsverfahren (Kapitel 1–2)

### Grundbegriffe
Welche Aussage beschreibt eine gewöhnliche Differentialgleichung?

- [x] Die Gleichung enthält Ableitungen einer gesuchten Funktion nach einer unabhängigen Variablen.
- [ ] Sie muss linear sein.
- [ ] Sie hat immer Ordnung eins.
- [ ] Sie enthält stets partielle Ableitungen.

> Gewöhnliche Differentialgleichungen betreffen Ableitungen nach einer Variablen.

### Grundbegriffe
Ist $x'(t)=t^2+x(t)^2$ linear?

- [ ] Ja, wegen $t^2$.
- [x] Nein, wegen $x^2$.
- [ ] Ja, weil nur $x'$ vorkommt.
- [ ] Nein, weil $t$ vorkommt.

> Quadratische Abhängigkeit von der unbekannten Funktion ist nichtlinear.

### Grundbegriffe
Welche Gleichung ist autonom?

- [ ] $x'=tx$
- [x] $x'=\sin x$
- [ ] $x'=e^t$
- [ ] $x'=t+x$

> Autonom bedeutet: keine explizite Zeitabhängigkeit der rechten Seite.

### Grundbegriffe
Welche Gleichung ist linear und inhomogen?

- [ ] $x'=x\sin x$
- [ ] $x'+2x=0$
- [ ] $x'+x^2=1$
- [x] $x'+2x=\cos t$

> Die unbekannte Funktion tritt linear auf; die rechte Seite ist nicht identisch null.

### Grundbegriffe
Wie viele Anfangswerte braucht man typischerweise für eine skalare explizite Gleichung zweiter Ordnung?

- [ ] Immer genau einen.
- [ ] Vier.
- [ ] Keinen.
- [x] Zwei, etwa $x(t_0)$ und $x'(t_0)$.

> Die Umformung in ein System erster Ordnung liefert zwei Zustandskomponenten.

### Grundbegriffe
Was ist bei $x'=f(t,x)$ die unbekannte Größe?

- [ ] Die Zeitvariable $t$.
- [x] Die Funktion $x(t)$.
- [ ] Die vorgegebene Funktion $f$.
- [ ] Nur der Wert $x'(0)$.

> Gesucht wird eine Funktion, die die Gleichung erfüllt.

### Grundbegriffe
Welche Gleichung hat Ordnung drei?

- [ ] $x^{(4)}+x=0$
- [ ] $x'+x=0$
- [ ] $x''+x^3=0$
- [x] $x'''+x=0$

> Die höchste Ableitung ist die dritte.

### Grundbegriffe
Was unterscheidet explizite von impliziten Gleichungen?

- [ ] Implizite Gleichungen enthalten keine Ableitungen.
- [ ] Implizite Gleichungen haben keine Lösungen.
- [x] Bei expliziten ist nach der höchsten Ableitung aufgelöst.
- [ ] Explizite Gleichungen sind stets linear.

> Explizit bedeutet eine Darstellung $x^{(n)}=f(\ldots)$.

### Grundbegriffe
Welche Differentialgleichung beschreibt für eine Ortsfunktion $x(t)$ eine vorgegebene konstante Geschwindigkeit $v$?

- [x] $x'(t)=v$
- [ ] $x(t)=v$
- [ ] $x''(t)=v$
- [ ] $x'(t)=vt$

> Geschwindigkeit ist die erste zeitliche Ableitung des Ortes.

### Grundbegriffe
Welche Aussage über die Lösung $x(t)=3$ von $x'=0$ stimmt?

- [x] Sie ist eine konstante Lösung.
- [ ] Sie ist keine Lösung.
- [ ] Sie ist die einzige Lösung ohne Anfangswert.
- [ ] Sie ist nur für $t=0$ eine Lösung.

> Die Ableitung einer konstanten Funktion verschwindet.

### Grundbegriffe
Was ist ein Anfangswertproblem?

- [ ] Eine Gleichung ohne Ableitung.
- [ ] Eine Gleichung ohne Anfangsbedingung.
- [x] Differentialgleichung mit vorgegebenen Anfangsdaten an einem Zeitpunkt.
- [ ] Eine Gleichung nur für $t=0$.

> Bei Gleichungen höherer Ordnung können mehrere Anfangsdaten erforderlich sein.

### Grundbegriffe
Welche Größe ist bei einem Abkühlungsmodell typischerweise die Zustandsvariable?

- [ ] Die Zeit als Konstante.
- [ ] Die Einheit Kelvin.
- [x] Die Temperatur $T(t)$.
- [ ] Die fest vorgegebene Raumtemperatur.

> Die sich mit der Zeit ändernde Temperatur ist unbekannt.

### Grundbegriffe
Ist $x'=t x$ autonom?

- [ ] Nein, weil die Ableitung erster Ordnung ist.
- [ ] Ja, weil $x$ vorkommt.
- [ ] Ja, weil die Gleichung linear ist.
- [x] Nein, $t$ tritt explizit auf.

> Autonomie betrifft Zeitabhängigkeit, nicht Linearität.

### Grundbegriffe
Welche Form hat eine lineare skalare Differentialgleichung erster Ordnung?

- [ ] $x'=x^2+b(t)$
- [x] $x'=a(t)x+b(t)$
- [ ] $x'=\sin(x)+t$
- [ ] $x'=a(t)/x$

> Linearität bezieht sich auf die unbekannte Funktion.

### Grundbegriffe
Welche Substitution macht $x''= -4x$ zu einem System erster Ordnung?

- [x] $u=x$, $v=x'$, dann $u'=v$, $v'=-4u$.
- [ ] $u=t$, $v=x$, dann $v'=-4u$.
- [ ] $u=x^2$, $v=t$.
- [ ] $u=x$, $v=x''$, dann $u'=v$.

> Ort und Geschwindigkeit bilden die zwei Zustandsvariablen.

### Trennbare Gleichungen
Welche Gleichung ist direkt trennbar?

- [ ] $x'=t+x$
- [ ] $x'=x+t^2x^2$
- [x] $x'=t(1+x^2)$
- [ ] $x'=t+x^2$

> Die rechte Seite ist Produkt einer Funktion von $t$ und einer von $x$.

### Trennbare Gleichungen
Was muss man beim Teilen durch $x$ in $x'=x^2$ beachten?

- [ ] Man darf nie durch eine Variable teilen.
- [ ] Man erhält immer alle Lösungen.
- [ ] Die Ordnung steigt.
- [x] Die Lösung $x\equiv0$ könnte verloren gehen.

> Division durch $x$ setzt $x\ne0$ voraus.

### Trennbare Gleichungen
Welche Funktion löst $x'=2x$ mit $x(0)=5$?

- [x] $5e^{2t}$
- [ ] $5+2t$
- [ ] $2e^{5t}$
- [ ] $5e^{-2t}$

> Exponentialansatz und Anfangswert ergeben $x(t)=5e^{2t}$.

### Trennbare Gleichungen
Welche Lösung hat $x'=-x^2$, $x(0)=1$ für $t>-1$?

- [ ] $1/(1-t)$
- [x] $1/(1+t)$
- [ ] $e^{-t}$
- [ ] $1-t$

> Aus $(1/x)'=1$ folgt $1/x=1+t$.

### Trennbare Gleichungen
Welche Funktion erfüllt $x'=t$, $x(0)=2$?

- [ ] $2+t^2$
- [ ] $t^2/2$
- [ ] $2+t$
- [x] $2+t^2/2$

> Integrieren und die Konstante aus $x(0)=2$ bestimmen.

### Trennbare Gleichungen
Was folgt aus $x'=x(1-x)$ für die konstanten Lösungen?

- [ ] Keine konstanten Lösungen.
- [x] $x\equiv0$ und $x\equiv1$.
- [ ] Nur $x\equiv0$.
- [ ] Nur $x\equiv-1$.

> Konstante Lösungen erfüllen $x(1-x)=0$.

### Trennbare Gleichungen
Für $x'=\sin t\,x$: Welche Funktion ist eine Lösung?

- [ ] $x(t)=C e^t$
- [ ] $x(t)=C\sin t$
- [ ] $x(t)=Ce^{\cos t}$
- [x] $x(t)=Ce^{-\cos t}$

> Es gilt $(\log|x|)'=\sin t$ und $\int\sin t\,dt=-\cos t$.

### Trennbare Gleichungen
Bei $x'=x^2$, $x(0)=1$: Was passiert bei $t\uparrow1$?

- [ ] Sie nähert sich null.
- [ ] Sie bleibt konstant eins.
- [ ] Sie wird periodisch.
- [x] Die Lösung wächst unbegrenzt.

> Die Lösung $1/(1-t)$ besitzt bei $t=1$ einen Pol.

### Trennbare Gleichungen
Welche Gleichung modelliert exponentiellen Zerfall?

- [x] $N'=-kN$ mit $k>0$.
- [ ] $N'=kN^2$ mit $k>0$.
- [ ] $N'=kN$ mit $k>0$.
- [ ] $N'=k$ mit $k>0$.

> Die Abnahmerate ist proportional zur vorhandenen Menge.

### Trennbare Gleichungen
Wie lautet nach Trennung für $x'=t x^3$ (bei $x\ne0$) der Integrationsschritt?

- [ ] $\int x\,dx=\int t^3\,dt$
- [x] $\int x^{-3}\,dx=\int t\,dt$
- [ ] $\int t^{-3}\,dt=\int x\,dx$
- [ ] $\int x^3\,dx=\int t\,dt$

> Man bringt alle Faktoren mit $x$ auf die linke Seite.

### Lineare Gleichungen erster Ordnung
Was ist die homogene Gleichung zu $x'+3x=t$?

- [ ] $x'+t=0$
- [ ] $x'+3x=1$
- [x] $x'+3x=0$
- [ ] $x'=0$

> Die inhomogene rechte Seite wird durch null ersetzt.

### Lineare Gleichungen erster Ordnung
Welcher Faktor macht $x'+2x=t$ zur Produktableitung?

- [x] $e^{2t}$
- [ ] $2e^t$
- [ ] $t^2$
- [ ] $e^{-2t}$

> $(e^{2t}x)'=e^{2t}(x'+2x)$.

### Lineare Gleichungen erster Ordnung
Welche Funktion löst $x'+x=1$ mit $x(0)=0$?

- [ ] $1+e^{-t}$
- [ ] $t e^{-t}$
- [ ] $e^t-1$
- [x] $1-e^{-t}$

> Konstante partikuläre Lösung eins plus homogene Lösung.

### Lineare Gleichungen erster Ordnung
Welche Lösung hat $x'+2x=4$, $x(0)=3$?

- [ ] $2+e^{2t}$
- [ ] $4+3e^{-2t}$
- [x] $2+e^{-2t}$
- [ ] $3e^{-2t}$

> Gleichgewicht zwei, Anfangsabweichung eins.

### Lineare Gleichungen erster Ordnung
Was wird bei Variation der Konstanten verändert?

- [ ] Die Ableitung wird gestrichen.
- [ ] Der Anfangswert wird immer null.
- [ ] Die unabhängige Variable wird konstant.
- [x] Die Konstante der homogenen Lösung wird durch eine Funktion ersetzt.

> Der Ansatz lautet etwa $x(t)=C(t)e^{-P(t)}$.

### Lineare Gleichungen erster Ordnung
Für $x'+p(t)x=q(t)$: Welche Gleichung erfüllt $C(t)$ bei $x=C(t)e^{-P(t)}$, $P'=p$?

- [ ] $C'=q e^{-P}$
- [x] $C'=q e^P$
- [ ] $C'=q$
- [ ] $C'=p C$

> Beim Einsetzen heben sich die Terme mit $C$ auf.

### Lineare Gleichungen erster Ordnung
Ein Wasserbehälter erfüllt $V'=5-2V$. Wo liegt das Gleichgewicht?

- [ ] $V=5$
- [x] $V=5/2$
- [ ] $V=0$
- [ ] $V=2$

> Am Gleichgewicht gilt $V'=0$, also $5-2V=0$.

### Lineare Gleichungen erster Ordnung
Was gilt für zwei Lösungen derselben inhomogenen linearen Gleichung?

- [x] Ihre Differenz löst die homogene Gleichung.
- [ ] Ihre Summe löst stets die homogene Gleichung.
- [ ] Sie müssen gleich sein.
- [ ] Ihr Produkt ist stets konstant.

> Die inhomogenen rechten Seiten heben sich bei Subtraktion auf.

### Lineare Gleichungen erster Ordnung
Was ist eine partikuläre Lösung von $x'+x=3$?

- [ ] $x(t)=e^{-t}$
- [ ] $x(t)=0$
- [ ] $x(t)=t$
- [x] $x(t)=3$

> Für die Konstante drei gilt $x'=0$ und $x'+x=3$.

### Lineare Gleichungen erster Ordnung
Welche Aussage über $x'+2x=0$ ist richtig?

- [ ] Alle Lösungen sind Vielfache von $e^{2t}$.
- [ ] Es gibt nur die Nulllösung.
- [x] Alle Lösungen sind Vielfache von $e^{-2t}$.
- [ ] Alle Lösungen sind konstant.

> Trennung liefert $x=Ce^{-2t}$.

### Exakte Differentialgleichungen
Wann ist $h(t,x)x'+g(t,x)=0$ exakt?

- [ ] Wenn $h$ konstant ist.
- [ ] Wenn $x'=0$ gilt.
- [ ] Wenn $g=h$ gilt.
- [x] Wenn $g=F_t$ und $h=F_x$ für ein Potential $F$ gelten.

> Dann ist die Gleichung die Ableitung von $F(t,x(t))=C$.

### Exakte Differentialgleichungen
Welche Bedingung ist bei $C^1$-Koeffizienten notwendig für Exaktheit?

- [ ] $g_x=-h_t$
- [ ] $g=h$
- [ ] $g_t=h_x$
- [x] $g_x=h_t$

> Gemischte zweite Ableitungen eines Potentials stimmen überein.

### Exakte Differentialgleichungen
Welche zusätzliche Gebietseigenschaft macht $g_x=h_t$ hinreichend?

- [ ] Beschränktheit des Gebiets.
- [ ] Dass das Gebiet nur einen Punkt enthält.
- [x] Einfacher Zusammenhang des Gebiets.
- [ ] Kompaktheit des Gebiets.

> Auf einfach zusammenhängenden Gebieten ist ein geschlossenes $C^1$-Feld konservativ.

### Exakte Differentialgleichungen
Für $2tx x'+x^2=0$: Welches Potential passt?

- [ ] $F(t,x)=x^2+t^2$
- [x] $F(t,x)=tx^2$
- [ ] $F(t,x)=2tx$
- [ ] $F(t,x)=t^2x$

> Es gilt $F_t=x^2$ und $F_x=2tx$.

### Exakte Differentialgleichungen
Welche implizite Lösung gehört zu $2x x'+2t=0$?

- [ ] $2x(t)+t=C$
- [ ] $x(t)^2-t^2=C$
- [ ] $x(t)+t=C$
- [x] $x(t)^2+t^2=C$

> Die linke Seite ist die Ableitung von $x^2+t^2$.

### Exakte Differentialgleichungen
Sind $g(t,x)=3x$ und $h(t,x)=3t$ kompatibel mit einem Potential?

- [x] Ja, denn $g_x=h_t=3$.
- [ ] Nein, weil $g$ von $x$ abhängt.
- [ ] Nein, denn $g\ne h$.
- [ ] Nur für $t=x$.

> Die Integrabilitätsbedingung ist erfüllt; auf $\mathbb R^2$ existiert ein Potential.

### Exakte Differentialgleichungen
Welche Aussage über einen integrierenden Faktor ist richtig?

- [ ] Er beseitigt die Anfangsbedingung.
- [x] Er kann eine nicht exakte Gleichung in eine exakte verwandeln.
- [ ] Er macht jede Gleichung linear.
- [ ] Er muss immer konstant sein.

> Man multipliziert die gesamte Gleichung mit einem geeigneten Faktor.

### Exakte Differentialgleichungen
Für $F(t,x)=t^2+x^2$: Welche Gleichung folgt aus $F(t,x(t))=C$?

- [x] $2x x'+2t=0$
- [ ] $x'+t=0$
- [ ] $2t x'+2x=0$
- [ ] $x'=2t$

> Die Kettenregel liefert $F_t+F_x x'=0$.

### Exakte Differentialgleichungen
Warum genügt $g_x=h_t$ auf einem Gebiet mit Loch nicht immer?

- [x] Es können globale Hindernisse für ein Potential auftreten.
- [ ] Weil jede Kurve dort konstant ist.
- [ ] Weil die Gleichung dann automatisch linear ist.
- [ ] Weil partielle Ableitungen dort nie existieren.

> Die Bedingung ist lokal; global ist die Topologie relevant.

### Exakte Differentialgleichungen
Was beschreibt $F(t,x(t))=C$ bei einer exakten Gleichung?

- [ ] Die Funktion $F$ ist identisch null.
- [ ] Die Ableitung $x'$ ist stets eins.
- [ ] Die Lösung ist stets konstant.
- [x] Die Lösung verläuft auf einer Niveaulinie von $F$.

> Das Potential bleibt entlang der Lösung konstant.

### Ähnlichkeit, Bernoulli und Riccati
Woran erkennt man eine Ähnlichkeitsgleichung?

- [ ] Die Gleichung ist immer linear.
- [ ] Die rechte Seite hängt nur von $t+x$ ab.
- [x] Die rechte Seite hängt nur von $x/t$ ab.
- [ ] Die rechte Seite ist immer konstant.

> Typische Form: $x'=f(x/t)$.

### Ähnlichkeit, Bernoulli und Riccati
Welche Substitution verwendet man für $x'=f(x/t)$?

- [x] $u=x/t$
- [ ] $u=x^2$
- [ ] $u=1/t$
- [ ] $u=x+t$

> Mit $x=tu$ wird die Gleichung für $u$ trennbar.

### Ähnlichkeit, Bernoulli und Riccati
Welche Ableitung folgt aus $x(t)=t u(t)$?

- [ ] $x'=t u'$
- [x] $x'=u+t u'$
- [ ] $x'=u/t$
- [ ] $x'=u'$

> Produktregel.

### Ähnlichkeit, Bernoulli und Riccati
Was ergibt sich bei $x'=1+x/t$ nach $u=x/t$?

- [ ] $u'=t$
- [ ] $t u'=u$
- [x] $t u'=1$
- [ ] $u'=1+u$

> Einsetzen von $x'=u+tu'$ ergibt $u+tu'=1+u$.

### Ähnlichkeit, Bernoulli und Riccati
Welche Gleichung ist vom Bernoulli-Typ mit Exponent $n=2$?

- [x] $x'+t x=x^2$
- [ ] $x'+x=0$
- [ ] $x'+t x=t^2$
- [ ] $x'=x+t$

> Bernoulli: $x'+p(t)x=q(t)x^n$, $n\ne0,1$.

### Ähnlichkeit, Bernoulli und Riccati
Welche Substitution linearisiert eine Bernoulli-Gleichung mit $n=2$ (für $x\ne0$)?

- [ ] $u=x^2$
- [ ] $u=t/x$
- [ ] $u=e^x$
- [x] $u=x^{-1}$

> Allgemein $u=x^{1-n}$.

### Ähnlichkeit, Bernoulli und Riccati
Welche Substitution linearisiert Bernoulli mit $n=3$ auf $x>0$?

- [ ] $u=\ln x$
- [ ] $u=x^2$
- [ ] $u=x/t$
- [x] $u=x^{-2}$

> Es gilt $1-n=-2$.

### Ähnlichkeit, Bernoulli und Riccati
Welche Form kennzeichnet eine Riccati-Gleichung?

- [ ] $x'=a(t)/x^2$
- [x] $x'=a(t)x^2+b(t)x+c(t)$
- [ ] $x'=a(t)x^3+b(t)$
- [ ] $x'=a(t)\sin x$

> Bei einer Riccati-Gleichung ist die rechte Seite ein Polynom in $x$ von höchstens zweitem Grad.

### Ähnlichkeit, Bernoulli und Riccati
Was hilft beim Lösen einer Riccati-Gleichung?

- [ ] Man setzt immer $x=t^2$.
- [ ] Man kann stets direkt integrieren.
- [x] Eine bekannte partikuläre Lösung erlaubt lokal die Reduktion auf eine lineare Gleichung.
- [ ] Jede Riccati-Gleichung ist bereits linear.

> Mit $x=x_p+1/u$ erhält man auf Intervallen, auf denen $x\neq x_p$ gilt, eine lineare Gleichung für $u$.

### Ähnlichkeit, Bernoulli und Riccati
Welche der folgenden Funktionen ist eine konstante Lösung von $x'=x^2-1$?

- [x] $x\equiv1$
- [ ] $x\equiv2$
- [ ] $x\equiv-2$
- [ ] $x\equiv0$

> Bei $x=1$ verschwindet $x^2-1$; auch $x=-1$ ist konstant.

### Ähnlichkeit, Bernoulli und Riccati
Welche Gleichung ist zugleich trennbar und Riccati?

- [ ] $x'=t+x^2$
- [x] $x'=x^2+1$
- [ ] $x'=t x^2+x$
- [ ] $x'=\sin(x)+t$

> Die rechte Seite ist nur eine Funktion von $x$ und quadratisch.

### Ähnlichkeit, Bernoulli und Riccati
Warum ist $x'+x=x^2$ keine lineare Gleichung?

- [ ] Weil keine Anfangsbedingung vorliegt.
- [ ] Weil $x'$ vorkommt.
- [x] Weil die unbekannte Funktion quadratisch auftritt.
- [ ] Weil die Koeffizienten konstant sind.

> Linearität schließt $x^2$ aus.

### Anwendung: exponentielle Prozesse
Eine Bakterienkultur erfüllt $y'=y$ und $y(0)=2$. Welche Lösung passt?

- [ ] $e^{2t}$
- [x] $2e^{t}$
- [ ] $2+t$
- [ ] $2e^{-t}$

> Bei einer proportionalen Änderungsrate ist $y(t)=y(0)e^{at}$.

### Rechnen: lineare Modelle
Ein Modell erfüllt $y'+y=2$ und $y(0)=0$. Wie lautet $y(t)$?

- [ ] $2(1+e^{-t})$
- [ ] $2t$
- [ ] $2e^{-t}$
- [x] $2(1-e^{-t})$

> Das Gleichgewicht ist $b/a$ für $y'+ay=b$; bei $y(0)=0$ gilt $y(t)=(b/a)(1-e^{-at})$.

### Rechnen: Ableitungen prüfen
Welche Funktion erfüllt $x'=3t^{2}$ und $x(0)=1$?

- [ ] $x(t)=t^4+1$
- [ ] $x(t)=t^3-1$
- [x] $x(t)=t^3+1$
- [ ] $x(t)=3t^3+1$

> Ableiten von $t^m$ liefert $m t^{m-1}$; der Anfangswert legt die Konstante fest.

### Modell verstehen
Ein Bestand $N$ erfüllt $N'=3-2N$. Was ist sein stationärer Wert?

- [ ] $5$
- [x] $3/2$
- [ ] $2/3$
- [ ] $16$

> Stationär bedeutet $N'=0$; für $N'=a-bN$ folgt $N=a/b$.

### Lösungen überprüfen
Ist $x(t)=e^{2t}$ eine Lösung von $x'=2x$?

- [ ] Nur bei $t=0$.
- [ ] Nur für $t<0$.
- [ ] Nein, denn $x'=x$.
- [x] Ja, für alle $t$.

> Die Ableitung von $e^{kt}$ ist $ke^{kt}$; damit ist die jeweilige Gleichung erfüllt.

### Grundbegriffe
Ein Körper kühlt nach $T'=-k\,(T-T_U)$ ab ($k>0$, Raumtemperatur $T_U\neq0$ konstant). Wie lässt sich die Gleichung einordnen?

- [ ] Linear, homogen und nicht autonom
- [ ] Linear und zweiter Ordnung
- [ ] Nichtlinear und autonom
- [x] Linear, inhomogen, autonom, erster Ordnung

> Ausmultipliziert: $T'+kT=kT_U$. Die rechte Seite hängt nicht explizit von $t$ ab, der Störterm $kT_U$ ist nicht null.

### Grundbegriffe
Wie viele Komponenten hat das System erster Ordnung, das zu $x'''=f(t,x,x',x'')$ gehört?

- [x] Drei
- [ ] Sechs
- [ ] Zwei
- [ ] Eine

> Man setzt $x_1=x$, $x_2=x'$, $x_3=x''$.

### Grundbegriffe
Wie macht man die nicht-autonome Gleichung $x'=t\,x$ autonom?

- [x] Mit $y_1=x$, $y_2=t$: $y_1'=y_2y_1$, $y_2'=1$
- [ ] Das ist nicht möglich.
- [ ] Indem man $t$ einfach weglässt.
- [ ] Durch die Substitution $u=x/t$.

> Die Zeit wird als zusätzliche Zustandsgröße mit $y_2'=1$ eingeführt; die Dimension steigt um eins.

### Grundbegriffe
Welche Gleichung liegt in impliziter Form vor (nicht nach der höchsten Ableitung aufgelöst)?

- [ ] $x'=\sin t$
- [ ] $x''=-x$
- [x] $(x')^2+t\,x'=x$
- [ ] $x'=x^2$

> Hier steht $x'$ quadratisch und ist nicht isoliert.

### Grundbegriffe
Ein Becken leert sich durch eine Bodenöffnung: $h'=-c\sqrt{h}$ mit $c>0$. Welche Eigenschaft hat diese Gleichung?

- [ ] Sie ist zweiter Ordnung.
- [ ] Sie ist nicht trennbar.
- [ ] Sie ist linear und homogen.
- [x] Sie ist autonom und nichtlinear.

> Die rechte Seite hängt nur von $h$ ab, aber über $\sqrt{h}$ – also nichtlinear.

### Grundbegriffe
Was ist eine Lösung der Differentialgleichung $x'=f(t,x)$ auf einem Intervall $I$?

- [ ] Eine Funktion, die die Gleichung nur in $t_0$ erfüllt
- [ ] Eine Zahl $x$ mit $f(t,x)=0$
- [x] Eine differenzierbare Funktion $x$, die $x'(t)=f(t,x(t))$ für alle $t\in I$ erfüllt
- [ ] Die Funktion $f$ selbst

> Lösungen sind Funktionen, und die Gleichung muss auf dem ganzen Intervall gelten.

### Grundbegriffe
Ist $x(t)=\cos(2t)$ eine Lösung von $x''+4x=0$?

- [ ] Nur für $t=0$.
- [ ] Nein, nur $\sin(2t)$ ist Lösung.
- [x] Ja, für alle $t$.
- [ ] Nein, dazu müsste die Gleichung $x''+2x=0$ lauten.

> $x''=-4\cos(2t)$, also $x''+4x=0$.

### Grundbegriffe
Welche Gleichung ist eine partielle und damit keine gewöhnliche Differentialgleichung?

- [x] $u_t=u_{xx}$
- [ ] $x'''=1$
- [ ] $x''+x=0$
- [ ] $x'=t\,x$

> Die gesuchte Funktion hängt von zwei Variablen ab, es treten partielle Ableitungen auf.

### Grundbegriffe
Ein Auto bremst mit konstanter Verzögerung: $x''=-a$. Welche Anfangsdaten legen die Bewegung eindeutig fest?

- [ ] Nur der Ort zur Startzeit
- [x] Ort und Geschwindigkeit zur Startzeit
- [ ] Nur die Verzögerung $a$
- [ ] Keine – die Bewegung ist schon festgelegt.

> Zweimal integrieren erzeugt zwei Konstanten, die durch $x(t_0)$ und $x'(t_0)$ bestimmt werden.

### Grundbegriffe
Welche Gleichung ist linear, obwohl ihre Koeffizienten nichtlinear von $t$ abhängen?

- [ ] $x\,x'=1$
- [ ] $x'=\sin x$
- [x] $x'+e^{t^2}x=\sin t$
- [ ] $x'=x^2+t$

> Linearität betrifft nur die gesuchte Funktion $x$, nicht die Abhängigkeit von $t$.

### Trennbare Gleichungen
Welche Gleichung ist trennbar?

- [ ] $x'=\ln(t+x)$
- [x] $x'=e^{t+x}$
- [ ] $x'=\sin(t\,x)$
- [ ] $x'=t+x$

> $e^{t+x}=e^t\cdot e^x$ ist ein Produkt aus einer Funktion von $t$ und einer von $x$.

### Trennbare Gleichungen
Ein Kaffee kühlt nach $T'=-k\,(T-20)$ ab, $T(0)=80$. Wie lautet $T(t)$?

- [ ] $60+20e^{-kt}$
- [ ] $80e^{-kt}$
- [x] $20+60e^{-kt}$
- [ ] $20-60e^{-kt}$

> Für $u=T-20$ gilt $u'=-ku$, $u(0)=60$.

### Trennbare Gleichungen
Welche Halbwertszeit hat ein Zerfall nach $N'=-kN$ mit $k>0$?

- [x] $\ln(2)/k$
- [ ] $1/(2k)$
- [ ] $k/2$
- [ ] $2k$

> Aus $e^{-kT}=\tfrac12$ folgt $T=\ln(2)/k$.

### Trennbare Gleichungen
Welche konstanten Lösungen hat $x'=x^2-4$?

- [ ] Keine
- [ ] $x\equiv0$ und $x\equiv4$
- [ ] Nur $x\equiv2$
- [x] $x\equiv2$ und $x\equiv-2$

> Konstante Lösungen sind die Nullstellen der rechten Seite.

### Trennbare Gleichungen
Löse $x'=x\cos t$, $x(0)=2$.

- [ ] $2+\sin t$
- [ ] $2\cos t$
- [ ] $2e^{\cos t}$
- [x] $2e^{\sin t}$

> Trennung: $\ln|x|=\sin t+C$; der Anfangswert liefert den Faktor 2.

### Trennbare Gleichungen
Warum bleibt das Ergebnis der Trennung der Variablen manchmal nur implizit?

- [x] Weil sich $\Phi(x)=G(t)+C$ nicht immer nach $x$ auflösen lässt
- [ ] Weil die Integrale nie existieren
- [ ] Weil die Gleichung dann linear ist
- [ ] Weil keine Anfangsbedingung gegeben ist

> Man erhält eine Gleichung zwischen Stammfunktionen; die Umkehrung von $\Phi$ ist nicht immer elementar.

### Trennbare Gleichungen
Logistisches Wachstum $x'=x(1-x)$ mit $0<x(0)<1$: Wohin strebt $x(t)$ für $t\to\infty$?

- [x] Gegen $1$
- [ ] Gegen $0$
- [ ] Gegen unendlich
- [ ] Die Lösung schwingt um $1$.

> Zwischen den Gleichgewichten $0$ und $1$ ist $x'>0$; die Lösung wächst monoton gegen $1$.

### Trennbare Gleichungen
Welche Kurven beschreiben die Lösungen von $x'=-t/x$?

- [ ] Geraden durch den Ursprung
- [ ] Parabeln $x=Ct^2$
- [ ] Hyperbeln $x^2-t^2=C$
- [x] Kreise $t^2+x^2=C$

> Trennung: $x\,dx=-t\,dt$, also $x^2/2=-t^2/2+c$.

### Lineare Gleichungen erster Ordnung
Woran erkennt man beim Ansatz zur Variation der Konstanten, dass richtig gerechnet wurde?

- [ ] Die Gleichung für $C$ wird quadratisch.
- [ ] $C'(t)$ fällt heraus.
- [x] Nach dem Einsetzen fällt $C(t)$ heraus, nur $C'(t)$ bleibt übrig.
- [ ] $C(t)$ wird identisch null.

> Die Terme mit $C(t)$ heben sich auf, weil $e^{-P(t)}$ die homogene Gleichung löst – eine gute Rechenkontrolle.

### Lineare Gleichungen erster Ordnung
Ein Kondensator wird über einen Widerstand geladen: $RC\,U'+U=U_0$, $U(0)=0$. Wie lautet $U(t)$?

- [ ] $U_0\,t/(RC)$
- [x] $U_0\left(1-e^{-t/(RC)}\right)$
- [ ] $U_0e^{-t/(RC)}$
- [ ] $U_0\left(1+e^{-t/(RC)}\right)$

> Gleichgewicht $U_0$, homogener Anteil $e^{-t/(RC)}$, Anfangswert null.

### Lineare Gleichungen erster Ordnung
Welche Lösung hat $x'-x=e^t$ mit $x(0)=0$?

- [ ] $e^t-1$
- [ ] $e^{2t}$
- [x] $t\,e^t$
- [ ] $t\,e^{-t}$

> Variation der Konstanten: $x=C(t)e^t$ ergibt $C'=1$.

### Lineare Gleichungen erster Ordnung
Wie lauten die Lösungen der homogenen Gleichung $x'+\frac1t\,x=0$ für $t>0$?

- [x] $x=C/t$
- [ ] $x=Ct$
- [ ] $x=Ce^t$
- [ ] $x=C\ln t$

> Mit $P(t)=\ln t$ ist $x=Ce^{-P(t)}=C/t$.

### Lineare Gleichungen erster Ordnung
Welche Funktion ist eine partikuläre Lösung von $x'+\frac{x}{t}=1$ für $t>0$?

- [x] $x=t/2$
- [ ] $x=t$
- [ ] $x=t^2$
- [ ] $x=1$

> $x'=\tfrac12$ und $x/t=\tfrac12$, zusammen $1$.

### Lineare Gleichungen erster Ordnung
Ein Tank enthält 100 l Salzlösung; pro Minute fließen 2 l Wasser zu und 2 l Lösung ab. Für die Salzmenge gilt $S'=-S/50$. Was folgt?

- [x] $S(t)=S(0)\,e^{-t/50}$
- [ ] $S$ nimmt linear ab.
- [ ] $S$ wächst exponentiell.
- [ ] $S$ bleibt konstant.

> Abfluss proportional zur Konzentration $S/100$ mal 2 l/min.

### Lineare Gleichungen erster Ordnung
Wie verhalten sich die Lösungen von $x'=-2x+\cos t$ für große $t$?

- [ ] Sie wachsen exponentiell.
- [x] Sie nähern sich unabhängig vom Anfangswert einer periodischen Lösung.
- [ ] Sie streben alle gegen null.
- [ ] Sie sind alle konstant.

> Allgemeine Lösung = periodische partikuläre Lösung + $Ce^{-2t}$; der homogene Anteil klingt ab.

### Exakte Differentialgleichungen
Die Gleichung $(2x+t)\,x'+(x+2t)=0$ ist exakt. Welche Stammfunktion $F$ gehört dazu?

- [ ] $F(t,x)=tx$
- [x] $F(t,x)=t^2+tx+x^2$
- [ ] $F(t,x)=t^2+x^2$
- [ ] $F(t,x)=2tx$

> $F_t=2t+x=g$ und $F_x=t+2x=h$.

### Exakte Differentialgleichungen
Ist $t\,x'-x=0$ (also $h=t$, $g=-x$) exakt?

- [ ] Ja, für alle $t$.
- [ ] Ja, weil sie linear ist.
- [ ] Nur für $t>0$.
- [x] Nein, denn $g_x=-1\neq h_t=1$.

> Die Integrabilitätsbedingung $g_x=h_t$ ist verletzt.

### Exakte Differentialgleichungen
Welcher integrierende Faktor $\mu(t)$ macht $t\,x'-x=0$ für $t>0$ exakt?

- [ ] $\mu=e^t$
- [x] $\mu=1/t^2$
- [ ] $\mu=t$
- [ ] $\mu=t^2$

> $(g_x-h_t)/h=-2/t$ hängt nur von $t$ ab; $\mu'=-\tfrac2t\mu$. Es entsteht $(x/t)'=0$.

### Exakte Differentialgleichungen
Wozu dient der Satz von Schwarz bei exakten Gleichungen?

- [x] Er zeigt, dass $g_x=h_t$ für eine Stammfunktion notwendig ist.
- [ ] Er liefert die Lösung explizit.
- [ ] Er macht das Gebiet einfach zusammenhängend.
- [ ] Er macht jede Gleichung linear.

> Aus $F_t=g$, $F_x=h$ folgt $g_x=F_{tx}=F_{xt}=h_t$.

### Exakte Differentialgleichungen
In welche äquivalente exakte Form lässt sich die trennbare Gleichung $x'=f(x)\,g(t)$ (mit $f\neq0$) bringen?

- [x] $\frac{1}{f(x)}\,x'-g(t)=0$
- [ ] $f(x)\,x'+g(t)=0$
- [ ] $x'-f(x)g(t)=0$ (ist immer exakt)
- [ ] $g(t)\,x'-f(x)=0$

> Mit $h=1/f(x)$ und $g=-g(t)$ ist $\partial_x g=0=\partial_t h$.

### Exakte Differentialgleichungen
Ist die Halbebene $D=\{(t,x):t>0\}$ einfach zusammenhängend?

- [ ] Nein, sie ist nicht zusammenhängend.
- [x] Ja, sie hat keine Löcher.
- [ ] Nein, sie hat ein Loch bei $t=0$.
- [ ] Nein, sie ist nicht offen.

> Jede geschlossene Kurve in der Halbebene lässt sich darin auf einen Punkt zusammenziehen.

### Ähnlichkeit, Bernoulli und Riccati
Ist $x'=\dfrac{t^2+x^2}{t\,x}$ eine Ähnlichkeitsgleichung?

- [x] Ja, denn die rechte Seite ist $\frac{1}{u}+u$ mit $u=x/t$.
- [ ] Ja, aber sie lässt sich nicht lösen.
- [ ] Nein, wegen der Quadrate.
- [ ] Nur für $x=t$.

> Zähler und Nenner durch $t^2$ teilen.

### Ähnlichkeit, Bernoulli und Riccati
Welche Substitution macht $x'=(t+x)^2$ trennbar?

- [ ] $z=1/x$
- [ ] $z=x^2$
- [ ] $u=x/t$
- [x] $z=t+x$, dann $z'=1+z^2$

> Typ $x'=f(at+bx+c)$: Mit $z=t+x$ wird $z'=1+x'=1+z^2$.

### Ähnlichkeit, Bernoulli und Riccati
Welche Lösungen hat $x'=2x/t$ für $t>0$?

- [ ] $x=Ce^{2t}$
- [ ] $x=Ct$
- [x] $x=Ct^2$
- [ ] $x=C/t^2$

> Mit $u=x/t$ folgt $t\,u'=u$, also $u=Ct$.

### Ähnlichkeit, Bernoulli und Riccati
$x'=x+t\sqrt{x}$ ($x>0$) ist eine Bernoulli-Gleichung. Welche Substitution linearisiert sie?

- [ ] Keine, sie ist schon linear.
- [ ] $y=1/x$ (Exponent $n=2$)
- [x] $y=\sqrt{x}$ (Exponent $n=\tfrac12$)
- [ ] $y=x/t$

> Allgemein $y=x^{1-n}$; hier $1-n=\tfrac12$.

### Ähnlichkeit, Bernoulli und Riccati
Warum schließt man bei $x'=p(t)x+q(t)x^n$ die Fälle $n=0$ und $n=1$ aus?

- [ ] Dann ist sie automatisch exakt.
- [x] Dann ist die Gleichung bereits linear.
- [ ] Dann gibt es keine Lösung.
- [ ] Dann wird die Substitution unendlich.

> Für $n=0$ ist $q$ ein Störterm, für $n=1$ ein zusätzlicher Koeffizient von $x$.

### Ähnlichkeit, Bernoulli und Riccati
Welche Gleichung entsteht aus $x'=x-x^2$ mit der Substitution $y=1/x$?

- [x] $y'=1-y$
- [ ] $y'=-y^2$
- [ ] $y'=y^2$
- [ ] $y'=y-1$

> $y'=-x'/x^2=-(x-x^2)/x^2=1-1/x=1-y$.

### Ähnlichkeit, Bernoulli und Riccati
Welche Funktion ist eine partikuläre Lösung der Riccati-Gleichung $x'=x^2-2tx+t^2+1$?

- [ ] $x_p=t^2$
- [x] $x_p=t$
- [ ] $x_p=0$
- [ ] $x_p=1$

> Für $x=t$: links $1$, rechts $t^2-2t^2+t^2+1=1$.

### Ähnlichkeit, Bernoulli und Riccati
Was entsteht, wenn man in eine Riccati-Gleichung den Ansatz $x=y+x_p$ mit bekannter Lösung $x_p$ einsetzt?

- [ ] Eine exakte Gleichung
- [ ] Sofort eine lineare homogene Gleichung
- [ ] Eine Ähnlichkeitsgleichung
- [x] Eine Bernoulli-Gleichung für $y$ mit $n=2$

> Die Terme ohne $y$ heben sich auf; übrig bleibt $y'=[q+2rx_p]y+ry^2$.

## Welt 2 – Existenz und Eindeutigkeit (Kapitel 3)

### Existenz und Eindeutigkeit
Welche Voraussetzungen verlangt der Satz von Picard-Lindelöf für lokale Existenz und Eindeutigkeit?

- [ ] Nur Differenzierbarkeit nach $t$.
- [ ] Beschränktheit einer beliebigen Lösung.
- [ ] Nur Messbarkeit von $f$.
- [x] Stetigkeit von $f$ und lokale Lipschitz-Stetigkeit in $x$.

> Die Lipschitz-Bedingung betrifft die Zustandsvariable.

### Existenz und Eindeutigkeit
Was garantiert bloße Stetigkeit von $f(t,x)$ im Allgemeinen?

- [x] Lokale Existenz, aber nicht notwendig Eindeutigkeit.
- [ ] Immer globale Eindeutigkeit.
- [ ] Nur konstante Lösungen.
- [ ] Keine Existenz.

> Peano liefert Existenz; Eindeutigkeit kann fehlen.

### Existenz und Eindeutigkeit
Was bedeutet lokale Eindeutigkeit?

- [ ] Alle Lösungen für verschiedene Anfangswerte sind gleich.
- [ ] Jede Lösung existiert für alle Zeiten.
- [x] Zwei Lösungen mit demselben Anfangswert stimmen in einer Umgebung des Anfangszeitpunkts überein.
- [ ] Die Lösung ist stets linear.

> Die Lipschitz-Abschätzung erzwingt Gleichheit bei gleichem Anfangswert.

### Existenz und Eindeutigkeit
Welche Funktion ist in $x$ lokal Lipschitz auf $\mathbb R$?

- [ ] $f(x)=\sqrt{x}$ auf $[0,\infty)$
- [ ] $f(x)=\sqrt{|x|}$
- [ ] $f(x)=|x|^{1/3}$
- [x] $f(x)=x^2$

> Eine stetig differenzierbare Funktion ist auf kompakten Intervallen Lipschitz.

### Existenz und Eindeutigkeit
Welche Funktion ist auf ganz $\mathbb R$ global Lipschitz?

- [ ] $f(x)=e^x$
- [ ] $f(x)=x^3$
- [x] $f(x)=\sin x$
- [ ] $f(x)=x^2$

> $|\sin x-\sin y|\le |x-y|$.

### Existenz und Eindeutigkeit
Was ist eine Lipschitz-Konstante für $f(x)=3x$?

- [x] $L=3$
- [ ] $L=2$
- [ ] $L=0$
- [ ] $L=1$

> Es gilt $|f(x)-f(y)|=3|x-y|$.

### Existenz und Eindeutigkeit
Was bedeutet „$f$ ist lokal Lipschitz in $x$“?

- [ ] Die Funktion ist global beschränkt.
- [x] In einer Umgebung jedes Punkts gilt eine Lipschitz-Abschätzung in $x$.
- [ ] Jede Lösung ist konstant.
- [ ] Die Funktion ist in $t$ konstant.

> Lokal kann die Konstante von der gewählten Umgebung abhängen.

### Existenz und Eindeutigkeit
Wozu dient das Lemma von Gronwall?

- [x] Zum Abschätzen von Lösungen und Lösungsdifferenzen.
- [ ] Zum Umformen in ein Randwertproblem.
- [ ] Zum Lösen jeder Riccati-Gleichung durch Quadratur.
- [ ] Zum Berechnen von Eigenwerten.

> Eine Integralungleichung wird in eine Exponentialabschätzung überführt.

### Existenz und Eindeutigkeit
Warum folgt aus $|x(t)-y(t)|\le0$ die Eindeutigkeit?

- [ ] Weil $y$ nicht differenzierbar ist.
- [ ] Weil die Lösungen periodisch sind.
- [x] Weil dann $x(t)=y(t)$ gilt.
- [ ] Weil dann $x(t)=0$ gelten muss.

> Eine Norm ist nichtnegativ und verschwindet nur beim Nullvektor.

### Existenz und Eindeutigkeit
Wie lautet die Integralgleichung zum AWP $x'=f(t,x)$, $x(t_0)=x_0$?

- [ ] $x(t)=x_0+f(t,x(t))$
- [ ] $x(t)=f(t_0,x_0)$
- [x] $x(t)=x_0+\int_{t_0}^t f(s,x(s))\,ds$
- [ ] $x(t)=\int_{t_0}^t x(s)\,ds$

> Der Hauptsatz der Integralrechnung liefert die äquivalente Form.

### Existenz und Eindeutigkeit
Was ist die nullte Picard-Iterierte?

- [x] $x^{(0)}(t)=x_0$
- [ ] $x^{(0)}(t)=0$ immer
- [ ] $x^{(0)}(t)=t$
- [ ] $x^{(0)}(t)=f(t,x_0)$

> Man startet mit der konstanten Anfangsfunktion.

### Existenz und Eindeutigkeit
Was ist die erste Picard-Iterierte für $x'=x$, $x(0)=1$?

- [ ] $x^{(1)}(t)=e^t$
- [ ] $x^{(1)}(t)=1$
- [x] $x^{(1)}(t)=1+t$
- [ ] $x^{(1)}(t)=t$

> $x^{(1)}=1+\int_0^t 1\,ds$.

### Existenz und Eindeutigkeit
Was ist die zweite Picard-Iterierte für $x'=x$, $x(0)=1$?

- [ ] $1+2t$
- [x] $1+t+t^2/2$
- [ ] $1+t^2$
- [ ] $e^t$

> Integration von $1+s$ liefert $t+t^2/2$.

### Existenz und Eindeutigkeit
Warum erscheint bei Picard-Iteration eine Fakultät?

- [ ] Weil der Anfangswert null ist.
- [ ] Weil jede Lösung periodisch ist.
- [ ] Durch wiederholtes Differenzieren einer Matrix.
- [x] Durch wiederholtes Integrieren von Potenzen.

> $\int_0^t s^n\,ds=t^{n+1}/(n+1)$.

### Existenz und Eindeutigkeit
Was zeigt die Konvergenz der Picard-Iterierten?

- [x] Sie liefert eine Lösung der Integralgleichung.
- [ ] Sie verhindert Fortsetzung.
- [ ] Sie liefert stets eine periodische Lösung.
- [ ] Sie beweist, dass $f$ linear ist.

> Der Grenzübergang in der Integralgleichung ergibt eine Lösung.

### Existenz und Eindeutigkeit
Welche Aussage ist falsch?

- [x] Lokale Lipschitz-Stetigkeit erzwingt globale Existenz.
- [ ] Stetigkeit ist eine Voraussetzung des lokalen Satzes.
- [ ] Eine Lösung kann in endlicher Zeit explodieren.
- [ ] Lokale Lipschitz-Stetigkeit hilft bei Eindeutigkeit.

> Das Beispiel $x'=x^2$, $x(0)=1$ explodiert bei $t=1$.

### Existenz und Eindeutigkeit
Für $x'=\sqrt{|x|}$, $x(0)=0$: Was ist möglich?

- [ ] Es gibt nur $x\equiv0$.
- [ ] Es gibt keine Lösung.
- [ ] Es gilt globale Lipschitz-Stetigkeit.
- [x] Es gibt mehrere Lösungen.

> Neben der Nulllösung gibt es beispielsweise $x(t)=0$ für $t\le0$ und $x(t)=t^2/4$ für $t\ge0$.

### Existenz und Eindeutigkeit
Was ist eine maximale Lösung?

- [ ] Eine Lösung mit maximaler Ableitung.
- [ ] Eine Lösung mit größtem Funktionswert.
- [ ] Eine Lösung, die immer unbeschränkt ist.
- [x] Eine Lösung, die nicht auf ein größeres Zeitintervall fortgesetzt werden kann.

> Maximalität bezieht sich auf den Definitionsbereich.

### Existenz und Eindeutigkeit
Was ist das maximale Existenzintervall von $x'=x^2$, $x(0)=1$?

- [ ] $\mathbb R$
- [x] $(-\infty,1)$
- [ ] $(1,\infty)$
- [ ] $(0,1)$

> $x(t)=1/(1-t)$ ist für alle $t<1$ definiert und divergiert bei eins.

### Existenz und Eindeutigkeit
Welche Aussage zur maximalen Lösung von $x'=-x$, $x(0)=1$ stimmt?

- [ ] Sie endet bei $t=1$.
- [ ] Sie endet bei $t=0$.
- [ ] Sie ist nicht eindeutig.
- [x] Sie existiert für alle $t\in\mathbb R$.

> $x=e^{-t}$ ist auf ganz $\mathbb R$ definiert.

### Existenz und Eindeutigkeit
Warum kann ein lokaler Existenzsatz nicht direkt globale Existenz liefern?

- [ ] Weil jede rechte Seite zeitabhängig ist.
- [ ] Weil lokale Lösungen nie fortsetzbar sind.
- [x] Die Lösung könnte in endlicher Zeit unbeschränkt werden oder den Definitionsbereich verlassen.
- [ ] Weil Lipschitz-Stetigkeit Eindeutigkeit verhindert.

> Für globale Existenz braucht man zusätzliche Kontrolle.

### Existenz und Eindeutigkeit
Was bedeutet stetige Abhängigkeit von Anfangswerten?

- [ ] Kleine Änderungen bewirken immer exponentielles Wachstum.
- [ ] Jede Lösung ist konstant.
- [ ] Alle Anfangswerte liefern dieselbe Lösung.
- [x] Kleine Änderungen des Anfangswerts führen auf festen endlichen Zeitintervallen zu kleinen Lösungsänderungen.

> Eine Gronwall-Abschätzung kontrolliert die Differenz.

### Existenz und Eindeutigkeit
Welche Schranke folgt bei Lipschitz-Konstante $L$ für zwei Lösungen?

- [ ] $|x(t)-y(t)|\ge e^{L|t-t_0|}$
- [x] $|x(t)-y(t)|\le e^{L|t-t_0|}|x_0-y_0|$
- [ ] $|x(t)-y(t)|=0$ für alle Anfangswerte
- [ ] $|x(t)-y(t)|\le L$

> Die Abschätzung folgt aus Gronwall.

### Existenz und Eindeutigkeit
Was ist eine parameterabhängige Differentialgleichung?

- [ ] Eine Gleichung mit zwei Zeitvariablen.
- [x] Eine Gleichung $x'=f(t,x,\lambda)$ mit zusätzlichem Parameter $\lambda$.
- [ ] Eine Gleichung nur mit konstanten Lösungen.
- [ ] Eine Gleichung ohne Anfangswert.

> Der Parameter verändert die rechte Seite, ist aber keine zusätzliche Zeitvariable.

### Existenz und Eindeutigkeit
Welche Frage untersucht Parameterabhängigkeit?

- [ ] Ob die Zeit diskret ist.
- [x] Wie sich die Lösung bei Änderung von $\lambda$ verändert.
- [ ] Ob jede Lösung eine Polynomfunktion ist.
- [ ] Ob die Lösung immer positiv bleibt.

> Man betrachtet Lösungen als Funktionen von Zeit und Parameter.

### Existenz und Eindeutigkeit
Für $x'=\lambda x$, $x(0)=1$: Was ist $x(t,\lambda)$?

- [x] $e^{\lambda t}$
- [ ] $e^{t+\lambda}$
- [ ] $1+\lambda t$
- [ ] $\lambda e^t$

> Trennung liefert die Exponentiallösung.

### Existenz und Eindeutigkeit
Was ist $\partial_\lambda x(t,\lambda)$ für $x=e^{\lambda t}$?

- [ ] $e^{\lambda t}$
- [x] $t e^{\lambda t}$
- [ ] $\lambda e^{\lambda t}$
- [ ] $t+e^{\lambda t}$

> Kettenregel nach dem Parameter.

### Existenz und Eindeutigkeit
Ist $f(t,x)=|x|$ global Lipschitz in $x$?

- [ ] Nein, weil $f$ nicht linear ist.
- [ ] Nein, wegen der Ecke bei null.
- [x] Ja, mit Konstante $1$.
- [ ] Nur für $x>0$.

> Die umgekehrte Dreiecksungleichung liefert $||x|-|y||\le|x-y|$.

### Existenz und Eindeutigkeit
Ist $f(t,x)=t^2+x$ auf $[-2,2]\times\mathbb R$ global Lipschitz in $x$?

- [ ] Nur für $x>0$.
- [ ] Nein, wegen $t^2$.
- [x] Ja, mit Konstante $1$.
- [ ] Nein, wegen der Unbeschränktheit von $x$.

> Der Term $t^2$ fällt bei der Differenz in $x$ weg.

### Existenz und Eindeutigkeit
Was passiert mit Eindeutigkeit, wenn $f$ nur stetig ist?

- [x] Sie kann gelten, muss aber nicht.
- [ ] Es gibt keine Lösungen.
- [ ] Sie ist immer garantiert.
- [ ] Sie ist immer ausgeschlossen.

> Stetigkeit allein ist keine allgemeine Eindeutigkeitsbedingung.

### Lipschitz-Bedingungen
Für $f(x)=x^2$ auf $[-1,1]$: Was ist die kleinste Lipschitz-Konstante?

- [ ] $0$
- [ ] $3$
- [ ] $1$
- [x] $2$

> Für $f(x)=kx^2$ ist $f'(x)=2kx$. Auf $[-1,1]$ ist die kleinste Lipschitz-Konstante daher $2k$.

### Picard-Iteration
Für $x'=5t$, $x(0)=2$: Was ist die erste Picard-Iterierte?

- [x] $2+\tfrac{5}{2}t^2$
- [ ] $2+5t^2$
- [ ] $\tfrac{5}{2}t^2$
- [ ] $2+5t$

> Bei $x'=kt$ ergibt die erste Picard-Iteration $x^{(1)}(t)=2+kt^2/2$.

### Maximale Fortsetzung
Für $x'=x^2$, $x(0)=1$: Wann tritt die Vorwärts-Explosion auf?

- [ ] $t=-1$
- [ ] Nie
- [ ] $t=2$
- [x] $t=1$

> Für $x'=kx^2$ gilt $x(t)=1/(1-kt)$; der Nenner verschwindet bei $t=1/k$.

### Parameter und Anfangsdaten
Für $x'=-5x$, $x(0)=\lambda$ mit $\lambda>1$: Was ist die Lösung?

- [ ] $e^{-\lambda t}$
- [x] $\lambda e^{-5t}$
- [ ] $\lambda+5t$
- [ ] $5\lambda e^{-t}$

> Die Lösung hängt linear vom Anfangsparameter $\lambda$ ab.

### Lösungsabschätzungen
Für $x'=x$ mit Anfangswerten $x(0)=1$ und $y(0)=2$: Wie groß ist $|x(1)-y(1)|$?

- [ ] $1$
- [x] $e^1$
- [ ] $e^{-1}$
- [ ] $2e^1$

> Bei $x'=kx$ ist die Differenz zweier Lösungen mit Anfangsdifferenz eins gleich $e^{kt}$.

### Eindeutigkeit und Gegenbeispiele
Für $x'=2\sqrt{|x|}$, $x(0)=0$: Welche Aussage stimmt?

- [ ] Es gibt genau eine Lösung.
- [ ] Es gibt keine Lösung.
- [x] Es gibt die Nulllösung und weitere Lösungen.
- [ ] Alle Lösungen sind negativ.

> Die rechte Seite ist an null nicht lokal Lipschitz; verzögerte Starts sind möglich.

### Existenz auf Intervallen
Für $x'=x/(1+t^2)+1$ mit $x(0)=0$: Was gilt?

- [ ] Eindeutigkeit ist ausgeschlossen.
- [x] Es gibt eine eindeutige Lösung auf ganz $\mathbb R$.
- [ ] Die Lösung explodiert zwingend bei $t=1$.
- [ ] Eine Lösung existiert nur für $t>0$.

> Lineare Gleichung mit auf ganz $\mathbb R$ stetigen Koeffizienten.

### Integralgleichung und Picard-Iteration
Welche Integralgleichung ist äquivalent zu $x'=\cos t$, $x(0)=1$?

- [ ] $x(t)=\int_0^t x(s)\,ds$
- [ ] $x(t)=\cos t$
- [ ] $x(t)=1+\cos t$
- [x] $x(t)=1+\int_0^t\cos s\,ds$

> Allgemein: $x(t)=x_0+\int_{t_0}^t f(s,x(s))\,ds$.

### Integralgleichung und Picard-Iteration
Warum genügt es, für die Integralgleichung nur stetige Funktionen $x$ zu betrachten?

- [ ] Weil die Lösung immer ein Polynom ist.
- [ ] Weil Ableitungen dort nicht vorkommen dürfen.
- [x] Das Integral einer stetigen Funktion ist automatisch differenzierbar (Hauptsatz).
- [ ] Weil $f$ immer konstant ist.

> Aus der Integralgleichung folgt Differenzierbarkeit und $x'=f(t,x)$.

### Integralgleichung und Picard-Iteration
Was ist die erste Picard-Iterierte für $x'=2x$, $x(0)=1$?

- [x] $1+2t$
- [ ] $1+t$
- [ ] $2t$
- [ ] $e^{2t}$

> $x^{(1)}=1+\int_0^t 2\cdot1\,ds$.

### Integralgleichung und Picard-Iteration
Was ist die zweite Picard-Iterierte für $x'=2x$, $x(0)=1$?

- [ ] $1+2t+4t^2$
- [ ] $(1+2t)^2$
- [x] $1+2t+2t^2$
- [ ] $1+2t+t^2$

> $1+\int_0^t2(1+2s)\,ds=1+2t+2t^2$ – die ersten Glieder von $e^{2t}$.

### Integralgleichung und Picard-Iteration
Was ist die erste Picard-Iterierte für $x'=t\,x$, $x(0)=1$?

- [ ] $1+t$
- [x] $1+t^2/2$
- [ ] $1+t^2$
- [ ] $e^{t^2/2}$

> $1+\int_0^t s\cdot1\,ds$.

### Integralgleichung und Picard-Iteration
Was ist die zweite Picard-Iterierte für $x'=1+x^2$, $x(0)=0$?

- [ ] $\tan t$
- [x] $t+t^3/3$
- [ ] $t+t^2/2$
- [ ] $t$

> $x^{(1)}=t$, dann $x^{(2)}=\int_0^t(1+s^2)\,ds$.

### Integralgleichung und Picard-Iteration
Was ist die $N$-te Picard-Iterierte für $x'=x$, $x(0)=1$?

- [ ] $e^{Nt}$
- [ ] $(1+t)^N$
- [x] $\sum_{k=0}^{N}\frac{t^k}{k!}$
- [ ] $1+Nt$

> Jede Iteration fügt das nächste Glied der Exponentialreihe hinzu.

### Integralgleichung und Picard-Iteration
Warum nutzt man Picard-Iterierte in der Praxis kaum als numerisches Verfahren?

- [ ] Sie funktionieren nur bei linearen Gleichungen.
- [ ] Sie liefern keine eindeutige Lösung.
- [x] Die Konvergenz ist dafür zu langsam und jede Iteration erfordert eine Integration.
- [ ] Sie konvergieren nie.

> Theoretisch liefern sie Existenz, praktisch gibt es effizientere numerische Verfahren.

### Integralgleichung und Picard-Iteration
Welche Reihe dient beim Konvergenzbeweis der Picard-Iterierten als Majorante?

- [ ] Die harmonische Reihe
- [x] Die Exponentialreihe
- [ ] Die geometrische Reihe
- [ ] Eine Fourier-Reihe

> Es gilt $|x^{(N+1)}-x^{(N)}|\le ML^N|t-t_0|^{N+1}/(N+1)!$.

### Integralgleichung und Picard-Iteration
Warum bleiben die Picard-Iterierten im Satz von Picard-Lindelöf im Bereich $|x-x_0|\le\beta$?

- [ ] Weil die Lipschitz-Konstante klein ist
- [x] Weil $|x^{(N)}(t)-x_0|\le M|t-t_0|\le M\delta\le\beta$ gilt
- [ ] Weil immer $x_0=0$ ist
- [ ] Weil $f$ linear ist

> Genau dafür wird $\delta\le\beta/M$ gewählt.

### Lipschitz-Bedingungen
Welche Lipschitz-Konstante in $x$ hat $f(t,x)=t\sin x$ für $|t|\le2$?

- [ ] $L=\pi$
- [ ] Es gibt keine.
- [ ] $L=1$
- [x] $L=2$

> $|t\sin x-t\sin y|\le|t|\,|x-y|\le2|x-y|$.

### Lipschitz-Bedingungen
Welche Funktion ist auf $\mathbb R$ lokal, aber nicht global Lipschitz-stetig?

- [ ] $|x|$
- [ ] $3x+1$
- [ ] $\sin x$
- [x] $x^3$

> Die Ableitung $3x^2$ ist auf beschränkten Mengen beschränkt, auf ganz $\mathbb R$ aber nicht.

### Lipschitz-Bedingungen
Ist $f(x)=x^{2/3}$ in einer Umgebung von $x=0$ Lipschitz-stetig?

- [ ] Ja, weil $f$ stetig ist.
- [ ] Ja, mit $L=1$.
- [ ] Ja, weil $f$ überall differenzierbar ist.
- [x] Nein, die Steigung $\frac23x^{-1/3}$ wird bei $0$ unbeschränkt.

> Differenzenquotienten $|f(x)-f(0)|/|x|=|x|^{-1/3}$ sind nicht beschränkt.

### Lipschitz-Bedingungen
Welche Voraussetzung sichert nach dem Skript (Lemma 3.8) auf einem kompakten Quader $Q$ eine Lipschitz-Bedingung?

- [x] Stetige partielle Ableitungen von $f$ nach $x_1,\dots,x_n$
- [ ] Nur Stetigkeit von $f$
- [ ] Monotonie in $t$
- [ ] Beschränktheit von $f$

> Mit dem Mittelwertsatz folgt $L=nM$, wobei $M$ die Ableitungen beschränkt.

### Lipschitz-Bedingungen
Welche kleinste Lipschitz-Konstante hat $f(x)=e^x$ auf $[0,1]$?

- [ ] $e^2$
- [x] $e$
- [ ] $1$
- [ ] $0$

> Das Maximum von $|f'(x)|=e^x$ auf $[0,1]$ ist $e$.

### Lipschitz-Bedingungen
Ist $f(t,x)=\dfrac{x}{1+t^2}$ auf $\mathbb R\times\mathbb R$ global Lipschitz in $x$?

- [ ] Nur für $t>0$.
- [x] Ja, mit $L=1$.
- [ ] Nein, weil $t$ unbeschränkt ist.
- [ ] Ja, mit $L=0$.

> $\frac{1}{1+t^2}\le1$ für alle $t$.

### Lipschitz-Bedingungen
Warum ist $f(t,x)=t\,x$ auf $\mathbb R\times\mathbb R$ nicht global Lipschitz in $x$?

- [ ] Sie ist es doch, mit $L=1$.
- [x] Die Konstante müsste $\ge|t|$ sein, und $|t|$ ist unbeschränkt.
- [ ] Weil $f$ nicht stetig ist.
- [ ] Weil $f$ linear in $x$ ist.

> Die Lipschitz-Konstante darf nicht von $t$ abhängen. Auf beschränkten Zeitintervallen klappt es.

### Lipschitz-Bedingungen
Hängt es von der gewählten Norm im $\mathbb R^n$ ab, ob $f$ eine Lipschitz-Bedingung erfüllt?

- [x] Nein, nur der Wert der Konstanten ändert sich.
- [ ] Ja, man braucht immer die euklidische Norm.
- [ ] Ja, außer für $n=1$.
- [ ] Ja, nur die Maximumnorm ist zulässig.

> Im $\mathbb R^n$ sind alle Normen äquivalent.

### Lipschitz-Bedingungen
Welche Funktion ist auf $[-1,1]\times[-1,1]$ Lipschitz in $x$, obwohl sie in $t$ nicht differenzierbar ist?

- [ ] $f(t,x)=\sqrt{|x|}$
- [x] $f(t,x)=|t|\,x$
- [ ] $f(t,x)=x^{1/3}$
- [ ] $f(t,x)=1/x$

> Für die Lipschitz-Bedingung zählt nur die Abhängigkeit von $x$; hier ist $L=1$.

### Satz von Picard-Lindelöf
Was bedeutet die Größe $\beta/M$ in $\delta=\min(\alpha,\beta/M)$ anschaulich?

- [ ] Den Anfangswert
- [ ] Die Lipschitz-Konstante
- [ ] Die Länge des maximalen Existenzintervalls
- [x] Die Zeit, in der eine Lösung mit Steigung höchstens $M$ den Streifen $|x-x_0|\le\beta$ nicht verlassen kann

> Mit Steigung $\le M$ ändert sich $x$ in der Zeit $\delta$ um höchstens $M\delta\le\beta$.

### Satz von Picard-Lindelöf
Für $f(t,x)=1+x^2$ auf $Q=\{|t|\le1,\ |x|\le1\}$: Welches $\delta$ liefert Picard-Lindelöf?

- [ ] $\delta=1$
- [ ] $\delta=2$
- [ ] $\delta=1/4$
- [x] $\delta=1/2$

> $M=\max|f|=2$, also $\delta=\min(1,1/2)$.

### Satz von Picard-Lindelöf
Für $f(t,x)=t$ auf $Q=\{|t|\le1,\ |x|\le3\}$: Welches $\delta$ liefert Picard-Lindelöf?

- [ ] $\delta=3$
- [ ] $\delta=0$
- [ ] $\delta=1/3$
- [x] $\delta=1$

> $M=1$, also $\delta=\min(1,3)=1$.

### Satz von Picard-Lindelöf
Was garantiert der Satz von Picard-Lindelöf im Allgemeinen nicht?

- [ ] Lokale Existenz einer Lösung
- [x] Existenz auf dem ganzen Intervall $[t_0-\alpha,t_0+\alpha]$
- [ ] Lokale Eindeutigkeit
- [ ] Stetige Differenzierbarkeit der Lösung

> Er liefert nur ein Intervall $I_\delta(t_0)$ mit $\delta\le\alpha$.

### Satz von Picard-Lindelöf
Was setzt der Satz von Peano voraus, und was liefert er?

- [ ] Lipschitz-Stetigkeit; er liefert globale Existenz.
- [x] Nur Stetigkeit von $f$; er liefert lokale Existenz, aber keine Eindeutigkeit.
- [ ] Differenzierbarkeit; er liefert Eindeutigkeit.
- [ ] Linearität; er liefert explizite Lösungen.

> Ohne Lipschitz-Bedingung kann es mehrere Lösungen geben.

### Satz von Picard-Lindelöf
Was bedeutet „lokal“ im Satz von Picard-Lindelöf?

- [ ] Nur kleine Anfangswerte sind erlaubt.
- [x] Existenz und Eindeutigkeit gelten auf einem (eventuell kleinen) Intervall um $t_0$.
- [ ] Die Aussage gilt nur im Punkt $t_0$.
- [ ] Die Lösung existiert für alle $t$.

> Wie weit die Lösung reicht, klärt erst die maximale Fortsetzung.

### Satz von Picard-Lindelöf
Ist die Lösung von $x'=f(t,x)$ mit stetigem $f$ stetig differenzierbar?

- [ ] Nur, wenn $f$ konstant ist.
- [ ] Nur, wenn $f$ linear ist.
- [x] Ja, denn $x'(t)=f(t,x(t))$ ist als Verkettung stetiger Funktionen stetig.
- [ ] Nein, nur stetig.

> Die Ableitung ist durch die stetige rechte Seite gegeben.

### Lemma von Gronwall
Aus $0\le r(t)\le\int_0^t 3\,r(s)\,ds$ für $t\ge0$ folgt nach Gronwall:

- [x] $r\equiv0$
- [ ] $r\equiv3$
- [ ] $r(t)\le e^{3t}$
- [ ] Nichts

> Gronwall mit $\varepsilon=0$ liefert $r(t)\le0\cdot e^{3t}$.

### Lemma von Gronwall
Aus $0\le r(t)\le2+\int_0^t r(s)\,ds$ für $t\ge0$ folgt:

- [ ] $r(t)\le e^{2t}$
- [ ] $r(t)\le2$
- [x] $r(t)\le2e^{t}$
- [ ] $r(t)\le2+t$

> Gronwall mit $\varepsilon=2$, $\delta=1$.

### Lemma von Gronwall
Wie folgt die Eindeutigkeit aus der Abschätzung $|x(t)-y(t)|\le|x_0-y_0|e^{L|t-t_0|}$?

- [ ] Gar nicht – man braucht zusätzlich Linearität.
- [ ] Durch eine Taylor-Entwicklung
- [x] Für $x_0=y_0$ wird die rechte Seite null, also $x=y$.
- [ ] Weil $e^{L|t-t_0|}$ beschränkt ist

> Diese Abschätzung ist das Ergebnis von Lemma 3.3 mit Gronwall.

### Lemma von Gronwall
Zwei Lösungen von $x'=-x$ starten mit Abstand $0{,}1$. Wie groß ist ihr Abstand bei $t=1$?

- [x] $0{,}1\,e^{-1}$
- [ ] $0{,}1$
- [ ] $0$
- [ ] $0{,}1\,e$

> Die Differenz löst selbst $z'=-z$.

### Lemma von Gronwall
Für $x'=\sin x$ (Lipschitz-Konstante $1$) starten zwei Lösungen mit Abstand $0{,}01$. Welche Schranke liefert Gronwall bei $t=2$?

- [x] $0{,}01\,e^{2}$
- [ ] $0{,}02$
- [ ] $0{,}01$
- [ ] $e^{0{,}02}$

> $|x(t)-y(t)|\le|x_0-y_0|e^{L|t-t_0|}$.

### Lemma von Gronwall
Warum ist die Gronwall-Schranke $e^{L|t-t_0|}$ für $x'=-x$ (mit $L=1$) sehr pessimistisch?

- [ ] Die Lipschitz-Konstante ist hier null.
- [ ] Sie ist für diese Gleichung falsch.
- [x] Sie erlaubt Wachstum wie $e^{t}$, tatsächlich schrumpft der Abstand wie $e^{-t}$.
- [ ] Gronwall gilt nur für wachsende Lösungen.

> Die Lipschitz-Konstante sieht nur den Betrag, nicht das Vorzeichen der Kopplung.

### Eindeutigkeit und Gegenbeispiele
Ein Tank leert sich nach $h'=-\sqrt{h}$. Warum kann man aus „der Tank ist jetzt leer“ nicht eindeutig zurückrechnen, wann er leer wurde?

- [ ] Weil die Lösung periodisch ist
- [x] Weil $\sqrt{h}$ bei $h=0$ nicht Lipschitz ist und viele Lösungen in $h=0$ enden
- [ ] Weil die Gleichung linear ist
- [ ] Weil Picard-Lindelöf global gilt

> Jede Lösung $h=(c-t)^2/4$ für $t\le c$ und $h=0$ danach endet in $0$, für jedes $c$.

### Eindeutigkeit und Gegenbeispiele
Welche Funktion löst neben $x\equiv0$ ebenfalls $x'=3x^{2/3}$, $x(0)=0$?

- [ ] $x(t)=t^2$
- [ ] $x(t)=3t$
- [x] $x(t)=t^3$
- [ ] $x(t)=e^{3t}$

> $x'=3t^2$ und $3(t^3)^{2/3}=3t^2$.

### Eindeutigkeit und Gegenbeispiele
Warum widerspricht die Mehrdeutigkeit bei $x'=3x^{2/3}$, $x(0)=0$ nicht dem Satz von Picard-Lindelöf?

- [ ] Weil der Satz Mehrdeutigkeit erlaubt
- [ ] Weil $t^3$ keine Lösung ist
- [x] Weil $3x^{2/3}$ bei $x=0$ keine Lipschitz-Bedingung erfüllt
- [ ] Weil $3x^{2/3}$ nicht stetig ist

> Eine Voraussetzung des Satzes fehlt, also gilt seine Aussage nicht.

### Eindeutigkeit und Gegenbeispiele
Können sich zwei verschiedene Lösungskurven von $x'=\sin(x)+t$ schneiden?

- [x] Nein, wegen der Eindeutigkeit (die rechte Seite ist stetig differenzierbar).
- [ ] Ja, beliebig oft.
- [ ] Nur bei $t=0$.
- [ ] Ja, immer genau einmal.

> Im Schnittpunkt hätten beide denselben Anfangswert.

### Eindeutigkeit und Gegenbeispiele
Kann eine Lösung von $x'=f(x)$ mit stetig differenzierbarem $f$ eine konstante Lösung in endlicher Zeit erreichen?

- [ ] Ja, immer.
- [x] Nein, sonst wäre sie wegen der Eindeutigkeit selbst konstant.
- [ ] Ja, falls $f(0)=0$.
- [ ] Nur bei periodischem $f$.

> Gleichgewichte werden höchstens asymptotisch erreicht.

### Eindeutigkeit und Gegenbeispiele
Was gilt für $x'=|x|$?

- [ ] Die Lösungen explodieren in endlicher Zeit.
- [ ] Es gibt keine Lösung.
- [ ] Wegen des Knicks bei $0$ gibt es keine Eindeutigkeit.
- [x] Jedes Anfangswertproblem hat eine eindeutige, für alle $t$ existierende Lösung.

> $|x|$ ist global Lipschitz mit $L=1$ – ein Knick schadet nicht.

### Eindeutigkeit und Gegenbeispiele
$f$ ist stetig, aber nicht Lipschitz. Folgt daraus, dass das Anfangswertproblem mehrere Lösungen hat?

- [ ] Ja, immer.
- [x] Nein, die Lipschitz-Bedingung ist hinreichend, aber nicht notwendig für Eindeutigkeit.
- [ ] Ja, aber nur in Dimension eins.
- [ ] Ja, wenn $f$ beschränkt ist.

> Ohne Lipschitz-Bedingung ist Eindeutigkeit nur nicht mehr garantiert.

### Maximale Fortsetzung
Welches maximale Existenzintervall hat $x'=1+x^2$, $x(0)=0$?

- [ ] $(0,\pi)$
- [ ] $\mathbb R$
- [ ] $(-1,1)$
- [x] $(-\pi/2,\pi/2)$

> Die Lösung ist $x=\tan t$.

### Maximale Fortsetzung
Welches maximale Existenzintervall hat $x'=-x^2$, $x(0)=-1$?

- [x] $(-\infty,1)$
- [ ] $(1,\infty)$
- [ ] $\mathbb R$
- [ ] $(-1,\infty)$

> $x=1/(t-1)$; für $t\to1^-$ gilt $x\to-\infty$.

### Maximale Fortsetzung
Welches maximale Existenzintervall hat $x'=2t\,x^2$, $x(0)=1$?

- [ ] $\mathbb R$
- [x] $(-1,1)$
- [ ] $(0,1)$
- [ ] $(-\infty,1)$

> Trennung ergibt $x=1/(1-t^2)$.

### Maximale Fortsetzung
Welches maximale Existenzintervall hat $x'=x^3$, $x(0)=1$?

- [ ] $(-1/2,1/2)$
- [ ] $(-\infty,1)$
- [ ] $\mathbb R$
- [x] $(-\infty,1/2)$

> $x^{-2}=1-2t$, also $x=(1-2t)^{-1/2}$.

### Maximale Fortsetzung
Ist das maximale Existenzintervall einer Lösung offen oder abgeschlossen?

- [ ] Abgeschlossen
- [ ] Immer ganz $\mathbb R$
- [x] Offen – an einem Randpunkt im Inneren des Definitionsbereichs könnte man weiter fortsetzen.
- [ ] Immer $[0,\infty)$

> Läge der Endpunkt noch im Definitionsbereich, liefert Picard-Lindelöf dort eine Fortsetzung.

### Maximale Fortsetzung
Was passiert, wenn die Lösung nur bis $t_+<\infty$ existiert und $t\to t_+$?

- [ ] Die Lösung wird periodisch.
- [ ] Nichts Besonderes, man hat nur aufgehört zu rechnen.
- [ ] Die Lösung wird konstant.
- [x] $|x(t)|\to\infty$ oder $(t,x(t))$ nähert sich dem Rand des Definitionsbereichs.

> Das ist die Aussage zum Verhalten am Rand des maximalen Existenzintervalls.

### Maximale Fortsetzung
Warum endet die Lösung von $x'=1/x$, $x(0)=1$ (Definitionsbereich $x>0$) bei $t=-1/2$?

- [ ] Sie endet gar nicht.
- [ ] Sie explodiert dort.
- [ ] $f$ ist bei $t=-1/2$ nicht stetig.
- [x] Die Lösung $\sqrt{1+2t}$ erreicht dort den Rand $x=0$ des Definitionsbereichs.

> Hier endet die Lösung, ohne unbeschränkt zu werden.

### Maximale Fortsetzung
Bei welchem Zeitpunkt explodiert die Lösung von $x'=x^2$ mit $x(0)=x_0>0$?

- [ ] $t=x_0$
- [x] $t=1/x_0$
- [ ] $t=-1/x_0$
- [ ] Nie

> $x(t)=1/(1/x_0-t)$: Je größer der Anfangswert, desto früher die Explosion.

### Maximale Fortsetzung
Wie verhält sich die Lösung von $x'=x^2$, $x(0)=-1$ für $t\to\infty$?

- [ ] Sie bleibt konstant $-1$.
- [x] Sie existiert für alle $t\ge0$ und strebt gegen $0$.
- [ ] Sie explodiert bei $t=1$.
- [ ] Sie wächst unbeschränkt.

> $x(t)=-1/(1+t)$; explodiert wird nur rückwärts bei $t=-1$.

### Maximale Fortsetzung
Welche Gleichung hat für jeden Anfangswert eine für alle $t$ existierende Lösung?

- [ ] $x'=e^x$
- [x] $x'=\sin x$
- [ ] $x'=x^2$
- [ ] $x'=x^3$

> $\sin x$ ist beschränkt und global Lipschitz; die anderen wachsen überlinear.

### Maximale Fortsetzung
Ein Wachstumsmodell lautet $x'=x^{3/2}$ mit $x(0)>0$. Was folgt?

- [ ] Periodische Schwankungen
- [ ] Konvergenz gegen eine Kapazität
- [ ] Exponentielles Wachstum für alle Zeiten
- [x] Die Population explodiert in endlicher Zeit; das Modell taugt nur für begrenzte Zeiträume.

> $(x^{-1/2})'=-\tfrac12$: $x^{-1/2}$ fällt linear und erreicht null in endlicher Zeit.

### Maximale Fortsetzung
Ein Stein fällt mit Luftwiderstand: $v'=g-kv^2$, $v(0)=0$ ($g,k>0$). Existiert die Lösung für alle $t\ge0$?

- [ ] Nein, sie explodiert wegen $v^2$.
- [ ] Nein, die rechte Seite ist nicht Lipschitz.
- [x] Ja, sie bleibt zwischen $0$ und $\sqrt{g/k}$ und kann nicht explodieren.
- [ ] Nur bis $t=1$.

> $v=\sqrt{g/k}$ ist ein Gleichgewicht, das nicht überschritten werden kann (Endgeschwindigkeit).

### Maximale Fortsetzung
Welches maximale Existenzintervall hat $x'=\dfrac{1}{1-t}$, $x(0)=0$ (definiert für $t<1$)?

- [ ] $\mathbb R$
- [ ] $(-1,1)$
- [ ] $(0,1)$
- [x] $(-\infty,1)$

> $x=-\ln(1-t)$ wird für $t\to1^-$ unbeschränkt.

### Maximale Fortsetzung
Warum existieren Lösungen von $x'=a(t)x+b(t)$ mit auf $\mathbb R$ stetigen $a,b$ für alle $t$?

- [ ] Weil die Lösung konstant ist
- [ ] Das gilt nicht.
- [x] Die rechte Seite wächst höchstens linear in $x$, eine Explosion ist ausgeschlossen.
- [ ] Weil $a$ und $b$ beschränkt sein müssen

> Die Lösung ist explizit über Variation der Konstanten auf ganz $\mathbb R$ gegeben.

### Parameterabhängige Probleme
Was bedeutet „korrekt gestellt“ für ein Anfangswertproblem?

- [x] Es ist lösbar, die Lösung ist eindeutig und hängt stetig von den Daten ab.
- [ ] Es ist explizit lösbar.
- [ ] Es ist nur lösbar.
- [ ] Es ist lösbar und linear.

> Das sind die drei Eigenschaften aus Abschnitt 3.3.

### Parameterabhängige Probleme
Warum ist stetige Abhängigkeit von den Daten in Anwendungen so wichtig?

- [ ] Damit die Lösung periodisch wird
- [ ] Weil Parameter nie variieren
- [ ] Weil Computer exakt rechnen
- [x] Messdaten sind ungenau; kleine Fehler sollen nur kleine Änderungen der Lösung bewirken.

> Sonst hätte die Modelllösung keinen verlässlichen Bezug zur Realität.

### Parameterabhängige Probleme
Für $x'=\mu x$, $x(0)=1$: Wie verhält sich $x(1,\mu)$ für $\mu\to0$?

- [x] Es strebt gegen $1$.
- [ ] Es springt.
- [ ] Es strebt gegen unendlich.
- [ ] Es strebt gegen $0$.

> $x(1,\mu)=e^{\mu}$ hängt stetig von $\mu$ ab.

### Parameterabhängige Probleme
Ein Getränk kühlt nach $T'=-k\,(T-20)$, $T(0)=90$. Was ist $\partial T/\partial k$ bei fester Zeit $t$?

- [ ] $-70\,e^{-kt}$
- [x] $-70\,t\,e^{-kt}$
- [ ] $70\,k\,t\,e^{-kt}$
- [ ] $0$

> $T=20+70e^{-kt}$; Ableitung nach dem Parameter $k$.

### Parameterabhängige Probleme
Für $x'=\mu x^2$, $x(0)=1$, $\mu>0$: Wie hängt der Explosionszeitpunkt von $\mu$ ab?

- [x] $t^*=1/\mu$ – er wird kleiner, je größer $\mu$ ist.
- [ ] $t^*=\mu$
- [ ] Es gibt keine Explosion.
- [ ] $t^*=1$ unabhängig von $\mu$

> $x=1/(1-\mu t)$.

### Parameterabhängige Probleme
Welche Unabhängigkeit verlangt Satz 3.17 von der Lipschitz-Konstanten $L$?

- [x] $L$ darf weder von $x,y,t$ noch vom Parameter $\mu$ abhängen.
- [ ] Eine Lipschitz-Bedingung ist nicht nötig.
- [ ] $L$ darf nur von $t$ abhängen.
- [ ] $L$ muss von $\mu$ abhängen.

> Die Lipschitz-Bedingung muss gleichmäßig im Parameter gelten.

## Welt 3 – Lineare Differentialgleichungssysteme (Kapitel 4)

### Struktur linearer Systeme
Welche Form hat ein lineares inhomogenes System?

- [ ] $x'=A(t)x^2+b(t)$
- [x] $x'=A(t)x+b(t)$
- [ ] $x'=A(t)/x$
- [ ] $x'=\sin(x)+b(t)$

> Die Zustandsvariable tritt linear auf.

### Struktur linearer Systeme
Welche Aussage gilt bei stetigen $A,b$ auf einem Intervall $I$?

- [ ] Nur lokale Lösungen sind möglich.
- [ ] Eindeutigkeit gilt nur für diagonale Matrizen.
- [ ] Jede Lösung ist konstant.
- [x] Jedes Anfangswertproblem besitzt genau eine Lösung auf ganz $I$.

> Für lineare Systeme mit stetigen Koeffizienten gilt globale Existenz auf $I$.

### Struktur linearer Systeme
Sind $u,v$ Lösungen von $x'=A(t)x$, so ist für beliebige solche Lösungen auch ...

- [x] $2u-3v$ eine Lösung.
- [ ] $u^2$ immer eine Lösung.
- [ ] $u\cdot v$ immer eine Lösung.
- [ ] $u+v+t w$ für jeden festen Vektor $w\ne0$ immer eine Lösung.

> Das Superpositionsprinzip gilt für homogene lineare Systeme.

### Struktur linearer Systeme
Was ist eine Fundamentalmatrix?

- [x] Eine Matrix, deren Spalten ein Fundamentalsystem von Lösungen bilden.
- [ ] Die Nullmatrix.
- [ ] Eine beliebige konstante Matrix.
- [ ] Die Matrix $A(t)$ selbst.

> Die Spalten müssen linear unabhängige Lösungen sein.

### Struktur linearer Systeme
Welche Bedingung kennzeichnet eine Fundamentalmatrix $X(t)$?

- [x] $\det X(t)\ne0$ für alle $t$ im Intervall.
- [ ] $X'(t)=0$ immer.
- [ ] $\det X(t)=0$ für alle $t$.
- [ ] $X(t)=A(t)$.

> Eine Fundamentalmatrix ist an jedem Zeitpunkt invertierbar.

### Struktur linearer Systeme
Wie erhält man aus einer Fundamentalmatrix alle homogenen Lösungen?

- [ ] $x(t)=X(t)^{-1}$ ausschließlich.
- [x] $x(t)=X(t)c$ mit konstantem Vektor $c$.
- [ ] $x(t)=X(t)t$ ausschließlich.
- [ ] $x(t)=A(t)c$ immer.

> Die Spalten von $X$ bilden eine Basis des Lösungsraums.

### Struktur linearer Systeme
Wie groß ist der Lösungsraum eines homogenen Systems mit $n$ Zustandsgrößen?

- [x] Er hat Dimension $n$.
- [ ] Er hat immer Dimension eins.
- [ ] Er hat Dimension $n^2$.
- [ ] Er ist stets trivial.

> Die Anfangswertabbildung ist ein linearer Isomorphismus nach $\mathbb R^n$.

### Struktur linearer Systeme
Welche Aussage gilt für zwei Fundamentalmatrizen $X,Y$ desselben Systems?

- [ ] $Y(t)=X(t)^2$ immer.
- [ ] $Y(t)=X(t)+tI$ immer.
- [x] $Y(t)=X(t)C$ mit konstanter invertierbarer Matrix $C$.
- [ ] $Y(t)=A(t)X(t)$ immer.

> Jede Spalte von $Y$ ist eine feste Linearkombination der Spalten von $X$.

### Struktur linearer Systeme
Was ist eine normierte Fundamentalmatrix am Zeitpunkt $t_0$?

- [x] Eine Fundamentalmatrix mit $X(t_0)=I$.
- [ ] Eine Matrix mit $X(t_0)=0$.
- [ ] Eine Matrix mit $X'(t_0)=0$ immer.
- [ ] Eine Matrix mit $\det X(t_0)=0$.

> Die Spalten haben als Anfangswerte die Einheitsvektoren.

### Struktur linearer Systeme
Was ist die Lösung von $x'=0$ mit $x(0)=x_0$?

- [ ] $x(t)=0$ unabhängig von $x_0$
- [ ] $x(t)=e^t x_0$
- [ ] $x(t)=t x_0$
- [x] $x(t)=x_0$

> Jede Komponente hat verschwindende Ableitung.

### Struktur linearer Systeme
Welche Gleichung erfüllt die Fundamentalmatrix?

- [x] $X'(t)=A(t)X(t)$
- [ ] $X'(t)=A(t)+X(t)$
- [ ] $X'(t)=0$ immer
- [ ] $X'(t)=X(t)A(t)$ stets

> Jede Spalte löst $x'=A(t)x$.

### Struktur linearer Systeme
Was folgt, wenn zwei Lösungen eines linearen Systems zur selben Zeit übereinstimmen?

- [ ] Sie sind beide null.
- [ ] Sie müssen periodisch sein.
- [x] Sie stimmen auf dem gesamten Intervall überein.
- [ ] Sie unterscheiden sich später.

> Eindeutigkeit des Anfangswertproblems.

### Struktur linearer Systeme
Was ist die homogene Gleichung zu $x'=Ax+b$?

- [x] $x'=Ax$
- [ ] $x'=0$
- [ ] $x'=b$
- [ ] $x'=Ax-b$

> Man setzt den Störterm $b$ gleich null.

### Struktur linearer Systeme
Was gilt für die Differenz zweier Lösungen von $x'=Ax+b$?

- [x] Sie löst $z'=Az$.
- [ ] Sie ist immer konstant.
- [ ] Sie ist immer null.
- [ ] Sie löst $z'=Az+b$.

> Die inhomogenen Terme heben sich bei der Subtraktion auf.

### Struktur linearer Systeme
Was gilt für eine partikuläre Lösung $x_p$ eines inhomogenen Systems?

- [ ] Alle Lösungen sind $x_p X$.
- [ ] Alle Lösungen sind $Xc$ ohne Zusatz.
- [x] Alle Lösungen sind $x_p+Xc$.
- [ ] Alle Lösungen sind konstant.

> Allgemeine Lösung = partikuläre + homogene Lösung.

### Struktur linearer Systeme
Welche Formel ist die Variation der Konstanten bei $X(t_0)=I$?

- [ ] $x(t)=\int_{t_0}^t b(s)\,ds$
- [x] $x(t)=X(t)\left(x_0+\int_{t_0}^t X(s)^{-1}b(s)\,ds\right)$
- [ ] $x(t)=X(t)^{-1}x_0$
- [ ] $x(t)=X(t)x_0+b(t)$

> Setze $x=Xc(t)$ und löse $c'=X^{-1}b$.

### Struktur linearer Systeme
Was ist die Definition von $e^{tA}$?

- [ ] $I+tA$ für jedes $A$
- [ ] $e^t A$
- [ ] $A^t$
- [x] $\sum_{k=0}^{\infty}\frac{t^kA^k}{k!}$

> Das Matrixexponential ist durch eine absolut konvergente Potenzreihe definiert.

### Struktur linearer Systeme
Was gilt für $A=0$?

- [ ] $e^{tA}=0$
- [x] $e^{tA}=I$
- [ ] $e^{tA}=A$
- [ ] $e^{tA}=tI$

> Alle Potenzen mit positivem Exponenten verschwinden.

### Struktur linearer Systeme
Was gilt für konstantes $A$?

- [ ] $\frac{d}{dt}e^{tA}=e^{tA}$
- [x] $\frac{d}{dt}e^{tA}=Ae^{tA}$
- [ ] $\frac{d}{dt}e^{tA}=0$
- [ ] $\frac{d}{dt}e^{tA}=A$

> Termweises Differenzieren der Potenzreihe.

### Struktur linearer Systeme
Was ist $e^{tI}$?

- [x] $e^t I$
- [ ] $tI$
- [ ] $I$
- [ ] $e^t+I$

> Da $I^k=I$ für $k\ge1$, ergibt sich die gewöhnliche Exponentialreihe.

### Struktur linearer Systeme
Was gilt für $e^{(s+t)A}$ bei fester Matrix $A$?

- [ ] $e^{sA}+e^{tA}$
- [ ] $e^{sA}e^{tA}+I$
- [ ] $e^{stA}$
- [x] $e^{sA}e^{tA}$

> Die beiden Matrizen $sA$ und $tA$ kommutieren.

### Struktur linearer Systeme
Ist allgemein $e^{A+B}=e^Ae^B$?

- [ ] Nein, auch nicht bei kommutierenden Matrizen.
- [x] Nein, nicht ohne zusätzliche Kommutativität.
- [ ] Nur wenn $A=B=0$.
- [ ] Ja, für alle Matrizen.

> Die Produktformel gilt beispielsweise bei $AB=BA$.

### Struktur linearer Systeme
Welche Aussage ist für $A=\operatorname{diag}(1,-2)$ richtig?

- [x] $e^{tA}=\operatorname{diag}(e^t,e^{-2t})$
- [ ] $e^{tA}=A$
- [ ] $e^{tA}=e^t I$
- [ ] $e^{tA}=\operatorname{diag}(t,-2t)$

> Die Exponentialfunktion wirkt bei Diagonalmatrizen eintragsweise.

### Struktur linearer Systeme
Welche Lösung gehört zu $x'=Ax$, $x(0)=x_0$ bei konstantem $A$?

- [ ] $x(t)=Ax_0$
- [ ] $x(t)=e^t x_0$ für jedes $A$
- [ ] $x(t)=tAx_0$
- [x] $x(t)=e^{tA}x_0$

> Das Matrixexponential ist die normierte Fundamentalmatrix.

### Struktur linearer Systeme
Welche Beziehung gilt für einen Eigenvektor $v$ mit $Av=\lambda v$?

- [ ] $e^{tA}v=0$
- [x] $e^{tA}v=e^{\lambda t}v$
- [ ] $e^{tA}v=\lambda e^t v$
- [ ] $e^{tA}v=t\lambda v$

> Jede Potenz erfüllt $A^kv=\lambda^kv$.

### Struktur linearer Systeme
Was ist bei $A=\operatorname{diag}(-1,-3)$ das Langzeitverhalten aller Lösungen?

- [ ] Alle Lösungen sind periodisch.
- [ ] Alle Lösungen sind konstant.
- [ ] Alle Lösungen wachsen unbeschränkt.
- [x] Alle Lösungen gehen für $t\to\infty$ gegen null.

> Beide Diagonaleinträge sind negativ.

### Struktur linearer Systeme
Welche Eigenwerte besitzt $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$?

- [ ] $\pm1$
- [ ] $1$ doppelt
- [x] $\pm i$
- [ ] $0$ doppelt

> Das charakteristische Polynom ist $\lambda^2+1$.

### Struktur linearer Systeme
Welche Bewegung beschreibt $x'=Ax$ mit $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$?

- [ ] Eine Bewegung nur auf einer Geraden.
- [ ] Exponentielles Wachstum in jeder Richtung.
- [ ] Eine konstante Lösung für alle Anfangswerte.
- [x] Eine gleichförmige Rotation.

> Die Matrix ist schiefsymmetrisch und erzeugt eine Drehung.

### Struktur linearer Systeme
Für $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$: Was ist $A^2$?

- [ ] $A$
- [x] $0$
- [ ] $2A$
- [ ] $I$

> Die Matrix ist nilpotent vom Index zwei.

### Struktur linearer Systeme
Für dieselbe Matrix $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$: Was ist $e^{tA}$?

- [ ] $tA$
- [ ] $I+tA+t^2I$
- [ ] $e^t I$
- [x] $I+tA$

> Da $A^2=0$, bricht die Potenzreihe nach dem linearen Term ab.

### Struktur linearer Systeme
Warum genügt Diagonalisieren oft zur Lösung eines Systems?

- [x] In Eigenvektorkoordinaten entkoppeln die Gleichungen.
- [ ] Weil jede Eigenzahl null ist.
- [ ] Weil der Anfangswert entfällt.
- [ ] Weil jede Matrix diagonalisierbar ist.

> Für $A=SDS^{-1}$ gilt $e^{tA}=Se^{tD}S^{-1}$.

### Struktur linearer Systeme
Was gilt für eine Matrix mit zwei verschiedenen reellen Eigenwerten in Dimension zwei?

- [ ] Sie hat nur einen Eigenvektor.
- [x] Sie ist über $\mathbb R$ diagonalisierbar.
- [ ] Sie ist zwingend die Nullmatrix.
- [ ] Sie ist zwingend symmetrisch.

> Eigenvektoren zu verschiedenen Eigenwerten sind linear unabhängig.

### Struktur linearer Systeme
Welche Zeitfaktoren treten bei einem Jordanblock der Größe zwei zum Eigenwert $\lambda$ auf?

- [ ] $1$ und $t^2$ immer
- [ ] $e^{\lambda t}$ und $e^{2\lambda t}$
- [x] $e^{\lambda t}$ und $t e^{\lambda t}$
- [ ] $\sin t$ und $\cos t$ immer

> Der nilpotente Anteil erzeugt einen zusätzlichen Faktor $t$.

### Struktur linearer Systeme
Wie bestimmt man $c$ aus der Anfangsbedingung $X(t_0)c=x_0$?

- [x] $c=X(t_0)^{-1}x_0$
- [ ] $c=0$
- [ ] $c=x_0+X(t_0)$
- [ ] $c=X(t_0)x_0$

> Die Fundamentalmatrix ist invertierbar.

### Struktur linearer Systeme
Was gilt für $\det e^{tA}$?

- [ ] $t\det A$
- [ ] $e^{t\det A}$
- [x] $e^{t\operatorname{tr}A}$
- [ ] $\det A$

> Determinante des Matrixexponentials ist Exponentialfunktion der Spur.

### Struktur linearer Systeme
Kann eine Fundamentalmatrix zu einem endlichen Zeitpunkt singulär werden?

- [ ] Ja, wenn $A$ konstant ist.
- [ ] Ja, sobald $t>0$.
- [x] Nein, solange $A$ auf dem betrachteten Intervall stetig ist.
- [ ] Ja, bei jeder negativen Eigenzahl.

> Eindeutigkeit verhindert das Zusammenfallen unabhängiger Lösungen.

### Struktur linearer Systeme
Was bedeutet $\operatorname{tr}A$?

- [x] Die Summe der Diagonaleinträge.
- [ ] Das Produkt der Eigenwerte.
- [ ] Die größte Norm von $A$.
- [ ] Die Determinante von $A$.

> Die Spur ist die Summe der Diagonalelemente.

### Struktur linearer Systeme
Welche Matrix ist eine Fundamentalmatrix für das zweidimensionale System $x'=0$?

- [ ] $X(t)=tI$ auf ganz $\mathbb R$
- [x] $X(t)=I$
- [ ] $X(t)=0$
- [ ] $X(t)=\begin{pmatrix}1&1\\1&1\end{pmatrix}$

> Die Einheitsmatrix hat konstante unabhängige Spalten.

### Struktur linearer Systeme
Welches Modell ist ein lineares System?

- [ ] $u'=\sin u$, $v'=u$
- [ ] $u'=uv$, $v'=-v$
- [x] $u'=-u+v$, $v'=-2v$
- [ ] $u'=u^2+v$, $v'=v$

> Alle Zustandsvariablen treten nur linear auf.

### Struktur linearer Systeme
Wie wird $y''+3y'+2y=0$ zum System erster Ordnung?

- [ ] $u'=u$, $v'=-3v$
- [ ] $u'=v$, $v'=2u+3v$
- [ ] $u'=v$, $v'=-2v$
- [x] $u'=v$, $v'=-2u-3v$

> Setze $u=y$, $v=y'$.

### Struktur linearer Systeme
Was ist das Gleichgewicht von $x'=Ax+b$ bei invertierbarem $A$?

- [ ] $x_*=b$
- [ ] $x_*=A^{-1}b$
- [ ] $x_*=0$ immer
- [x] $x_*=-A^{-1}b$

> Im Gleichgewicht gilt $Ax_*+b=0$.

### Struktur linearer Systeme
Welche Formel gilt für konstantes $A$ und konstantes $b$ mit $x(0)=0$?

- [ ] $x(t)=e^{tA}b$
- [ ] $x(t)=A^{-1}b$ immer
- [x] $x(t)=\int_0^t e^{(t-s)A}b\,ds$
- [ ] $x(t)=tb$ immer

> Duhamel-Formel bzw. Variation der Konstanten.

### Struktur linearer Systeme
Was gilt für eine Lösung von $x'=Ax+b(t)$ bei $x(0)=x_0$ und konstanter Matrix $A$?

- [x] $x(t)=e^{tA}x_0+\int_0^t e^{(t-s)A}b(s)\,ds$
- [ ] $x(t)=e^{tA}x_0$ immer
- [ ] $x(t)=x_0+Ab(t)$
- [ ] $x(t)=e^{tA}(x_0+b(t))$

> Die inhomogene Antwort wird über die Vergangenheit integriert.

### Struktur linearer Systeme
Was ist $e^{tA}$ für $A=\operatorname{diag}(0,2)$?

- [ ] $e^{2t}I$
- [ ] $\operatorname{diag}(0,e^{2t})$
- [ ] $\operatorname{diag}(t,2t)$
- [x] $\operatorname{diag}(1,e^{2t})$

> Der Eigenwert null erzeugt den Faktor eins.

### Struktur linearer Systeme
Für $x_1'=x_1$, $x_2'=-x_2$ mit $x_1(0)=x_2(0)=1$: Was gilt für $t>0$?

- [ ] Beide Komponenten wachsen.
- [ ] Beide Komponenten klingen ab.
- [ ] Beide Komponenten sind konstant.
- [x] Die erste Komponente wächst, die zweite klingt ab.

> Lösungen: $x_1=c_1e^t$, $x_2=c_2e^{-t}$.

### Struktur linearer Systeme
Welche Rolle haben Eigenwerte bei konstanten linearen Systemen?

- [x] Sie bestimmen exponentielle Zeitfaktoren.
- [ ] Sie ersetzen die rechte Seite $b(t)$.
- [ ] Sie sind immer positiv.
- [ ] Sie sind immer die Anfangswerte.

> Für Eigenvektoren gilt $e^{tA}v=e^{\lambda t}v$.

### Struktur linearer Systeme
Welche Aussage gilt für $A(t)$ zeitabhängig?

- [ ] Es gibt nur die Nulllösung.
- [x] Im Allgemeinen ist $X(t)$ nicht einfach $e^{\int_{t_0}^t A(s)ds}$.
- [ ] Es gibt nie eine Fundamentalmatrix.
- [ ] Die Formel mit dem Exponentialintegral gilt immer.

> Nicht kommutierende Matrizen zu verschiedenen Zeiten verhindern die einfache Exponentialformel.

### Struktur linearer Systeme
Was beschreibt ein Zweikammer-Modell mit Austausch?

- [x] Ein gekoppeltes lineares System, wenn Flüsse proportional zu Mengen sind.
- [ ] Immer ein nichtlineares Riccati-System.
- [ ] Eine partielle Differentialgleichung ohne Zeit.
- [ ] Immer eine skalare Gleichung ohne Kopplung.

> Proportionale Austauschflüsse führen zu Matrixkoeffizienten.

### Struktur linearer Systeme
Welche Aussage über die Gesamtmenge bei reinem Austausch zweier Kammern gilt?

- [ ] Sie wird nach einer Sekunde null.
- [ ] Sie wächst immer exponentiell.
- [ ] Sie hängt nicht von den Anfangswerten ab.
- [x] Sie bleibt konstant, wenn kein Zu- oder Abfluss nach außen besteht.

> Interne Flüsse heben sich in der Summe der beiden Gleichungen auf.

### Diagonal-Systeme
Für $x'=\operatorname{diag}(-1,2)x$ und $x(0)=(1,1)^T$: Welche Lösung stimmt?

- [ ] $(-t,2t)^T$
- [ ] $(e^{-t},e^{-2t})^T$
- [ ] $(e^{t},e^{-2t})^T$
- [x] $(e^{-t},e^{2t})^T$

> Jede Komponente löst ihre eigene skalare lineare Gleichung.

### Eigenwerte erkennen
Welche Eigenwerte besitzt $A=\begin{pmatrix}2&0\\0&-3\end{pmatrix}$?

- [ ] $-2$ und $-3$
- [x] $2$ und $-3$
- [ ] $2$ und $3$
- [ ] $6$ und $0$

> Bei einer Diagonalmatrix sind die Diagonaleinträge Eigenwerte.

### Gleichgewichte
Eine skalare Gleichung lautet $x'=-x+2$. Wo liegt das Gleichgewicht?

- [ ] $x_*=-1$
- [ ] $x_*=0$
- [ ] $x_*=3$
- [x] $x_*=2$

> Bei $x'=-kx+2k$ ergibt $0=-kx+2k$ den stationären Wert $x_*=2$.

### Matrixexponential
Für $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$: Was ist $e^{tA}$?

- [ ] $\begin{pmatrix}1&1\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}e^t&t\\0&e^t\end{pmatrix}$
- [ ] $\begin{pmatrix}0&t\\0&0\end{pmatrix}$
- [x] $\begin{pmatrix}1&t\\0&1\end{pmatrix}$

> Da $A^2=0$, ist $e^{tA}=I+tA$.

### Modellierung: gekoppelte Prozesse
Zwei Stoffmengen erfüllen $u'=-u+v$ und $v'=u-v$. Welche Größe bleibt erhalten?

- [x] $u+v$
- [ ] $u^2+v$
- [ ] $uv$
- [ ] $u-v$

> Addiert man beide Gleichungen, erhält man $(u+v)'=0$.

### Inhomogene Systeme
Für $x'=-x+1$ und $x(0)=0$: Welche Lösung gilt?

- [ ] $x(t)=e^{-t}$
- [ ] $x(t)=t$
- [x] $x(t)=1-e^{-t}$
- [ ] $x(t)=1+e^{-t}$

> Eine konstante partikuläre Lösung ist eins; der homogene Anteil korrigiert den Anfangswert.

### Struktur der Lösung
Warum existieren Lösungen von $x'=A(t)x+b(t)$ mit stetigen $A,b$ auf dem ganzen Intervall $I$ – anders als bei $x'=x^2$?

- [ ] Weil $b=0$ gelten muss
- [ ] Weil $A$ konstant sein muss
- [ ] Weil nur $n=1$ erlaubt ist
- [x] Die rechte Seite wächst höchstens linear in $x$, eine Explosion kann nicht auftreten.

> Das ist Satz 4.1: globale Existenz und Eindeutigkeit für lineare Systeme.

### Struktur der Lösung
Welche Größe hat eine Fundamentalmatrix eines Systems mit drei Zustandsgrößen?

- [ ] $9\times9$
- [ ] $1\times3$
- [ ] $3\times1$
- [x] $3\times3$

> Drei linear unabhängige Lösungen mit je drei Komponenten bilden die Spalten.

### Struktur der Lösung
Die Lösung $x_1$ löst $x'=Ax+b_1$, die Lösung $x_2$ löst $x'=Ax+b_2$. Welche Gleichung löst $x_1+x_2$?

- [ ] $x'=Ax$
- [x] $x'=Ax+b_1+b_2$
- [ ] $x'=2Ax+b_1+b_2$
- [ ] $x'=Ax+b_1$

> Superposition der Störterme.

### Struktur der Lösung
Wie wird $x''+x=\sin t$ als System erster Ordnung geschrieben?

- [x] $x'=\begin{pmatrix}0&1\\-1&0\end{pmatrix}x+\begin{pmatrix}0\\ \sin t\end{pmatrix}$
- [ ] $x'=\begin{pmatrix}0&-1\\1&0\end{pmatrix}x$
- [ ] $x'=\begin{pmatrix}0&1\\1&0\end{pmatrix}x+\begin{pmatrix}\sin t\\0\end{pmatrix}$
- [ ] $x'=\begin{pmatrix}1&0\\0&1\end{pmatrix}x$

> Mit $x_1=x$, $x_2=x'$: $x_1'=x_2$, $x_2'=-x_1+\sin t$.

### Wronski-Determinante
Für die Lösungen $x_1=(e^t,0)^T$ und $x_2=(0,e^{2t})^T$ eines Systems: Was ist die Wronski-Determinante?

- [ ] $e^t$
- [ ] $e^{2t}$
- [ ] $0$
- [x] $e^{3t}$

> $W=\det\begin{pmatrix}e^t&0\\0&e^{2t}\end{pmatrix}$ – sie verschwindet nie, also liegt ein Fundamentalsystem vor.

### Wronski-Determinante
Für $x'=Ax$ mit konstanter Matrix, $\operatorname{tr}A=-2$ und $W(0)=5$: Was ist $W(t)$?

- [ ] $5$
- [x] $5e^{-2t}$
- [ ] $5-2t$
- [ ] $5e^{2t}$

> Abelsche Formel: $W(t)=W(t_0)\exp\int_{t_0}^t\operatorname{tr}A(s)\,ds$.

### Wronski-Determinante
Für $x'=A(t)x$ gilt $\operatorname{tr}A(t)=2t$ und $W(0)=1$. Was ist $W(t)$?

- [ ] $e^{2t}$
- [ ] $1+t^2$
- [ ] $2t$
- [x] $e^{t^2}$

> $\int_0^t 2s\,ds=t^2$.

### Wronski-Determinante
Die Wronski-Determinante zweier Lösungen ist bei $t=0$ gleich null. Was folgt?

- [ ] Die Lösungen sind nur bei $t=0$ abhängig.
- [ ] Später können sie unabhängig werden.
- [ ] Nichts.
- [x] Sie ist überall null; die Lösungen sind linear abhängig.

> Satz 4.4: verschwindet $W$ an einer Stelle, dann überall.

### Wronski-Determinante
Die Vektorfunktionen $(1,t)^T$ und $(t,t^2)^T$ sind linear unabhängig, ihre Determinante ist aber überall null. Was folgt?

- [x] Sie können nicht beide Lösungen desselben Systems $x'=A(t)x$ mit stetigem $A$ sein.
- [ ] Satz 4.4 ist falsch.
- [ ] Sie sind doch linear abhängig.
- [ ] Sie bilden ein Fundamentalsystem.

> Für Lösungen eines linearen Systems wäre $W\equiv0$ gleichbedeutend mit linearer Abhängigkeit.

### Wronski-Determinante
Was ist $\operatorname{tr}\begin{pmatrix}1&2\\3&4\end{pmatrix}$?

- [ ] $10$
- [ ] $4$
- [ ] $-2$
- [x] $5$

> Summe der Diagonaleinträge; $-2$ wäre die Determinante.

### Wronski-Determinante
Ist $X(t)=\begin{pmatrix}e^t&e^{t}\\0&0\end{pmatrix}$ eine Fundamentalmatrix eines $2\times2$-Systems?

- [x] Nein, ihre Spalten sind linear abhängig ($\det X=0$).
- [ ] Nur bei $t=0$.
- [ ] Ja, weil die Einträge Lösungen sind.
- [ ] Ja, für $t>0$.

> Eine Fundamentalmatrix ist für alle $t$ invertierbar.

### Inhomogene Systeme
Welche Gleichung erfüllt $C(t)$ beim Ansatz $x(t)=X(t)C(t)$ für $x'=A(t)x+b(t)$?

- [ ] $C(t)=X(t)^{-1}$
- [ ] $C'(t)=A(t)C(t)$
- [x] $X(t)\,C'(t)=b(t)$
- [ ] $X'(t)C(t)=b(t)$

> Wegen $X'=AX$ heben sich die Terme mit $C$ auf – wie im skalaren Fall.

### Inhomogene Systeme
Welches Gleichgewicht hat $x'=Ax+b$ mit $A=\operatorname{diag}(-1,-2)$ und $b=(1,4)^T$?

- [ ] $x_*=(0,0)^T$
- [ ] $x_*=(1,4)^T$
- [x] $x_*=(1,2)^T$
- [ ] $x_*=(-1,-2)^T$

> $Ax_*+b=0$ komponentenweise: $-x_1+1=0$, $-2x_2+4=0$.

### Inhomogene Systeme
Wie lautet die Lösung von $x'=Ax+b$ mit konstantem $b$, invertierbarem $A$ und Gleichgewicht $x_*$?

- [ ] $x(t)=e^{tA}x_*$
- [ ] $x(t)=e^{tA}x_0+b$
- [ ] $x(t)=x_*$
- [x] $x(t)=x_*+e^{tA}(x_0-x_*)$

> $z=x-x_*$ löst die homogene Gleichung $z'=Az$.

### Matrixexponential
Für die $3\times3$-Matrix $N$ mit Einsen auf der ersten Nebendiagonale gilt $N^3=0$. Was ist $e^{tN}$?

- [ ] $E+tN$
- [ ] $E+tN+t^2N^2+t^3N^3$
- [x] $E+tN+\frac{t^2}{2}N^2$
- [ ] $e^tE$

> Die Exponentialreihe bricht ab, weil alle höheren Potenzen verschwinden.

### Matrixexponential
Gilt $\left(e^{tA}\right)^{-1}=e^{-tA}$?

- [ ] Nur für symmetrisches $A$.
- [ ] Nein, das gilt nie.
- [ ] Nur für Diagonalmatrizen.
- [x] Ja, weil $tA$ und $-tA$ kommutieren und $e^{0}=E$ ist.

> Satz 4.13: $e^{tA}e^{-tA}=e^{0}=E$.

### Matrixexponential
Für $A=\begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix}$: Was ist $e^{tA}$?

- [x] $e^{\lambda t}\begin{pmatrix}1&t\\0&1\end{pmatrix}$
- [ ] $e^{\lambda t}E$
- [ ] $\begin{pmatrix}e^{\lambda t}&1\\0&e^{\lambda t}\end{pmatrix}$
- [ ] $\begin{pmatrix}e^{\lambda t}&e^{t}\\0&e^{\lambda t}\end{pmatrix}$

> $A=\lambda E+N$ mit $N^2=0$; $\lambda E$ und $N$ kommutieren.

### Matrixexponential
Was bedeutet $\operatorname{tr}A=0$ für die Fundamentalmatrix $e^{tA}$?

- [ ] $e^{tA}=E$
- [ ] $e^{tA}$ ist nicht invertierbar.
- [x] $\det e^{tA}=1$ – Flächen im Phasenraum bleiben erhalten.
- [ ] $\det e^{tA}=0$

> $\det e^{tA}=e^{t\operatorname{tr}A}$.

### Matrixexponential
Für $A=SDS^{-1}$ mit Diagonalmatrix $D$: Was ist $A^k$?

- [ ] $kSDS^{-1}$
- [x] $SD^kS^{-1}$
- [ ] $D^k$
- [ ] $S^kD^kS^{-k}$

> Die inneren Faktoren $S^{-1}S$ heben sich auf; deshalb $e^{tA}=Se^{tD}S^{-1}$.

### Matrixexponential
Wie hängen $e^{tA}$ und eine beliebige Fundamentalmatrix $X(t)$ von $x'=Ax$ zusammen?

- [x] $e^{tA}=X(t)X(0)^{-1}$
- [ ] $e^{tA}=X(t)^{-1}$
- [ ] $e^{tA}=X(t)$ immer
- [ ] $e^{tA}=X(0)X(t)$

> $X(t)X(0)^{-1}$ ist die Fundamentalmatrix mit dem Wert $E$ bei $t=0$.

### Eigenwerte und Fundamentalsysteme
$A=\begin{pmatrix}1&1\\0&2\end{pmatrix}$ hat den Eigenvektor $v=(1,1)^T$. Welche Lösung von $x'=Ax$ erhält man daraus?

- [ ] $e^{t}(1,1)^T$
- [ ] $(1+2t)(1,1)^T$
- [ ] $e^{3t}(1,1)^T$
- [x] $e^{2t}(1,1)^T$

> $Av=(2,2)^T=2v$, also $\lambda=2$ und $x=e^{\lambda t}v$.

### Eigenwerte und Fundamentalsysteme
Welche Eigenwerte hat $\begin{pmatrix}3&5\\0&-1\end{pmatrix}$?

- [ ] $5$ und $-1$
- [x] $3$ und $-1$
- [ ] $-3$ und $1$
- [ ] $3$ und $5$

> Bei Dreiecksmatrizen stehen die Eigenwerte auf der Diagonale.

### Eigenwerte und Fundamentalsysteme
Für $A=\begin{pmatrix}0&-2\\2&0\end{pmatrix}$: Welche Zeitfunktionen treten in einem reellen Fundamentalsystem auf?

- [ ] Nur Konstanten
- [x] $\cos(2t)$ und $\sin(2t)$
- [ ] $t\,e^{2t}$
- [ ] $e^{2t}$ und $e^{-2t}$

> Die Eigenwerte sind $\pm2i$; Real- und Imaginärteil von $e^{2it}v$ ergeben reelle Lösungen.

### Eigenwerte und Fundamentalsysteme
Warum darf man bei reellem $A$ Real- und Imaginärteil einer komplexen Lösung $e^{\lambda t}v$ verwenden?

- [x] Weil sie selbst reelle Lösungen von $x'=Ax$ sind
- [ ] Weil die Eigenwerte immer reell sind
- [ ] Weil $v$ reell ist
- [ ] Das ist nicht erlaubt.

> Mit $x$ ist auch $\bar x$ Lösung, also auch $(x+\bar x)/2$ und $(x-\bar x)/(2i)$.

### Eigenwerte und Fundamentalsysteme
Kann ein reelles $2\times2$-System genau einen nichtreellen Eigenwert haben?

- [x] Nein, nichtreelle Eigenwerte treten in konjugiert-komplexen Paaren auf.
- [ ] Nur wenn die Spur null ist.
- [ ] Ja, bei symmetrischen Matrizen.
- [ ] Ja, immer.

> Das charakteristische Polynom hat reelle Koeffizienten.

### Eigenwerte und Fundamentalsysteme
Für eine $2\times2$-Matrix mit Eigenwerten $\lambda_1,\lambda_2$ gilt:

- [ ] $\lambda_1=\lambda_2$ immer
- [ ] $\lambda_1+\lambda_2=\det A$
- [x] $\lambda_1+\lambda_2=\operatorname{tr}A$ und $\lambda_1\lambda_2=\det A$
- [ ] $\lambda_1\lambda_2=\operatorname{tr}A$

> Vergleich mit $\lambda^2-\operatorname{tr}A\,\lambda+\det A$.

### Eigenwerte und Fundamentalsysteme
$v$ ist Eigenvektor zum Eigenwert $\lambda$. Welche Lösung hat $x'=Ax$ mit $x(0)=3v$?

- [x] $x(t)=3e^{\lambda t}v$
- [ ] $x(t)=e^{\lambda t}(v+3)$
- [ ] $x(t)=e^{3\lambda t}v$
- [ ] $x(t)=3\lambda t\,v$

> Linearität und $e^{tA}v=e^{\lambda t}v$.

### Eigenwerte und Fundamentalsysteme
$v_1,v_2$ sind Eigenvektoren zu $\lambda_1,\lambda_2$. Welche Lösung hat $x'=Ax$ mit $x(0)=v_1+v_2$?

- [x] $e^{\lambda_1t}v_1+e^{\lambda_2t}v_2$
- [ ] $e^{(\lambda_1+\lambda_2)t}(v_1+v_2)$
- [ ] $e^{\lambda_1t}(v_1+v_2)$
- [ ] $(v_1+v_2)$ konstant

> Superposition der Eigenlösungen.

### Eigenwerte und Fundamentalsysteme
Welche Aussage über symmetrische reelle Matrizen ist richtig?

- [ ] Sie sind nie diagonalisierbar.
- [ ] Sie haben nur den Eigenwert null.
- [x] Sie sind stets reell diagonalisierbar.
- [ ] Sie haben nur komplexe Eigenwerte.

> Spektralsatz: reelle Eigenwerte und eine Orthonormalbasis aus Eigenvektoren.

### Hauptvektoren
Welche algebraische und geometrische Vielfachheit hat der Eigenwert $2$ von $\begin{pmatrix}2&1\\0&2\end{pmatrix}$?

- [ ] Beide $2$
- [x] Algebraisch $2$, geometrisch $1$
- [ ] Beide $1$
- [ ] Algebraisch $1$, geometrisch $2$

> Es gibt nur einen linear unabhängigen Eigenvektor $(1,0)^T$; die Matrix ist nicht diagonalisierbar.

### Hauptvektoren
Wie ist ein Hauptvektor zweiter Stufe $v_2$ zum Eigenwert $\lambda$ definiert?

- [x] $(A-\lambda E)v_2=v_1$ mit einem Eigenvektor $v_1$
- [ ] $(A-\lambda E)v_2=0$
- [ ] $v_2=2v_1$
- [ ] $Av_2=2\lambda v_2$

> Zweimal angewandt: $(A-\lambda E)^2v_2=0$.

### Hauptvektoren
Mit Eigenvektor $v_1$ und Hauptvektor $v_2$ zu $\lambda$: Welche zweite Lösung ergänzt $e^{\lambda t}v_1$ zu einem Fundamentalsystem?

- [ ] $e^{2\lambda t}v_2$
- [ ] $e^{\lambda t}v_2$
- [ ] $t\,v_2$
- [x] $e^{\lambda t}(v_2+t\,v_1)$

> Satz 4.19: $e^{tA}v_2=e^{\lambda t}e^{t(A-\lambda E)}v_2$.

### Hauptvektoren
Welche Matrix ist nicht diagonalisierbar?

- [ ] $\begin{pmatrix}2&0\\0&2\end{pmatrix}$
- [ ] $\begin{pmatrix}0&1\\1&0\end{pmatrix}$
- [ ] $\begin{pmatrix}1&0\\0&2\end{pmatrix}$
- [x] $\begin{pmatrix}1&1\\0&1\end{pmatrix}$

> Doppelter Eigenwert $1$ mit nur einem Eigenvektor. Die Matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ hat die verschiedenen Eigenwerte $\pm1$.

### Langzeitverhalten
Die Matrix $A=\begin{pmatrix}-1&1\\0&-3\end{pmatrix}$ hat die Eigenwerte $-1$ und $-3$. Was gilt für alle Lösungen von $x'=Ax$?

- [ ] Sie wachsen unbeschränkt.
- [ ] Sie sind konstant.
- [x] Sie streben für $t\to\infty$ gegen $0$.
- [ ] Sie sind periodisch.

> Alle exponentiellen Zeitfaktoren klingen ab.

### Langzeitverhalten
Für $A=\operatorname{diag}(0,-1)$: Wie verhalten sich die Lösungen von $x'=Ax$ für $t\to\infty$?

- [ ] Sie streben immer gegen null.
- [ ] Sie schwingen.
- [ ] Sie wachsen unbeschränkt.
- [x] Sie konvergieren gegen einen konstanten Vektor (nicht unbedingt null).

> Die erste Komponente bleibt konstant, die zweite klingt ab.

### Langzeitverhalten
Die Eigenwerte sind $1$ und $-1$. Welche Lösungen von $x'=Ax$ bleiben für $t\to\infty$ beschränkt?

- [ ] Alle
- [x] Nur die mit Anfangswert auf der Eigengeraden zum Eigenwert $-1$
- [ ] Nur die zum Eigenwert $1$
- [ ] Keine, auch nicht die Nulllösung

> Jeder Anteil in Richtung des Eigenvektors zu $1$ wächst wie $e^{t}$ (Sattel).

### Langzeitverhalten
Was beschreiben Eigenwerte $\alpha\pm i\beta$ mit $\alpha<0$, $\beta\neq0$?

- [ ] Exponentielles Wachstum ohne Schwingung
- [x] Gedämpfte Schwingungen, die gegen null gehen
- [ ] Ungedämpfte Schwingungen
- [ ] Konstante Lösungen

> Lösungen enthalten $e^{\alpha t}\cos(\beta t)$ und $e^{\alpha t}\sin(\beta t)$.

### Anwendungen
Kammer 1 entleert sich in Kammer 2, aus der Stoff nach außen abfließt: $u'=-2u$, $v'=2u-v$. Was gilt für $t\to\infty$?

- [ ] $v$ wächst unbeschränkt.
- [ ] $u+v$ bleibt konstant.
- [ ] $v$ strebt gegen $2$.
- [x] Beide Mengen streben gegen $0$.

> Die Eigenwerte der Dreiecksmatrix sind $-2$ und $-1$.

### Anwendungen
Warum bleibt bei $u'=-2u$, $v'=2u-v$ die Gesamtmenge $u+v$ nicht erhalten?

- [x] Weil aus Kammer 2 Stoff nach außen abfließt: $(u+v)'=-v$
- [ ] Weil die Matrix nicht invertierbar ist
- [ ] Weil $u$ negativ wird
- [ ] Sie bleibt doch erhalten.

> Nur bei reinem Austausch heben sich die Flüsse in der Summe auf.

### Anwendungen
Ein Federschwinger $x''=-\omega^2x$ als System: Welche Eigenwerte hat die Systemmatrix $\begin{pmatrix}0&1\\-\omega^2&0\end{pmatrix}$?

- [ ] $\pm\omega$
- [ ] $-\omega$ doppelt
- [x] $\pm i\omega$
- [ ] $0$ doppelt

> $\lambda^2+\omega^2=0$ – ungedämpfte Schwingung mit Kreisfrequenz $\omega$.

### Anwendungen
Welche Eigenwerte gehören zum gedämpften Schwinger $x''+2x'+5x=0$?

- [x] $-1\pm2i$
- [ ] $-2$ und $-5$
- [ ] $\pm\sqrt5$
- [ ] $1\pm2i$

> $\lambda^2+2\lambda+5=0$; die Lösungen sind gedämpfte Schwingungen.

### Anwendungen
Zwei gleiche Pendel sind durch eine schwache Feder gekoppelt. Welche einfachen Bewegungsformen (Normalschwingungen) gibt es?

- [ ] Nur exponentielles Abklingen
- [x] Gleichphasige und gegenphasige Schwingung
- [ ] Nur eine einzige Schwingungsform
- [ ] Keine – die Bewegung ist immer chaotisch

> Sie entsprechen den Eigenvektoren der Systemmatrix; jede Bewegung ist eine Überlagerung davon.

### Anwendungen
Warum führen Netzwerke aus Widerständen, Spulen und Kondensatoren auf lineare Differentialgleichungssysteme?

- [ ] Weil Ströme immer konstant sind
- [ ] Weil nur Widerstände vorkommen
- [x] Die Bauteilgesetze ($U=RI$, $U=LI'$, $I=CU'$) und die Kirchhoffschen Regeln sind linear.
- [ ] Das stimmt nicht, sie sind immer nichtlinear.

> Unbekannte Ströme und Spannungen treten nur linear auf.

### Anwendungen
Ein Schwingkreis ohne Widerstand erfüllt $LI''+I/C=0$. Welche Kreisfrequenz hat die Schwingung?

- [x] $\omega=1/\sqrt{LC}$
- [ ] $\omega=L/C$
- [ ] $\omega=\sqrt{LC}$
- [ ] $\omega=1/(LC)$

> $I''=-\frac{1}{LC}I$, also Eigenwerte $\pm i/\sqrt{LC}$.

