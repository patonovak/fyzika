---
title: Elektrický prúd v kovoch
---

Väčšina kovov vďaka veľkému počtu voľných elektrónov, ktoré tvoria tzv. elektrónový plyn, sú dobrými elektrickými vodičmi. Tieto **vodivostné elektróny** konajú neusporiadaný tepelný pohyb. Po pripojení vodiča na zdroj jednosmerného napätia začne prevažovať pohyb elektrónov v jednom smere, hovoríme o vzniku elektrického prúdu. Graf závislosti elektrického prúdu prechádzajúceho vodičom od napätia medzi koncami vodiča sa nazýva **voltampérová charakteristika** (V-A charakteristika).

## OHMOV ZÁKON PRE ČASŤ ELEKTRICKÉHO OBVODU

Ak budeme meniť napätie medzi koncami elektrického vodiča pri stálej teplote, bude prúd pretekajúci vodičom priamo úmerný tomuto napätiu. Tento poznatok sformuloval v roku 1827 nemecký stredoškolský učiteľ fyziky a matematiky **Georg Ohm** a nazýva sa **Ohmov zákon**.

**Elektrický prúd $I$ prechádzajúci kovovým vodičom stálej teploty je priamo úmerný elektrickému napätiu $U$ medzi koncami tohto vodiča.**

$$
I = G \cdot U
$$

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/elektricky-prud/georg-ohm.png" alt="Georg Ohm">
  <figcaption>Obr. 4.2.3: Georg Ohm (1789 – 1854).</figcaption>
</figure>

Konštantou $G$ vo vzťahu vyššie pre daný vodič je tzv. **elektrická vodivosť**. Jej jednotkou je **siemens** (S). Častejšie sa však používa jej prevrátená hodnota – **elektrický odpor** $R$, pre ktorý platí vzťah $R = 1/G$. Jednotkou elektrického odporu je **ohm** ($\Omega$). Ohmov zákon potom prejde na známy tvar

$$
I = \frac{U}{R}
$$

## ZÁVISLOSŤ ELEKTRICKÉHO ODPORU OD TEPLOTY A VLASTNOSTÍ VODIČA

Pri pohybe vodivostných elektrónov vo vnútri vodiča dochádza k ich zrážkam s iónmi kovovej mriežky. Takto vzniká elektrický odpor, ktorý je vodivostným elektrónom kladený. S rastúcou teplotou sa zväčšuje aj amplitúda kmitavého pohybu iónov mriežky a dochádza k častejším zrážkam s elektrónmi. Odpor vodiča rastie so zväčšujúcou sa teplotou vodiča podľa vzťahu

$$
R = R_0 (1 + \alpha \Delta T).
$$

V tomto vzťahu je $R$ odpor vodiča pri teplote $T$, $R_0$ odpor vodiča pri teplote $T_0$ a $\alpha$ je **teplotný súčiniteľ elektrického odporu**. Je charakteristický pre daný materiál, jeho jednotkou je $\mathrm{K^{-1}}$.

Elektrický odpor kovového vodiča závisí aj od dĺžky vodiča $l$, obsahu priečneho rezu $S$ a od materiálu, z ktorého je vodič vyrobený. Táto závislosť je vyjadrená vzťahom

$$
R = \rho \frac{l}{S}.
$$

Konštanta $\rho$ sa nazýva **merný elektrický odpor**, alebo aj **rezistivita**. Je to veličina charakteristická pre materiál, z ktorého je vodič vyrobený. Jednotkou merného elektrického odporu je **ohm·meter** ($\Omega \cdot \mathrm{m}$).

## REZISTORY A ICH SPÁJANIE

**Rezistor** je elektrotechnická súčiastka s pevne stanovenou (fixnou) hodnotou elektrického odporu. Je zostrojený zväčša ako keramický valček, na ktorom je navinutý odporový drôt. Schematická značka pre rezistor je —▭—.

- Rezistory možno spájať **sériovo** (za sebou). Výsledný odpor zapojenia je potom rovný súčtu jednotlivých rezistorov.

$$
R = R_1 + R_2 + \ldots + R_n
$$

