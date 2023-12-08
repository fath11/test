(function(Scratch) {
  'use strict';
  const blocks = [{
    blockType: "button",
    text: "New dropdown",
    onClick: () => { newDropdown() },
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

const newDropdowns = []

  class variablePlus {
    constructor(runtime) {
      this.runtime = runtime
    }
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
    
    Scratch.extensions.register(new variablePlus());
})(Scratch);
