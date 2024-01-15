import { expect } from "@jest/globals";

/**
 * Custom maters for the jest testing framework.
 * see typings/index.d.ts for the TS interface
 */

// Compare clock times
expect.extend({
  toHappenAround(x: Date, y: Date, z: string) {
    const received = x.getTime();
    const expected = y.getTime();
    return {
      pass: Math.abs(received / 1000 - expected / 1000) < 1,
      message: () => `Received time ${x} is not within 1 second of ${y}${z ? ` ${z}` : ""}`,
    };
  },
});

export {};
