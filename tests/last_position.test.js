/*
 * @Author: huangbaochen<huangbaochenwo@live.com>
 * @Date: 2020-05-05 21:28:23
 * @LastEditTime: 2020-05-05 22:06:28
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 动画位置测试
 * @FilePath: \save-myself-off-2019-ncovd:\Dropbox\xiaowanzi\project\ts_utils\tests\last_position.test.js
 * @No MERCY
 */
import { Rectangle, Circle, Point } from '../src/base_class'
import { circle_bump_to_solid_rectangle_at_origin } from '../src/last_position'

const w_1 = 4
const h_1 = 2

const circle1_before = new Circle(new Point(2, -2), 1)
const circle1_after = new Circle(new Point(0, 0), 1)

test('circle1 bumping to rect1 to (1, -2)', () => {
    expect(circle_bump_to_solid_rectangle_at_origin(w_1, h_1, circle1_before, circle1_after))
        .toStrictEqual(new Point(1, -2))
})

const w_2 = 2
const h_2 = 2

const circle2_before = new Circle(new Point(2, 2), 1)
const circle2_after = new Circle(new Point(-2, -2), 1)

test('circle2 bumping to rect2 to (2, 2)', () => {
    expect(circle_bump_to_solid_rectangle_at_origin(w_2, h_2, circle2_before, circle2_after))
        .toStrictEqual(new Point(2, 2))
})

const w_3 = 2
const h_3 = 4

const circle3_before = new Circle(new Point(-3, 0), 1)
const circle3_after = new Circle(new Point(0, 3), 1)

test('circle3 bumping to rect3 to (-2, 3)', () => {
    expect(circle_bump_to_solid_rectangle_at_origin(w_3, h_3, circle3_before, circle3_after))
        .toStrictEqual(new Point(-2, 3))
})