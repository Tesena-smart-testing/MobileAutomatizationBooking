const SELECTORS = {
  ANDROID: {
    SIGN_IN_TO_SAVE: '*//android.widget.TextView[@text="{BUTTON_TEXT}"]', //Sign in to save
    // ALERT_MESSAGE: '*//android.widget.TextView[@text="android:id/message"]',
    // ALERT_BUTTON: '*//android.widget.Button[@text="{BUTTON_TEXT}"]',
  },
};


class GeniusDialog {
  /**
   * Wait for the alert to exist.
   */
  static async waitForIsShown(isShown = true) {
    const selector = SELECTORS.ANDROID.SIGN_IN_TO_SAVE;

    return $(selector).waitForExist({
      timeout: 11000,
      reverse: !isShown,
    });
  }

  static async topOnButtonWithTextView(selector) {
    const buttonSelectorTextView = SELECTORS.ANDROID.SIGN_IN_TO_SAVE.replace(
      "{BUTTON_TEXT}",
      selector
    );

    await $(buttonSelectorTextView).click();
  }

    /**
   * Get the alert text
   */
  static async text() {
    const title = await $(SELECTORS.ANDROID.SIGN_IN_TO_SAVE).getText();
    // const message = await $(SELECTORS.ANDROID.ALERT_MESSAGE).getText();
    return `${title}`;
  }
}


module.exports = GeniusDialog;

// npx wdio run ./wdio.conf.js