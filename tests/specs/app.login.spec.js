import LoginScreen from "../screenobjects/LoginScreen";
import OnboardingPage from "../screenobjects/components/OnboardingPage";

describe("Login with Google", () => {
  beforeEach(async () => {
    // Perform onboarding before each test
    await OnboardingPage.onboard();
  });

  it("should be able to log in with Google", async () => {
    // Perform login with Google
    await LoginScreen.tapOnGoogleBtn();

    // Assert that the Google Name button is displayed
    await expect(LoginScreen.googleNameBtn).toBeDisplayed();

    // Perform further actions as needed, such as tapping on Google Name button
    await LoginScreen.tapOnGoogleNameBtn();
  });
});

// npm install chai --save-dev
// npx wdio run ./wdio.conf.js
