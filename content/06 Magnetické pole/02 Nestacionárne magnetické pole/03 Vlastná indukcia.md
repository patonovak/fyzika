---
title: Vlastná indukcia
---

V obvode na obr. 5.2.3 sú v dvoch paralelných vetvách zapojené rezistor a cievka s oceľovým jadrom, za obidvomi súčiastkami sú zapojené rovnaké žiarovky. Ak zopneme spínač, pozorujeme, že žiarovka vo vetve s rezistorom sa rozsvieti takmer okamžite. Žiarovka vo vetve s cievkou sa rozsvieti neskôr. Podobná situácia nastáva aj po vypnutí spínača, žiarovka vo vetve s rezistorom zhasne okamžite a žiarovka vo vetve s cievkou pomaly zhasína.

Po zopnutí spínača spolu s rastúcim elektrickým prúdom rastie aj magnetická indukcia magnetického poľa, pole je nestacionárne. Toto pole tak indukuje v cievke elektrické pole a podľa Lenzovho zákona pôsobí proti zmene, ktorá ho vyvolala. To má za následok, že na cievke sa indukuje elektromotorické napätie s opačnou polaritou, akú má napätie na zdroji. Kvôli tomu prúd pretekajúci cievkou pomaly narastá, až dosiahne svoju maximálnu hodnotu. Vtedy nastáva ustálený stav, indukované pole zaniká. Po rozpojení obvodu sa v cievke indukuje napätie s rovnakou polaritou ako má zdroj, to má za následok pomalé „dohasínanie“ žiarovky vo vetve s cievkou.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/magneticke-pole/nestacionarne-magneticke-pole/obr-5-2-3.png" alt="Vlastná indukcia v obvode s rezistorom a cievkou">
  <figcaption>Obr. 5.2.3: Ak zopneme spínač, žiarovka vo vetve s rezistorom sa rozsvieti ihneď, zatiaľ čo žiarovka vo vetve s cievkou sa rozsvieti neskôr. Časový priebeh prúdov v oboch vetvách je na obrázku vpravo.</figcaption>
</figure>

**Vlastná indukcia** je jav, pri ktorom indukované elektrické pole vzniká v uzavretom vodiči aj pri zmenách magnetického poľa, ktoré sú vyvolané zmenami prúdu vo vlastnom vodiči. Ak prechádza cievkou elektrický prúd $I$, vznikne v jej dutine magnetické pole. Magnetický indukčný tok $\Phi$ plochou závitov cievky je

$$
\Phi = L I .
$$

Konštanta úmernosti $L$, ktorá závisí od vlastnosti cievky, sa nazýva **indukčnosť**. Pre cievku je táto veličina charakteristická ako odpor $R$ pre rezistor alebo kapacita $C$ pre kondenzátor. Jednotkou tejto veličiny je **henry** (H). Elektrické napätie indukované v cievke možno vyjadriť ako

$$
U_i = - \frac{\Delta\Phi}{\Delta t} = - L \frac{\Delta I}{\Delta t}
$$

Magnetické pole, podobne ako pole napr. elektrické, má svoju energiu. Vzťah pre energiu magnetického poľa cievky s indukčnosťou $L$ bez jadra, ktorou prechádza elektrický prúd $I$, je

$$
E_m = \frac{1}{2} L I^2 .
$$

> [!example] Príklad 5.2.3: Indukované napätie
> Vodič je vymodelovaný do tvaru dvoch kruhových závitov s polomermi 2 cm. Tento vodič uložíme do magnetického poľa s magnetickou indukciou 0,5 T kolmo na indukčné čiary. Vypočítajte, aké indukované napätie vznikne, ak magnetické pole za 1 s rovnomerne vymizne.
>
> **RIEŠENIE:**
> $r = 2\ \mathrm{cm} = 0{,}02\ \mathrm{m},\ B = 0{,}5\ \mathrm{T},\ t = 1\ \mathrm{s};\ U_i = ?$
>
> Najprv vypočítame zmenu magnetického indukčného toku. Po rovnomernom vymiznutí poľa je magnetický indukčný tok nulový $\Phi_2 = 0$. Na začiatku v prítomnosti poľa je indukčný tok rovný
>
> $$
> \Phi_1 = 2BS = 2B\pi r^2 .
> $$
>
> To vyplýva z toho, že vodič má tvar dvoch kruhových závitov s polomerom $r$ umiestnených kolmo na indukčné čiary. Indukované napätie potom vypočítame ako
>
> $$
> U_i = -\frac{\Delta\Phi}{\Delta t} = -\frac{\Phi_2 - \Phi_1}{\Delta t} = \frac{2B\pi r^2}{\Delta t} \approx 1{,}3\cdot 10^{-3}\ \mathrm{V}.
> $$
