
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 初始数据数组
    list: [
      { src: '../../img/1.jpg', isof: false, zind: 4,index: 1 },
      { src: '../../img/2.jpg', isof: false, zind: 3,index: 2 },
      { src: '../../img/3.jpg', isof: false, zind: 1,index: 3 },
      { src: '../../img/4.jpg', isof: false, zind: 1,index: 4 },
    ],
  },
  setclass: function (e) {
    // console.log(e.target.dataset.index);
    // console.log(this.data.list);
    let that = this;
    // 获取list数组
    let list = that.data.list;
    // 获取点击元素
    let n = e.target.dataset.index;
  
  

    // 解决第二张图片闪现问题
    // 初始让第二张图片z-index最大
    list[2].zind = 4
    // 循环判断
    for (let i = 0; i < list.length; i++) {
      // console.log(i)
      // 点击和i值相同
      if (n == i) {
        // 让第一张向左
        list[i].isof = !list[i].isof;
        // z-index移到最前面
        list[i].zind = 4;
      } else {
        // 不是就让他变成最小
        list[i].zind = 1;
    }
    // 从第二张开始逐渐z-index变小
    if (n - 1 >= 0) {
      list[n - 1].zind = 3;
    }
    if (n + 1 < list.length) {
      list[n + 1].zind = 3;
    }
    // 从第二张开始逐渐z-index变更小
    if (n - 2 >= 0) {
      list[n - 2].zind =2;
    }
    if (n + 2 < list.length) {
      list[n + 2].zind = 2;
    }
    // 更新list数组
    that.setData({
      list: list
    })
  }
  },
  onLoad: function (options) {

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