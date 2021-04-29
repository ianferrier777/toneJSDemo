import React from 'react';
import * as Tone from 'tone';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.helloTone = this.helloTone.bind(this);
    this.closeEncountersHumans = this.closeEncountersHumans.bind(this);
    this.closeEncountersAliens = this.closeEncountersAliens.bind(this);
    this.closeEncountersHumansResponseInterrupt = this.closeEncountersHumansResponseInterrupt.bind(this);
  }

  helloTone(e) {
    // This is the 'Hello Tone' test for launch,
    // because audio is irritating to understand in browsers.
    // Autoplay not allowed no more. Did not know that.
    const synth = new Tone.Synth().toDestination(); // <--  This creates a new instance of a Synth instrument from the Tone.js API and
                                                    //      toDestination method hooks the output of this Synth instance to your default audio
                                                    //      output.
    synth.triggerAttackRelease("C4", "8n"); // <--  This says play an eight note length C in the API defined 4th octave. Probably middle C,
                                            //     this stuff is relative, right? I don't know, I just mixed live bands.
  }

  closeEncountersHumans(e) {
    const synth2 = new Tone.Synth().toDestination();
    synth2.volume.value = -3;
    const now = Tone.now();
    synth2.triggerAttackRelease("G4", "8n", now);
    synth2.triggerAttackRelease("A4", "8n", now + 0.5);
    synth2.triggerAttackRelease("F4", "8n", now + 1);
    synth2.triggerAttackRelease("F3", "8n", now + 1.5);
    synth2.triggerAttackRelease("C4", "8n", now + 2);
  }

  closeEncountersAliens(e) {
    const monoSynth = new Tone.MonoSynth().toDestination();
    const now2 = Tone.now();
    monoSynth.triggerAttackRelease("Bb2", "8n", now2);
    monoSynth.triggerAttackRelease("C2", "8n", now2 + 0.5);
    monoSynth.triggerAttackRelease("Ab2", "8n", now2 + 1);
    monoSynth.triggerAttackRelease("Ab1", "8n", now2 + 1.5);
    monoSynth.triggerAttackRelease("Eb2", "8n", now2 + 2);
  }

  closeEncountersHumansResponseInterrupt(e) {
    const synth3 = new Tone.Synth().toDestination();
    synth3.volume.value = -3;
    const monoSynth2 = new Tone.MonoSynth().toDestination();
    const now3 = Tone.now();
    synth3.triggerAttackRelease("G4", "8n", now3);
    synth3.triggerAttackRelease("A4", "8n", now3 + 0.5);
    synth3.triggerAttackRelease("F4", "8n", now3 + 1);
    monoSynth2.triggerAttackRelease("F1", "8n", now3 + 1.5);
    monoSynth2.triggerAttackRelease("C2", "8n", now3 + 2);
  }

  render() {
    return (
      <div>
        <button id="1"
          onClick={async (e) => {
            await Tone.start(); // <-- You're not going anywhere without someway to resume Google's irritating AudioContext object that by
                                //     default suspends any audio on launch and this has to come from user input. This is a Tone.js fix.
            console.log('audio is ready');
            this.helloTone(e);
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
        <button id="2" onClick={(e) => { this.closeEncountersHumans(e); }}>
          Close
          <br />
          Encounters
          <br />
          Request
        </button>
        <button id="3" onClick={(e) => { this.closeEncountersAliens(e); }}>
          Close
          <br />
          Encounters
          <br />
          Response
        </button>
        <button id="4" onClick={(e) => { this.closeEncountersHumansResponseInterrupt(e); }}>
          Close
          <br />
          Encounters
          <br />
          Jam?
        </button>
      </div>
    );
  }
};

export default App;