#这是我的一个完整的项目，呕心沥血啊
#希望您能喜欢，谢谢
#陈洋 于2019年7月   
#[开源协议的区别？]
(https://www.oschina.net/question/12_2664)

#1，制作首页app组件
   1，header区域，使用的是mint-ui的Header组件
   2，制作底部的Tabbar区域，使用的是MUI的tabbar
      制作购物车图标时，查看icon-extra.html中，需要导入额外的样式文件mui/css下
      还要拷贝额外的字体库extra.ttf文件到mui/fonts下面
      为购物车添加两个类
   3,中间区域放置路由模块 将下面的按钮配成路由链接并设置路由高亮，通过
   linkActiveClass改变高亮时的类名
   4，添加4个路由组件  适配下方的路由链接