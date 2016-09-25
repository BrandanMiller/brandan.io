import React from 'react';

class Introduction extends React.Component {
  render() {
    return (
      <div className="mediaButtons">
        <a className="btn btn-primary btn-media" href="https://github.com/BrandanMiller" role="button"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a>
        <a className="btn btn-primary btn-media" href="http://codepen.io/brandanmiller/" role="button"><i className="fa fa-codepen fa-lg" aria-hidden="true"></i></a>
        <a className="btn btn-primary btn-media" href="https://www.linkedin.com/in/brandanmiller" role="button"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
      </div>
    );
  }
}

export default Introduction;
