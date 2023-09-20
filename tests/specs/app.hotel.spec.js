import LoginScreen from "../screenobjects/LoginScreen";
import OnboardingPage from "../screenobjects/components/OnboardingPage";
import LoginPage from "../screenobjects/components/LoginPage";
import HotelScreen from "../screenobjects/HotelScreen";



describe("should be able find a hotel successfully", async () => {
  beforeEach(async () => {
    await OnboardingPage.onboard();
    await LoginPage.login();
  });
  it("should be able to find a hotel", async () => {
    await HotelScreen.hotelBtn.click()
  });
});
