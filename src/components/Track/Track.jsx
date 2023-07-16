import { useState } from "react"
import "./Track.css"

export default function Track({ track }) {
    const { name, artist, album } = track;

    const [isRemoval, setRemoval] = useState(false);

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{name}</h3>
                <p>{artist} | {album}</p>
            </div>
            <button className="Track-action">{!isRemoval ? "+" : "-"}</button>
        </div>
    )
}