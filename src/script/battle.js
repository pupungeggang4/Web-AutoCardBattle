class Battle {
    constructor() {
        this.player = new BattlePlayer()
        this.enemy = new BattlePlayer()
        this.field = [null, null, null, null, null, null, null, null, null, null]
        this.turnWho = 0
        this.turnNum = 0
    }    
}
