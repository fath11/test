class variablePlus {
  constructor(runtime) {
    this.runtime = runtime
  }

  blocks = [{
    blockType: "button",
    text: "New dropdown",
    onClick: () => { this.newDropdown() },
  },
  {
    opcode: "dropdown1",
    blockType: "reporter",
    text: "[CUSTOM_dropdown]",
    arguments: {
      CUSTOM_dropdown: {
            type: "string",
            menu: "CUSTOM_dropdown",
        },
    },
  },]
  
  newDropdowns = []

    getInfo() {
      return {
        id: 'variablePlus',
        name: 'VariablePlus',
        blocks: [...blocks, ...newDropdowns],
        menus: {
          CUSTOM_dropdown: {
            acceptReporters: true,
            items: ['New item', 'example item 1']
          }
        },
        newDropdown() {
          newDropdowns.push(
            {
              opcode: "dropdown" + Math.random(),
              blockType: "reporter",
              text: "[CUSTOM_dropdown]",
              arguments: {
                CUSTOM_dropdown: {
                      type: "string",
                      menu: "CUSTOM_dropdown",
                  },
              },
            },
          )
          console.log(newDropdowns)
          runtime.requestToolboxExtensionsUpdate()
        }
      };
    }
  }
  
  window.tempExt = {
    Extension: variablePlus,
    info: {
      name: 'hcn.extensionName',
      description: 'hcn.description',
      extensionId: 'hcnTest',
      // iconURL: icon,
      // insetIconURL: cover,
      featured: true,
      disabled: false,
      collaborator: 'only for hcn test',
    },
    l10n: {
      'zh-cn': {
        'hcn.extensionName': 'hcn 的测试',
        'hcn.description': 'hcn 的测试',
      },
      en: {
        'hcn.extensionName': 'hcn test',
        'hcn.description': 'hcn test',
      },
    },
  }
