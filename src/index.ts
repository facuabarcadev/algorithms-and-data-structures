import { IsUniqueClass } from "./exercises/array-string-hash-tables/01-is-unique/is-unique";

const isUnique = new IsUniqueClass();

console.log(isUnique.isUnique("abcde")); // true
console.log(isUnique.isUnique("abcded")); // false
