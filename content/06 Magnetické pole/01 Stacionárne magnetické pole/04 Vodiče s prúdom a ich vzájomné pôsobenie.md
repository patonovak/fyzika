---
title: Vodiče s prúdom a ich vzájomné pôsobenie
---

V okolí priameho vodiča s elektrickým prúdom je magnetické pole, ktoré modelujeme magnetickými indukčnými čiarami. Sú to sústredné kružnice so stredom v osi vodiča (obr. 5.1.9). Veľkosť magnetickej indukcie vo vzdialenosti $d$ od vodiča, ktorým prechádza prúd $I$, je daná vzťahom

$$
B = \mu \frac{I}{2\pi d}.
$$

Ak je vodič stočený do $N$ závitov na dĺžke $l$, je veľkosť magnetickej indukcie vo vnútri cievky

$$
B = \mu \frac{NI}{l}.
$$

V týchto vzťahoch je $\mu$ tzv. permeabilita prostredia. Charakterizuje prostredie, v ktorom elektrický prúd vytvára magnetické pole. Ak pole vzniká vo vákuu (približne aj vo vzduchu), je permeabilita vákua

$$
\mu_0 = 4\pi \cdot 10^{-7}\ \mathrm{N}\cdot\mathrm{A}^{-2}.
$$

Veličina, ktorá udáva pomer, koľkokrát je permeabilita látkového prostredia väčšia ako permeabilita vákua, sa nazýva relatívna permeabilita $\mu_r$. Pre vákuum je $\mu_r = 1$, pre vzduch $\mu_r \approx 1$.

$$
\mu_r = \frac{\mu}{\mu_0}
$$

Ak vo vákuu vytvára istý prúd magnetické pole s magnetickou indukciou $\vec{B}_0$, potom rovnaký prúd vytvára v látkovom prostredí s relatívnou permeabilitou $\mu_r$ pole s magnetickou indukciou $\vec{B} = \mu_r \vec{B}_0$.

## VZÁJOMNÉ PÔSOBENIE DVOCH PRIAMYCH VODIČOV S PRÚDOM

Dva dlhé priame vodiče, ktorými preteká elektrický prúd, na seba navzájom silovo pôsobia magnetickými silami. Podľa smeru prúdov tečúcich vo vodičoch potom platí, že:

- vodiče sa priťahujú, ak prúdy nimi tečú rovnakým smerom,
- vodiče sa odpudzujú, ak prúdy nimi tečú opačnými smermi.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/magneticke-pole/stacionarne-magneticke-pole/obr-5-1-11.png" alt="Vzájomné pôsobenie dvoch priamych vodičov s prúdom">
  <figcaption>Obr. 5.1.11: Dva vodiče, ktorými preteká prúd, sa priťahujú (odpudzujú) rovnako veľkými magnetickými silami, ktoré majú opačný smer. Ak prúdy tečú rovnakým smerom, vodiče sa priťahujú. Ak opačnými smermi, odpudzujú sa.</figcaption>
</figure>

Pre veľkosť magnetickej sily, ktorou na seba pôsobia úseky vodičov s dĺžkou $l$ vo vzdialenosti $d$, platí

$$
F_m = \mu \frac{I_1 I_2}{2\pi d}l.
$$

Štúdiom vzájomného pôsobenia medzi vodičmi s prúdom sa zaoberal fyzik ANDRÉ-MARIE AMPÈRE, tomuto vzťahu sa preto niekedy hovorí aj Ampérov zákon pre dva vodiče s prúdom.

> [!example] Príklad 5.1.1 Dva vodiče s prúdom
> Vypočítajte, aká je vzdialenosť dvoch vodičov trolejového vedenia, ak v momente krátkeho spojenia nimi pretekal prúd 20 kA a časť vodiča s dĺžkou 14 m bola unášaná silou 2 800 N. Pre permeabilitu vákua použite hodnotu $\mu_0 = 4\pi \cdot 10^{-7}\ \mathrm{N}\cdot\mathrm{A}^{-2}$.
>
> **RIEŠENIE:**
> $I_1 = I_2 = I = 20\ \mathrm{kA} = 20\ 000\ \mathrm{A},\ l = 14\ \mathrm{m},\ F_m = 2\ 800\ \mathrm{N};\ d = ?$
>
> Dvoma vodičmi prechádza elektrický prúd $I_1 = I_2 = I$, pričom pre veľkosť magnetických síl, ktorými na seba pôsobia, platí vzťah
>
> $$
> F_m = \mu_0 \frac{I_1 I_2}{2\pi d}l = \mu_0 \frac{I^2}{2\pi d}l.
> $$
>
> Odtiaľ možno vyjadriť vzdialenosť vodičov ako
>
> $$
> d = \frac{\mu_0 I^2 l}{2\pi F_m} = 40\ \mathrm{cm}.
> $$
>
> Vodiče sa nachádzajú od seba vo vzdialenosti 40 cm.
