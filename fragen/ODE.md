# ODE-Fragenkatalog – Magic Math Sisters (abwechslungsreiche Fassung)

300 Fragen auf Grundlage des Skripts „Gewöhnliche Differentialgleichungen für Naturwissenschaftler“ (Kapitel 1–4).
Jede Frage hat genau eine als richtig markierte Antwort und eine kurze Erläuterung.

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

### Anwendung: exponentielle Prozesse
Ein Kapitalbestand erfüllt $y'=2y$ und $y(0)=3$. Welche Lösung passt?

- [ ] $2e^{3t}$
- [x] $3e^{2t}$
- [ ] $3+2t$
- [ ] $3e^{-2t}$

> Bei einer proportionalen Änderungsrate ist $y(t)=y(0)e^{at}$.

### Anwendung: exponentielle Prozesse
Eine Algenpopulation erfüllt $y'=3y$ und $y(0)=4$. Welche Lösung passt?

- [ ] $3e^{4t}$
- [x] $4e^{3t}$
- [ ] $4+3t$
- [ ] $4e^{-3t}$

> Bei einer proportionalen Änderungsrate ist $y(t)=y(0)e^{at}$.

### Anwendung: exponentielle Prozesse
Eine radioaktive Probe erfüllt $y'=-4y$ und $y(0)=5$. Welche Lösung passt?

- [ ] $5e^{4t}$
- [ ] $5-4t$
- [x] $5e^{-4t}$
- [ ] $4e^{5t}$

> Bei einer proportionalen Änderungsrate ist $y(t)=y(0)e^{at}$.

### Anwendung: exponentielle Prozesse
Ein Ladungsspeicher erfüllt $y'=-5y$ und $y(0)=6$. Welche Lösung passt?

- [ ] $6-5t$
- [ ] $6e^{5t}$
- [ ] $5e^{6t}$
- [x] $6e^{-5t}$

> Bei einer proportionalen Änderungsrate ist $y(t)=y(0)e^{at}$.

### Anwendung: exponentielle Prozesse
Eine Medikamentenmenge erfüllt $y'=-y$ und $y(0)=7$. Welche Lösung passt?

- [x] $7e^{-t}$
- [ ] $7e^{t}$
- [ ] $e^{7t}$
- [ ] $7-t$

> Bei einer proportionalen Änderungsrate ist $y(t)=y(0)e^{at}$.

### Anwendung: exponentielle Prozesse
Ein Wasserstoffvorrat erfüllt $y'=-2y$ und $y(0)=8$. Welche Lösung passt?

- [ ] $8-2t$
- [ ] $8e^{2t}$
- [x] $8e^{-2t}$
- [ ] $2e^{8t}$

> Bei einer proportionalen Änderungsrate ist $y(t)=y(0)e^{at}$.

### Anwendung: exponentielle Prozesse
Eine Temperaturdifferenz erfüllt $y'=-3y$ und $y(0)=9$. Welche Lösung passt?

- [ ] $3e^{9t}$
- [ ] $9-3t$
- [x] $9e^{-3t}$
- [ ] $9e^{3t}$

> Bei einer proportionalen Änderungsrate ist $y(t)=y(0)e^{at}$.

### Anwendung: exponentielle Prozesse
Eine Zellpopulation erfüllt $y'=4y$ und $y(0)=10$. Welche Lösung passt?

- [ ] $10+4t$
- [ ] $10e^{-4t}$
- [ ] $4e^{10t}$
- [x] $10e^{4t}$

> Bei einer proportionalen Änderungsrate ist $y(t)=y(0)e^{at}$.

### Anwendung: exponentielle Prozesse
Eine Farbstoffmenge erfüllt $y'=-5y$ und $y(0)=11$. Welche Lösung passt?

- [ ] $5e^{11t}$
- [x] $11e^{-5t}$
- [ ] $11e^{5t}$
- [ ] $11-5t$

> Bei einer proportionalen Änderungsrate ist $y(t)=y(0)e^{at}$.

### Rechnen: lineare Modelle
Ein Modell erfüllt $y'+y=2$ und $y(0)=0$. Wie lautet $y(t)$?

- [ ] $2(1+e^{-t})$
- [ ] $2t$
- [ ] $2e^{-t}$
- [x] $2(1-e^{-t})$

> Das Gleichgewicht ist $b/a$ für $y'+ay=b$; bei $y(0)=0$ gilt $y(t)=(b/a)(1-e^{-at})$.

### Rechnen: lineare Modelle
Ein Modell erfüllt $y'+2y=2$ und $y(0)=0$. Wie lautet $y(t)$?

- [ ] $2t$
- [x] $(1-e^{-2t})$
- [ ] $e^{-2t}$
- [ ] $1+e^{-2t}$

> Das Gleichgewicht ist $b/a$ für $y'+ay=b$; bei $y(0)=0$ gilt $y(t)=(b/a)(1-e^{-at})$.

### Rechnen: lineare Modelle
Ein Modell erfüllt $y'+3y=6$ und $y(0)=0$. Wie lautet $y(t)$?

- [ ] $2e^{-3t}$
- [x] $2(1-e^{-3t})$
- [ ] $2(1+e^{-3t})$
- [ ] $6t$

> Das Gleichgewicht ist $b/a$ für $y'+ay=b$; bei $y(0)=0$ gilt $y(t)=(b/a)(1-e^{-at})$.

### Rechnen: lineare Modelle
Ein Modell erfüllt $y'+2y=10$ und $y(0)=0$. Wie lautet $y(t)$?

- [ ] $10t$
- [ ] $5(1+e^{-2t})$
- [ ] $5e^{-2t}$
- [x] $5(1-e^{-2t})$

> Das Gleichgewicht ist $b/a$ für $y'+ay=b$; bei $y(0)=0$ gilt $y(t)=(b/a)(1-e^{-at})$.

### Rechnen: lineare Modelle
Ein Modell erfüllt $y'+4y=12$ und $y(0)=0$. Wie lautet $y(t)$?

- [x] $3(1-e^{-4t})$
- [ ] $12t$
- [ ] $3e^{-4t}$
- [ ] $3(1+e^{-4t})$

> Das Gleichgewicht ist $b/a$ für $y'+ay=b$; bei $y(0)=0$ gilt $y(t)=(b/a)(1-e^{-at})$.

### Rechnen: lineare Modelle
Ein Modell erfüllt $y'+5y=5$ und $y(0)=0$. Wie lautet $y(t)$?

- [ ] $e^{-5t}$
- [ ] $1+e^{-5t}$
- [ ] $5t$
- [x] $(1-e^{-5t})$

> Das Gleichgewicht ist $b/a$ für $y'+ay=b$; bei $y(0)=0$ gilt $y(t)=(b/a)(1-e^{-at})$.

### Rechnen: lineare Modelle
Ein Modell erfüllt $y'+y=4$ und $y(0)=0$. Wie lautet $y(t)$?

- [ ] $4e^{-t}$
- [x] $4(1-e^{-t})$
- [ ] $4(1+e^{-t})$
- [ ] $4t$

> Das Gleichgewicht ist $b/a$ für $y'+ay=b$; bei $y(0)=0$ gilt $y(t)=(b/a)(1-e^{-at})$.

### Rechnen: lineare Modelle
Ein Modell erfüllt $y'+3y=15$ und $y(0)=0$. Wie lautet $y(t)$?

- [x] $5(1-e^{-3t})$
- [ ] $5(1+e^{-3t})$
- [ ] $5e^{-3t}$
- [ ] $15t$

> Das Gleichgewicht ist $b/a$ für $y'+ay=b$; bei $y(0)=0$ gilt $y(t)=(b/a)(1-e^{-at})$.

### Rechnen: lineare Modelle
Ein Modell erfüllt $y'+4y=4$ und $y(0)=0$. Wie lautet $y(t)$?

- [ ] $4t$
- [x] $(1-e^{-4t})$
- [ ] $1+e^{-4t}$
- [ ] $e^{-4t}$

> Das Gleichgewicht ist $b/a$ für $y'+ay=b$; bei $y(0)=0$ gilt $y(t)=(b/a)(1-e^{-at})$.

### Rechnen: lineare Modelle
Ein Modell erfüllt $y'+5y=10$ und $y(0)=0$. Wie lautet $y(t)$?

- [ ] $2(1+e^{-5t})$
- [ ] $2e^{-5t}$
- [x] $2(1-e^{-5t})$
- [ ] $10t$

