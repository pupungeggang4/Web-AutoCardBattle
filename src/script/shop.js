class Shop {
    constructor() {
        this.level = 1
        this.item = []
        this.itemPool = [1, 2]
        this.rerollGold = 1
        this.freezed = false
    }

    reroll() {
        let numItems = Math.min(Math.floor(3 + this.level / 2), 6)
        this.item = []
        for (let i = 0; i < 6; i++) {
            if (i < numItems) {
                let index = Math.floor(Math.random() * this.itemPool.length)
                let item = new Item()
                item.setItem('card', this.itemPool[index])
                this.item.push(item)
            } else {
                this.item.push(null)
            }
        }
    }

    render(game) {
        let ctx = game.ctx
        let player = game.player
        Render.fillTextUI(ctx, `Lv.${game.shop.level}`, UI.battle.shop.textLevel)
        Render.drawImageUI(ctx, Img.gold, UI.battle.shop.iconPlayerGold)
        Render.fillTextUI(ctx, `${player.gold}`, UI.battle.shop.textPlayerGold)

        for (let i = 0; i < 6; i++) {
            let rect = [UI.battle.shop.itemStart[0] + UI.battle.shop.itemInterval[0] * i, UI.battle.shop.itemStart[1], UI.battle.shop.itemSize[0], UI.battle.shop.itemSize[1]]
            Render.strokeRectUI(ctx, rect)
        }

        for (let i = 0; i < 6; i++) {
            if (this.item[i] != null) {
                let iconCoinPos = [UI.battle.shop.iconItemGold[0] + UI.battle.shop.itemInterval[0] * i, UI.battle.shop.iconItemGold[1]]
                let textLevelPos = [UI.battle.shop.textItemLevel[0] + UI.battle.shop.itemInterval[0] * i, UI.battle.shop.textItemLevel[1]]
                let textGoldPos = [UI.battle.shop.textItemGold[0] + UI.battle.shop.itemInterval[0] * i, UI.battle.shop.textItemGold[1]]
                Render.fillTextUI(ctx, `L${this.item[i].content.level + 1}`, textLevelPos)
                Render.drawImageUI(ctx, Img.gold, iconCoinPos)
                Render.fillTextUI(ctx, `${this.item[i].gold}`, textGoldPos)
            }
        }

        Render.strokeRectUI(ctx, UI.battle.shop.buttonReroll)
        Render.drawImageUI(ctx, Img.buttonreroll, UI.battle.shop.buttonReroll)
        Render.drawImageUI(ctx, Img.gold, UI.battle.shop.iconGoldReroll)
        Render.fillTextUI(ctx, this.rerollGold, UI.battle.shop.textGoldReroll)
        Render.strokeRectUI(ctx, UI.battle.shop.buttonFreeze)
        Render.drawImageUI(ctx, Img.buttonfreeze, UI.battle.shop.buttonFreeze)

        Render.fillTextUI(ctx, 'Deck', UI.battle.shop.textDeck)

        for (let i = 0; i < 24; i++) {
            let col = Math.floor(i / 12)
            let row = i % 12
            let rect = [UI.battle.shop.buttonDeckStart[0] + UI.battle.shop.deckInterval[0] * col, UI.battle.shop.buttonDeckStart[1] + UI.battle.shop.deckInterval[1] * row, UI.battle.shop.buttonDeckSize[0], UI.battle.shop.buttonDeckSize[1]]
            Render.strokeRectUI(ctx, rect)
        }

        for (let i = 0; i < player.deckOriginal.length; i++) {
            let col = Math.floor(i / 12)
            let row = i % 12
            let pos = [UI.battle.shop.textDeckStart[0] + UI.battle.shop.deckInterval[0] * col, UI.battle.shop.textDeckStart[1] + UI.battle.shop.deckInterval[1] * row]
            Render.fillTextUI(ctx, player.deckOriginal[i].name, pos)
        }
    }
}

class Item {
    constructor() {
        this.gold = 3
        this.content = null
    }

    setItem(type, ID) {
        if (type === 'card') {
            this.content = new Card()
            this.content.setData(ID)
            this.gold = this.content.level + 3
        }
    }
}