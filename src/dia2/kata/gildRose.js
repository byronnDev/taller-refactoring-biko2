// Define constants for quality and sell-in values
const QUALITY_MIN = 0;
const QUALITY_MAX = 50;
const SELLIN_MIN = 0;
const SELLIN_MID = 5;
const SELLIN_MAX = 10;

// Define item names
const AgedBrie = "Aged Brie";
const BackstagePasses = "Backstage passes to a TAFKAL80ETC concert";
const Sulfuras = "Sulfuras, Hand of Ragnaros";

// Define the Item class
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
class Shop {
  constructor(items = []) {
    this.items = items;
  }

  // Update the quality of all items in the shop
  updateQuality() {
    for (let item of this.items) {
      switch (item.name) {
        case Sulfuras:
          break;
        case AgedBrie:
          this.updateAgedBrie(item);
          break;
        case BackstagePasses:
          this.updateBackstagePasses(item);
          break;
        default:
          this.updateNormalItem(item);
          break;
      }

      // Decrease the sell-in value for all items except Sulfuras
      if (item.name !== Sulfuras) item.sellIn--;

      // Update the item if it has expired
      if (item.sellIn < SELLIN_MIN) this.updateExpiredItem(item);
    }

    return this.items;
  }

  // Update the quality of Aged Brie
  updateAgedBrie(item) {
    if (item.quality < QUALITY_MAX) item.quality++;
  }

  // Update the quality of Backstage Passes
  updateBackstagePasses(item) {
    if (item.quality < QUALITY_MAX) {
      item.quality++;
      if (item.sellIn <= SELLIN_MAX) item.quality++;
      if (item.sellIn <= SELLIN_MID) item.quality++;
    }
  }

  // Update the quality of normal items
  updateNormalItem(item) {
    if (item.quality > QUALITY_MIN) item.quality--;
  }

  // Update the quality of expired items
  updateExpiredItem(item) {
    if (item.name !== AgedBrie && item.name !== BackstagePasses && item.quality > QUALITY_MIN) item.quality--;

    if (item.name === BackstagePasses) item.quality = 0;

    if (item.name === AgedBrie && item.quality < QUALITY_MAX) item.quality++;
  }
}

module.exports = {
  Item,
  Shop,
};