import axios from "axios";
import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Api_Limit from "../../API/Apilimit.js";
import Mypokemon from "./Mypokemon";
import Spinner from "./Spinner.js";


export default class All extends Component {
  state = {
    url: Api_Limit,
    pokemon: [],
    itemsCountPerPage: 20,
    activePage: 1,
  };

  loadPokemon = () => {
  // Check if there is a URL to load next data
  if (!this.state.url) return;

  axios
    .get(this.state.url)
    .then((res) => {
      this.setState((prevState) => ({
        pokemon: [...prevState.pokemon, ...res.data.results],
        url: res.data.next, // Update the URL to load more data
      }));
    })
    .catch((error) => {
      console.error("Error fetching Pokémon data:", error);
    });
};

  
  render() {

    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="text-center" >
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadPokemon}
              hasMore={this.state.url}
              loader={<Spinner />}
            >
              {this.state.pokemon.map((pokemon, i) => (
                <>
                  <button key={i}>
                    <Mypokemon pop={pokemon} name={pokemon.name} />
                  </button>
                 
                </>
              ))}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}
