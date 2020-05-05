/*
 * @Author: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Date: 2020-04-30 10:54:03
 * @LastEditTime: 2020-05-01 03:24:46
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 检查位置
 * @如有问题，请联系维护人
 */

import { Point, LineSeg, LineFunctionMode } from './base_class'
import { Matrix2x2 } from './linear_algebra'

// 检查点是否在线段上
export function is_point_in_lineseg(p: Point, l: LineSeg): boolean {

    //线段竖直的情况
    if (l.is_vertical()) {
        if ((l.start.x == p.x) && (p.y >= l.bottom().y) && (p.y <= l.top().y)) {
            return true
        } else {
            return false
        }
    }

    //线段水平的情况
    if (l.is_horizon()) {
        if ((l.start.y == p.y) && (p.x >= l.left().x) && (p.x <= l.right().x )) {
            return true
        } else {
            return false
        }
    }

    //其他情况
    if (((l.end.x - l.start.x) * (p.y - l.start.y) == (l.end.y - l.start.y) * (p.x - l.start.x)) && 
        (p.x >= l.left().x) && (p.x <= l.right().x)) {
        return true
    } else {
        return false
    }
}

//判断两个直线是否相交
export function is_line_intersect(l1: LineFunctionMode, l2: LineFunctionMode): boolean {
    const res_matrix = new Matrix2x2(l1.A, l1.B, l2.A, l2.B)
    if (res_matrix.det() == 0) {
        return false
    } else {
        return true
    }
}

//给出两直线交点
export function lines_intersect_point(l1: LineFunctionMode, l2: LineFunctionMode): any {
    if (is_line_intersect(l1, l2)) {
        const scale = new Matrix2x2(l1.A, l1.B, l2.A, l2.B).det()
        const x = new Matrix2x2(l1.C, l1.B, l2.C, l2.B).det() / scale
        const y = new Matrix2x2(l1.A, l1.C, l2.A, l2.C).det() / scale
        return new Point(x, y)
    }
}

//判断两线段是否相交
