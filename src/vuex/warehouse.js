
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={

	userinformation:{
		phone:'12345678900',
		password:'123',
		username:'我是默认的',
	
	},
	completes:false,
	img:[
		{
			src:'../../static/img/IMG_1674_02.jpg',
			font:'家里常备一管酱，吃面吃沙拉才像样。',
			name:'jian',
			url:'child',
			id:'jianzhi'
		},
		{
			src:"../../static/img/IMG_1674_04.jpg",
			font:'快手菜 | 百吃不厌，椒盐小菜',
			name:'pipixia',
			url:'child',
			id:'pipixia'
		}
	],
	preferredimg:[
		{
			src:'../../static/img/IMG_1678_03.jpg',
			font:'日日煮定制手套',
			span:'简约百搭，厚实棉麻材质',
			price:'$12.8'
		},
		{
			src:'../../static/img/IMG_1678_05.jpg',
			font:'入口即化 网红饼干',
			span:'AKOKO网红手工曲奇饼干',
			price:'$179'
		},
		{
			src:'../../static/img/IMG_1678_09.jpg',
			font:'经典四方筷',
			span:'壳氏唯经典四方筷家庭装10双无漆无蜡抗菌易清洗',
			price:'$107'
		},
		{
			src:'../../static/img/IMG_1678_10.jpg',
			font:'日本ASVEL冷水壶',
			span:'日本ASVEL冷水壶 家用耐高温熟料凉开水壶 夏季密...',
			price:'$69'
		},
		{
			src:'../../static/img/IMG_1679_03.jpg',
			font:'一按一拧 果汁就有',
			span:'英国摩飞家用型便捷式果汁机榨汁机',
			price:'$268'
		},
		{
			src:'../../static/img/IMG_1679_05.jpg',
			font:'料理小帮手',
			span:'日日煮厨房纸巾 6体12卷整箱',
			price:'$39.9'
		},
		{
			src:'../../static/img/IMG_1679_09.jpg',
			font:'黄牛肉牛蹄筋',
			span:'Q弹爽滑酱牛蹄筋200g正宗黄牛肉蹄筋美味零食小菜',
			price:'$36'
		},
		{
			src:'../../static/img/IMG_1679_10.jpg',
			font:'鲜嫩酱牛腱',
			span:'鲜嫩酱牛腱200g真空包装 拆袋即食 草饲黄牛肉',
			price:'$46'
		}
	],
	pubu:[
		{
			src:'../../static/img/pubu/IMG_1671_03.jpg',
			name:'大酱汤',
			font:'料足又快手，天冷来一碗也太暖和了吧！'
		},
		{
			src:'../../static/img/pubu/IMG_1671_05.jpg',
			name:'什锦虾仁',
			font:'很多减肥达人分享的菜谱，营养又将康。有机玉米、有机香菇、胡萝卜、虾仁等每一个食材。'
		},
		{
			src:'../../static/img/pubu/IMG_1671_09.jpg',
			name:'孜然羊肉杂粮饭',
			font:'一口爱上，孜然的美味不言而喻！'
		},
		{
			src:'../../static/img/pubu/IMG_1671_10.jpg',
			name:'红烧鹌鹑蛋狮子头',
			font:'有肉有蛋，营养均衡！'
		},
		{
			src:'../../static/img/pubu/IMG_1672_03.jpg',
			name:'招财猫&招财爪蒸果子',
			font:'萌萌哒招财猫蒸果子，好吃到停不下来~'
		},
		{
			src:'../../static/img/pubu/IMG_1672_06.jpg',
			name:'鸡蛋卷饼',
			font:'小朋友喜欢新鲜，同样的东西换个样子做就很好吃的样子。'
		},
		{
			src:'../../static/img/pubu/IMG_1672_10.jpg',
			name:'四川担担面',
			font:'担担面煮法看似非常复杂，其实只要花点心思，也能煮出媲美在餐厅吃到的味道。'
		},
		{
			src:'../../static/img/pubu/IMG_1672_11.jpg',
			name:'川味椒麻虾',
			font:'这道椒麻虾充斥着花椒香味，微辣过瘾！'
		},
		{
			src:'../../static/img/pubu/IMG_1673_03.jpg',
			name:'惊喜礼盒曲奇',
			font:'2018送礼的最新姿势！ 没想到连礼盒本尊都能吃~'
		},
		{
			src:'../../static/img/pubu/IMG_1673_06.jpg',
			name:'猪脚姜',
			font:'坐月子除了喝鸡汤，还能尝尝这道猪脚姜！'
		},
		{
			src:'../../static/img/pubu/IMG_1673_10.jpg',
			name:'香菇贡丸',
			font:'冬天来一份香菇贡丸，下火锅吃好暖和'
		},
		{
			src:'../../static/img/pubu/IMG_1673_11.jpg',
			name:'碗蒸小酥肉',
			font:'香味浓郁，蒸的hin好吃！'
		}
	],
	hezi:'',
	shuju:{
		jianzhi:{
			top:{
				src1:'../../static/img/child/IMG_1675_02.jpg',
				src2:'../../static/img/child/IMG_1676_02.jpg',
				texts:'家里常备一罐酱，吃面吃沙拉才像样。'
			},
			texts:{
				text1:{
					text11:[
						'本期嘉宾：女神叮有料',
						'微信号：nsdyl160214',
						'酱料是西餐中非常重要的一环',
						'即便许多西餐的原料和做法都很简单',
						'但只要用上味道绝赞的酱料',
						'再平凡的菜色都会瞬间亮起来'
					],
					src:'../../static/img/child/IMG_1837_03.jpg',
					text12:[
						'整理了几款吃货们爱吃的西餐酱料',
						'原料易得  制法不难  变化多端 ',
						'熬上几瓶囤在橱柜里',
						'保你分分钟做出活色生香的西式简餐',
						'还不赶快学起来',
						
					],
					neiron:{
						name:'披萨酱 (Pizza Sauce)',
						src:'../../static/img/child/IMG_1838_03.jpg',
						jieshao:[
							'食材',
							'西红柿5个 / 番茄酱226g / 洋葱半个',
							'大蒜 1瓣 / 西芹2根 / 橄榄油 2大匙',
							'黄油 1大匙 / 罗勒叶 1支 / 披萨草 1茶匙',
							'月桂叶 1片 / 小茴香籽 1茶匙 / 盐 半茶匙',
							'白糖 半茶匙 / 黑胡椒 1/4 茶匙',
							'制法',
							'1、洋葱、西芹、大蒜切碎，用橄榄油、黄油炒至香气散发 呈半透明状，下入切成丁的西红柿继续翻炒，至软烂的糊状；',
							'2、倒入番茄酱翻炒均匀，下入切碎的罗勒叶、披萨草、小茴香籽和其他调味料，放一片月桂叶，加盖焖煮至水分基本发挥呈浓稠状，拿掉月桂叶，即成披萨酱；',
							'3、如果你偏好更细腻的口感，可用料理机再搅打一次。'
						],
						jieshao2:[],
						ps:''
					}
				},
				
//				'<i class="fa fa-circle-o-notch"></i>煮艺分享家<i class="fa fa-circle-o-notch"></i>'
			}
		} ,
		pipixia:{
			top:{
				src1:'../../static/img/child/IMG_1839_02.jpg',
				texts:'快手菜  | 百吃不厌，椒盐小菜'
			},
			texts:{
				text1:{
					text11:[],
					src:'',
					text12:[
						'它很简单，像一粒粒细细的沙',
						'它很健康，没有太多复杂的添加剂',
						'它很百搭，游刃有余的切换于任何食材之中',
						'它是一种调味料',
						'它也是一种风味',
						'它用花椒粉和盐制成，没错，它就是椒盐'
					],
					neiron:{
						name:'椒盐皮皮虾',
						src:'../../static/img/child/IMG_1840_03.jpg',
						jieshao:[
							'食材',
							'皮皮虾14个',
							'料酒 1汤匙   大蒜4瓣',
							'椒盐1汤匙   花椒2汤匙',
							'生粉适量   盐适量',
							'做法及步骤',
						],
						jieshao2:[
							{
								src:'../../static/img/child/IMG_1841_03.jpg',
								val:'1、将皮皮虾洗净，用盐和花椒，腌制2小时'
							},
							{
								src:'../../static/img/child/IMG_1841_06.jpg',
								val:'2、放入料酒和生粉，搅拌均匀，备用'
							},
							{
								src:'../../static/img/child/IMG_1843_03.jpg',
								val:'3、准备油锅，烧热到130度'
							},
							{
								src:'../../static/img/child/IMG_1843_06.jpg',
								val:'4、放入皮皮虾，炸至外表变色，盛出'
							},
							{
								src:'../../static/img/child/IMG_1844_06.jpg',
								val:'6、用同个锅子，炒香蒜末和皮皮虾，放入椒盐，翻炒均匀即成'
							},
						],
						ps:'ps:可根据个人喜好，适当添加一些洋葱或者辣椒'
					}
				},
				
			}
		} 
	},
	
		
		
	
};
const mutations={
	aa(state){
		console.log(state.userinformation)
	},
	changeJudge(state){
		state.completes = !state.completes;
//		state.userinformation = {
//			phone:'',
//			password:'',
//			usernameD:'',
//		}
//		console.log(2)
	},
	register(state,user){
		
		state.userinformation = user
		console.log(3)
	},
	login(state,user){
		if (state.userinformation.password == user.password && state.userinformation.phone == user.phone){
			console.log(1)
			$('.username').slideUp()
				$('.entry').slideUp()
//				this.changeJudge
				state.completes = !state.completes;
				console.log(2)
		} 
		
	},
	shuju(state,id){
		state.hezi = state.shuju[id]
		console.log(state.hezi)
	}
};

export default new Vuex.Store({
	state,mutations
});
