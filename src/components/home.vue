

<template>
		<div id="box" >
				
			
			<selected v-if="pageshow.Selected"></selected>	
			<recipes v-if="pageshow.Recipes"></recipes>
			<preferred v-if="pageshow.Preferred"></preferred>
			<find v-if="pageshow.find"></find>
			<my v-if="pageshow.my"></my>
			
			
			<div class="bottom-nav">
				<ul>
					<li @click="show('Selected')" v-bind:class="{colour:pageshow.Selected}">
						<i class="fa fa-book "></i>
						<p>精选</p>
					</li>
					<li @click="show('Recipes')" v-bind:class="{colour:pageshow.Recipes}">
						<i class="fa fa-cutlery "></i>
						<p>食谱</p>
					</li>
					<li @click="show('Preferred')" v-bind:class="{colour:pageshow.Preferred}">
						<i class="fa fa-university "></i>
						<p>优选</p>
					</li>
					<li @click="show('find')" v-bind:class="{colour:pageshow.find}">
						<i class="fa fa-podcast "></i>
						<p>发现</p>
					</li>
					<li @click="show('my')" v-bind:class="{colour:pageshow.my}">
						<i class="fa fa-street-view "></i>
						<p>我的</p>
					</li>
				</ul>
			</div>
		</div>
</template>

<script>
	import store from'../vuex/warehouse.js'
	import Selected from './Selected'
	import Recipes from './Recipes'
	import Preferred from './Preferred'
	import find from './find'
	import my from './my'
	export default{
		store,
		components:{
			Selected,Recipes,Preferred,find,my
		},
		data(){
			return {
				pageshow:{
					Selected:true,
					Recipes:false,
					Preferred:false,
					find:false,
					my:false,
				}
					
				
			}
		},
		methods:{
				show(name){
				for (var x in this.pageshow) {
//					console.log(x)
					if (x == name) {
						this.pageshow[x] = true
//						console.log(11)
					}else{
						this.pageshow[x] = false
//						console.log(22)
					}
				}
//				
		
//		this.$store.commit('aa')
			}
				
		},
		computed:{
			val(){
				return this.$store.state.page
			}
		}
	}
	
//console.log(1)
</script>

<style scoped>
	

*{
	margin: 0;
	padding: 0;
	list-style: none;
}
#box{
	padding-bottom: 0.98rem;
	padding-top: 1.29rem;
	font-size: 0.25rem;
}

.bottom-nav{
	width: 100%;
	height: 0.98rem;
	position: fixed;
	bottom: 0;
	border-top:1px solid lightgrey;
	background:white;
	font-size: 0.2rem;
	color:#D3D3D3;
	z-index: 10;
}
.bottom-nav li{
	float: left;
	margin-left: 0.92rem;
}
.bottom-nav i{
	font-size: 0.41rem;
	height: 0.6rem;
	line-height: 0.6rem;
	/*color: rgb(255,93,49);*/
	/*color: gainsboro;*/
}
.colour{
	color:lightcoral;
}


</style>