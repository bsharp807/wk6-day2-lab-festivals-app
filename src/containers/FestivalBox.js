import React, { Component } from 'react';
import FestivalList from '../components/FestivalList';
import FestivalForm from '../components/FestivalForm';
import './FestivalBox.css';

class FestivalBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    this.handleFestivalSubmit = this.handleFestivalSubmit.bind(this);
  }

  handleFestivalSubmit(newFest) {
    const updatedFestivals = [...this.state.data, newFest];
    this.setState({data: updatedFestivals});
  };

  render() {
    return (
      <div className='festival-box'>
        <h2>Enter your festival</h2>
        <FestivalForm handleFestivalSubmit={this.handleFestivalSubmit} />
        <h2>Festivals</h2>
        <FestivalList data={this.state.data} />
      </div>
    )
  };

};

export default FestivalBox;
