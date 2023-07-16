import TrackList from "../TrackList/TrackList"
import "./Playlist.css"

export default function Playlist({playlistName, playlistTracks}) {
    console.log(playlistName);
    console.log(playlistTracks);
    return (
        <div className="Playlist">
            <input defaultValue="New Playlist" />
            {/* <TrackList /> */}
            <TrackList tracks={playlistTracks} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}