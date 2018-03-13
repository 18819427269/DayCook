<template>
	<div>
		<div class="top">
			<i class="left"></i>
			<p class="Middle">发现</p>
			<i class=" fa fa-search-plus"></i>
		</div>
		<div class="wheel-img">
			<div class="swiper-container-one">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
					      <img class="img" src="../../static/img/IMG_1640_02.jpg" />
					</div>
				    <div class="swiper-slide">
					    <img class="img" src="../../static/img/IMG_1635_02.jpg" />
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1636_02.jpg" />
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1637_02.jpg" />
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1638_02.jpg" />
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1639_02.jpg" />
					</div>
				</div>
			</div>
		</div>
		<div class="activity">
			<p class="activity-font">
				<i class="fa fa-calendar-minus-o "></i>
				<span><strong> 煮要活动区</strong></span>
			</p>
			
			<swiper></swiper>
			<!--<div class="activity-lunbo">
				<div class="swiper-container-two">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
							      <img class="img" src="../../static/img/IMG_1641_03.jpg" />
								<p>asdas</p>
							</div>
						    <div class="swiper-slide">
							    <img class="img" src="../../static/img/IMG_1641_05.jpg" />
							    <p>asdas</p>
							</div>
							<div class="swiper-slide">
								<img class="img" src="../../static/img/IMG_1642_03.jpg" />
								<p>asdas</p>
							</div>
							<div class="swiper-slide">
								<img class="img" src="../../static/img/IMG_1642_05.jpg" />
								<p>asdas</p>
							</div>
							<div class="swiper-slide">
								<img class="img" src="../../static/img/IMG_1643_03.jpg" />
								<p>asdas</p>
							</div>
							<div class="swiper-slide">
								<img class="img" src="../../static/img/IMG_1643_05.jpg" />
								<p>asdas</p>
							</div>
						</div>
				</div>
			</div>-->
		</div>
		<div class="Sharing">
			<p class="Sharing-font">
				<i class="fa fa-binoculars "></i>
				<span><strong> 煮艺分享家</strong></span>
			</p>
			<swiper2></swiper2>
		</div>
		<div class="theme">
			<p class="theme-font">
				<i class="fa fa-th-large  "></i>
				<span><strong> 煮要话题区</strong></span>
			</p>
			<div class="theme-box">
				<img src="../../static/img/IMG_1632_03.jpg" />
				<img src="../../static/img/IMG_1632_05.jpg" />
				<img src="../../static/img/IMG_1632_09.jpg" />
				<img src="../../static/img/IMG_1632_10.jpg" />
				<img src="../../static/img/IMG_1632_13.jpg" />
				<img src="../../static/img/IMG_1632_14.jpg" />
				<img src="../../static/img/IMG_1632_17.jpg" />
				<img src="../../static/img/IMG_1632_18.jpg" />
			</div>
		</div>
	</div>
</template>

<script>
//	import Swiper from '../../static/swiper.min.js'
	import swiper from './swiper'
	import swiper2 from './swiper2'
	export default {
		components:{
			swiper,swiper2
		},
		mounted() {
			
			 new Swiper('.swiper-container-one', {
				speed: 300,
				direction: 'horizontal',
				autoplay: {
					delay: 3000
				},
				 loop : true,
			});
			
//			
//			 new Swiper('.swiper-container-two', {
//				watchSlidesProgress : true,
//				watchSlidesVisibility : true,
//				freeMode : true
//			})
			
		},
		
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.top {
		width: 100%;
		height: 1.29rem;
		position: fixed;
		top: 0;
		border-bottom: 1px solid lightgrey;
		background: rgb(300, 280, 280);
		z-index: 10;
	}
	
	.top p,
	.top i {
		display: inline-block;
		margin-top: 0.5rem;
	}
	
	.top .left {
		width: 15%;
		font-size: 0.35rem;
		float: left;
		text-align: center;
	}
	
	.top .fa-search-plus {
		width: 15%;
		font-size: 0.35rem;
		float: right;
		text-align: center;
	}
	
	.top .Middle {
		width: 70%;
		text-align: center;
		font-size: 0.35rem;
		font-family: "微软雅黑";
	}
	
	.wheel-img {
		width: 100%;
		height: 3.45rem;
		overflow: hidden;
		/*background: darkgrey;*/
	}
	
	.activity {
		width: 100%;
		height: 3.65rem;
		/*background: cyan;*/
	}
	
	.Sharing {
		width: 100%;
		height: 3.9rem;
		/*background: #F08080;*/
	}
	
	.theme {
		width: 100%;
		height: 9.58rem;
		/*background: #42B983;*/
	}
	
	/*@import url("../assets/swiper.min.css")*/
	 .swiper-container-one {
		width: 100%;
		height: 100%;
	}
	/*.swiper-slide {
		height: 100%;
	}*/
	/*.swiper-container img{
	width: 100%;
	height: 100%;
	}*/
	.swiper-container-one .img{
		width: 100%;
		height:100%;
	}	
	.activity-font{
		height: 1.1rem;
		line-height:1.1rem;
		font-size: .33rem;
		font-family: "微软雅黑";
		color: #333333;
		padding-left: .6rem;
	}
	.activity-font i{
		
		color: #999999;
	}
	
/*************/	
	/*.activity-lunbo{
		width: 100%;
		height: 2.55rem;
		overflow: hidden;*/
	/*}*/
	/*.swiper-container-two{*/
		
		/*width:100% !important;*/
		/*height: 100% !important;*/
		/*background: royalblue;*/
	/*}*/
	/*.swiper-container-two .swiper-wrapper{*/
		/*width:10.12rem;*/
		/*height: 100%;*/
		/*background: #808080;*/
	/*}*/
	/*.swiper-container-two .swiper-slide {*/
		/*margin-left: 0.2rem;*/
		/*width: 3.12rem !important; /*优先级*/
		/*background: firebrick;*/
	/*}*/
	/*.swiper-container-two .img{
		width: 3.12rem;
		height: 1.72rem;
	}*/
	/*.swiper-container-two .swiper-container-horizontal ,*/
	/*.swiper-container-two .swiper-container-free-mode */
	/*.swiper-container-two .swiper-container-ios*/
	 /*.swiper-container-wp8-horizontal{*/
		/*width: 3.12rem !important;*/
	/*}*/
	.Sharing-font{
		height: 1rem;
		line-height:1rem;
		font-size: .33rem;
		font-family: "微软雅黑";
		color: #333333;
		padding-left: .55rem;
	}
	.Sharing-font i{
		
		color: #999999;
	}
	.theme-font{
		height: 1rem;
		line-height:1rem;
		font-size: .33rem;
		font-family: "微软雅黑";
		color: #333333;
		padding-left: .55rem;
	}
	.theme-font i{
		
		color: #999999;
	}
	.theme-box{
		width: 100%;
	}
	.theme-box img{
		width: 3.37rem;
		height: 1.94rem;
		float: left;
		margin-left: 0.25rem;
		margin-top: 0.25em;
	}
</style>