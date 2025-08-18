
/*
 * Dado un método que recibe una String, comprobar si todos los caracteres son únicos o no.
 *
 * isUnique("abcde") => true;
 * isUnique("abcded") => false;
 */

export class IsUniqueClass {

    public isUnique(str: string): boolean {
        const charSet = new Set<string>();
        for (const char of str) {
            if (charSet.has(char)) {
                return false;
            }
            charSet.add(char);
        }
        return true;
    }
}

// O(1). El espacio utilizado por el conjunto de caracteres es constante, ya que el conjunto de caracteres tiene un tamaño máximo de 128 (número de caracteres ASCII).