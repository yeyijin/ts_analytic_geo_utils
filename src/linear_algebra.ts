/*
 * @Author: huangbaochen<huangbaochenwo@live.com>
 * @Date: 2020-05-01 02:24:12
 * @LastEditTime: 2020-05-05 17:09:03
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 常用线性代数模块
 * @FilePath: \save-myself-off-2019-ncovd:\Dropbox\xiaowanzi\project\ts_utils\src\linear_algebra.ts
 * @No MERCY
 */

// 2*2方阵[[a, b], [c, d]]
export class Matrix2x2 {
    a: number
    b: number
    c: number
    d: number

    constructor(a: number, b: number, c: number,d: number) {
        this.a = a
        this.b = b
        this.c = c
        this.d = d
    }

    //矩阵对应的行列式的值
    det(): number {
        return this.a * this.d - this.b * this.c
    }
}