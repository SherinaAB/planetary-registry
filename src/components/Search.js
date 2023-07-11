import React from "react"

function Search({onFilterText}) {

    function handleSearch(event){
        onFilterText(event.target.value)
    }
    return (
        <div>
            <input type="text" onChange = {handleSearch} placeholder="Search..."/>
        </div>
    );
}

export default Search;