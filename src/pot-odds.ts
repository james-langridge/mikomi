export interface PotOddOptions {
  /** Size of the pot */
  pot: number;
  /** Size of the call or bluff */
  bet: number;
  /** Is this a bluff bet */
  isBluff?: boolean;
}

/**
 * Calculates the percentage of time that a player must win for their call or bluff to be profitable.
 * @param pot - The size of the pot
 * @param bet - The size of the bet to call
 * @param [isBluff] - Is this is a bluff bet (optional)
 * @returns A percentage to 3 decimal points
 * @example
 * ```ts
 * potOdds({pot: 50, bet: 30}) // returns: 0.273
 * potOdds({pot: 50, bet: 30, isBuff: true}) // returns: 0.375
 * ```
 */
export function potOdds({ pot, bet, isBluff = false }: PotOddOptions) {
  const multiplier = isBluff ? 1 : 2;
  return Math.round((bet / (pot + multiplier * bet)) * 1000) / 1000;
}
