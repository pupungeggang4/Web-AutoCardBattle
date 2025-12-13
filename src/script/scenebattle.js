class SceneBattle {
    constructor(game) {
        if (game.loaded === false) {
            game.adventure.startAdventure()
            game.player.startAdventure()
            game.state = 'next'
        }
        game.selectedNext = -1
        game.menu = false

        this.windowMenu = new WindowMenu()
        this.windowNext = new WindowNext()
    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        let ctx = game.ctx
        let canvas = game.canvas
        Render.init(ctx)
        Render.clearCanvas(canvas, ctx)
        Render.fillCanvas(canvas, ctx)
        Render.strokeRectUI(ctx, UI.collection.buttonBack)

        if (game.state === 'next') {
            this.windowNext.render(game)
        } else if (game.state === 'shop') {
            Render.renderShop(game)
        }

        if (game.menu === true) {
            this.windowMenu.render(ctx)
        }
    }

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (Util.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = true
                }
                if (game.state === 'next') {
                    this.handleMouseNext(game, pos)
                }
            } else {
                if (Util.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = false
                } else if (Util.pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (Util.pointInsideRectUI(pos, UI.menu.buttonSaveAndExit)) {
                    game.scene = new SceneTitle(game)
                } else if (Util.pointInsideRectUI(pos, UI.menu.buttonSurrenderAndExit)) {
                    game.scene = new SceneTitle(game)
                }
            }
        }
    }

    handleMouseNext(game, pos) {
        for (let i = 0; i < 3; i++) {
            if (Util.pointInsideRectUI(pos, UI.windowNext.item[i])) {
                game.selectedNext = i
            }
        }
        if (Util.pointInsideRectUI(pos, UI.windowNext.buttonStart)) {
            if (game.selectedNext != -1) {
                game.state = 'shop'
            }
        }
    }
}
