let playlist = ["Funk", "Hip-Hop", "Pop", "Rock", "Jazz", "Hino"];

console.log(`Antes do splice: ${playlist}`);

// Removendo 2 elemntos a partir do índice 2
let elementosRemovidos = playlist.splice(2, 2);

console.log(`Depois do splice: ${playlist}`);
console.log(`Elementos removidos: ${elementosRemovidos}`);

let desafio = playlist.splice(2, 3);
console.log(`Antes do splice: ${desafio}`);
console.log(`Depois do splice do desafio: ${playlist}`);
