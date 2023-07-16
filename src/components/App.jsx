import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

import { useState } from 'react'
import "./App.css"

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Sarun Daunghirun",
      artist: "Sarun",
      album: "SADBOY"
    },
    {
      id: 2,
      name: "Jason Lopez",
      artist: "Jason",
      album: "Lonely boys"
    }
  ]);

  const [playlistName, setPlaylistName] = useState("/vibe");

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 1,
      name: "Sarun Daunghirun",
      artist: "Sarun",
      album: "SADBOY"
    },
    {
      id: 2,
      name: "Jason Lopez",
      artist: "Jason",
      album: "Lonely boys"
    }
  ]);

  function addTrack(track) {
    
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults}  />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
        </div>
      </div>
    </div>
  )
}

export default App
