---
title: Deje s ideálnym plynom
---

## Práca plynu pri stálom a premennom tlaku

Plyn môže konať prácu, napr. plyn v nádobe môže pohnúť s piestom a zväčšiť tak svoj objem. Uvažujme najprv dej, pri ktorom je tlak plynu konštantný (**izobarický dej**). Ak na piest pôsobí plyn stálou tlakovou silou $F = pS$ a posunie ho o dĺžku $\Delta s$, vykoná tak prácu

$$
W' = F\Delta s = pS\Delta s = p\Delta V.
$$

V tomto vzťahu je $\Delta V = V_2 - V_1$ zmena objemu plynu, pričom ak plyn svoj objem zväčšuje, je práca vykonaná plynom kladná ($W' > 0$) a ak svoj objem zmenšuje, je práca záporná ($W' < 0$). Prácu plynu možno znázorniť v grafe závislosti tlaku plynu od jeho objemu ($p$-$V$ diagram) ako obsah obdĺžnika pod grafom funkcie $p(V)$. V prípade, že tlak plynu nie je konštantný, ale sa počas deja mení, možno obdobne určiť veľkosť plynom vykonanej práce ako obsah obrazca v $p$-$V$ diagrame pod grafom funkcie $p(V)$.

<p class="measurement-figure figure-wide no-extra-frame">
  <img src="/static/images/praca_plynu.png" alt="Práca plynu v p-V diagrame" width="500">
</p>

> **Obr. 2.2.2.** Prácu plynu určíme ako obsah obrazca v $p$-$V$ diagrame pod grafom funkcie $p(V)$.

## Izotermický dej s ideálnym plynom

Pri izotermickom deji je teplota plynu stála, nemení sa ($T = \text{konšt.}$). Pri izotermickom deji s plynom stálej hmotnosti sa mení objem a aj tlak plynu. Zo stavovej rovnice pre stálu hmotnosť plynu dostaneme, že pre izotermický dej s ideálnym plynom platí

$$
pV = \text{konšt.} \qquad \text{resp.} \qquad p = \frac{\text{konšt.}}{V}
$$

**Pri izotermickom deji s ideálnym plynom stálej hmotnosti je tlak plynu nepriamo úmerný jeho objemu.** Tento zákon nazývame **Boylov-Mariottov zákon**. Graf vyjadrujúci závislosť tlaku ideálneho plynu od jeho objemu pri izotermickom deji sa nazýva **izoterma** a ide o jednu vetvu hyperboly.

<p class="measurement-figure figure-wide no-extra-frame">
  <img src="/static/images/izoterma_praca_plynu.png" alt="Izoterma a práca konaná plynom pri izotermickom deji" width="500">
</p>

> **Obr. 2.2.3.** Izoterma a práca konaná plynom pri izotermickom deji.

Práca vykonaná plynom pri izotermickom deji je rovná obsahu obrazca v $p$-$V$ diagrame pod grafom funkcie $p(V)$. Jej veľkosť je

$$
W' = nRT \ln \frac{V_2}{V_1}.
$$

Keďže sa pri izotermickom deji nemení teplota plynu, je vnútorná energia plynu konštantná a jej zmena tak nulová $\Delta U = 0$. Z prvého termodynamického zákona tak dostávame $Q_T = W'$. Teplo prijaté ideálnym plynom pri izotermickom deji sa rovná práci, ktorú plyn pri tomto deji vykoná.

## Izochorický dej s ideálnym plynom

Pri izochorickom deji je objem plynu stály, nemení sa ($V = \text{konšt.}$). Pri izochorickom deji s plynom stálej hmotnosti sa mení teplota a aj tlak plynu. Zo stavovej rovnice pre stálu hmotnosť plynu dostaneme, že pre izochorický dej s ideálnym plynom platí

$$
\frac{p}{T} = \text{konšt.} \qquad \text{resp.} \qquad p = \text{konšt.}\ T
$$

**Pri izochorickom deji s ideálnym plynom je tlak plynu priamo úmerný termodynamickej teplote.** Tento zákon je v našej literatúre často označovaný ako **Charlesov zákon**. Graf, ktorý znázorňuje v $p$-$V$ diagrame (alebo aj $p$-$T$ diagrame) izochorický dej, sa nazýva **izochora**.

