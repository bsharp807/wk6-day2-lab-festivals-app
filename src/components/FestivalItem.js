import React from 'react';
import PropTypes from 'prop-types';
import './FestivalItem.css';

const FestivalItem = (props) => {

  return (
    <div className='festival-item'>
      <h4>{props.name}</h4>
      <h5>{props.date}</h5>
      <p>{props.description}</p>
    </div>
  )

};

FestivalItem.propTypes = {
  // festival: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  // }).isRequired
};



export default FestivalItem;