Celkové napätie na rezistoroch sa rovná súčtu napätí na všetkých rezistoroch, teda $U = U_1 + U_2 + \ldots U_n$. Všetkými sériovo zapojenými rezistormi preteká rovnaký elektrický prúd $I$.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/elektricky-prud/seriove-zapojenie-rezistorov.png" alt="Sériové zapojenie rezistorov">
  <figcaption>Obr. 4.2.4: Sériové zapojenie (za sebou) dvoch rezistorov.</figcaption>
</figure>

- Rezistory možno spájať aj **paralelne** (vedľa seba). Výsledný odpor zapojenia je daný vzťahom

$$
\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots + \frac{1}{R_n}.
$$

Elektrické prúdy sa rozdelia vo vetvách tak, že celkový elektrický prúd je rovný súčtu prúdov vo vetvách $I = I_1 + I_2 + \ldots I_n$. Na všetkých paralelne zapojených rezistoroch je rovnako veľké elektrické napätie $U$.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/elektricky-prud/paralelne-zapojenie-rezistorov.png" alt="Paralelné zapojenie rezistorov">
  <figcaption>Obr. 4.2.5: Paralelné zapojenie (vedľa seba) dvoch rezistorov.</figcaption>
</figure>

## OHMOV ZÁKON PRE UZAVRETÝ OBVOD

Jednoduchý elektrický obvod sa skladá z **vonkajšej časti**, do ktorej patria spotrebiče, vodiče. Priradíme jej vonkajší odpor obvodu $R$. Do tzv. **vnútornej časti** obvodu zaradíme vodivý priestor medzi pólmi (svorkami) zdroja elektrického napätia. Aj ten má svoj odpor a nazývame ho **vnútorný odpor zdroja** $R_i$.

Energia vydaná zdrojom s elektromotorickým napätím $U_e$ je $E_z = U_eQ$ a premieňa sa na energiu poľa vo vonkajšej $E_v$ a vnútornej $E_i$ časti obvodu, zo zákona zachovania energie potom platí

$$
E_z = E_v + E_i,
$$

$$
U_e Q = UQ + U_i Q,
$$

$$
U_e = U + U_i.
$$

Ak vyjadríme z Ohmovho zákona $U = RI$ a $U_i = R_iI$, dostaneme **Ohmov zákon pre uzavretý obvod**.

$$
I = \frac{U_e}{R + R_i}.
$$

**Elektrický prúd v uzavretom elektrickom obvode sa rovná podielu elektromotorického napätia zdroja a súčtu odporov vonkajšej a vnútornej časti obvodu.** Veličina $R + R_i$ sa nazýva celkový odpor obvodu. Veličina $U$ je svorkové napätie zdroja pri prechode prúdu $I$ a $U_i$ je úbytok napätia na zdroji.

Pre svorkové napätie možno tak napísať vzťah

$$
U = U_e - R_i I.
$$

Ako už bolo spomenuté, svorkové napätie je vždy menšie ako elektromotorické napätie nezaťaženého zdroja. Dôvodom je existencia vnútorného odporu zdroja elektrického napätia. **Ideálny zdroj** by mal nulový vnútorný odpor, platilo by preň $U = U_e$.

- **Tvrdý zdroj** napätia má malý vnútorný odpor. Svorkové napätie klesá v závislosti od odoberaného prúdu len nepatrne. Takýmto zdrojom je napr. autobatéria.
- **Mäkký zdroj** napätia má veľký vnútorný odpor. Svorkové napätie klesá v závislosti od odoberaného prúdu veľmi prudko. Takýmto zdrojom je napr. tužková baterka.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/elektricky-prud/typy-zdrojov.png" alt="Typy zdrojov napätia">
  <figcaption>Obr. 4.2.6: Typy zdrojov.</figcaption>
</figure>

Ak spojíme spojovacím vodičom svorky zdroja elektrického napätia, nastane **skrat** (spojenie nakrátko). Odpor vonkajšej časti obvodu je nulový, preto prúd v obvode dosahuje maximálnu, skratovú hodnotu.

$$
I_s = \frac{U_e}{R_i}
$$

