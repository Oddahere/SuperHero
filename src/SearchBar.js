import React, {useState} from 'react';


//insert the super hero name here
function SearchBar(props){
    const {handleChange, searchText} = props;

    return(
        <div>
            <input
            id="search-bar" //making the search bar
            type="search" 
            placeholder="Insert superhero name" //shows in the middle before clicking the search bar
            onChange={handleChange}
            value={searchText}
            />
        </div>
    );
}

export default SearchBar;