> Das Gleichgewicht ist $b/a$ für $y'+ay=b$; bei $y(0)=0$ gilt $y(t)=(b/a)(1-e^{-at})$.

### Rechnen: Ableitungen prüfen
Welche Funktion erfüllt $x'=t^{0}$ und $x(0)=2$?

- [ ] $x(t)=2t^1+2$
- [ ] $x(t)=t^1-2$
- [ ] $x(t)=t^2+2$
- [x] $x(t)=t^1+2$

> Ableiten von $t^m$ liefert $m t^{m-1}$; der Anfangswert legt die Konstante fest.

### Rechnen: Ableitungen prüfen
Welche Funktion erfüllt $x'=2t^{1}$ und $x(0)=3$?

- [ ] $x(t)=t^2-3$
- [ ] $x(t)=t^3+3$
- [x] $x(t)=t^2+3$
- [ ] $x(t)=2t^2+3$

> Ableiten von $t^m$ liefert $m t^{m-1}$; der Anfangswert legt die Konstante fest.

### Rechnen: Ableitungen prüfen
Welche Funktion erfüllt $x'=3t^{2}$ und $x(0)=1$?

- [ ] $x(t)=t^4+1$
- [ ] $x(t)=t^3-1$
- [x] $x(t)=t^3+1$
- [ ] $x(t)=3t^3+1$

> Ableiten von $t^m$ liefert $m t^{m-1}$; der Anfangswert legt die Konstante fest.

### Rechnen: Ableitungen prüfen
Welche Funktion erfüllt $x'=4t^{3}$ und $x(0)=2$?

- [ ] $x(t)=4t^4+2$
- [ ] $x(t)=t^5+2$
- [x] $x(t)=t^4+2$
- [ ] $x(t)=t^4-2$

> Ableiten von $t^m$ liefert $m t^{m-1}$; der Anfangswert legt die Konstante fest.

### Rechnen: Ableitungen prüfen
Welche Funktion erfüllt $x'=5t^{4}$ und $x(0)=3$?

- [ ] $x(t)=t^5-3$
- [ ] $x(t)=t^6+3$
- [ ] $x(t)=5t^5+3$
- [x] $x(t)=t^5+3$

> Ableiten von $t^m$ liefert $m t^{m-1}$; der Anfangswert legt die Konstante fest.

### Rechnen: Ableitungen prüfen
Welche Funktion erfüllt $x'=2t^{1}$ und $x(0)=5$?

- [ ] $x(t)=2t^2+5$
- [ ] $x(t)=t^2-5$
- [ ] $x(t)=t^3+5$
- [x] $x(t)=t^2+5$

> Ableiten von $t^m$ liefert $m t^{m-1}$; der Anfangswert legt die Konstante fest.

### Rechnen: Ableitungen prüfen
Welche Funktion erfüllt $x'=3t^{2}$ und $x(0)=4$?

- [ ] $x(t)=3t^3+4$
- [ ] $x(t)=t^3-4$
- [ ] $x(t)=t^4+4$
- [x] $x(t)=t^3+4$

> Ableiten von $t^m$ liefert $m t^{m-1}$; der Anfangswert legt die Konstante fest.

### Rechnen: Ableitungen prüfen
Welche Funktion erfüllt $x'=4t^{3}$ und $x(0)=5$?

- [ ] $x(t)=t^4-5$
- [x] $x(t)=t^4+5$
- [ ] $x(t)=4t^4+5$
- [ ] $x(t)=t^5+5$

> Ableiten von $t^m$ liefert $m t^{m-1}$; der Anfangswert legt die Konstante fest.

### Rechnen: Ableitungen prüfen
Welche Funktion erfüllt $x'=5t^{4}$ und $x(0)=1$?

- [ ] $x(t)=t^5-1$
- [x] $x(t)=t^5+1$
- [ ] $x(t)=5t^5+1$
- [ ] $x(t)=t^6+1$

> Ableiten von $t^m$ liefert $m t^{m-1}$; der Anfangswert legt die Konstante fest.

### Rechnen: Ableitungen prüfen
Welche Funktion erfüllt $x'=t^{0}$ und $x(0)=4$?

- [ ] $x(t)=2t^1+4$
- [ ] $x(t)=t^1-4$
- [x] $x(t)=t^1+4$
- [ ] $x(t)=t^2+4$

> Ableiten von $t^m$ liefert $m t^{m-1}$; der Anfangswert legt die Konstante fest.

### Modell verstehen
Ein Bestand $N$ erfüllt $N'=2-N$. Was ist sein stationärer Wert?

- [ ] $1/2$
- [ ] $3$
- [ ] $12$
- [x] $2/1$

> Stationär bedeutet $N'=0$; daher $N=a/b$.

### Modell verstehen
Ein Bestand $N$ erfüllt $N'=3-2N$. Was ist sein stationärer Wert?

- [ ] $5$
- [x] $3/2$
- [ ] $2/3$
- [ ] $16$

> Stationär bedeutet $N'=0$; daher $N=a/b$.

### Modell verstehen
Ein Bestand $N$ erfüllt $N'=4-3N$. Was ist sein stationärer Wert?

- [x] $4/3$
- [ ] $3/4$
- [ ] $22$
- [ ] $7$

> Stationär bedeutet $N'=0$; daher $N=a/b$.

### Modell verstehen
Ein Bestand $N$ erfüllt $N'=5-4N$. Was ist sein stationärer Wert?

- [ ] $30$
- [x] $5/4$
- [ ] $4/5$
- [ ] $9$

> Stationär bedeutet $N'=0$; daher $N=a/b$.

### Modell verstehen
Ein Bestand $N$ erfüllt $N'=6-2N$. Was ist sein stationärer Wert?

- [ ] $22$
- [x] $6/2$
- [ ] $8$
- [ ] $2/6$

> Stationär bedeutet $N'=0$; daher $N=a/b$.

### Modell verstehen
Ein Bestand $N$ erfüllt $N'=7-3N$. Was ist sein stationärer Wert?

- [ ] $10$
- [x] $7/3$
- [ ] $31$
- [ ] $3/7$

> Stationär bedeutet $N'=0$; daher $N=a/b$.

### Modell verstehen
Ein Bestand $N$ erfüllt $N'=8-4N$. Was ist sein stationärer Wert?

- [ ] $42$
- [ ] $4/8$
- [ ] $12$
- [x] $8/4$

> Stationär bedeutet $N'=0$; daher $N=a/b$.

### Modell verstehen
Ein Bestand $N$ erfüllt $N'=9-5N$. Was ist sein stationärer Wert?

- [ ] $55$
- [ ] $5/9$
- [ ] $14$
- [x] $9/5$

> Stationär bedeutet $N'=0$; daher $N=a/b$.

### Modell verstehen
Ein Bestand $N$ erfüllt $N'=10-N$. Was ist sein stationärer Wert?

- [x] $10/1$
- [ ] $11$
- [ ] $1/10$
- [ ] $20$

> Stationär bedeutet $N'=0$; daher $N=a/b$.

### Modell verstehen
Ein Bestand $N$ erfüllt $N'=11-2N$. Was ist sein stationärer Wert?

- [ ] $2/11$
- [ ] $13$
- [ ] $32$
- [x] $11/2$

> Stationär bedeutet $N'=0$; daher $N=a/b$.

### Lösungen überprüfen
Ist $x(t)=e^{t}$ eine Lösung von $x'=x$?

- [ ] Nur für $t<0$.
- [ ] Nein, denn $x'=x$.
- [x] Ja, für alle $t$.
- [ ] Nur bei $t=0$.

> Die Ableitung von $e^{kt}$ ist $ke^{kt}$; damit ist die jeweilige Gleichung erfüllt.

### Lösungen überprüfen
Ist $x(t)=e^{2t}$ eine Lösung von $x'=2x$?

- [ ] Nur bei $t=0$.
- [ ] Nur für $t<0$.
- [ ] Nein, denn $x'=x$.
- [x] Ja, für alle $t$.

> Die Ableitung von $e^{kt}$ ist $ke^{kt}$; damit ist die jeweilige Gleichung erfüllt.

### Lösungen überprüfen
Ist $x(t)=e^{3t}$ eine Lösung von $x'=3x$?

- [ ] Nur bei $t=0$.
- [ ] Nein, denn $x'=x$.
- [ ] Nur für $t<0$.
- [x] Ja, für alle $t$.

