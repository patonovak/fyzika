---
title: Nútené kmitanie mechanického oscilátora
---

Aby kmitanie reálneho oscilátora časom nezaniklo, musí mu byť zvonka dodávaná energia. Ak sa dodanie energie uskutočňuje nárazovo, kmitanie nezanikne, bude však neharmonické. Aby kmitanie zotrvalo harmonické a netlmené, musí na oscilátor pôsobiť **harmonicky premenná sila** $F = F_\mathrm{m}\sin\omega t$. Takéto vynútené netlmené harmonické kmitanie nazývame **nútené kmitanie oscilátora** (vynútené kmity). Vlastnosti oscilátora (v prípade závažia na pružine hmotnosť závažia a tuhosť pružiny, popr. pri kyvadle dĺžka závesu) nemajú vplyv na frekvenciu núteného kmitania. Oscilátor, ktorý koná vynútené kmity, kmitá s frekvenciou vonkajšieho pôsobenia (s frekvenciou budiacej sily).

Ak je frekvencia nútených kmitov $f$ zhodná s frekvenciou vlastného kmitania oscilátora $f_0$, nastane jav, ktorý nazývame **rezonancia**. Pri rezonančnom zosilnení kmitov dosahuje amplitúda okamžitej výchylky maximálnu hodnotu. V oscilátore teda možno vyvolať značné kmitanie aj malou silou, ktorej frekvencia je však blízka frekvencii vlastných kmitov oscilátora. Graf, ktorý vyjadruje závislosť amplitúdy núteného kmitania $y_\mathrm{m}$ od jeho frekvencie, sa nazýva **rezonančná krivka**.

<p class="measurement-figure figure-wide no-extra-frame">
  <img src="/static/images/nutene_kmitanie_a_rezonancna_krivka.png" alt="Nútené kmitanie pružinového oscilátora a rezonančná krivka" width="500">
</p>

> **Obr. 3.1.10.** Vznik núteného kmitania pružinového oscilátora (vľavo) a rezonančná krivka (vpravo).

Rezonancia má svoje využitie aj v technickej praxi, napr. pri hudobných nástrojoch, kedy chvenie strún nástrojov je veľmi slabo počuteľné, ale pri prenášaní na telo nástroja (napr. huslí) umožňuje rezonančné zosilnenie tónov. Rezonancia však môže mať aj negatívny dopad, ako príklad možno uviesť rezonančné zosilnenie kmitov mosta Tacoma Narrows v roku 1940, čo viedlo k jeho zrúteniu.

> [!example] Príklad 3.1.3: Energia mechanického oscilátora
> Máme izolovaný mechanický oscilátor s celkovou mechanickou energiou $0{,}02\ \mathrm{mJ}$. Aká je rovnica kmitania oscilátora, ak kmitá s periódou $2{,}5\ \mathrm{s}$ a počiatočnou fázou $45^\circ$? Amplitúda sily pôsobiacej na oscilátor je $2\ \mathrm{mN}$.
>
> **Riešenie:**
>
> $$
> E = 2 \cdot 10^{-5}\ \mathrm{J}, \quad T = 2{,}5\ \mathrm{s}, \quad \varphi_0 = \pi/4, \quad F_\mathrm{m} = 2 \cdot 10^{-3}\ \mathrm{N}
> $$
>
> V okamihu, keď dosahuje oscilátor najväčšiu potenciálnu energiu
>
> $$
> E = E_\mathrm{p} = \frac{1}{2}ky_\mathrm{m}^2,
> $$
>
> pôsobí na oscilátor najväčšia sila $F_\mathrm{m} = ky_\mathrm{m}$. Po dosadení za $k$ a vyjadrení dostávame
>
> $$
> y_\mathrm{m} = \frac{2E}{F_\mathrm{m}} = 0{,}02\ \mathrm{m} = 2\ \mathrm{cm}.
> $$
>
> Uhlová frekvencia kmitov kyvadla je $\omega = 2\pi/T = 4\pi/5\ \mathrm{rad \cdot s^{-1}}$. Ak teraz vezmeme do úvahy rovnicu harmonických kmitov v tvare $y = y_\mathrm{m}\sin(\omega t + \varphi_0)$, môžeme písať
>
> $$
> \{y\} = 0{,}02 \sin\left(\frac{4}{5}\pi\{t\} + \frac{\pi}{4}\right).
> $$
