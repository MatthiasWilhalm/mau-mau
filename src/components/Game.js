import cards from "../data/cards.json"

const Game = () => {
    return (
        <div>
            <h1>Game</h1>
            <div className="carddeck">
                {cards.map(card => 
                    <div className="card">
                        <h3>{card.color.length>0 ? card.color.map(a => 
                            a + " "
                        ):"_"}</h3>
                        <h3>{card.type || "_"}</h3>
                        <h3>{(card.value!==-1 && card.value!==0)?card.value:"_"}</h3>
                    </div>    
                )}
            </div>
        </div>

    );
}

export default Game