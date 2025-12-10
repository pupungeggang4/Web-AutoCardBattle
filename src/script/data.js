class Data {
    static card = {}
    static loadData() {
        Data.card = JSON.parse(JSON.stringify(dataCard))
    }
}