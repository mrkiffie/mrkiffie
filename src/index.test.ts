import { recursive, logic, loop, bitwise } from "./index";

function computeMaxCallStackSize(): number {
  try {
    return 1 + computeMaxCallStackSize();
  } catch (err) {
    return 1;
  }
}
const maxCallStackSize = computeMaxCallStackSize();

describe("recursive", () => {
  it("basicaly works", () => {
    expect(recursive(-2)).toBe(0);
    expect(recursive(-1)).toBe(0);
    expect(recursive(0)).toBe(0);
    expect(recursive(1)).toBe(1);
    expect(recursive(2)).toBe(3);
    expect(recursive(3)).toBe(6);
    expect(recursive(4)).toBe(10);
    expect(recursive(5)).toBe(15);
  });

  it("throws a RangeError when exceeding the mac call stack size", () => {
    expect(() => recursive(maxCallStackSize)).toThrowError(RangeError);
  });
  it("performance", () => {
    console.time("recursive 5_000");
    const result = recursive(5e3);
    console.timeEnd("recursive 5_000");
    expect(result).toBe(12502500);
  });
});

describe("loop", () => {
  it("basicaly works", () => {
    expect(loop(-2)).toBe(0);
    expect(loop(-1)).toBe(0);
    expect(loop(0)).toBe(0);
    expect(loop(1)).toBe(1);
    expect(loop(2)).toBe(3);
    expect(loop(3)).toBe(6);
    expect(loop(4)).toBe(10);
    expect(loop(5)).toBe(15);
  });
  it("does not throw a RangeError", () => {
    expect(() => loop(maxCallStackSize)).not.toThrowError(RangeError);
  });
  it("performance", () => {
    console.time("loop 5_000");
    const result = loop(5e3);
    console.timeEnd("loop 5_000");
    expect(result).toBe(12502500);
  });
  it("performance", () => {
    console.time("loop 50_000_000");
    const result = loop(5e7);
    console.timeEnd("loop 50_000_000");
    expect(result).toBe(1250000025000000);
  });
});
describe("logic", () => {
  it("basically works", () => {
    expect(logic(-2)).toBe(0);
    expect(logic(-1)).toBe(0);
    expect(logic(0)).toBe(0);
    expect(logic(1)).toBe(1);
    expect(logic(2)).toBe(3);
    expect(logic(3)).toBe(6);
    expect(logic(4)).toBe(10);
    expect(logic(5)).toBe(15);
  });
  it("does not throw a RangeError", () => {
    expect(() => logic(maxCallStackSize)).not.toThrowError(RangeError);
  });

  it("performance", () => {
    console.time("logic 50_000_000");
    const result = logic(5e7);
    console.timeEnd("logic 50_000_000");
    expect(result).toBe(1250000025000000);
  });
});
describe("bitwise", () => {
  it("basically works", () => {
    expect(bitwise(-2)).toBe(0);
    expect(bitwise(-1)).toBe(0);
    expect(bitwise(0)).toBe(0);
    expect(bitwise(1)).toBe(1);
    expect(bitwise(2)).toBe(3);
    expect(bitwise(3)).toBe(6);
    expect(bitwise(4)).toBe(10);
    expect(bitwise(5)).toBe(15);
  });
  it("does not throw a RangeError", () => {
    expect(() => bitwise(maxCallStackSize)).not.toThrowError(RangeError);
  });

  it("performance", () => {
    console.time("bitwise 50_000_000");
    const result = bitwise(5e7);
    console.timeEnd("bitwise 50_000_000");
    expect(result).toBe(1250000025000000);
  });
});
