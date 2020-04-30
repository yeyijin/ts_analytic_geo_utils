/*
 * @Author: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Date: 2020-04-30 16:40:56
 * @LastEditTime: 2020-05-01 01:10:25
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 测试距离
 * @如有问题，请联系维护人
 */

import { distance } from '../src/distance'
import { Point, LineSeg } from '../src/base_class'
import { custom_round } from '../src/utils'

test('test ecliude_distance between (0, 0) and (1, 1)', () => {
    expect(Math.round(distance.ecluid_distance(new Point(0., 0.), new Point(1., 1.)) * 100) / 100)
        .toStrictEqual(1.41)
});

const point_test_1 = new Point(0, 0)
const point_test_2 = new Point(1, 1)
const point_test_3 = new Point(0, 1)

const lineseg_test_1 = new LineSeg(point_test_1, point_test_2)
const lineseg_test_2 = new LineSeg(point_test_2, point_test_3)
const lineseg_test_3 = new LineSeg(point_test_3, point_test_1)

test('ecluid distance pl infinit test 1', () => {
    expect(distance.ecluid_distance_pl_inf(point_test_2, lineseg_test_3))
        .toStrictEqual(1)
});

test('ecluid distance pl infinit test 2', () => {
    expect(distance.ecluid_distance_pl_inf(point_test_1, lineseg_test_2))
        .toStrictEqual(1)
});

test('ecluid distance pl infinit test 3', () => {
    expect(custom_round(distance.ecluid_distance_pl_inf(point_test_3, lineseg_test_1), 2))
        .toStrictEqual(0.71)
});
