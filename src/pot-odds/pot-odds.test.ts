import { potOdds } from "./index";
import { describe, test, expect } from "vitest";

describe("potOdds", () => {
  test("calculates pot odds correctly", () => {
    expect(potOdds({ pot: 100, bet: 50 })).toBe(0.333);
  });

  test("handles zero pot size", () => {
    expect(potOdds({ pot: 0, bet: 50 })).toBe(1);
  });

  test("handles zero bet size", () => {
    expect(potOdds({ pot: 50, bet: 0 })).toBe(0);
  });

  test("handles very small bets", () => {
    expect(potOdds({ pot: 1000, bet: 0.01 })).toBe(0);
  });

  test("handles equal pot and bet sizes", () => {
    expect(potOdds({ pot: 100, bet: 100 })).toBe(0.5);
  });

  test("handles pot smaller than bet", () => {
    expect(potOdds({ pot: 50, bet: 100 })).toBe(0.667);
  });

  test("throws error for negative pot", () => {
    expect(() => potOdds({ pot: -100, bet: 50 })).toThrow();
  });

  test("throws error for negative bet", () => {
    expect(() => potOdds({ pot: 100, bet: -50 })).toThrow();
  });

  test("throws error for NaN", () => {
    expect(() => potOdds({ pot: NaN, bet: 50 })).toThrow();
    expect(() => potOdds({ pot: 50, bet: NaN })).toThrow();
  });

  test("throws error for Infinity", () => {
    expect(() => potOdds({ pot: Infinity, bet: 50 })).toThrow();
    expect(() => potOdds({ pot: 50, bet: Infinity })).toThrow();
  });
});
