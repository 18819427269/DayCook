<template>
	<div class="box">
		
	
		<div class="swiper-container" id="activity">
				<div class="swiper-wrapper" >
					<div class="swiper-slide">
					      <img class="img" src="../../static/img/IMG_1641_03.jpg" />
					      <p>饺子要怎么包</p>
					</div>
				    <div class="swiper-slide">
					    <img class="img" src="../../static/img/IMG_1641_05.jpg" />
					     <p>美味的鸡翅</p>
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1642_03.jpg" />
						 <p>0失败新手烘焙，超值体验等你预约</p>
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1642_05.jpg" />
						 <p>一切为了瘦身</p>
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1643_03.jpg" />
						 <p>最爱的饮料</p>
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1643_05.jpg" />
						 <p>啤酒的妙用</p>
					</div>
				</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			
		 new Swiper('#activity', {
				watchSlidesProgress : true,
				width:window.innerWidth/2.4,
				watchSlidesVisibility : true,
				freeMode : true,
				freeModeMomentumRatio:0,
				 loop : true,
			})
//			
		},
		
	}
</script>

<style scoped>
	.box{
		width: 100%;
		height: 2.55rem;
		overflow: hidden;
	}
	#activity{
		width:100%;
		height: 100%;
		
	}
	#activityr.swiper-wrapper{
		/*width:3.12rem;*/
		height: 100%;
	}
	#activity .swiper-slide {
		margin-left: 0.2rem;
		/*width: 3.12rem !important*/
	}
	#activity .img{
		width: 3.12rem;
		height: 1.72rem;
		
	}
	/*.swiper-container-wp8-horizontal{
		width: 100% !important;
	}*/
	/*.swiper-container-ios{
		width: 100% !important;
	}*/
	#activity p{
		width: 3.12rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
</style>