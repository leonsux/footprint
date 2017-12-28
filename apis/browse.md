### 房源

##### 请求地址

`/api/browse/hourse`

##### 请求方式

`GET`

##### 请求参数

```
{
  "duration": {  //持续时间，[对象：选填]
    "from": "2017-10-12", //起始日期，[字符串：选填]
    "to": "2017-11-19" //结束日期，[字符串：选填]
  },
  "search_keyword": "关键字", //搜索关键字,[字符串：选填]
  "tenant": { //房客 [对象：选填]
    "adult": 2, //成人 [字符串：选填]
    "child": 0, //儿童 [字符串：选填]
    "baby": 1, //婴幼儿 [字符串：选填]
    "pet": 2 //宠物 [字符串：选填]
  },
  "price_range": { //价格区间，[对象：选填]
    "from": 100, // 最低价格，[数值：选填]
    "to": 200 // // 最高价格，[数值：选填]
  },
  "hourse_type": "all_hourse" //房间类型包括: "all_hourse"：整套房源，"single_hourse"：独立房间，"common_hourse"：合住房间 [字符串：必填]
  "hourse_location": "北京" //房源地址，[字符串：选填]
}
```

##### 返回数据

```
{
  "owner_id": 7534213, // 房源所有者，[数值：必填]
  "owner_img": "/image/af.jpg", //房源所有者头像，[字符串：必填]
  "hourse_img": "/images/h1.jpg", //房源图片路径，[字符串：必填]
  "hourse_price": "￥208/晚", //价格，[字符串：必填]
  "evaluate_num": 45, //评论数，[数值：必填]
  "hourse_rank": 4.5, //好评度，最高为5，[数值：必填]
  "hourse_location": "北京", //房源地址，[字符串：选填]
  "hourse_type": "all_hourse" //房间类型包括: "all_hourse"：整套房源，"single_hourse"：独立房间，"common_hourse"：合住房间 [字符串：必填]
}
```


### 体验

##### 请求地址

`api/browse/experience`

##### 请求方式

`GET`

##### 请求参数

```
{
  "experience_type": "culture", // 体验类型，包括："culture"文化，"sport"运动，"natural"自然，"food"餐饮
}
```

##### 返回数据

```
{
  "experiences": [
    {
      "experience_img": '/image', //图片路径，[字符串：必填],
      "experiences_location": "北京", //体验地址，[字符串：必填]
      "experiences_price": 34, //价格，[数值：必填]
      "evaluate_num": 24, // 评论数 ，[数值：必填]
      "experiences_rank": 4.5, //好评度，[数值：必填]
    }
  ]
}
```

### 民宿类型

##### 请求地址

`api/browse/home_type`

##### 请求方式
  
`GET`

##### 请求数据

无

##### 返回数据

```
{
  "home_types": [
    {
      "type_name": "独立农舍民房型", //类型名，[字符串：必填]
      "post_img": "image/img.jpg", //封面图，[字符串：必填]
      "real_img": "image/img.jpg", //内容图，[字符串：必填]
      "type_detail": "好玩儿~", //详情，[字符串：必填]
      "type_price": 901, //价格，[数值：必填]
      "type_rank": 3.4, //好评度，[数值：必填]
    }
  ]
}
```