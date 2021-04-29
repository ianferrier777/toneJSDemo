import React from 'react';
import * as Tone from 'tone';

class App extends React.Component {
  static helloTone() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease('C4', '8n');
  }

  static closeEncountersHumans() {
    const synth2 = new Tone.Synth().toDestination();
    synth2.volume.value = -3;
    const now = Tone.now();
    synth2.triggerAttackRelease('G4', '8n', now);
    synth2.triggerAttackRelease('A4', '8n', now + 0.5);
    synth2.triggerAttackRelease('F4', '8n', now + 1);
    synth2.triggerAttackRelease('F3', '8n', now + 1.5);
    synth2.triggerAttackRelease('C4', '8n', now + 2);
  }

  static closeEncountersAliens() {
    const monoSynth = new Tone.MonoSynth().toDestination();
    const now2 = Tone.now();
    monoSynth.triggerAttackRelease('Bb2', '8n', now2);
    monoSynth.triggerAttackRelease('C2', '8n', now2 + 0.5);
    monoSynth.triggerAttackRelease('Ab2', '8n', now2 + 1);
    monoSynth.triggerAttackRelease('Ab1', '8n', now2 + 1.5);
    monoSynth.triggerAttackRelease('Eb2', '8n', now2 + 2);
  }

  static closeEncountersHumansResponseJam() {
    const synth3 = new Tone.Synth().toDestination();
    synth3.volume.value = -3;
    const monoSynth2 = new Tone.MonoSynth().toDestination();
    const now3 = Tone.now();
    synth3.triggerAttackRelease('G4', '8n', now3);
    synth3.triggerAttackRelease('A4', '8n', now3 + 0.5);
    synth3.triggerAttackRelease('F4', '8n', now3 + 1);
    monoSynth2.triggerAttackRelease('F1', '8n', now3 + 1.5);
    monoSynth2.triggerAttackRelease('C2', '8n', now3 + 2);
  }

  constructor() {
    super();
    this.state = {};
    this.helloTone = this.helloTone.bind(this);
    this.closeEncountersHumans = this.closeEncountersHumans.bind(this);
    this.closeEncountersAliens = this.closeEncountersAliens.bind(this);
    this.closeEncountersHumansResponseJam = this.closeEncountersHumansResponseJam.bind(this);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          id="1"
          onClick={async () => {
            await Tone.start();
            this.helloTone();
          }}
        >
          Hello Tone!
          <br />
          {'Can\'t Just Autoplay.'}
          <br />
          Audio is complicated
          <br />
          in browsers.
        </button>
        <button type="button" id="2" onClick={() => { this.closeEncountersHumans(); }}>
          Close
          <br />
          Encounters
          <br />
          Request
        </button>
        <button type="button" id="3" onClick={() => { this.closeEncountersAliens(); }}>
          Close
          <br />
          Encounters
          <br />
          Response
        </button>
        <button type="button" id="4" onClick={() => { this.closeEncountersHumansResponseJam(); }}>
          Close
          <br />
          Encounters
          <br />
          Jam?
        </button>
      </div>
    );
  }
}

export default App;
