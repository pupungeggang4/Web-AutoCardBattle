class SceneCollection {
    constructor(game) {

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
        Render.strokeRectUI(ctx, UI.battle.buttonMenu)
    }

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (Util.pointInsideRectUI(pos, UI.collection.buttonBack)) {
                game.scene = new SceneTitle(game)
            }
        }
    }
}