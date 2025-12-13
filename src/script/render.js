class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'black'
    }

    static renderShop(game) {
        let ctx = game.ctx
        let player = game.player
        Render.drawImageUI(ctx, Img.gold, UI.battle.shop.iconPlayerGold)
        Render.fillTextUI(ctx, `${player.gold}`, UI.battle.shop.textPlayerGold)

        for (let i = 0; i < 6; i++) {
            let rect = [UI.battle.shop.itemStart[0] + UI.battle.shop.itemInterval[0] * i, UI.battle.shop.itemStart[1], UI.battle.shop.itemSize[0], UI.battle.shop.itemSize[1]]
            let iconCoinPos = [UI.battle.shop.iconItemGold[0] + UI.battle.shop.itemInterval[0] * i, UI.battle.shop.iconItemGold[1]]
            let textLevelPos = [UI.battle.shop.textItemLevel[0] + UI.battle.shop.itemInterval[0] * i, UI.battle.shop.textItemLevel[1]]
            let textGoldPos = [UI.battle.shop.textItemGold[0] + UI.battle.shop.itemInterval[0] * i, UI.battle.shop.textItemGold[1]]
            Render.strokeRectUI(ctx, rect)
            Render.fillTextUI(ctx, 'L1', textLevelPos)
            Render.drawImageUI(ctx, Img.gold, iconCoinPos)
            Render.fillTextUI(ctx, '3', textGoldPos)
        }

        Render.strokeRectUI(ctx, UI.battle.shop.buttonReroll)
        Render.drawImageUI(ctx, Img.buttonreroll, UI.battle.shop.buttonReroll)
        Render.drawImageUI(ctx, Img.gold, UI.battle.shop.iconGoldReroll)
        Render.fillTextUI(ctx, '1', UI.battle.shop.textGoldReroll)
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

    static clearCanvas(canvas, ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    static fillCanvas(canvas, ctx) {
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'black'
    }

    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }
    
    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillRectUI(ctx, rect) {
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
    }

    static drawImageUI(ctx, image, pos) {
        ctx.drawImage(image, pos[0], pos[1])
    }
}
