/*
 * @Author: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Date: 2020-04-30 10:54:03
 * @LastEditTime: 2020-05-01 01:36:18
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 检查位置
 * @如有问题，请联系维护人
 */

import { Point, LineSeg } from './base_class'

// 检查点是否在线段上
export function is_point_in_lineseg(p: Point, l: LineSeg): boolean {
    if (l.is_vertical()) {
        if ((l.start.x == p.x) && (p.y >= l.bottom().y) && (p.y <= l.top().y)) {
            return true
        } else {
            return false
        }
    }

    if (l.is_horizon()) {
        if ((l.start.y == p.y) && (p.x >= l.left().x) && (p.x <= l.right().x )) {
            return true
        } else {
            return false
        }
    }
    
    if (((l.end.x - l.start.x) * (p.y - l.start.y) == (l.end.y - l.start.y) * (p.x - l.start.x)) && 
        (p.x >= l.left().x) && (p.x <= l.right().x)) {
        return true
    } else {
        return false
    }
}