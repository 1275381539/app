<template>
  <div ref='container' class="container">
    <div>
      <!--hot-->
      <div class="hot">
        <div class="hot-titlt">热门城市</div>
        <ul class="hot-list">
          <li class="hot-item" v-for='item in hotCities' :key='item.id' @click='changeCityName(item.name)'>{{item.name}}</li>
        </ul>
      </div>
      <!--sort-->
      <div class="sort">
        <div class="sort-titlt">字母排序</div>
        <ul class="sort-list">
          <li class="sort-item" v-for='(val,key) in cities' @click='changeSort(key)'>{{key}}</li>
        </ul>
      </div>
      <!--list-->
      <div class="list">
        <div v-for='(val,key) in cities' :ref='key'>
          <div class="list-titlt">{{key}}</div>
          <ul class="list-msg">
            <li class="list-item" v-for='item in val' :key='item.id' @click='changeCityName(item.name)'>{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
  props: ['hotCities', 'cities'],
  data() {
  	return {
  		scroll: ''
  	}
  },
  mounted() {
  	let container = this.$refs['container'];
    this.scroll = new BScroll(container)
  },
  methods:{
  	changeSort(sortName){
  		this.scroll.scrollToElement(this.$refs[sortName][0],1000)
  	},
  	changeCityName(cityNmae){
      this.changeCity(cityNmae);
  		this.$router.push('/');
  	},
    ...mapMutations(['changeCity'])
  }
}

</script>
<style scoped lang="stylus">
@import '~css/common.styl'
.container{
	position:absolute;
	left:0;
	right:0;
	bottom:0;
	top:.88rem;
	background:#f5f5f5;
	overflow:hidden;
}
.sort-titlt {
  font-size: .24rem;
  color: #212121;
  padding: .2rem .3rem;
  color: #212121;
}

.sort-list {
  background: #fff;
  font-size: .28rem;
  position: relative;
  overflow: hidden;
}

.sort-item {
  width: 16.66%;
  text-align: center;
  height: .9rem;
  line-height: .9rem;
  float: left;
}

.hot-titlt {
  font-size: .24rem;
  color: #212121;
  padding: .2rem .3rem;
  color: #212121;
}

.hot-list {
  background: #fff;
  font-size: .28rem;
  position: relative;
  overflow: hidden;
}

.hot-list:before {
  content: '';
  position: absolute;
  height: 100%;
  width: 33.33%;
  left: 33.33%;
  border-left: .02rem solid #ddd;
  border-right: .02rem solid #ddd;
}

.hot-item {
  position:relative;
  width: 33.33%;
  text-align: center;
  height: .9rem;
  line-height: .9rem;
  float: left;
  border-bottom: .02rem solid #ddd;
}

.list-titlt {
  font-size: .24rem;
  color: #212121;
  padding: .2rem .3rem;
  color: #212121;
}

.list-msg {
  background: #fff;
  overflow: hidden;
  position: relative;
}

.list-item {
  position:relative;
  font-size: .28rem;
  width: 25%;
  text-align: center;
  line-height: .9rem;
  float: left;
  border-bottom: .02rem solid #ddd;
  textOverflow()
}

.list-msg:before {
  content: '';
  position: absolute;
  height: 100%;
  width: 25%;
  left: 25%;
  border-left: .02rem solid #ddd;
  border-right: .02rem solid #ddd;
}

.list-msg:after {
  content: '';
  position: absolute;
  height: 100%;
  width: 0;
  left: 75%;
  border-left: .02rem solid #ddd;
  border-right: .02rem solid #ddd;
}

</style>
