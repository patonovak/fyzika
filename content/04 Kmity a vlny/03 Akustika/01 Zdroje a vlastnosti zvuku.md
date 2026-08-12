---
title: Zdroje a vlastnosti zvuku
---

**Zdrojom zvuku** sú telesá, v ktorých vzniká stojaté vlnenie (chvenie). Toto chvenie sa prenáša na okolité látkové prostredie a v ňom sa šíri ako mechanické vlnenie. Následne sa dostane k uchu a to ho vyhodnotí ako sluchový vnem, počujeme zvuk.

Podľa časového priebehu rozlišujeme **tóny** (hudobné zvuky), ktoré majú buď harmonický priebeh (jednoduchý tón) alebo periodický zložitejší priebeh (zložený tón) a **hluky** (nehudobné zvuky), ktoré majú neperiodický priebeh.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/casove_priebehy_tonov_a_hluku.png" alt="Časové priebehy jednoduchého tónu, zloženého tónu a hluku">
  <figcaption>Obr. 3.3.1. Časové priebehy zľava: jednoduchý tón, zložený tón a hluk. Pre jednoduchosť neoznačujeme osi.</figcaption>
</figure>

## Vlastnosti zvuku

Medzi tri základné vlastnosti zvuku patria:

- **Výška tónu** je určená jeho frekvenciou. Pokiaľ ide o jednoduchý tón s harmonickým priebehom, určuje frekvencia tohto tónu jeho **absolútnu výšku**. Pre subjektívne hodnotenie tónu používame **relatívnu výšku tónu**, čo je pomer frekvencie daného tónu k tzv. **referenčnému tónu**. V hudobnej akustike ako referenčný tón používame často 440 Hz ($a^1$). Využíva sa často, najmä v technickej praxi, aj referenčný tón 1 000 Hz.

- **Farba tónu** je určená počtom vyšších harmonických tónov v zloženom tóne a ich amplitúdami. Tón má potom pre naše ucho celkom charakteristický zvuk, možno tak rozoznávať zvuky rôznych nástrojov, ktoré vydávajú tóny s rovnakou absolútnou výškou.

- **Hlasitosť tónu** je subjektívna veličina, ktorá súvisí s citlivosťou nášho sluchu. Vyjadruje, ako silno pôsobí zvuk na náš sluch. Ľudské ucho je citlivé len na určitú oblasť frekvencií, veľmi vysoké a veľmi nízke frekvencie sú vnímané menej.

Aby bolo možné hodnotiť zvuk aj objektívne, vychádzame zo skutočnosti, že šírenie zvukového vlnenia je sprevádzané prenosom energie. S hlasitosťou zvuku tak súvisí veličina **intenzita zvuku** $I$, ktorá určuje veľkosť zvukovej energie $\Delta E$, dopadajúcej kolmo na jednotkovú plochu za jednotkový čas.

$$
I = \frac{\Delta E}{\Delta S \Delta t}
$$

Jednotkou intenzity zvuku je **watt na štvorcový meter** ($\mathrm{W\,m^{-2}}$). V súvislosti s počutím zavádzame dve hranice intenzity zvuku pre frekvenciu 1 kHz a to:

- **Prah počuteľnosti** $I_0 = 10^{-12}\,\mathrm{W\,m^{-2}}$ je najmenšou intenzitou, ktorú vnímame.

- **Prah bolesti** $I_0 = 1\,\mathrm{W\,m^{-2}}$ je hraničnou intenzitou, po jej prekročení vníma ucho bolesť.

Pomer najmenšej a najväčšej intenzity zvuku je tak $10^{12}$, čo je dosť veľké číslo. Zavádzame preto okrem intenzity zvuku aj veličinu **hladina intenzity zvuku**, ktorá ju vyjadruje v jednotkách **decibel** (dB). Ak má zvuk intenzitu $I$, má v logaritmickej stupnici hladinu intenzity $L$, kde $I_0$ je prah počutia.

$$
L = 10 \log \frac{I}{I_0}
$$

Prahu počutia tak zodpovedá hladina 0 dB a prahu bolesti hladina 120 dB.

> [!example] Príklad 3.3.1: Hladina intenzity nástroja
> Intenzita zvuku hudobného nástroja bola zosilnená z $10^{-10}\,\mathrm{W\,m^{-2}}$ na $10^{-5}\,\mathrm{W\,m^{-2}}$. Určte, koľko decibelov zodpovedá tomuto zosilneniu.
>
> **RIEŠENIE:**
>
> $I_1 = 10^{-10}\,\mathrm{W\,m^{-2}}$, $I_2 = 10^{-5}\,\mathrm{W\,m^{-2}}$; $\Delta L = L_2 - L_1 = ?$
>
> Pre hladiny intenzít zvuku platia nasledovné vzťahy
>
> $$
> L_1 = 10 \log \frac{I_1}{I_0}, \quad L_2 = 10 \log \frac{I_2}{I_0}.
> $$
>
> Zaujíma nás rozdiel týchto hladín $\Delta L = L_2 - L_1$. Po dosadení dostávame nasledovné
>
> $$
> L_2 - L_1 = 10 \log \frac{I_2}{I_0} - 10 \log \frac{I_1}{I_0} = 10 \log \frac{\frac{I_2}{I_0}}{\frac{I_1}{I_0}} = 10 \log \frac{I_2}{I_1}
> $$
>
> Tomuto zosilneniu tak zodpovedá rozdiel hladín intenzít zvuku
>
> $$
> L_2 - L_1 = 10 \log 10^5\,\mathrm{dB} = 50\,\mathrm{dB}.
> $$
