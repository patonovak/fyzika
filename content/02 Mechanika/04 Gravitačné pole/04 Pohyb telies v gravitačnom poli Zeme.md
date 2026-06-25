---
title: Pohyb telies v gravitačnom poli Zeme
---

## Pohyby telies v homogénnom tiažovom poli Zeme

Pohyby telesa v homogénnom tiažovom poli Zeme sú pohyby, ktorých trajektória je značne menšia oproti rozmerom Zeme. Na teleso pri jeho pohybe pôsobí výhradne tiažová sila $\vec F_G$, ktorá mu udeľuje tiažové zrýchlenie $\vec g$. Najjednoduchším pohybom v homogénnom tiažovom poli Zeme je **voľný pád**.

Ďalšie typy pohybov v homogénnom tiažovom poli sa od voľného pádu odlišujú tým, že im je na začiatku pohybu udelená nenulová počiatočná rýchlosť $\vec v_0$. Takéto pohyby nazývame **vrhy** a ide hlavne o:

- **zvislý vrh nahor**, prípadne **zvislý vrh nadol**,
- **vodorovný vrh**,
- **šikmý vrh nahor**.

Vrhy sú tzv. **zložené pohyby**, vznikajú zložením dvoch pohybov:

- voľného pádu,
- rovnomerného priamočiareho pohybu s rýchlosťou $\vec v_0$.

**Princíp nezávislosti pohybov:** Ak koná hmotný bod alebo teleso dva a viac pohybov súčasne, jeho výsledná poloha je rovnaká, ako keby konal tieto pohyby po sebe v ľubovoľnom poradí.

## Zvislý vrh nahor

Zvislý vrh nahor je pohyb, ktorý koná teleso vrhnuté s počiatočnou rýchlosťou $\vec v_0$ zvisle nahor. Pretože má vektor počiatočnej rýchlosti opačný smer ako smer tiažového zrýchlenia, ide o rovnomerne spomalený pohyb. Pre veľkosť okamžitej rýchlosti a výšku v čase $t$ platia vzťahy

$$
v = v_0 - gt,
$$

$$
h = v_0t - \frac{1}{2}gt^2.
$$

> [!example] Príklad 3.14: Výška a čas výstupu
> Odvoďte vzťahy pre maximálnu výšku, ktorú dosiahne teleso pri zvislom vrhu nahor s počiatočnou rýchlosťou $v_0$, a čas tohto výstupu.
>
> Pre veľkosť okamžitej rýchlosti pri zvislom vrhu nahor platí vzťah $v = v_0 - gt$. V čase, keď sa teleso nachádza v maximálnej výške, je veľkosť jeho okamžitej rýchlosti nulová, teda $v = 0$. Odtiaľ máme
>
> $$
> 0 = v_0 - gt_H \quad \Rightarrow \quad t_H = \frac{v_0}{g}.
> $$
>
> Teleso sa nachádza v najvyššom bode trajektórie práve v čase $t_H$, preto pre výšku výstupu máme
>
> $$
> H = v_0t_H - \frac{1}{2}gt_H^2 = \frac{v_0^2}{2g}.
> $$

## Vodorovný vrh

Vodorovný vrh je pohyb telesa, ktorému vo výške $h$ udelíme rýchlosť $\vec v_0$ vo vodorovnom smere. Trajektóriou vodorovného vrhu je časť paraboly. Ak zvolíme sústavu súradníc s počiatkom v mieste vrhu, sú súradnice telesa v čase $t$ dané vzťahmi

$$
x = v_0t,
$$

$$
y = h - \frac{1}{2}gt^2.
$$

Najväčšia vodorovná vzdialenosť od miesta vrhu sa nazýva **dĺžka vrhu** a označujeme ju $d$. Súradnice miesta dopadu sú $[d, 0]$, dostávame preto podmienku

$$
0 = h - \frac{1}{2}gt_d^2,
$$

odkiaľ pre čas pohybu máme

$$
t_d = \sqrt{\frac{2h}{g}}.
$$

