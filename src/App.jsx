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
                  />
                );
              })}
            </div>
            {clonedState.show_characters === false ? null : (
              <div className="characters_container">
                <Arrow r={this.return} />
                <Characters filmInfo={this.state.episode} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
