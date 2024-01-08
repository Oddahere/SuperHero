import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

//connects to the sueprhero api with Facebook access token  
  async function searchSuperHeroes () {
    const response = await fetch(`https://www.superheroapi.com/api.php/5439604796054986/search/${searchText}`);
    const data = await response.json();
    console.log("searchSuperHeroes -> data", data)

    setSuperheroData(data.results);
  }

  function handleChange (e) {
    const searchTerm = e.target.value;
    
    //setting the search term for heros

    //if the hero is = 0, nothing will show up
    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    //if the search box has more than 1 letters, it will pop up the hero related to the search
    if (searchTerm.length > 1) {
      searchSuperHeroes();
    }
  }

  //search
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResults superheroData={superheroData} />
      </div>
    </div>
  );
}

export default App;