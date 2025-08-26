/*
 * Un anagrama es una palabra creada a partir de la reordenación de las letras de otra palabra. Ej: saco - caso
 * Dado un array de strings, devuelve los anagramas agrupados. Cualquier orden es válido.
 *
 * Ejemplo:
 *  Input: words = ["saco", "arresto", "programa", "rastreo", "caso"].
 *  Output: [["saco", "caso"], ["arresto", "rastreo"], ["programa"]].
 */

export const groupAnagrams = (words: string[]): string[][] => { 

    const anagramMap = new Map<string, string[]>();
    for (const word of words) {
        const sortedWord = word.split('').sort().join(''); // Could be improved
        if (anagramMap.has(sortedWord)) {
            anagramMap.get(sortedWord)?.push(word);
        } else {
            anagramMap.set(sortedWord, [word]);
        }
    }

    return Array.from(anagramMap.values());
}