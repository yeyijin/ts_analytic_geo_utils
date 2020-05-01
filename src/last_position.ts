/*
 * @Author: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Date: 2020-04-30 10:55:06
 * @LastEditTime: 2020-04-30 17:44:59
 * @LastEditors: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Description: 获取运动后最后的位置
 * @如有问题，请联系维护人
*/
import { permutation } from './itertools'

// 圆(cx1, cy1, r) 运动到(cx2, cy2, r)撞击无弹性矩形(0, 0, w, h, 0)，
// 反弹后的位置吸附在矩形上的位置
function circle_bump_to_solid_triangle_at_origin (
    w: number, h: number, // 中心位于原点的矩形的宽（宽是指x轴方向的线段）和高
    cx1: number, cy1: number, r: number, // 起始圆心位置和半径 
    cx2: number, cy2: number // 终止时圆心位置
): [number, number] { // 返回元组表示吸附在矩形后的位置
    const four_point_of_rectangle: Array<[number, number]> = [
        [w/2, h/2],
        [-w/2, h/2],
        [w/2, -h/2],
        [-w/2, -h/2]
    ] //矩形四个点
    if (cx1 == cx2) {
        
    }
    return [0, 0]
}

/*
 * 判断两线段(x11, y11, x12, y12)和(x21, y22, x22, y22)是否相交
*/
function check_intersect_between_two_line_segment(
    x11: number, y11: number, 
    x12: number, y12: number,
    x21: number, y21: number,
    x22: number, y22: number
    ) {
    
    //第二条直线是垂直线的情况
    if (x21 == x22) {
        
    }
    
    if ((y1))
}
