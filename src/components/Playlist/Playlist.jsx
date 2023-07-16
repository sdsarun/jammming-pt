import TrackList from "../TrackList/TrackList"
import "./Playlist.css"

export default function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {
    function handleNameChange(e) {
        let newPlaylistName = e.target.value.trim();
        onNameChange(newPlaylistName);
    }

    return (
        <div className="Playlist">
            <input placeholder={"Playlist name"} onChange={handleNameChange} value={playlistName} />
            <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
            <button className="Playlist-save" onClick={() => onSave()}>SAVE TO SPOTIFY</button>
        </div>
    )
}