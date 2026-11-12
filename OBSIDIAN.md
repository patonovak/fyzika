# Obsidian a GitHub na Macu

**Stav prípravy:** migrácia obrázkov dokončená. V `content/images` je všetkých 241 odkazovaných obrázkov, vrátane 218 doplnených súborov. V 86 poznámkach je opravených 242 vložení obrázkov. Zostáva doplniť 0 obrázkov.

## Jednorazové nastavenie

1. V Obsidiane zvoľ **Open folder as vault** a otvor priečinok `content` v tomto projekte. Obsidian bude upravovať priamo súbory webu.
2. V **Settings → Files & Links** nastav priečinok pre nové prílohy na `images`, formát odkazov na **Absolute path in vault** a zapni **Automatically update internal links**. Lokálne nastavenie je v `content/.obsidian/app.json`; Git ho ignoruje.
3. Nainštaluj [GitHub Desktop](https://desktop.github.com/) a prihlás sa do účtu s prístupom k `patonovak/fyzika`.
4. Zvoľ **File → Add Local Repository** a vyber celý priečinok `projects/fyzika`, nie iba `content`. Repozitár už existuje; nevytváraj nový.
5. Remote používa SSH: `git@github.com:patonovak/fyzika.git`. Ak nemáš SSH kľúč, v **Repository → Repository settings → Remote** nastav `https://github.com/patonovak/fyzika.git` a použi prihlásenie cez GitHub Desktop.

## Bežná práca

1. Pred úpravami klikni na **Fetch origin**, prípadne **Pull origin**. Prípadné konflikty najprv vyrieš.
2. Uprav text v Obsidiane. Nové obrázky pretiahni alebo vlož do poznámky; ukladajú sa do `content/images`.
3. V GitHub Desktop skontroluj zmeny. Zahrň aj nové obrázky, premenovania či vymazania.
4. Napíš popis a klikni **Commit to main**, potom **Push origin**. Samotný commit zostáva iba na počítači.
5. Sleduj [GitHub Actions](https://github.com/patonovak/fyzika/actions). Workflow je nastavený na zostavenie a nasadenie pri pushi do `main`. Po úspešnom dokončení over [web](https://patonovak.github.io/fyzika/).

Pri prvom commite zahrň aj prípravu Obsidianu. `public` je vygenerovaný web; zdrojom obsahu je `content`.

## Obrázky

Príklad vloženia: `![[images/pohyb_pokoj.png|Pohyb a pokoj|400]]`. Quartz v tomto projekte podporuje Obsidian obrázky s popisom a šírkou. Textové popisy pod obrázkami zostávajú v poznámkach.

Chýbajúce súbory eviduje `MISSING-IMAGES.md`, mimo publikovaného obsahu. Doplň ich do `content/images` podľa uvedenej cesty; odkazy už smerujú sem. Pôvodné obrázky v `quartz/static/images` zostávajú zachované. Tri obrázky nájdené iba vo vygenerovanom webe (`brownov_pohyb.png`, `difuzia.png`, `vzajomne_posobenie_castic.png`) sú tiež skopírované do `content/images`. Nové obrázky vkladaj cez Obsidian do vaultu.

SVG obrázky používajú štandardný Markdown s relatívnou cestou. Pri premenovaní alebo presune používaj Obsidian, aby aktualizoval odkazy. Webový vzhľad pôvodných obrázkov zachováva `quartz/plugins/transformers/obsidianFigures.ts` a `figure-layout.json`, zapojený v `quartz.ts`. Pri publikovaní zahrň aj tieto súbory. Ak premenuješ pôvodný obrázok, zodpovedajúci kľúč v `figure-layout.json` treba upraviť pre zachovanie jeho špecifického webového štýlu.

## Prostredie

Obsidian je nainštalovaný. Repozitár používa nastavenie `core.precomposeunicode=true` pre názvy súborov s diakritikou na macOS.

Projekt je v iCloud Drive. Vo Finderi nechaj celý priečinok stiahnuť (**Download Now / Keep Downloaded**, podľa dostupnej voľby), aby úpravy a synchronizácia nemuseli čakať na súbory.

Existujúci `publish.ps1` je skript pre Windows, ktorý pridáva všetky zmeny. Na Macu používaj postup vyššie. Lokálny build bol úspešný; všetkých 242 obrázkov si vo výslednom HTML zachovalo pôvodné popisy, šírky a triedy obalov. Úplná kontrola TypeScriptu je zatiaľ blokovaná neúplnými duplicitnými balíkmi v `node_modules/@types` (napríklad `debug 2`); ide o lokálne závislosti. Výsledok nasadenia skontroluj v Actions.

Oficiálne návody: [prílohy v Obsidiane](https://obsidian.md/help/attachments), [kontrola a commit zmien v GitHub Desktop](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop).
