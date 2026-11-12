---
title: Elektrický prúd v polovodičoch
---

Polovodiče sú látky, ktorých elektrické vlastnosti závisia od vonkajších podmienok (napr. od teploty) viac než elektrické vlastnosti vodičov. Odpor polovodičov s rastúcou teplotou prudko klesá. Patrí medzi ne napr. kremík (Si), germánium (Ge), selén (Se), uhlík (C) alebo niektoré oxidy (TiO₂, MnO).

![[images/fyzika/elektricky-prud/odpor-polovodicov-teplota.png|Závislosť odporu polovodiča a kovu od teploty]]
Obr. 4.2.10: Odpor polovodičov s rastúcou teplotou prudko klesá, čím sa odlišujú od kovov (vodičov).

## VLASTNÁ VODIVOSŤ

Čistý polovodič zbavený prímesí (napr. kremík Si) nazývame vlastný polovodič. Kmity atómov v kremíku vyvolávajú porušenie väzieb, valenčné elektróny sa uvoľňujú a vznikajú voľné elektróny. Uvoľnením elektrónu vznikne v mriežke kremíka prázdne miesto, nazývame ho diera. Je to miesto s kladným nábojom. Vo vlastnom polovodiči sú nositeľmi voľného elektrického náboja len elektróny a diery generované súčasne, v pároch. Hustota elektrónov a dier je rovnaká. Takúto vodivosť polovodiča nazývame vlastná vodivosť. Prúd v polovodiči je súčet elektrónového a dierového prúdu.

![[images/fyzika/elektricky-prud/pary-elektron-diera.png|Generovanie párov elektrón diera v kremíkovej mriežke]]
Obr. 4.2.11: V dôsledku tepelných kmitov atómov mriežky sa uvoľnia valenčné elektróny, generujú sa páry elektrón-diera. Opačný proces, zánik párov elektrón-diera, sa nazýva rekombinácia.

## NEVLASTNÁ VODIVOSŤ

Polovodič, ktorý obsahuje iné atómy zabudované do kryštalickej mriežky, prímes, nazývame nevlastný (prímesový) vodič. Tieto atómy majú buď prebytok alebo nedostatok valenčných elektrónov. Vodivosť spôsobená prímesami v polovodiči sa nazýva nevlastná (prímesová) vodivosť.

- **Polovodič typu N** (N – negatív) je polovodič s elektrónovou vodivosťou. Donor je atóm, ktorý má prebytok valenčných elektrónov, pre kremík so štyrmi valenčnými elektrónmi je donorom napr. fosfor, arzén, antimón (P, As, Sb). Vodivosť polovodiča, v ktorej ako nositelia prúdu prevažujú elektróny, sa nazýva elektrónová vodivosť.

- **Polovodič typu P** (P – positiv) je polovodič s dierovou vodivosťou, diery sa správajú ako častice s kladným nábojom. Akceptor je atóm, ktorý má nedostatok valenčných elektrónov, pre kremík so štyrmi valenčnými elektrónmi je akceptor napr. bór, gálium, indium (B, Ga, In). Vodivosť polovodiča, v ktorej ako nositelia prúdu prevažujú diery, sa nazýva dierová vodivosť.

![[images/fyzika/elektricky-prud/polovodic-typu-n-p.png|Polovodič typu N a polovodič typu P]]
Obr. 4.2.12: Polovodič typu N (obr. vľavo). Arzén má 5 valenčných elektrónov, 4 sa podieľajú na väzbe, posledný prispieva k vodivosti elektrického prúdu. Polovodič typu P (obr. vpravo). Indium má 3 valenčné elektróny, ktoré sa podieľajú na väzbe, na mieste štvrtej väzby je diera.

## POLOVODIČOVÁ DIÓDA

Spojením polovodiča typu P (anóda) a polovodiča typu N (katóda) vzniká prechod P-N. Súčiastka, ktorej hlavnou súčasťou je takýto P-N prechod, sa nazýva polovodičová dióda. Značíme ju ako A|K. V oblasti prechodu P-N sa stretávajú voľné elektróny s dierami a dochádza k ich rekombinácii, v dôsledku čoho sa v mieste ich stretu nabije polovodič typu P záporne a polovodič typu N kladne. Vzniká hradlová vrstva s elektrickým poľom, ktorého intenzita bráni ďalšiemu prenikaniu elektrónov a dier do oblasti P-N prechodu.

![[images/fyzika/elektricky-prud/hradlova-vrstva-pn-prechod.png|Vznik hradlovej vrstvy v oblasti P-N prechodu]]
Obr. 4.2.13: K vysvetleniu vzniku hradlovej vrstvy, ktorá sa vytvorí v oblasti P-N prechodu.

- **Dióda zapojená v závernom smere.**
Ak pripojíme polovodič typu P k zápornej svorke zdroja a polovodič typu N ku kladnej svorke zdroja, sú kladné diery priťahované k zápornej svorke a elektróny ku kladnej svorke zdroja. Hradlová vrstva sa rozšíri a obvodom neprechádza elektrický prúd. V závernom smere nemôže napätie prekročiť hodnotu $U_{z0}$, ktorú nazývame prierazné napätie. Dióda by sa zničila.

- **Dióda zapojená v priepustnom smere.**
Ak pripojíme polovodič typu P ku kladnej svorke zdroja a polovodič typu N k zápornej svorke zdroja, sú odpudzované kladné diery kladnou svorkou a elektróny zápornou svorkou zdroja. Dochádza k zúženiu hradlovej vrstvy, po prekročení prahového napätia $U_{p0}$ zanikne a obvodom prechádza elektrický prúd.

![[images/fyzika/elektricky-prud/dioda-zaverny-priepustny-smer.png|Dióda zapojená v závernom a priepustnom smere]]
Obr. 4.2.14: Dióda zapojená v závernom smere (obr. vľavo) a v priepustnom smere (obr. vpravo).

Poznáme rôzne typy polovodičových diód, napr.:

- **LED** (light emitting diode) je dióda, pri ktorej nastáva emisia svetelného žiarenia, ak je zapojená v priepustnom smere.
- **Zenerova dióda** je dióda, ktorá sa po prekročení prierazného napätia nezničí. Používa sa k udržiavaniu konštantného napätia v stabilizátoroch.

![[images/fyzika/elektricky-prud/voltamperova-charakteristika-diody.png|Voltampérová charakteristika polovodičovej diódy]]
Obr. 4.2.15: Voltampérová charakteristika diódy. Na osiach sú napätia a prúdy v priepustnom (p) a závernom (z) smere.
