---
title: Veličiny popisujúce ideálny plyn
---

## Stredná kvadratická rýchlosť

Ideálny plyn sa skladá z veľkého počtu molekúl (rádovo $10^{23}$), nemá zmysel uvažovať každú molekulu zvlášť a hľadať veľkosť jej okamžitej rýchlosti. Na takýto popis plynov používame **štatistické veličiny**. Budeme ďalej predpokladať, že ideálny plyn sa skladá z $N$ molekúl, každá nech má hmotnosť $m_0$. Pohyb molekúl ideálneho plynu môžeme popísať ako pohyb, kedy sa všetky molekuly pohybujú rýchlosťou $v_\mathrm{k}$, ktorá zachováva ich kinetickú energiu $E_\mathrm{k}$ nezmenenú. Takúto rýchlosť nazývame **stredná kvadratická rýchlosť**.

$$
v_\mathrm{k} = \sqrt{\frac{3kT}{m_0}}
$$

V tomto vzťahu je $k \approx 1{,}38 \cdot 10^{-23}\ \mathrm{J \cdot K^{-1}}$ tzv. **Boltzmannova konštanta**. Ak vyjadríme hmotnosť molekuly ideálneho plynu ako $m_0 = M_\mathrm{m}/N_\mathrm{A}$, možno vyjadriť strednú kvadratickú rýchlosť aj nasledovne

$$
v_\mathrm{k} = \sqrt{\frac{3kN_\mathrm{A}T}{M_\mathrm{m}}} = \sqrt{\frac{3RT}{M_\mathrm{m}}}.
$$

V tomto vzťahu je $R = k \cdot N_\mathrm{A} \approx 8{,}314\ \mathrm{J \cdot K^{-1} \cdot mol^{-1}}$ tzv. **molárna plynová konštanta**.

> Pozn.: Pre označenie Boltzmannovej a plynovej konštanty sa často používajú označenia $k_\mathrm{B}$ a $R_\mathrm{m}$.

> [!note] Rozširujúce učivo: Rozdelenie molekúl plynu podľa rýchlostí (Maxwellovo-Boltzmannovo rozdelenie)
> V ideálnom plyne, ktorý je v rovnovážnom stave, sa molekuly tohto plynu pohybujú rôznymi okamžitými rýchlosťami. Smery vektorov okamžitej rýchlosti molekúl sú zastúpené rovnomerne, ale ich veľkosti nie sú rovnaké. Veľkosti okamžitých rýchlostí molekúl môžu nadobúdať hodnoty od hodnôt blízkych nule k hodnotám veľkých rýchlostí.
>
> Možno predpokladať, že rýchlosti veľmi malé a veľmi veľké sú veľmi nepravdepodobné. Väčšina molekúl sa pohybuje tzv. **najpravdepodobnejšou rýchlosťou** $v_\mathrm{p}$.
>
> $$
> v_\mathrm{p} = \sqrt{\frac{2kT}{m_0}} = \sqrt{\frac{2RT}{M_\mathrm{m}}}
> $$
>
> Priemerom všetkých rýchlostí dostaneme tzv. **strednú (priemernú) rýchlosť** $\bar v$.
>
> $$
> \bar v = \sqrt{\frac{8kT}{\pi m_0}} = \sqrt{\frac{8RT}{\pi M_\mathrm{m}}}
> $$
>
> <p class="measurement-figure callout-figure no-extra-frame">
>   <img src="/static/images/maxwellovo_boltzmannovo_rozdelenie.png" alt="Maxwellovo-Boltzmannovo rozdelenie rýchlostí molekúl plynu" width="400">
> </p>
>
> **Obr. 2.2.1.** Maxwellovo-Boltzmannovo rozdelenie rýchlostí molekúl plynu.
>
> Graficky možno znázorniť Maxwellovo-Boltzmannovo rozdelenie grafom vyššie, kde na vodorovnej osi sú veľkosti okamžitých rýchlostí molekúl plynu a na zvislej osi je tzv. rozdeľovacia funkcia. Z tohto rozdelenia vidíme, že platí
>
> $$
> v_\mathrm{p} < \bar v < v_\mathrm{k}.
> $$

## Stredná kinetická energia

V dôsledku neusporiadaného tepelného posuvného pohybu molekúl ideálneho plynu má jedna molekula kinetickú energiu

$$
E_0 = \frac{1}{2}m v_\mathrm{k}^2 = \frac{3}{2}kT.
$$

Túto energiu priradenú jednej častici nazývame **stredná kinetická energia** a vidíme, že je nezávislá od hmotnosti danej molekuly. Vnútorná energia $N$ jednoatómových molekúl plynu je potom

$$
U = \frac{3}{2}NkT = \frac{3}{2}nRT.
$$

Posledný vzťah sme dostali po dosadení za počet jednoatómových molekúl $N = nN_\mathrm{A}$.

## Tlak plynu

V dôsledku neusporiadaného tepelného pohybu častíc plynu uzavretého v nádobe dochádza k jeho zrážkam s ostatnými molekulami a stenami nádoby. Nárazy molekúl plynu na steny nádoby vyvolávajú **tlak plynu**, ktorý sa s časom mierne mení, hovoríme o tzv. **fluktuácii tlaku**. Ak plyn obsahuje veľké množstvo molekúl, sú tieto odchýlky od strednej hodnoty malé a možno uvažovať strednú hodnotu tlaku plynu, ktorá je daná tzv. **základnou rovnicou pre tlak plynu**.

$$
p = \frac{1}{3}\frac{N}{V}m_0v_\mathrm{k}^2 = \frac{1}{3}N_Vm_0v_\mathrm{k}^2
$$

V tomto vzťahu je $N_V = N/V$ tzv. (objemová) **hustota molekúl** a jej jednotkou je $[N_V] = \mathrm{m^{-3}}$. Keďže platí $Nm_0 = m$ a hustota plynu je rovná $m/V$, možno pre tlak plynu pomocou jeho hustoty písať vzťah

$$
p = \frac{1}{3}\varrho v_\mathrm{k}^2.
$$

Ďalšími úpravami možno pre tlak plynu písať aj rovnicu

$$
p = \frac{2}{3}N_VE_\mathrm{k}.
$$

Tlak ideálneho plynu je priamo úmerný objemovej hustote molekúl $N_V$ a strednej kinetickej energii posuvného pohybu jeho molekúl. Ak sa v danom objeme plynu nemení počet molekúl, potom tlak ideálneho plynu závisí len od kinetickej energie jeho molekúl.
