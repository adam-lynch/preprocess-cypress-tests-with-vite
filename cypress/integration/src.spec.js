/* global describe, expect, it */

import adder from "../../src";

describe("Addition", () => {
  it("2+2", async () => {
    expect(adder(2, 2)).to.equal(4);
  });

  it("-2+2", async () => {
    expect(adder(-2, 2)).to.equal(0);
  });
});
