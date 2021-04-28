import React from 'react';
import * as Tone from 'tone';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }



  render() {
    return (
      <button
        onClick={async () => {
          await Tone.start(); // <-- You're not going anywhere without someway to resume Google's irritating AudioContext object that by
                              //     default suspends any audio on launch and this has to come from user input. This is a Tone.js fix.
          console.log('audio is ready');
        }}
      >
        Hello Tone!
        <br />
        Can't just autoplay.
        <br />
        Audio is complicated
        <br />
        in browsers.
      </button>
    );
  }
};

export default App;