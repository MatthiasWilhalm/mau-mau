import tools from "../tools/tools"
import Card from "./Card"
import cardContent from "./CardContent"
import Player from "./Player"

class Game {
    player = []
    settings = null
    deck = []
    usedDeck = []
    currendPlayer = 0
    reversed = false
    currentColor = []
    currentType = null
    currentValue = -1

    /**
     * 
     * @param {Array<Player>} player 
     * @param {*} settings 
     * @param {Array<Card>} deck 
     * @param {Array<Card>} usedDeck 
     * @param {Number} currendPlayer
     * @param {Boolean} reversed
     */
    constructor(player, settings, deck, usedDeck, currendPlayer, reversed) {
        this.player = player ?? this.player;
        this.settings = settings ?? this.settings;
        this.deck = deck ?? this.deck;
        this.usedDeck = usedDeck ?? this.usedDeck;
        this.currendPlayer = currendPlayer ?? this.currendPlayer;
        this.reversed = !!reversed;
    }

    shuffleDeck = () => {
        this.deck = tools.shuffleArray(this.deck);
    }

    reshuffleUsedDeck = () => {
        let d = this.usedDeck.splice(0, this.usedDeck.length-1);
        d = tools.shuffleArray(d);
        d.concat(this.deck);
        this.deck = d;
    }

    deal = (playerId, amount) => {
        for (let i = 0; i < amount; i++) {
            let card = this.deck.pop();
            if(!card)
                throw Error("no more Cards left exception");
            player[playerId].cardDeck.push(card);   
        }
    }

    throwCard = (playerId, cardId) => {
        let card = this.player[playerId].cardDeck[cardId];
        if(!card) 
            throw Error("Card not available");
        this.usedDeck.push(card);
        this.player[playerId].cardDeck.splice(cardId,1);
        this.updateCurrentState();
    }

    updateCurrentState = () => {
        let l = this.usedDeck.length;
        let i = 1;
        do {
            if(l-i < 0) return;
            let card = this.usedDeck[l-i];
            if(card.type === cardContent.type.QMARK || card.type === cardContent.type.EMARK) return;
            this.currentColor = card.color.length===0 ? this.currentColor : card.color;
            this.currentValue = card.value;
            this.currentType = card.type ?? this.currentType;
            i++;
        } while (this.currentColor.length===0 || !this.currentType);
    }
}

export default Game