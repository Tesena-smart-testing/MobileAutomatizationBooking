class HotelScreen {
  get enterDestinationField() {
    const elementByAccessabilityId = $("~ Enter your destination"); //accessibility id
    return elementByAccessabilityId;
  }

  get hotelBtn() {
    const elementByResourceId = $(
      "*//android.widget.TextView[@resource-id='com.booking:id/facet_entry_point_item_label']"
    );
    return elementByResourceId;
  }

  get outsideField(){
    const elementByResourceId = $(
      "*//android.widget.FrameLayout[@resource-id='com.booking:id/action_bar_root']"
    );
    return elementByResourceId;
  }

async tapOutside(){
    await this.outsideField.click()
}

  async tapOnHotelBtn() {
    await this.hotelBtn.click();
  }
}

export default new HotelScreen();
