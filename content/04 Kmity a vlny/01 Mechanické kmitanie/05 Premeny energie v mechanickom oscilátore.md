---
title: Premeny energie v mechanickom oscilátore
---

Skúmajme opäť harmonické kmity telesa na pružine. Pri tomto pohybe sa premieňa kinetická energia závažia na potenciálnu energiu pružnosti deformovanej pružiny a naopak. Najväčšiu kinetickú energiu má teleso pri prechode rovnovážnou polohou, a síce

$$
E_\mathrm{km} = \frac{1}{2}mv_\mathrm{m}^2 = \frac{1}{2}m\omega^2 y_\mathrm{m}^2.
$$

V tomto vzťahu je $v_\mathrm{m} = \omega y_\mathrm{m}$ amplitúda rýchlosti. V rovnovážnej polohe je potenciálna energia pružnosti nulová. Naopak, najväčšiu energiu pružnosti a nulovú kinetickú energiu má teleso v krajných polohách.

$$
E_\mathrm{pm} = \frac{1}{2}ky_\mathrm{m}^2
$$

Celková energia kmitania je rovná súčtu kinetickej a potenciálnej energie $E = E_\mathrm{k} + E_\mathrm{p}$. Dosaďme do tohto vzťahu postupne vzťahy pre výchylku a rýchlosť kmitavého pohybu.

$$
E = \frac{1}{2}ky^2 + \frac{1}{2}mv^2 = \frac{1}{2}ky_\mathrm{m}^2\sin^2\omega t + \frac{1}{2}mv_\mathrm{m}^2\cos^2\omega t.
$$

Zo zákona zachovania energie možno napísať energetickú bilanciu pre dva okamihy, a síce krajnú a rovnovážnu polohu, z ktorých vyplýva

$$
\frac{1}{2}ky_\mathrm{m}^2 = \frac{1}{2}mv_\mathrm{m}^2.
$$

Odtiaľ $ky_\mathrm{m}^2 = mv_\mathrm{m}^2$ a keďže platí goniometrická identita $\sin^2 x + \cos^2 x = 1$, dostávame tak

$$
E = E_\mathrm{k} + E_\mathrm{p} = \frac{1}{2}ky_\mathrm{m}^2 = \frac{1}{2}mv_\mathrm{m}^2 = \text{konšt.}
$$

Celková energia kmitania mechanického oscilátora je konštantná a v každom okamihu sa rovná súčtu kinetickej a potenciálnej energie, ak neberieme do úvahy straty energie. Takéto kmitanie, pri ktorom sa amplitúda kmitov nemení, sa nazýva **netlmené kmitanie**. V skutočnosti však vždy dochádza ku stratám energie a amplitúda kmitov sa postupne zmenšuje, až kmitanie oscilátora zanikne. Takéto kmitanie nazývame **tlmené kmitanie** oscilátora.

<p class="measurement-figure figure-wide no-extra-frame">
  <img src="/static/images/energia_a_tlmene_kmitanie_oscilatora.png" alt="Premeny energie a tlmené kmity mechanického oscilátora" width="500">
</p>

> **Obr. 3.1.9.** Časový diagram potenciálnej a kinetickej energie netlmených kmitov mechanického oscilátora (vľavo). Časový diagram tlmených kmitov mechanického oscilátora (vpravo).