> Die Ableitung von $e^{kt}$ ist $ke^{kt}$; damit ist die jeweilige Gleichung erfüllt.

## Welt 2 – Existenz und Eindeutigkeit (Kapitel 3)

### Existenz und Eindeutigkeit
Welche Eigenschaft sichert Picard-Lindelöf lokal?

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

### Lipschitz-Bedingungen
Für $f(x)=2x^2$ auf $[-1,1]$: Was ist die kleinste Lipschitz-Konstante?

- [x] $4$
- [ ] $2$
- [ ] $5$
- [ ] $0$

> Für $f(x)=kx^2$ ist $f'(x)=2kx$. Auf $[-1,1]$ ist die kleinste Lipschitz-Konstante daher $2k$.

### Lipschitz-Bedingungen
Für $f(x)=3x^2$ auf $[-1,1]$: Was ist die kleinste Lipschitz-Konstante?

- [ ] $3$
- [ ] $0$
- [ ] $7$
- [x] $6$

> Für $f(x)=kx^2$ ist $f'(x)=2kx$. Auf $[-1,1]$ ist die kleinste Lipschitz-Konstante daher $2k$.

### Lipschitz-Bedingungen
Für $f(x)=4x^2$ auf $[-1,1]$: Was ist die kleinste Lipschitz-Konstante?

- [x] $8$
- [ ] $4$
- [ ] $9$
- [ ] $0$

> Für $f(x)=kx^2$ ist $f'(x)=2kx$. Auf $[-1,1]$ ist die kleinste Lipschitz-Konstante daher $2k$.

### Lipschitz-Bedingungen
Für $f(x)=5x^2$ auf $[-1,1]$: Was ist die kleinste Lipschitz-Konstante?

- [ ] $11$
- [x] $10$
- [ ] $0$
- [ ] $5$

> Für $f(x)=kx^2$ ist $f'(x)=2kx$. Auf $[-1,1]$ ist die kleinste Lipschitz-Konstante daher $2k$.

### Lipschitz-Bedingungen
Für $f(x)=6x^2$ auf $[-1,1]$: Was ist die kleinste Lipschitz-Konstante?

- [ ] $0$
- [x] $12$
- [ ] $13$
- [ ] $6$

> Für $f(x)=kx^2$ ist $f'(x)=2kx$. Auf $[-1,1]$ ist die kleinste Lipschitz-Konstante daher $2k$.

### Lipschitz-Bedingungen
Für $f(x)=7x^2$ auf $[-1,1]$: Was ist die kleinste Lipschitz-Konstante?

- [ ] $0$
- [x] $14$
- [ ] $15$
- [ ] $7$

> Für $f(x)=kx^2$ ist $f'(x)=2kx$. Auf $[-1,1]$ ist die kleinste Lipschitz-Konstante daher $2k$.

### Lipschitz-Bedingungen
Für $f(x)=8x^2$ auf $[-1,1]$: Was ist die kleinste Lipschitz-Konstante?

- [x] $16$
- [ ] $17$
- [ ] $0$
- [ ] $8$

> Für $f(x)=kx^2$ ist $f'(x)=2kx$. Auf $[-1,1]$ ist die kleinste Lipschitz-Konstante daher $2k$.

### Lipschitz-Bedingungen
Für $f(x)=9x^2$ auf $[-1,1]$: Was ist die kleinste Lipschitz-Konstante?

- [ ] $9$
- [ ] $0$
- [ ] $19$
- [x] $18$

> Für $f(x)=kx^2$ ist $f'(x)=2kx$. Auf $[-1,1]$ ist die kleinste Lipschitz-Konstante daher $2k$.

### Lipschitz-Bedingungen
Für $f(x)=10x^2$ auf $[-1,1]$: Was ist die kleinste Lipschitz-Konstante?

- [x] $20$
- [ ] $0$
- [ ] $10$
- [ ] $21$

> Für $f(x)=kx^2$ ist $f'(x)=2kx$. Auf $[-1,1]$ ist die kleinste Lipschitz-Konstante daher $2k$.

### Picard-Iteration
Für $x'=t$, $x(0)=2$: Was ist die erste Picard-Iterierte?

- [ ] $t^2/2$
- [ ] $2+t$
- [ ] $2+t^2$
- [x] $2+t^2/2$

> Bei $x'=kt$ ergibt die erste Picard-Iteration $x^{(1)}(t)=2+kt^2/2$.

### Picard-Iteration
Für $x'=2t$, $x(0)=2$: Was ist die erste Picard-Iterierte?

- [ ] $2+2t$
- [x] $2+2t^2/2$
- [ ] $2+2t^2$
- [ ] $2t^2/2$

> Bei $x'=kt$ ergibt die erste Picard-Iteration $x^{(1)}(t)=2+kt^2/2$.

### Picard-Iteration
Für $x'=3t$, $x(0)=2$: Was ist die erste Picard-Iterierte?

- [ ] $2+3t$
- [x] $2+3t^2/2$
- [ ] $3t^2/2$
- [ ] $2+3t^2$

> Bei $x'=kt$ ergibt die erste Picard-Iteration $x^{(1)}(t)=2+kt^2/2$.

### Picard-Iteration
Für $x'=4t$, $x(0)=2$: Was ist die erste Picard-Iterierte?

- [ ] $4t^2/2$
- [ ] $2+4t$
- [ ] $2+4t^2$
- [x] $2+4t^2/2$

> Bei $x'=kt$ ergibt die erste Picard-Iteration $x^{(1)}(t)=2+kt^2/2$.

### Picard-Iteration
Für $x'=5t$, $x(0)=2$: Was ist die erste Picard-Iterierte?

- [x] $2+5t^2/2$
- [ ] $2+5t^2$
- [ ] $5t^2/2$
- [ ] $2+5t$

> Bei $x'=kt$ ergibt die erste Picard-Iteration $x^{(1)}(t)=2+kt^2/2$.

### Picard-Iteration
Für $x'=6t$, $x(0)=2$: Was ist die erste Picard-Iterierte?

- [ ] $2+6t$
- [ ] $6t^2/2$
- [x] $2+6t^2/2$
- [ ] $2+6t^2$

> Bei $x'=kt$ ergibt die erste Picard-Iteration $x^{(1)}(t)=2+kt^2/2$.

### Picard-Iteration
Für $x'=7t$, $x(0)=2$: Was ist die erste Picard-Iterierte?

- [ ] $2+7t$
- [ ] $2+7t^2$
- [x] $2+7t^2/2$
- [ ] $7t^2/2$

> Bei $x'=kt$ ergibt die erste Picard-Iteration $x^{(1)}(t)=2+kt^2/2$.

### Picard-Iteration
Für $x'=8t$, $x(0)=2$: Was ist die erste Picard-Iterierte?

- [ ] $2+8t^2$
- [ ] $2+8t$
- [ ] $8t^2/2$
- [x] $2+8t^2/2$

> Bei $x'=kt$ ergibt die erste Picard-Iteration $x^{(1)}(t)=2+kt^2/2$.

### Picard-Iteration
Für $x'=9t$, $x(0)=2$: Was ist die erste Picard-Iterierte?

- [x] $2+9t^2/2$
- [ ] $9t^2/2$
- [ ] $2+9t^2$
- [ ] $2+9t$

> Bei $x'=kt$ ergibt die erste Picard-Iteration $x^{(1)}(t)=2+kt^2/2$.

### Picard-Iteration
Für $x'=10t$, $x(0)=2$: Was ist die erste Picard-Iterierte?

- [x] $2+10t^2/2$
- [ ] $2+10t$
- [ ] $2+10t^2$
- [ ] $10t^2/2$

> Bei $x'=kt$ ergibt die erste Picard-Iteration $x^{(1)}(t)=2+kt^2/2$.

### Maximale Fortsetzung
Für $x'=x^2$, $x(0)=1$: Wann tritt die Vorwärts-Explosion auf?

- [ ] $t=-1$
- [ ] $Nie$
- [ ] $t=2$
- [x] $t=1$

> Für $x'=kx^2$ gilt $x(t)=1/(1-kt)$; der Nenner verschwindet bei $t=1/k$.

### Maximale Fortsetzung
Für $x'=2x^2$, $x(0)=1$: Wann tritt die Vorwärts-Explosion auf?

- [x] $t=1/2$
- [ ] $t=-1/2$
- [ ] $Nie$
- [ ] $t=2$

