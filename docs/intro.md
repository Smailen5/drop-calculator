# Introduzione al Drop Calculator

Il Drop Calculator è un'applicazione React + TypeScript progettata per calcolare le probabilità di ottenere un drop in un gioco basandosi su una data percentuale di successo.

## Logica di Calcolo

Il core dell'applicazione si trova in .

### Funzionamento
La funzione  calcola quanti tentativi sono necessari per raggiungere una probabilità target (default 90%) di ottenere almeno un drop.

1. **Conversione**: Il  (percentuale) viene convertito in decimale ().
2. **Probabilità di insuccesso**: Si calcola .
3. **Iterazione**: Si incrementano i tentativi finché la probabilità cumulativa di successo () non raggiunge la soglia target.

### Calcolo Probabilità Attuale
La funzione  calcola invece la probabilità di successo dato un numero specifico di tentativi già effettuati:

