import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((e) => (
          <MissionCard key={ e.name } infos={ e } />
        ))}
      </div>
    );
  }
}

export default Missions;
