const n = parseInt(readline()); // liczba temperatur do odczytania
const temperatures = readline().split(" ").map(Number); // odczytanie temperatur i zamiana na liczbę

let closest = temperatures.includes(0) ? 0 : Infinity;

for (let i = 0; i < n; i++) {
  const temperature = temperatures[i];
  const distance = Math.abs(temperature);

  if (
    distance < Math.abs(closest) ||
    (distance === Math.abs(closest) && temperature > 0)
  ) {
    closest = temperature;
  }
}

console.log(closest);
