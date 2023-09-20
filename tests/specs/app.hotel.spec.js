import OnboardingPage from "../screenobjects/components/OnboardingPage";
import LoginPage from "../screenobjects/components/LoginPage";
import HotelScreen from "../screenobjects/HotelScreen";
import Calendar from "../screenobjects/components/Calendar";
import assert from "assert";

describe("should be able find a hotel successfully", async () => {
  beforeEach(async () => {
    await OnboardingPage.onboard();
    await LoginPage.login();
  });
  it("should be able to find a hotel", async () => {
    // Navigate to the hotel screen
    await HotelScreen.navigateToHotelScreen();
    // Enter destination and select dates
    await HotelScreen.searchForHotel("Prague", "Select dates");
    // Apply room and guests selection
    await HotelScreen.chooseRoomAndGuests();
    // Perform the hotel search
    await HotelScreen.tapOnSearchBtn();
    // Sort the results
    await HotelScreen.sortBtn.click();
  });
});
