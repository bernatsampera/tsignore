import React from 'react';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <p style={{ maxWidth: 310 }}>
          Typescript blog by
          <a href=""> Bernat Sampera</a>.
        </p>
      </div>
    );
  }
}

export default Bio;