Dĺžka vrhu je potom $d = v_0t_d$ a po dosadení za čas pohybu dostaneme výsledný vzťah

$$
d = v_0\sqrt{\frac{2h}{g}}.
$$

Pre zložky okamžitej rýchlosti platí $v_x = v_0$ a $v_y = gt$. Veľkosť okamžitej rýchlosti telesa v čase $t$ je

$$
v = \sqrt{v_0^2 + g^2t^2}.
$$

## Šikmý vrh nahor

Šikmý vrh nahor koná teleso, ktorému udelíme rýchlosť $\vec v_0$, ktorá zviera s vodorovnou rovinou uhol $\alpha$. Tento uhol nazývame **elevačný uhol**. Trajektóriou je časť paraboly s vrcholom v najvyššom bode vrhu.

Ak zvolíme súradnicovú sústavu s počiatkom v mieste vrhu, potom poloha telesa v čase $t$ je daná súradnicami

$$
x = v_0t\cos\alpha,
$$

$$
y = v_0t\sin\alpha - \frac{1}{2}gt^2.
$$

Zložka okamžitej rýchlosti vo vodorovnom smere je konštantná a pre jej veľkosť platí

$$
v_x = v_0\cos\alpha.
$$

Zložka okamžitej rýchlosti vo zvislom smere sa s časom mení a platí

$$
v_y = v_0\sin\alpha - gt.
$$

Dĺžka vrhu $d$ je vzdialenosť miesta dopadu od miesta vrhu vo vodorovnom smere. Vo vákuu pri rovnakej počiatočnej rýchlosti telesa je dĺžka vrhu najväčšia pri elevačnom uhle $45^\circ$.

Pokiaľ vrh neprebieha vo vákuu, ale vo vzduchu, pôsobia proti pohybu telesa odporové sily a trajektóriou telesa už nie je časť paraboly, ale krivka, ktorú nazývame **balistická krivka**.

> [!note] Rozširujúce učivo: Dĺžka šikmého vrhu a výška výstupu telesa
> Bod dopadu telesa pri šikmom vrhu nahor má súradnice $x = d$ a $y = 0$, preto platí
>
> $$
> 0 = v_0t_d\sin\alpha - \frac{1}{2}gt_d^2.
> $$
>
> Odtiaľ pre čas pohybu telesa máme
>
> $$
> t_d = \frac{2v_0\sin\alpha}{g}.
> $$
>
> Dĺžku vrhu dostaneme zo vzťahu $d = v_0t_d\cos\alpha$. Po dosadení platí
>
> $$
> d = \frac{2v_0^2\sin\alpha\cos\alpha}{g} = \frac{v_0^2\sin2\alpha}{g}.
> $$
>
> V najvyššom bode trajektórie je zvislá zložka okamžitej rýchlosti nulová. Pre čas výstupu platí $t_h = v_0\sin\alpha/g$ a pre výšku výstupu
>
> $$
> H = \frac{v_0^2\sin^2\alpha}{2g}.
> $$

## Pohyby telies v radiálnom gravitačnom poli Zeme

Pohyby telesa v radiálnom (centrálnom) gravitačnom poli Zeme sú pohyby, ktorých trajektória má porovnateľné rozmery s rozmermi Zeme.

Významné sú najmä tie pohyby, pri ktorých je telesu udelená počiatočná rýchlosť v smere kolmom na smer gravitačnej sily, ktorá na teleso pôsobí. Pri určitej hodnote tejto počiatočnej rýchlosti opisuje teleso kružnicu a voláme ju **kruhová rýchlosť** $\vec v_k$. Pohybujú sa ňou niektoré umelé družice okolo Zeme.

Majme teleso s hmotnosťou $m$, ktoré sa pohybuje okolo Zeme po kružnici s polomerom $R_Z + h$. Potom na teleso pôsobí Zem gravitačnou silou s veľkosťou

$$
F_g = G\frac{mM_Z}{(R_Z+h)^2}.
$$

