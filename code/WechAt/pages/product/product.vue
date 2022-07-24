<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>
 
<script>
	uniCloud.callFunction({
		name: 'query',
		data: {
			sentence: 'SELECT * FROM Post WHERE Post_id = ? OR Post_id = ? OR Post_id = ?',
			arguments: [3, 5, 7]
		},  
		success: res=>{
			// output the length of the result
			console.log('The returned result is', res.result[0]) 
			// update the post content
			this.content = res.result[0]['Post_content'] 
			this.post_id_vue = res.result[0]["Post_id"]
		},
		fail: err=>{
			console.log(err)
		}
	})
	
	export default {
		data() {
			return {
				title: 'WechAtB'
			}
		},
		onLoad() {

		},
		methods: {

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
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
