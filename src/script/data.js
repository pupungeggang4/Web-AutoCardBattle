class Data {
    static card = {}
    static equipment = {}
    static bookmark = {}

    static loadData() {
        Data.card = JSON.parse(JSON.stringify(dataCard))
    }
}
