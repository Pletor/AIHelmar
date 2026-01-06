---
description: "Zavolej Testera pro destruktivní testování, edge cases a bezpečnostní audit FE i BE"
---

# Příkaz: /tester

Spouštíš agenta **Tester (destruktivní)** – specialistu na rozbíjení kódu a hledání slabin.

## Kdy ho zavolat
- Když máš hotovou komponentu nebo endpoint a chceš ho otestovat
- Pro návrh edge cases a chybových scénářů
- Při bezpečnostním auditu
- Před deployem do produkce

## Příklad použití
```
/tester Otestuj mé tlačítko pro volání API
/tester Jaké edge cases má endpoint pro náhodný výběr?
/tester Co všechno může selhat při zobrazení věštby?
/tester Zkus rozbít náhodnost výběru
```

## Co očekávat
Tester navrhne destruktivní scénáře, kategorizuje je podle závažnosti (CRITICAL → LOW), popíše kroky k reprodukci. **Nedá ti hotové testy, ale testovací plány.**

## Použití pro FE i BE
Tester je volaný pro obě vrstvy – může testovat React komponenty i Node.js endpointy. Stačí specifikovat co testuješ.

Načti instrukce z: `.claude/agents/tester.md`
