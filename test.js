import Cast from '../utils/cast.js'

class CastingExample {
  getInfo() {
    return {
      id: 'castexample',
      name: 'Casting Example',
      blocks: [
        {
          opcode: 'toNumber',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [INPUT] to number',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '3.0'
            }
          }
        },
        {
          // The opcode "toString" should work but given it's special
          // treatment in JS, it seems a bit dangerous to use
          opcode: 'castToString',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [INPUT] to string',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello'
            }
          }
        },
        {
          opcode: 'toBoolean',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'convert [INPUT] to boolean',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'compare',
          blockType: Scratch.BlockType.REPORTER,
          text: 'compare [A] to [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '3'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            }
          }
        }
      ]
    };
  }

  toNumber({ INPUT }) {
    // highlight-next-line
    return Cast.toNumber(INPUT);
  }

  castToString({ INPUT }) {
    // highlight-next-line
    return Cast.toString(INPUT);
  }

  toBoolean({ INPUT }) {
    // highlight-next-line
    return Cast.toBoolean(INPUT);
  }

  compare({ A, B }) {
    // highlight-start
    const comparison = Cast.compare(A, B);
    // You need to use < 0, > 0, or === 0 here.
    // Do not use === 1 or === -1! That will not work in some cases.
    if (comparison === 0) {
      return 'Equal';
    } else if (comparison > 0) {
      return 'A is greater';
    } else if (comparison < 0) {
      return 'B is greater';
    }
    // highlight-end
  }
}

window.tempExt = {
  Extension: CastingExample,
  info: {
    name: 'sh.extensionName',
    description: 'sh.description',
    extensionId: 'scratchhub',
    //iconURL: banner,
    //insetIconURL: icon,
    featured: true,
    disabled: false,
    collaborator: 'fath11',
  },
  l10n: {
    'zh-cn': {
      'sh.extensionName': 'Scratch Hub',
      'sh.description': '允许您与 Scratch DB API 交互以获取用户和项目数据！',
    },
    en: {
      'sh.extensionName': 'Scratch Hub',
      'sh.description': 'Allow you to interact with ScratchDB API to get users and projects data!',
    },
  },
}
