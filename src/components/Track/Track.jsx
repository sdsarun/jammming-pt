import { useState } from "react"
import "./Track.css"

export default function Track({ track, onAdd, onRemove, isRemoval }) {
    const { name, artist, album } = track;

    // const [isRemoval, setRemoval] = useState(false);
    function addTrack() {
        onAdd(track);
        console.log("Add new track.");
    }

    function removeTrack() {
        onRemove(track);
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{name}</h3>
                <p>{artist} | {album}</p>
            </div>
            <button className="Track-action" onClick={!isRemoval ? (e) => addTrack() : (e) => removeTrack()}>{!isRemoval ? "+" : "-"}</button>
        </div>
    )
}