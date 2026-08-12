---
title: Kapacita vodiča a kondenzátor
---

Dôležitou vlastnosťou vodiča a sústavy vodičov je prijímať elektrický náboj. Ak nabijeme elektrický vodič na náboj $Q$, získa vzhľadom k zemi elektrický potenciál $\varphi_e$, resp. napätie (rozdiel potenciálov) $U$. Medzi nábojom a potenciálom resp. napätím platí priama úmernosť

$$
Q = C \varphi_e
\qquad \text{resp.} \qquad
Q = C U.
$$

Konštanta úmernosti v týchto vzťahoch sa nazýva kapacita vodiča $C$. Jednotkou kapacity je farad (F). Farad je veľká jednotka, používajú sa hlavne jej násobky: nanofarad (nF), pikofarad (pF). Kapacita vyjadruje schopnosť vodiča pri danom potenciáli (napätí) prijať elektrický náboj.

$$
C = \frac{Q}{\varphi_e}
\qquad \text{resp.} \qquad
C = \frac{Q}{U}
\qquad
[C] = \frac{[Q]}{[U]} = \frac{\mathrm{C}}{\mathrm{V}} = \mathrm{F}
$$

Kapacita, aj keď je definovaná pomocou náboja na vodiči, nezávisí od tohto náboja a je čisto len funkciou tvaru (parametrov) vodiča. Tiež závisí na prostredí, ktoré vodič obklopuje. Kapacita vodivej gule je

$$
C = 4\pi\varepsilon_0 R.
$$

Na princípe elektrostatickej indukcie sú založené kondenzátory. Pozostávajú z dvoch vodičov, na ktorých možno udržať elektrický náboj, a tým akumulovať elektrickú energiu. Jeden vodič sa nabíja a druhý sa zvyčajne uzemní. Doskový kondenzátor predstavujú dve rovnobežné vodivé dosky s obsahom plochy $S$ vo vzájomnej vzdialenosti $d$, ktoré sú oddelené dielektrikom (napr. vzduch, keramika) s permitivitou $\varepsilon$. Medzi jeho doskami je homogénne elektrické pole. Kapacita doskového kondenzátora je

$$
C = \varepsilon \frac{S}{d} = \varepsilon_0 \varepsilon_r \frac{S}{d}.
$$

Kapacitu doskového kondenzátora možno zvýšiť priblížením jeho dosiek, zväčšením plochy dosiek a vložením dielektrika do prostredia medzi doskami. Elektrická energia v doskovom kondenzátore je

$$
E_{\mathrm{el}} = \frac{1}{2} C U^2 = \frac{1}{2} Q U = \frac{1}{2} \frac{Q^2}{C}.
$$

Sériové zapojenie kondenzátorov (za sebou): Výsledné napätie je dané súčtom napätí na všetkých kondenzátoroch. Náboje na jednotlivých kondenzátoroch sú rovnaké. Pre výslednú kapacitu platí vzťah

$$
\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2} + ... + \frac{1}{C_n}.
$$

Paralelné zapojenie kondenzátorov (vedľa seba): Napätie na všetkých kondenzátoroch je rovnaké, celkový náboj sa rovná súčtu nábojov na kondenzátoroch. Pre výslednú kapacitu platí

$$
C = C_1 + C_2 + ... + C_n.
$$

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/zapojenie_kondenzatorov.png" alt="Sériové a paralelné zapojenie kondenzátorov">
  <figcaption>Obr. 4.1.13: Sériové zapojenie (hore) a paralelné zapojenie (dole) dvoch kondenzátorov.</figcaption>
</figure>

> [!example] Príklad 4.1.2: Napätie na kondenzátoroch
> Majme dva kondenzátory s kapacitami 4 nF a 6 nF, ktoré nabijeme na napätie 20 V a 40 V. Takto nabité kondenzátory zapojíme súhlasnými pólmi paralelne. Určte, aké bude výsledné napätie na zapojení kondenzátorov.
>
> **RIEŠENIE:**
>
> $C_1 = 4\ \mathrm{nF} = 4 \cdot 10^{-9}\ \mathrm{F},\ C_2 = 6\ \mathrm{nF} = 6 \cdot 10^{-9}\ \mathrm{F},\ U_1 = 20\ \mathrm{V},\ U_2 = 40\ \mathrm{V};\ U =\ ?$
>
> Ak kondenzátory spojíme paralelne, platí pre ich výslednú kapacitu vzťah $C = C_1 + C_2$. Celkový náboj je potom $Q = Q_1 + Q_2 = C_1U_1 + C_2U_2$ a napätie na zapojení
>
> $$
> U = \frac{Q}{C} = \frac{C_1U_1 + C_2U_2}{C_1 + C_2} = 32\ \mathrm{V}.
> $$
