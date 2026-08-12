---
title: Deformácia tuhého telesa
---

**Deformáciou** nazývame zmenu tvaru a objemu telesa účinkom vonkajších síl. Podľa toho, či sa teleso po deformácii vráti do pôvodného stavu, rozlišujeme **pružnú** (elastickú) a **tvárnu** (plastickú) **deformáciu**.

Medzi jednoduché typy deformácie môžeme zaradiť deformáciu:

- **ťahom** - na teleso pôsobia dve rovnako veľké sily so smermi von z telesa (napr. laná),
- **tlakom** - na teleso pôsobia dve rovnako veľké sily so smermi do vnútra telesa (napr. podložky),
- **ohybom** - nastane na nosníku podoprenom na oboch koncoch, ak naň pôsobí sila kolmo na jeho pozdĺžnu os súmernosti (napr. nosník),
- **šmykom** - na teleso pôsobia dve rovnako veľké sily so smermi von z telesa, vektorové priamky síl nie sú totožné (napr. nastohované dosky),
- **krútením** - na koncoch tyče pôsobia dve silové dvojice, ich momenty síl sú rovnako veľké, ale majú opačný smer (napr. skrutka).

<p class="measurement-figure figure-wide no-extra-frame">
  <img src="/static/images/typy_deformacie.png" alt="Typy deformácie tuhého telesa" width="500">
</p>

> **Obr. 2.3.2.** a) deformácia ťahom, b) deformácia tlakom, c) deformácia ohybom, d) deformácia šmykom, e) deformácia krútením (torzná deformácia).

Pri pružne deformovanom telese pôsobia na plochu telesa z oboch strán sily pružnosti $\vec F_\mathrm{p}$. Ak je tuhé teleso deformované ťahom silami veľkosti $F$ v rovnovážnom stave, potom sily pružnosti sa rovnajú pôsobiacim silám. V telese vzniká stav napätosti, ktorý charakterizuje tzv. **normálové napätie** $\sigma_\mathrm{n}$.

$$
\sigma_\mathrm{n} = \frac{F_\mathrm{p}}{S}
$$

<p class="measurement-figure no-extra-frame">
  <img src="/static/images/sily_pruznosti_v_tuhom_telese.png" alt="Sily pružnosti v tuhom telese" width="400">
</p>

> **Obr. 2.3.3.** Sily pružnosti v tuhom telese.

Jednotkou normálového napätia je pascal (Pa). V tomto vzťahu je $F_\mathrm{p}$ veľkosť sily pružnosti pôsobiacej kolmo na rez telesom s obsahom plochy $S$.

## Hookov zákon

Predstavme si tuhú tyč, ktorú deformujeme ťahom. Jej dĺžka sa zmení z $l_0$ na konečnú dĺžku $l$. Môžeme zadefinovať **absolútne predĺženie** tyče $\Delta l$ ako rozdiel jej konečnej a začiatočnej dĺžky.

$$
\Delta l = l - l_0
$$

Často je výhodné toto predĺženie prepočítať k pôvodnej dĺžke tyče. Určujeme **relatívne predĺženie** $\varepsilon$.

$$
\varepsilon = \frac{\Delta l}{l_0}.
$$

<p class="measurement-figure no-extra-frame">
  <img src="/static/images/predlzenie_tyce.png" alt="Predĺženie tyče" width="400">
</p>

> **Obr. 2.3.4.** Predĺženie tyče.

**Pri pružnej deformácii ťahom je normálové napätie priamo úmerné relatívnemu predĺženiu.**

$$
\sigma_\mathrm{n} = E\varepsilon
$$

Toto tvrdenie sformuloval v roku 1676 anglický fyzik **Robert Hooke** a voláme ho **Hookov zákon**. Konštantou úmernosti medzi normálovým napätím a relatívnym predĺžením je **modul pružnosti v ťahu** (**Youngov modul**) a označujeme ho $E$. Jednotkou Youngovho modulu je pascal (Pa). Modul pružnosti v ťahu je materiálová konštanta, čím je jeho hodnota vyššia, tým väčšie napätie je potrebné k dosiahnutiu rovnakej deformácie. Pre oceľ má napr. hodnotu $220\ \mathrm{GPa}$. Hookov zákon platí aj pre pružnú deformáciu tlakom.

> **Robert Hooke** (1653 - 1703) bol anglický fyzik. Dnes sa na neho pozeráme ako na zanieteného experimentátora, ktorý bol značne nedocenený. Bol známy útlo deformovanou postavou a uzavretou povahou. Zastával funkciu hlavného kurátora experimentu v Kráľovskej spoločnosti (The Royal Society). Jeho vzhľad je dodnes záhadou, o jeho podobizni sa dozvedáme len z opisov, I. Newton zo svojej právomoci nechal po jeho smrti zničiť všetky jeho portréty.

## Krivka deformácie

Závislosť normálového napätia od relatívneho predĺženia sa nazýva **krivka deformácie**. Pre pružné látky (napr. tyč z mäkkej ocele) možno popísať časti tejto krivky nasledovne.

- **ČASŤ OA.** Ide o pružnú deformáciu, až kým napätie nedosiahne medzu úmernosti $\sigma_\mathrm{u}$. Platí Hookov zákon. Normálové napätie je priamo úmerné relatívnemu predĺženiu.
- **ČASŤ AB.** Ide o pružnú deformáciu, no neplatí Hookov zákon. Nastáva dopružovanie tyče. Hraničnou hodnotou napätia je medza pružnosti $\sigma_\mathrm{E}$.
- **ČASŤ BE.** Ide o nepružnú (plastickú) deformáciu tyče. Úsek CD na obrázku nazývame aj tečenie materiálu. Napätie $\sigma_\mathrm{k}$ nazývame medza klzu (prieťažnosti).
- **ČASŤ DE.** Ide o spevnenie materiálu. Hraničným napätím je medza pevnosti $\sigma_\mathrm{p}$. Po jej prekonaní sa tyč nenávratne pretrhne.

<p class="measurement-figure no-extra-frame">
  <img src="/static/images/krivka_deformacie.png" alt="Krivka deformácie" width="400">
</p>

> **Obr. 2.3.5.** Krivka deformácie.

Krivka deformácie nemá rovnaký priebeh pre všetky druhy materiálov. Z jej priebehu možno rozhodnúť, ktorá látka je pružná, ktorá krehká a či je schopná veľkých plastických deformácií.
