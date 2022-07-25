<!-- jiayuan is modifying -->
<template>
	<view class="content">
		<!-- section for the public sessions -->
		<!-- text to show that this is public session section -->
		<view class="public">
			<text class="public-text">Public Sessions</text>
		</view>
		<view v-for="pub_session in pub_sessions" :key="pub_session['Session_id']">
			<div class="flex-container">
			<div class="card">
			  <img class="profile" src="/static/logo.png" alt="img1">
			</div>
			<div class="texting">
				<h4 class="name"><b>{{pub_session['Chat_name']}}</b></h4>
				<p class="chatting">{{pub_msg}}</p>
			</div>
		</div>
		</view>

		<!-- section for the private sessions -->
		<!-- text to show that this is private session section -->
		<view class="private">
			<text class="private-text">Private Sessions</text>
		</view>
		<view v-for="pri_session in pri_sessions" :key="pri_session['Session_pri_id']">
			<div class="flex-container">
				<div class="card">
				<img class="profile" src="/static/logo.png" alt="img1">
				</div>
				<div class="texting">
					<h4 class="name"><b>{{pri_session['User_name']}}</b></h4>
					<p class="chatting">{{pri_msg}}</p>
				</div>
			</div>
		</view>
		<view v-for="pri_session2 in pri_sessions2" :key="pri_session2['Session_pri_id']">
			<div class="flex-container">
				<div class="card">
				<img class="profile" src="/static/logo.png" alt="img1">
				</div>
				<div class="texting">
					<h4 class="name"><b>{{pri_session2['User_name']}}</b></h4>
					<p class="chatting">{{pri_msg}}</p>
				</div>
			</div>
		</view>
	</view>

</template>

<script>

	var my_user_id = getApp().globalData.user_id

	export default {
		data() {
			return {
				pub_sessions: [],
				pri_sessions: [],
				pri_sessions2: [],
				pub_msg: 'Hello',
				pri_msg: 'Hello',
				pub_msgs: [],
				pri_msgs: [],
				pri_msgs2: [],
			} 
		},
		onLoad() {
			this.start_getting_session(),
			this.start_getting_msg()
		},
		methods: {
			jumpToMessage() {
				// should jump to clicked message
			}, 
			start_getting_session() {
				
				uniCloud.callFunction({
					name: 'query',
					data: {
						sentence: 'SELECT * FROM Joined NATURAL JOIN Chat_session WHERE User_id = ?',
						arguments: [this.my_user_id]
					},
					success: res => {
						this.pub_sessions = res.result
						console.log(res.result)
						console.log('kill me in uniCloud success 1') 
					},					
					fail: err=>{
						console.log(err) 
					}
				})
				
				uniCloud.callFunction({
					name: 'query',
					data: {
						sentence: 'SELECT * FROM Joined_pri JOIN Chat_user ON User2_id = User_id WHERE User1_id = ? ',
						arguments: [this.my_user_id]
					},
					success: res => {
						this.pri_sessions = res.result
						console.log('kill me in uniCloud success 2')
					},					
					fail: err=>{
						console.log(err)
					}
				})
				
				uniCloud.callFunction({
					name: 'query',
					data: {
						sentence: 'SELECT * FROM Joined_pri JOIN Chat_user ON User1_id = User_id WHERE User2_id = ?',
						arguments: [this.my_user_id]
					},
					success: res => {
						this.pri_sessions2 = res.result
						console.log('kill me in uniCloud success 3')
					},					
					fail: err=>{
						console.log(err)
					}
				})
			},
			start_getting_msg(){
				this.my_user_id = getApp().globalData.user_id
				console.log("my id is: " + this.my_user_id)
				
				
				uniCloud.callFunction({
					name: 'query',
					data: {
						sentence: 'SELECT Session_id, Msg_Content FROM Contain c NATURAL JOIN Msg m NATURAL JOIN ( SELECT Session_id, MAX(Msg_time) AS MAXT FROM Joined NATURAL JOIN Chat_session NATURAL JOIN Contain NATURAL JOIN Msg WHERE User_id = 1 GROUP BY Session_id) AS TEMP WHERE TEMP.Session_id = c.Session_id AND m.Msg_time = TEMP.MAXT ',
						arguments: [this.my_user_id]
					},
					success: res => {
						this.pub_msgs = res.result
						console.log(this.pub_msgs)
						console.log('kill me in uniCloud success 11')
					},					
					fail: err=>{
						console.log(err) 
					}
				})
				   
				// uniCloud.callFunction({
				// 	name: 'query',
				// 	data: {
				// 		sentence: 'SELECT * FROM Joined_pri JOIN Chat_user ON User2_id = User_id WHERE User1_id = ? ',
				// 		arguments: [this.my_user_id]
				// 	},
				// 	success: res => {
				// 		this.pri_msgs = res.result
				// 		console.log('kill me in uniCloud success 22')
				// 	},					
				// 	fail: err=>{
				// 		console.log(err)
				// 	}
				// })
				
				// uniCloud.callFunction({
				// 	name: 'query',
				// 	data: {
				// 		sentence: 'SELECT * FROM Joined_pri JOIN Chat_user ON User1_id = User_id WHERE User2_id = ?',
				// 		arguments: [this.my_user_id]
				// 	},
				// 	success: res => {
				// 		this.pri_msgs2 = res.result
				// 		console.log('kill me in uniCloud success 33')
				// 	},					
				// 	fail: err=>{
				// 		console.log(err)
				// 	}
				// })
			}
		}
	}
</script>

<style>
	
	text {
		font-size: 20px;
		color: darkslategrey;
	}
	
	.flex-container {
	  display: flex;
	  flex-direction: row;
	}
	
	.card{
		float: left;
		padding:6px;
	}
	
	.profile{
		flex:30%;
	}
	
	.name{
		flex:70%;
		padding:0.3em;
		clear:right;
	}
	
	.chatting{
		float: left;
		padding: 10px 0px 0px 3px;
	}
</style>