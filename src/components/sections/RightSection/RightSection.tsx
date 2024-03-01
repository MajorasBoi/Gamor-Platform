export const RightSection = () => {
    return (
        <div className='container right'>
            <label htmlFor="selector">
                <h4>Choose a platform</h4>
                <select className="selector" id="selector">
                    <option value="Party">Party</option>
                    <option value="Matchs">Matchs</option>
                    <option value="Streams">Streams</option>
                </select>
            </label>
            <label htmlFor="search-bar">
                <h4>Search Game</h4>
                <div className="search-container">
                    <input id="search-bar" type="text" placeholder="Call of Duty Warzone" />
                    <div className="search-results">
                        {/* Add your search results list here */}
                    </div>
                    <button>Search Now</button>
                </div>
            </label>
        </div>
    )
}
