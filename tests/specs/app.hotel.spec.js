import OnboardingPage from "../screenobjects/components/OnboardingPage";
import LoginPage from "../screenobjects/components/LoginPage";
import HotelScreen from "../screenobjects/HotelScreen";
import Calendar from "../screenobjects/components/Calendar";

describe("should be able find a hotel successfully", async () => {
  beforeEach(async () => {
    await OnboardingPage.onboard();
    await LoginPage.login();
  });
  it("should be able to find a hotel", async () => {
    await HotelScreen.hotelBtn.click();
    await HotelScreen.tapDestinationField();
    await HotelScreen.enterDestinationFieldInner.addValue("Prague");
    await HotelScreen.tapOnNameOfCity();
    browser.pause(3000);
    await Calendar.tapButtonWithText("Select dates");
    browser.pause(3000);
  });
});