> Für $x'=kx^2$ gilt $x(t)=1/(1-kt)$; der Nenner verschwindet bei $t=1/k$.

### Maximale Fortsetzung
Für $x'=3x^2$, $x(0)=1$: Wann tritt die Vorwärts-Explosion auf?

- [ ] $Nie$
- [ ] $t=3$
- [x] $t=1/3$
- [ ] $t=-1/3$

> Für $x'=kx^2$ gilt $x(t)=1/(1-kt)$; der Nenner verschwindet bei $t=1/k$.

### Maximale Fortsetzung
Für $x'=4x^2$, $x(0)=1$: Wann tritt die Vorwärts-Explosion auf?

- [ ] $Nie$
- [ ] $t=4$
- [x] $t=1/4$
- [ ] $t=-1/4$

> Für $x'=kx^2$ gilt $x(t)=1/(1-kt)$; der Nenner verschwindet bei $t=1/k$.

### Maximale Fortsetzung
Für $x'=5x^2$, $x(0)=1$: Wann tritt die Vorwärts-Explosion auf?

- [ ] $t=5$
- [ ] $t=-1/5$
- [ ] $Nie$
- [x] $t=1/5$

> Für $x'=kx^2$ gilt $x(t)=1/(1-kt)$; der Nenner verschwindet bei $t=1/k$.

### Maximale Fortsetzung
Für $x'=6x^2$, $x(0)=1$: Wann tritt die Vorwärts-Explosion auf?

- [ ] $Nie$
- [ ] $t=-1/6$
- [ ] $t=6$
- [x] $t=1/6$

> Für $x'=kx^2$ gilt $x(t)=1/(1-kt)$; der Nenner verschwindet bei $t=1/k$.

### Maximale Fortsetzung
Für $x'=7x^2$, $x(0)=1$: Wann tritt die Vorwärts-Explosion auf?

- [ ] $Nie$
- [ ] $t=-1/7$
- [ ] $t=7$
- [x] $t=1/7$

> Für $x'=kx^2$ gilt $x(t)=1/(1-kt)$; der Nenner verschwindet bei $t=1/k$.

### Maximale Fortsetzung
Für $x'=8x^2$, $x(0)=1$: Wann tritt die Vorwärts-Explosion auf?

- [ ] $Nie$
- [ ] $t=-1/8$
- [x] $t=1/8$
- [ ] $t=8$

> Für $x'=kx^2$ gilt $x(t)=1/(1-kt)$; der Nenner verschwindet bei $t=1/k$.

### Maximale Fortsetzung
Für $x'=9x^2$, $x(0)=1$: Wann tritt die Vorwärts-Explosion auf?

- [ ] $t=-1/9$
- [ ] $t=9$
- [ ] $Nie$
- [x] $t=1/9$

> Für $x'=kx^2$ gilt $x(t)=1/(1-kt)$; der Nenner verschwindet bei $t=1/k$.

### Maximale Fortsetzung
Für $x'=10x^2$, $x(0)=1$: Wann tritt die Vorwärts-Explosion auf?

- [ ] $t=-1/10$
- [ ] $Nie$
- [ ] $t=10$
- [x] $t=1/10$

> Für $x'=kx^2$ gilt $x(t)=1/(1-kt)$; der Nenner verschwindet bei $t=1/k$.

### Parameter und Anfangsdaten
Für $x'=-x$, $x(0)=\lambda$ mit $\lambda>1$: Was ist die Lösung?

- [x] $\lambda e^{-t}$
- [ ] $\lambda e^{t}$
- [ ] $\lambda+t$
- [ ] $e^{-\lambda t}$

> Die Lösung hängt linear vom Anfangsparameter $\lambda$ ab.

### Parameter und Anfangsdaten
Für $x'=-2x$, $x(0)=\lambda$ mit $\lambda>1$: Was ist die Lösung?

- [ ] $e^{-\lambda t}$
- [x] $\lambda e^{-2t}$
- [ ] $2\lambda e^{-t}$
- [ ] $\lambda+2t$

> Die Lösung hängt linear vom Anfangsparameter $\lambda$ ab.

### Parameter und Anfangsdaten
Für $x'=-3x$, $x(0)=\lambda$ mit $\lambda>1$: Was ist die Lösung?

- [ ] $\lambda+3t$
- [ ] $3\lambda e^{-t}$
- [x] $\lambda e^{-3t}$
- [ ] $e^{-\lambda t}$

> Die Lösung hängt linear vom Anfangsparameter $\lambda$ ab.

### Parameter und Anfangsdaten
Für $x'=-4x$, $x(0)=\lambda$ mit $\lambda>1$: Was ist die Lösung?

- [ ] $4\lambda e^{-t}$
- [ ] $\lambda+4t$
- [ ] $e^{-\lambda t}$
- [x] $\lambda e^{-4t}$

> Die Lösung hängt linear vom Anfangsparameter $\lambda$ ab.

### Parameter und Anfangsdaten
Für $x'=-5x$, $x(0)=\lambda$ mit $\lambda>1$: Was ist die Lösung?

- [ ] $e^{-\lambda t}$
- [x] $\lambda e^{-5t}$
- [ ] $\lambda+5t$
- [ ] $5\lambda e^{-t}$

> Die Lösung hängt linear vom Anfangsparameter $\lambda$ ab.

### Parameter und Anfangsdaten
Für $x'=-6x$, $x(0)=\lambda$ mit $\lambda>1$: Was ist die Lösung?

- [ ] $\lambda+6t$
- [ ] $6\lambda e^{-t}$
- [x] $\lambda e^{-6t}$
- [ ] $e^{-\lambda t}$

> Die Lösung hängt linear vom Anfangsparameter $\lambda$ ab.

### Parameter und Anfangsdaten
Für $x'=-7x$, $x(0)=\lambda$ mit $\lambda>1$: Was ist die Lösung?

- [ ] $7\lambda e^{-t}$
- [ ] $e^{-\lambda t}$
- [x] $\lambda e^{-7t}$
- [ ] $\lambda+7t$

> Die Lösung hängt linear vom Anfangsparameter $\lambda$ ab.

### Parameter und Anfangsdaten
Für $x'=-8x$, $x(0)=\lambda$ mit $\lambda>1$: Was ist die Lösung?

- [ ] $8\lambda e^{-t}$
- [ ] $e^{-\lambda t}$
- [x] $\lambda e^{-8t}$
- [ ] $\lambda+8t$

> Die Lösung hängt linear vom Anfangsparameter $\lambda$ ab.

### Parameter und Anfangsdaten
Für $x'=-9x$, $x(0)=\lambda$ mit $\lambda>1$: Was ist die Lösung?

- [x] $\lambda e^{-9t}$
- [ ] $e^{-\lambda t}$
- [ ] $9\lambda e^{-t}$
- [ ] $\lambda+9t$

> Die Lösung hängt linear vom Anfangsparameter $\lambda$ ab.

### Parameter und Anfangsdaten
Für $x'=-10x$, $x(0)=\lambda$ mit $\lambda>1$: Was ist die Lösung?

- [x] $\lambda e^{-10t}$
- [ ] $e^{-\lambda t}$
- [ ] $\lambda+10t$
- [ ] $10\lambda e^{-t}$

> Die Lösung hängt linear vom Anfangsparameter $\lambda$ ab.

### Lösungsabschätzungen
Für $x'=x$ mit Anfangswerten $x(0)=1$ und $y(0)=2$: Wie groß ist $|x(1)-y(1)|$?

- [ ] $1$
- [x] $e^1$
- [ ] $e^{-1}$
- [ ] $2e^1$

> Bei $x'=kx$ ist die Differenz zweier Lösungen mit Anfangsdifferenz eins gleich $e^{kt}$.

### Lösungsabschätzungen
Für $x'=2x$ mit Anfangswerten $x(0)=1$ und $y(0)=2$: Wie groß ist $|x(1)-y(1)|$?

- [ ] $e^{-2}$
- [x] $e^2$
- [ ] $1$
- [ ] $2e^2$

> Bei $x'=kx$ ist die Differenz zweier Lösungen mit Anfangsdifferenz eins gleich $e^{kt}$.

### Lösungsabschätzungen
Für $x'=3x$ mit Anfangswerten $x(0)=1$ und $y(0)=2$: Wie groß ist $|x(1)-y(1)|$?

