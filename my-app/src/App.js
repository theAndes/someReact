import React, { Component } from "react";
import LandCard from "./components/landCard";
import Title from "./components/Title";
import NavBar from "./components/NavBar"
import Wrapper from "./components/Wrapper";
import land from "./land.json";

class App extends Component {
  // Setting this.state.land to the land json array
  state = {
    land
  };

  selectedLand = id => {
    // Filter this.state.land for land with an id not equal to the id being removed
    const value = true;
    // Set this.state.land equal to the new land array
    this.setState({
      land,
      ['selected']: value,
    });
  };

  // Map over this.state.land and render a landCard component for each land object
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Title />
        <Wrapper>

          {this.state.land.map(land => (
            <LandCard
              selectedLand={this.selectedLand}
              id={land.id}
              key={land.id}
              name={land.name}
              image={land.image}
              selected={land.selected}
            />

          ))}

        </Wrapper>

      </React.Fragment>
    );
  }
}

export default App;
