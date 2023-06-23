import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'kylian mbappé',
      bio: 'The young beast player of football',
      imgSrc: 'https://www.planetsport.com/image-library/square/500/k/kylian-mbappe-psg-france-3-april-2022.jpg.',
      profession: 'Football Player'
    },
    show: false,
    lastMountedTime: null
  };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  componentDidMount() {
    this.setState({
      lastMountedTime: new Date().toLocaleTimeString()
    });
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, lastMountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt="Person" />
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}

        {lastMountedTime && (
          <p>Last mounted time: {lastMountedTime}</p>
        )}
      </div>
    );
  }
}

export default App;