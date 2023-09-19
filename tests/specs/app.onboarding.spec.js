import NativeAlert from "../screenobjects/components/NAtiveAlert";



describe("Onboarding", async () => {
  it("should pass onboarding screens", async () => {
    // Accept the onboarding screen
    await NativeAlert.topOnButtonWithText("Accept");

    // Wait for the onboarding screen to disappear
    await NativeAlert.waitForIsShown(false);

    // Activate the Booking.com app
    await driver.activateApp("com.booking");

    // Close the "OK" alert
    await NativeAlert.topOnButtonWithTextView("OK");

    // Wait for the "OK" alert to disappear
    await NativeAlert.waitForIsShown(false);

    // Close the "Allow" popup
    await NativeAlert.topOnButtonWithText("Allow");

    // Wait for the "Allow" popup to disappear
    await NativeAlert.waitForIsShown(false);
  });
});





