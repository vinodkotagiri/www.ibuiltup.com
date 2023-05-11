class Room {
  constructor(id) {
    this.id = id
    this.length = 0
    this.breadth = 0
    this.area = 0
    this.position = {}
    this.walls = {
      front: {
        length: 0,
        thickness: 0,
        door: { includes: false, position: 0 },
        opening: { includes: false, position: 0 }
      },
      back: {
        length: 0,
        thickness: 0,
        door: { includes: false, position: 0 },
        opening: { includes: false, position: 0 }
      },
      left: {
        length: 0,
        thickness: 0,
        door: { includes: false, position: 0 },
        opening: { includes: false, position: 0 }
      },
      right: {
        length: 0,
        thickness: 0,
        door: { includes: false, position: 0 },
        opening: { includes: false, position: 0 }
      }
    }
  }
  getProperties() {
    return {
      id: this.id,
      length: this.length,
      breadth: this.breadth,
      area: this.area,
      position: this.position,
      walls: this.walls
    }
  }
  updatePosition(position) {
    this.position = position
  }
  updateDimensions(length, breadth) {
    this.length = parseFloat(length.toFixed(2))
    this.breadth = parseFloat(breadth.toFixed(2))
    this.area = parseFloat(parseFloat(length) * parseFloat(breadth).toFixed(2))
  }
  updateWallDimensions(wall, dimensions) {
    this.walls[wall].length = dimensions.length
    this.walls[wall].thickness = dimensions.thickness
  }
  updateDoor(wall, door) {
    this.walls[wall].door.includes = door.includes
    this.walls[wall].door.position = door.position
  }
  updateOpening(wall, opening) {
    this.walls[wall].opening.includes = opening.includes
    this.walls[wall].opening.position = opening.position
  }
}
export default Room
