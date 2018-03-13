<template>
	<div >
				<div class="top" >
					<i class="fa fa-calendar-check-o"></i>
					<p class="Middle">DAYDAYCOOK</p>
					<i class=" fa fa-search-plus"></i>
				</div>
				
				<div class="wheel-img">
						<div class="swiper-container" id="wheel">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
								      <img class="img" src="../../static/img/IMG_1652_02.jpg" />
								</div>
							    <div class="swiper-slide">
								    <img class="img" src="../../static/img/IMG_1651_02.jpg" />
								</div>
								<div class="swiper-slide">
									<img class="img" src="../../static/img/IMG_1653_02.jpg" />
								</div>
								<div class="swiper-slide">
									<img class="img" src="../../static/img/IMG_1654_02.jpg" />
								</div>
								<div class="swiper-slide">
									<img class="img" src="../../static/img/IMG_1655_02.jpg" />
								</div>
								<div class="swiper-slide">
									<img class="img" src="../../static/img/IMG_1656_02.jpg" />
								</div>
							</div>
						</div>
				</div>
				
				<div class="nav">
					<img src="../../static/img/IMG_1653_2.jpg" />
				</div>
				
				<div class="topic">
					<div class="swiper-container" id="topic">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<img class="img" src="../../static/img/IMG_1642_03.jpg" />
									 <p>0失败新手烘焙，超值体验等你预约</p> 
									 <span>已有143人参与讨论</span>
								</div>
								
								<div class="swiper-slide">
									<img class="img" src="../../static/img/IMG_1643_03.jpg" />
									 <p>最爱的饮料</p>
									  <span>已有67人参与讨论</span>
								</div>
								<div class="swiper-slide">
									<img class="img" src="../../static/img/IMG_1643_05.jpg" />
									 <p>啤酒的妙用</p>
									  <span>已有381人参与讨论</span>
								</div>
							</div>
					</div>
				</div>
				
				<div class="recommend">
					<p class="recommend-font">
						<i class="fa fa-spoon  "></i>
						<span><strong> 每日新菜馆</strong></span>
					</p>
					<swiper3></swiper3>
				</div>
				
				<div class="study">
					<p class="study-font">
						<i class="fa fa-spoon  "></i>
						<span><strong> 厨味研究所</strong></span>
					</p>
					<img src="../../static/img/IMG_1662_10.jpg" />
					<img src="../../static/img/IMG_1662_5.jpg" />
					<img src="../../static/img/IMG_1662_3.jpg" />
					<img src="../../static/img/IMG_1662_9.jpg" />
				</div>
				
				<div class="strategy">
					<p class="strategy-font">
						<i class="fa fa-file-text-o"></i>
						<span><strong> 美食攻略</strong></span>
					</p>
					<div class="for" v-for="(v,i) in img">
						<img :src="v.src" @click="tiao(v.url,v.id)"/>
						<p>{{v.font}}</p>
						
					</div>
					<div style="height: 0.98rem;"></div>
				</div>
	</div>
</template>

<script>
	import swiper3 from './swiper3'
	import store from '../vuex/warehouse.js'
	import {mapState} from 'vuex'
	export default{
		store,
		components:{
			swiper3
		},
		mounted(){
			 new Swiper('#wheel', {
				speed: 300,
				direction: 'horizontal',
				autoplay: {
					delay: 3000
				},
				 loop : true,
			});
			 new Swiper('#topic', {
				watchSlidesProgress : true,
				watchSlidesVisibility : true,
				freeMode : true,
				freeModeMomentumRatio:0,
				width:window.innerWidth/2.4,
			});
			
		},
		computed:{
			...mapState(['img']),
//			
		},
		methods:{
			tiao(val,id){
				this.$store.commit('shuju',id)
				console.log(id)
				window.location = 'http://localhost:8080/#/'+val
			}
		}
	}
</script>

<style scoped>
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
.top .fa-calendar-check-o{
	width: 15%;
	font-size: 0.35rem;
	float: left;
	text-align: center;
}
.top .fa-search-plus{
	width: 15%;
	font-size: 0.35rem;
	float: right;
	text-align: center;
}
.top .Middle{
	width:70% ;
	text-align: center;
	font-size: 0.4rem;
	font-family: "微软雅黑";
}
.wheel-img{
	width: 100%;
	height: 3.45rem;
	/*background: darkgrey;*/
}

.nav img{
	width: 100%;
	height: 1.6rem;
}
.topic{
	width: 100%;
	height: 3.23rem;
	overflow: hidden;
	/*background: darkgreen;*/
	font-family: "微软雅黑";
	font-size: .23rem;
	color:#2C3E50;
}
.topic span{
	font-size: .2rem;
	color:#999999;
}
.recommend{
	width: 100%;
	height: 5.75rem;
	overflow: hidden;
	font-size: .23rem;
	color:#2C3E50;
}
.study{
	width: 100%;
	height: 5.45rem;
	/*background: gray;*/
}
.strategy{
	width: 100%;
	height: 5.25rem;
	/*background: deepskyblue;*/
}

	.wheel-img {
		width: 100%;
		height: 3.45rem;
		overflow: hidden;
		/*background: darkgrey;*/
	}
	 #wheel {
		width: 100%;
		height: 100%;
	}
	#wheel .img{
		width: 100%;
		height:100%;
	}
	
	/**/
	#topic{
		width:100%;
		height: 100%;
	}
	#topic .swiper-wrapper{
		/*width:3.12rem;*/
		height: 100%;
	}
	#topic .swiper-slide {
		margin-left: 0.2rem;
		width: 3.12rem !important
	}
	#topic .img{
		width: 3.12rem;
		margin-top:0.4rem;
	}
	#topic p{
		width: 3.12rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.recommend-font{
		height: 1.5rem;
		line-height:1.5rem;
		font-size: .33rem;
		font-family: "微软雅黑";
		color: #333333;
		padding-left: .55rem;
	}
	.recommend-font i{
		
		color: #999999;
	}
	.study-font{
		height: 1rem;
		line-height:1rem;
		font-size: .33rem;
		font-family: "微软雅黑";
		color: #333333;
		padding-left: .55rem;
	}
	.study-font i{
		color: #999999;
	}
	.study img{
		width: 3.37rem;
		height: 1.96rem;
		margin-left: .22rem;
		margin-top: .1rem;
	}
	.strategy-font{
		height: 1rem;
		line-height:1rem;
		font-size: .33rem;
		font-family: "微软雅黑";
		color: #333333;
		padding-left: .55rem;
	}
	.strategy-font i{
		color: #999999;
	}
	.strategy img {
		width: 100%;
	}
	.for{
		/*padding-bottom: 1rem;*/
	}
	.for p{
		font-size: 0.31rem;
		height: 0.8rem;
		line-height:0.8rem;
		padding-left: 0.3rem;
		margin-bottom: 0.4rem;
	}
</style>