<template>
  <div class="icons">
    <div class="icon" v-for="item of iconList" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.iconUrl"/>
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      iconList: [{
        id: '1001',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '1002',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
      }, {
        id: '1003',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
      }, {
        id: '1004',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1811/5e/c640ec3b7d7ae802.png'
      }, {
        id: '1005',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
      }, {
        id: '1006',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png'
      }, {
        id: '1007',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png'
      }, {
        id: '1008',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .icons
    overflow hidden
    width 100%
    height 0
    padding-bottom 50%
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .66rem
        line-height: .66rem
        text-align: center
        color: $darkTextColor
</style>
