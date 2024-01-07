import React from 'react';
 
function SearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for GFG Products..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}
 
export default SearchComponent;
