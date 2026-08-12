---
title: Vnútorná energia
---

V súlade s kinetickou teóriou látok možno zaviesť **vnútornú energiu** telesa (sústavy) $U$ ako skalárnu veličinu, ktorá je rovná predovšetkým súčtu celkovej kinetickej energie tepelného pohybu častíc telesa a celkovej vnútornej potenciálnej energie týchto častíc, ktorá vyplýva z ich vzájomného pôsobenia:

$$
U = E_\mathrm{k}\ (\text{castic}) + E_\mathrm{p}\ (\text{castic})
$$

**Zmena vnútornej energie** telesa (sústavy) $\Delta U$ závisí len na počiatočnom a koncovom stave sústavy, nezávisí od spôsobu (cesty) prechodu medzi týmito stavmi. K zmene vnútornej energie môže dôjsť:

- **konaním mechanickej práce** (napr. stláčanie plynu vo valci s piestom),
- **tepelnou výmenou** (napr. zahrievaním plynu v uzavretej nádobe).

## Zmena vnútornej energie konaním práce

Vnútornú energiu telesa (sústavy) možno meniť dejom, ktorý nazývame konanie práce. Ak máme v nádobe plyn, ktorý adiabaticky stlačíme (nedochádza k tepelnej výmene s okolím), pôsobením tlakovej sily s veľkosťou $F$ sa posunie piest v nádobe o dráhu $s$. V dôsledku toho sa zmení vnútorná energia plynu, vzrastie o hodnotu vykonanej práce, teda $\Delta U = U_2 - U_1 = W > 0$.

<p class="measurement-figure figure-wide no-extra-frame">
  <img src="/static/images/zmena_vnutornej_energie_pracou.png" alt="Zmena vnútornej energie plynu konaním práce" width="500">
</p>

> **Obr. 2.1.6.** Pôsobením tlakovej sily na piest sa zväčší vnútorná energia plynu v nádobe.

