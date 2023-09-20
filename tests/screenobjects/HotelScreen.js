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


  async tapDestinationField() {
    await this.enterDestinationField.click();
  }

  async tapOnHotelBtn() {
    await this.hotelBtn.click();
  }

  async tapOnNameOfCity() {
    await this.nameOfCity.click();
  }
}

export default new HotelScreen();