> [!example] Príklad 4.2.1: Paralelne zapojené rezistory
> Zdroj napätia s elektromotorickým napätím 8 V a vnútorným odporom 1,6 $\Omega$ je pripojený na dva paralelne zapojené rezistory s odpormi 4 $\Omega$ a 6 $\Omega$. Určte svorkové napätie zaťaženého zdroja a prúdy v jednotlivých vetvách.
>
> **RIEŠENIE:**
>
> $U_e = 8 \text{ V}, R_i = 1,6 \Omega, R_1 = 4 \Omega, R_2 = 6 \Omega; U, I_1, I_2 = ?$
>
> Rezistory sú zapojené paralelne (vedľa seba), pre ich výsledný odpor platí
>
> $$
> R = \frac{R_1R_2}{R_1 + R_2} = 2,4 \Omega.
> $$
>
> Z Ohmovho zákona pre uzavretý obvod dostaneme prúd v nerozvetvenej časti obvodu.
>
> $$
> I = \frac{U_e}{R + R_i} = 2 \text{ A}
> $$
>
> Svorkové napätie zaťaženého zdroja je $U = RI = 4,8 \text{ V}$. Prúdy vo vetvách sú
>
> $$
> I_1 = \frac{U}{R_1} = 1,2 \text{ A}, \quad I_2 = \frac{U}{R_2} = 0,8 \text{ A}.
> $$

## ZMENA ROZSAHU MERACIEHO PRÍSTROJA

- **Meranie elektrického napätia.** Zariadenie na meranie elektrického napätia nazývame voltmeter. Už vieme, že ho zapájame paralelne k spotrebiču, na ktorom chceme napätie merať. Voltmeter musí tak veľký vnútorný odpor, aby prúd ním prechádzajúci $I_v$ bol čo najmenší. Rozsah voltmetra meníme pomocou **predradeného rezistora** s odporom $R_p$, ktorý pripájame k voltmetru **sériovo**. Celkové napätie $U$ sa rozdelí medzi voltmeter $U_v$ a predradený rezistor $U_p$. Ak chceme zväčšiť merací rozsah voltmetra s odporom $R_v$ $n$-krát, potom odpor predradeného rezistora musí byť

$$
R_p = (n - 1)R_v.
$$

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/elektricky-prud/predradeny-rezistor-voltmeter.png" alt="Predradený rezistor pri voltmetri">
  <figcaption>Obr. 4.2.7: Predradený rezistor zapájame sériovo k voltmetru a meníme tak jeho merací rozsah.</figcaption>
</figure>

- **Meranie elektrického prúdu.** Zariadenie na meranie elektrického prúdu nazývame ampérmeter. Už vieme, že ho zapájame sériovo so spotrebičom. Vnútorný odpor ampérmetra $R_a$ musí byť veľmi malý, aby sa pridaním ampérmetra nezvýšil až príliš odpor obvodu. Merací rozsah ampérmetra mení pomocou tzv. **bočníka**, čo je rezistor zapojený **paralelne** k ampérmetru. Tým odvedieme časť prúdu do inej vetvy. Ak chceme zväčšiť merací rozsah ampérmetra $n$-krát, pripojíme k nemu paralelne bočník s odporom

$$
R_b = \frac{R_a}{n - 1}.
$$

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/elektricky-prud/bocnik-ampermeter.png" alt="Bočník pri ampérmetri">
  <figcaption>Obr. 4.2.8: Bočník zapájame paralelne k ampérmetru a meníme tak jeho merací rozsah.</figcaption>
</figure>

> [!example] Príklad 4.2.2: Predradený rezistor
> Voltmeter má rozsah 150 V. Aký predradený rezistor musíme k nemu zapojiť, aby sme s ním mohli merať napätia do 1 500 V? Vnútorný odpor voltmetra je 10 k$\Omega$.
>
> **RIEŠENIE:**
>
> $U_v = 150 \text{ V}, U = 1\,500 \text{ V}, R_v = 10\,000 \Omega; R_p = ?$
>
> Rozsah voltmetra chceme zväčšiť
>
> $$
> n = U/U_v = 10\text{-krát}.
> $$
>
> Odpor predradeného rezistora je potom $R_p = (n - 1)R_v = 90 \text{ k}\Omega$.