<p class="measurement-figure figure-wide no-extra-frame">
  <img src="/static/images/izochora.png" alt="Izochora v p-V a p-T diagrame" width="500">
</p>

> **Obr. 2.2.4.** Graf, ktorý znázorňuje v $p$-$V$ ($p$-$T$) diagrame izochorický dej, sa nazýva izochora.

Keďže sa pri izochorickom deji nemení objem plynu ($\Delta V = 0$), plyn nekoná žiadnu prácu ($W' = 0$). Z prvého termodynamického zákona tak vyplýva, že teplo prijaté ideálnym plynom pri izochorickom deji sa rovná prírastku jeho vnútornej energie. Vo vzťahu nižšie je $c_V$ **hmotnostná tepelná kapacita plynu pri stálom objeme**.

$$
Q_V = \Delta U = c_Vm\Delta T
$$

## Izobarický dej s ideálnym plynom

Pri izobarickom deji je tlak plynu stály, nemení sa ($p = \text{konšt.}$). Pri izobarickom deji s plynom stálej hmotnosti sa mení teplota a aj objem plynu. Zo stavovej rovnice pre stálu hmotnosť plynu dostaneme, že pre izobarický dej s ideálnym plynom platí

$$
\frac{V}{T} = \text{konšt.} \qquad \text{resp.} \qquad V = \text{konšt.}\ T
$$

**Pri izobarickom deji s plynom stálej hmotnosti je objem plynu priamo úmerný jeho termodynamickej teplote.** Tento zákon sa zvykne nazývať aj **Gay-Lussacov zákon**. Graf, ktorý znázorňuje izobarický dej s ideálnym plynom v $p$-$V$ ($V$-$T$) diagrame, sa nazýva **izobara**.

<p class="measurement-figure figure-wide no-extra-frame">
  <img src="/static/images/izobara.png" alt="Izobara v rôznych diagramoch" width="500">
</p>

> **Obr. 2.2.5.** Izobara v rôznych diagramoch.

Pri izobarickom deji sa mení vnútorná energia plynu, aj plyn koná prácu. Z prvého termodynamického zákona vyplýva, že teplo prijaté ideálnym plynom pri izobarickom deji sa rovná súčtu prírastku jeho vnútornej energie a práce, ktorú plyn vykoná. Vo vzťahu nižšie je $c_p$ **hmotnostná tepelná kapacita plynu pri stálom tlaku**.

$$
Q_p = \Delta U + W' = c_pm\Delta T
$$

Pre daný plyn musí platiť, že jeho hmotnostná tepelná kapacita za stáleho tlaku je väčšia ako tá za stáleho objemu ($c_p > c_V$). Možno ukázať, že medzi nimi platí tzv. **Mayerov vzťah**.

$$
c_p = c_V + \frac{R}{M_\mathrm{m}}
$$

## Adiabatický dej s ideálnym plynom

Pri adiabatickom deji nedochádza k tepelnej výmene s okolím ($Q = 0$), z prvého termodynamického zákona tak dostávame $\Delta U = W = -W'$. Pri adiabatickom stlačení plynu sa pôsobením vonkajšej sily koná práca, teplota plynu a jeho vnútorná energia sa zväčšuje. Pri adiabatickom rozpínaní koná plyn prácu, teplota plynu a jeho vnútorná energia sa zmenšuje. Adiabatický dej možno realizovať tepelnou izoláciou plynu od okolia, alebo tak, že sa teplo s okolím vymeniť nestihne, pretože dej prebehne rýchlo.

Pre adiabatický dej platí tzv. **Poissonov zákon**, ktorý možno matematicky vyjadriť nasledovne

$$
pV^\kappa = \text{konšt.}
$$

V tomto vzťahu je $\kappa = c_p/c_V$ tzv. **Poissonova konštanta**, ktorá nadobúda hodnoty $\kappa = 5/3$ pre jednoatómový plyn a $\kappa = 7/5$ pre dvojatómový plyn.

<p class="measurement-figure no-extra-frame">
  <img src="/static/images/adiabata.png" alt="Adiabatický dej v p-V diagrame" width="400">
</p>

> **Obr. 2.2.6.** Adiabata klesá vždy strmšie ako izoterma.

Grafom adiabatického deja v $p$-$V$ diagrame je tzv. **adiabata**. Je to krivka, ktorá klesá vždy strmšie ako izoterma.
