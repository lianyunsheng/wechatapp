// pages/clock/clock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hour:0,
    minute:0,
    second:0,
    timer:null
  },

  /**
   * 自定义函数
   */
  setTimer:function(){
    this.setData({
      second: new Date().getSeconds() * 6,
      minute: new Date().getMinutes() * 6 + Math.floor((new Date().getSeconds()) / 10),
      hour: (new Date().getHours()) * 30 + Math.floor((new Date().getMinutes()) / 2)
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setTimer();
    setInterval(this.setTimer,1000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})