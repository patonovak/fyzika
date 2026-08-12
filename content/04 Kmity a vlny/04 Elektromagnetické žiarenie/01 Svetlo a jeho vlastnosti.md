---
title: Svetlo a jeho vlastnosti
---

**Optika** je časť fyziky, ktorá sa zaoberá **optickým žiarením**, zákonitosťami jeho šírenia a fyzikálnymi dejmi pri vzájomnej interakcii optického žiarenia a látky. Optické žiarenie je elektromagnetické žiarenie s vlnovými dĺžkami v rozmedzí približne 1 mm až 1 nm. Optické žiarenie sa delí na infračervené žiarenie (IR), viditeľné žiarenie (svetlo) a ultrafialové žiarenie (UV).

Optiku možno podľa objektu jej skúmania rozdeliť na viacero častí:

- **Vlnová optika** vychádza pri skúmaní správania optického žiarenia z jeho vlnovej podstaty. Popisuje tak odraz a lom vlnenia z vlnového hľadiska, interferenciu, difrakciu (ohyb) a polarizáciu.
- **Geometrická (lúčová) optika** vychádza pri popise z modelu svetla ako zväzku lúčov, ktoré sa šíria priamočiaro a nijak sa neovplyvňujú. Hlavnú pozornosť venuje zobrazovaniu optickými sústavami.
- **Kvantová optika** skúma kvantové vlastnosti optického žiarenia, ktoré sa prejavujú najmä pri jeho interakcii s látkou.

**Svetlo** je elektromagnetické vlnenie s frekvenciami $3{,}95 \cdot 10^{14}\,\mathrm{Hz}$ až $7{,}89 \cdot 10^{14}\,\mathrm{Hz}$, čo vo vákuu zodpovedá vlnovým dĺžkam od 380 nm do 780 nm. Tieto hranice nie sú ostré, menia sa v závislosti od pozorovateľa a citlivosti jeho zraku. Rýchlosť svetla vo vákuu je konštantou a má hodnotu presne

$$
c = 299\,792\,458\,\mathrm{m\,s^{-1}}.
$$

Pre výpočty nám postačí hodnota $c \approx 3 \cdot 10^8\,\mathrm{m\,s^{-1}}$. Telesá, ktoré vyžarujú svetlo, sa nazývajú **svetelné zdroje**. Možno ich pritom rozdeliť na zdroje **bodové**, ktorých veľkosť je zanedbateľná, a zdroje **plošné**. Ďalej rozlišujeme zdroje **prírodné** (Slnko, oheň) a zdroje **umelé** (žiarovka, žiarivka).

**Optické prostredie** je prostredie, ktorým sa môže šíriť svetlo. **Homogénne optické prostredie** má vo všetkých svojich miestach rovnaké optické vlastnosti. V **izotropnom prostredí** sa svetlo šíri všetkými smermi rovnakou rýchlosťou. Toto prostredie môže mať podľa svojich vlastností rôzny vplyv na šírenie svetla v ňom.

Rozlišujeme preto niekoľko druhov prostredí:

- **Priehľadné prostredie.** Svetlo týmto prostredím prechádza bez výrazného zoslabenia, cez takéto prostredie predmety vidíme. Priehľadným prostredím je napr. klasické sklo.
- **Priesvitné prostredie.** Svetlo týmto prostredím prechádza, je však rozptýlené do mnohých smerov. Priesvitným prostredím je napr. matné sklo.
- **Nepriehľadné prostredie.** Svetlo neprepúšťa, buď ho pohlcuje alebo ho odráža. Medzi nepriehľadné optické prostredia patrí napr. drevená doska.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/opticke_prostredia.png" alt="Priehľadné a priesvitné optické prostredie">
  <figcaption>Obr. 3.4.8. Priehľadné optické prostredie (sklo) a priesvitné optické prostredie (matné sklo).</figcaption>
</figure>

## Odraz a lom svetla

