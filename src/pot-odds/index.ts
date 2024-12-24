export interface PotOddOptions {
  /** Size of the pot before the call or bluff is made */
  pot: number;
  /** Size of the bet to call or bluff */
  bet: number;
}

/**
 * Calculates the percentage of time that a player must win for their call or bluff to be profitable.
 * @param pot - The size of the pot before the call or bluff is made. Must be >= 0.
 * @param bet - The size of the bet to call or bluff. Must be >= 0
 * @returns A percentage to 3 decimal points
 * @example
 * ```ts
 * If, on the river, a player bets $30 into a $50 pot, the potential caller will be risking $30
 * to win $80 and is said to be getting pot odds of $80-to-$30 or 8-to-3.And for their call to be
 * profitable, they must win at least 27.3 percent of the time.
 *
 * potOdds({pot: 80, bet: 30}); // 0.273
 * ```
 */
export function potOdds({ pot, bet }: PotOddOptions): number {
  if (!Number.isFinite(pot) || !Number.isFinite(bet)) {
    throw new Error("Pot and bet must be finite numbers");
  }

  if (pot < 0) throw new Error("Pot cannot be negative");
  if (bet < 0) throw new Error("Bet cannot be negative");

  const denominator = pot + bet;

  return Math.round((bet / denominator) * 1000) / 1000;
}
