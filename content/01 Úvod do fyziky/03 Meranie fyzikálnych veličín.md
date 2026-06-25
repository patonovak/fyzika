---
title: Meranie fyzikálnych veličín
---

> [!abstract] Kľúčové pojmy
> fyzikálna veličina, jednotka fyzikálnej veličiny, skalárne a vektorové fyzikálne veličiny, sústava SI, násobky a diely, základné, odvodené, vedľajšie a doplnkové fyzikálne veličiny, meranie, chyby merania

## Fyzikálne veličiny a ich jednotky

**Fyzikálne veličiny** charakterizujú fyzikálne vlastnosti, stavy alebo zmeny telies, ktoré môžeme **merať**, teda stanoviť ich **veľkosť**. Sú nimi napríklad hmotnosť, teplota, dĺžka alebo tlak.

<p style="text-align: center;">
  <img src="/static/images/vahy.png" alt="Porovnanie hmotnosti futbalovej lopty na váhach" width="500">
</p>

**Obr. 1.** Fyzikálnu veličinu meriame tak, že porovnávame jej veľkosť s dohodnutou jednotkou tejto veličiny. Na príklade hmotnosti to znamená, že porovnávame hmotnosť telesa s telesom, ktorého hmotnosť stanovíme presne na 1 kilogram. Ak zistíme, že lopta je o polovici ľahšia ako 1 kilogram, napíšeme $m=0,5\;\mathrm{kg}$.

Pre označenie fyzikálnych veličín používame dohodnuté **značky veličín**. Napríklad hmotnosť značíme $m$ (angl. *mass*), silu $F$ (angl. *force*) atď.

**Meranie fyzikálnej veličiny** je určovanie jej hodnoty. Meraním zisťujeme, koľkokrát je hodnota danej veličiny väčšia ako **meracia jednotka**. **Meracia jednotka** (skrátene jednotka) je fixná hodnota veličiny, s ktorou porovnávame veličiny rovnakého druhu.

Hodnota fyzikálnej veličiny je potom určená číselnou hodnotou a meracou jednotkou. Ak označíme ľubovoľnú veličinu $X$, jej číselnú hodnotu $\{X\}$ a jednotku $[X]$, platí:

$$
X = \{X\}\cdot [X]
$$

V zápisoch väčšinou znak násobenia vynechávame.

> [!warning] Písanie jednotiek do hranatých zátvoriek
> Písanie jednotiek fyzikálnych veličín do hranatých zátvoriek je častou chybou a je dobré sa tomu vyvarovať. Zápisy ako napr. $[\mathrm{kg}]$, $[^\circ\mathrm{C}]$ sú nesprávne, či už v zápise fyzikálnej úlohy alebo pri označení osí grafu. Označenie v hranatej zátvorke čítame ako „jednotka fyzikálnej veličiny $X$“.

> [!example] Zápis hodnoty veličiny
> V zápise $l = 5\,\mathrm{m}$ je $l$ značka fyzikálnej veličiny, $5$ je číselná hodnota a $\mathrm{m}$ (meter) je meracia jednotka. Môžeme písať, že $\{l\}=5$ a $[l]=\mathrm{m}$. V textoch písaných na počítači píšeme značku fyzikálnej veličiny kurzívou, jednotky píšeme stojatým písmom.

Jednou z oblastí skúmania fyziky je meranie hodnôt fyzikálnych veličín. Aby bolo možné výsledky medzi sebou porovnávať, potrebujeme pri meraní používať rovnaké jednotky, meradlá a meracie postupy.

## Medzinárodná sústava jednotiek SI

