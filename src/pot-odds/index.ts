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
 * @param pot - The size of the pot.  It must be >= 0.
 * @param bet - The size of the bet to call. It must be >= 0.
 * @param [isBluff] - Is this is a bluff bet (optional)
 * @returns A percentage to 3 decimal points
 * @example
 * ```ts
 * potOdds({pot: 50, bet: 30}) // returns: 0.273
 * potOdds({pot: 50, bet: 30, isBuff: true}) // returns: 0.375
 * ```
 */
export function potOdds({ pot, bet, isBluff = false }: PotOddOptions) {
  if (!Number.isFinite(pot) || !Number.isFinite(bet)) {
    throw new Error("Pot and bet must be finite numbers");
  }

  if (pot < 0) throw new Error("Pot cannot be negative");
  if (bet < 0) throw new Error("Bet cannot be negative");

  const multiplier = isBluff ? 1 : 2;
  const denominator = pot + multiplier * bet;

  return Math.round((bet / denominator) * 1000) / 1000;
}
