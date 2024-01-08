import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';

function SearchHeros(props) {
  const {data} = props;

  //i used this to code the stats and biography
  //https://www.superheroapi.com

  //shows the full name at "data.biography['full-name']"
  //stats are for fun


  //the aliases will show at the bottom under the stats (under combat)
  //https://xyzcoding.com/course/js-fundamentals/json/objects-inside-of-objects/

  //extra credit - "<img src={data.image.url} alt="super pic"/>
  console.log('data', data);
  return (
    <div className="search-result">
      <div className="left">
        <img src={data.image.url} alt="super heros"/>
      </div>
      <div className="right">
        <h1>{data.name}</h1>
        <span style={{ color:'black', fontSize:25, marginBottom: 1}}>{data.biography['full-name']}</span>
        <div className="stats">
          <div><br></br>Id: {data.id}</div>
          <div>Intelligence: {data.powerstats.intelligence}</div>  
          <div>Strength: {data.powerstats.strength}</div>
          <div>Speed: {data.powerstats.speed}</div>
          <div>Durability: {data.powerstats.durability}</div>
          <div>Power: {data.powerstats.power}</div>
          <div>Combat: {data.powerstats.combat}</div>
          <div><br></br></div>
          <div>Aliases: <br></br>{data.biography.aliases[1]}</div>
          <div>{data.biography.aliases[2]}</div>
          <div>{data.biography.aliases[3]}</div>
          <div>{data.biography.aliases[4]}</div>
          <div>{data.biography.aliases[5]}</div>
          </div>
      </div>
  </div>
  );
}

//export
export default SearchHeros;
