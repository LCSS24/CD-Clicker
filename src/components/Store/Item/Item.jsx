
import { useState } from "react";
import "./Item.css"

function Item({ name, fansCost, fansPerSecond, description, fans, setFans, passiveFans, setPassiveFans, price, money, setMoney, isBuyable, setIsBuyable }) {

    const [qt, setQt] = useState(0)
    const handleBuy = () => {
        if (money >= price) {
            setPassiveFans((prev) => prev + fansPerSecond);
            setMoney((prev) => prev - price)
            setQt(prevQt => prevQt + 1)
        }
    };

    return (
        <div className="store-item">
            <div className="contenu">
                <h3>{name}</h3>
                <p>{description}</p> {/* Affiche la description */}
                <p>Fans requis : {fansCost}</p>
                <p>Prix : {price} €</p>
                <p>Génère actuellement : {fansPerSecond * qt} fans/sec</p>
                <p>Acheté : {qt} fois</p>
            </div>
            <button className={money >= price ? "buyable" : ""} onClick={handleBuy}>Acheter</button>
        </div >
    );
}

export default Item;