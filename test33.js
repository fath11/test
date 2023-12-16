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
        color1: '#FA8D0D',
        //blockIconURI: icon,
        blocks: [
          "---" + "✨ Made by LilyMakesThings",
          "---" + "Changed a little bit by Fath11",
          "---" + "🎩 Hats",
          {
            opcode: 'broadcastToClone',
            blockType: Scratch.BlockType.COMMAND,
            filter: [Scratch.TargetType.SPRITE],
            text: 'send private message[MSG] with data[data]',
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'message 1',
              },
              data: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'data',
              },
            },
          },
          {
            opcode: 'receiveMyBroadcast',
            blockType: Scratch.BlockType.HAT,
            isEdgeActivated: false,
            shouldRestartExistingThreads: false,
            text: 'when I receive private message[MSG] for me. data=[data]',
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'message 1',
              },
              data: {
                type: 'ccw_hat_parameter',
              },
            },
          },
        ],
      };
    }
    broadcastToClone({ MSG, data }, util) {
        util.startHatsWithParams(
          'commentblocks_receiveMyBroadcast',
          {
            parameters: { data },
            // 根据hat中的 TEXT 输入，过滤hat积木
            fields: { TEXT: MSG },
          },
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
      //iconURL: cover,
      //insetIconURL: icon,
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