const BlockType = {
  BOOLEAN: 'Boolean',
  BUTTON: 'button',
  COMMAND: 'command',
  CONDITIONAL: 'conditional',
  EVENT: 'event',
  HAT: 'hat',
  LOOP: 'loop',
  REPORTER: 'reporter',
};

const ArgumentType = {
  ANGLE: 'angle',
  BOOLEAN: 'Boolean',
  COLOR: 'color',
  NUMBER: 'number',
  STRING: 'string',
  MATRIX: 'matrix',
  NOTE: 'note',
  IMAGE: 'image',
};

const TargetType = {
  STAGE: 'stage',
  SPRITE: 'sprite',
};

class CommentBlocks {
    constructor(runtime) {
    this.runtime = runtime
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'CmntExt.extensionName': "评论区",
        'CmntExt.commentHat': '[COMMENT]',
        'CmntExt.commentCommand': '[COMMENT]',
        'CmntExt.commentCap': '[COMMENT]',
        'CmntExt.commentReporter': '[INPUT] [COMMENT]',
        'CmntExt.commentReporter2': '[COMMENT] [INPUT]',
        'CmntExt.commentReporter3': '[COMMENT]',
        'CmntExt.commentBoolean': '[INPUT] [COMMENT]',
        'CmntExt.commentBoolean2': '[COMMENT] [INPUT]',
        'CmntExt.commentBoolean3': '[COMMENT]',
        'CmntExt.commentConditional': '[COMMENT]',
        'CmntExt.commentLoop': '[COMMENT]',
      },
  
      en: {
        'CmntExt.extensionName': "Comment blocks",
        'CmntExt.commentHat': '[COMMENT]',
        'CmntExt.commentCommand': '[COMMENT]',
        'CmntExt.commentCap': '[COMMENT]',
        'CmntExt.commentReporter': '[INPUT] [COMMENT]',
        'CmntExt.commentReporter2': '[COMMENT] [INPUT]',
        'CmntExt.commentReporter3': '[COMMENT]',
        'CmntExt.commentBoolean': '[INPUT] [COMMENT]',
        'CmntExt.commentBoolean2': '[COMMENT] [INPUT]',
        'CmntExt.commentBoolean3': '[COMMENT]',
        'CmntExt.commentConditional': '[COMMENT]',
        'CmntExt.commentLoop': '[COMMENT]',
      },
    })
  }
  
  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    })
  }
  
    getInfo() {
      return {
        id: "commentblocks",
        name: this.formatMessage('CmntExt.extensionName'),
        color1: "#191e25",
        color2: "#191e25",
        color3: "#191919",
        blockIconURI: icon,
        blocks: [
          "---" + "✨ Made by LilyMakesThings",
          "---" + "Changed a little bit by Fath11",
          "---" + "🎩 Hats",
          {
            opcode: 'broadcastToClone',
            blockType: BlockType.COMMAND,
            filter: [TargetType.SPRITE],
            text: 'send private message[MSG] to clone[MENU][VALUE], with data[data]',
            arguments: {
              MENU: {
                type: ArgumentType.STRING,
                menu: 'SPRITE_OR_GROUP_OR_ID_MENU',
              },
              VALUE: {
                type: ArgumentType.STRING,
                defaultValue: 'enemy',
              },
              MSG: {
                type: ArgumentType.STRING,
                defaultValue: 'message 1',
              },
              data: {
                type: ArgumentType.STRING,
                defaultValue: 'data',
              },
            },
          },
          {
            opcode: 'receiveMyBroadcast',
            blockType: BlockType.HAT,
            isEdgeActivated: false,
            shouldRestartExistingThreads: false,
            text: 'when I receive private message[MSG] for me. data=[data], senderID=[senderID]',
            arguments: {
              MSG: {
                type: ArgumentType.STRING,
                defaultValue: 'message 1',
              },
              data: {
                type: 'ccw_hat_parameter',
              },
              senderID: {
                type: 'ccw_hat_parameter',
              },
            },
          },
        ],
      };
    }
    broadcastToClone({ VALUE, MENU, MSG, data }, util) {
        util.startHatsWithParams(
          'witCat.dollyPro_receiveMyBroadcast',
          {
            parameters: { data, senderID },
            // 根据hat中的 TEXT 输入，过滤hat积木
            fields: { TEXT: MSG },
          },
          target
        );
    }
  
  
    receiveMyBroadcast() {
      return true;
    }
  }
  
  window.tempExt = {
    Extension: CommentBlocks,
    info: {
      name: 'CmntExt.extensionName',
      description: 'CmntExt.description',
      extensionId: 'commentblocks',
      iconURL: cover,
      insetIconURL: icon,
      featured: true,
      disabled: false,
      collaborator: 'Lily@TW',
      collaboratorURL: 'https://scratch.mit.edu/users/lilymakesthings/',
      collaboratorList: [
              {
                  collaborator: 'Lily@TW',
                  collaboratorURL: 'https://scratch.mit.edu/users/lilymakesthings/'
              },
              {
                  collaborator: 'Fath11@Cocrea',
                  collaboratorURL: 'https://cocrea.world/@Fath11'
              },
          ]
    },
    l10n: {
      'zh-cn': {
        'CmntExt.extensionName': "评论区",
        'CmntExt.description': '注释你的脚本',
      },
      'en': {
        'CmntExt.extensionName': "Comment blocks",
        'CmntExt.description': 'Annotate your scripts',
      },
    },
  };