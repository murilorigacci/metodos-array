let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz']

console.log(`Antes do splice: ${playlist}`);

// Removendo 2 elemntos a partir do índice 2
let elementosRemovidos = playlist.splice(2, 2);
let desafio = playlist.splice(2, 3)

console.log(`Depois do splice: ${playlist}`);
console.log(`Elementos removidos: ${elementosRemovidos}`);

console.log(`Depois do splice do desafio: ${playlist}`);


