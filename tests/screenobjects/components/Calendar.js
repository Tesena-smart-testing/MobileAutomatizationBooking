const SELECTORS = {
  ANDROID: {
    SUBMIT: '*//android.widget.Button[@text="{BUTTON_TEXT}"]', 
  },
};

class Calendar {
  /**
   * Click a button with the specified text on Android
   * @param {string} buttonText - The text on the button you want to click
   */
  static async tapButtonWithText(buttonText) {
    const buttonSelector = SELECTORS.ANDROID.SUBMIT.replace(
      "{BUTTON_TEXT}",
      buttonText
    );

    await $(buttonSelector).click();
  }
}

module.exports = Calendar;
