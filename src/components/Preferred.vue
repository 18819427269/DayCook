<template>
	<div>
		<div class="top" >
			<i class="left"></i>
			<p class="Middle">优选</p>
			<i class=" fa fa-shopping-cart"></i>
		</div>
		<div class="wheel-img">
			<div class="swiper-container-one">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
					      <img class="img" src="../../static/img/IMG_1648_02.jpg" />
					</div>
				    <div class="swiper-slide">
					    <img class="img" src="../../static/img/IMG_1649_02.jpg" />
					</div>
					<div class="swiper-slide">
						<img class="img" src="../../static/img/IMG_1647_02.jpg" />
					</div>
					
				</div>
			</div>
		</div>
		<div class="preferred-nav">
			<img src="../../static/img/IMG_1648_2.jpg" />
		</div>
		<div class="special">
			<p class="special-font">
				<i class="fa fa-codepen  "></i>
				<span><strong> 优选专题</strong></span>
			</p>
			<img src="../../static/img/IMG_1648_04.jpg" />
		</div>
		<div class="huadon">
			<div class="swiper-container" id="huadon">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide">
			        	<img src="../../static/img/IMG_1667_04.jpg" />
			        	<p>  鲜嫩酱牛腱200g  <br />
			        		<span>$46</span>
			        	</p>
			        	
			        </div>
			        <div class="swiper-slide">
			        	<img src="../../static/img/IMG_1668_03.jpg" />
			        	<p>  混合水果燕麦片  <br />
			        		<span>$125</span>
			        	</p>
			        </div>
			        <div class="swiper-slide">
			        	<img src="../../static/img/IMG_1667_02.jpg" />
			        	<p>  入口即化 网红饼干 <br />
			        		<span>$179</span>
			        	</p>
			        </div>
			         <div class="swiper-slide">
			        	<img src="../../static/img/IMG_1667_03.jpg" />
			        	<p>  黄牛肉牛蹄筋200g <br />
			        		<span>$36</span>
			        	</p>
			        </div>
			         <div class="swiper-slide">
			        	<div id="tishi">
			        		查看更多
			        	</div>
			        </div>
			    </div>
			</div>
		</div>
		<div class="Hot-commodities">
			<p class="Hot-commodities-font">
				<i class="fa fa-minus-square-o"></i>
				<span><strong> 热门商品</strong></span>
			</p>
			<!--<div style="width: 100%;background: gold;">-->
			<div v-for="(v,i) in preferredimg" class="Hot-commodities-img">
				<img class="preferredimg" :src="v.src" />
				<p>{{v.font}} <br />
					<p class="minfont">{{v.span}}</p>
					<p class="price">{{v.price}}</p>
				</p>
			</div>
			<!--</div>-->
			<div style="height: 0.98rem;"></div>
		</div>
	</div>
</template>

<script>
	import store from '../vuex/warehouse.js'
	import {mapState} from 'vuex'
	export default{
		mounted(){
			 new Swiper('.swiper-container-one', {
				speed: 300,
				direction: 'horizontal',
				autoplay: {
					delay: 3000
				},
				 loop : true,
			});
			new Swiper('#huadon', {
				width:window.innerWidth/3.2,
				freeModeMomentumRatio:0
			});
		},
		computed:{
			...mapState(['preferredimg']),
//			
		}
	}
	
	
</script>

<style  scoped>
		*{
	margin: 0;
	padding: 0;
	list-style: none;
	
}
.top{
	width: 100%;
	height: 1.29rem;
	position: fixed;
	top: 0;
	border-bottom:1px solid lightgrey ;
	background: rgb(300,280,280);
	z-index: 10;
}
.top p, .top i{
	display: inline-block;
	margin-top: 0.5rem;
}
.top .left{
	width: 15%;
	font-size: 0.35rem;
	float: left;
	text-align: center;
}
.top .fa-shopping-cart{
	width: 15%;
	font-size: 0.35rem;
	float: right;
	text-align: center;
}
.top .Middle{
	width:70% ;
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
	 .swiper-container-one {
		width: 100%;
		height: 100%;
	}
	
	
	.swiper-container-one .img{
		width: 100%;
		height:100%;
	}
	.preferred-nav img{
		width:100%;
		height: 1.95rem;
	}
	.special{
		width: 100%;
		height: 4.85rem;
	}
	.special-font{
		height: 1.29rem;
		line-height:1.29rem;
		font-size: .33rem;
		font-family: "微软雅黑";
		color: #333333;
		padding-left: .55rem;
	}
	.special-font i{
		
		color: #999999;
	}
	.special img{
		width: 100%;
		height: 3.56rem;
	}
	.huadon{
		width: 100%;
		height: 3.9rem;
		padding-top: 0.2rem;
		box-sizing: border-box;
	}
	#huadon .swiper-slide{
		/*background: darkcyan;*/
		/*width: 2.15rem !important;*/
		/*height: 1rem;*/
	}
	#huadon  img{
		width: 2.15rem;
		height: 2rem;
	}
	#huadon #tishi{
		width: 2.15rem;
		height: 2rem;
		background: #F2F2F2;
		text-align: center;
		line-height: 2rem;
		font-size: 0.32rem;
		color: #A9A9A9;
	}
	#huadon p{
		width: 2rem;
		height: 1.9rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		padding-left: .2rem;
		box-sizing: border-box;
		padding-top: 0.3rem;
	}
	#huadon p span{
		color: #F08080;
		font-size: 0.23rem;
	}
	.Hot-commodities-font{
		height: 1rem;
		line-height:1rem;
		font-size: .33rem;
		font-family: "微软雅黑";
		color: #333333;
		padding-left: .55rem;
	
	}
	.Hot-commodities-font i{
		color: #999999;
	}
	.Hot-commodities-img img{
		width: 2.5rem;
		
	}
	.Hot-commodities-img{
		padding-left: 0.85rem;
		margin-top: 0.3rem;
		width: 2.5rem;
		display: inline-block;
	}
	.Hot-commodities-img p{
		width: 2.5rem;
		overflow: hidden;      /*多行出现省略号*/
		text-overflow:ellipsis;
		/*white-space: nowrap;*/
		display: -webkit-box;
		-webkit-line-clamp:2 ;
		-webkit-box-orient: vertical;
		color:#2C3E50;
		text-align: center;
	}
	
	.Hot-commodities-img .minfont{
		font-size: 0.2rem;
		color: #888888;		
	}
	.Hot-commodities-img .price{
		font-size: 0.25rem;
		margin-top: 0.2rem;
		color: #F08080;		
	}
</style
</style>