import React, { Component } from "react";
import cloneDeep from "clone-deep";
import "./App.css";

import Films from "./assets/films";
import Episodes from "./Components/Films";
import Characters from "./Components/Characters";
import Arrow from "./Components/Arrow";

class App extends Component {
  state = {
    show_characters: false,
    episode: "",
    data: { ...Films }
  };

  rating = (id, ratingFilm) => {
    const parsedRating = parseInt(ratingFilm, 10);
    let clonedState = cloneDeep(this.state);
    clonedState.data.results[id - 1].rating.ratingsArr.push(parsedRating);

    const average = arr =>
      Math.round(arr.reduce((prev, curr) => prev + curr) / arr.length);
    clonedState.data.results[id - 1].rating.ratingAvg = average(
      clonedState.data.results[id - 1].rating.ratingsArr
    );

    this.setState({ data: clonedState.data });
  };

  showChar = episode_name => {
    let clonedState = cloneDeep(this.state);
    clonedState.show_characters = true;
    const ep = this.state.data.results.find(ep => ep.title === episode_name);
    clonedState.episode = ep;
    this.setState({
      show_characters: clonedState.show_characters,
      episode: clonedState.episode
    });
  };

  return = () => {
    let clonedState = cloneDeep(this.state);
    clonedState.show_characters = false;
    this.setState({ show_characters: clonedState.show_characters });
  };

  render() {
    let clonedState = cloneDeep(this.state);
    return (
      <div className="App">
        <div className="content">
          <div className="main_content">
            <div className="showEpisodes">
              {this.state.data.results.map(item => {
                return (
                  <Episodes
                    key={item.id}
                    filmInfo={item}
                    func={this.showChar}
                    rate={item.rating.ratingsArr.length}
                  />
                );
              })}
            </div>
            {clonedState.show_characters === false ? null : (
              <div className="characters_container">
                <Arrow r={this.return} />
                <Characters 
                  filmInfo={this.state.episode} 
                  selec={this.rating}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
