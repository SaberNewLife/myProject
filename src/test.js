
//这是node中向外暴露接口的方法
//以var xxx=require()导入模块
// module.exports={
//
// }

/*
*  ES6中也以规范的方式来规定导入和导出模块   成套使用   export default暴露出来，import来引入
*   import xxx from xxx    导入模块
*   export default      导出（即向外暴露接口的方式）
*      1, 暴露出去的成员可以以任意名称变量来接收
*      2, 一个js中只允许一个export default存在，不能暴露多次
*   还能使用export 向外暴露，但是引入的时候必须加{},且暴露出的成员名称不能变，得对应
*      如果想改名字，可以使用as 来取别名
*      title as title123
*   export其实就是按需导出，而export default可以暴露出多个成员
*   export var title='name'
*
*   import {title} from '.../../xxx.js'
*
* */

export default{
    name:'zs',
    age:25
}
export var title='小星星'