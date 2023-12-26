import React from 'react';
import SearchHeros from './SearchHeros';


//shows the super hero results


function SearchResults(props) {
  const {superheroData = []} = props;

  console.log('superheroData', superheroData);
  return (
    <div>
      {superheroData.map(superhero =>
        <SearchHeros data={superhero} />
      )}
    </div>
  );
}

export default SearchResults;