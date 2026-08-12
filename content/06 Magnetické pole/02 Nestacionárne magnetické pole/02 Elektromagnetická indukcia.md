---
title: Elektromagnetická indukcia
---

Ak budeme pohybovať permanentným magnetom v okolí vodivého závitu, začne závitom prechádzať elektrický prúd a medzi koncami závitu vzniká elektrické napätie. Pohybujúci sa magnet vytvára v okolí závitu nestacionárne magnetické pole, a to je príčinou vzniku elektrického poľa vo vodiči. Tento jav nazývame **elektromagnetická indukcia**.

Elektromagnetická indukcia je jav, pri ktorom je nestacionárne (časovo premenné) magnetické pole príčinou vzniku indukovaného elektrického poľa. Medzi koncami vodiča vzniká indukované napätie $U_i$ a obvodom tečie indukovaný prúd $I_i$.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/magneticke-pole/nestacionarne-magneticke-pole/obr-5-2-2.png" alt="Elektromagnetická indukcia pri pohybe magnetu v okolí vodivého závitu">
  <figcaption>Obr. 5.2.2: Ak sa približujeme magnetom k vodivému závitu, začne obvodom prechádzať indukovaný prúd. Ak sa s magnetom vzďaľujeme od závitu, preteká obvodom indukovaný prúd opačným smerom.</figcaption>
</figure>

Jav elektromagnetickej indukcie možno pozorovať, aj keď bude magnet v pokoji a budeme so závitom hýbať, otáčať ním alebo ho deformovať. Dôležité je, aby sa s časom menil magnetický indukčný tok plochou závitu, len vtedy možno pozorovať vznik indukovaného napätia a prúdu.

## Faradayov zákon elektromagnetickej indukcie

Veľkosť elektromotorického napätia indukovaného vo vodivom uzavretom závite sa rovná záporne vzatej časovej zmene magnetického indukčného toku.

$$
U_i = - \frac{\Delta\Phi}{\Delta t}
$$

V obvode s celkovým odporom $R$ tak vznikne indukovaný prúd daný vzťahom

$$
I_i = \frac{U_i}{R}.
$$

Na určenie smeru indukovaného prúdu v obvode možno použiť **Lenzov zákon**. Indukovaný elektrický prúd v uzavretom obvode má taký smer, že svojím poľom pôsobí proti zmene magnetického indukčného toku, ktorá ho vyvolala.

Lenzov zákon je vo Faradayovom zákone elektromagnetickej indukcie vyjadrený znakom mínus. Na obr. 5.2.2 môžeme demonštrovať aplikáciu Lenzovho zákona. V prípade vľavo musí magnetické pole od indukovaného prúdu pôsobiť proti smeru magnetickej indukcie tyčového magnetu. Preto obvodom tečie indukovaný prúd naznačeným smerom.

> [!example] Príklad 5.2.2: Vodič na koľajničkách
> Vodič dĺžky 1 m s elektrickým odporom 5 $\Omega$ sa nachádza na vodivých koľajničkách pripojených ku zdroju napätia 2 V. Celá sústava sa nachádza v homogénnom magnetickom poli s magnetickou indukciou 0,2 T. Popíšte, čo sa stane, ak sa vodič začne pohybovať rovnomerne doprava, pričom veľkosť jeho rýchlosti je $4\ \mathrm{m}\cdot\mathrm{s^{-1}}$. Aký celkový prúd prechádza vtedy vodičom?
>
> <figure class="measurement-figure callout-figure no-extra-frame">
>   <img src="/static/images/fyzika/magneticke-pole/nestacionarne-magneticke-pole/obr-priklad-5-2-2.png" alt="Vodič na koľajničkách v homogénnom magnetickom poli">
>   <figcaption>Obr. 5.2.2: Vodič na koľajničkách v homogénnom magnetickom poli.</figcaption>
> </figure>
>
> **RIEŠENIE:**
> $l = 1\ \mathrm{m},\ R = 5\ \Omega,\ U = 2\ \mathrm{V},\ B = 0{,}2\ \mathrm{T},\ v = 4\ \mathrm{m}\cdot\mathrm{s^{-1}};\ I = ?$
>
> V prípade, že sa vodič pohybuje doprava konštantnou rýchlosťou, zväčšuje sa plocha slučky, a tým aj magnetický indukčný tok. V elektrickom obvode sa indukuje prúd, ktorý svojím poľom pôsobí proti zmene, ktorá ho vyvolala. Smer magnetických indukčných čiar bude opačný, ako je smer magnetických indukčných čiar vonkajšieho poľa. Ampérovo pravidlo pravej ruky tak hovorí, že smer indukovaného prúdu v obvode bude súhlasný so smerom prúdu od zdroja napätia. Veľkosť indukovaného napätia je (plochu slučky možno vyjadriť ako $S = l v t$)
>
> $$
> |U_i| = \frac{\Delta\Phi}{\Delta t} = \frac{B\Delta S}{\Delta t} = \frac{B l v \Delta t}{\Delta t} = B l v .
> $$
>
> Celkové napätie je vzhľadom na zhodnosť smeru prúdov $U_c = U + |U_i|$ a celkový prúd
>
> $$
> I = \frac{U_c}{R} = \frac{U + |U_i|}{R} = \frac{U + Blv}{R} = 0{,}56\ \mathrm{A}.
> $$
