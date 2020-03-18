import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <div className="ui middle aligned two column centered grid">
            <div className="row">
              <div className="column">
                <h1 className="ui icon header">
                  <i className="crow icon"></i>
                  <div className="content">
                    Tweet-Ku
                    <div className="sub header">Tweet-powered haiku generator</div>
                  </div>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div className="ui search">
                  <div className="ui left icon input" data-tooltip="Enter a user's Twitter handle to begin">
                    <i class="at icon" />
                    <input class="prompt" type="text" placeholder="Twitter Handle" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <button className="large ui button">
                  <i className="feather icon"></i>
                  Compose a Tweet-Ku
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ui fluid raised card">
          <div className="content">
            <div className="ui segments">
              <div className="ui segment">
                <i className="quote left icon" />
                <div className="center aligned description">
                  <p>
                    The apparition of these faces in the crowd:
                    Petals on a wet, black bough.
                  </p>
                </div>
              </div>
              <div class="ui clearing basic segment">
                <div class="ui right floated">
                  <i className="quote right icon" />
                </div>
              </div>
            </div>
            <div className="extra content">
              <div className="center aligned author">
                <a class="ui circular label">
                  <i className="ui crow icon" />
                  Ezra Pound
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
