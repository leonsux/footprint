# footprint

### mock数据

在本地安装`json-server`

在本地（static目录）创建mock目录

创建如下文件：

> data1.json //mock数据1

> data2.json //mock数据2

> mock.js //

```
const data1 = require('./data1.json')

const data2 = require('./data2.json')

module.exports = () => {
  return {
    data1,
    data2
  }
}

```

> routers.json 配置路由

```
{
  "/api/data1": "/data1",
  "/api/data2": "/data2"
}
```

> json-server ./static/mock/mock.js -r ./static/mock/routers.json -p 9000 //启动服务

> 设置快捷启动，在package.json的scripts中添加

`"mock": "json-server ./static/mock/mock.js -r ./static/mock/routers.json -p 9000"`

> 在config目录下的index.js中配置代理

```
proxyTable: {
  '/api': {
    target: 'http://localhost:9000',
    changeOrigin: true
  }
}
```


