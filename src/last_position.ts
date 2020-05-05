/*
 * @Author: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Date: 2020-04-30 10:55:06
 * @LastEditTime: 2020-05-05 21:46:34
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 获取运动后最后的位置
 * @如有问题，请联系维护人
*/
import { Circle, Point, Rectangle, LineSeg } from './base_class'
import { linesegs_intersect_point } from './check_position'
import { ecluid_distance } from './distance'

function reduce_min_distance_to_point(p: Point) {
    return (p1: Point, p2: Point) => ecluid_distance(p, p1) < ecluid_distance(p, p2) ? p1 : p2
}

export function circle_bump_to_solid_rectangle_at_origin (
    w: number, h: number, // 中心位于原点的矩形的宽（宽是指x轴方向的线段）和高
    circle_before: Circle,
    circle_after: Circle    
    ): Point {
    const circle_trace = new LineSeg(circle_before.center, circle_after.center)
    const rect = new Rectangle(new Point(0, 0), w, h, 0)
    const edge_list = rect.get_four_lineseg()

    var intersect_first_point = (
        edge_list
            .map(
                (edge) => linesegs_intersect_point(edge, circle_trace)
           )
            .filter(
                (p) => typeof p !== 'undefined'
            )
            .reduce(reduce_min_distance_to_point(circle_before.center))
    )
    if (intersect_first_point.x == w/2) {
        intersect_first_point.x += circle_before.r
    }
    if (intersect_first_point.x == -w/2) {
        intersect_first_point.x -= circle_before.r
    }
    if (intersect_first_point.y == h/2) {
        intersect_first_point.y += circle_before.r
    }
    if (intersect_first_point.y == -h/2) {
        intersect_first_point.y -= circle_before.r
    }
    return intersect_first_point
}