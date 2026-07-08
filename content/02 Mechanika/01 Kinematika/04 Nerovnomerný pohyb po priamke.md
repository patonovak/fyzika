---
title: Nerovnomerný pohyb po priamke
---

## Nerovnomerný pohyb

**Nerovnomerný pohyb** koná teleso vtedy, ak za rovnako veľké, ale inak ľubovoľné časové intervaly, prejde rôzne veľké úseky dráhy.

**Zrýchlenie** $\vec a$ hmotného bodu je určené ako podiel zmeny vektora okamžitej rýchlosti a doby, za ktorú táto zmena nastala. Jednotkou zrýchlenia je:

$$
\mathrm{m \cdot s^{-2}}
$$

Zrýchlenie zapisujeme vzťahom:

$$
\vec a = \frac{\Delta \vec v}{\Delta t}
$$

Nerovnomerné pohyby delíme na:

- **zrýchlené** - vektor zrýchlenia má smer totožný so smerom okamžitej rýchlosti,
- **spomalené** - vektor zrýchlenia má opačný smer ako vektor okamžitej rýchlosti.

<p class="measurement-figure">
  <img src="/static/images/rzp.png" alt="Rovnomerný priamočiary pohyb" width="400">
</p>

> **Obr. 1.10.** Rovnomerne zrýchlený a spomalený pohyb.

## Rovnomerne zrýchlený priamočiary pohyb

**Rovnomerne zrýchlený priamočiary pohyb** je pohyb, pri ktorom sa nemení veľkosť ani smer zrýchlenia. Symbolicky:

$$
\vec a = \text{konšt.}
$$

Vektor zrýchlenia má pritom rovnaký smer ako vektor okamžitej rýchlosti.

Veľkosť okamžitej rýchlosti telesa pri rovnomerne zrýchlenom priamočiarom pohybe rastie lineárne s časom a platia vzťahy:

$$
v = at
\quad \text{pre} \quad v_0 = 0
$$

$$
v = v_0 + at
\quad \text{pre} \quad v_0 \ne 0
$$

Dráha, ktorú prejde hmotný bod pri rovnomerne zrýchlenom priamočiarom pohybe, narastá úmerne s druhou mocninou času:

$$
s \sim t^2
$$

Pre dráhu rovnomerne zrýchleného priamočiareho pohybu platia vzťahy:

$$
s = \frac{1}{2}at^2
\quad \text{pre} \quad v_0 = 0
$$

$$
s = v_0t + \frac{1}{2}at^2
\quad \text{pre} \quad v_0 \ne 0
$$
<p class="measurement-figure">
  <img src="/static/images/grafy_rzp.png" alt="Grafy RZP" width="700">
</p>

> **Obr. 1.11.** Grafy závislosti zrýchlenia, rýchlosti a dráhy od času pri rovnomernom zrýchlenom pohybe po priamke.

## Rovnomerne spomalený priamočiary pohyb

**Rovnomerne spomalený priamočiary pohyb** je pohyb, pri ktorom sa nemení veľkosť ani smer zrýchlenia. Vektor zrýchlenia má pritom opačný smer ako vektor okamžitej rýchlosti.

Veľkosť okamžitej rýchlosti rovnomerne spomaleného priamočiareho pohybu je určená vzťahom:

$$
v = v_0 - at
$$

Pre dráhu rovnomerne spomaleného priamočiareho pohybu platí vzťah:

$$
s = v_0t - \frac{1}{2}at^2
$$

Pokiaľ sa teleso s počiatočnou rýchlosťou $v_0$ začne pohybovať rovnomerne spomalene, pre čas, za ktorý sa zastaví, a dráhu, ktorú pritom prejde, platia vzťahy:

$$
t_z = \frac{v_0}{a}
$$

$$
s_z = \frac{v_0^2}{2a}
$$
<p class="measurement-figure">
  <img src="/static/images/grafy_rsp.png" alt="Grafy RSP" width="700">
</p>

> **Obr. 1.12.** Grafy závislosti zrýchlenia, rýchlosti a dráhy od času pri rovnomernom spomalenom pohybe po priamke.


