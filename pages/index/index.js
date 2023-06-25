var WxAutoImage = require('../../js/wxAutoImageCal.js');
var app = getApp();

Page({
    data: {
        slide_img: {},
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        iconArray: [
            {
                "iconUrl": '../../images/icon-qiandao.png',
                "iconText": '签到'
            },
            {
                "iconUrl": '../../images/icon-fujin.png',
                "iconText": '附近'
            },
            {
                "iconUrl": '../../images/icon-zhanhui.png',
                "iconText": '游展'
            },
            {
                "iconUrl": '../../images/icon-fuli.png',
                "iconText": '福利'
            },
            {
                "iconUrl": '../../images/icon-muma.png',
                "iconText": '碳玩乐'
            },
            {
                "iconUrl": '../../images/icon-xingxing.png',
                "iconText": '碳周边'
            },
            {
                "iconUrl": '../../images/icon-tiyu.png',
                "iconText": '碳运动'
            },
            {
                "iconUrl": '../../images/icon-qinzi.png',
                "iconText": '碳亲子'
            }
        ],
        itemArray: [
            {
                "itemUrl": '../../images/index/p1.jpg',
                "itemText": '创新驱动，特色发展'
            },
            {
                "itemUrl": '../../images/index/p2.jpg',
                "itemText": '让生活更美好，共同迈向低碳时代'
            },
            {
                "itemUrl": '../../images/index/p3.jpg',
                "itemText": '崇尚低碳生活，共创节约社会'
            },
        ]
    },
    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    },
    giveInfo(){
        let that=this
        wx.request({
          url: 'http://192.168.31.211:8088/wxHome',
          success(res){
            console.log(res.data);
            that.setData({
                slide_img:res.data
            })
          }
        })
    },
    onLoad(){
        this.giveInfo()
    }
})