- [ ] $1$
- [ ] $e^{-3}$
- [ ] $2e^3$
- [x] $e^3$

> Bei $x'=kx$ ist die Differenz zweier Lösungen mit Anfangsdifferenz eins gleich $e^{kt}$.

### Lösungsabschätzungen
Für $x'=4x$ mit Anfangswerten $x(0)=1$ und $y(0)=2$: Wie groß ist $|x(1)-y(1)|$?

- [ ] $2e^4$
- [x] $e^4$
- [ ] $e^{-4}$
- [ ] $1$

> Bei $x'=kx$ ist die Differenz zweier Lösungen mit Anfangsdifferenz eins gleich $e^{kt}$.

### Lösungsabschätzungen
Für $x'=5x$ mit Anfangswerten $x(0)=1$ und $y(0)=2$: Wie groß ist $|x(1)-y(1)|$?

- [ ] $2e^5$
- [ ] $1$
- [ ] $e^{-5}$
- [x] $e^5$

> Bei $x'=kx$ ist die Differenz zweier Lösungen mit Anfangsdifferenz eins gleich $e^{kt}$.

### Lösungsabschätzungen
Für $x'=6x$ mit Anfangswerten $x(0)=1$ und $y(0)=2$: Wie groß ist $|x(1)-y(1)|$?

- [x] $e^6$
- [ ] $2e^6$
- [ ] $1$
- [ ] $e^{-6}$

> Bei $x'=kx$ ist die Differenz zweier Lösungen mit Anfangsdifferenz eins gleich $e^{kt}$.

### Lösungsabschätzungen
Für $x'=7x$ mit Anfangswerten $x(0)=1$ und $y(0)=2$: Wie groß ist $|x(1)-y(1)|$?

- [ ] $1$
- [ ] $e^{-7}$
- [x] $e^7$
- [ ] $2e^7$

> Bei $x'=kx$ ist die Differenz zweier Lösungen mit Anfangsdifferenz eins gleich $e^{kt}$.

### Lösungsabschätzungen
Für $x'=8x$ mit Anfangswerten $x(0)=1$ und $y(0)=2$: Wie groß ist $|x(1)-y(1)|$?

- [ ] $1$
- [x] $e^8$
- [ ] $e^{-8}$
- [ ] $2e^8$

> Bei $x'=kx$ ist die Differenz zweier Lösungen mit Anfangsdifferenz eins gleich $e^{kt}$.

### Lösungsabschätzungen
Für $x'=9x$ mit Anfangswerten $x(0)=1$ und $y(0)=2$: Wie groß ist $|x(1)-y(1)|$?

- [x] $e^9$
- [ ] $2e^9$
- [ ] $1$
- [ ] $e^{-9}$

> Bei $x'=kx$ ist die Differenz zweier Lösungen mit Anfangsdifferenz eins gleich $e^{kt}$.

### Lösungsabschätzungen
Für $x'=10x$ mit Anfangswerten $x(0)=1$ und $y(0)=2$: Wie groß ist $|x(1)-y(1)|$?

- [ ] $1$
- [x] $e^10$
- [ ] $e^{-10}$
- [ ] $2e^10$

> Bei $x'=kx$ ist die Differenz zweier Lösungen mit Anfangsdifferenz eins gleich $e^{kt}$.

### Eindeutigkeit und Gegenbeispiele
Für $x'=\sqrt{|x|}$, $x(0)=0$: Welche Aussage stimmt?

- [ ] Alle Lösungen sind negativ.
- [ ] Es gibt keine Lösung.
- [ ] Es gibt genau eine Lösung.
- [x] Es gibt die Nulllösung und weitere Lösungen.

> Die rechte Seite ist an null nicht lokal Lipschitz; verzögerte Starts sind möglich.

### Eindeutigkeit und Gegenbeispiele
Für $x'=2\sqrt{|x|}$, $x(0)=0$: Welche Aussage stimmt?

- [ ] Es gibt genau eine Lösung.
- [ ] Es gibt keine Lösung.
- [x] Es gibt die Nulllösung und weitere Lösungen.
- [ ] Alle Lösungen sind negativ.

> Die rechte Seite ist an null nicht lokal Lipschitz; verzögerte Starts sind möglich.

### Eindeutigkeit und Gegenbeispiele
Für $x'=3\sqrt{|x|}$, $x(0)=0$: Welche Aussage stimmt?

- [ ] Alle Lösungen sind negativ.
- [ ] Es gibt genau eine Lösung.
- [ ] Es gibt keine Lösung.
- [x] Es gibt die Nulllösung und weitere Lösungen.

> Die rechte Seite ist an null nicht lokal Lipschitz; verzögerte Starts sind möglich.

### Eindeutigkeit und Gegenbeispiele
Für $x'=4\sqrt{|x|}$, $x(0)=0$: Welche Aussage stimmt?

- [x] Es gibt die Nulllösung und weitere Lösungen.
- [ ] Es gibt keine Lösung.
- [ ] Alle Lösungen sind negativ.
- [ ] Es gibt genau eine Lösung.

> Die rechte Seite ist an null nicht lokal Lipschitz; verzögerte Starts sind möglich.

### Eindeutigkeit und Gegenbeispiele
Für $x'=5\sqrt{|x|}$, $x(0)=0$: Welche Aussage stimmt?

- [ ] Es gibt keine Lösung.
- [ ] Alle Lösungen sind negativ.
- [x] Es gibt die Nulllösung und weitere Lösungen.
- [ ] Es gibt genau eine Lösung.

> Die rechte Seite ist an null nicht lokal Lipschitz; verzögerte Starts sind möglich.

### Eindeutigkeit und Gegenbeispiele
Für $x'=6\sqrt{|x|}$, $x(0)=0$: Welche Aussage stimmt?

- [ ] Es gibt genau eine Lösung.
- [ ] Es gibt keine Lösung.
- [x] Es gibt die Nulllösung und weitere Lösungen.
- [ ] Alle Lösungen sind negativ.

> Die rechte Seite ist an null nicht lokal Lipschitz; verzögerte Starts sind möglich.

### Eindeutigkeit und Gegenbeispiele
Für $x'=7\sqrt{|x|}$, $x(0)=0$: Welche Aussage stimmt?

- [ ] Alle Lösungen sind negativ.
- [ ] Es gibt keine Lösung.
- [x] Es gibt die Nulllösung und weitere Lösungen.
- [ ] Es gibt genau eine Lösung.

> Die rechte Seite ist an null nicht lokal Lipschitz; verzögerte Starts sind möglich.

### Eindeutigkeit und Gegenbeispiele
Für $x'=8\sqrt{|x|}$, $x(0)=0$: Welche Aussage stimmt?

- [x] Es gibt die Nulllösung und weitere Lösungen.
- [ ] Alle Lösungen sind negativ.
- [ ] Es gibt keine Lösung.
- [ ] Es gibt genau eine Lösung.

> Die rechte Seite ist an null nicht lokal Lipschitz; verzögerte Starts sind möglich.

### Eindeutigkeit und Gegenbeispiele
Für $x'=9\sqrt{|x|}$, $x(0)=0$: Welche Aussage stimmt?

- [ ] Es gibt keine Lösung.
- [ ] Es gibt genau eine Lösung.
- [x] Es gibt die Nulllösung und weitere Lösungen.
- [ ] Alle Lösungen sind negativ.

> Die rechte Seite ist an null nicht lokal Lipschitz; verzögerte Starts sind möglich.

### Eindeutigkeit und Gegenbeispiele
Für $x'=10\sqrt{|x|}$, $x(0)=0$: Welche Aussage stimmt?

- [x] Es gibt die Nulllösung und weitere Lösungen.
- [ ] Es gibt genau eine Lösung.
- [ ] Es gibt keine Lösung.
- [ ] Alle Lösungen sind negativ.

> Die rechte Seite ist an null nicht lokal Lipschitz; verzögerte Starts sind möglich.

### Existenz auf Intervallen
Für $x'=x/(1+t^2)+1$ mit $x(0)=0$: Was gilt?

- [ ] Eindeutigkeit ist ausgeschlossen.
- [x] Es gibt eine eindeutige Lösung auf ganz $\mathbb R$.
- [ ] Die Lösung explodiert zwingend bei $t=1$.
- [ ] Eine Lösung existiert nur für $t>0$.

> Lineare Gleichung mit auf ganz $\mathbb R$ stetigen Koeffizienten.

