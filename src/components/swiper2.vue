<template>
	<div class="box">
		
	
		<div class="swiper-container" id="two">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
					      <img class="img" src="../../static/img/IMG_1658_07.jpg" />
					</div>
				    <div class="swiper-slide">
					    <img class="img" src="../../static/img/IMG_1658_05.jpg" />
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1658_03.jpg" />
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1657_07.jpg" />
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1657_05.jpg" />
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1657_03.jpg" />
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1641_3.jpg" />
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1641_5.jpg" />
					</div>
				</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			
		 new Swiper('#two', {
				watchSlidesProgress : true,
				watchSlidesVisibility : true,
				freeMode : true,
				width:window.innerWidth/3.5,
				freeModeMomentumRatio:0
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
	#two{
		width:100%;
		height: 100%;
		
	}
	#two .swiper-wrapper{
		/*width:3.12rem;*/
		height: 100%;
	}
	#two .swiper-slide {
		margin-left: 0.2rem;
		/*width:  2.2rem !important*/
	}
	#two .img{
		width: 2.2rem;
		height: 2.6rem;
	}
	/*.swiper-container-wp8-horizontal{
		width: 100% !important;
	}*/
	/*.swiper-container-ios{
		width: 100% !important;
	}*/
	
</style>