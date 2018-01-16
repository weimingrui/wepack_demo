module.exports = {
    entry:  {
        test:"./app/test.js",
        greeter:"./app/Greeter.js",
        main:"./app/main.js",
    },//已多次提及的唯一入口文件,
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: '[name].js'
    }
}

