import TrackList from "../TrackList/TrackList"
import "./SearchResults.css"

export default function SearchResults({ searchResults }) {
    // console.log("SearchResults :", searchResults);
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={searchResults}/>
        </div>
    )
}