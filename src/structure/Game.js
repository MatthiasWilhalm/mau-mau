class Game {
    player = []
    settings = {}
    stack = []
    usedStack = []

    constructor(player, settings, stack, usedStack) {
        this.player = player;
        this.settings = settings;
        this.stack = stack;
        this.usedStack = usedStack;
    }
}

export default Game;