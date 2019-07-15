const path = require('path');
//引入插件
const htmlWebpackPlugin=require('html-webpack-plugin')
//引入webpack模块
var webpack = require('webpack');
//导入vue-loader相关的包
const { VueLoaderPlugin } = require('vue-loader');
/*
* 当以命令行形式运行 webpack 或 webpack-dev-server 的时候，工具会发现，
* 我们并没有提供 要打包 的文件的 入口 和 出口文件，此时，他会检查项目根目录中的配置文件，
* 并读取这个文件，就拿到了导出的这个 配置对象，然后根据这个对象，进行打包构建
* */
module.exports={
    entry:'./src/main.js',//源文件
    output:{
        filename:'bundle.js',//文件名称
        path:path.resolve(__dirname, './dist')//路径
    },//输出文件及路径
    devServer: {//配置devServer的第二种方式，第一种方式是在package.json中配置的
        open:true,//表示自动打开浏览器
        port:4000,//启动的端口
        contentBase:'src',//默认打开路径
        hot:true//热刷新，不用刷新页面，部分更新
    },
    plugins: [//配置插件的节点 数组
        new htmlWebpackPlugin({
        //    首先是一个模板对象，定义要复制的本地html文件的路径，复制到内存中去
            template: path.resolve(__dirname,'./src/index.html'),
        //    目标文件名，放到内存中的文件名   以后直接使用内存中的html文件，速度更快
            filename: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
        // "@babel/plugin-proposal-export-default-from",
        // "@babel/plugin-proposal-logical-assignment-operators",
        // ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
        // ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
        // ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
        // "@babel/plugin-proposal-do-expressions",
        // ["@babel/plugin-proposal-decorators", { "legacy": true }],
        // "@babel/plugin-proposal-function-sent",
        // "@babel/plugin-proposal-export-namespace-from",
        // "@babel/plugin-proposal-numeric-separator",
        // "@babel/plugin-proposal-throw-expressions",
        // "@babel/plugin-syntax-dynamic-import",
        // "@babel/plugin-syntax-import-meta",
        // ["@babel/plugin-proposal-class-properties", { "loose": false }],
        // "@babel/plugin-proposal-json-strings"

    ],//节点数组
//    新建属性节点，用于配置所有的第三方模块加载器
    module: {
        //所有第三方模块的匹配规则
        rules: [
            //使用test()方法来匹配指定的正则表达式   下面表示匹配以.css结尾的字符串，匹配上了，就使用use中的加载器

            //注意：webpack处理第三方文件的过程
            /*
            *  1,判断文件不是js类型文件
            *  2，根据字符串去配置文件中module模块中查找是否有对应的第三方loader规则，如果有，就进行处理
            *  3，匹配上指定的字符串之后，就use后面的loader，从右到左开始调用loader(从后往前调用)，当
            *    调到前面发现再没有loader了，就将结果交给webpack进行打包了
            *
            *  装包，配置即可
            * */
            //配置处理css文件的匹配规则和loader使用规则
            {test:/\.css$/, use: ['style-loader','css-loader']},
            //配置处理less文件的匹配规则和loader使用规则
            {test:/\.less$/, use: ['style-loader','css-loader','less-loader']},
            // {test:/\.scss$/, use: ['style-loader','css-loader','sass-loader']},
            //配置处理图片路径，文件的loader和使用规则   url地址处理loader
            //后面加?表示要传参了  规则和在url地址中传参一样 键值对 例如 id=10
            //limit 表示限制大小为n个字节 ，文件大小大于这个字节，就不会把文件进行base64的转换；小于等于就会进行转换
            //后面的name表示文件名不改变，原来是什么就是什么，而不进行hash处理
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=25000&name=[name].[ext]'},
        //    字体处理
            {test:/\.(ttf|eot|svg|woff|woff2|otf)$/,use:'url-loader'},
        //    配置babel  支持ES6，7高级语法
        //    排除掉node_modules文件夹
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
        //    配置vue文件的loader
            {test:/\.vue$/,use:['vue-loader']}
        ]
    },//第三方模块 各种loader的配置
    //
    resolve: {
        // alias: {
        //     'vue$':'vue/dist/vue.js'
        // }
    }
}