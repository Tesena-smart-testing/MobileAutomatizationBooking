// const assert = require("chai").assert;
import NativeAlert from "../screenobjects/components/NAtiveAlert";
import LoginScreen from "../screenobjects/LoginScreen";
import OnboardingPage from "../screenobjects/components/OnboardingPage";

describe("should be able login successfully", async () => {
  beforeEach(async () => {
    await OnboardingPage.onboard();
  });
  it("should be able to login successfully", async () => {
    await NativeAlert.topOnButtonWithTextView("Continue with email");
    await LoginScreen.submitLoginForm("app.forhorse@gmail.com");
  });
});

// npm install chai --save-dev
