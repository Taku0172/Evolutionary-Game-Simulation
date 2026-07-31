import { describe, expect, test } from "vitest";
import { calculatePayoffs } from "./gameLogic.js";

describe("calculatePayoffs", () => {
    test("Windows比率50%のとき利得を正しく計算する", () => {
        const result = calculatePayoffs(50, 100);

        expect(result.windowsPayoff).toBe(1);
        expect(result.macPayoff).toBe(0.5);
    });

    test("Windows比率1/3で両者の利得が等しくなる", () => {
        const result = calculatePayoffs(1, 3);

        expect(result.windowsPayoff).toBeCloseTo(2 / 3);
        expect(result.macPayoff).toBeCloseTo(2 / 3);
    });
});