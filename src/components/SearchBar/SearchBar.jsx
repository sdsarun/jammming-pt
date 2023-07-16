import { useEffect, useState } from "react";
import "./SearchBar.css"

export default function SearchBar({ onSearch }) {
    const [searchText, setSearchText] = useState("");

    function search(e) {
        e.preventDefault();
        onSearch(searchText);
    }

    function handleSongSearchChange(e) {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        console.log("Start side effect");
        let timeoutId = setTimeout(() => {
            onSearch(searchText);
        }, 500);
        return () => {
            clearTimeout(timeoutId);
            console.log("Clean Up");
        }
    }, [searchText])

    return (
        <div className="SearchBar">
            <form onSubmit={search}>
                <input placeholder="Enter A Song, Album, or Artist" onChange={handleSongSearchChange} value={searchText} />
            </form>
        </div>
    )
}