/*
 * @Author: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Date: 2020-04-30 17:51:16
 * @LastEditTime: 2020-05-05 17:19:32
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 基本几何类测试
 * @如有问题，请联系维护人
 */

import { Rectangle, Point, LineSeg, NumberRange } from '../src/base_class'

const numberrange_1 = new NumberRange(1, 10)
const numberrange_2 = new NumberRange(1, 1)

test('numberrange_1\'s range is 9', () => {
    expect(numberrange_1.range())
        .toStrictEqual(9)
})


test('numberrange_2 is isolate', () => {
    expect(numberrange_2.is_isolate())
        .toStrictEqual(true)
})

test('numberrange_1 is not isolate', () => {
    expect(numberrange_1.is_isolate())
        .toStrictEqual(false)
})

const test_rectangle_1 = new Rectangle(
    new Point(1., 1.),
    Math.sqrt(2.),
    Math.sqrt(2.),
    Math.PI * 3. / 2.
)

test('Point Left', () => {
    expect((new LineSeg(new Point(0, 0), new Point(1, 1))).left()).toStrictEqual(new Point(0, 0))
});

test('Point is equal to Point', () => {
    expect(new Point(1, 1)).toStrictEqual(new Point(1, 1))
});

test('Float == Float', () => {
    expect(1. / 3. * 3.).toStrictEqual(1.)
});

test('Point (0, 0) is origin', () => {
    expect(new Point(0, 0).is_origin()).toStrictEqual(true)
});

const point_test_1 = new Point(0, 0)
const point_test_2 = new Point(1, 1)
const point_test_3 = new Point(0, 1)

const lineseg_test_1 = new LineSeg(point_test_1, point_test_2)
const lineseg_test_2 = new LineSeg(point_test_2, point_test_3)
const lineseg_test_3 = new LineSeg(point_test_3, point_test_1)

test('LineSeg(Point(0, 0), Point(1, 1))\'s length is sqrt(2)', () => {
    expect(Math.round((new LineSeg(new Point(0, 0), new Point(1, 1))).ecluid_length() * 100) / 100)
        .toStrictEqual(1.41)
});

test('vertical test 1', () => {
    expect(lineseg_test_1.is_vertical()).toStrictEqual(false)
});

test('vertical test 2', () => {
    expect(lineseg_test_2.is_vertical()).toStrictEqual(false)
});

test('vertical test 3', () => {
    expect(lineseg_test_3.is_vertical()).toStrictEqual(true)
});

test('horizon test 1', () => {
    expect(lineseg_test_1.is_horizon()).toStrictEqual(false)
});

test('horizon test 2', () => {
    expect(lineseg_test_2.is_horizon()).toStrictEqual(true)
});

test('horizon test 3', () => {
    expect(lineseg_test_3.is_horizon()).toStrictEqual(false)
});

test('point origin test 2', () => {
    expect(point_test_2.is_origin()).toStrictEqual(false)
});

test('point origin test 3', () => {
    expect(point_test_3.is_origin()).toStrictEqual(false)
});

test('lineseg left test', () => {
    expect(lineseg_test_2.left()).toStrictEqual(point_test_3)
});