U nás, ale aj v mnohých iných krajinách, používame tzv. **Medzinárodnú sústavu jednotiek SI** (z fr. *Système International d'Unités*), ktorú tvoria:

### Základné fyzikálne jednotky

Základných jednotiek a im prislúchajúcich fyzikálnych veličín je sedem.

| fyzikálna veličina | značka veličiny | základná jednotka | značka jednotky |
|---|---:|---|---:|
| dĺžka | $l$ | meter | $\mathrm{m}$ |
| hmotnosť | $m$ | kilogram | $\mathrm{kg}$ |
| čas | $t$ | sekunda | $\mathrm{s}$ |
| elektrický prúd | $I$ | ampér | $\mathrm{A}$ |
| termodynamická teplota | $T$ | kelvin | $\mathrm{K}$ |
| látkové množstvo | $n$ | mol | $\mathrm{mol}$ |
| svietivosť | $I$ | kandela | $\mathrm{cd}$ |

### Odvodené fyzikálne jednotky

Odvodené jednotky sú jednotky sústavy SI, ktoré sú odvodené zo základných jednotiek tejto sústavy na základe tzv. **definičných vzťahov**. Niektoré z nich majú aj svoje vlastné názvy a označenie, nemožno z nich na prvý pohľad odčítať príslušnosť k daným základným jednotkám. Odvodenou jednotkou je napríklad jednotka rýchlosti meter za sekundu $(\mathrm{m}\cdot\mathrm{s}^{-1})$ alebo jednotka frekvencie hertz $(\mathrm{Hz}=\mathrm{s}^{-1})$.

$$
[v] = \frac{[s]}{[t]} = \frac{\mathrm{m}}{\mathrm{s}} = \mathrm{m}\cdot\mathrm{s}^{-1}
$$

$$
[\rho] = \frac{[m]}{[V]} = \frac{\mathrm{kg}}{\mathrm{m}^{3}} = \mathrm{kg}\cdot\mathrm{m}^{-3}
$$

Ďalšími odvodenými jednotkami sú napríklad newton $(\mathrm{N})$, joule $(\mathrm{J})$, watt $(\mathrm{W})$, volt $(\mathrm{V})$ atď.

### Doplnkové fyzikálne jednotky

Doplnkové fyzikálne jednotky sú dve, jednotka rovinného uhla **radián** $(\mathrm{rad})$ a jednotka priestorového uhla **steradián** $(\mathrm{sr})$. Obidve sú to jednotky **bezrozmerné**, nemajú fyzikálny rozmer.

| fyzikálna veličina | značka veličiny | základná jednotka | značka jednotky |
|---|---|---|---:|
| rovinný uhol | napr. $\alpha, \varphi$ | radián | $\mathrm{rad}$ |
| priestorový uhol | napr. $\Omega$ | steradián | $\mathrm{sr}$ |

> [!note] Radián a steradián
> Jeden radián je rovinný uhol, ktorý na kružnici s polomerom $r$ vytne oblúk rovnakej dĺžky, ako je polomer kružnice $l = r$. Jeden steradián je priestorový uhol, ktorý s vrcholom v strede gule s polomerom $r$ vytína na povrchu tejto gule plochu rovnú druhej mocnine polomeru tejto gule $S = r^{2}$.

### Vedľajšie fyzikálne jednotky

Vedľajšie fyzikálne jednotky sú jednotky, ktoré nepatria do sústavy SI, ale ich používanie má svoje praktické dôvody. Patrí medzi ne napríklad hodina $(\mathrm{h})$, minúta $(\mathrm{min})$, liter $(\mathrm{l})$, tona $(\mathrm{t})$, hektár $(\mathrm{ha})$, astronomická jednotka $(\mathrm{AU})$, elektrónvolt $(\mathrm{eV})$ atď.

### Násobky a diely jednotiek

Tvoria sa zo základných a odvodených jednotiek pomocou mocnín so základom $10$. Ich názvy možno vytvoriť z názvu jednotky a tzv. **normalizovanej predpony**.

| predpona | značka predpony | pomer k základnej jednotke |
|---|---:|---:|
| tera- | $\mathrm{T}$ | $10^{12}$ |
| giga- | $\mathrm{G}$ | $10^{9}$ |
| mega- | $\mathrm{M}$ | $10^{6}$ |
| kilo- | $\mathrm{k}$ | $10^{3}$ |
| hekto- | $\mathrm{h}$ | $10^{2}$ |
| deka- | $\mathrm{da}$ | $10^{1}$ |
| deci- | $\mathrm{d}$ | $10^{-1}$ |
| centi- | $\mathrm{c}$ | $10^{-2}$ |
| mili- | $\mathrm{m}$ | $10^{-3}$ |
| mikro- | $\mu$ | $10^{-6}$ |
| nano- | $\mathrm{n}$ | $10^{-9}$ |
| piko- | $\mathrm{p}$ | $10^{-12}$ |

> [!example] Príklad 2.1: Premena jednotiek
> Premeňte na jednotky v zátvorke:
>
> a) $23\,\mathrm{pF}$ $(\mathrm{F})$  
> b) $6\,\mathrm{nm}$ $(\mathrm{mm})$  
> c) $10^{24}\,\mathrm{Hz}$ $(\mathrm{THz})$
>
> **Riešenie:**
>
> $$
> 23\,\mathrm{pF}
> = 23\cdot 10^{-12}\,\mathrm{F}
> = 2{,}3\cdot 10^{1}\cdot 10^{-12}\,\mathrm{F}
> = 2{,}3\cdot 10^{-11}\,\mathrm{F}
> $$
>
> $$
> 6\,\mathrm{nm}
> = 6\cdot 10^{-9}\,\mathrm{m}
> = 6\cdot 10^{-9}\cdot 10^{3}\,\mathrm{mm}
> = 6\cdot 10^{-6}\,\mathrm{mm}
> $$
>
> $$
> 10^{24}\,\mathrm{Hz}
> = 10^{24}\cdot 10^{-12}\,\mathrm{THz}
> = 10^{12}\,\mathrm{THz}
> $$

