import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import Greeting from './Greeting'

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Messages messages={this.props.messages}/>
        <div>
          <div className="row">
            <div className="col-sm-12">
              <Greeting/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
