class CommentBlocks {
    constructor(runtime) {
    this.runtime = runtime
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'CmntExt.extensionName': "评论区",
      },
  
      en: {
        'CmntExt.extensionName': "Comment blocks",
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
            opcode: 'broadcastReporter',
            blockType: Scratch.BlockType.REPORTER,
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
          {
            opcode: 'returnData',
            blockType: Scratch.BlockType.COMMAND,
            isTerminal: true,
            filter: [Scratch.TargetType.SPRITE],
            text: 'Return [data]',
            arguments: {
              data: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'data',
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

    broadcastReporter({ MSG, data }, util) {
      return util.startHatsWithParams(
        'commentblocks_receiveMyBroadcast',
        {
          parameters: { data },
          // 根据hat中的 TEXT 输入，过滤hat积木
          fields: { TEXT: MSG },
        },
      );
  }
  
  
    receiveMyBroadcast({ MSG, data }) {
      var DATA = data
      return DATA;
    }

    returnData({data}) {
      DATA = data
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