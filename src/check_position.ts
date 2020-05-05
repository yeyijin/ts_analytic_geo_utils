/*
 * @Author: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Date: 2020-04-30 10:54:03
 * @LastEditTime: 2020-05-05 17:08:11
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 检查位置
 * @如有问题，请联系维护人
 */

import { Point, LineSeg, LineFunctionMode, NumberRange } from './base_class'
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

//判断两个直线是否平行
export function is_line_parallel(l1: LineFunctionMode, l2: LineFunctionMode): boolean {
    return !is_line_intersect(l1, l2)
}

//给出两直线交点
export function lines_intersect_point(l1: LineFunctionMode, l2: LineFunctionMode): any {
    if (is_line_intersect(l1, l2)) {
        const scale = new Matrix2x2(l1.A, l1.B, l2.A, l2.B).det()
        const x = new Matrix2x2(-l1.C, l1.B, -l2.C, l2.B).det() / scale
        const y = new Matrix2x2(l1.A, -l1.C, l2.A, -l2.C).det() / scale
        return new Point(x, y)
    }
}

//判断两线段是否相交
export function is_lineseg_intersect(l1: LineSeg, l2: LineSeg): boolean {
    if (is_line_intersect(l1.funMode(), l2.funMode())) {
        const lip = lines_intersect_point(l1.funMode(), l2.funMode())
        return (new NumberRange(l1.start.x, l1.end.x)).is_contain(lip.x) &&
            (new NumberRange(l2.start.x, l2.end.x)).is_contain(lip.x) &&
            (new NumberRange(l1.start.y, l1.end.y)).is_contain(lip.y) &&
            (new NumberRange(l2.start.y, l2.end.y)).is_contain(lip.y)
    } else {
        return false
    }
}

//判断两线段的交点
export function linesegs_intersect_point(l1: LineSeg, l2: LineSeg): any {
    if (is_lineseg_intersect(l1, l2)) {
        return lines_intersect_point(l1.funMode(), l2.funMode())
    }
}