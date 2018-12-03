<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-image" :src="item.imageUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '1001',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1811/4d/6706bf772c05ce02.jpg_750x200_773e75f0.jpg'
        }, {
          id: '1002',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
        }, {
          id: '1003',
          imageUrl: 'http://img1.qunarzz.com/piao/fusion/1709/39/b98fdb3ee7478e02.jpg_750x200_be64b756.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff

  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.25%
    .swiper-image
      width 100%
</style>
