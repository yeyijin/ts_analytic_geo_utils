# ts-analytic-geo-utils

![MIT License](https://img.shields.io/bower/l/bootstrap)  ![GitHub issues](https://img.shields.io/github/issues/threecifanggen/ts_analytic_geo_utils)  ![badge-funcs](./badges/badge-functions.svg)  ![GitHub package.json version](https://img.shields.io/github/package-json/v/threecifanggen/ts_analytic_geo_utils)

常用解析几何函数，`TypeScript`实现。

## 常用API

### 1. 圆撞击中心为原点的矩形后停留的位置

```typescript
import { circle_bump_to_solid_rectangle_at_origin } from './src/last_position'
import { Circle, Point } from './src/base_class'

const w = 4 //定义矩形的长
const h = 2 //定义矩形的宽

const circle_before = new Circle(new Point(2, -2), 1) //定义圆的初始位置
const circle_after = new Circle(new Point(0, 0), 1) //定义圆的最终位置

// 返回点(1, -2)
circle_bump_to_solid_rectangle_at_origin(w, h, circle_before, circle_after)
```

