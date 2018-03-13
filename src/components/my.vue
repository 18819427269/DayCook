<template>
	<div class="coat">
		<div class="top">
			<div class="logo">
				
			</div>
			<div class="entry-register">
				<p v-if="!$store.state.completes" @click="entryshow('login')">登录</p>
				<p v-if="!$store.state.completes" @click="entryshow('register')">注册</p>
				<p class="ppusername" v-if="$store.state.completes"> {{userinformation.username}}</p>
			</div>
			<div class="pp">
				<p class="p1">
					<span class="left">0</span>
					<span class="right">0</span>
				</p> <br />
				<p ><!--@click="aa"-->
					<span class="left">关注</span>
					<span class="right">风车叶</span>
				</p>
			</div>
		</div>
		<div class="box">
			<div class="one">
				<p>
					<i class="fa fa-heart"></i> <br />
					<span>收藏</span>
				</p>
				<p>
					<i class="fa fa-shopping-cart"></i> <br />
					<span>购物车</span>
				</p>
				<p>
					<i class="fa fa-newspaper-o"></i> <br />
					<span>福利社</span>
				</p>
			</div>
			<div class="two newclass">
				<p>
					<i class="fa fa-list"></i>
					<span >我的订单</span>
					<span class="maxhao"> > </span>
				</p>
			</div>
			<div class="three newclass">
				<p>
					<i class="fa fa-bookmark"></i>
					<span >我的课程</span>
					<span class="maxhao"> > </span>
				</p>
			</div>
			<div class="four newclass">
				<p>
					<i class="fa fa-trophy"></i>
					<span >签到奖励</span>
					<span class="maxhao"> > </span>
				</p>
			</div>
			<div class="five newclass">
				<p>
					<i class="fa fa-exchange"></i>
					<span >我的足迹</span>
					<span class="maxhao"> > </span>
				</p>
			</div>
			<div class="six newclass">
				<p>
					<i class="fa fa-map-marker"></i>
					<span >地址管理</span>
					<span class="maxhao"> > </span>
				</p>
			</div>
			<div class="seven newclass">
				<p>
					<i class="fa fa-question-circle-o"></i>
					<span >帮助中心</span>
					<span class="maxhao"> > </span>
				</p>
			</div>
		</div>
		<div class="entry">
			<span class="out" @click="entryhidden">x</span>
			<p class="logo-font">DAYDAYCOOK</p>
			<p class="font">
				<span :class="{choice:login}" @click="change('login')">登录</span>
				<span :class="{choice:register}" @click="change('register')">注册</span>
			</p>
			<br />
			<input v-model="user.phone"  placeholder="  请输入手机号" /> <br /><br />
			<input v-model="user.password" placeholder="  请输入密码" />	
			<p class="Prompt" v-if="login">
				<span>未注册手机号码验证后自动创建账户</span>
				<span>密码登录</span>
			</p>
			<div class="Submit">
				<p @click="nameshow"> > </p>
			</div>
		</div>
		<div class="username">
			<span class="out" @click="namehidden">x</span>  
			<p class="pp">您还没有设置名字，请设置名字。</p>
			<input v-model="user.username"  placeholder="  用户名" /> 
			<div class="Submit">
				<p @click="Jumplogon"> > </p>
			</div>
		</div>
	</div>
</template>

