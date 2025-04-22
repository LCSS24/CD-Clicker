import { useState } from "react";
import imagecd from "../../assets/images/cd-311951.svg";
import note1 from "../../assets/images/notes/note1.svg";
import note2 from "../../assets/images/notes/note2.svg";
import note3 from "../../assets/images/notes/note3.svg";
import note4 from "../../assets/images/notes/note4.svg";
import fond1 from "../../assets/images/reve-image.jpeg";
import "./ClickArea.css";

function ClickArea() {
    const [fans, setFans] = useState(0);
    const notes = [note1, note2, note3, note4];
    const [spawnedNotes, setSpawnedNotes] = useState([]);

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
            <span className="fans">{fans}</span>
            <div className="cd-click" onClick={(e) => { setFans(fans + 1); creerNotes(e); }}>
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
