---
title: Newtonove pohybové zákony
---

**Izolované teleso** je teleso, na ktoré nepôsobí silou žiadne iné teleso ani silové pole. Prakticky však takéto teleso nemožno získať, pretože by sme ho museli vzdialiť od všetkých objektov, ktoré naň silovo pôsobia. **Model izolovaného telesa** je teleso, na ktoré pôsobia sily tak, že ich výslednica je nulová.

## 1. Newtonov pohybový zákon

**Každé izolované teleso zotrváva v pokoji alebo rovnomernom priamočiarom pohybe, pokiaľ nie je nútené pôsobením vonkajších síl tento svoj pohybový stav zmeniť.**

Pre izolované teleso sú pokoj a rovnomerný priamočiary pohyb dva rovnocenné stavy, pre ktoré platí:

$$
\vec v = \text{konšt.}
$$

Pre pokoj platí:

$$
\vec v = \vec 0
$$

Dôležitou vlastnosťou telies je ich **zotrvačnosť**, ktorú môžeme charakterizovať ako snahu telies odporovať zmene ich rýchlosti. Tento zákon preto nazývame aj **zákon zotrvačnosti**.

**Inerciálna vzťažná sústava** je sústava, v ktorej izolované teleso alebo jeho model zotrváva v pokoji alebo v rovnomernom priamočiarom pohybe. Platí v nej zákon zotrvačnosti.

Naopak, sústava, v ktorej izolované teleso alebo jeho model nezotrváva v pokoji alebo v rovnomernom priamočiarom pohybe, sa nazýva **neinerciálna vzťažná sústava**.

Každá vzťažná sústava, ktorá je vzhľadom na danú inerciálnu vzťažnú sústavu v pokoji alebo v rovnomernom priamočiarom pohybe, je tiež inerciálna. Podľa **Galileiho princípu relativity** platia zákony mechaniky rovnako vo všetkých inerciálnych vzťažných sústavách.

## Hybnosť telesa a jej zmena

Pohybový stav telesa v dynamike je určený nielen jeho rýchlosťou, ale aj jeho hmotnosťou. Fyzikálna veličina, ktorá vyjadruje pohybový stav telesa, sa nazýva **hybnosť**. Je to vektorová fyzikálna veličina so značkou $\vec p$ a je definovaná ako súčin hmotnosti a okamžitej rýchlosti telesa:

$$
\vec p = m\vec v
$$

Jednotkou hybnosti v sústave SI je:

$$
\mathrm{kg \cdot m \cdot s^{-1}}
$$

Ak sa pri pohybe mení rýchlosť telesa a hmotnosť telesa sa nemení, platí pre zmenu hybnosti:

$$
\Delta \vec p =
m\vec v_2 - m\vec v_1 =
m(\vec v_2 - \vec v_1) =
m\Delta \vec v
$$

> [!note] Rozširujúce učivo: Pohyb telesa s premennou hmotnosťou
> Pri pohybe telesa sa môže meniť aj jeho hmotnosť, napríklad pri pohybe rakety alebo postrekovacieho auta. Zmena hybnosti telesa potom nemusí nastať len zmenou okamžitej rýchlosti, ale aj zmenou hmotnosti alebo oboch veličín naraz.
>
> $$
> \Delta \vec p = \Delta(m\vec v)
> $$

## 2. Newtonov pohybový zákon

**Výsledná sila pôsobiaca na teleso sa rovná podielu zmeny hybnosti telesa a doby, za ktorú sila pôsobila.**

$$
\vec F = \frac{\Delta \vec p}{\Delta t}
$$

Tento vzťah platí všeobecne, aj pre premennú hmotnosť telesa. Ak predpokladáme, že sa hmotnosť telesa počas pohybu nemení, dostaneme 2. Newtonov pohybový zákon v tvare:

$$
\vec F =
\frac{\Delta \vec p}{\Delta t}
=
\frac{m\Delta \vec v}{\Delta t}
=
m\frac{\Delta \vec v}{\Delta t}
=
m\vec a
$$

**Výslednica síl pôsobiacich na teleso sa rovná súčinu jeho hmotnosti a zrýchlenia.** Tento zákon preto nazývame aj **zákon sily**.

Pre veľkosť zrýchlenia platí:

$$
a = \frac{F}{m}
$$

Veľkosť zrýchlenia telesa je priamo úmerná veľkosti výslednice síl a nepriamo úmerná hmotnosti telesa.

Ak tvar 2. Newtonovho pohybového zákona vynásobíme dobou $\Delta t$, dostaneme:

$$
\vec F\Delta t = \Delta \vec p
$$

Súčin sily a doby, počas ktorej sila pôsobila, sa nazýva **impulz sily**. Je to vektorová fyzikálna veličina so značkou $\vec I$. Jednotkou impulzu sily je **newton sekunda** ($\mathrm{N \cdot s}$). Impulz sily vyvoláva zmenu hybnosti telesa:

$$
\vec I = \Delta \vec p
$$

Toto tvrdenie nazývame aj **prvá impulzová veta**.

## Tiažová sila

Voľný pád bol príkladom pohybu so stálym tiažovým zrýchlením $\vec g$. Podľa 2. Newtonovho pohybového zákona je toto zrýchlenie udeľované telesám v blízkosti povrchu Zeme silou:

$$
\vec F_G = m\vec g
$$

Túto silu nazývame **tiažová sila** a má smer vektora tiažového zrýchlenia $\vec g$.

## 3. Newtonov pohybový zákon

**Sily, ktorými na seba pôsobia dve telesá, sú rovnako veľké a opačného smeru. Jednu z týchto dvoch síl nazývame akcia a druhú reakcia.**

Z tohto dôvodu niekedy nazývame 3. Newtonov pohybový zákon aj **zákon akcie a reakcie**.

Každá z týchto síl pôsobí na iné teleso. Sily akcie a reakcie sa preto vo svojich silových účinkoch nerušia. Súčasne vznikajú a súčasne zanikajú.

> [!example] Príklad 3.7: Gravitačná sila
> Zem priťahuje Mesiac silou približne $2{,}05 \cdot 10^{20}\ \mathrm{N}$. Akou veľkou gravitačnou silou priťahuje Mesiac Zem?
>
> **Riešenie:**
>
> $$
> F_A = 2{,}05 \cdot 10^{20}\ \mathrm{N}, \qquad F_R = ?
> $$
>
> Gravitačná sila, ktorou pôsobí Zem na Mesiac, je akciou. Podľa 3. Newtonovho zákona musí byť sila, ktorou priťahuje Mesiac Zem, teda reakcia, rovnako veľká ako akcia:
>
> $$
> F_R = 2{,}05 \cdot 10^{20}\ \mathrm{N}
> $$