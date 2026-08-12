---
title: Sériový RLC obvod
---

Zložené obvody striedavého prúdu obsahujú viacero parametrov. Jedným z takých obvodov je sériový RLC obvod. Je v ňom sériovo zapojený rezistor, cievka a kondenzátor. Týmito súčiastkami prechádza rovnaký prúd, avšak napätia na nich sú rôzne. Pomôžeme si fázorovým diagramom na obr. 5.3.4.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/magneticke-pole/striedavy-prud/obr-5-3-4-rlc-obvod.png" alt="Sériový RLC obvod a fázorový diagram napätí">
  <figcaption>Obr. 5.3.4: Sériový RLC obvod obsahuje rezistor, cievku a kondenzátor v sérii pripojené na zdroj striedavého napätia. Všetkými súčiastkami prechádza rovnaký prúd, avšak napätia na nich sú rôzne.</figcaption>
</figure>

S pomocou fázorového diagramu a Pytagorovej vety možno napísať vzťah

$$
U_m^2 = U_R^2 + (U_L - U_C)^2.
$$

Keďže platí $U_R = I_mR$, $U_L = I_m\omega L$ a $U_C = I_m/\omega C$, dostaneme po dosadení a úprave

$$
Z = \frac{U_m}{I_m} = \sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2}.
$$

Veličinu $Z$ nazývame **impedancia** obvodu, jej jednotkou je **ohm** ($\Omega$). Charakterizuje obvod ako celok. Pomocou fázorového diagramu a goniometrie možno určiť aj fázový posun z intervalu $-\frac{1}{2}\pi \leq \varphi \leq \frac{1}{2}\pi$.

$$
\mathrm{tg}\ \varphi = \frac{U_L - U_C}{U_R} = \frac{\omega L - \frac{1}{\omega C}}{R}
$$

## VÝKON STRIEDAVÉHO PRÚDU

Výkon tej časti elektrickej energie dodanej do obvodu, ktorá sa za jednotku času premení na teplo alebo užitočnú prácu, nazývame **činný výkon**. Pre činný výkon platí vzťah

$$
P = UI\cos\varphi .
$$

V tomto vzťahu sú $U$ a $I$ efektívne hodnoty napätia a prúdu, činiteľ $\cos\varphi$ sa nazýva **účinník**. Určuje účinnosť prenosu energie medzi zdrojom striedavého prúdu a spotrebičom v obvode.

- Maximálny výkon je pre $\varphi = 0$, teda pre $\cos\varphi = 1$.
- Nulový výkon je pre $\varphi = \pm\pi/2$, teda pre $\cos\varphi = 0$.

> [!example] Príklad 5.3.4: Indukčnosť cievky
> Vypočítajte indukčnosť cievky, jej rezistancia je zanedbateľná, ak po zapojení na zdroj striedavého napätia 230 V a frekvencie 50 Hz prepúšťa elektrický prúd 10 A.
>
> **RIEŠENIE:**
> $U = 230\ \mathrm{V},\ f = 50\ \mathrm{Hz},\ I = 10\ \mathrm{A};\ L = ?$
>
> Za pomoci vzťahu pre induktanciu cievky $X_L = \omega L$ a Ohmovho zákona dostaneme
>
> $$
> I = \frac{U}{X_L} = \frac{U}{\omega L} = \frac{U}{2\pi fL}.
> $$
>
> Odtiaľ dostaneme priamo
>
> $$
> L = \frac{U}{2\pi fI} \approx 73\ \mathrm{mH}.
> $$
