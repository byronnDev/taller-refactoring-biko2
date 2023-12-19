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
    const MAX_QUALITY = 50;
    const MIN_QUALITY = 0;
    const BACKSTAGE_PASS_THRESHOLD_1 = 10; // 10 days
    const BACKSTAGE_PASS_THRESHOLD_2 = 5; // 5 days

    for (let item in this.items) {
      const { name, sellIn, quality } = item;
      if (
        name != "Aged Brie" &&
        name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (quality > MIN_QUALITY) {
          if (name != "Sulfuras, Hand of Ragnaros") {
            quality--;
          }
        }
      } else {
        if (quality < MAX_QUALITY) {
          quality++;
          if (
            name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (sellIn <= BACKSTAGE_PASS_THRESHOLD_1) {
              if (quality < MAX_QUALITY) {
                quality++;
              }
            }
            if (sellIn <= BACKSTAGE_PASS_THRESHOLD_2) {
              if (quality < MAX_QUALITY) {
                quality++;
              }
            }
          }
        }
      }
      if (name != "Sulfuras, Hand of Ragnaros") {
        sellIn--;
      }
      if (sellIn < 0) {
        if (name != "Aged Brie") {
          if (
            name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (quality > MIN_QUALITY) {
              if (name != "Sulfuras, Hand of Ragnaros") {
                quality--;
              }
            }
          } else {
            quality -= quality;
          }
        } else {
          if (quality < MAX_QUALITY) {
            quality++;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
