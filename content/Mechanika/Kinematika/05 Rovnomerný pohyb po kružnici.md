---
title: Rovnomerný pohyb po kružnici
date: 2026-06-25
tags:
  - fyzika
  - mechanika
  - kinematika
---

S pohybom po kružnici sa v bežnom živote stretávame často, napríklad pri kolesách, točiacom sa disku alebo kotúčovej píle. **Rovnomerný pohyb po kružnici** je najjednoduchším z krivočiarych pohybov.

Pri rovnomernom pohybe po kružnici opíše hmotný bod za rovnaké časové intervaly rovnako dlhé kružnicové oblúky $\Delta s$, ktorým prislúchajú rovnako veľké stredové uhly $\Delta \varphi$.

Rovnomerný pohyb po kružnici je **periodický pohyb**, teda pravidelne sa opakujúci. Čas, za ktorý teleso vykoná jeden obeh, sa nazýva **perióda** alebo **čas obehu** a označuje sa $T$. Jej jednotkou je sekunda.

Inou veličinou, ktorá charakterizuje periodický pohyb, je **frekvencia** pohybu. Určuje počet obehov za jednu sekundu.

$$
f = \frac{1}{T}
$$

Jednotkou frekvencie je **hertz** (Hz). Platí:

$$
[f] = \mathrm{Hz} = \mathrm{s^{-1}}
$$

> [!example] Príklad 3.3: Perióda a frekvencia pohybu
> Auto obehne rovnomerne kruhovú dráhu za čas $50\ \mathrm{s}$. Aká je perióda a frekvencia jeho pohybu?
>
> **Riešenie:**
>
> $$
> t = 50\ \mathrm{s}, \qquad T, f = ?
> $$
>
> Perióda pohybu auta po kružnici je čas jedného obehu auta, teda priamo zo zadania:
>
> $$
> T = 50\ \mathrm{s}
> $$
>
> Frekvencia pohybu, teda počet obehov za jednu sekundu, je:
>
> $$
> f = \frac{1}{T} = \frac{1}{50}\ \mathrm{Hz} = 0{,}02\ \mathrm{Hz}
> $$

Pri rovnomernom pohybe po kružnici sa nemení veľkosť okamžitej rýchlosti hmotného bodu, mení sa však smer vektora okamžitej rýchlosti.

**Vektor okamžitej rýchlosti** v danom bode má smer dotyčnice ku kružnicovej trajektórii a je kolmý na sprievodič hmotného bodu, teda na úsečku, ktorá ho spája so stredom kružnice.

Veľkosť okamžitej rýchlosti, ktorú nazývame aj **obvodová rýchlosť**, je daná pomerom dráhy a času. Keďže dĺžka celej kružnice je $2\pi r$ a čas jedného obehu je perióda pohybu, dostávame:

$$
v = \frac{\Delta s}{\Delta t} = \frac{2\pi r}{T} = 2\pi rf
$$

Na opis pohybu hmotného bodu po kružnici zavádzame aj **uhlovú rýchlosť**, ktorú značíme $\omega$. Jej veľkosť určíme ako podiel veľkosti uhla, ktorý opíše hmotný bod, a času, za ktorý ho opíše.

$$
\omega = \frac{\Delta \varphi}{\Delta t}
$$

Vo fyzike je výhodnejšie vyjadrovať uhly nie v stupňoch, ale v oblúkovej miere v jednotke **radián**. Jednotkou uhlovej rýchlosti je **radián za sekundu**:

$$
\mathrm{rad \cdot s^{-1}}
$$

Keďže plný uhol $360^\circ$ zodpovedá $2\pi$ radiánom a čas jedného obehu je perióda, môžeme písať:

$$
\omega = \frac{2\pi}{T} = 2\pi f
$$

Pre rovnomerný pohyb po kružnici je veľkosť uhlovej rýchlosti konštantná:

$$
\omega = \text{konšt.}
$$

Porovnaním vzťahov pre obvodovú a uhlovú rýchlosť platí:

$$
v = \omega r
$$

