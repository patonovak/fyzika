---
title: Dynamika tekutín
---

## Dynamika tekutín

Častice kvapalín a plynov si môžu počas pohybu vymieňať svoje polohy, čím sa opis ich pohybu značne sťažuje. Ak prevažuje pohyb tekutiny v jednom smere, hovoríme o **prúdení**.

Každá častica prúdiacej tekutiny má svoju okamžitú rýchlosť $\vec v$ a ich trajektórie znázorňujeme **prúdnicami**. Prúdnica je myslená čiara, ktorej dotyčnica v každom bode má smer okamžitej rýchlosti častice.

Rozlišujeme:

- **stacionárne prúdenie**, pri ktorom je rýchlosť prúdiacich častíc prechádzajúcich ľubovoľným miestom stála,
- **nestacionárne prúdenie**, pri ktorom sa rýchlosť prúdiacich častíc v danom mieste mení s časom.

## Objemový a hmotnostný prietok

Pri ustálenom prúdení prechádza každým bodom prúdu iba jedna prúdnica. Trubica, ktorej plášť tvoria prúdnice, je **prúdová trubica**.

Objemový prietok $Q_V$ vyjadruje objem kvapaliny $\Delta V$, ktorý pretečie daným prierezom trubice za čas $\Delta t$.

$$Q_V=\frac{\Delta V}{\Delta t}$$

Ak preteká tekutina prierezom s obsahom $S$ stálou rýchlosťou $v$, potom

$$Q_V=Sv.$$

Hmotnostný tok alebo hmotnostný prietok $Q_m$ vyjadruje hmotnosť kvapaliny s hustotou $\rho_k$, ktorá pretečie prierezom trubice za jednotku času.

$$Q_m=\frac{\Delta m}{\Delta t}=\rho_k\frac{\Delta V}{\Delta t}=\rho_k Sv$$

## Rovnica kontinuity

Pri ustálenom prúdení tekutiny je jej objemový prietok konštantný:

$$Q_V=\mathrm{konšt.}\quad\Longleftrightarrow\quad Sv=\mathrm{konšt.}$$

V užšej časti trubice je preto rýchlosť prúdenia väčšia a v širšej časti menšia.

## Bernoulliho rovnica

Majme prúdovú trubicu s premenným prierezom. So zmenou rýchlosti prúdiacich častíc kvapaliny sa mení aj ich kinetická energia:

$$\Delta E_k=\frac12\Delta m(v_2^2-v_1^2)=\frac12\rho\Delta V(v_2^2-v_1^2).$$

Pri presúvaní kvapaliny s objemom $\Delta V$ vykoná tlaková sila prácu

$$W=F\Delta s=pS\Delta s=p\Delta V.$$

Celková práca tlakových síl je

$$W=p_1\Delta V-p_2\Delta V.$$

Z rovnosti $W=\Delta E_k$ dostaneme **Bernoulliho rovnicu**

$$p_1+\frac12\rho v_1^2=p_2+\frac12\rho v_2^2,$$

alebo

$$p+\frac12\rho v^2=\mathrm{konšt.}$$

Súčet kinetickej energie kvapaliny s jednotkovým objemom a tlaku je vo všetkých miestach vodorovnej trubice konštantný. Zo vzťahu vyplýva, že v zúženej časti trubice, kde je rýchlosť prúdenia väčšia, dochádza k poklesu tlaku. Tento jav nazývame **hydrodynamický paradox**.
