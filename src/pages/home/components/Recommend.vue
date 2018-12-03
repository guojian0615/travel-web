<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      list: [{
        id: '1001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg',
        title: '远去的恐龙',
        desc: '这个季节很适合去看看'
      }, {
        id: '1002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1611/96/96c7b547622c8334a3.img.jpg_200x200_cd0b30b0.jpg',
        title: '西山温泉',
        desc: '夏季泡温泉对身体很好'

      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem

  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
