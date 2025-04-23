import note1 from "../../assets/images/notes/note1.svg";
import note2 from "../../assets/images/notes/note2.svg";
import note3 from "../../assets/images/notes/note3.svg";
import note4 from "../../assets/images/notes/note4.svg";
import imagecd from "../../assets/images/cd-311951.svg";
import fond1 from "../../assets/images/reve-image.jpeg";
import "./ClickArea.css";
import { useState } from "react";

function ClickArea({ fans, setFans, passiveFans, money, setMoney }) {
    const notes = [note1, note2, note3, note4];
    const [spawnedNotes, setSpawnedNotes] = useState([]);
    let successRate = 1; // Chance de gagner un fan au click (de 0 à 1)


    // Créé des notes de musique au click sur le CD
    const creerNotes = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        const id = Date.now();

        setSpawnedNotes((prev) => [
            ...prev,
            { id, src: randomNote, x: clickX, y: clickY }
        ]);

        setTimeout(() => {
            setSpawnedNotes((prev) => prev.filter((note) => note.id !== id));
        }, 1000);
    };

    return (
        <section className="clickarea">
            <p className="fans">
                <span>{Math.floor(fans)}</span> fans
            </p>
            <p><span>{passiveFans.toFixed(1)}</span> teubs par seconde</p>
            <p>Balance actuelle: <span>{money.toFixed(2)}</span> €</p>
            <div
                className="cd-click"
                onClick={(e) => {
                    if (Math.random() <= successRate) {
                        setFans((prevFans) => prevFans + 1);
                    }

                    creerNotes(e);
                    // void e.currentTarget.offsetWidth;
                    // if (e.currentTarget.classList.contains("plus")) {
                    //     setTimeout(() => { e.currentTarget.classList.remove("plus") }, 50);
                    //     e.currentTarget.classList.add("plus");
                    // }
                    // else {
                    //     e.currentTarget.classList.add("plus");
                    // }
                    // setTimeout(() => { e.currentTarget.classList.remove("plus") }, 50);

                    const target = e.currentTarget;

                    // Retire la classe au cas où elle est encore là (clics rapides)
                    target.classList.remove("plus");

                    // Force un reflow pour que l'animation redémarre
                    void target.offsetWidth;

                    // Ajoute la classe
                    target.classList.add("plus");

                    // Et la retire après 800ms
                    setTimeout(() => {
                        target.classList.remove("plus");
                    }, 50);
                }}
            >
                {/* Apparition des notes de musique*/}
                {spawnedNotes.map((note) => (
                    <img
                        key={note.id}
                        src={note.src}
                        alt="Note de musique"
                        className="note spawned"
                        style={{ left: `${note.x}px`, top: `${note.y}px` }}
                    />
                ))}
                <img src={imagecd} alt="CD" className="cd" />
            </div>

            <img src={fond1} alt="" className="fond" />
        </section>
    );
}

export default ClickArea;
