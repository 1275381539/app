<template>
	<div class="icons">
		<swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide v-for='(item,key) in pages' :key='key'>
		    	<div class="icons-item" v-for='page in item' :key='page.id'>
					<img :src="page.imgUrl" alt="">
					<p>{{page.title}}</p>
				</div>
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>

	</div>
</template>
<script>
	export default{
		props:['iconsList'],
		data(){
			return{
				swiperOption:{
				}
			}
		},
		computed:{
			pages(){
				let pages = [];
				this.iconsList.forEach((item,index)=>{
					let idx = Math.floor(index/8);
					if(!pages[idx]) pages[idx] = [];
					pages[idx].push(item)
				});
				return pages;
			}
		}
	}
</script>
<style scoped lang="stylus">
@import '~css/common.styl'
	.icons{
		width: 100%;
		background: #fff;
		overflow: hidden;
	}
	.icons-item{
		width: 25%;
		padding-bottom: 25%;
		height: 0;
		float: left;
	}
	.icons-item img{
		width: 1.1rem;
		height: 1.1rem;
		display: block;
		margin: 0 auto;
		padding-top: .2rem;
	}
	.icons-item p{
		font-size: .27rem;
		text-align: center;
		color: #212121;
		margin-top: .1rem;
		textOverflow()
	}
</style>