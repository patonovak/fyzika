---
title: Obvod striedavého prúdu s rezistorom
---

V obvode striedavého napätia je elektrický odpor rezistora $R$ rovnaký ako odpor v obvode jednosmerného prúdu. V tomto prípade ho nazývame **rezistancia**. Ak je zdrojom generátor harmonického striedavého napätia popísaného rovnicou $u = U_m \sin \omega t$, potom z Ohmovho zákona dostaneme

$$
i = \frac{u}{R} = \frac{U_m}{R}\sin\omega t = I_m \sin\omega t .
$$

Rezistancia v obvode striedavého prúdu nemá vplyv na fázový rozdiel napätia a prúdu. V jednoduchom obvode striedavého prúdu s odporom majú napätie a prúd rovnakú fázu, ich fázový rozdiel je nulový. Hovoríme, že **sú vo fáze**. Symbolicky $\varphi = 0$. Situácia je znázornená na obr. 5.3.1.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/magneticke-pole/striedavy-prud/obr-5-3-1-rezistor.png" alt="Jednoduchý obvod striedavého prúdu s odporom, fázorový a časový diagram">
  <figcaption>Obr. 5.3.1: Jednoduchý obvod striedavého prúdu s odporom. Fázorový a časový diagram.</figcaption>
</figure>

## VÝKON STRIEDAVÉHO PRÚDU V OBVODE S REZISTOROM

Ukázali sme, že pre výkon jednosmerného prúdu možno použiť vzťahy $P = UI = RI^2$. V obvode so striedavým prúdom sa neustále mení okamžitá hodnota napätia a prúdu, okamžitá hodnota výkonu je

$$
p = ui = Ri^2 = RI_m^2 \sin^2\omega t = P_m \sin^2\omega t.
$$

Okamžitá hodnota výkonu sa tak zjavne mení s dvojnásobnou frekvenciou ako prúd a má amplitúdu $P_m = RI_m^2$. Práca striedavého prúdu počas periódy $T$ je presne rovná obsahu obdĺžnika v obr. 5.3.1. **Stredná hodnota výkonu** je potom

$$
P = \frac{1}{2}P_m = \frac{1}{2}RI_m^2.
$$

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/magneticke-pole/striedavy-prud/obr-5-3-1-okamzity-vykon.png" alt="Priebeh funkcie okamžitého výkonu v obvode s rezistorom">
  <figcaption>Obr. 5.3.1: Priebeh funkcie okamžitého výkonu $p(t)$.</figcaption>
</figure>

Možno zadefinovať **efektívne hodnoty striedavého napätia** $U$ a prúdu $I$ zodpovedajúce hodnotám prúdu jednosmerného, ktorý má v obvode s odporom rovnaký výkon ako daný striedavý prúd.

$$
I = \frac{I_m}{\sqrt{2}} \qquad U = \frac{U_m}{\sqrt{2}}
$$

Pre výkon striedavého prúdu v obvode s odporom potom za pomoci efektívnych hodnôt môžeme písať

$$
P = UI = RI^2.
$$
