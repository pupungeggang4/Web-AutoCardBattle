class Player {
    constructor() {
        this.life = 5
        this.gold = 0
        this.gem = 0
        this.deckOriginal = []
        this.crystalOriginal = []

        this.item = []
        this.equipment = []
    }

    startAdventure() {
        this.life = 5
        this.gold = 0
        this.gem = 0
        this.deckOriginal = []
        this.crystalOriginal = []

        let startDeck = [1, 1, 1, 2, 2, 2]
        let startCrystal = [1, 1, 1, 1, 1, 1, 1, 1]
        for (let i = 0; i < startDeck.length; i++) {
            let card = new Card()
            card.setData(startDeck[i])
            this.deckOriginal.push(card)
        }
        for (let i = 0; i < startCrystal.length; i++) {
            let crystal = new Crystal()
            crystal.setData(startCrystal[i])
            this.crystalOriginal.push(crystal)
        }
    }
}
