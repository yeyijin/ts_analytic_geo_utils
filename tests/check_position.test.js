/*
 * @Author: huangbaochen<huangbaochenwo@live.com>
 * @Date: 2020-05-01 01:31:18
 * @LastEditTime: 2020-05-05 17:33:17
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 位置模块测试
 * @FilePath: \save-myself-off-2019-ncovd:\Dropbox\xiaowanzi\project\ts_utils\tests\check_position.test.js
 * @No MERCY
 */
import { Point, LineSeg, LineFunctionMode, LineSegFunctionMode, NumberRange } from '../src/base_class'
import { 
    is_point_in_lineseg, 
    linesegs_intersect_point, 
    is_lineseg_intersect,
    is_line_intersect,
    lines_intersect_point,
    is_line_parallel
    } from '../src/check_position'

const point_test_1 = new Point(0, 0)
const point_test_2 = new Point(1, 1)
const point_test_3 = new Point(0, 1)
const point_test_4 = new Point(1./2., 1./2.)
const point_test_5 = new Point(1, 0)

const lineseg_test_1 = new LineSeg(point_test_1, point_test_2)
const lineseg_test_2 = new LineSeg(point_test_2, point_test_3)
const lineseg_test_3 = new LineSeg(point_test_3, point_test_1)
const lineseg_test_4 = new LineSeg(point_test_3, point_test_5)
const lineseg_test_5 = new LineSeg(point_test_1, point_test_5)
const lineseg_test_6 = new LineSeg(point_test_4, point_test_5)


test('p1 in l3', () => {
    expect(is_point_in_lineseg(point_test_1, lineseg_test_3))
        .toStrictEqual(true)
});

test('p4 in l1', () => {
    expect(is_point_in_lineseg(point_test_4, lineseg_test_1))
        .toStrictEqual(true)
});

test('p4 not in l2', () => {
    expect(is_point_in_lineseg(point_test_4, lineseg_test_2))
        .toStrictEqual(false)
});

test('p4 not in l3', () => {
    expect(is_point_in_lineseg(point_test_4, lineseg_test_3))
        .toStrictEqual(false)
})

test('p3 in l2', () => {
    expect(is_point_in_lineseg(point_test_3, lineseg_test_2))
        .toStrictEqual(true)
})

test('p3 not in l1', () => {
    expect(is_point_in_lineseg(point_test_3, lineseg_test_1))
        .toStrictEqual(false)
})

test('l1 and l2 is intersect', () => {
    expect(is_lineseg_intersect(lineseg_test_1, lineseg_test_2))
        .toStrictEqual(true)
})

test('l1 line and l2 line is intersect', () => {
    expect(is_line_intersect(lineseg_test_1.funMode(), lineseg_test_2.funMode()))
        .toStrictEqual(true)
})

test('l2 line and l5 line is not intersect', () => {
    expect(is_line_intersect(lineseg_test_2.funMode(), lineseg_test_5.funMode()))
        .toStrictEqual(false)
})

test('l2 and l5 is not intersect', () => {
    expect(is_lineseg_intersect(lineseg_test_2, lineseg_test_5))
        .toStrictEqual(false)
})

test('l2 and l5 is not intersect at any point', () => {
    expect(linesegs_intersect_point(lineseg_test_2, lineseg_test_5))
        .toStrictEqual(undefined)
})

test('l2 line and l5 line is not intersect at any point', () => {
    expect(lines_intersect_point(lineseg_test_2.funMode(), lineseg_test_5.funMode()))
        .toStrictEqual(undefined)
})

test('l6 and l3 is not intersect', () => {
    expect(is_lineseg_intersect(lineseg_test_6, lineseg_test_3))
        .toStrictEqual(false)
})

test('l2 line and l5 line is parallel', () => {
    expect(is_line_parallel(lineseg_test_2.funMode(), lineseg_test_5.funMode()))
        .toStrictEqual(true)
})

test('l1 line and l2 line is intersect at (1, 1)', () => {
    expect(lines_intersect_point(lineseg_test_1.funMode(), lineseg_test_2.funMode()))
        .toStrictEqual(new Point(1, 1))
})

test('l1 line and l3 line is intersect at (0, 0)', () => {
    expect(lines_intersect_point(lineseg_test_1.funMode(), lineseg_test_3.funMode()))
        .toStrictEqual(new Point(0, 0))
})

test('l1 line and l4 line is intersect at (1/2, 1/2)', () => {
    expect(lines_intersect_point(lineseg_test_1.funMode(), lineseg_test_4.funMode()))
        .toStrictEqual(point_test_4)
})

test('l1 and l4 is intersect at (1/2, 1/2)', () => {
    expect(linesegs_intersect_point(lineseg_test_1, lineseg_test_4))
        .toStrictEqual(point_test_4)
})

test('l6 and l3 is not intersect', () => {
    expect(linesegs_intersect_point(lineseg_test_6, lineseg_test_3))
        .toStrictEqual(undefined)
})

test('l1 funmode is (1, -1, 0)', () => {
    expect(lineseg_test_1.funMode())
        .toStrictEqual(new LineFunctionMode(1, -1, 0))
})

test('l4 funmode is (1, 1, -1)', () => {
    expect(lineseg_test_4.funMode())
        .toStrictEqual(new LineFunctionMode(1, 1, -1))
})

test('l2 funmode is (0, 1, -1)', () =>　{
    expect(lineseg_test_2.funMode())
        .toStrictEqual(new LineFunctionMode(0, 1, -1))
})

test('l3 funmode is (1, 0, 0)', () => {
    expect(lineseg_test_3.funMode())
        .toStrictEqual(new LineFunctionMode(1, 0, -0))
})

