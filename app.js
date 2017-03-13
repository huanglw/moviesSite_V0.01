/*const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.listen(8080, () => {
  console.log(`App listening at port 8080`)
})*/

var express =  require('express')
var path = require('path')
var port = process.env.PORT || 8080
var app = express()

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(express.static(path.join(__dirname,'/bower_components')))
app.use(express.static(path.join(__dirname,'/public/images')))
app.listen(port)

console.log('weixin start')

//index page
app.get('/',function(req,res){
  res.render('index',{
    title:'电影首页',
    movies:[{
      title:'电影1',
      _id: 1,
      poster:'/poster01.jpg'
    },{
      title:'电影2',
      _id: 2,
      poster:'/poster01.jpg'
    },{
      title:'电影3',
      _id: 3,
      poster:'/poster01.jpg'
    },{
      title:'电影4',
      _id: 4,
      poster:'/poster01.jpg'
    },{
      title:'电影5',
      _id: 5,
      poster:'/poster01.jpg'
    },{
      title:'电影6',
      _id: 6,
      poster:'/poster01.jpg'
    },{
      title:'电影7',
      _id: 7,
      poster:'/poster01.jpg'
    },{
      title:'电影8',
      _id: 8,
      poster:'/poster01.jpg'
    },{
      title:'电影9',
      _id: 9,
      poster:'/poster01.jpg'
    },{
      title:'电影10',
      _id: 10,
      poster:'/poster01.jpg'
    },{
      title:'电影11',
      _id: 11,
      poster:'/poster01.jpg'
    },{
      title:'电影12',
      _id: 12,
      poster:'/poster01.jpg'
    }]
  })
})

//detail page
//detail page
app.get('/movie/:id',function(req,res){
  res.render('detail',{
    title:'电影详情页',
    movie:{
      title:"I Robot",
      doctor:"huanglw",
      country:"America",
      language:"English",
      year: 2014,
      summary:"一部由艾萨克 · 阿西莫夫的短篇小说《我，机器人》改编，耗资超过一亿美金的现代科" +
      "幻电影。该故事背景设定在 2035 年，一个地球上每十五人就拥有一台人工智能机器人的时代。" +
      "机器工人、机器助理无处不在，它们甚至渗入家庭生活，担当起保姆，护理的责任，人们越来越" +
      "依赖先进的科技。该影片即是讲述人和机器之间相处，感情纠葛的故事。由当红影星威尔 史密斯主演。"
    }
  })
})

//admin page
app.get('/admin/movie',function(req,res){
  res.render('admin',{
    title:'电影资源后台管理页',
    movie:{
      title:'',
      director:'',
      country:'',
      language:'',
      poster:'',
      flash:'',
      year:'',
      summary:''
    }
  })
})

//list page
app.get('/admin/list',function(req,res){
  res.render('list',{
    title:'电影列表页',
    movies:[{
      _id: 1,
      title:"电影NO.1",
      doctor:"huanglw",
      country:"China",
      year:"2015"
    },{
      _id: 2,
      title:"电影NO.2",
      doctor:"huanglw",
      country:"China",
      year:"2015"
    },{
      _id: 3,
      title:"电影NO.3",
      doctor:"huanglw",
      country:"China",
      year:"2015"
    },{
      _id: 4,
      title:"电影NO.4",
      doctor:"huanglw",
      country:"China",
      year:"2015"
    },{
      _id: 5,
      title:"电影NO.5",
      doctor:"huanglw",
      country:"China",
      year:"2015"
    },{
      _id: 6,
      title:"电影NO.6",
      doctor:"huanglw",
      country:"China",
      year:"2015"
    },{
      _id: 7,
      title:"电影NO.7",
      doctor:"huanglw",
      country:"China",
      year:"2015"
    },{
      _id: 8,
      title:"电影NO.8",
      doctor:"huanglw",
      country:"China",
      year:"2015"
    }]
  })
})
