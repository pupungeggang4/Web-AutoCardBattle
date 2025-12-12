class Crystal {
    constructor() {
        this.ID = 0
        this.name = ''
        this.played = []
        this.description = []
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(Data.crystal[ID]))
        this.ID = ID
        this.name = data['name']
        this.played = data['played']
        this.description = data['description']
    }

    clone(ID) {
        let crystal = new Crystal()
        crystal.ID = this.ID
        crystal.name = this.name
        crystal.played = JSON.parse(JSON.stringify(this.played))
        crystal.description = JSON.parse(JSON.stringify(this.description))
    }
}
