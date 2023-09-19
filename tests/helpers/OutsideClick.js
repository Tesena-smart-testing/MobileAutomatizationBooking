// @param {object} elementToClickAbove - The element to click above.
// @param {number} yOffset - The Y offset (in pixels) above the element to click.

class OutsideClick{


static async clickAboveElement(elementToClickAbove, yOffset) {
  const { x, y, width } = elementToClickAbove.getLocation();
  const xToClick = x + width / 2;
  const yToClick = y - yOffset;

  browser.touchAction([
    { action: 'press', x: xToClick, y: yToClick },
    { action: 'release' },
  ]);
}

}

export default OutsideClick
 

