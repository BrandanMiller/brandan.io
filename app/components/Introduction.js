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
          I am a full stack software developer creating applications in either .NET or JavaScript stacks as a consultant.
        </p>
        <p>
          Currently, I live in the greater Chicago area and I am open meet in person.
        </p>
        <p>
          Please feel free to contact me about anything or look at my code on github.
        </p>
        <p className="introduction-footer">
          Enjoy your stay! :D
        </p>
      </div>
    );
  }
}

export default Introduction;
