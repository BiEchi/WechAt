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
				<p class="chatting">First Message</p>
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
					<h4 class="name"><b>Friend Name</b></h4>
					<p class="chatting">First message TBD.</p>
				</div>
			</div>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				pub_sessions: [],
				pri_sessions: []
			} 
		},
		onLoad() {
			this.start_getting_session()
		},
		methods: {
			jumpToMessage() {
				// should jump to clicked message
			}, 
			start_getting_session() {
				this.my_user_id = getApp().globalData.user_id
				console.log(this.my_user_id)
				
				uniCloud.callFunction({
					name: 'query',
					data: {
						sentence: 'SELECT * FROM Joined NATURAL JOIN Chat_session WHERE User_id = ?',
						arguments: [this.my_user_id]
					},
					success: res => {
						this.pub_sessions = res.result
						console.log('kill me in uniCloud success 1')
					},					
					fail: err=>{
						console.log(err)
					}
				})
				
				uniCloud.callFunction({
					name: 'query',
					data: {
						sentence: 'SELECT * FROM Joined_pri WHERE User1_id = ? OR User2_id = ?',
						arguments: [this.my_user_id, this.my_user_id]
					},
					success: res => {
						this.pri_sessions = res.result
						console.log('kill me in uniCloud success 2')
					},					
					fail: err=>{
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style>
	
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