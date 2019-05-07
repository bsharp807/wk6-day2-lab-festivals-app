import React from 'react';
import FestivalItem from '../components/FestivalItem';
import PropTypes from 'prop-types';
import './FestivalList.css';

const FestivalList = (props) => {
  const festivals = props.data.map((festival, index) => {
    return (
      <FestivalItem name={festival.name} date={festival.date} description={festival.description} key={index} />
    )
  });

  return (
    <div className='festival-list'>
      {festivals}
    </div>
  )

};

FestivalList.defaultProps = {
  data: []
}

FestivalList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default FestivalList;
