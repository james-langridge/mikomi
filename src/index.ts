/**
 * Calculates the percentage of time that a player must win for their call to be profitable.
 * @param potSize - The size of the pot
 * @param betSize - The size of the bet to call
 * @returns A percentage
 * @example
 * ```ts
 * potOdds(50, 30) // returns: 0.273
 * ```
 */
export function potOdds(potSize: number, betSize: number) {
  return betSize / potSize + betSize;
}