Ak svetlo dopadá na rozhranie dvoch optických prostredí (napr. vzduch a voda), čiastočne sa odráža a čiastočne prechádza do druhého prostredia (láme sa). **Absolútny index lomu** $n$ je veličina, ktorá je daná podielom rýchlosti svetla vo vákuu a rýchlosti svetla v danom optickom prostredí.

$$
n = \frac{c}{v}
$$

**Zákon odrazu svetla**

Uhol odrazu svetla sa rovná uhlu dopadu. Odrazený lúč leží v rovine dopadu. Uhol dopadu a odrazu meriame od kolmice dopadu.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/zakon_odrazu_svetla.png" alt="Zákon odrazu svetla">
  <figcaption>Obr. 3.4.9. K zákonu odrazu svetla.</figcaption>
</figure>

**Zákon lomu svetla (Snellov zákon)**

Pomer sínusov uhla dopadu a uhla lomu je rovný obrátenému pomeru absolútnych indexov lomu dvoch optických prostredí.

$$
\frac{\sin \alpha}{\sin \beta} = \frac{n_2}{n_1}
$$

Ak svetlo prechádza z opticky redšieho prostredia (s menším absolútnym indexom lomu) do opticky hustejšieho prostredia, dochádza k lomu ku kolmici a platí $\beta < \alpha$. Ak svetlo prechádza z opticky hustejšieho do opticky redšieho prostredia, dochádza k lomu od kolmice a platí uhol $\beta > \alpha$.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/lom_svetla.png" alt="Lom svetla ku kolmici, od kolmice a medzný uhol">
  <figcaption>Obr. 3.4.10. Lom svetla ku kolmici, od kolmice a prípad medzného uhla.</figcaption>
</figure>

V prípade lomu od kolmice (pri prechode svetla z opticky hustejšieho do opticky redšieho prostredia) možno nájsť taký uhol dopadu $\alpha_m$, kedy uhol lomu je pravý $\beta = 90^\circ$. Nazývame ho **medzný uhol**. Pri uhloch dopadu väčších ako je medzný uhol $\alpha > \alpha_m$ sa svetlo už neláme, ale celé sa od daného prostredia odrazí. Tomuto javu hovoríme **úplný odraz** (totálna reflexia). Ak je redším prostredím vzduch s indexom lomu $n_2 \doteq 1$, pre medzný uhol platí vzťah

$$
\sin \alpha_m = \frac{1}{n_1}.
$$

## Disperzia svetla

Pri dopade bieleho svetla na optický hranol sa svetlo láme a vzniká sústava farebných pruhov, ktorú nazývame **svetelné spektrum**. Svetlo rôznych farieb (teda aj frekvencií) sa v danom prostredí šíri rôznou rýchlosťou, má rôzne indexy lomu. Monofrekvenčné zložky sa preto lámu pod rôznymi uhlami lomu, najviac sa láme lúč fialového svetla, najmenej lúč červeného svetla. **Disperzia svetla** je závislosť veľkosti rýchlosti svetla v danom prostredí (jeho indexu lomu) od frekvencie svetla. Pri tzv. normálnej disperzii sa index lomu s rastúcou frekvenciou zväčšuje.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/disperzia_svetla.png" alt="Disperzia svetla">
  <figcaption>Obr. 3.4.11. Disperzia svetla.</figcaption>
</figure>

Zložením farebných zložiek vzniká opäť biele svetlo. Svetlo s jednou frekvenciou je **monofrekvenčné svetlo** (monochromatické svetlo). Prechodom svetla rôznymi prostrediami sa jeho frekvencia nemení. Pre farebný vnem je podstatná frekvencia svetla, nie jeho vlnová dĺžka. Tá sa totiž prechodom do iného prostredia mení. Ak je vlnová dĺžka svetla vo vákuu $\lambda_0$, je vlnová dĺžka $\lambda$ v prostredí s indexom lomu $n$

$$
\lambda = \frac{\lambda_0}{n}.
$$

## Interferencia svetla