### Existenz auf Intervallen
Für $x'=x/(1+t^2)+2$ mit $x(0)=0$: Was gilt?

- [ ] Die Lösung explodiert zwingend bei $t=1$.
- [x] Es gibt eine eindeutige Lösung auf ganz $\mathbb R$.
- [ ] Eindeutigkeit ist ausgeschlossen.
- [ ] Eine Lösung existiert nur für $t>0$.

> Lineare Gleichung mit auf ganz $\mathbb R$ stetigen Koeffizienten.

### Existenz auf Intervallen
Für $x'=x/(1+t^2)+3$ mit $x(0)=0$: Was gilt?

- [ ] Eindeutigkeit ist ausgeschlossen.
- [x] Es gibt eine eindeutige Lösung auf ganz $\mathbb R$.
- [ ] Die Lösung explodiert zwingend bei $t=1$.
- [ ] Eine Lösung existiert nur für $t>0$.

> Lineare Gleichung mit auf ganz $\mathbb R$ stetigen Koeffizienten.

### Existenz auf Intervallen
Für $x'=x/(1+t^2)+4$ mit $x(0)=0$: Was gilt?

- [ ] Eindeutigkeit ist ausgeschlossen.
- [ ] Eine Lösung existiert nur für $t>0$.
- [x] Es gibt eine eindeutige Lösung auf ganz $\mathbb R$.
- [ ] Die Lösung explodiert zwingend bei $t=1$.

> Lineare Gleichung mit auf ganz $\mathbb R$ stetigen Koeffizienten.

### Existenz auf Intervallen
Für $x'=x/(1+t^2)+5$ mit $x(0)=0$: Was gilt?

- [x] Es gibt eine eindeutige Lösung auf ganz $\mathbb R$.
- [ ] Eindeutigkeit ist ausgeschlossen.
- [ ] Eine Lösung existiert nur für $t>0$.
- [ ] Die Lösung explodiert zwingend bei $t=1$.

> Lineare Gleichung mit auf ganz $\mathbb R$ stetigen Koeffizienten.

### Existenz auf Intervallen
Für $x'=x/(1+t^2)+6$ mit $x(0)=0$: Was gilt?

- [ ] Eindeutigkeit ist ausgeschlossen.
- [ ] Eine Lösung existiert nur für $t>0$.
- [x] Es gibt eine eindeutige Lösung auf ganz $\mathbb R$.
- [ ] Die Lösung explodiert zwingend bei $t=1$.

> Lineare Gleichung mit auf ganz $\mathbb R$ stetigen Koeffizienten.

### Existenz auf Intervallen
Für $x'=x/(1+t^2)+7$ mit $x(0)=0$: Was gilt?

- [ ] Eine Lösung existiert nur für $t>0$.
- [ ] Die Lösung explodiert zwingend bei $t=1$.
- [ ] Eindeutigkeit ist ausgeschlossen.
- [x] Es gibt eine eindeutige Lösung auf ganz $\mathbb R$.

> Lineare Gleichung mit auf ganz $\mathbb R$ stetigen Koeffizienten.

### Existenz auf Intervallen
Für $x'=x/(1+t^2)+8$ mit $x(0)=0$: Was gilt?

- [ ] Die Lösung explodiert zwingend bei $t=1$.
- [ ] Eine Lösung existiert nur für $t>0$.
- [ ] Eindeutigkeit ist ausgeschlossen.
- [x] Es gibt eine eindeutige Lösung auf ganz $\mathbb R$.

> Lineare Gleichung mit auf ganz $\mathbb R$ stetigen Koeffizienten.

### Existenz auf Intervallen
Für $x'=x/(1+t^2)+9$ mit $x(0)=0$: Was gilt?

- [ ] Eine Lösung existiert nur für $t>0$.
- [ ] Eindeutigkeit ist ausgeschlossen.
- [ ] Die Lösung explodiert zwingend bei $t=1$.
- [x] Es gibt eine eindeutige Lösung auf ganz $\mathbb R$.

> Lineare Gleichung mit auf ganz $\mathbb R$ stetigen Koeffizienten.

### Existenz auf Intervallen
Für $x'=x/(1+t^2)+10$ mit $x(0)=0$: Was gilt?

- [x] Es gibt eine eindeutige Lösung auf ganz $\mathbb R$.
- [ ] Eine Lösung existiert nur für $t>0$.
- [ ] Eindeutigkeit ist ausgeschlossen.
- [ ] Die Lösung explodiert zwingend bei $t=1$.

> Lineare Gleichung mit auf ganz $\mathbb R$ stetigen Koeffizienten.

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
Wie bestimmt man $x_0$ aus $x(t_0)=X(t_0)c$?

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

### Diagonal-Systeme
Für $x'=\operatorname{diag}(-2,3)x$ und $x(0)=(1,1)^T$: Welche Lösung stimmt?

- [ ] $(e^{-2t},e^{-3t})^T$
- [ ] $(-2t,3t)^T$
- [ ] $(e^{2t},e^{-3t})^T$
- [x] $(e^{-2t},e^{3t})^T$

> Jede Komponente löst ihre eigene skalare lineare Gleichung.

### Diagonal-Systeme
Für $x'=\operatorname{diag}(-3,4)x$ und $x(0)=(1,1)^T$: Welche Lösung stimmt?

- [x] $(e^{-3t},e^{4t})^T$
- [ ] $(-3t,4t)^T$
- [ ] $(e^{-3t},e^{-4t})^T$
- [ ] $(e^{3t},e^{-4t})^T$

> Jede Komponente löst ihre eigene skalare lineare Gleichung.

### Diagonal-Systeme
Für $x'=\operatorname{diag}(-4,5)x$ und $x(0)=(1,1)^T$: Welche Lösung stimmt?

- [x] $(e^{-4t},e^{5t})^T$
- [ ] $(e^{4t},e^{-5t})^T$
- [ ] $(e^{-4t},e^{-5t})^T$
- [ ] $(-4t,5t)^T$

> Jede Komponente löst ihre eigene skalare lineare Gleichung.

### Diagonal-Systeme
Für $x'=\operatorname{diag}(-5,1)x$ und $x(0)=(1,1)^T$: Welche Lösung stimmt?

- [ ] $(-5t,t)^T$
- [ ] $(e^{-5t},e^{-t})^T$
- [x] $(e^{-5t},e^{t})^T$
- [ ] $(e^{5t},e^{-t})^T$

> Jede Komponente löst ihre eigene skalare lineare Gleichung.

### Diagonal-Systeme
Für $x'=\operatorname{diag}(-2,5)x$ und $x(0)=(1,1)^T$: Welche Lösung stimmt?

- [x] $(e^{-2t},e^{5t})^T$
- [ ] $(-2t,5t)^T$
- [ ] $(e^{2t},e^{-5t})^T$
- [ ] $(e^{-2t},e^{-5t})^T$

> Jede Komponente löst ihre eigene skalare lineare Gleichung.

### Diagonal-Systeme
Für $x'=\operatorname{diag}(-3,1)x$ und $x(0)=(1,1)^T$: Welche Lösung stimmt?

- [x] $(e^{-3t},e^{t})^T$
- [ ] $(e^{-3t},e^{-t})^T$
- [ ] $(-3t,t)^T$
- [ ] $(e^{3t},e^{-t})^T$

> Jede Komponente löst ihre eigene skalare lineare Gleichung.

### Diagonal-Systeme
Für $x'=\operatorname{diag}(-4,2)x$ und $x(0)=(1,1)^T$: Welche Lösung stimmt?

- [ ] $(-4t,2t)^T$
- [x] $(e^{-4t},e^{2t})^T$
- [ ] $(e^{-4t},e^{-2t})^T$
- [ ] $(e^{4t},e^{-2t})^T$

> Jede Komponente löst ihre eigene skalare lineare Gleichung.

### Diagonal-Systeme
Für $x'=\operatorname{diag}(-5,3)x$ und $x(0)=(1,1)^T$: Welche Lösung stimmt?

- [ ] $(e^{-5t},e^{-3t})^T$
- [ ] $(-5t,3t)^T$
- [ ] $(e^{5t},e^{-3t})^T$
- [x] $(e^{-5t},e^{3t})^T$

> Jede Komponente löst ihre eigene skalare lineare Gleichung.

### Diagonal-Systeme
Für $x'=\operatorname{diag}(-1,4)x$ und $x(0)=(1,1)^T$: Welche Lösung stimmt?

