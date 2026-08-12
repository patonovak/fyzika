---
title: Skladanie kmitov
---

Teleso môže konať aj viacero kmitavých pohybov zároveň, pre skladanie kmitov platí obdobné pravidlo ako v mechanike a nazývame ho **princíp superpozície**.

Ak hmotný bod koná viacero harmonických kmitavých pohybov rovnakého smeru, pričom okamžité výchylky označíme $y_1, y_2, \ldots, y_k$, je potom okamžitá výchylka $y$ výsledného kmitania

$$
y = y_1 + y_2 + \ldots + y_k.
$$

Dva harmonické pohyby sa môžu líšiť v amplitúdach, vo fáze, frekvencii, ale aj v smere kmitania. Budeme preto ďalej uvažovať len kmity v jednej priamke, popr. navzájom kolmé kmity.

## Skladanie kmitov na jednej priamke

### 1. Rovnaké frekvencie zložiek

Kmity majú rovnakú uhlovú frekvenciu ($\omega_1 = \omega_2 = \omega$), teda aj rovnakú periódu. Takéto kmity nazývame **izochrónne kmity**. Ak pozorujeme pohyb hmotného bodu, ktorý koná dva kmitavé pohyby naraz, môžeme každý z nich popísať rovnicou pre okamžitú výchylku.

$$
y_1 = y_\mathrm{m1}\sin(\omega t + \varphi_{01})
$$

$$
y_2 = y_\mathrm{m2}\sin(\omega t + \varphi_{02})
$$

Zložením takýchto kmitov vzniká kmitanie s rovnakou frekvenciou, ale s rozdielnou amplitúdou. Časový diagram možno získať za pomoci fázorového diagramu, kde fázory kmitov znázorníme polohovými vektormi $\vec r_1$ a $\vec r_2$. Polohový vektor výsledného kmitania nájdeme ako vektorový súčet $\vec r = \vec r_1 + \vec r_2$.

<p class="measurement-figure figure-wide no-extra-frame">
  <img src="/static/images/skladanie_izochronnych_kmitov.png" alt="Izochrónne kmity, fázorový a časový diagram" width="500">
</p>

> **Obr. 3.1.3.** Izochrónne kmity, fázorový a časový diagram. Postup pri konštrukcii časového diagramu.

Súradnice výsledného polohového vektora zloženého kmitania sú (platí $r_1 = y_\mathrm{m1}, r_2 = y_\mathrm{m2}$)

$$
x = y_\mathrm{m1}\cos\varphi_{01} + y_\mathrm{m2}\cos\varphi_{02},
$$

$$
y = y_\mathrm{m1}\sin\varphi_{01} + y_\mathrm{m2}\sin\varphi_{02}.
$$

Z obrázka možno pomocou trigonometrie určiť aj začiatočnú fázu výsledného kmitania.

$$
\operatorname{tg}\varphi_0 = \frac{y_\mathrm{m1}\cos\varphi_{01} + y_\mathrm{m2}\cos\varphi_{02}}{y_\mathrm{m1}\sin\varphi_{01} + y_\mathrm{m2}\sin\varphi_{02}}
$$

Pre amplitúdu výsledného kmitania máme z Pytagorovej vety, po dosadení

$$
y_\mathrm{m} = \sqrt{y_\mathrm{m1}^2 + y_\mathrm{m2}^2 + 2y_\mathrm{m1}y_\mathrm{m2}\cos(\varphi_{02} - \varphi_{01})}.
$$

Amplitúda výsledných kmitov je zjavne závislá od fázového rozdielu $\Delta\varphi = \varphi_{02} - \varphi_{01}$:

- Ak je fázový rozdiel kmitov $\Delta\varphi = 2k\pi$, kde $k$ je celé číslo, potom sú kmitavé pohyby vo **fáze** a ich výsledná amplitúda je najväčšia a má hodnotu $y_\mathrm{m} = y_\mathrm{m1} + y_\mathrm{m2}$.
- Ak je fázový rozdiel kmitov $\Delta\varphi = (2k + 1)\pi$, kde $k$ je celé číslo, potom je výsledná amplitúda najmenšia a má hodnotu $y_\mathrm{m} = |y_\mathrm{m1} - y_\mathrm{m2}|$.

