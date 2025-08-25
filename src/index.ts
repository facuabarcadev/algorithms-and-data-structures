import { IsUniqueClass } from "./exercises/array-string-hash-tables/01-is-unique/is-unique";
import { TwoSumClass } from "./exercises/array-string-hash-tables/02-two-sum/two-sum";

const isUnique = new IsUniqueClass();

console.log(isUnique.isUnique("abcde")); // true
console.log(isUnique.isUnique("abcded")); // false
console.log('Facundo') 

const twoSum = new TwoSumClass();

console.log(twoSum.twoSum([9,2,5,6], 7)); // [1,2]
console.log(twoSum.twoSum([9,2,5,6], 100)); // null