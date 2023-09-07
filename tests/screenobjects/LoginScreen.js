import NativeAlert from "./components/NAtiveAlert";

class LoginScreen {

  get emailField() {
    const elementByClass = $("android.widget.EditText");
    return elementByClass;
  }

  async submitLoginForm(usermail) {
    await this.emailField.click()
    await this.emailField.setValue(usermail);
    await NativeAlert.topOnButtonWithTextView("Continue");
    await NativeAlert.topOnButtonWithTextView("Back to sign-in");
  }
}

export default new LoginScreen();
