<!-- This file is used for accounts, ... -->

<template>
	<view class="content">
		<image class="logo" src="/static/avtor.png"></image>
		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true">
			<view class="chat-ls msg-left">
				<view class="chat-time1">{{title}}
					<view class="background1">
						<view class="chat1">{{oneSentence}}</view>
					</view>
				</view>
			</view>
			<view class="chat-ls msg-right">
				<view class="chat-time2">Your name 07/24/2022 11:53
					<view class="background2">
						<view class="chat2">Wow!Thank you~</view>
					</view>
				</view>
			</view>
			<view class="chat-ls msg-right">
				<view class="chat-time2">Your name 07/24/2022 11:53
					<view class="background2">
						<view class="chat2">Would you like to but it?</view>
					</view>
				</view>
			</view>
			<view class="chat-ls msg-left">
				<view class="chat-time1">{{title}}
					<view class="background1">
						<view class="chat1">Yep!</view>
					</view>
				</view>
			</view> 
		</scroll-view>
		<view class="chat-main">
		<submit></submit>
		</view>
	</view>
</template>

<script>
	import submit from '../../components/submit.vue'
	
	export default {
		data() {
			return {
				title: 'Albert 07/24/2022 11:52',
				oneSentence:'Hi, your dress looks beautiful!'
			}
		},
		methods: {
			
		},
		components:{
			submit
		},
		onLoad(){ 
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		width: 50px;
		height: 50px;
		object-fit: cover;
	}
	.chat-ls{
		display: flex;
	}
	.chat-time1{
		padding-top:5rpx;
		padding-left: 5rpx;
		font-size: 8rpx;
		color: #8f8f94;
	}
	.chat1{
		padding-bottom:15rpx;
		font-size: 16px;
		padding-left: 10rpx;
		color: #000000;
	}
	.background1{
		max-width:480rpx;
		border-radius: 10px 10px 10px 10px;
		background-color: #f0f0f0;
		padding-left: 10rpx;
	}
	.msg-left{
		flex-direction: row;
	}
	.chat-time2{
		padding-top:5rpx;
		padding-left:5rpx;
		font-size: 8rpx;
		color: #8f8f94;
	}
	.chat2{
		padding-left: 10rpx;
		padding-bottom:15rpx;
		font-size: 16px;
		color: #000000;
	}
	.background2{
		padding-left: 10rpx;
		max-width:480rpx;
		border-radius: 10px 10px 10px 10px;
		background-color: #55ff7f;
	}
	.msg-right{
		flex-direction: row-reverse;		
	}
	.chat-main{
		margin-top: 650rpx;
	}
</style>