## KIRCHHOFFOVE ZÁKONY

Zložitejšie zapojenia než sú jednoduché elektrické obvody nazývame **elektrické siete**. Miesto, v ktorom sa stretávajú aspoň tri vodiče, nazývame **uzol**. Vodivé spojenie susedných uzlov nazývame **vetva**. Časť elektrickej siete, pripomínajúca jednoduchý elektrický obvod, sa nazýva **slučka**. Skúmať budeme len elektrické siete so zdrojmi napätia a rezistormi. Zákony potrebné na riešenie elektrických sietí sformuloval v roku 1841 nemecký fyzik **Gustav Robert Kirchhoff** a voláme ich **Kirchhoffove zákony**.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/elektricky-prud/gustav-kirchhoff.png" alt="Gustav Kirchhoff">
  <figcaption>Obr. 4.2.9: Gustav Kirchhoff (1824 – 1887).</figcaption>
</figure>

**1. Kirchhoffov zákon**

**Algebraický súčet prúdov v uzloch je nulový. Prúdy, ktoré do uzla vstupujú, vnímame ako kladné, tie, ktoré z neho vystupujú, vnímame ako záporné.**

$$
\sum_{k=1}^{n} I_k = 0
$$

Alebo aj: **Súčet prúdov vstupujúcich do uzla sa rovná súčtu prúdov z uzla vystupujúcich.** Tento zákon je dôsledkom zákona zachovania elektrického náboja, ktorý sa nemôže nikde hromadiť, ani sa strácať. Smer prúdu v slučke možno zvoliť ľubovoľne. Ak nám po vyriešení rovníc vyjde hodnota prúdu záporná, je jeho skutočný smer opačný, ako sme určili.

**2. Kirchhoffov zákon**

**Súčet elektromotorických napätí v uzavretej slučke sa rovná súčtu úbytkov napätí na rezistoroch. Pre $m$ zdrojov a $n$ rezistorov platí**

$$
\sum_{j=1}^{m} U_{ej} = \sum_{k=1}^{n} R_k I_k.
$$

Smer elektromotorického napätia je od zápornej svorky ku kladnej. Smer obiehania v slučke volíme ľubovoľne. Elektromotorické napätia súhlasné so smerom obiehania píšeme s kladným znamienkom. Úbytky napätia na rezistoroch píšeme s kladným znamienkom, ak sú zhodné so smerom obiehania.

> [!example] Príklad 4.2.3: Elektrická sieť
> Vyriešte nasledujúcu elektrickú sieť na obrázku s pomocou Kirchhoffových rovníc a zadaných údajov.
>
> Odpory rezistorov sú zaradom 2 $\Omega$, 4 $\Omega$, 6 $\Omega$. Elektromotorické napätia $U_{e1} = 8 \text{ V}$, $U_{e3} = 5 \text{ V}$. Prúd prechádzajúci vetvou s rezistorom s odporom $R_2$ je $I_2 = 1 \text{ A}$.
>
> **RIEŠENIE:**
>
> $R_1 = 2 \Omega, R_2 = 4 \Omega, R_3 = 6 \Omega, U_{e1} = 8 \text{ V}, U_{e3} = 5 \text{ V}, I_2 = 1 \text{ A}; I_1, I_3, U_{e2} = ?$
>
> Pri riešení tejto elektrickej siete použijeme Kirchhoffove zákony. Vyznačíme na každom zdroji smer elektromotorického napätia od zápornej svorky ku kladnej. Zároveň zvolíme smery prúdov, ktoré tečú vo vetvách. Nevadí, že presné smery nepoznáme. Ak nakoniec dostaneme niektorý z prúdov záporný, je jeho smer opačný ako sme predpokladali. Zvolíme aj smery obiehania po slučkách.
>
> Zapíšeme 1. Kirchhoffov zákon pre uzol A. Dostávame tak rovnicu pre prúdy
>
> $$
> I_2 = I_1 + I_3
> $$
>
> Pomocou 2. Kirchhoffovho zákona pre slučku ABCDA dostávame
>
> $$
> U_{e1} - U_{e2} = -R_2I_2 - R_1I_1.
> $$
>
> Obdobne pre slučku AFEBA dostávame
>
> $$
> U_{e2} - U_{e3} = R_2I_2 + R_3I_3.
> $$
>
> Tým dostávame tri rovnice o troch neznámych $I_1$, $I_3$ a $U_{e2}$. Po dosadení číselných hodnôt
>
> $$
> 1 = I_1 + I_3,
> $$
>
> $$
> 8 - U_{e2} = -4 - 2I_1,
> $$
>
> $$
> U_{e2} - 5 = 4 + 3I_3.
> $$
>
> Odtiaľ dosadením prvej rovnice do druhej dostávame
>
> $$
> 3 = -2 + 2I_3 + 3I_3 \Rightarrow I_3 = 1.
> $$
>
> Po spätnom dosadení a prejdení k jednotkám dostávame $I_3 = 1 \text{ A}$, $I_1 = 0$, $U_{e2} = 12 \text{ V}$. Vypočítané hodnoty ukazujú, že ak prúd $I_2$ preteká v požadovanom smere, smer prúdu $I_3$ sme zvolili správne, dostali sme však $I_1 = 0$, čo znamená, že vetvou CD prúd netečie.

