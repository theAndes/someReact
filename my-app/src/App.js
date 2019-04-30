import React, { Component } from "react";
import LandCard from "./components/landCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import land from "./land.json";

class App extends Component {
  // Setting this.state.land to the land json array
  state = {
    land
  };

  selectedLand = id => {
    // Filter this.state.land for land with an id not equal to the id being removed
    const land = this.state.land.filter(land => land.id !== id);
    // Set this.state.land equal to the new land array
    this.setState({ land });
  };

  // Map over this.state.land and render a landCard component for each land object
  render() {
    return (
      <Wrapper>
        <Title>Land List</Title>
        {this.state.land.map(land => (
          <LandCard
            selectedLand={this.selectedLand}
            id={land.id}
            key={land.id}
            name={land.name}
            image={land.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
