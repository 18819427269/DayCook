<template>
	<div class="child-box" >
		<div class="fanhui"  @click="fanhui"> < </div>
		<div class="img-box">
			<img class="img" :src="hezi.top.src1" />
			<p>{{hezi.top.texts}}</p>
		</div> <br /><hr />
		<img class="img" :src="hezi.top.src2" />
		<div class="font1" v-for="(v,i) in hezi.texts.text1.text11">
			<p class="pone">{{v}}</p>
		</div>
		<img class="child-img" :src="hezi.texts.text1.src"/>
		<div class="font2" v-for="(v,i) in hezi.texts.text1.text12">
			<p class="ptwo">{{v}}</p>
		</div>
		<p class="jianname">{{hezi.texts.text1.neiron.name}}</p>
		<img class="child-img" :src="hezi.texts.text1.neiron.src" />
		<div class="font3" v-for="(v,i) in hezi.texts.text1.neiron.jieshao">
			<p class="pthree">{{v}}</p>
		</div>
		<div class="font4" v-for="(v,i) in hezi.texts.text1.neiron.jieshao2">
			<img class="child-img" :src="v.src"/>
			<p class="pthree">{{v.val}}</p>
		</div>
		<div class="inp">
			<input placeholder="  我有话要说。。。" />
		</div>
	</div> 
</template>

<script>
	import store from '../vuex/warehouse.js'
	import {mapState} from 'vuex'
	export default{
		mounted(){
//			console.log(this.$route.path)
//			console.log(location)
//			console.log(location.href.split('=')[1])
//			var id = location.href.split('=')[1]
//			console.log(id)
//			this.$store.commit('shuju',id)
		},
		methods:{
			fanhui(){
				window.location = 'http://localhost:8080/#/'
			}
		},
		store,
		computed:{
			...mapState(['hezi']),
//			
		}
	}
</script>

<style scoped>
	*{
		font-size: 0.25rem ;
	}
	.child-box{
		padding-bottom: 0.85rem;
	}
	.child-box .img{
		width: 100%;
	}
	.img-box p{
		height: 0.8rem;
		line-height: 0.8rem;
		font-size: 0.32rem;
		margin-left: 0.2rem;
	}
	.child-box hr{
		background:#F2F2F2;
		
	}
	.font1 .pone{
		/*font-size: 0.15rem;*/
		width: 100%;
		text-align: center;
		line-height: 1rem;
	}
	.font2 .ptwo{
		/*font-size: 0.15rem;*/
		width: 100%;
		text-align: center;
		line-height: 1rem;
	}
	.fanhui{
		width: 0.6rem;
		height: 0.6rem;
		position: fixed;
		top: 0.1rem;
		left: 0.2rem;
		color: white;
		font-size: 0.5rem;
	}
	.child-img{
		width: 95%;
		margin-left: 0.2rem;
		margin-top: 0.2rem;
	}
	.jianname{
		width: 100%;
		text-align: center;
		height: 0.8rem;
		line-height: 1rem;
		font-size: 0.35rem;
		color: coral;
	}
	.font3{
		padding-left: 0.1rem;
		padding-right: 0.1rem;
	}
	.font3 .pthree{
		/*font-size: 0.15rem;*/
		width: 100%;
		text-align: center;
		line-height: 1rem;
	}
	.font4 .pthree{
		/*font-size: 0.15rem;*/
		width: 100%;
		text-align: center;
		line-height: 1rem;
	}
	.inp input{
		position: fixed;
		bottom: 0rem;
		width: 100%;
		height: 0.8rem;
		border: 1px solid black;
		 -moz-box-shadow:4px 4px 10px ;    /*阴影*/
     -webkit-box-shadow:4px 4px 10px ;
     box-shadow:4px 4px 10px ;
	}
</style>