> [!example] Príklad 1.2: Čas a dráha zastavenia
> Dokážte, že pre čas a dráhu zastavenia pri rovnomerne spomalenom pohybe platia vzťahy uvedené vyššie.
>
> **Riešenie:**
>
> Teleso s rýchlosťou $v_0$ začne spomaľovať so stálym zrýchlením $a$. Keď zastaví, je veľkosť jeho okamžitej rýchlosti rovná nule:
>
> $$
> v = v_0 - at_z = 0
> $$
>
> Odtiaľ máme pre čas zastavenia:
>
> $$
> t_z = \frac{v_0}{a}
> $$
>
> Za čas $t_z$ pritom prejde teleso dráhu:
>
> $$
> s_z =
> v_0t_z - \frac{1}{2}at_z^2
> =
> v_0 \frac{v_0}{a}
> -
> \frac{1}{2}a \frac{v_0^2}{a^2}
> =
> \frac{v_0^2}{a}
> -
> \frac{v_0^2}{2a}
> =
> \frac{v_0^2}{2a}
> $$



## Voľný pád

Vývoj názorov na pád voľne pusteného telesa sa v priebehu dejín výrazne menil. Starogrécky filozof Aristoteles tvrdil, že ťažšie telesá padajú k Zemi rýchlejšie ako ľahšie. Tento názor sa dlho považoval za správny.

Proti tejto predstave vystúpil taliansky fyzik a astronóm Galileo Galilei, ktorý problém voľného pádu riešil experimentálne. V dejinách fyziky má významné miesto práve preto, že svoje hypotézy overoval pokusmi.

<p class="measurement-figure">
  <img src="/static/images/aristoteles_galileo.png" alt="aristoteles_galileo" width="700">
</p>

> **Obr. 1.13.** Aristoteles (384 p.n.l. - 322 p.n.l.) a Galileo Galilei (1564 - 1642)

Z pozorovaní voľného pádu, teda pádu voľne pusteného telesa vo vákuu, vyplynulo, že ide o pohyb **rovnomerne zrýchlený**. Všetky telesá padajú v blízkosti Zeme vo vákuu s rovnakým konštantným zrýchlením, ktoré nazývame **tiažové zrýchlenie** $g$.

Veľkosť tiažového zrýchlenia sa mení v závislosti od zemepisnej šírky a nadmorskej výšky. V našej zemepisnej šírke má približne hodnotu:

$$
g \approx 9{,}81\ \mathrm{m \cdot s^{-2}}
$$

Dohodou bola stanovená tzv. veľkosť normálneho tiažového zrýchlenia:

$$
g = 9{,}80665\ \mathrm{m \cdot s^{-2}}
$$

V mnohých úlohách si vystačíme s približnou hodnotou:

$$
g \approx 10\ \mathrm{m \cdot s^{-2}}
$$

Keďže voľný pád je pohyb rovnomerne zrýchlený so zrýchlením $a = g$, môžeme použiť analogické vzťahy:

$$
v = gt
$$

$$
s = \frac{1}{2}gt^2
$$

Pád telies s vylúčeným odporom vzduchu môžeme pozorovať v tzv. **Newtonovej trubici**. Ak z nej odčerpáme vzduch, telesá s rôznou hmotnosťou padajú súčasne rovnakou rýchlosťou, ktorá nezávisí od ich hmotnosti.

> [!example] Príklad 1.3: Pád tenisovej loptičky
> Tenisová loptička bola pustená z 2. poschodia paneláku a dopadla na zem za $0{,}9$ sekundy.
>
> a) V akej výške nad zemou je druhé poschodie paneláku?
>
> b) Akou rýchlosťou dopadla loptička na zem?
>
> Pre tiažové zrýchlenie použite hodnotu $g \approx 10\ \mathrm{m \cdot s^{-2}}$.
>
> **Riešenie:**
>
> $$
> t = 0{,}9\ \mathrm{s}, \qquad
> g \approx 10\ \mathrm{m \cdot s^{-2}}, \qquad
> h, v = ?
> $$
>
> Pohyb loptičky môžeme klasifikovať ako voľný pád.
>
> $$
> h = \frac{1}{2}gt^2 \approx 4\ \mathrm{m}
> $$
>
> Pre rýchlosť dopadu pri voľnom páde máme:
>
> $$
> v = gt = 9\ \mathrm{m \cdot s^{-1}}
> $$