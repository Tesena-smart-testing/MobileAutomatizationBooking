import OnboardingPage from "../screenobjects/components/OnboardingPage";
import LoginPage from "../screenobjects/components/LoginPage";
import HotelScreen from "../screenobjects/HotelScreen";



describe("Searching for a hotel", async () => {
  beforeEach(async () => {
    await OnboardingPage.onboard();
    await LoginPage.login();
  });
  it("should be able to find a hotel", async () => {
    // Navigate to the hotel screen
    await HotelScreen.navigateToHotelScreen();
    // Assert that the field for searching is displayed
    await expect(HotelScreen.enterDestinationFieldInner).toBeDisplayed();
    // Enter destination and select dates
    await HotelScreen.searchForHotel("Prague", "Select dates");
    // Apply room and guests selection
    await HotelScreen.chooseRoomAndGuests();
    // Assert that the field has right name
    const elementHasText = await $("~Prague");
    await expect(elementHasText).toBeDisplayed();
    // Perform the hotel search
    await HotelScreen.tapOnSearchBtn();
    // Assert that cards with hotels are displayed
    await expect(HotelScreen.descriptionTaxOfHotel).toBeDisplayed()
    // Sort the results
    await HotelScreen.sortBtn.click();
  });
});
