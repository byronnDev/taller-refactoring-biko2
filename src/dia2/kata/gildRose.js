const QUALITY_MIN = 0;
const QUALITY_MAX = 50;
const SELLIN_MIN = 0;
const SELLIN_MID = 5;
const SELLIN_MAX = 10;

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

/**
 * Represents a shop that sells items.
 */
class Shop {
  constructor(items = []) {
    this.items = items;
  }

  /**
   * Updates the quality of the items in the shop.
   * @returns {Item[]} - The items in the shop
   */
  updateQuality() {
    this.items.forEach((item) => {
      if (item.name === "Aged Brie") {
        this.updateAgedBrie(item);
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        this.updateBackstagePasses(item);
      } else if (item.name !== "Sulfuras, Hand of Ragnaros") {
        this.updateNormalItem(item);
      }

      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn--;
      }

      if (item.sellIn < SELLIN_MIN) {
        this.updateExpiredItem(item);
      }
    });

    return this.items;
  }

  /**
    * Updates the quality of an item.
    * @param {Item} item - The item to update
    * @returns {Item} - The updated item
    **/
  updateAgedBrie(item) {
    if (item.quality < QUALITY_MAX) {
      item.quality++;
    }
  }

  updateBackstagePasses(item) {
    if (item.quality < QUALITY_MAX) {
      item.quality++;
      if (item.sellIn <= SELLIN_MAX) {
        item.quality++;
      }
      if (item.sellIn <= SELLIN_MID) {
        item.quality++;
      }
    }
  }

  updateNormalItem(item) {
    if (item.quality > QUALITY_MIN) {
      item.quality--;
    }
  }

  /**
   * Updates the quality of an expired item.
   * @param {Item} item - The expired item to update
   * @returns {Item} - The updated item
   */
  updateExpiredItem(item) {
    if (item.name !== "Aged Brie") {
      if (item.name !== "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > QUALITY_MIN) {
          item.quality--;
        }
      } else {
        item.quality = 0;
      }
    } else if (item.quality < QUALITY_MAX) {
      item.quality++;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
