/*
 * @Author: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Date: 2020-04-30 11:11:55
 * @LastEditTime: 2020-04-30 16:17:17
 * @LastEditors: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Description: 一些好用的函数式列表操作
 * @如有问题，请联系维护人
*/

/*
 * 从array中组合取出不重复的两个形成新的array
 * 
 * examples:
 * permutation([1, 2, 3]) => [[1, 2], [1, 3], [2, 3]]
*/
export let permutation = function(a: Array<any>) {
    const length_of_a = a.length
    var i: number
    var j: number
    var res = []

    for (i=0; i<length_of_a; i++) {
        for (j=i+1; j<length_of_a; j++) {
            res.push([a[i], a[j]])
        }
    } 
    
    return res
}
