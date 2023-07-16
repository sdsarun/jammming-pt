import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({ onSearch }) {
    const [searchText, setSearchText] = useState("");

    function search() {
        onSearch(searchText);
    }

    function handleSongSearchChange(e) {
        setSearchText(e.target.value);
    }

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleSongSearchChange} value={searchText} />
            <button className="SearchButton" onClick={() => search()}>SEARCH</button>
        </div>
    )
}