class SceneBattle {
    constructor(game) {
        if (game.loaded === false) {
            game.state = 'shop'
        }
        game.menu = false

        this.windowMenu = new WindowMenu()
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
}