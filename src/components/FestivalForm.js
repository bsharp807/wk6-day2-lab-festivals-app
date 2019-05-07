import React, { Component } from 'react';
import './FestivalForm.css';

class FestivalForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      description: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

handleNameChange(event) {
  this.setState({name: event.target.value})
};

handleDateChange(event) {
  this.setState({date: event.target.value})
};

handleDescriptionChange(event) {
  this.setState({description: event.target.value})
};

handleSubmit(event) {
  event.preventDefault();
  const name = this.state.name;
  const date = this.state.date;
  const description = this.state.description;
  const newFest = {name, date, description};
  this.props.handleFestivalSubmit(newFest);
  this.setState({name: '', date: '', description: ''});
};

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="Festival name"
        value={this.state.name}
        onChange={this.handleNameChange}
      />
      <input
        type="text"
        placeholder="Festival date"
        value={this.state.date}
        onChange={this.handleDateChange}
      />
      <input
        type="text"
        placeholder="Festival description"
        value={this.state.description}
        onChange={this.handleDescriptionChange}
      />
      <input type="submit" value="Post festival" />
    </form>
  )
}


}

export default FestivalForm;
