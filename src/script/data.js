class Data {
    static card = {}
    static cardPlayed = {}
    static cardEffect = {}
    static cardDescription = {}
    static crystal = {}
    static equipment = {}
    static bookmark = {}

    static loadData() {
        Data.card = JSON.parse(JSON.stringify(dataCard))
        Data.cardPlayed = JSON.parse(JSON.stringify(dataCardPlayed))
        Data.cardEffect = JSON.parse(JSON.stringify(dataCardEffect))
        Data.cardDescription = JSON.parse(JSON.stringify(dataCardDescription))
        Data.crystal = JSON.parse(JSON.stringify(dataCrystal))
    }
}
