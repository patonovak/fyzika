---
title: Transformátor
---

**Transformátor** je zariadenie, ktoré umožňuje zvyšovať alebo znižovať hodnotu striedavého napätia. Jednofázový transformátor sa skladá z primárnej a sekundárnej cievky na spoločnom jadre z magneticky mäkkej ocele.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/fyzika/magneticke-pole/striedavy-prud/obr-5-3-6-transformator.png" alt="Jednofázový transformátor, schéma zapojenia a schematická značka transformátora">
  <figcaption>Obr. 5.3.6: Jednofázový transformátor, schéma zapojenia a schematická značka transformátora.</figcaption>
</figure>

Nech má primárna cievka $N_1$ závitov a sekundárna cievka $N_2$ závitov, $U_1$ je efektívne napätie na primárnej cievke a $U_2$ efektívne napätie na sekundárnej cievke. Potom platí rovnica **ideálneho transformátora**.

$$
\frac{U_2}{U_1} = \frac{N_2}{N_1} = k
$$

Veličina $k$ vo vzťahu vyššie sa nazýva **transformačný pomer**. Rozoberme nasledovné dva prípady:

- Platí $k > 1$, teda $N_2 > N_1$ a $U_2 > U_1$. Ide o **transformáciu nahor**.
- Platí $k < 1$, teda $N_2 < N_1$ a $U_2 < U_1$. Ide o **transformáciu nadol**.

Prúdy sa transformujú v opačnom pomere ako napätia, teda pri vyššom sekundárnom napätí možno odoberať z transformátora menší prúd. Pre ideálny transformátor platí

$$
\frac{I_1}{I_2} = \frac{U_2}{U_1} = \frac{N_2}{N_1} = k .
$$

**Účinnosť reálneho transformátora** je daná pomerom výkonu odoberaného zo sekundárnej cievky $P_2$ a príkonu transformátora $P_1$. Platí vzťah

$$
\eta = \frac{P_2}{P_1}.
$$

> [!example] Príklad 5.3.6: Transformátor
> Pre potreby napájania spotrebiča je nutné sieťové napätie 230 V znížiť na 4 V. Vypočítajte počet závitov sekundárnej cievky transformátora, ak primárna cievka má 1 150 závitov.
>
> **RIEŠENIE:**
> $U_1 = 230\ \mathrm{V},\ U_2 = 4\ \mathrm{V},\ N_1 = 1\ 150;\ N_2 = ?$
>
> Z rovnice transformátora $U_2/U_1 = N_2/N_1$ dostaneme priamo
>
> $$
> N_2 = \frac{U_2}{U_1}N_1 = 20.
> $$
>
> Sekundárna cievka má 20 závitov.
