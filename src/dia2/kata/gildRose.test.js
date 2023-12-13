const { Shop } = require('./gildRose');

describe('Shop', () => {
    it('should update the quality of items correctly', () => {
        const items = [
            { name: 'Aged Brie', sellIn: 10, quality: 20 },
            { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 30 },
            { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
            { name: 'Normal Item', sellIn: 3, quality: 6 },
        ];
        const shop = new Shop(items);

        shop.updateQuality();

        expect(shop.items[0].quality).toBe(21); // Aged Brie quality should increase by 1
        expect(shop.items[1].quality).toBe(33); // Backstage passes quality should increase by 3
        expect(shop.items[2].quality).toBe(80); // Sulfuras quality should remain unchanged
        expect(shop.items[3].quality).toBe(5); // Normal item quality should decrease by 1
    });

    it('should update the sellIn of items correctly', () => {
        const items = [
            { name: 'Aged Brie', sellIn: 10, quality: 20 },
            { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 30 },
            { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 },
            { name: 'Normal Item', sellIn: 3, quality: 6 },
        ];
        const shop = new Shop(items);

        shop.updateQuality();

        expect(shop.items[0].sellIn).toBe(9); // Aged Brie sellIn should decrease by 1
        expect(shop.items[1].sellIn).toBe(4); // Backstage passes sellIn should decrease by 1
        expect(shop.items[2].sellIn).toBe(0); // Sulfuras sellIn should remain unchanged
        expect(shop.items[3].sellIn).toBe(2); // Normal item sellIn should decrease by 1
    });
});