import { expect } from "chai";

describe("Sandbox", () => {
  before(() => {
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = await element(by.css("h1")).getText();

    expect(title).to.equal("Sandbox");
    expect(header).to.equal("Sandbox");
  });
}).timeout(20000);