## Skalárne a vektorové fyzikálne veličiny

**Skalárne fyzikálne veličiny** (skrátene skaláry) sú fyzikálne veličiny, ktoré sú jednoznačne určené číselnou hodnotou a meracou jednotkou. Patrí medzi ne napríklad hmotnosť, teplota, čas, tlak, energia atď.

**Vektorové fyzikálne veličiny** (skrátene vektory) sú fyzikálne veličiny, ktoré sú jednoznačne určené číselnou hodnotou, meracou jednotkou a **smerom**. Patrí medzi ne napríklad sila, zrýchlenie, okamžitá rýchlosť, moment sily atď. Značíme ich šípkou nad značkou veličiny, napríklad vektor sily píšeme $\vec{F}$. Graficky ich znázorňujeme pomocou orientovanej úsečky, ktorá leží na **vektorovej priamke**. Veľkosť orientovanej úsečky zodpovedá veľkosti danej fyzikálnej veličiny. Začiatok tejto úsečky predstavuje **pôsobisko** vektorovej fyzikálnej veličiny.

> [!example] Znázornenie vektorovej veličiny
> Ak jeden dielik zodpovedá sile $1\,\mathrm{N}$ a orientovaná úsečka má dĺžku šesť dielikov, potom
>
> $$
> |\vec{F}| = F = 6\,\mathrm{N}.
> $$

## Meranie a chyby merania

**Meranie fyzikálnej veličiny** je určovanie jej hodnoty. Spôsob, akým možno danú fyzikálnu veličinu zmerať, sa nazýva **meracia metóda**. Meracie metódy rozdeľujeme na:

- **priamu metódu** - hodnotu meranej veličiny zisťujeme priamo, porovnaním s dohodnutou jednotkou danej veličiny, príkladom môže byť meranie dĺžky pravítkom alebo meranie hmotnosti váhami,
- **nepriamu metódu** - hodnotu meranej veličiny zisťujeme nepriamo, na základe určitého fyzikálneho vzťahu z hodnôt iných veličín, príkladom môže byť určenie hybnosti pomocou hmotnosti a rýchlosti.

