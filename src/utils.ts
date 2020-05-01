/*
 * @Author: huangbaochen<huangbaochenwo@live.com>
 * @Date: 2020-05-01 01:05:21
 * @LastEditTime: 2020-05-01 01:15:40
 * @LastEditors: huangbaochen<huangbaochenwo@live.com>
 * @Description: 工具类
 * @FilePath: \save-myself-off-2019-ncovd:\Dropbox\xiaowanzi\project\ts_utils\src\utils.ts
 * @No MERCY
 */

//自定义round函数,float截取round_num位小数
export let custom_round = (n: number, round_num: number) => {
    return Math.round(n * Math.pow(10, round_num)) / Math.pow(10, round_num) 
}
