/* =====================================================================
   MAGIC MATH SISTERS – FRAGENKATALOG
   ---------------------------------------------------------------------
   Hier können Lehrkräfte die Fragen ändern, ergänzen oder löschen.
   Das Spiel nimmt die Fragen der Reihe nach (nach der letzten Frage
   geht es wieder von vorne los).

   Aufbau einer Frage:
     type : kurze Kategorie, z. B. 'Rechnen' oder 'Verständnis'
     q    : der Fragetext (HTML erlaubt, Formeln in \\( ... \\) )
     a    : genau 4 Antwortmöglichkeiten
     ok   : Nummer der richtigen Antwort: 0 = erste, 1 = zweite, 2 = dritte, 3 = vierte
     why  : kurze Erklärung, die nach dem Antworten angezeigt wird

   WICHTIG für Formeln: In dieser Datei muss jeder Backslash doppelt
   geschrieben werden, also \\frac statt \frac und \\( statt \(.

   Wie viele Fragen braucht das Spiel?
     Es gibt 16 Σ-Kisten und mindestens 3 Drachenfragen.
     Mit 19 oder mehr Fragen kommt keine Frage doppelt vor.
   ===================================================================== */

window.MMS_SETTINGS = {
  shuffle: false   // true = Fragen bei jedem neuen Spiel zufällig mischen
};

window.MMS_QUESTIONS = [
{type:'Rechnen',
 q:'Löse das Anfangswertproblem \\(y^{\\prime}(t)+2y(t)=0,\\quad y(0)=3\\).',
 a:['\\(3e^{2t}\\)','\\(3e^{-2t}\\)','\\(e^{-2t}+2\\)','\\(3-2t\\)'],
 ok:1,
 why:'\\(y(t)=Ce^{-2t}\\); aus \\(y(0)=3\\) folgt \\(C=3\\).'},

{type:'Verständnis',
 q:'Für \\(y^{\\prime}=f(t,y)\\) sei \\(f\\) stetig und bezüglich \\(y\\) lokal Lipschitz-stetig. Welche Aussage gilt?',
 a:['Es gibt nie Lösungen.','Das Anfangswertproblem besitzt lokal genau eine Lösung.','Alle Lösungen sind periodisch.','Alle Lösungen sind global beschränkt.'],
 ok:1,
 why:'Der Satz von Picard–Lindelöf liefert lokale Existenz und Eindeutigkeit.'},

{type:'Rechnen',
 q:'Welche Funktion löst \\(y^{\\prime\\prime}-3y^{\\prime}+2y=0\\) <strong>nicht</strong>?',
 a:['\\(e^t\\)','\\(e^{2t}\\)','\\(e^{3t}\\)','\\(4e^t-2e^{2t}\\)'],
 ok:2,
 why:'Die charakteristischen Nullstellen sind \\(1\\) und \\(2\\).'},

{type:'Verständnis',
 q:'Was gilt für \\(y^{\\prime}=-5y\\)?',
 a:['Die Nulllösung ist instabil.','Die Nulllösung ist asymptotisch stabil.','Alle Lösungen sind periodisch.','Jede Lösung erreicht Null in endlicher Zeit.'],
 ok:1,
 why:'Jede Lösung \\(y(t)=Ce^{-5t}\\) konvergiert gegen Null.'},

{type:'Rechnen',
 q:'Welche Funktion löst \\(u_t=u_{xx}\\) auf \\((0,\\pi)\\) mit \\(u(t,0)=u(t,\\pi)=0\\)?',
 a:['\\(e^{-4t}\\sin(2x)\\)','\\(e^{4t}\\sin(2x)\\)','\\(e^{-2t}\\sin(2x)\\)','\\(e^{-4t}\\cos(2x)\\)'],
 ok:0,
 why:'\\(\\partial_{xx}\\sin(2x)=-4\\sin(2x)\\).'},

{type:'Verständnis',
 q:'Welche Aussage gilt für die Wärmeleitungsgleichung mit homogenen Dirichlet-Randbedingungen?',
 a:['Alle Lösungen sind periodisch.','Die \\(L^2\\)-Energie ist nicht zunehmend.','Jede Lösung ist räumlich konstant.','Es gibt keine stationäre Lösung.'],
 ok:1,
 why:'Die Energieidentität lautet \\(\\frac{d}{dt}\\int|u|^2=-2\\int|u_x|^2\\leq0\\).'},

{type:'Rechnen',
 q:'Bestimme die Eigenwerte von \\(A=\\begin{pmatrix}-1&0\\\\0&2\\end{pmatrix}\\).',
 a:['\\(-1\\) und \\(2\\)','\\(1\\) und \\(-2\\)','\\(-2\\) und \\(1\\)','\\(0\\) und \\(1\\)'],
 ok:0,
 why:'Die Eigenwerte einer Diagonalmatrix sind ihre Diagonaleinträge.'},

{type:'Verständnis',
 q:'Welche Aussage über \\(u_{tt}=c^2u_{xx}\\) für \\(c>0\\) ist richtig?',
 a:['Es beschreibt Wärmeleitung.','\\(c\\) ist die Ausbreitungsgeschwindigkeit.','Alle Lösungen zerfallen exponentiell.','Randbedingungen sind immer unnötig.'],
 ok:1,
 why:'Die Wellengleichung besitzt endliche Ausbreitungsgeschwindigkeit.'}
];
