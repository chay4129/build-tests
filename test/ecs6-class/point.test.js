const Point = require("../../modules/ecs6-class/point")

describe("MOVE_VERTICAL", () => {
    it("should return ", () => {
        const point = new Point({ x: 9, y: 5 })
        point.moveVertical(3)
        expect(point.y).toBe(8)
    })
})
describe("MOVE_HORZONTAL", () => {
    it("should return ", () => {
        const point = new Point({ x: 11, y: 4 })
        point.moveHorizontal(-6)
        expect(point.x).toBe(5)
    })
})