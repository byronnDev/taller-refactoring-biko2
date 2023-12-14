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
    for (let item of this.items) {
      switch (item.name) {
        case "Aged Brie":
          this.updateAgedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePasses(item);
          break;
        case "Sulfuras, Hand of Ragnaros":
          break;
        default:
          this.updateNormalItem(item);
          break;
      }

      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn--;
      }

      if (item.sellIn < SELLIN_MIN) {
        this.updateExpiredItem(item);
      }
    }

    return this.items;
  }

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
