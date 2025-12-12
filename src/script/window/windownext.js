class WindowNext extends WindowUI {
    constructor() {
        super()
    }

    render(game) {
        let ctx = game.ctx
        Render.init(this.ctx)
        Render.clearCanvas(this.canvas, this.ctx)

        this.ctx.fillStyle = 'white'
        Render.fillRectUI(this.ctx, UI.windowNext.rect)
        Render.strokeRectUI(this.ctx, UI.windowNext.rect)
        this.ctx.fillStyle = 'black'

        Render.fillTextUI(this.ctx, 'Select next', UI.windowNext.textTitle)

        for (let i = 0; i < 3; i++) {
            Render.strokeRectUI(this.ctx, UI.windowNext.item[i])
        }

        Render.strokeRectUI(this.ctx, UI.windowNext.buttonStart)
        Render.fillTextUI(this.ctx, "Start", UI.windowNext.textStart)
        ctx.drawImage(this.canvas, 0, 0)
    }
}
