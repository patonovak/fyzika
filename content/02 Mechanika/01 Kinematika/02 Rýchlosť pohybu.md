---
title: Rýchlosť pohybu
---

**Priemerná rýchlosť** $v_p$ je skalárna fyzikálna veličina, ktorá je definovaná ako podiel dráhy $\Delta s$ a doby $\Delta t$, za ktorú hmotný bod túto dráhu prejde.

$$
v_p = \frac{\Delta s}{\Delta t} = \frac{\text{celková dráha}}{\text{celkový čas}}
$$

Jej základnou jednotkou je **meter za sekundu**:

$$
\mathrm{m \cdot s^{-1}} = \mathrm{m/s}
$$

Odvodenou jednotkou je **kilometer za hodinu**:

$$
\mathrm{km \cdot h^{-1}} = \mathrm{km/h}
$$

Pre prevod medzi jednotkami platí:

$$
1\ \mathrm{m \cdot s^{-1}} = 3{,}6\ \mathrm{km \cdot h^{-1}}
$$

<p class="measurement-figure">
  <img src="/static/images/rychlost.png" alt="Priemerná rýchlosť" width="400">
</p>

> **Obr. 1.5.** K definícii priemernej rýchlosti.

Priemerná rýchlosť však nie je dostatočnou charakteristikou pohybu. Nevypovedá nič o tom, akou rýchlosťou sa pohybovalo teleso v danom okamihu na danej časti trajektórie. O tom vypovedá tzv. **okamžitá rýchlosť**, ktorej veľkosť môžeme odčítať napríklad na tachometri v aute.

**Veľkosť okamžitej rýchlosti** $v$ hmotného bodu v danom bode trajektórie zistíme ako priemernú rýchlosť na veľmi malom časovom intervale okolo tohto bodu.

$$
v = \frac{\Delta s}{\Delta t}
\quad \text{pre} \quad \Delta t \to 0
$$

Zápis $\Delta t \to 0$ čítame: „$\Delta t$ sa blíži k nule“ v zmysle „$\Delta t$ je veľmi malé“.

**Okamžitá rýchlosť** $\vec v$ je vektorová fyzikálna veličina. Má smer a znázorňujeme ju orientovanou úsečkou. Dá sa ukázať, že má smer dotyčnice k trajektórii v danom bode. Experimentálne túto skutočnosť dokazuje napríklad brúsenie na brúsnom kotúči: iskry odlietavajú v smere dotyčnice ku kotúču. Pod pojmom rýchlosť rozumieme často v hovorenej reči práve veľkosť okamžitej rýchlosti.

<p class="measurement-figure">
  <img src="/static/images/rychlost_vektor.png" alt="Vektor okamžitej rýchlosti" width="400">
</p>

> **Obr. 1.6.** Vektor okamžitej rýchlosti má smer dotyčnice v danám bode trajektórie.

> [!note] Rozširujúce učivo: Vektor okamžitej rýchlosti
> Polohu hmotného bodu $A$ v danej súradnicovej sústave opisuje polohový vektor $\vec r$ a polohu $B$ vektor $\vec r'$. Môžeme definovať zmenu polohového vektora ako $\Delta \vec r = \vec r' - \vec r$
> Keď by sme bod $B$ približovali tesne blízko k bodu $A$, teda pre časový okamih $\Delta t \to 0$, mal by vektor zmeny polohového vektora rovnaký smer ako okamžitá rýchlosť v bode $A$.
> <p class="measurement-figure callout-figure">
>   <img src="/static/images/vektor_okamzitej_rychlosti.png" alt="Vektor okamžitej rýchlosti" width="400">
> </p>
>
> **Obr. 1.7.** Vektor okamžitej rýchlosti.
> $$
> \vec v = \frac{\Delta \vec r}{\Delta t}
> \quad \text{pre} \quad \Delta t \to 0
> $$

> [!example] Príklad 1.1: Priemerná rýchlosť cyklistu
> Cyklista vyšiel cestu do kopca rýchlosťou $2\ \mathrm{m \cdot s^{-1}}$. Potom sa otočil a zišiel dole, odkiaľ prišiel. Dolu kopcom šiel stálou rýchlosťou $6\ \mathrm{m \cdot s^{-1}}$. Vypočítajte priemernú rýchlosť cyklistu.
>
> **Riešenie:**
>
> $$
> v_1 = 2\ \mathrm{m \cdot s^{-1}}, \qquad
> v_2 = 6\ \mathrm{m \cdot s^{-1}}, \qquad
> v_p = ?
> $$
>
> Cyklista aj nahor, aj nadol prešiel rovnakú dráhu, označme ju $s$. Priemerná rýchlosť je definovaná ako podiel celkovej dráhy prejdenej cyklistom a celkového času.
>
> $$
> v_p =
> \frac{\text{celková dráha}}{\text{celkový čas}}
> =
> \frac{s+s}{t_1+t_2}
> =
> \frac{2s}{\frac{s}{v_1}+\frac{s}{v_2}}
> =
> \frac{2v_1v_2}{v_1+v_2}
> $$
>
> Číselne po dosadení vychádza:
>
> $$
> v_p = 3\ \mathrm{m \cdot s^{-1}}
> $$
