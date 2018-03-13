<template>
	<div>
				<div class="top" >
					<i class="fa fa-book"></i>
					<p class="Middle">食谱</p>
					<i class=" fa fa-search-plus"></i>
				</div>
				<div class="pubu">
					<div v-for="(v,i) in pubu">
						<img :src="v.src" />
						<p>{{v.name}}</p>
						<p>{{v.font}}</p>
					</div>
					
					
				</div>
				
		
	</div>
</template>

<script>
	import store from '../vuex/warehouse.js'
	import {mapState} from 'vuex'
	export default{
		store,
		computed:{
			...mapState(['pubu']),
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
}
.top p, .top i{
	display: inline-block;
	margin-top: 0.5rem;
}
.top .fa-book{
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
	font-size: 0.35rem;
	font-family: "微软雅黑";
}
.pubu{
	padding-left: 0.1rem;
	padding-right: 0.1rem;
}
.pubu img{
	width: 3.36rem;
	
}
.pubu div{
	margin-left:0.2rem;
	margin-top: 0.4rem;
	display: inline-block;
}
.pubu p{
	width: 3.36rem;
	text-align: center;
	overflow: hidden;      
	text-overflow:ellipsis;
	white-space: nowrap;
}
.pubu p:nth-of-type(2){
	font-size:0.22rem ;
	color: #888888;
}
</style>