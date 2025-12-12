class Card {
    constructor() {
        this.ID = 0
        this.name = ''
        this.type = ''
        this.rarity = 0
        this.element = ''
        this.stat = [0, 0]
        this.played = []
        this.effect = []
        this.description = []
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(Data.card[ID]))
        let dataP = JSON.parse(JSON.stringify(Data.cardPlayed[ID]))
        let dataE = JSON.parse(JSON.stringify(Data.cardEffect[ID]))
        let dataD = JSON.parse(JSON.stringify(Data.cardDescription[ID]))
        this.ID = ID
        this.name = data['name']
        this.type = data['type']
        this.rarity = data['rarity']
        this.element = data['element']
        this.stat = data['stat']
        this.played = dataP
        this.effect = dataE
        this.description = dataD
    }

    clone() {
        let card = new Card()
        card.ID = this.ID
        card.name = this.name
        card.type = this.type
        card.rarity = this.rarity
        card.element = this.element
        card.stat = JSON.parse(JSON.stringify(this.stat))
        card.played = JSON.parse(JSON.stringify(this.played))
        card.effect = JSON.parse(JSON.stringify(this.effect))
        card.description = JSON.parse(JSON.stringify(this.description))
        return card
    }
}
