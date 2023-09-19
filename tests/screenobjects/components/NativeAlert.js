const SELECTORS = {
  ANDROID: {
    ALERT_TITLE: '*//android.widget.TextView[@text="{ALERT_TEXT}"]',
    ALERT_MESSAGE:
      '*//android.widget.TextView[@resource-id="android:id/message"]',
    ALERT_BUTTON: '*//android.widget.Button[@text="{BUTTON_TEXT}"]',
  },
};


class NativeAlert {
  /**
   * Wait for the alert to exist.
   */
  static async waitForIsShown(isShown = true) {
    const selector = SELECTORS.ANDROID.ALERT_TITLE;

    return $(selector).waitForExist({
      timeout: 11000,
      reverse: !isShown,
    });
  }

  /**
   * ANDROID:
   *  and click on the button
   */
  static async topOnButtonWithText(selector) {
    const buttonSelector = SELECTORS.ANDROID.ALERT_BUTTON.replace(
      "{BUTTON_TEXT}",
      selector
    );

    await $(buttonSelector).click();
  }

  static async topOnButtonWithTextView(selector) {
    const buttonSelectorTextView = SELECTORS.ANDROID.ALERT_TITLE.replace(
      "{ALERT_TEXT}",
      selector
    );

    await $(buttonSelectorTextView).click();
  }

  /**
   * Get the alert text
   */
  static async text() {
    const title = await $(SELECTORS.ANDROID.ALERT_TITLE).getText();
    const message = await $(SELECTORS.ANDROID.ALERT_MESSAGE).getText();
    return `${title}\n${message}`;
  }
}

module.exports = NativeAlert;