## PRÁCA A VÝKON ELEKTRICKÉHO PRÚDU

Elektrické sily vykonajú pri prenášaní náboja $Q$ v spotrebiči, na ktorom je napätie $U$, za čas $t$ prácu

$$
W = UQ.
$$

Ak je odpor spotrebiča $R$ a prechádza ním konštantný prúd, potom platí

$$
W = UIt = \frac{U^2}{R}t = RI^2t.
$$

Ak spotrebičom prechádza elektrický prúd, mení sa elektrická energia na iné formy energie, zväčša na tepelnú. Hovoríme o **Joulovom teple** $Q_J$. Ak nedochádza k premene na iné formy energie, platia pre Joulovo teplo vzťahy pre prácu elektrického prúdu uvedené vyššie.

**Joulov-Lenzov zákon: Pri prechode prúdu vodičom sa vodič zahrieva. Ak nedochádza k inej spotrebe elektrickej energie v obvode, potom sa všetka dodávaná energia spotrebováva na zahriatie vodiča, mení sa na Joulovo teplo, ktoré je dané vzťahmi**

$$
Q_J = UIt = \frac{U^2}{R}t = RI^2t.
$$

**Výkon elektrického prúdu** možno spočítať pomocou vzťahov známych z mechaniky.

$$
P = \frac{W}{t} = UI = \frac{U^2}{R} = RI^2
$$

Vyššie uvedené vzťahy pre výkon elektrického prúdu vyjadrujú **príkon spotrebiča**. Príkon spotrebiča vyjadruje množstvo elektrickej energie odoberanej spotrebičom za jednotku času.

**Výkon spotrebiča** $P_s$ vyjadruje množstvo elektrickej energie spotrebičom využitej za jednotku času. Podiel výkonu spotrebiča a jeho príkonu nazývame v súlade s mechanikou **účinnosť spotrebiča** $\eta$.

$$
\eta = \frac{P_s}{P}
$$

Podobná situácia je aj pre vnútornú časť elektrického obvodu, teda pre zdroj elektrického napätia. Vo vnútri zdroja konajú prácu sily neelektrického pôvodu, pre ich prácu platí vzťah

$$
W_z = U_eQ = U_eIt = \frac{U_e^2}{R + R_i}t.
$$

**Výkon zdroja** vypočítame pomocou vzťahu na výpočet výkonu ako

$$
P_z = \frac{W_z}{t} = U_eI = \frac{U_e^2}{R + R_i} = (R + R_i)I^2.
$$

**Účinnosť elektrického obvodu** (zdroja) je potom daná vzťahom

$$
\eta_z = \frac{P}{P_z} = \frac{U}{U_e} = \frac{R}{R + R_i}.
$$

V prípade, že účinnosť elektrického obvodu je 50 % platí, že $R = R_i$ a výkon prúdu vo vonkajšej časti elektrického obvodu je najväčší.
