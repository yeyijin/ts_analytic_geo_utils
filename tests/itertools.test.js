/*
 * @Author: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Date: 2020-04-30 11:42:13
 * @LastEditTime: 2020-04-30 16:23:59
 * @LastEditors: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Description: itertools的单元测试
 * @如有问题，请联系维护人
 */

var itertools =  require('../src/itertools')

test('test permutation of num', () => {
    expect(itertools.permutation([1, 2, 3])).toStrictEqual([[1, 2], [1, 3], [2, 3]]);
});

test('test permutation of tuple', () => {
    expect(itertools.permutation([[1, 2], [1, 3], [1, 4]]))
        .toStrictEqual([[[1, 2], [1, 3]], [[1, 2], [1,4]], [[1, 3], [1, 4]]]);
});
