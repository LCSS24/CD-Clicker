import { useState } from "react";
import Item from "./Item/Item";
import { storeItems } from "./storeItems";

function Store({ fans, setFans, passiveFans, setPassiveFans, money, setMoney }) {

    const [isBuyable, setIsBuyable] = useState(false)

    return (
        <div className="store">
            <div className="boutonsbuy">
                <button>
                    Acheter { } fois
                </button>

            </div>
            {storeItems.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    fansCost={item.fansCost}
                    price={item.price}
                    fansPerSecond={item.fansPerSecond}
                    description={item.description} // Nouvelle prop
                    fans={fans}
                    setFans={setFans}
                    passiveFans={passiveFans}
                    setPassiveFans={setPassiveFans}
                    money={money}
                    setMoney={setMoney}
                    isBuyable={isBuyable}
                    setIsBuyable={setIsBuyable}
                />
            ))}
        </div>
    );
}

export default Store;