- [ ] $(e^{-t},e^{-4t})^T$
- [ ] $(-t,4t)^T$
- [x] $(e^{-t},e^{4t})^T$
- [ ] $(e^{t},e^{-4t})^T$

> Jede Komponente löst ihre eigene skalare lineare Gleichung.

### Eigenwerte erkennen
Welche Eigenwerte besitzt $A=\begin{pmatrix}1&0\\0&-2\end{pmatrix}$?

- [ ] $2$ und $0$
- [x] $1$ und $-2$
- [ ] $1$ und $2$
- [ ] $-1$ und $-2$

> Bei einer Diagonalmatrix sind die Diagonaleinträge Eigenwerte.

### Eigenwerte erkennen
Welche Eigenwerte besitzt $A=\begin{pmatrix}2&0\\0&-3\end{pmatrix}$?

- [ ] $-2$ und $-3$
- [x] $2$ und $-3$
- [ ] $2$ und $3$
- [ ] $6$ und $0$

> Bei einer Diagonalmatrix sind die Diagonaleinträge Eigenwerte.

### Eigenwerte erkennen
Welche Eigenwerte besitzt $A=\begin{pmatrix}3&0\\0&-4\end{pmatrix}$?

- [ ] $12$ und $0$
- [ ] $-3$ und $-4$
- [x] $3$ und $-4$
- [ ] $3$ und $4$

> Bei einer Diagonalmatrix sind die Diagonaleinträge Eigenwerte.

### Eigenwerte erkennen
Welche Eigenwerte besitzt $A=\begin{pmatrix}4&0\\0&-5\end{pmatrix}$?

- [x] $4$ und $-5$
- [ ] $-4$ und $-5$
- [ ] $20$ und $0$
- [ ] $4$ und $5$

> Bei einer Diagonalmatrix sind die Diagonaleinträge Eigenwerte.

### Eigenwerte erkennen
Welche Eigenwerte besitzt $A=\begin{pmatrix}5&0\\0&-6\end{pmatrix}$?

- [x] $5$ und $-6$
- [ ] $30$ und $0$
- [ ] $5$ und $6$
- [ ] $-5$ und $-6$

> Bei einer Diagonalmatrix sind die Diagonaleinträge Eigenwerte.

### Eigenwerte erkennen
Welche Eigenwerte besitzt $A=\begin{pmatrix}6&0\\0&-7\end{pmatrix}$?

- [ ] $-6$ und $-7$
- [x] $6$ und $-7$
- [ ] $6$ und $7$
- [ ] $42$ und $0$

> Bei einer Diagonalmatrix sind die Diagonaleinträge Eigenwerte.

### Eigenwerte erkennen
Welche Eigenwerte besitzt $A=\begin{pmatrix}7&0\\0&-8\end{pmatrix}$?

- [ ] $7$ und $8$
- [x] $7$ und $-8$
- [ ] $-7$ und $-8$
- [ ] $56$ und $0$

> Bei einer Diagonalmatrix sind die Diagonaleinträge Eigenwerte.

### Eigenwerte erkennen
Welche Eigenwerte besitzt $A=\begin{pmatrix}8&0\\0&-9\end{pmatrix}$?

- [ ] $8$ und $9$
- [x] $8$ und $-9$
- [ ] $72$ und $0$
- [ ] $-8$ und $-9$

> Bei einer Diagonalmatrix sind die Diagonaleinträge Eigenwerte.

### Eigenwerte erkennen
Welche Eigenwerte besitzt $A=\begin{pmatrix}9&0\\0&-10\end{pmatrix}$?

- [ ] $-9$ und $-10$
- [ ] $9$ und $10$
- [ ] $90$ und $0$
- [x] $9$ und $-10$

> Bei einer Diagonalmatrix sind die Diagonaleinträge Eigenwerte.

### Eigenwerte erkennen
Welche Eigenwerte besitzt $A=\begin{pmatrix}10&0\\0&-11\end{pmatrix}$?

- [x] $10$ und $-11$
- [ ] $-10$ und $-11$
- [ ] $110$ und $0$
- [ ] $10$ und $11$

> Bei einer Diagonalmatrix sind die Diagonaleinträge Eigenwerte.

### Gleichgewichte
Eine skalare Gleichung lautet $x'=-x+2$. Wo liegt das Gleichgewicht?

- [ ] $x_*=-1$
- [ ] $x_*=0$
- [ ] $x_*=3$
- [x] $x_*=2$

> Bei $x'=-kx+2k$ ergibt $0=-kx+2k$ den stationären Wert $x_*=2$.

### Gleichgewichte
Eine skalare Gleichung lautet $x'=-2x+4$. Wo liegt das Gleichgewicht?

- [ ] $x_*=-2$
- [ ] $x_*=6$
- [x] $x_*=2$
- [ ] $x_*=0$

> Bei $x'=-kx+2k$ ergibt $0=-kx+2k$ den stationären Wert $x_*=2$.

### Gleichgewichte
Eine skalare Gleichung lautet $x'=-3x+6$. Wo liegt das Gleichgewicht?

- [ ] $x_*=9$
- [x] $x_*=2$
- [ ] $x_*=-3$
- [ ] $x_*=0$

> Bei $x'=-kx+2k$ ergibt $0=-kx+2k$ den stationären Wert $x_*=2$.

### Gleichgewichte
Eine skalare Gleichung lautet $x'=-4x+8$. Wo liegt das Gleichgewicht?

- [ ] $x_*=0$
- [ ] $x_*=12$
- [ ] $x_*=-4$
- [x] $x_*=2$

> Bei $x'=-kx+2k$ ergibt $0=-kx+2k$ den stationären Wert $x_*=2$.

### Gleichgewichte
Eine skalare Gleichung lautet $x'=-5x+10$. Wo liegt das Gleichgewicht?

- [ ] $x_*=15$
- [ ] $x_*=-5$
- [x] $x_*=2$
- [ ] $x_*=0$

> Bei $x'=-kx+2k$ ergibt $0=-kx+2k$ den stationären Wert $x_*=2$.

### Gleichgewichte
Eine skalare Gleichung lautet $x'=-6x+12$. Wo liegt das Gleichgewicht?

- [ ] $x_*=18$
- [x] $x_*=2$
- [ ] $x_*=-6$
- [ ] $x_*=0$

> Bei $x'=-kx+2k$ ergibt $0=-kx+2k$ den stationären Wert $x_*=2$.

### Gleichgewichte
Eine skalare Gleichung lautet $x'=-7x+14$. Wo liegt das Gleichgewicht?

- [ ] $x_*=0$
- [ ] $x_*=21$
- [ ] $x_*=-7$
- [x] $x_*=2$

> Bei $x'=-kx+2k$ ergibt $0=-kx+2k$ den stationären Wert $x_*=2$.

### Gleichgewichte
Eine skalare Gleichung lautet $x'=-8x+16$. Wo liegt das Gleichgewicht?

- [ ] $x_*=24$
- [ ] $x_*=-8$
- [x] $x_*=2$
- [ ] $x_*=0$

> Bei $x'=-kx+2k$ ergibt $0=-kx+2k$ den stationären Wert $x_*=2$.

### Gleichgewichte
Eine skalare Gleichung lautet $x'=-9x+18$. Wo liegt das Gleichgewicht?

- [ ] $x_*=0$
- [x] $x_*=2$
- [ ] $x_*=27$
- [ ] $x_*=-9$

> Bei $x'=-kx+2k$ ergibt $0=-kx+2k$ den stationären Wert $x_*=2$.

### Gleichgewichte
Eine skalare Gleichung lautet $x'=-10x+20$. Wo liegt das Gleichgewicht?

- [x] $x_*=2$
- [ ] $x_*=0$
- [ ] $x_*=-10$
- [ ] $x_*=30$

> Bei $x'=-kx+2k$ ergibt $0=-kx+2k$ den stationären Wert $x_*=2$.

### Matrixexponential
Für $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$: Was ist $e^{tA}$?

- [ ] $\begin{pmatrix}1&1\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}e^t&t\\0&e^t\end{pmatrix}$
- [ ] $\begin{pmatrix}0&t\\0&0\end{pmatrix}$
- [x] $\begin{pmatrix}1&t\\0&1\end{pmatrix}$

> Da $A^2=0$, ist $e^{tA}=I+tA$.

