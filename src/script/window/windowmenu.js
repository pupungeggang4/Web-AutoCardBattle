class WindowMenu extends WindowUI {
    constructor() {
        super()
    }

    render(ctx) {
        Render.init(this.ctx)
        Render.clearCanvas(this.canvas, this.ctx)
        this.ctx.fillStyle = 'white'
        Render.fillRectUI(this.ctx, UI.menu.rect)
        Render.strokeRectUI(this.ctx, UI.menu.rect)
        this.ctx.fillStyle = 'black'

        Render.fillTextUI(this.ctx, 'Paused', UI.menu.textPaused)
        Render.strokeRectUI(this.ctx, UI.menu.buttonResume)
        Render.fillTextUI(this.ctx, 'Resume', UI.menu.textResume)
        Render.strokeRectUI(this.ctx, UI.menu.buttonSaveAndExit)
        Render.fillTextUI(this.ctx, 'Save and exit', UI.menu.textSaveAndExit)
        Render.strokeRectUI(this.ctx, UI.menu.buttonSurrenderAndExit)
        Render.fillTextUI(this.ctx, 'Surrender and exit', UI.menu.textSurrenderAndExit)
        ctx.drawImage(this.canvas, 0, 0)
    }
}