## Chyby merania

Žiadne meranie nie je presné, pri opakovanom meraní fyzikálnej veličiny môžeme dostávať odlišné výsledky. Hovoríme, že **meranie je zaťažené chybami**. Chyby vznikajúce pri každom meraní môžeme zhruba rozdeliť do troch skupín:

- **hrubé chyby** majú pôvod v zlyhaní pozorovateľa, vznikajú nepozornosťou alebo prehliadnutím. Nameraná hodnota sa značne líši od ostatných hodnôt,
- **systematické chyby** sú spôsobené nedokonalosťou meracej metódy alebo meracích prístrojov,
- **náhodné chyby** vznikajú náhodnými rušivými vplyvmi, prejavujú sa tým, že výsledky opakovaných meraní sa od seba za rovnakých podmienok líšia.

## Spracovanie výsledkov merania

Vplyv náhodných chýb nemožno odstrániť, možno ho však zmenšiť tak, že danú hodnotu fyzikálnej veličiny meriame viackrát a z nameraných hodnôt určíme tzv. **najpravdepodobnejšiu hodnotu** meranej fyzikálnej veličiny. Najjednoduchší postup spracovania výsledkov meranej veličiny je nasledovný.

1. Ak meriame veličinu $x$ a dostaneme $n$ hodnôt $x_{1}, x_{2}, \ldots, x_{n}$, vypočítame pre tento súbor **aritmetický priemer hodnôt** $\overline{x}$, ktorý je daný nasledovným vzťahom:

$$
\overline{x} = \frac{x_{1}+x_{2}+\ldots+x_{n}}{n}
$$

2. Pre každé meranie určíme tzv. **absolútnu odchýlku merania** $\Delta x_{i}$, ktorá predstavuje rozdiel medzi nameranou hodnotou a aritmetickým priemerom:

$$
\Delta x_{i} = x_{i} - \overline{x}
$$

3. Určíme **priemernú odchýlku** ako aritmetický priemer absolútnych hodnôt odchýlok z meraní.

$$
\Delta x = \frac{|\Delta x_{1}| + |\Delta x_{2}| + \ldots + |\Delta x_{n}|}{n}
$$

4. Výsledok merania potom môžeme zapísať v tvare $x=\overline{x}\pm\Delta x$. Môžeme určiť aj tzv. **priemernú relatívnu odchýlku** $\delta x$ ako podiel priemernej odchýlky a aritmetického priemeru. Udávame ju v percentách, meranie považujeme za tým presnejšie, čím je relatívna chyba merania menšia (pri laboratórnych meraniach by mala byť menšia ako $1\,\%$ - vtedy hovoríme, že meranie je presné).

$$
\delta x = \frac{\Delta x}{\overline{x}}
$$

## Určovanie chýb niektorých meradiel

Chyba meradla v sebe zahŕňa systematickú a náhodnú chybu. Pokiaľ máme meradlo s analógovou stupnicou, chybu meradla odhadneme jednoduchým pravidlom - ako **polovicu najmenšieho dielika meradla**. V prípade milimetrového pravítka je tak chyba merania $0{,}5\,\mathrm{mm}$. Často je maximálna prípustná chyba merania udávaná výrobcom daného prístroja v percentách. Ak je presnosť prístroja napríklad $5\,\%$, znamená to, že sa skutočná hodnota meranej veličiny $x$ pohybuje v intervale $0{,}95$ až $1{,}05$ okolo nameranej hodnoty $\overline{x}$.

