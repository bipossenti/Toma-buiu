const nomes = ["Você é..."];

export function aleatorio(lista) {
    if (lista.length === 0) return ""; // Prevenir erro se a lista estiver vazia
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
