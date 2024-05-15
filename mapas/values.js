let mapa = new Map();
mapa.set('chave1', 'valor1');
mapa.set('chave2', 'valor2');

let iterador = mapa.values();
for (let valor of iterador) {
    console.log(valor);
}
// Saída:
// valor1
// valor2