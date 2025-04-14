// Creare un array di oggetti di squadre di calcio.
const squadSoccer = [
  // Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
  // Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
  {
    nameSquad: "Milan",
    point: 0,
    failsReceved: 0,
  },
  {
    nameSquad: "Inter",
    point: 0,
    failsReceved: 0,
  },
  {
    nameSquad: "Juventus",
    point: 0,
    failsReceved: 0,
  },
];
console.log(squadSoccer);

// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".

let randomNumberFailsReceved = Math.floor(Math.random() * 9 + 1);

console.log(randomNumberFailsReceved);

// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const newSquadSoccer = [];

for (let i = 0; i < squadSoccer.length; i++) {
  let randomNumberFailsReceved = Math.floor(Math.random() * 100 + 1);
  squadSoccer[i].failsReceved += randomNumberFailsReceved;
  newSquadSoccer.push(squadSoccer[i].nameSquad, squadSoccer[i].failsReceved);
}
console.log(`Falli subiti: ` + newSquadSoccer);
