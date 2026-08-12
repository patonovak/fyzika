---
title: Kruhový dej s ideálnym plynom
---

Objem plynu v uzavretej nádobe s piestom sa nemôže neustále zväčšovať, preto práca, ktorú môže vykonať plyn, má obmedzenú veľkosť. Ak by sme chceli zostrojiť nejaký tepelný stroj, mohol by trvale pracovať len vtedy, ak sa plyn po ukončení expanzie vráti do pôvodného stavu. Dej, pri ktorom je koncový stav sústavy totožný s počiatočným stavom, sa nazýva **kruhový (cyklický) dej**.

Pracovným diagramom ($p$-$V$ diagrame) je preto uzavretá krivka. Celková zmena vnútornej energie pracovnej látky po ukončení jedného cyklu je nulová $\Delta U = 0$. To vyplýva zo skutočnosti, že sa plyn po jednom cykle vráti do pôvodného stavu. Práca vykonaná plynom pri kruhovom deji sa rovná obsahu obrazca v príslušnom $p$-$V$ diagrame.

<p class="measurement-figure no-extra-frame">
  <img src="/static/images/kruhovy_dej.png" alt="Kruhový dej v p-V diagrame" width="400">
</p>

> **Obr. 2.2.7.** Kruhový (cyklický) dej znázornený v $p$-$V$ diagrame.

Priblížme mechanizmus fungovania jednoduchého **tepelného stroja**. Teleso, od ktorého pracovná látka prijíma teplo, sa nazýva **ohrievač**. Teleso, ktorému pracovná látka dodáva teplo, sa nazýva **chladič**. Látka príjme celkové teplo $Q = Q_1 - Q_2$. Z prvého termodynamického zákona máme $W' = Q_1 - Q_2$. Celková práca, ktorú vykoná pracovná látka počas jedného cyklu kruhového deja, sa rovná celkovému teplu, ktoré pracovná látka príjme od okolia. Pri rozbore činnosti tepelných strojov zisťujeme, že z tepla prijatého od ohrievača možno len časť využiť ku konaniu práce, zostatok tepla odovzdá pracovná látka chladiču.

Tento poznatok je zahrnutý v tzv. **druhom termodynamickom zákone**, ktorý možno formulovať rôzne.

**Nie je možné zostrojiť periodicky pracujúci tepelný stroj, ktorý by len prijímal teplo od určitého telesa (ohrievača) a vykonával rovnako veľkú prácu.** W. Thomson (Lord Kelvin), 1851

**Teplo nikdy samovoľne neprechádza z chladnejšieho telesa na teplejšie.** Rudolf Clausius, 1850

<p class="measurement-figure no-extra-frame">
  <img src="/static/images/cyklicky_tepelny_stroj.png" alt="Cyklický tepelný stroj" width="400">
</p>

> **Obr. 2.2.8.** Cyklický tepelný stroj.

Podľa druhého zákona nemožno zostrojiť tzv. **perpetuum mobile 2. druhu** - všetko teplo odoberané z ohrievača by sa menilo na prácu. Tepelný motor je teda zariadenie, ktoré premieňa časť vnútornej energie paliva na mechanickú energiu. Ak ohrievač odovzdá teplo $Q_1$ a chladič príjme teplo $Q_2$, možno vypočítať **účinnosť tepelného motora** ako

$$
\eta = \frac{W'}{Q_1} = \frac{Q_1 - Q_2}{Q_1} = 1 - \frac{Q_2}{Q_1}.
$$

Účinnosť je bezrozmerná veličina, ktorej hodnota sa pohybuje v intervale $\eta \in (0,1)$. Môžeme ju udávať aj v percentách. Účinnosť tepelného motora je tým väčšia, čím je väčšia teplota ohrievača a menšia teplota chladiča. Z úvah francúzskeho fyzika Sadiho Carnota (1736 - 1832) vyplynulo, že pre účinnosť tepelného motora, ktorý pracuje s ohrievačom s teplotou $T_1$ a chladičom s teplotou $T_2$ platí vzťah

$$
\eta \le \eta_\mathrm{max} = \frac{T_1 - T_2}{T_1} = 1 - \frac{T_2}{T_1}.
$$

> [!example] Príklad 2.2.2: Cyklický dej
> Akú prácu vykoná plyn počas jedného cyklu kruhového deja na obrázku?
>
> <p class="measurement-figure callout-figure no-extra-frame">
>   <img src="/static/images/priklad_cyklicky_dej.png" alt="Cyklický dej v p-V diagrame" width="400">
> </p>
>
> **Obr. 2.2.9.** Cyklický dej v $p$-$V$ diagrame.
>
> **Riešenie:**
>
> $$
> W' = ?
> $$
>
> Práca vykonaná plynom pri kruhovom deji sa rovná obsahu obrazca v príslušnom $p$-$V$ diagrame. Útvar na obrázku je pravouhlý lichobežník, pričom jeho „podstavy“ sú $p_1 = 8\ \mathrm{kPa} = 8\ 000\ \mathrm{Pa}$ a $p_2 = 4\ \mathrm{kPa} = 4\ 000\ \mathrm{Pa}$. „Výška“ tohto lichobežníka potom predstavuje časť $\Delta V = 3\ \mathrm{l} = 3 \cdot 10^{-3}\ \mathrm{m^3}$. Obsah útvaru a práca vykonaná plynom pri jednom cykle je
>
> $$
> W' = \frac{p_1 + p_2}{2}\Delta V = 18\ \mathrm{J}.
> $$