> [!example] Príklad 2.2: Spracovanie výsledkov merania
> Pri meraní objemu kovového telieska sme získali nasledovných desať hodnôt:
>
> $123{,}5\,\mathrm{cm}^{3}$; $123{,}6\,\mathrm{cm}^{3}$; $123{,}3\,\mathrm{cm}^{3}$; $123{,}4\,\mathrm{cm}^{3}$; $123{,}7\,\mathrm{cm}^{3}$; $123{,}8\,\mathrm{cm}^{3}$; $123{,}4\,\mathrm{cm}^{3}$; $123{,}5\,\mathrm{cm}^{3}$; $123{,}3\,\mathrm{cm}^{3}$; $123{,}6\,\mathrm{cm}^{3}$
>
> Spracujte meranie - určte aritmetický priemer, priemernú odchýlku a priemernú relatívnu odchýlku. Zapíšte výsledok merania v tvare $V=\overline{V}\pm\Delta V$; $\delta V$.
>
> **Riešenie:**
>
> Najprv určíme aritmetický priemer nameraných desiatich hodnôt objemu kovového telieska.
>
> $$
> \overline{V}
> = \frac{V_{1}+V_{2}+\ldots+V_{10}}{10}
> = \frac{123{,}5+123{,}6+123{,}3+123{,}4+123{,}7+123{,}8+123{,}4+123{,}5+123{,}3+123{,}6}{10}\,\mathrm{cm}^{3}
> = 123{,}51\,\mathrm{cm}^{3}
> \approx 123{,}5\,\mathrm{cm}^{3}
> $$
>
> Výsledok aritmetického priemeru sme zaokrúhlili na rovnaký počet platných miest, aké majú namerané hodnoty objemu (4 platné miesta). Teraz pre každé meranie určíme absolútnu odchýlku merania $\Delta V_{1}$ až $\Delta V_{10}$, z ktorých aritmetického priemeru dostaneme priemernú odchýlku $\Delta V$. Výsledky aj s ukážkovým výpočtom sú zhrnuté v tabuľke nižšie.
>
> Pri výpočtoch zatiaľ využívame hodnotu aritmetického priemeru nezaokrúhleného, teda $\overline{V}=123{,}51\,\mathrm{cm}^{3}$. Pre $\Delta V_{2}$ tak máme
>
> $$
> \Delta V_{2} = V_{2} - \overline{V} = 0{,}09\,\mathrm{cm}^{3}.
> $$
>
> | číslo merania | $V_{i}/\mathrm{cm}^{3}$ | $\Delta V_{i}/\mathrm{cm}^{3}$ |
> |---:|---:|---:|
> | 1 | $123{,}5$ | $-0{,}01$ |
> | 2 | $123{,}6$ | $0{,}09$ |
> | 3 | $123{,}3$ | $-0{,}21$ |
> | 4 | $123{,}4$ | $-0{,}11$ |
> | 5 | $123{,}7$ | $0{,}19$ |
> | 6 | $123{,}8$ | $0{,}29$ |
> | 7 | $123{,}4$ | $-0{,}11$ |
> | 8 | $123{,}5$ | $-0{,}01$ |
> | 9 | $123{,}3$ | $-0{,}21$ |
> | 10 | $123{,}6$ | $0{,}09$ |
> | priemer | $123{,}51$ | $0{,}132$ |
>
> Pri výpočte priemernej odchýlky uvažujeme absolútne hodnoty odchýlok $|\Delta V_{i}|$.
>
> $$
> \Delta V = 0{,}132\,\mathrm{cm}^{3} \approx 0{,}1\,\mathrm{cm}^{3}
> $$
>
> Priemerná relatívna odchýlka je
>
> $$
> \delta V = \frac{\Delta V}{\overline{V}}
> = \frac{0{,}132}{123{,}51}
> \approx 0{,}001.
> $$
>
> Výsledok spracovania merania tak môžeme písať (už zaokrúhlene)
>
> $$
> V = (123{,}5 \pm 0{,}1)\,\mathrm{cm}^{3},
> $$
>
> kde priemerná relatívna odchýlka je $\delta V \approx 0{,}1\,\%$.
