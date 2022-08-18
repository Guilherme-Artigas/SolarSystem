import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { infos } = this.props;
    const { name, year, country, destination } = infos;
    // console.log(infos);
    // const { name } = this.props;
    // const { year } = this.props;
    // const { country } = this.props;
    // const { destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  infos: PropTypes.objectOf(PropTypes.string),
};

MissionCard.defaultProps = {
  infos: {},
};

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.defaultProps = {
  name: 'stranger',
  year: 'stranger',
  country: 'stranger',
  destination: 'stranger',
};

export default MissionCard;
