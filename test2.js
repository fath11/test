const blocks = []
const newDropdowns = []

class variablePlus {
  constructor(runtime) {
    this.runtime = runtime
  }
    getInfo() {
      return {
        id: 'variablePlus',
        name: 'VariablePlus',
        blocks: [
          {
            blockType: "button",
            text: "New dropdown",
            onClick: () => { 
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
                    func: 'return',
                  },
                )
                console.log(newDropdowns)
                this.runtime.requestToolboxExtensionsUpdate()
             },
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
            func: 'return',
          }, 
          ...newDropdowns],
        menus: {
          CUSTOM_dropdown: {
            acceptReporters: true,
            items: [{text: 'New item', value: this.getNewItem(this)}, 'example item 1']
          }
        },
      };
    }
    return(args) {
      return args.CUSTOM_dropdown
    }

    getNewItem() {
      let ItemName = prompt("Item name")
      let ItemValue = prompt("Item value")

      console.log(ItemName, ItemValue)
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
