class SceneTitle {
    constructor(game) {

    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        Render.fillTextUI(game.ctx, "Auto Card Battle", UI.title.textTitle)

        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, "Start Game", UI.title.textStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonLoad)
        Render.fillTextUI(game.ctx, "Load Game", UI.title.textLoad)
        Render.strokeRectUI(game.ctx, UI.title.buttonTutorial)
        Render.fillTextUI(game.ctx, "Tutorial", UI.title.textTutorial)
        Render.strokeRectUI(game.ctx, UI.title.buttonCollection)
        Render.fillTextUI(game.ctx, "Collection", UI.title.textCollection)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.fillTextUI(game.ctx, "Erase Data", UI.title.textErase)
    }

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (Util.pointInsideRectArray(pos, UI.title.buttonStart)) {
                game.scene = new SceneBattle(game)
                game.loaded = false
            } else if (Util.pointInsideRectArray(pos, UI.title.buttonCollection)) {
                game.scene = new SceneCollection(game)
            }
        }
    }
}
