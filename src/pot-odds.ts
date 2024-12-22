export interface PotOddOptions {
  /** Size of the pot */
  pot: number;
  /** Size of the bet to call */
  bet: number;
}

/**
 * Calculates the percentage of time that a player must win for their call to be profitable.
 * @param pot - The size of the pot
 * @param bet - The size of the bet to call
 * @returns A percentage to 3 decimal points
 * @example
 * ```ts
 * potOdds(50, 30) // returns: 0.273
 * ```
 */
export function potOdds({ pot, bet }: PotOddOptions) {
  return Math.round((bet / (pot + 2 * bet)) * 1000) / 1000;
}
