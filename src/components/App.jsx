import { useState } from 'react'

import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

import "./App.css"
import useSpotify from '../util/useSpotify';

function App() {
  const { token, authorization, query, save } = useSpotify();

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrack(track) {
    let isDuplipcateTrack = playlistTracks.find(savedTrack => savedTrack.id === track.id);
    if (isDuplipcateTrack) return;

    setPlaylistTracks(prev => {
      return [
        ...prev,
        track
      ]
    })
  }

  function removeTrack(track) {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id != track.id));
  }

  function updatePlaylistName(name) {
    setPlaylistName(name.trim());
  }

  /**
   * Generates an array of uri values called trackURIs from the playlistTracks property.
   * In a later step, you will pass the trackURIs array and playlistName to a method that will save the user’s playlist to their account.
   */
  async function savePlaylist() {
    const trackURIs = [];
    for (let i = 0; i < playlistTracks.length; i++) {
      let { uri } = playlistTracks[i];
      trackURIs.push(uri);
    }
    save(playlistName ?? "Test Playlist", trackURIs);
  }

  /**
   * Allows a user to enter a search parameter, receives a response from the Spotify API, and updates the searchResults state with the results from a Spotify request.
   */
  async function search(songSearch) {
    if (!songSearch) return;
    const rs = await query(songSearch);
    setSearchResults(rs);
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      {!token ? <button onClick={() => authorization()}>Login</button> : <h1>I'm in!</h1>}
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} />
        </div>
      </div>
    </div>
  )
}

export default App
