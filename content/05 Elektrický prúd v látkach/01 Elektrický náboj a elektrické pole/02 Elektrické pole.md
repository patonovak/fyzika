---
title: Elektrické pole
---

Elektrické pole je silové pole, v ktorom na telesá alebo častice s elektrickým nábojom pôsobí elektrická sila. Existuje okolo každej častice s elektrickým nábojom alebo elektricky nabitého telesa.

## INTENZITA ELEKTRICKÉHO POĽA

Kvantitatívne možno elektrické pole popísať veličinou intenzita elektrického poľa, označujeme ju $E$. Ide o vektorovú fyzikálnu veličinu, ktorá je definovaná vzťahom

$$
\vec{E} = \frac{\vec{F_e}}{Q_0}.
$$

V tomto vzťahu je $\vec{F_e}$ sila, ktorá pôsobí na kladný bodový (testovací) náboj $Q_0$. Intenzita elektrického poľa má smer elektrickej sily pôsobiacej v tomto poli na kladný bodový náboj. Jednotkou intenzity elektrického poľa je newton na coulomb ($\mathrm{N \cdot C^{-1}}$) alebo volt na meter ($\mathrm{V \cdot m^{-1}}$).

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/radialne_a_homogenne_elektricke_pole.png" alt="Radiálne a homogénne elektrické pole">
  <figcaption>Obr. 4.1.5: Prvé dva obrázky predstavujú radiálne elektrické pole kladného a záporného bodového náboja. Tretí obrázok znázorňuje homogénne radiálne pole medzi dvoma rovnobežnými nesúhlasne nabitými platňami.</figcaption>
</figure>

V okolí bodových elektrických nábojov pozorujeme radiálne elektrické pole. Intenzita elektrického poľa má v ňom smer lúčov vystupujúcich (pri kladnom náboji) a vstupujúcich (pri zápornom náboji). Medzi dvoma rovnobežnými nesúhlasne nabitými platňami vzniká homogénne (rovnorodé) elektrické pole. Intenzita elektrického poľa má vo všetkých miestach poľa rovnaký smer aj veľkosť. Takýmto znázornením elektrického poľa dostávame matematický model nazývaný vektorové pole.

Veľkosť intenzity elektrického poľa vo vzdialenosti $r$ od bodového náboja s veľkosťou $Q$ určíme ako

$$
E = \frac{F_e}{Q_0} = \frac{1}{Q_0} \cdot k \frac{Q Q_0}{r^2} = k \frac{Q}{r^2}.
$$

Veľkosť intenzity elektrického poľa klesá s druhou mocninou vzdialenosti od bodového zdroja poľa. Tento vzťah možno použiť aj pre výpočet veľkosti intenzity elektrického poľa od guľového vodiča, na ktorého povrchu je rovnomerne rozložený náboj $Q$.

Elektrická siločiara je myslená orientovaná čiara, ktorej dotyčnica v každom bode určuje smer intenzity elektrického poľa $\vec{E}$. Pomocou siločiar možno elektrické pole znázorniť siločiarovým modelom. Elektrické siločiary ako orientované čiary možno vidieť na obr. 4.1.5.

Siločiary elektrického poľa vychádzajú z kladného náboja a vchádzajú do záporného náboja. Nikdy sa nepretínajú a v prípade vodičov sú kolmé na ich povrch. Priebeh siločiar pre dva súhlasné a pre dva nesúhlasné elektrické bodové náboje je na obr. 4.1.6.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/silociary_dvoch_nabojov.png" alt="Siločiary elektrického poľa dvoch nábojov">
  <figcaption>Obr. 4.1.6: Priebeh elektrických siločiar pre dva súhlasné (vľavo) a nesúhlasné elektrické náboje (vpravo).</figcaption>
</figure>

## ELEKTRICKÝ POTENCIÁL

Okrem intenzity elektrického poľa, čo je vektorová veličina, možno elektrické pole popísať aj inou skalárnou veličinou, ktorú nazývame elektrický potenciál. Bodový testovací náboj $Q_0$ má v poli náboja $Q$ potenciálnu energiu $E_p$. Elektrický potenciál v bode P je potom

$$
\varphi_e(P) = \frac{E_p(P)}{Q_0}.
$$

Táto veličina je potom nezávislá na veľkosti testovacieho náboja $Q_0$. Jednotkou elektrického potenciálu je volt (V). Potenciálna energia náboja $Q_0$ v bode P poľa od náboja $Q$ je rovná práci, ktorú vykoná elektrická sila pri premiestnení náboja z bodu P na zem.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/elektricky_potencial.png" alt="Elektrický potenciál a potenciálna energia">
  <figcaption>Obr. 4.1.7: K výkladu elektrického potenciálu a potenciálnej energie.</figcaption>
