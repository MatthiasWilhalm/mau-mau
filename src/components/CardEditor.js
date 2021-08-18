import { useState } from "react";
import Card from "../structure/Card";
import cardContent from "../structure/CardContent";

const CardEditor = () => {

    const [output, setOutput] = useState("");

    const generateCards = () => {
        const colors = Object.keys(cardContent.color);
        const items = [];
        Object.keys(cardContent.type).slice(4,Object.keys(cardContent.type).length).map(a => {
            items.push(cardContent.type[a]);
        });
        const itemsRaw = items.slice(2,items.length); // no super bomb

        console.log(items);
        console.log(itemsRaw);

        let cards = [];
        let rank = 1;
        itemsRaw.unshift(items[0]);

        // ?-Cards
        for (let i = 0; i < 5; i++) {
            cards.push(new Card(null, cardContent.type.QMARK, null, null, ""));
        }
        
        // !-Cards
        for (let i = 0; i < 5; i++) {
            cards.push(new Card(null, cardContent.type.EMARK, null, null, ""));
        }

        // all items
        for (let i = 0; i < itemsRaw.length; i++) {
            cards.push(new Card(null, itemsRaw[i], 0, null, ""));
        }



        // cloud items
        for (let i = 0; i < itemsRaw.length; i++) {
            cards.push(new Card(cardContent.color.CLOUD, itemsRaw[i], 0, rank, ""));
            rank++;
        }

        // numbers clouds
        cards.push(new Card(cardContent.color.CLOUD, cardContent.type.NUMBER, 1, rank, ""));
        rank++;
        cards.push(new Card(cardContent.color.CLOUD, cardContent.type.NUMBER, 2, rank, ""));
        rank++;

        // default cloud
        for (let i = 1; i < 11; i++) {
            cards.push(new Card(cardContent.color.CLOUD, cardContent.type.DEFAULT, i, rank, ""));
            rank++;
        }



        // mushroom items
        for (let i = 0; i < items.length; i++) {
            if(items[i]===cardContent.type.SUPER_BOMB) {
                console.log("super bomb");
                cards.push(new Card([cardContent.color.CLOUD, cardContent.color.MUSHROOM], items[i], 0, rank, ""));
            }
            else
                cards.push(new Card(cardContent.color.MUSHROOM, items[i], 0, rank, ""));
            rank++;
        }

        // numbers mushrooms
        cards.push(new Card(cardContent.color.MUSHROOM, cardContent.type.NUMBER, 3, rank, ""));
        rank++;
        cards.push(new Card(cardContent.color.MUSHROOM, cardContent.type.NUMBER, 4, rank, ""));
        rank++;

        // default mushroom
        for (let i = 1; i < 11; i++) {
            cards.push(new Card(cardContent.color.MUSHROOM, cardContent.type.DEFAULT, i, rank, ""));
            rank++;
        }


        
        // items flower
        for (let i = 0; i < itemsRaw.length; i++) {
            cards.push(new Card(cardContent.color.FLOWER, itemsRaw[i], 0, rank, ""));
            rank++;
        }

        // numbers flower
        cards.push(new Card(cardContent.color.FLOWER, cardContent.type.NUMBER, 5, rank, ""));
        rank++;
        cards.push(new Card(cardContent.color.FLOWER, cardContent.type.NUMBER, 6, rank, ""));
        rank++;
        cards.push(new Card(cardContent.color.FLOWER, cardContent.type.NUMBER, 7, rank, ""));
        rank++;

        // default flowers
        for (let i = 1; i < 11; i++) {
            cards.push(new Card(cardContent.color.FLOWER, cardContent.type.DEFAULT, i, rank, ""));
            rank++;
        }



        // star items
        for (let i = 0; i < items.length; i++) {
            if(items[i]===cardContent.type.SUPER_BOMB)
                cards.push(new Card([cardContent.color.FLOWER, cardContent.color.STAR], items[i], 0, rank, ""));
            else
                cards.push(new Card(cardContent.color.STAR, items[i], 0, rank, ""));
            rank++;
        }

        // numbers star
        cards.push(new Card(cardContent.color.STAR, cardContent.type.NUMBER, 8, rank, ""));
        rank++;
        cards.push(new Card(cardContent.color.STAR, cardContent.type.NUMBER, 9, rank, ""));
        rank++;
        cards.push(new Card(cardContent.color.STAR, cardContent.type.NUMBER, 10, rank, ""));
        rank++;

        
        // default stars
        for (let i = 1; i < 11; i++) {
            cards.push(new Card(cardContent.color.STAR, cardContent.type.DEFAULT, i, rank, ""));
            rank++;
        }

        return JSON.stringify(cards);

    }

    return (
        <div>
            <h1>Editor</h1>

            <textarea>
                  {generateCards()}
            </textarea>

            {/* <h3>Color</h3>
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
            <input type="text"></input> */}

        </div>
    );    
}

export default CardEditor