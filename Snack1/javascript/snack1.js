// console.log("ciao");

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const bikes = [
  {
    brandBike: `Super`,
    weightBike: 7,
  },
  {
    brandBike: `Turbo`,
    weightBike: 5,
  },
  {
    brandBike: `Ultra`,
    weightBike: 3,
  },
  {
    brandBike: `X-Turbo`,
    weightBike: 9,
  },
];

// Stampare a schermo la bici con peso minore.
let result = bikes[0];
console.log(result.weightBike);

for (let i = 0; i < bikes.length; i++) {
  if (bikes[i].weightBike < result.weightBike) {
    result = bikes[i];
  }
}
console.log(result);