Podobne ako pri mechanickom vlnení, aj dve a viaceré elektromagnetické vlny (svetlo) môžu spolu interferovať, skladať sa. Podmienkou interferencie je však **koherencia** dvoch vlnení. Koherentné sú také dve vlnenia, ktoré majú rovnakú frekvenciu a v danom mieste časom nemenný fázový rozdiel.

- **Interferencia na dvojštrbine**

Pri osvetlení dvojštrbiny (dvoch štrbín, každá s šírkou $d$) monofrekvenčným svetlom s vlnovou dĺžkou $\lambda$ sa stávajú tieto štrbiny zdrojom dvoch koherentných vlnení, ktoré sa skladajú na tienidle. Za podmienky $d \sim \lambda$ vzniká **interferenčný obrazec** a na tienidle pozorujeme tmavé a svetlé pruhy. Ide o interferenčné minimá a maximá.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/interferencia_na_dvojstrbine.png" alt="Interferencia svetla na dvojštrbine">
  <figcaption>Obr. 3.4.12. Štrbiny Š<sub>1</sub> a Š<sub>2</sub> sa stávajú zdrojom monofrekvenčných vlnení, ktoré na tienidle vytvárajú interferenčný obrazec.</figcaption>
</figure>

Ak sa vlnenia stretávajú s rovnakou fázou, pozorujeme na tienidle svetlé miesto, ide o interferenčné maximum. Za predpokladu, že dráhový rozdiel vlnení je $\Delta l$, je podmienka pre vznik maxima

$$
\Delta l = k\lambda, \quad k = 0, \pm 1, \pm 2, ...
$$

Ak sa vlnenia stretávajú s opačnou fázou, pozorujeme na tienidle tmavé miesto, ide o interferenčné minimum. Za predpokladu, že dráhový rozdiel vlnení je $\Delta l$, je podmienka pre vznik minima

$$
\Delta l = (2k + 1)\frac{\lambda}{2}, \quad k = 0, \pm 1, \pm 2, ...
$$

- **Interferencia na tenkej vrstve**

Odraz svetla na rozhraní dvoch prostredí môže mať v závislosti od ich indexov lomu taký efekt, že spôsobí fázový rozdiel dopadajúceho vlnenia. Ak sa šíri dopadajúca vlna v opticky redšom prostredí a odrazí sa od opticky hustejšieho prostredia, dochádza k fázovému posunutiu o $\frac{1}{2}$ vlnovej dĺžky, teda o $\frac{\lambda}{2}$.

Pri odraze na opticky redšom prostredí ani pri lome vlnenia nedochádza k fázovému posunu. Možno tak pozorovať interferenciu aj na tenkej vrstve hrúbky $d$ (môže to byť napr. tenká vrstvička vody na povrchu bubliny). Lúč A dopadá na horné rozhranie, čiastočne sa odráža (lúč B) a čiastočne prechádza vrstvou s indexom lomu $n$ a odráža sa od dolného rozhrania (lúč C).

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/interferencia_na_tenkej_vrstve.png" alt="Interferencia na tenkej vrstve">
  <figcaption>Obr. 3.4.13. Interferencia na tenkej vrstve. Jej prejavom sú napr. dúhové farby na mydlových bublinách, dúhové farby vo vrstvičke oleja vyliateho na ceste alebo sfarbenie krídiel malého hmyzu.</figcaption>
</figure>

Lúč B sa odráža na opticky hustejšom prostredí a prináša tak so sebou dodatočný fázový posun rovný polovici vlnovej dĺžky. Následne môžu lúče B a C spolu interferovať. Ak sa lúče B a C stretnú s rovnakou fázou, vzniká interferenčné maximum. Podmienkou vzniku interferenčného maxima je

$$
\Delta l = 2nd + \frac{\lambda}{2} = 2k\frac{\lambda}{2} \quad \text{alebo} \quad 2nd = (2k - 1)\frac{\lambda}{2}.
$$

Ak sa lúče B a C stretnú s opačnou fázou, vzniká interferenčné minimum. Podmienkou vzniku takého interferenčného minima je

