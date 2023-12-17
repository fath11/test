const Icon = "data:image/png;base64,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";

function find_distance_to(x1, y1, x2, y2) {
  return Math.hypot((x2 - x1), (y2 - y1)).toFixed(2)
}

function find_direction_to(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  let theta = Math.atan2(dy, dx);
  let direction = 90 - theta * (180 / Math.PI);
  return direction.toFixed(2);
}

function rotatePoint(px, py, cx, cy, theta) {
  // Translate point back to origin
  px -= cx;
  py -= cy;
  
  // Rotate point
  var newX = px * Math.cos(theta) - py * Math.sin(theta);
  var newY = px * Math.sin(theta) + py * Math.cos(theta);
  
  // Translate point back
  newX += cx;
  newY += cy;
  
  return [newX, newY];
}


class ReMotion {
  constructor(runtime){
    this.runtime = runtime
  }
    getInfo() {
      return {
        id: 'remotion',
        name: 'ReMotion',
        color1: '#4c97ff',
        color2: '#2a528a',
        color3: '#4280d7',
        blockIconURI: Icon,
        blocks: [
          {
            opcode: 'rotate_around',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Rotate around x: [X] y: [Y] by [STEPS] steps [ROTATE_DIRECTION]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              STEPS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '10'
              },
              ROTATE_DIRECTION: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'ROTATE_DIRECTION',
              },
            },
          },
          {
            opcode: 'rotate_around_sprite',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Rotate around [SPRITE] by [STEPS] steps [ROTATE_DIRECTION]',
            arguments: {
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'sprites',
              },
              STEPS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '10'
              },
              ROTATE_DIRECTION: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'ROTATE_DIRECTION',
              },
            },
          },
          "---",
          {
            opcode: 'rotate_in_shapes',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Rotate in [SHAPE] formation around x: [X] y: [Y] [ROTATE_DIRECTION]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              ROTATE_DIRECTION: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'ROTATE_DIRECTION',
              },
              SHAPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'SHAPES',
              },
            },
          },
          {
            opcode: 'rotate_around_sprite_in_shapes',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Rotate around [SPRITE] in [SHAPE] formation [ROTATE_DIRECTION]',
            arguments: {
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'sprites',
              },
              ROTATE_DIRECTION: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'ROTATE_DIRECTION',
              },
              SHAPE: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'SHAPES',
              },
            },
          },
          "---",
          {
            opcode: 'point_towards_pos',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Point towards x: [X] y: [Y]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
            },
          },
          {
            opcode: 'direction_to',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Direction to x: [X] y: [Y]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
            },
          },
          {
            opcode: 'direction_from_to',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Direction from x: [X1] y: [Y1] to x: [X2] y: [Y2]',
            arguments: {
              X1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              X2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
              Y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
            },
          },
          {
            opcode: 'direction_to_sprite',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Direction to [SPRITE]',
            arguments: {
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'sprites',
              },
            },
          }, 
          "---",
          {
            opcode: 'move_towards_or_away',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Move [STEPS] steps [DIRECTION] x: [X] y: [Y]',
            arguments: {
              STEPS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              },
              DIRECTION: {
                type: Scratch.ArgumentType.STRING,
                menu: 'towards_away',
              },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
            },
          },
          {
            opcode: 'move_towards_or_away_from_sprite',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Move [STEPS] steps [DIRECTION] [SPRITE]',
            arguments: {
              STEPS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              },
              DIRECTION: {
                type: Scratch.ArgumentType.STRING,
                menu: 'towards_away',
              },
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'sprites',
              },
            },
          },
          "---",
          {
            opcode: 'distance_to',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Distance to x: [X] y: [Y]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
            },
          },
          {
            opcode: 'distance_from_to',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Distance from x: [X1] y: [Y1] to x: [X2] y: [Y2]',
            arguments: {
              X1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              X2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
              Y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
            },
          },
        ],
        menus: {
          sprites: {
            acceptReporters: true,
            items: '_getTargets'
          },
          ROTATE_DIRECTION: {
            acceptReporters: true,
            items: [
              {
                text: 'Clockwise',
                value: '-1'
              },
              {
                text: 'Counter-clockwise',
                value: '1'
              }
            ]
          },
          towards_away: {
            acceptReporters: true,
            items: [
              {
                text: 'towards',
                value: '1'
              },
              {
                text: 'away',
                value: '-1'
              }
            ]
          },
          SHAPES: {
            acceptReporters: true,
            items: [
              {
                text: 'Triangle',
                value: '2.09'
              },
              {
                text: 'Square',
                value: '1.57'
              },
              {
                text: 'Pentagon',
                value: '1.26'
              },
              {
                text: 'Hexagon',
                value: '1.05'
              },
              {
                text: 'Heptagon',
                value: '0.897'
              },
              {
                text: 'Octagon',
                value: '0.785'
              },
            ]
          }
        }
      };
    }
  
    rotate_around({X, Y, STEPS, ROTATE_DIRECTION}, util) {
      //Convert the angle to radians so sprite will rotate in circle
      let radians = STEPS * (Math.PI / 180)
      //Set the rotation direction to either CLOCKWISE: -1 or COUNTER-CLOCKWISE: 1
      radians = radians * ROTATE_DIRECTION
  
      // Use the rotatePoint(x1, y1, x2, y2, theta) function
      let newPos = rotatePoint(util.target.x, util.target.y, X, Y, radians);
  
      //Set the sprite's position to the new positions
      util.target.setXY(newPos[0], newPos[1]);
    }
  
    rotate_around_sprite({SPRITE, STEPS, ROTATE_DIRECTION}, util) {
      // get target sprite's target
      SPRITE = this.runtime.getSpriteTargetByName(SPRITE)
  
      // Get target sprite's X and Y
      let X = SPRITE.x
      let Y = SPRITE.y
  
      //Use the rotate_around block
      this.rotate_around({X, Y, STEPS, ROTATE_DIRECTION}, util)
    }
  
    rotate_in_shapes({X, Y, ROTATE_DIRECTION, SHAPE}, util) {
      // Set the rotation direction
      let radians = SHAPE * ROTATE_DIRECTION
  
      // Use the rotatePoint(x1, y1, x2, y2, theta) function
      // This one DOESN'T use rotate_around() block because rotate around have a radians for circles
      let newPos = rotatePoint(util.target.x, util.target.y, X, Y, radians);
  
      util.target.setXY(newPos[0], newPos[1]);
    }
  
    rotate_around_sprite_in_shapes({SPRITE, ROTATE_DIRECTION, SHAPE}, util) {
      SPRITE = this.runtime.getSpriteTargetByName(SPRITE)
  
      let X = SPRITE.x
      let Y = SPRITE.y
      
      // use the rotate_in_shapes() block
      this.rotate_in_shapes({X, Y, ROTATE_DIRECTION, SHAPE}, util)
    }
  
    point_towards_pos({X, Y}, util) {
      //Set the sprite's direction using the find_direction_to() function
      util.target.setDirection(find_direction_to(X, Y, util.target.x, util.target.y));
    }
  
    direction_to({X, Y}, util) {
      return find_direction_to(X, Y, util.target.x, util.target.y)
    }
  
    direction_from_to({X1, Y1, X2, Y2}) {
      return find_direction_to(X1, Y1, X2, Y2)
    }
  
    direction_to_sprite({SPRITE}, util) {
      SPRITE = this.runtime.getSpriteTargetByName(SPRITE)
      let X = SPRITE.x
      let Y = SPRITE.y
  
      return find_direction_to(X, Y, util.target.x, util.target.y)
    }
  
    move_towards_or_away({STEPS, DIRECTION, X, Y}, util) {
      // Calculate the difference between the target and destination points
      let dx = X - util.target.x;
      let dy = Y - util.target.y;
  
      // Calculate the distance between the two points
      let distance = Math.sqrt(dx * dx + dy * dy);
  
      // Normalize the difference
      dx /= distance;
      dy /= distance;
  
      // Move the target point towards or away from the destination point by the specified amount
      let x = util.target.x + DIRECTION * dx * STEPS;
      let y = util.target.y + DIRECTION * dy * STEPS;
      util.target.setXY(x, y)
    }
  
    move_towards_or_away_from_sprite({STEPS, DIRECTION, SPRITE}, util) {
      if (SPRITE != util.target.getName()) {
        SPRITE = this.runtime.getSpriteTargetByName(SPRITE)
        let X = SPRITE.x
        let Y = SPRITE.y
    
        // Calculate the difference between the target and destination points
        let dx = X - util.target.x;
        let dy = Y - util.target.y;
    
        // Calculate the distance between the two points
        let distance = Math.sqrt(dx * dx + dy * dy);
    
        // Normalize the difference
        dx /= distance;
        dy /= distance;
    
        // Move the target point towards or away from the destination point by the specified amount
        let x = util.target.x + DIRECTION * dx * STEPS;
        let y = util.target.y + DIRECTION * dy * STEPS;
        util.target.setXY(x, y)
      } else {
        console.error("Sprite cannot move towards/away fron itself");
      }
    }
  
    distance_to({X, Y}, util) {
      return find_distance_to(X, Y, util.target.x, util.target.y)
    }
  
    distance_from_to({X1, Y1, X2, Y2}) {
      return find_distance_to(X1, Y1, X2, Y2)
    }
  
    _getTargets() {
      const spriteNames = [];
      const targets = this.runtime.targets;
      for (let index = 1; index < targets.length; index++) {
          const target = targets[index];
          if (target.isOriginal) {
              const targetName = target.getName();
              spriteNames.push({
                  text: targetName,
                  value: targetName,
              });
          }
      }
      // Remove the first element
      const result = spriteNames;
      
      // Check if the array is empty
      if (result.length === 0) {
          // Add a placeholder
          result.push({
              text: 'Make another sprite',
              value: console.error("There is no other sprites"),
          });
      }
      
      return result;
  }

}

window.tempExt = {
  Extension: ReMotion,
  info: {
      name: 'remotion.Name',
      description: 'remotion.Description',
      extensionId: 'remotion',
      iconURL: 'https://fath11.github.io/test/banners/Motion.png',
      // insetIconURL: 'cover.svg',
      collaborator: 'Fath11@Cocrea'
  },
  l10n: {
      'zh-cn': {
          'remotion.Name':'控制台',
          'remotion.Description':'用于控制和操作浏览器内置的JavaScript控制台'
      },
      en: {
          'remotion.Name':'Motion squared',
          'remotion.Description': "More blocks for controlling sprite's motion!"
      }
  },
}
