/*
 * @Author: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Date: 2020-04-30 16:59:33
 * @LastEditTime: 2020-05-01 01:24:52
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 基本类
 * @如有问题，请联系维护人
 */
export class Point {
    x: number
    y: number

    constructor(x: number, y:number) {
        this.x = x
        this.y = y
    }

    is_origin(): boolean {
        if (this.x == 0 && this.y == 0) {
            return true
        } else {
            return false
        }
    }
}

export class LineSeg {
    start: Point
    end: Point

    constructor(start: Point, end: Point) {
        this.start = start
        this.end = end
    }

    ecluid_length(): number {
        return Math.sqrt(Math.pow((this.start.x - this.end.x), 2) + 
            Math.pow((this.start.y- this.end.y), 2))
    }
    
    is_vertical(): boolean {
        return this.start.x == this.end.x
    }

    is_horizon(): boolean {
        return this.start.y == this.end.y
    }

    //获取线段左边的点
    left(): Point {
        if (this.start.x < this.end.x) {
            return this.start
        } else {
            return this.end
        }
    }

    //获取线段左边的点
    right(): Point {
        if (this.start.x >= this.end.x) {
            return this.start
        } else {
            return this.end
        }
    }

    //获取线段上侧的点
    top(): Point {
        if (this.start.y < this.end.y) {
            return this.end
        } else {
            return this.start
        }
    }

    //获取线段上侧的点
    bottom(): Point {
        if (this.start.y >= this.end.y) {
            return this.end
        } else {
            return this.start
        }
    }
}

export class circle {
    center: Point
    r: number
    d: number

    constructor(center: Point, r: number) {
        this.center = center
        this.r = r
        this.d = r * 2
    }

    is_center_at_origin(): boolean {
        return this.center.is_origin()
    }
}

/*
 * 矩形的类
*/
export class Rectangle {
    center: Point //矩阵中心
    w: number
    h: number
    theta: number
    node1: Point
    node2: Point
    node3: Point
    node4: Point

    constructor(center: Point, w: number, h: number, theta: number) {
        this.center = center
        this.w = w
        this.h = h
        this.theta = theta

        const x0 = (2 * center.x - h * Math.sin(theta) - w * Math.cos(theta)) / 2
        const y0 = (2 * center.y - h * Math.cos(theta) - w * Math.sin(theta)) / 2

        this.node1 = new Point(x0 + h * Math.sin(theta), y0)
        this.node2 = new Point(x0, y0 + h * Math.cos(theta))
        this.node3 = new Point(x0 + h * Math.sin(theta) + w * Math.cos(theta), y0 + w * Math.sin(theta))
        this.node4 = new Point(x0 + w * Math.cos(theta), y0 + h * Math.cos(theta) + w * Math.sin(theta))
    }

    get_four_lineseg (): Array<LineSeg> {
        return [
            new LineSeg(this.node1, this.node3),
            new LineSeg(this.node3, this.node4),
            new LineSeg(this.node4, this.node2),
            new LineSeg(this.node2, this.node1)
        ] 
    }


}