Gravitačná sila so smerom do stredu Zeme sprostredkuje dostredivú silu, ktorá núti teleso pohybovať sa po kružnicovej trajektórii. Veľkosť dostredivej sily v tomto prípade vyjadríme ako

$$
F_d = m\frac{v_k^2}{R_Z+h}.
$$

Keďže platí $F_g = F_d$, dostaneme po dosadení a úpravách vzťah pre veľkosť kruhovej rýchlosti

$$
v_k = \sqrt{\frac{GM_Z}{R_Z+h}}.
$$

Ak je výška, v ktorej sa nachádza teleso, zanedbateľná oproti polomeru Zeme ($h \ll R_Z$), potom máme

$$
v_{kZ} = \sqrt{\frac{GM_Z}{R_Z}}.
$$

Pre dané hodnoty veličín dostávame $v_{kZ} \approx 7{,}9\ \mathrm{km \cdot s^{-1}}$. Túto rýchlosť nazývame **prvá kozmická rýchlosť**. Obežná doba telesa alebo družice pri prvej kozmickej rýchlosti je

$$
T = \frac{2\pi R_Z}{v_{kZ}} \approx 84\ \mathrm{min}.
$$

**Geostacionárna družica** je taká družica, ktorá obieha okolo Zeme s kružnicovou trajektóriou v rovine rovníka a jej obežná doba je približne jeden deň. Z hľadiska pozorovateľa na Zemi je stále na tom istom mieste nad rovníkom.

Družice, ktoré neobiehajú v rovine rovníka, ale ich doba obehu je jeden deň, sa z pohľadu pozorovateľa vracajú stále na jedno miesto na oblohe v rovnaký čas. Nazývame ich **geosynchrónne družice**.

Ak telesu v danej výške udelíme o niečo väčšiu rýchlosť, ako je veľkosť kruhovej rýchlosti, bude sa teleso pohybovať po elipse. Jedno z ohnísk tejto elipsy leží v gravitačnom strede Zeme. Bod, v ktorom má teleso k Zemi najmenšiu vzdialenosť, sa nazýva **perigeum**. Bod, v ktorom je teleso od Zeme najďalej, sa nazýva **apogeum**.

Ak počiatočná rýchlosť dosiahne hodnotu

$$
v_p = \sqrt{\frac{2GM_Z}{R_Z+h}} = v_k\sqrt{2},
$$

bude sa teleso pohybovať po parabole a trvale sa vzďaľovať od Zeme. Táto rýchlosť sa preto nazýva **parabolická** alebo aj **úniková rýchlosť**.

Ak je výška, v ktorej sa nachádza teleso, zanedbateľná oproti polomeru Zeme, potom

$$
v_{pZ} = \sqrt{\frac{2GM_Z}{R_Z}} = v_{kZ}\sqrt{2}.
$$

Po dosadení hodnôt veličín dostávame $v_{pZ} \approx 11{,}2\ \mathrm{km \cdot s^{-1}}$. Túto rýchlosť nazývame **druhá kozmická rýchlosť** alebo niekedy aj úniková rýchlosť z povrchu Zeme.

> [!example] Príklad 3.15: Výška múra
> Aký vysoký bol múr, z ktorého vo vodorovnom smere vystrelený kameň rýchlosťou $20\ \mathrm{m \cdot s^{-1}}$ dopadol na vodorovnú rovinu do vzdialenosti $20\ \mathrm{m}$?
>
> Pohyb kameňa môžeme klasifikovať ako vodorovný vrh v tiažovom poli Zeme. Platia vzťahy
>
> $$
> x = v_0t,
> $$
>
> $$
> y = h - \frac{1}{2}gt^2.
> $$
>
> Pre miesto dopadu sú súradnice $x = d$ a $y = 0$. Z rovnice $d = v_0t$ platí $t = d/v_0$. Pre výšku múra dostávame
>
> $$
> h = \frac{1}{2}gt^2 = \frac{1}{2}g\frac{d^2}{v_0^2} = 5\ \mathrm{m}.
> $$
