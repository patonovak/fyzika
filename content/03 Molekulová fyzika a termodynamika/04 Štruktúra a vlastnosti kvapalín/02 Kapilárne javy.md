---
title: Kapilárne javy
---

Pozrime sa na to, ako sa bude správať povrch kvapaliny na rozhraní troch prostredí. Na molekuly kvapaliny na tomto rozhraní pôsobia silovo častice všetkých troch prostredí. V závislosti od výslednice pôsobiacich síl na tieto molekuly kvapalina:

- **zmáča steny nádoby** (napr. voda - sklo - vzduch) pre stykový uhol platí

$$
0^\circ \le \vartheta < 90^\circ,
$$

- **nezmáča steny nádoby** (napr. ortuť - sklo - vzduch), pre stykový uhol platí

$$
90^\circ < \vartheta \le 180^\circ.
$$

Uhol $\vartheta$ sa nazýva **stykový uhol** a je to uhol medzi povrchovou vrstvou a stenou nádoby.

<p class="measurement-figure no-extra-frame">
  <img src="/static/images/povrchova_vrstva_kvapaliny.png" alt="Povrchová vrstva kvapaliny pri stenách nádoby" width="400">
</p>

> **Obr. 2.4.2.** Povrchová vrstva.

Zakrivený povrch kvapaliny (napr. pri stenách nádoby) spôsobuje vznik prídavného tlaku v kvapaline. Nazývame ho **kapilárny tlak** a označujeme ho $p_\mathrm{k}$. Pod dutým (resp. vypuklým) povrchom je celkový tlak nižší (vyšší) ako pri vodorovnej hladine, a to práve o hodnotu kapilárneho tlaku. Ak má povrch kvapaliny tvar guľového vrchlíka s polomerom $r$, potom platí

$$
p_\mathrm{k} = \frac{2\sigma}{r}.
$$

<p class="measurement-figure no-extra-frame">
  <img src="/static/images/povrchove_sily.png" alt="Povrchové sily" width="400">
</p>

> **Obr. 2.4.3.** Povrchové sily.

Ak ide o bublinu s dvoma povrchmi, potom platí $p_\mathrm{k} = 4\sigma/r$. Po vložení tenkostennej rúrky (**kapilára**) do kvapaliny môžu nastať dva prípady. **Kapilárna elevácia** - jav, kedy voľná hladina kvapaliny v kapiláre stúpne. **Kapilárna depresia** - jav, kedy voľná hladina kvapaliny v kapiláre klesne.

Pre výšku (resp. hĺbku) stĺpca kvapaliny pri kapilárnej elevácii (resp. depresii) platí nasledovný vzťah

$$
h = \frac{2\sigma}{R\varrho g}.
$$

<p class="measurement-figure no-extra-frame">
  <img src="/static/images/kapilarna_elevacia_a_depresia.png" alt="Kapilárna elevácia a depresia" width="400">
</p>

> **Obr. 2.4.4.** Kapilárna elevácia (vľavo) a depresia (vpravo).

V tomto vzťahu je $R$ polomer kapiláry, $\varrho$ hustota kvapaliny a $\sigma$ je povrchové napätie.

## Objemová rozťažnosť kvapalín

Pri zmene teploty dochádza k zmene objemu kvapaliny, a to podľa vzťahu

$$
V = V_0 (1 + \beta \Delta T).
$$

V tomto vzťahu je $V_0$ počiatočný objem kvapaliny, $V$ jej objem pri teplote $T = \Delta T + T_0$ a $\beta$ **teplotný súčiniteľ objemovej rozťažnosti kvapaliny**. Jeho jednotkou je recipročný kelvin ($\mathrm{K^{-1}}$). Teplotnú objemovú rozťažnosť kvapalín využíva technická prax pri zostrojovaní **kvapalinových teplomerov**, dnes už zväčša liehových. So stúpajúcou teplotou kvapaliny sa zväčšuje aj jej objem a stúpa v trubičke teplomera nahor.

Keďže pri zmene teploty kvapaliny dochádza k zmene jej objemu, musí sa meniť v závislosti od teploty kvapaliny aj jej hustota. K tejto zmene dochádza v súlade s približným vzťahom

$$
\varrho \approx \varrho_0 (1 - \beta \Delta T).
$$

Znamienko mínus upozorňuje na to, že pri zvyšovaní teploty kvapaliny jej hustota klesá.

