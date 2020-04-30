/*
 * @Author: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Date: 2020-04-30 16:19:41
 * @LastEditTime: 2020-04-30 16:20:49
 * @LastEditors: huangbaochen aka 3Gee <huangbaochenwo@live.come>
 * @Description: babel配置
 * @如有问题，请联系维护人
 */
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-typescript',
    ],
  };