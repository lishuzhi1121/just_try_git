//swiper.js

Page({
  data: {
    slider: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 1500,
    duration: 500,
    // current: 0,
    swiperCurrent: 0,
  },
  swiperChange: function (e) {
    console.log(e.detail.current);
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  dotsEvent: function (e) {
    console.log(e.currentTarget.id);
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  }
  
})
