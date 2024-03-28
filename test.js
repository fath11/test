import * as WEBMIDI from 'https://cdn.jsdelivr.net/npm/webmidi@latest/dist/esm/webmidi.esm.js'

class WEBMIDIJS {
  constructor(runtime) {
    this.runtime = runtime;
    this.webmidi = WEBMIDI.WebMidi;
    this.webmidi.enable(err => {
      if (err) {
        console.log("WebMIDI could not be enabled.", err);
      }
    });
  }

  getInfo() {
    return {
      id: "webmidi",
      name: "WEBMIDI",
      blocks: [
        {
          opcode: "testWebMidi",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "Test if WebMIDI is working",
        },
        {
          opcode: "checkInput",
          blockType: Scratch.BlockType.REPORTER,
          text: "Currently pressed key",
        },
      ],
    };
  }

  testWebMidi() {
    if (this.webmidi.enabled) {
      return "Yuh uh"
    } else {
      return "Nuh uh"
    }
  }

  checkInput() {
    this.webmidi.inputs.forEach(function(input) {
      input.addListener('noteon', "all", function(e) {
        console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ") from input: " + input.name);
        return "Received 'noteon' message (" + e.note.name + e.note.octave + ") from input: " + input.name
      });
    });
  }
}

window.tempExt = {
  Extension: WEBMIDIJS,
  info: {
    name: 'webmidi.extensionName',
    description: 'webmidi.description',
    extensionId: 'webmidi',
    // iconURL: icon,
    // insetIconURL: cover,
    featured: true,
    disabled: false,
    collaborator: 'only for webmidi test',
  },
  l10n: {
    'zh-cn': {
      'webmidi.extensionName': 'SVG Control',
      'webmidi.description': 'Control sprites with SVGs',
    },
    en: {
      'webmidi.extensionName': 'SVG Control',
      'webmidi.description': 'Control sprites with SVGs',
    },
  },
}
