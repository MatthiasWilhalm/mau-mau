import Card from "./Card";

class Player {
    name = ""
    cardDeck = []

    /**
     * 
     * @param {String} name 
     * @param {Array<Card>} cardDeck 
     */
    constructor(name, cardDeck) {
        this.name = name ?? this.name;
        this.cardDeck = cardDeck ?? this.cardDeck;
    }
}

export default Player