> [!note] Rozširujúce učivo: Blízke frekvencie zložiek
> Budeme skúmať skladanie kmitavých pohybov, ktoré majú veľmi blízku frekvenciu, to znamená, že $\omega_1 \rightarrow \omega_2$. Ďalej pre jednoduchosť predpokladajme, že skladané kmity majú rovnakú amplitúdu $y_\mathrm{m}$ a ich fázový rozdiel je nulový, teda $\Delta\varphi = 0$. Kmity, ktorých frekvencie (periódy) nie sú rovnaké, nazývame **neizochrónne kmity**. Blízke frekvencie vyjadríme ako
>
> $$
> \omega_1 = \omega - \Delta\omega,
> $$
>
> $$
> \omega_2 = \omega + \Delta\omega.
> $$
>
> Zložky dvoch kmitavých pohybov blízkej frekvencie sú potom popísané rovnicami
>
> $$
> y_1 = y_\mathrm{m}\sin\omega_1 t,
> $$
>
> $$
> y_2 = y_\mathrm{m}\sin\omega_2 t.
> $$
>
> S použitím princípu superpozície môžeme písať $y = y_1 + y_2$, pričom použijeme vzťah
>
> $$
> \sin x + \sin y = 2\sin\frac{x + y}{2}\cos\frac{x - y}{2}.
> $$
>
> Okamžitá výchylka zloženého kmitania je tak
>
> $$
> y = y_1 + y_2 = 2y_\mathrm{m}\cos\frac{(\omega_2 - \omega_1)t}{2}\sin\frac{(\omega_1 + \omega_2)t}{2} = 2y_\mathrm{m}\cos(\Delta\omega t)\sin\omega t.
> $$
>
> <p class="measurement-figure callout-figure no-extra-frame">
>   <img src="/static/images/razy_zazneje.png" alt="Skladanie kmitov blízkej frekvencie" width="500">
> </p>
>
> **Obr. 3.1.4.** Príklad skladania kmitov blízkej frekvencie.
>
> Príklad skladania kmitov blízkej frekvencie je na obrázku vyššie. Výsledkom skladania kmitov sú tzv. **rázy** (zázneje). Priebeh rázov sa blíži k harmonickému priebehu s pomaly sa meniacou amplitúdou $y_\mathrm{r} = |2y_\mathrm{m}\cos(\Delta\omega t)|$. Perióda rázov je
>
> $$
> T = \frac{2\pi}{\omega_2 - \omega_1} = \frac{\pi}{\Delta\omega}.
> $$
>
> Frekvencia rázov je prevrátená hodnota výrazu vyššie, teda $f = f_2 - f_1$.

### 3. Rôzne frekvencie zložiek

Skladaním kmitov s rôznymi frekvenciami vzniká kmitanie **neharmonické**. Môže byť však periodické a to len v tom prípade, že frekvencie kmitov sú v pomere celých čísel, teda keď platí $f_1/f_2 = k_1/k_2$. Na obrázku dole je príklad pre pomer frekvencií $1 : 2$ ($\omega_2 = 2\omega_1$).

<p class="measurement-figure figure-wide no-extra-frame">
  <img src="/static/images/skladanie_kmitov_roznych_frekvencii.png" alt="Skladanie kmitov s rôznymi frekvenciami" width="500">
</p>

> **Obr. 3.1.5.** Skladanie kmitov s rôznymi frekvenciami.

## Skladanie kmitov v navzájom kolmých priamkach

### 1. Rovnaké frekvencie zložiek

Kmity majú rovnakú uhlovú frekvenciu ($\omega_1 = \omega_2 = \omega$), teda aj rovnakú periódu. Okamžité výchylky kolmých kmitov možno popísať nasledovnými rovnicami

$$
x = x_\mathrm{m}\sin\omega t,
$$

$$
y = y_\mathrm{m}\sin(\omega t + \varphi).
$$

Výsledná trajektória závisí od fázového rozdielu kmitov, teda od veličiny $\Delta\varphi = \varphi$. Všeobecný vzťah pre výsledné kmitanie je

$$
\frac{x^2}{x_\mathrm{m}^2} + \frac{y^2}{y_\mathrm{m}^2} - \frac{2xy}{x_\mathrm{m}y_\mathrm{m}}\cos\varphi = \sin^2\varphi.
$$

- Ak je fázový rozdiel kmitov $\Delta\varphi = 2k\pi$, kde $k$ je celé číslo, dostávame rovnicu priamky

$$
y = \pm \frac{y_\mathrm{m}}{x_\mathrm{m}}x.
$$

- Ak je fázový rozdiel kmitov $\Delta\varphi = (2k + 1)\frac{\pi}{2}$, kde $k$ je celé číslo a amplitúdy kmitov sú rovnaké ($x_\mathrm{m} = y_\mathrm{m} = r$), dostávame rovnicu kružnice $x^2 + y^2 = r^2$.

### 2. Rôzne frekvencie zložiek

Hmotný bod sa v tomto prípade pohybuje po zložitej trajektórii, len ak sú frekvencie kmitov v pomere celých čísel, vzniká periodické kmitanie a obrazce, ktoré nazývame **Lissajousove krivky** (obrazce). Príklady týchto obrazcov pre pomery frekvencií sú na nasledujúcej strane.

<p class="measurement-figure figure-wide no-extra-frame">
  <img src="/static/images/lissajousove_krivky.png" alt="Lissajousove krivky" width="500">
</p>

> **Obr. 3.1.6.** Lissajousove krivky.