$$
\Delta l = 2nd + \frac{\lambda}{2} = (2k + 1)\frac{\lambda}{2} \quad \text{alebo} \quad 2nd = k\lambda.
$$

V týchto vzťahoch $k = 1, 2, 3, ...$ určuje **rád interferenčného maxima (minima)**. Jav interferencie svetla využívame pri meraní vlnovej dĺžky svetla Newtonovými sklami, kontrole rovinných a guľových plôch a mnohých ďalších situáciách.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/newtonove_skla.png" alt="Newtonove sklá">
  <figcaption>Obr. 3.4.14. Newtonove sklá sú tvorené sklenenou doskou s rovnobežnými doskami a šošovkou, medzi ktorými je vrstvička vzduchu. Interferenčný obrazec má podobu kruhov, ktoré nazývame Newtonove kruhy.</figcaption>
</figure>

## Difrakcia svetla

Priamočiare šírenie svetla je ovplyvňované prekážkami, na ktoré svetlo dopadá. **Difrakcia (ohyb)** je jav, pri ktorom sa svetlo (vlnenie) dostáva aj do oblasti geometrického tieňa, teda za prekážku. Tento jav je možné pozorovať napr. pri dopade vlnenia na štrbinu, ktorej šírka je porovnateľná s vlnovou dĺžkou vlnenia. Za štrbinou na tienidle možno pozorovať **difrakčné (ohybové) obrazce**.

V praxi má väčší význam pozorovať difrakciu na sústave veľkého počtu rovnako širokých štrbín, ktoré sú rovnobežné. Takáto sústava sa nazýva **difrakčná mriežka**. Predpokladajme, že vzdialenosť štrbín takejto mriežky je $b$ a nazvime túto hodnotu **mriežková konštanta**. Difrakčný obrazec vytvorený mriežkou pri dopade monofrekvenčného vlnenia s vlnovou dĺžkou $\lambda$ má v strede najintenzívnejší svetlý pruh a po oboch jeho stranách sú ostré svetlé pruhy. Pre vznik difrakčného maxima platí podmienka

$$
b \sin \alpha_k = k\lambda.
$$

V tomto vzťahu $k = 0, \pm 1, \pm 2, ...$ určuje **rád maxima** a $\alpha_k$ určuje smer, v ktorom maximum vznikne. Ak na mriežku dopadá biele svetlo, je nulté maximum biele, ale v ďalších interferenčných maximách možno pozorovať rozklad svetla.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/difrakcia_svetla_na_optickej_mriezke.png" alt="Difrakcia svetla na optickej mriežke">
  <figcaption>Obr. 3.4.15. Difrakcia svetla na optickej mriežke. V prípade bieleho svetla je nulté maximum biele a v ďalších maximách možno pozorovať rozklad svetla na farebné zložky.</figcaption>
</figure>

> [!example] Príklad 3.4.1: Interferencia na tenkej vrstve
> Index lomu tenkej interferenčnej doštičky je 1,5. Vypočítajte, ktorá farba svetla sa interferenciou naruší, ak doštičku osvetlíme bielym svetlom. Pre akú vlnovú dĺžku nastane naopak zosilnenie v odrazenom smere? Hrúbka doštičky je 0,125 μm.
>
> **RIEŠENIE:**
>
> $n = 1{,}5$, $d = 0{,}125\,\mu\mathrm{m} = 125 \cdot 10^{-9}\,\mathrm{m}$; $\lambda_1$, $\lambda_2 = ?$
>
> Pre interferenčné minimum v odrazenom svetle na tenkej vrstve platí podmienka $2nd = k\lambda_1$, odkiaľ pre vlnovú dĺžku dostaneme $\lambda_1 = 2nd/k$. Dosadíme postupne $k = 1$, máme tak
>
> $$
> \lambda_1 = 2nd = 3{,}75 \cdot 10^{-7}\,\mathrm{m} = 375\,\mathrm{nm}.
> $$
> (modrá).
>
> Pre interferenčné maximum v odrazenom svetle možno písať podmienku $2nd = (2k - 1)\frac{\lambda_2}{2}$, pričom opäť dosadzujeme postupne od $k = 1$. Dostaneme tak
>
> $$
> \lambda_2 = \frac{4nd}{2k - 1} = 4nd = 750\,\mathrm{nm}.
> $$
> (oranžová).

