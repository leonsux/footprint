### 故事

##### 请求地址

`/api/story/stories`

##### 请求方式

`GET`

##### 请求参数

、、、
{
  storyType:"cate", //故事类型,"cate":美食,"culture":文化,"house:"房源,"scenic":景点, [字符串:必填]    
  keywords:"奶茶" //关键字[字符串:选填]
  start: 0, //记录开始值 [数值：必填]
  count: 10 //返回记录条数 [数值：必填]
}
、、、

##### 返回数据
```
{ 
  "errcode": 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
  "errmsg": "", // 错误信息：[字符串：默认为空]
  "start": 0, //记录开始值 [数值：必填]
  "count": 10, //返回记录条数 [数值：必填]
  "total": 120, //总记录条数 [数值：必填]
  "data":{
    imgUrl:"./static/images/story/1.jpg", //图片路径  [字符串:选填]
    site:"香港",//地点, [字符串:选填]
    title:"有人到香港喝咖啡" //题目, [字符串:选填]
    userImgUrl:"./staic/images/user/1.jpg" //用户头像, [字符串，选填]
    thrumbUp:{ //点赞, [对象:选填]
      thrumbUpstate:"1",//点赞状态 0：未点赞,1：已点赞 [数值:选填]
      thrumbnum:"1" //评论数 [数值:选填]
    } 
    comment:{ //评论 [对象:选填]
      commentstate:"0",//评论状态 0：未评论，1：已评论 [数值:选填]
      commentnum:"0" //评论数 [数值:选填]           
    }
}
```

### 写故事

##### 请求地址

`api/story/writeStory`

##### 请求方式

`POST`

##### 请求参数

```
{
  storyType:"cate", //故事类型,"cate":美食,"culture":文化,"house:"房源,"scenic":景点, [字符串:必填]   
}
```

##### 返回数据
```
{
  userId: "1", //[数值:必填]
  "errcode": 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
  "errmsg": "", // 错误信息：[字符串：默认为空]
  datas:{         
    imgUrl:"./static/images/story/1.jpg", //图片路径  [字符串:选填]
    site:"香港",//地点, [字符串:选填]
    title:"有人到香港喝咖啡" //题目, [字符串:选填]
    content:"有人到香港喝咖啡有人到香港喝咖啡有人到香港喝咖啡", //内容,[字符串:选填]
    userImgUrl:"./staic/images/user/1.jpg", //用户头像
    data:2017-7-10  //[数值:必填] 
  }

}
```



