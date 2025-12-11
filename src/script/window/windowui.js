class WindowUI {
    constructor() {
        this.canvas = document.createElement('canvas')
        this.canvas.width = 1280
        this.canvas.height = 720
        this.ctx = this.canvas.getContext('2d')
    }
}