Prácu nemusí konať len vonkajšia sila. Prácu môže konať aj plyn (označujeme $W'$) a môže posunúť piest do počiatočnej polohy. Pre tieto práce platí $W' = -W$ a dochádza k zmenšeniu vnútornej energie plynu v nádobe $\Delta U = W' < 0$.

## Zmena vnútornej energie tepelnou výmenou

Ak vložíme kovovú lyžičku do vriaceho čaju, zvyšuje sa postupne jej teplota a naopak, teplota čaju klesá. Po čase sa dostane sústava lyžička - čaj do rovnovážneho stavu, kedy sa ich teploty vyrovnajú. Pri dotyku častíc lyžičky a čaju dochádza k ich zrážkam, tak sa odovzdáva energia teplejšieho telesa chladnejšiemu. Vnútorná energia sústavy sa mení **tepelnou výmenou**.

**Teplo** $Q$ je fyzikálna veličina určená energiou, ktorú pri tepelnej výmene odovzdá teplejšie teleso tomu chladnejšiemu. Jeho jednotkou je takisto joule ($\mathrm{J}$). Teplo považujeme za kladné, ak ho sústava prijíma od okolia. Naopak, teplo považujeme za záporné, ak ho sústava odovzdáva okoliu.

Teplo je na rozdiel od vnútornej energie **dejová (procesná) veličina**. Vždy je spojené s istým dejom - tepelnou výmenou. Otázka „Aké teplo má teleso?“ teda nemá zmysel.

Prenos tepla je prenosom vnútornej energie medzi dvoma sústavami a môže sa uskutočniť:

- **vedením** (vo všetkých skupenstvách) - energia prechádza z miest s vyššou energiou na miesta s nižšou energiou v dôsledku vzájomného dotyku telies (napr. lyžička v horúcom čaji),
- **prúdením** (v kvapalinách a plynoch) - vzniká pri zahrievaní tekutiny a jej následnom prúdení (napr. rovnomerný ohrev vody v rýchlovarnej kanvici),
- **žiarením** (v priehľadných látkach a vákuu) - k prenosu tepla dochádza pri vyžarovaní a pohlcovaní elektromagnetických vĺn (napr. zahrievanie telesa na Slnku).

Ak teleso pri tepelnej výmene príjme teplo $Q$, zvýši sa jeho vnútorná energia o $\Delta U$ a teplota o $\Delta T$. Potom možno zadefinovať tzv. **tepelnú kapacitu** telesa $C$. Jej jednotkou je $\mathrm{J \cdot K^{-1}}$.

$$
C = \frac{Q}{\Delta T}
$$

Tepelná kapacita telesa vztiahnutá na jednotku hmotnosti sa nazýva **hmotnostná tepelná kapacita** a označuje ju $c$. Jej jednotkou je $\mathrm{J \cdot kg^{-1} \cdot K^{-1}}$. Hmotnostná tepelná kapacita udáva číselne, aké veľké množstvo tepla je treba dodať jednému kilogramu látky, aby sa jej teplota zvýšila o jeden Kelvin, resp. jeden stupeň Celzia (platí $\Delta t = \Delta T$). Jej hodnoty možno nájsť v tabuľkách, sú uvádzané pri istej teplote, keďže jej hodnota sa s teplotou mení. Pri výpočtoch uvažujeme, že je na danom intervale **konštantná**.

$$
c = \frac{C}{m} = \frac{Q}{m\Delta T}
$$

Tepelná kapacita telesa vztiahnutá na jednotku látkového množstva sa nazýva **molárna tepelná kapacita**. Označujeme ju $c_\mathrm{m}$ a jej jednotkou je $\mathrm{J \cdot mol^{-1} \cdot K^{-1}}$.

$$
c_\mathrm{m} = \frac{C}{n} = \frac{Q}{n\Delta T}
$$

Zo vzťahu pre hmotnostnú tepelnú kapacitu vyplýva, že teplo pri tepelnej výmene odovzdané resp. prijaté možno vypočítať podľa vzťahu $Q = c m \Delta T$.

## Kalorimeter a kalorimetrická rovnica

**Zmiešavací kalorimeter** je tepelne izolovaná nádoba, ktorá sa skladá z vonkajšej a vnútornej nádoby, medzi ktorými je izolácia (vákuum). Súčasťou kalorimetra je aj miešačka a teplomer. Kalorimeter možno použiť na meranie tepla alebo tepelnej kapacity telesa.

Ak vložíme teleso s teplotou $T_1$ do kalorimetra s vodou, ktorá má teplotu $T_2 < T_1$, možno pri zanedbaní tepelnej kapacity kalorimetra povedať, že teplo odovzdané telesom $Q_1$ sa na základe zákona zachovania energie rovná teplu, ktoré príjme voda, teda $Q_1 = Q_2$. Táto úvaha vedie na tzv. **kalorimetrickú rovnicu**.

$$
c_1 m_1 (T_1 - T) = c_2 m_2 (T - T_2)
$$

<p class="measurement-figure no-extra-frame">
  <img src="/static/images/teleso_v_kalorimetri.png" alt="Teleso v kalorimetri" width="400">
</p>

> **Obr. 2.1.7.** Teleso v kalorimetri.

V tomto vzťahu je $c_1$ hmotnostná tepelná kapacita telesa, $m_1$ hmotnosť telesa, $c_2$ hmotnostná tepelná kapacita vody a $m_2$ hmotnosť vody. Ak nezanedbáme tepelnú kapacitu kalorimetra $C_\mathrm{k}$, potom platí

$$
c_1 m_1 (T_1 - T) = c_2 m_2 (T - T_2) + C_\mathrm{k} (T - T_2).
$$

> [!example] Príklad 2.1.2: Rozžeravený kov
> Kovový rozžeravený predmet s hmotnosťou $300\ \mathrm{g}$ vložíme do $1{,}5$ litra vody s teplotou $10\ ^\circ\mathrm{C}$. Teplota vody sa po ustálení rovnovážneho stavu ustáli na $18{,}2\ ^\circ\mathrm{C}$. Určte teplotu rozžeraveného telesa pred vložením do vody. Uvažujte len tepelnú výmenu medzi telesom a vodou.
>
> **Riešenie:**
>
> $$
> m_1 = 300\ \mathrm{g}, \quad m_2 = 1{,}5\ \mathrm{kg}, \quad t_2 = 10\ ^\circ\mathrm{C}, \quad t = 18{,}2\ ^\circ\mathrm{C}, \quad c_1 = 465\ \mathrm{J \cdot kg^{-1} \cdot K^{-1}}, \quad t_1 = ?
> $$
>
> Keďže uvažujeme len tepelnú výmenu medzi železným telesom a vodou, je teplo, ktoré železné teleso vode odovzdá, rovné teplu, ktoré voda od tohto telesa príjme. Možno tak písať
>
> $$
> c_1 m_1 (t_1 - t) = c_2 m_2 (t - t_2).
> $$
>
> Odtiaľ pre počiatočnú teplotu železného telesa dostaneme
>
> $$
> t_1 = \frac{c_2 m_2(t - t_2) + c_1 m_1 t}{c_1 m_1} \approx 389\ ^\circ\mathrm{C}.
> $$

## 1. termodynamický zákon

Ak dochádza k zmene vnútornej energie tepelnou výmenou a zároveň aj konaním práce, **je zmena vnútornej energie rovná súčtu vykonanej práce vonkajšími silami a tepla sústave dodaného**.

$$
\Delta U = W + Q
$$

Tento zákon popisuje situácie, kedy energia môže prechádzať do sústavy alebo z nej vychádzať ako teplo alebo mechanická práca. Je rozšírením zákona zachovania mechanickej energie na neizolované sústavy. Ak uvažujeme prácu, ktorú vykoná sústava $W' = -W$, potom možno napísať tento zákon v tvare

$$
Q = \Delta U + W'.
$$

Teplo dodané sústave sa prejaví zvýšením vnútornej energie sústavy a prácou sústavy.

> [!example] Príklad 2.1.3: Plyn v nádobe s piestom
> V uzavretej nádobe s piestom, ktorého hmotnosť je $500\ \mathrm{g}$, je uzavretý plyn. Plynu v nádobe dodáme teplo $20\ \mathrm{J}$ a piest sa zdvihne o $10\ \mathrm{cm}$. Ako sa zmenila vnútorná energia plynu?
>
> **Riešenie:**
>
> $$
> m = 500\ \mathrm{g} = 0{,}5\ \mathrm{kg}, \quad Q = 20\ \mathrm{J}, \quad h = 10\ \mathrm{cm} = 0{,}1\ \mathrm{m}; \quad \Delta U = ?
> $$
>
> Plyn v nádobe vykoná po dodaní tepla prácu rovnú zmene tiažovej potenciálnej energie piestu.
>
> $$
> W' = \Delta E_\mathrm{p} = mgh
> $$
>
> Z prvého termodynamického zákona máme $Q = \Delta U + W'$, odtiaľ pre zmenu vnútornej energie
>
> $$
> \Delta U = Q - mgh = 19{,}5\ \mathrm{J}.
> $$
