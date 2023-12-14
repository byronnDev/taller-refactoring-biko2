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

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      if (
        item.name != "Aged Brie" &&
        item.name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (item.quality > QUALITY_MIN) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < QUALITY_MAX) {
          item.quality = item.quality + 1;
          if (
            item.name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (item.sellIn <= SELLIN_MAX) {
              if (item.quality < QUALITY_MAX) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn <= SELLIN_MID) {
              if (item.quality < QUALITY_MAX) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < SELLIN_MIN) {
        if (item.name != "Aged Brie") {
          if (
            item.name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (item.quality > QUALITY_MIN) {
              if (item.name != "Sulfuras, Hand of Ragnaros") {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality =
              item.quality - item.quality;
          }
        } else {
          if (item.quality < QUALITY_MAX) {
            item.quality = item.quality + 1;
          }
        }
      }

      return this.items;
    });
  }
}

module.exports = {
  Item,
  Shop,
};
