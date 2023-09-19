const NativeAlert = require("./NAtiveAlert");

class OnboardingPage {
  async onboard() {
    await NativeAlert.topOnButtonWithText("Accept");
    await NativeAlert.waitForIsShown(false);

    await driver.activateApp("com.booking");
    // Close the 2 alerts
    await NativeAlert.topOnButtonWithTextView("OK");
    await NativeAlert.waitForIsShown(false);
    // Close popup
    await NativeAlert.topOnButtonWithText("Allow");
    await NativeAlert.waitForIsShown(false);
  }
}

module.exports = new OnboardingPage();
