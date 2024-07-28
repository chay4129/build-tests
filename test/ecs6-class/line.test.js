const Line = require("../../modules/ecs6-class/line")
const Point = require("../../modules/ecs6-class/point")
let point1 = new Point({ x: 4, y: 8})
let point2 = new Point({ x: 2, y: 4 })
const line = new Line({ point1, point2 })

// describe("CALCULATE_SLOPE", () => {
//     test("should  return", () => {
//        line.point1.calculateSlope()
//         expect().toBe(2)
//     })
// })