</figure>

Elektrický potenciál tak môže nadobúdať kladné aj záporné hodnoty. Potenciál zeme a uzemnených telies volíme nulový. V určitom mieste elektrického poľa je potenciál jeden volt (1 V), ak sily elektrického poľa vykonajú pri premiestnení jednotkového náboja z tohto miesta na zem prácu jeden joule.

Ekvipotenciálne plochy (alebo aj hladiny potenciálu) sú množiny bodov elektrického poľa s rovnakým elektrickým potenciálom. V prípade radiálneho poľa sú ekvipotenciálnymi plochami sústredné guľové plochy. Ekvipotenciálne plochy v homogénnom elektrickom poli medzi dvoma nesúhlasne nabitými doskami sú rovnobežné s doskami. Siločiary sú v každom bode kolmé na ekvipotenciálne plochy.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/ekvipotencialne_plochy.png" alt="Ekvipotenciálne plochy radiálneho a homogénneho elektrického poľa">
  <figcaption>Obr. 4.1.8: Ekvipotenciálne plochy radiálneho elektrického poľa (vľavo) a homogénneho elektrického poľa (vpravo). V prípade homogénneho poľa, ak je jedna z dosiek uzemnená, je hladina najvyššieho potenciálu na kladnej doske. Na uzemnenej doske je nulová.</figcaption>
</figure>

## ELEKTRICKÉ NAPÄTIE

Ak je v bode A elektrického poľa elektrický potenciál $\varphi_e(A)$ a v nejakom inom bode B elektrický potenciál $\varphi_e(B)$, rozdiel potenciálov medzi týmito dvoma bodmi je elektrické napätie $U$ medzi bodmi A a B. Jeho jednotkou je volt (V).

$$
U_{AB} = \varphi_e(A) - \varphi_e(B)
$$

Elektrické napätie medzi dvoma bodmi A a B elektrického poľa je definované aj ako

$$
U_{AB} = \frac{W_{AB}}{Q_0}.
$$

V tomto vzťahu je $W_{AB}$ práca, ktorú vykonajú sily elektrického poľa pri presune kladného bodového náboja $Q_0$ z bodu A do bodu B. Z vyššie uvedeného vzťahu vyplýva pre túto prácu vzťah

$$
W_{AB} = U_{AB} Q_0.
$$

Veľkosť tejto práce závisí v elektrostatickom poli len na polohe bodov A a B. Nezávisí na trajektórii náboja, po ktorej bol do koncového bodu prenesený (porovnajte s gravitačným poľom).

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/elektricke_napatie.png" alt="Elektrické napätie medzi dvoma bodmi elektrického poľa">
  <figcaption>Obr. 4.1.9: Elektrické napätie medzi dvoma bodmi elektrického poľa je definované ako rozdiel potenciálov v týchto bodoch.</figcaption>
</figure>

V prípade homogénneho poľa medzi dvoma nesúhlasne nabitými platňami pôsobí na kladný bodový náboj $Q_0$ elektrická sila $F_e = Q_0 E$, ktorá ho prenesie z kladnej dosky na uzemnenú. Ak je vzdialenosť medzi doskami $d$, je napätie medzi doskami

$$
U = \frac{W}{Q_0} = \frac{F_e d}{Q_0} = \frac{Q_0 E d}{Q_0} = E d.
$$

Meraním elektrického napätia medzi doskami tak možno zistiť intenzitu homogénneho poľa medzi nimi. Z vyjadrenia $E = U/d$ vyplýva aj jednotka intenzity elektrického poľa volt na meter ($\mathrm{V \cdot m^{-1}}$).

> [!example] Príklad 4.1.1: Nová vzdialenosť nábojov
> Ako musíme zmeniť vzdialenosť dvoch kladných bodových nábojov vo vákuu, ak sa veľkosť prvého náboja zväčší trikrát a chceme, aby sa nezmenili veľkosti elektrických síl, ktorými na seba pôsobia?
>
> **RIEŠENIE:**
>
> $Q_1 \rightarrow 3Q_1;\ r' =\ ?$
>
> Pre veľkosti síl vo vzdialenosti $r$ a v novej vzdialenosti $r'$ platia nasledovné vzťahy
>
> $$
> F_e = k \frac{Q_1 Q_2}{r^2}
> \qquad
> F'_e = k \frac{3Q_1 Q_2}{r'^2}
> $$
>
> Keďže podľa zadania má platiť $F_e = F'_e$, dostávame po dosadení a úpravách
>
> $$
> r' = \sqrt{3}\,r.
> $$
