import OnboardingPage from "../screenobjects/components/OnboardingPage";
import LoginPage from "../screenobjects/components/LoginPage";
import HotelScreen from "../screenobjects/HotelScreen";
import Gestures from "../helpers/Gestures";
import allureReporter from "@wdio/allure-reporter";

describe("Searching for a hotel", async () => {
  beforeEach(async () => {
    await OnboardingPage.onboard();
    await LoginPage.login();
  });
  it("should be able to find a hotel", async () => {
    await HotelScreen.searchBtn.waitForDisplayed();
    //Swipe up to search element
    const swipeElement = await $(`//*[contains(@text, "Travel articles")]`);
    await Gestures.swipeUp(0.75);
    // Assert that the element is displayed
    await expect(swipeElement).toBeDisplayed();
    // Swipe doen to search field
    await Gestures.swipeDown(0.75);
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

    // Horizontal swipe to left - Car rental btn
    // Define the initial and final coordinates
    const initialLocation = { x: 706, y: 333 };
    const finalX = initialLocation.x - 100; // Adjust this value as needed for the desired swipe distance
    const finalY = initialLocation.y;

    // Call the swipe function with the coordinates
    await Gestures.swipe(initialLocation, { x: finalX, y: finalY });

    // Perform the hotel search
    await HotelScreen.tapOnSearchBtn();
    // Assert that cards with hotels are displayed
    await expect(HotelScreen.descriptionTaxOfHotel).toBeDisplayed();
    // Sort the results
    await HotelScreen.sortBtn.click();
  });
});
