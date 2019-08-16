<template>
  <div class="banner">
    <div @click='showSwiper()'>
      <div class="banner-img">
        <img src="//img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_600x330_ddcee9e0.jpg" alt="">
      </div>
      <div class="banner-title">华清宫(AAAAA景区)</div>
    </div>
    <div class="img-swiper" v-show='imgSwiper' @click='hideSwiper()'>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for='item in bannerList' :key='item.id'>
          <img :src="item.imgUrl" alt="">
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type:"fraction"
        }
      },
      bannerList: [{
          id: "01",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1602/e2/e2f5318eb8279a3190.img.jpg_r_800x800_91522868.jpg"
        },
        {
          id: "02",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1602/81/81608f02bcb9d1ec90.img.jpg_r_800x800_f4319eeb.jpg"
        },
        {
          id: "03",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_r_800x800_980118e2.jpg"
        },
        {
          id: "04",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1602/14/14670522ef55e07a90.img.jpg_r_800x800_d9e335fb.jpg"
        },
        {
          id: "05",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1602/32/323e992063025afe90.img.jpg_r_800x800_98be3829.jpg"
        }
      ],
      imgSwiper: false,
    }
  },
  methods: {
    showSwiper() {
      this.imgSwiper = true;
    },
    hideSwiper() {
      this.imgSwiper = false;
    }
  }
}

</script>
<style scoped>
.banner {
  position: relative;
}

.banner-img {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}

.banner-img img {
  width: 100%;
}

.banner-title {
  position: absolute;
  bottom: .4rem;
  left: .3rem;
  font-size: .36rem;
  color: #fff;
}

.img-swiper {
  background: #000;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-swiper img {
  width: 100%;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
	color: #fff;
	bottom: .6rem;
	font-size: .32rem;
}
</style>
