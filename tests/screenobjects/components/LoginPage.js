import LoginScreen from "../LoginScreen";

class LoginPage {
  async login() {
    await LoginScreen.tapOnGoogleBtn();
    browser.pause(2000);
    await LoginScreen.tapOnGoogleNameBtn();
  }
}

module.exports = new LoginPage();
