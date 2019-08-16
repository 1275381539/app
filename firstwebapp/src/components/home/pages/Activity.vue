<template>
	<div class="activity border-top">
		<div class="activity-item border-right">
			<img src="@/assets/img/swiper1.jpg" alt="">
		</div>
		<div class="activity-item">
			<img src="@/assets/img/swiper2.jpg" alt="">
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.activity{
		display: flex;
		position: relative;
		margin-top: .4rem;
		background: #fff;
	}
	.activity .activity-item{
		flex: 1;
		font-size: .28rem;
		text-align: center;
		height: 1.4rem;

	}
	.activity .activity-item img{
		width: 100%;
		height: 100%;
	}
</style>