### Matrixexponential
Für $A=\begin{pmatrix}0&2\\0&0\end{pmatrix}$: Was ist $e^{tA}$?

- [ ] $\begin{pmatrix}e^t&2t\\0&e^t\end{pmatrix}$
- [ ] $\begin{pmatrix}0&2t\\0&0\end{pmatrix}$
- [ ] $\begin{pmatrix}1&2\\0&1\end{pmatrix}$
- [x] $\begin{pmatrix}1&2t\\0&1\end{pmatrix}$

> Da $A^2=0$, ist $e^{tA}=I+tA$.

### Matrixexponential
Für $A=\begin{pmatrix}0&3\\0&0\end{pmatrix}$: Was ist $e^{tA}$?

- [x] $\begin{pmatrix}1&3t\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}e^t&3t\\0&e^t\end{pmatrix}$
- [ ] $\begin{pmatrix}1&3\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}0&3t\\0&0\end{pmatrix}$

> Da $A^2=0$, ist $e^{tA}=I+tA$.

### Matrixexponential
Für $A=\begin{pmatrix}0&4\\0&0\end{pmatrix}$: Was ist $e^{tA}$?

- [ ] $\begin{pmatrix}1&4\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}0&4t\\0&0\end{pmatrix}$
- [ ] $\begin{pmatrix}e^t&4t\\0&e^t\end{pmatrix}$
- [x] $\begin{pmatrix}1&4t\\0&1\end{pmatrix}$

> Da $A^2=0$, ist $e^{tA}=I+tA$.

### Matrixexponential
Für $A=\begin{pmatrix}0&5\\0&0\end{pmatrix}$: Was ist $e^{tA}$?

- [ ] $\begin{pmatrix}e^t&5t\\0&e^t\end{pmatrix}$
- [ ] $\begin{pmatrix}1&5\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}0&5t\\0&0\end{pmatrix}$
- [x] $\begin{pmatrix}1&5t\\0&1\end{pmatrix}$

> Da $A^2=0$, ist $e^{tA}=I+tA$.

### Matrixexponential
Für $A=\begin{pmatrix}0&6\\0&0\end{pmatrix}$: Was ist $e^{tA}$?

- [ ] $\begin{pmatrix}1&6\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}0&6t\\0&0\end{pmatrix}$
- [x] $\begin{pmatrix}1&6t\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}e^t&6t\\0&e^t\end{pmatrix}$

> Da $A^2=0$, ist $e^{tA}=I+tA$.

### Matrixexponential
Für $A=\begin{pmatrix}0&7\\0&0\end{pmatrix}$: Was ist $e^{tA}$?

- [ ] $\begin{pmatrix}1&7\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}0&7t\\0&0\end{pmatrix}$
- [x] $\begin{pmatrix}1&7t\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}e^t&7t\\0&e^t\end{pmatrix}$

> Da $A^2=0$, ist $e^{tA}=I+tA$.

### Matrixexponential
Für $A=\begin{pmatrix}0&8\\0&0\end{pmatrix}$: Was ist $e^{tA}$?

- [x] $\begin{pmatrix}1&8t\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}e^t&8t\\0&e^t\end{pmatrix}$
- [ ] $\begin{pmatrix}1&8\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}0&8t\\0&0\end{pmatrix}$

> Da $A^2=0$, ist $e^{tA}=I+tA$.

### Matrixexponential
Für $A=\begin{pmatrix}0&9\\0&0\end{pmatrix}$: Was ist $e^{tA}$?

- [ ] $\begin{pmatrix}e^t&9t\\0&e^t\end{pmatrix}$
- [x] $\begin{pmatrix}1&9t\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}1&9\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}0&9t\\0&0\end{pmatrix}$

> Da $A^2=0$, ist $e^{tA}=I+tA$.

### Matrixexponential
Für $A=\begin{pmatrix}0&10\\0&0\end{pmatrix}$: Was ist $e^{tA}$?

- [x] $\begin{pmatrix}1&10t\\0&1\end{pmatrix}$
- [ ] $\begin{pmatrix}0&10t\\0&0\end{pmatrix}$
- [ ] $\begin{pmatrix}e^t&10t\\0&e^t\end{pmatrix}$
- [ ] $\begin{pmatrix}1&10\\0&1\end{pmatrix}$

> Da $A^2=0$, ist $e^{tA}=I+tA$.

### Modellierung: gekoppelte Prozesse
Zwei Stoffmengen erfüllen $u'=-1u+1v$ und $v'=1u-1v$. Welche Größe bleibt erhalten?

- [x] $u+v$
- [ ] $u^2+v$
- [ ] $uv$
- [ ] $u-v$

> Addiert man beide Gleichungen, erhält man $(u+v)'=0$.

### Modellierung: gekoppelte Prozesse
Zwei Stoffmengen erfüllen $u'=-2u+2v$ und $v'=2u-2v$. Welche Größe bleibt erhalten?

- [ ] $u^2+v$
- [x] $u+v$
- [ ] $uv$
- [ ] $u-v$

> Addiert man beide Gleichungen, erhält man $(u+v)'=0$.

### Modellierung: gekoppelte Prozesse
Zwei Stoffmengen erfüllen $u'=-3u+3v$ und $v'=3u-3v$. Welche Größe bleibt erhalten?

- [ ] $u-v$
- [ ] $uv$
- [ ] $u^2+v$
- [x] $u+v$

> Addiert man beide Gleichungen, erhält man $(u+v)'=0$.

### Modellierung: gekoppelte Prozesse
Zwei Stoffmengen erfüllen $u'=-4u+4v$ und $v'=4u-4v$. Welche Größe bleibt erhalten?

- [ ] $uv$
- [x] $u+v$
- [ ] $u-v$
- [ ] $u^2+v$

> Addiert man beide Gleichungen, erhält man $(u+v)'=0$.

### Modellierung: gekoppelte Prozesse
Zwei Stoffmengen erfüllen $u'=-5u+5v$ und $v'=5u-5v$. Welche Größe bleibt erhalten?

- [ ] $u-v$
- [ ] $u^2+v$
- [ ] $uv$
- [x] $u+v$

> Addiert man beide Gleichungen, erhält man $(u+v)'=0$.

### Modellierung: gekoppelte Prozesse
Zwei Stoffmengen erfüllen $u'=-6u+6v$ und $v'=6u-6v$. Welche Größe bleibt erhalten?

- [ ] $u-v$
- [x] $u+v$
- [ ] $uv$
- [ ] $u^2+v$

> Addiert man beide Gleichungen, erhält man $(u+v)'=0$.

### Modellierung: gekoppelte Prozesse
Zwei Stoffmengen erfüllen $u'=-7u+7v$ und $v'=7u-7v$. Welche Größe bleibt erhalten?

- [ ] $u^2+v$
- [x] $u+v$
- [ ] $uv$
- [ ] $u-v$

> Addiert man beide Gleichungen, erhält man $(u+v)'=0$.

### Modellierung: gekoppelte Prozesse
Zwei Stoffmengen erfüllen $u'=-8u+8v$ und $v'=8u-8v$. Welche Größe bleibt erhalten?

- [ ] $uv$
- [ ] $u-v$
- [x] $u+v$
- [ ] $u^2+v$

> Addiert man beide Gleichungen, erhält man $(u+v)'=0$.

### Modellierung: gekoppelte Prozesse
Zwei Stoffmengen erfüllen $u'=-9u+9v$ und $v'=9u-9v$. Welche Größe bleibt erhalten?

- [ ] $u^2+v$
- [ ] $uv$
- [x] $u+v$
- [ ] $u-v$

> Addiert man beide Gleichungen, erhält man $(u+v)'=0$.

### Modellierung: gekoppelte Prozesse
Zwei Stoffmengen erfüllen $u'=-10u+10v$ und $v'=10u-10v$. Welche Größe bleibt erhalten?

- [ ] $uv$
- [x] $u+v$
- [ ] $u^2+v$
- [ ] $u-v$

> Addiert man beide Gleichungen, erhält man $(u+v)'=0$.

### Inhomogene Systeme
Für $x'=-x+1$ und $x(0)=0$: Welche Lösung gilt?

- [ ] $x(t)=e^{-t}$
- [ ] $x(t)=t$
- [x] $x(t)=1-e^{-t}$
- [ ] $x(t)=1+e^{-t}$

> Eine konstante partikuläre Lösung ist eins; der homogene Anteil korrigiert den Anfangswert.

