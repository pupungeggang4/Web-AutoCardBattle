class Adventure {
    constructor() {
        this.layout = []
        this.floor = 0
        this.shop = new AdventureShop()
    }

    generateLayout() {
        this.layout = []
        for (let i = 0; i < 30; i++) {
            if (i % 10 === 0 || i % 10 === 3 || i % 10 === 6) {
                this.layout.push(['battle', 'battle', 'battle'])
            } else if (i % 10 === 9) {
                this.layout.push(['boss', 'boss', 'boss'])
            } else if (i % 10 === 8) {
                this.layout.push(['big_shop', 'big_shop', 'big_shop'])
            } else if (i % 10 === 2 || i % 10 === 5){
                let itemList = ['battle', 'elite', 'shop', 'event']
                let temp = []
                for (let i = 0; i < 3; i++) {
                    let itemIndex = Math.floor(Math.random() * 4)
                    temp.push(itemList[itemIndex])
                }
                this.layout.push(temp)
            } else {
                let itemList = ['battle', 'shop', 'event']
                let temp = []
                for (let i = 0; i < 3; i++) {
                    let itemIndex = Math.floor(Math.random() * 3)
                    temp.push(itemList[itemIndex])
                }
                this.layout.push(temp)
            }
        }
    }
}

class AdventureShop {

}
