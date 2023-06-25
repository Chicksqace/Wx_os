var app = getApp();

Page({
  	data: {
  		userInfo: {},
      mode: ['我的收藏','我的订单','我的地址','联系客服','关于我们']
  	},
  	onLoad: function() {
  		var that = this;
  		wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      });
      },
    //   dl(){
    //     wx.redirectTo({
    //         url: '/pages/login/login',
    //       })
    //   }
    userGo(e){
        wx.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
              this.setData({
                userInfo: res.userInfo,
                hasUserInfo: true
              })
            }
          })
            this.setData({
              userInfo: e.detail.userInfo,
            })
    }
})