/*
 * @Author: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Date: 2020-04-30 16:36:45
 * @LastEditTime: 2020-05-01 01:19:07
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 距离
 * @如有问题，请联系维护人
*/
import { Point, LineSeg } from './base_class'

/*
 * 计算p1和p2两点的欧几里得距离
*/
function ecluid_distance(
        p1: Point,
        p2: Point
    ): number {
    const s = new LineSeg(p1, p2)
    return s.ecluid_length()
}

/*
 * p到线段l的距离(可在延长线上)
*/
function ecluid_distance_pl_inf(
        p: Point,
        l: LineSeg
    ): number {
    // 如果线段竖直的情况
    if (l.is_vertical()) {
        return Math.abs(p.x - l.start.x)
    }

    // 如果线段水平的情况
    if (l.is_horizon()) {
        return Math.abs(p.y - l.start.y)
    }

    const scale = Math.sqrt(Math.pow(l.end.y - l.start.y, 2) + 
        Math.pow(l.start.x - l.end.x, 2))
    
    return Math.abs(
        (l.end.y - l.start.y) * p.x + 
        (l.start.x - l.end.x) * p.y - 
        l.start.x * (l.end.y - l.start.y) +
        l.start.y * (l.end.x - l.start.x)
    ) / scale
    
}

export let distance: Object = {
    ecluid_distance: ecluid_distance,
    ecluid_distance_pl_inf: ecluid_distance_pl_inf
}