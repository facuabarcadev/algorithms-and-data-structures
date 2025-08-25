/*
 * Dado un array de números enteros y un target, retorna los índices de dos
 * números para los que la suma de ambos sea igual al target.
 *
 * Puedes asumir que hay solamente una solución.
 *
 * Ejemplo 1:
 *  Input: nums = [9,2,5,6], target = 7
 *  Output: [1,2]
 *  Explicación: nums[1] + nums[2] == 7, devolvemos [1, 2].
 *
 * Ejemplo 2:
 *  Input: nums = [9,2,5,6], target = 100
 *  Output: null
 */

export class TwoSumClass { 

    public twoSum(nums: number[], target: number): number[] | null {
        if (nums.length < 2) return null;

        const numMap = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (numMap.has(complement)) {
                return [numMap.get(complement)!, i];
            }
            numMap.set(nums[i], i);
        }
        return null;
    }
}