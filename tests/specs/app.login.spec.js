// const assert = require("chai").assert;
import NativeAlert from "../screenobjects/components/NAtiveAlert";
import LoginScreen from "../screenobjects/LoginScreen";
import OnboardingPage from "../screenobjects/components/OnboardingPage";

describe("should be able login successfully", async () => {
  beforeEach(async () => {
    await OnboardingPage.onboard();
  });
  it("should be able to login successfully", async () => {
    await LoginScreen.tapOnGoogleBtn();
    browser.pause(2000);
    await LoginScreen.tapOnGoogleNameBtn();
  });
});

// npm install chai --save-dev
// npx wdio run ./wdio.conf.js

