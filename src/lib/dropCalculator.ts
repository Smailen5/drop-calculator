export const dropCalculator = (dropRate: number, targetProb = 0.9) => {
  if (dropRate === 0 || dropRate < 0 || dropRate > 99) {
    const mess = "inserisci un valore valido";
    return mess;
  }
  const x = dropRate / 100; // Converti la percentuale di drop in decimale
  const y = 1 / x; // Numero di facce del dado
  const z = Math.round(y); // Arrotondiamo il numero di facce

  // Probabilità di non droppare in un singolo tentativo
  const noDropProb = (z - 1) / z;

  // Funzione per trovare il numero di tentativi necessari per raggiungere la probabilità target
  let attempts = 0;
  let cumulativeProb = 0;

  while (cumulativeProb < targetProb) {
    attempts++;
    cumulativeProb = 1 - Math.pow(noDropProb, attempts); // Calcola la probabilità cumulativa
  }

  const percentage = (targetProb * 100).toFixed(0); // Convertiamo la soglia target in percentuale

  const mess = `Con un drop rate del ${dropRate}%, hai 1 possibilità su ${z} di ottenere il drop in ogni tentativo. 
      Per avere almeno una probabilità del ${percentage}% di ottenere il drop, dovresti fare circa ${attempts} tentativi.`;

  return mess;
};

// Funzione per calcolare la probabilità attuale
export const calculateCurrentProbability = (
  dropRate: number,
  attempts: number
) => {
  if (dropRate <= 0 || attempts <= 0) return 0; // Probabilità 0 se dropRate è 0 o tentativi <= 0

  const x = dropRate / 100; // Converti la percentuale di drop in decimale
  const noDropProb = 1 - x; // Probabilità di non droppare in un singolo tentativo
  const currentProb = 1 - Math.pow(noDropProb, attempts); // Calcola la probabilità cumulativa

  return currentProb * 100; // Converti in percentuale
};
