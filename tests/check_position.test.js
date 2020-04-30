/*
 * @Author: huangbaochen<huangbaochenwo@live.com>
 * @Date: 2020-05-01 01:31:18
 * @LastEditTime: 2020-05-01 01:41:23
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 位置模块测试
 * @FilePath: \save-myself-off-2019-ncovd:\Dropbox\xiaowanzi\project\ts_utils\tests\check_position.test.js
 * @No MERCY
 */
import { Point, LineSeg } from '../src/base_class'
import { is_point_in_lineseg } from '../src/check_position'

const point_test_1 = new Point(0, 0)
const point_test_2 = new Point(1, 1)
const point_test_3 = new Point(0, 1)
const point_test_4 = new Point(1./2., 1./2.)

const lineseg_test_1 = new LineSeg(point_test_1, point_test_2)
const lineseg_test_2 = new LineSeg(point_test_2, point_test_3)
const lineseg_test_3 = new LineSeg(point_test_3, point_test_1)

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
