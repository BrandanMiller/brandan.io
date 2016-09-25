import React from 'react';
import AnimatedCircles from './AnimatedCircles.js';
import Introduction from './Introduction';
import MediaButtons from './MediaButtons';

class Greeting extends React.Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-4">
              <AnimatedCircles/>
            </div>
            <div className="col-sm-8">
              <Introduction/>
              <MediaButtons/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Greeting;