Pri rovnomernom pohybe hmotného bodu po kružnici sa síce nemení veľkosť okamžitej rýchlosti, mení sa však smer vektora okamžitej rýchlosti. V dôsledku toho má hmotný bod **dostredivé zrýchlenie** $a_d$, ktoré smeruje do stredu kružnicovej trajektórie.

Pre veľkosť dostredivého zrýchlenia platí:

$$
a_d = \frac{v^2}{r} = \omega^2 r
$$

> [!note] Rozširujúce učivo: Odvodenie veľkosti dostredivého zrýchlenia
> Na obrázku je načrtnutý smer vektora $\Delta \vec v = \vec v_2 - \vec v_1$ pre dva body $A$ a $B$ kružnicovej trajektórie. Čím bližšie sú pri sebe body $A$ a $B$, teda pre časový okamih $\Delta t \to 0$, tým viac vidíme, že zrýchlenie v danom bode by smerovalo do stredu kružnicovej trajektórie.
>
> Z podobnosti trojuholníka $SAB$ a trojuholníka zostrojeného zo strán $v_1$, $v_2$ a $\Delta v$ pre veľmi blízke body $A$ a $B$ dostávame:
>
> $$
> \frac{\Delta v}{v} = \frac{\widehat{AB}}{r}
> $$
>
> Odtiaľ:
>
> $$
> \Delta v =
> \frac{\widehat{AB}}{r}v
> =
> \frac{v\Delta t}{r}v
> =
> \frac{v^2\Delta t}{r}
> $$
>
> Pre veľkosť dostredivého zrýchlenia potom máme:
>
> $$
> a_d = \frac{\Delta v}{\Delta t} = \frac{v^2}{r}
> $$

> [!example] Príklad 3.5: Kotúčová píla
> Kotúčová píla sa otáča s frekvenciou $4500\ \mathrm{ot \cdot min^{-1}}$. Akú obvodovú rýchlosť má bod na obvode kotúča, ak polomer kotúča je $10\ \mathrm{cm}$?
>
> **Riešenie:**
>
> $$
> f = 4500\ \mathrm{ot \cdot min^{-1}}
> =
> \frac{4500}{60}\ \mathrm{ot \cdot s^{-1}}
> =
> 75\ \mathrm{Hz}
> $$
>
> $$
> r = 10\ \mathrm{cm} = 0{,}10\ \mathrm{m}
> $$
>
> Pre veľkosť obvodovej rýchlosti pri rovnomernom pohybe po kružnici platí:
>
> $$
> v = \omega r
> $$
>
> Keďže pre uhlovú rýchlosť môžeme písať $\omega = 2\pi f$, dostávame:
>
> $$
> v = 2\pi fr \approx 47\ \mathrm{m \cdot s^{-1}}
> $$

> [!example] Príklad 3.6: Big Ben
> Hodinová veža Westminsterského paláca, nazývaná podľa jedného z jej zvonov Big Ben, má dĺžku minútovej ručičky $4{,}3\ \mathrm{m}$.
>
> a) Aká je veľkosť obvodovej rýchlosti koncového bodu minútovej ručičky?
>
> b) Aké veľké je dostredivé zrýchlenie koncového bodu minútovej ručičky?
>
> **Riešenie:**
>
> $$
> r = 4{,}3\ \mathrm{m}, \qquad v, a_d = ?
> $$
>
> Perióda obehu minútovej ručičky je:
>
> $$
> T = 60\ \mathrm{min} = 3600\ \mathrm{s}
> $$
>
> Pre uhlovú rýchlosť všetkých bodov minútovej ručičky platí $\omega = \frac{2\pi}{T}$ a pre obvodovú rýchlosť jej koncového bodu máme:
>
> $$
> v = \frac{2\pi r}{T} \approx 7{,}5 \cdot 10^{-3}\ \mathrm{m \cdot s^{-1}}
> $$
>
> Pre dostredivé zrýchlenie bodu na konci minútovej ručičky platí:
>
> $$
> a_d = \frac{v^2}{r} \approx 1{,}3 \cdot 10^{-5}\ \mathrm{m \cdot s^{-2}}
> $$
