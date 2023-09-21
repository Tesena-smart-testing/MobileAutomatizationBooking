import Calendar from "./components/Calendar";

class HotelScreen {
  get enterDestinationField() {
    const elementByAccessabilityId = $("~Enter your destination"); //accessibility id
    return elementByAccessabilityId;
  }

  get enterDestinationFieldInner() {
    const elementByResourceId = $(
      "*//android.widget.EditText[@resource-id='com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content']"
    );
    return elementByResourceId;
  }

  get nameOfCity() {
    const elementByText = $(`//*[contains(@text, "City in Czech Republic")]`);
    return elementByText;
  }

  get hotelBtn() {
    const elementByResourceId = $(
      "*//android.widget.TextView[@resource-id='com.booking:id/facet_entry_point_item_label']"
    );
    return elementByResourceId;
  }

  get roomAndGuestsField() {
    const elementByAccessabilityId = $("~1 room, 2 adults, 0 children");
    return elementByAccessabilityId;
  }

  get applyRoomAndGuestBtn() {
    const elementByResourceId = $(
      "*//android.widget.Button[@resource-id='com.booking:id/group_config_apply_button']"
    );
    return elementByResourceId;
  }

  get searchBtn() {
    const elementByText = $(`//*[contains(@text, "Search")]`);
    return elementByText;
  }

  get sortBtn() {
    const elementByText = $(`//*[contains(@text, "Sort")]`);
    return elementByText;
  }

  get descriptionTaxOfHotel(){
    const elementByText = $(`//*[contains(@text, "Includes taxes and fees")]`);
    return elementByText;
  }

  async tapDestinationField() {
    await this.enterDestinationField.click();
  }

  async tapOnHotelBtn() {
    await this.hotelBtn.click();
  }

  async tapOnNameOfCity() {
    await this.nameOfCity.click();
  }

  async tapOnRoomAndGuestsField() {
    await this.roomAndGuestsField.click();
  }

  async tapApplyRoomAndGustsBtn() {
    await this.applyRoomAndGuestBtn.click();
  }

  async tapOnSearchBtn() {
    await this.searchBtn.click();
  }

  async navigateToHotelScreen() {
    await this.hotelBtn.click();
    await this.tapDestinationField();
  }

  async searchForHotel(hotel, date) {
    await this.enterDestinationFieldInner.addValue(hotel);
    await this.tapOnNameOfCity();
    await Calendar.tapButtonWithText(date);
  }

  async chooseRoomAndGuests(){
    await this.tapOnRoomAndGuestsField()
    await this.tapApplyRoomAndGustsBtn()
  }
}

export default new HotelScreen();