> [!example] Príklad 2.4.1: Ortuť a zmena teploty
> Ortuť pri teplote $15\ \mathrm{K}$ má objem $120\ \mathrm{cm^3}$. Aký je jej objem pri teplote $333\ \mathrm{K}$? Teplotný súčiniteľ objemovej rozťažnosti ortuti je $18 \cdot 10^{-5}\ \mathrm{K^{-1}}$.
>
> **Riešenie:**
>
> $$
> T_1 = 15\ \mathrm{K}, \quad V_0 = 120\ \mathrm{cm^3} = 120 \cdot 10^{-6}\ \mathrm{m^3}, \quad T_2 = 333\ \mathrm{K}, \quad \beta = 18 \cdot 10^{-5}\ \mathrm{K^{-1}}; \quad V = ?
> $$
>
> V dôsledku zmeny teploty sa zmení objem ortuti na hodnotu
>
> $$
> V = V_0 [1 + \beta(T_2 - T_1)] \approx 1{,}3 \cdot 10^{-4}\ \mathrm{m^3}.
> $$

## Anomália vody

U väčšiny kvapalín ich objem rastie s rastúcou teplotou. Voda má medzi všetkými kvapalinami zvláštne postavenie, pri jej zahrievaní v teplotnom intervale od $0\ ^\circ\mathrm{C}$ do $4\ ^\circ\mathrm{C}$ jej objem klesá a hustota rastie. Najväčšiu hustotu má voda pri teplote približne $4\ ^\circ\mathrm{C}$. Až po ďalšom zahrievaní sa objem vody s rastúcou teplotou zväčšuje a jej hustota klesá. Tomuto anomálnemu správaniu vody v porovnaní s ostatnými kvapalinami hovoríme **anomália vody**.

Anomália vody je veľmi dôležitý jav najmä v prírode. Spôsobuje, že v zime sa voda s teplotou $4\ ^\circ\mathrm{C}$ drží pri dne (pretože má najväčšiu hustotu), čo umožňuje prežiť zimu vodným živočíchom a rastlinám. Dôsledkom anomálie vody je teda aj fakt, že voda zamŕza od hladiny.

<p class="measurement-figure figure-wide no-extra-frame">
  <img src="/static/images/teplotna_zavislost_hustoty_vody.png" alt="Teplotná závislosť hustoty vody" width="500">
</p>

> **Obr. 2.4.5.** Teplotná závislosť hustoty vody.

> [!example] Príklad 2.4.2: Výsledný tlak v bubline
> Vypočítajte celkový tlak v bubline guľového tvaru s polomerom $0{,}30\ \mu\mathrm{m}$, ak sa nachádza v hĺbke $3\ \mathrm{m}$ pod voľnou hladinou vody. Povrchové napätie vody pri styku so vzduchom je $73\ \mathrm{mN \cdot m^{-1}}$ a atmosférický tlak je približne $1\ 000\ \mathrm{hPa}$. Hustota vody je $1\ 000\ \mathrm{kg \cdot m^{-3}}$.
>
> **Riešenie:**
>
> $$
> r = 0{,}30 \cdot 10^{-6}\ \mathrm{m}, \quad h = 3\ \mathrm{m}, \quad \sigma = 73 \cdot 10^{-3}\ \mathrm{N \cdot m^{-1}}, \quad p_\mathrm{a} = 10^5\ \mathrm{Pa}, \quad \varrho = 1\ 000\ \mathrm{kg \cdot m^{-3}}; \quad p = ?
> $$
>
> Tlak vo vnútri bubliny je rovný súčtu atmosférického tlaku, hydrostatického tlaku kvapalinového stĺpca v hĺbke $h$ a kapilárneho tlaku guľovej bubliny s polomerom $r$. Dostaneme tak
>
> $$
> p = p_\mathrm{a} + p_\mathrm{h} + p_\mathrm{k}.
> $$
>
> Po dosadení za hydrostatický tlak $p_\mathrm{h} = h\varrho g$ a kapilárny tlak $p_\mathrm{k} = 2\sigma/r$ dostaneme
>
> $$
> p = p_\mathrm{a} + h\varrho g + \frac{2\sigma}{r}.
> $$
>
> Po číselnom dosadení vyjde $p \approx 6{,}2 \cdot 10^5\ \mathrm{Pa}$.
