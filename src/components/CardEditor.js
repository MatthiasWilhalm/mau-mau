import cardContent from "../structure/CardContent";

const CardEditor = () => {
    return (
        <div>
            <h1>Editor</h1>

            <h3>Color</h3>
            <div>
                {Object.keys(cardContent.color).map(a => 
                    <div>
                        <input value={cardContent.color[a]} type="checkbox"></input>
                        <label>{a}</label>
                    </div>
                )}
            </div>

            <label>Type</label>
            <select>
                {Object.keys(cardContent.type).map(a => 
                    <option value={cardContent.type[a]}>{a}</option>
                )}
            </select>
            
            <br></br>

            <label>Value</label>
            <input type="number"></input>

            <br></br>

            <label>Rank</label>
            <input type="number"></input>

            <br></br>

            <label>ImgUrl</label>
            <input type="text"></input>

        </div>
    );    
}

export default CardEditor