## Polarizácia svetla

Svetlo je elektromagnetické vlnenie, ktoré je postupné a priečne. Vektor intenzity elektrického poľa $\vec{E}$ kmitá kolmo na smer šírenia vlnenia. Ak je svetlo **nepolarizované**, mení tento vektor svoj smer. V prípade **lineárne polarizovaného svetla** kmitá vektor intenzity elektrického poľa v jednej rovine.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/polarizacia_svetla.png" alt="Správanie vektora intenzity elektrického poľa">
  <figcaption>Obr. 3.4.16. Správanie vektora intenzity elektrického poľa v prípade nepolarizovaného svetla a v prípade svetla lineárne polarizovaného (kmitá v jednej rovine).</figcaption>
</figure>

Nepolarizované svetlo možno polarizovať hneď niekoľkými spôsobmi, najznámejšie sú polarizácia odrazom, polarizácia polaroidom a polarizácia dvojlomom.

- **Polarizácia svetla odrazom**

Pri odraze nepolarizovaného svetla na rozhraní dvoch prostredí možno získať svetlo lineárne polarizované, ak dopadne pod určitým uhlom, ktorý nazývame **Brewsterov uhol** $\alpha_B$. Vektor intenzity elektrického poľa odrazeného vlnenia kmitá v rovine kolmej na rovinu dopadu. Pri lome je svetlo polarizované len čiastočne, a to rovnobežne s rovinou dopadu.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/polarizacia_svetla_odrazom.png" alt="Polarizácia svetla odrazom">
  <figcaption>Obr. 3.4.17. Pri odraze svetla pod Brewsterovým uhlom dopadu je odrazené svetlo lineárne polarizované.</figcaption>
</figure>

- **Polarizácia svetla polaroidom**

Na polarizáciu svetla sa používajú špeciálne polarizačné filtre, ktoré nazývame **polaroidy**. Sú to tenké fólie polymérnych látok s molekulami usporiadanými tak, aby boli navzájom čo najviac rovnobežné. Svetlo prechádzajúce takýmto **polarizátorom** je lineárne polarizované. Po priložení a natočení druhého polarizačného filtra (**analyzátor**) pozorujeme, že svetlo prakticky neprechádza.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/polarizacia_svetla_polarizacnym_filtrom.png" alt="Polarizácia svetla polarizačným filtrom">
  <figcaption>Obr. 3.4.18. Polarizácia svetla polarizačným filtrom.</figcaption>
</figure>

- **Polarizácia svetla dvojlomom**

Kryštály niektorých látok sú anizotropné (rýchlosť šírenia svetla je v rôznych smeroch rôzna). Ak na takýto kryštál dopadá svetlo, rozdelí sa na dva lúče: **lúč riadny** a **lúč mimoriadny**. Obidva lúče sú lineárne polarizované, vektory intenzity elektrického poľa však kmitajú v rovinách na seba kolmých. Minerál, ktorý má takúto vlastnosť, je napr. islandský vápenec. Kresbu pod týmto kryštálom vidíme zdvojenú. Známym polarizátorom je tzv. Nikolov hranol. Ide o kosý hranol islandského vápenca, ktorý je diagonálne prerezaný a následne zlepený kanadským balzamom. Index lomu riadneho lúča je v tomto hranole taký veľký, že na rozhraní hranola a balzamu dochádza k jeho úplnému odrazu a absorpcii. Hranolom tak prechádza len lúč mimoriadny, ktorý je lineárne polarizovaný.

<figure class="measurement-figure no-extra-frame">
  <img src="/static/images/polarizacia_dvojlomom.png" alt="Polarizácia dvojlomom islandským vápencom">
  <figcaption>Obr. 3.4.19. Polarizácia dvojlomom islandským vápencom.</figcaption>
</figure>
