import React from 'react';

class Introduction extends React.Component {
  render() {
    return (
      <div className="introduction">
        <h3>
          Welcome!
        </h3>
        <h4>
          My name is Brandan Miller.
        </h4>
        <p>
          I am a full stack software developer with a special interest for web applications.
        </p>
        <p>
          Currently, I live in Chicago and I am open meet in person, or feel free to contact me through my website.
        </p>
        <p>
          If you're intreseted in what I'm currently working on, you can check it out on github or codepen.
        </p>
        <p className="introduction-footer">
          Enjoy your stay!
        </p>
      </div>
    );
  }
}

export default Introduction;
