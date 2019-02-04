import React, { Component } from "react";
import DogCard from "../Components/DogCard";

class DogList extends Component {

  allDogs = () => {
    const slayers = this.props.dogs.map(dog => < DogCard key={dog.id} dog={dog} />)
    return slayers
  }

  render() {
    

    return <div className="dogContainer">{this.allDogs()}</div>;
  }
}

export default DogList;
