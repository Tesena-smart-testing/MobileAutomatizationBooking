class LoginScreen {
  get googleBtn() {
    const elementByText = $(`//*[contains(@text, 'Continue with Google')]`);
    return elementByText;
  }

  get googleNameBtn() {
    const nameToClick = $(
      "[resource-id='com.google.android.gms:id/account_display_name']"
    );
    return nameToClick;
  }

  get closeBtn() {
    const elementByClass = $("android.widget.ImageButton");
    return elementByClass;
  }

  async tapOnGoogleNameBtn() {
    await this.googleNameBtn.click();
  }

  async tapOnGoogleBtn() {
    await this.googleBtn.click();
  }

  async tapOnCloseButton() {
    await this.closeBtn.click();
  }
}

export default new LoginScreen();
