# Publikovanie zmien

Po úprave súborov v priečinku `content` spusti v tomto priečinku:

```powershell
.\publish.ps1
```

Ak chceš vlastnú správu commitu:

```powershell
.\publish.ps1 -Message "Doplnenie úvodu do fyziky"
```

Skript spraví:

1. kontrolný Quartz build,
2. Git commit,
3. odoslanie na GitHub,
4. GitHub Actions automaticky nasadí stránku.

Výsledná stránka:

https://patonovak.github.io/fyzika/
