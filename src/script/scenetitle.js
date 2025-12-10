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
    }

    mouseUp(game, pos, button) {

    }
}
