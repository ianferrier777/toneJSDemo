import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as Tone from 'tone'; // <-- This allows us to pull all Tone functionality and point it to the ref: Tone.

// This is the 'Hello Tone' test for launch,
// because audio is irritating to understand in browsers.
// Autoplay not allowed no more. Did not know that.
const synth = new Tone.Synth().toDestination(); // <--  This creates a new instance of a Synth instrument from the Tone.js API and
                                                //      toDestination method hooks the output of this Synth instance to your default audio
                                                //      output.
synth.triggerAttackRelease("C4", "8n"); // <--  This says play an eight note length C in the API defined 4th octave. Probably middle C, this
                                        //      stuff is relative, right? I don't know, I just mixed live bands.

ReactDOM.render(<App />, document.getElementById('app'));