<script>
	function a(){
//				console.log(1)
//				console.log($('.entry').html())
				$('.entry').slideDown()
		}
	import store from '../vuex/warehouse.js'
	import {mapState} from 'vuex'
	export default{
		store,
		data(){
			return{
				user:{
					phone:'',
					password:'',
					username:'',
					complete:false,
				},
				login:false,
				register:false,
				
			}
		},
		methods:{
			entryshow(val){
//				console.log(this.val)
				if (val == 'login') {
					this.login = true
					this.register = false
				}else{
					this.login = false
					this.register = true
				}
				a()
			},
			entryhidden(){
				$('.entry').slideUp()
			},
			namehidden(){
				$('.username').slideUp()
				$('.entry').slideUp()
			},
			nameshow(){
				var that = this;
				if (this.user.phone && this.user.password) {
					if(this.register){
//						console.log(this.register)
//						this.$store.state.userinformation = this.user
//						this.$store.commit('aa')
						this.$store.commit('register',this.user)
						$('.username').slideDown()
					}else{
						this.$store.commit('login',this.user)
					}
//					
				}else{
					alert('请补全信息')
				}
			},
			Jumplogon(){
				if (this.user.username) {
//					this.$store.state.userinformation.usernameD = this.user.username
//					this.$store.commit('aa')
					this.$store.commit('register',this.user)
					this.namehidden()
					this.user.complete = true
//					this.$store.state.userinformation.completes = this.user.complete
					this.$store.commit('aa')
					this.$store.commit('changeJudge')
				}else{
					alert('请补全信息')
				}
			},
			change(val){
//				console.log(this.val)
				if (val == 'login') {
					this.login = true
					this.register = false
				}else{
					this.login = false
					this.register = true
				}
			},
//			aa(){
//				console.log(1)
//				this.userinformation = {
//					phone:'',
//					password:'',
//					usernameD:'',
//				},
//				this.$store.commit('changeJudge')
//				this.$store.state.userinformation.completes = ! this.$store.state.userinformation.completes
//			this.$store.commit('aa')
//			}
		},
		computed:{
			
			...mapState(['userinformation']),
			
//			...mapState(['usernameD']),
			
//			completes(){
//				return this.$store.state.completes
//			}
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
	height: 4.75rem;
	background: url(../../static/img/ba.jpg);
	background-size:100% ;
	position:fixed;
	top: 0px;
}
.top .entry-register{
	width: 1.7rem;
	height: 0.3rem;
	margin: auto;
	font-size: 0.3rem;
	color:#EEEEEE;
	margin-top: 0.2rem;
}
.top .entry-register p{
	margin-left: 0.15rem;
	display: inline-block;
	
	/*width: 0.57rem;*/
	/*height: 0.3rem;*/
	/*background: #F08080;*/
}
.ppusername{
	/*margin-left: 0rem;*/
	position: relative;
	left: -0.5rem;
	width:2.4rem;
	/*width:4.4rem;*/
	text-align: center;
}
.top .logo{
	background: url(../../static/img/lg.jpg);
	width: 1rem;
	height: 1rem;
	background-size:100% ;
	border-radius:50% ;
	margin: auto;
	margin-top: 1.5rem;
}
.top .pp{
	width: 2.5rem;
	margin:0.2rem auto;
	color: #EEEEEE;
}
.pp .left{
	float: left;
}
.pp .right{
	float: right;
}
.pp .p1 .left{
	margin-left: 0.2rem;
}
.pp .p1 .right{
	margin-right: 0.3rem;
}
.box{
	position: absolute;
	top: 4.7rem;
	width: 100%;
	/*height: 5.0rem;*/
	/*overflow: hidden;*/
}
.box .one{
	position: relative;
	top: 0px;
	background: rgb(255,123,81);
	width: 100%;
	height: 1.5rem;
	border-radius: 0.15rem 0.15rem 0 0;
}
.box .two{
	position: relative;
	top: -0.05rem;
	background:rgb(255,152,85);
	width: 100%;
	height: 1.5rem;
	border-radius: 0.15rem 0.15rem 0 0;
}
.box .three{
	position: relative;
	top: -0.1rem;
	background:rgb(255,176,108);
	width: 100%;
	height: 1.5rem;
	border-radius: 0.15rem 0.15rem 0 0;
}
.box .four{
	position: relative;
	top: -0.15rem;
	background: rgb(255,192,100);
	width: 100%;
	height: 1.5rem;
	border-radius: 0.15rem 0.15rem 0 0;
}
.box .five{
	position: relative;
	top: -0.2rem;
	background: rgb(187,204,141);
	width: 100%;
	height: 1.5rem;
	border-radius: 0.15rem 0.15rem 0 0;
}
.box .six{
	position: relative;
	top: -0.25rem;
	background: rgb(168,210,168);
	width: 100%;
	height: 1.5rem;
	border-radius: 0.15rem 0.15rem 0 0;
}
.box .seven{
	position: relative;
	top: -0.3rem;
	background: rgb(170,234,178);
	width: 100%;
	height: 2.5rem;
	border-radius: 0.15rem 0.15rem 0 0;
}
.entry{
	width: 100%;
	height: 100%;
	background: white;
	position: fixed;
	top: 0px;
	display: none;
}
.entry .out{
	font-size: 0.6rem;
	color: #D3D3D3;
	margin-left: 0.3rem;
}
.entry .logo-font{
	margin-left: 1.75rem;
	margin-top: 0.8rem;
	font-size: 0.55rem;
	color: #2C3E50;
	font-family: "微软雅黑";
}
.entry .font {
	width: 3rem;
	color:#A9A9A9 ;
	font-size: 0.3rem;
	margin:0.6rem auto;
}
.entry .font span:nth-of-type(1){   /*筛选第一个*/
	margin-right: 1.6rem;
}
.entry input{
	font-size: 0.25rem;
	width: 5.8rem;
	height: 0.55rem;
	color: #888888;
	border: none;
	border-radius:40px ;
	outline:none;
	margin-left: .8rem; 
	 -moz-box-shadow:4px 4px 10px ;    /*阴影*/
     -webkit-box-shadow:4px 4px 10px ;
     box-shadow:4px 4px 10px ;
     text-indent: .2rem;     /*首行缩进*/
}
.entry input::-webkit-input-placeholder{
    color:#A9A9A9;opacity:50;        /*提示字体颜色*/
}
.entry .Prompt{
	margin: auto;
	margin-top: .2rem;
	width: 5rem;
	height: 0.55rem;
	font-size: .17rem;
	color: #A9A9A9;
}
.entry .Prompt span:nth-of-type(2){   /*筛选第二个*/
	margin-left: 1.4rem;
	font-size: .2rem;
	
}
.entry .Submit p{
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 50%;
	font-size:0.6rem ;
	color: #EEEEEE;
	text-align: center;
	background: #999999;
	 -moz-box-shadow:10px 10px 10px ;    /*阴影*/
     -webkit-box-shadow:10px 10px 10px ;
     box-shadow:4px 4px 10px ;
}
.entry .Submit{
	margin-left: 3.3rem;
	margin-top: .5rem;
}
.username{
	width: 100%;
	height: 100%;
	background: white;
	position: fixed;
	top: 0px;
	display: none;
}
.username .out{
	font-size: 0.6rem;
	color: #D3D3D3;
	margin-left: 0.3rem;
}
.username .pp{
	  margin-top: 2rem;
	  margin-left: 1.8rem;
	  font-size: 0.25rem;
	  color: #999999;
	  margin-bottom: 0.2rem;
}
.username input{
	font-size: 0.25rem;
	width: 5.8rem;
	height: 0.55rem;
	color: #888888;
	border: none;
	border-radius:40px ;
	outline:none;
	margin-left: .8rem; 
	 -moz-box-shadow:4px 4px 10px ;    /*阴影*/
     -webkit-box-shadow:4px 4px 10px ;
     box-shadow:4px 4px 10px ;
     text-indent: .2rem;     /*首行缩进*/
  	
}
.username input::-webkit-input-placeholder{
    color:#A9A9A9;opacity:50;        /*提示字体颜色*/
}
.username .Submit p{
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 50%;
	font-size:0.6rem ;
	color: #EEEEEE;
	text-align: center;
	background: #999999;
	 -moz-box-shadow:10px 10px 10px ;    /*阴影*/
     -webkit-box-shadow:10px 10px 10px ;
     box-shadow:4px 4px 10px ;
}
.username .Submit{
	margin-left: 3.3rem;
	margin-top: .5rem;
}
.choice{
	color: #F08080;
}
.box .one p{
	float: left;
	width: 33%;
	text-align: center;
	color: #EEEEEE;
	padding-top: 0.3rem;
	
}
.box .one p i{
	font-size: .4rem;
}
.box .newclass p{
	float: left;
	width: 100%;
	color: #EEEEEE;
	padding-top: 0.3rem;
}
.box .newclass p i{
	font-size: .4rem;
	margin-right: 0.2rem;
	margin-left: 0.2rem;
}
.maxhao{
	float: right;
	margin-right: 0.3rem;
}


</style>