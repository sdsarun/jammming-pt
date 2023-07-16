import Track from "../Track/Track";
import "./TrackList.css"

export default function TrackList({ tracks, onAdd, onRemove, isRemoval }) {
    // console.log("TrackList :", tracks);
    // console.log("TrackList :", props);
    return (
        <div className="TrackList">
            {tracks.map(track  => <Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval} />)}
        </div>
    )    
}