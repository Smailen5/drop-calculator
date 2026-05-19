# Introduzione al Drop Calculator

Il Drop Calculator è un'applicazione React + TypeScript progettata per calcolare le probabilità di ottenere un drop in un gioco basandosi su una data percentuale di successo.

## Logica di Calcolo

Il core dell'applicazione si trova in src/lib/dropCalculator.ts.

### Funzionamento
La funzione dropCalculator calcola quanti tentativi sono necessari per raggiungere una probabilità target (default 90%) di ottenere almeno un drop.

1. Conversione: Il dropRate (percentuale) viene convertito in decimale (x = dropRate / 100).
2. Probabilità di insuccesso: Si calcola noDropProb = 1 - x.
3. Iterazione: Si incrementano i tentativi finché la probabilità cumulativa di successo (1 - Math.pow(noDropProb, attempts)) non raggiunge la soglia target.

### Calcolo Probabilità Attuale
La funzione calculateCurrentProbability calcola invece la probabilità di successo dato un numero specifico di tentativi già effettuati:
1 - Math.pow(1 - dropRate/100, attempts)
