---
title: Postupné mechanické vlnenie
---

Vzdialenosť, do ktorej sa vlnenie rozšíri za čas jednej periódy $T$ kmitania zdroja vlnenia, sa nazýva **vlnová dĺžka** $\lambda$ (lambda).

$$
\lambda = vT = \frac{v}{f}
$$

Je to vzdialenosť dvoch najbližších bodov, ktoré kmitajú s rovnakou fázou. Rýchlosť $v$ je tzv. **fázová rýchlosť vlnenia**.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/vlnova_dlzka.png" alt="Vlnová dĺžka postupnej vlny">
  <figcaption>Obr. 3.2.2. Vlnová dĺžka je najmenšia vzdialenosť meraná v smere šírenia vlny, kde dochádza k opakovaniu tvaru vlny. Je to vzdialenosť dvoch najbližších bodov, ktoré kmitajú s rovnakou fázou.</figcaption>
</figure>

Ak sa postupné vlnenie šíri radom bodov a dostane sa do vzdialenosti $x$ od zdroja, trvá mu to čas

$$
t_0 = \frac{x}{v}.
$$

Kmitanie v tomto bode je teda oneskorené oproti kmitaniu zdroja o čas $t_0$. Pre kmitanie tohto bodu platí

$$
y = y_m \sin \omega (t - t_0) = y_m \sin \omega \left(t - \frac{x}{v}\right).
$$

Po dosadení za uhlovú frekvenciu $\omega = 2\pi/T$ a vzťahu pre vlnovú dĺžku $\lambda = vT$, dostaneme

$$
y = y_m \sin 2\pi \left(\frac{t}{T} - \frac{x}{\lambda}\right).
$$

Túto rovnicu nazývame **rovnica postupnej vlny**. Platí pre priečne aj pozdĺžne **harmonické vlnenie** v homogénnom prostredí. Z funkčného predpisu vidíme, že na rozdiel od kmitania, ktoré bolo len funkciou času, je rovnica popisujúca vlnenie funkciou času, ale aj priestorovej premennej $x$.

## Interferencia vlnení

Pri postupe dvoch alebo viacerých vlnení pružným prostredím dochádza pri strete týchto vlnení k ich skladaniu, hovoríme o interferencii. Kmitanie bodu v ľubovoľnom mieste je určené superpozíciou okamžitých výchyliek oboch vlnení.

Na obr. 3.2.3 máme dve vlnenia s rovnakou amplitúdou $y_m$ a vlnovou dĺžkou $\lambda$, ktorých rovnice sú

$$
y_1 = y_m \sin 2\pi \left(\frac{t}{T} - \frac{x_1}{\lambda}\right),
$$

$$
y_2 = y_m \sin 2\pi \left(\frac{t}{T} - \frac{x_2}{\lambda}\right).
$$

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/interferencia_dvoch_vlneni.png" alt="Interferencia dvoch vlnení">
  <figcaption>Obr. 3.2.3. Interferencia dvoch vlnení, využívame pri tom princíp superpozície.</figcaption>
</figure>

Zdroje vlnení $Z_1$ a $Z_2$ majú rôznu polohu, no kmitajú s rovnakou začiatočnou fázou. Vzdialenosť zdrojov $d = x_2 - x_1$ je potom vzdialenosť dvoch bodov, v ktorých majú vlnenia rovnakú fázu. Túto vzdialenosť nazývame **dráhový rozdiel**. Rovnica výsledného vlnenia je potom

$$
y = 2y_m \cos \frac{\pi d}{\lambda} \sin 2\pi \left(\frac{t}{T} - \frac{x_1 + x_2}{2\lambda}\right).
$$

Pre **fázový rozdiel** $\Delta \varphi$ dvoch vlnení dostávame

$$
\Delta \varphi = 2\pi \left(\frac{t}{T} - \frac{x_1}{\lambda}\right) - 2\pi \left(\frac{t}{T} - \frac{x_2}{\lambda}\right) = \frac{2\pi}{\lambda}(x_2 - x_1) = \frac{2\pi}{\lambda}d.
$$

Fázový rozdiel dvoch vlnení je priamo úmerný dráhovému rozdielu. Zaujímavé prípady interferencie dostávame v prípade, že je dráhový rozdiel vlnení rovný celočíselnému násobku počtu polvĺn interferujúcich vlnení. Môžu nastať nasledovné prípady:

- **Dráhový rozdiel je rovný párnemu počtu polvĺn.** Platí podmienka $d = 2k \frac{\lambda}{2} = k\lambda$, kde $k = 0, 1, 2, ...$ Vlnenia sa stretávajú s rovnakou fázou a vzniká **interferenčné maximum**. Amplitúda výsledného vlnenia je rovná súčtu amplitúd interferujúcich vlnení $y_m = y_{m1} + y_{m2}$.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/konstruktivna_interferencia.png" alt="Konštruktívna interferencia">
  <figcaption>Obr. 3.2.4. Konštruktívna interferencia vedie k vzniku interferenčného maxima.</figcaption>
</figure>

- **Dráhový rozdiel je rovný nepárnemu počtu polvĺn.** Podmienka $d = (2k + 1)\frac{\lambda}{2}$, kde $k = 0, 1, 2, ...$ Vlnenia sa stretávajú s opačnou fázou a vzniká interferenčné minimum. Amplitúda výsledného vlnenia je rovná rozdielu amplitúd interferujúcich vlnení $y_m = |y_{m1} - y_{m2}|$.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/destruktivna_interferencia.png" alt="Deštruktívna interferencia">
  <figcaption>Obr. 3.2.5. Deštruktívna interferencia vedie k vzniku interferenčného minima.</figcaption>
</figure>

> [!example] Príklad 3.2.1: Vlnenie v mosadznej tyči
> Pri frekvencii 2,5 kHz vzniká v mosadznej tyči vlnenie s vlnovou dĺžkou 1,3 m. Vypočítajte rýchlosť šírenia vlnenia v tejto tyči.
>
> **RIEŠENIE:**
>
> $f = 2{,}5\,\mathrm{kHz} = 2\,500\,\mathrm{Hz}$, $\lambda = 1{,}3\,\mathrm{m}$; $v = ?$
>
> Z definície vlnovej dĺžky $\lambda = vT = v/f$ dostávame pre rýchlosť vlnenia
>
> $$
> v = \lambda f = 3\,250\,\mathrm{m\,s^{-1}} \doteq 3{,}3\,\mathrm{km\,s^{-1}}.
> $$
>
> Rýchlosť šírenia tohto vlnenia v mosadznej tyči je približne $3{,}3\,\mathrm{km\,s^{-1}}$.
