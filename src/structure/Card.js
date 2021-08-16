class Card {
    color = [] //if its cloud, mushroom, flower or star
    type = "" //if its a default card, item card, number card...
    value = -1 // ex. how many clouds are on the card (-1 is for !,? ; 0 for items)
    rank = -1 // the rank for the battlecard (-1 is unranked)
    imgURL = "" // img-file-url for the card

    constructor(color, type, value, rank, imgURL) {
        this.color = color ?? this.color;
        this.type = type ?? this.type;
        this.value = value ?? this.value;
        this.rank = rank ?? this.rank;
        this.imgURL = imgURL ?? this.imgURL;
    }
}

export default Card