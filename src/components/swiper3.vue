<template>
	<div class="swiper-container" id="recommend">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img class="img" src="../../static/img/IMG_1659_03.jpg" />
				<p>孜然羊肉杂粮饭</p>
				<p>一口爱上，孜然的美味不言而喻！</p>
			</div>
			<div class="swiper-slide">
				<img class="img" src="../../static/img/IMG_1659_05.jpg" />
				<p>四川担担面</p>
				<p>担担面煮法看似十分复杂，其实只要花点心思，也能煮出媲美在餐馆吃到的味道！</p>
			</div>
			<div class="swiper-slide">
				<img class="img" src="../../static/img/IMG_1660_03.jpg" />
				<p>红烧鹌鹑蛋狮子头</p>
				<p>有肉有蛋，营养均衡！</p>
			</div>
			<div class="swiper-slide">
				<img class="img" src="../../static/img/IMG_1660_05.jpg" />
				<p>招财猫$招财爪蒸果子</p>
				<p>萌萌哒 招财猫蒸果子，好吃到停不下来~</p>
			</div>
			<div class="swiper-slide">
				<img class="img" src="../../static/img/IMG_1661_03.jpg" />
				<p>川味椒麻虾</p>
				<p>这道椒麻虾充斥着花椒香味，微辣过瘾！</p>
			</div>
			<div class="swiper-slide">
				<img class="img" src="../../static/img/IMG_1661_05.jpg" />
				<p>鸡蛋卷饼</p>
				<p>小朋友喜欢新鲜，同样的东西换个样子做就很好吃的样子，比如这个！</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			new Swiper('#recommend', {
//				width:window.innerWidth/2,
//				watchSlidesProgress : true,
//				watchSlidesVisibility : true,
				
//				freeMode : true,
//				freeModeMomentumRatio:0,
				initialSlide :1,
				 effect : 'coverflow',
				  slidesPerView: 3,
				  centeredSlides: true,
				  coverflowEffect: {
				    rotate: 2,
				    stretch: 0,
				    depth: 10,
				    modifier: 20,
				    slideShadows : false
				  },
			})
		}
	}
	
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	/**/
	#recommend{
		width:100%;
	}
	
	#recommend .swiper-slide {
		/*margin-left: 0.2rem;*/
		/*width: 3.11rem !important*/
	}
	#recommend .img{
		width: 3.3rem;
		height: 3.14rem;
		
	}
	#recommend p{
		width: 3.3rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		background: #F2F2F2;
	}
	#recommend p:nth-of-type(2){   /*筛选第一个*/
		font-size: .2rem;
		color:#999999;
	}
</style>