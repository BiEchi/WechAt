<template>
	<view class="content">
		<item :title="title" :content="content"></item>
	</view>
</template>

<script>
	import item from '@/components/item.vue'
	
	// call the cloud function to get the post data
	var post_title = ''
	var post_content = ''
	uniCloud.callFunction({
		name: 'query',
		data: {
			sentence: 'SELECT * FROM Post WHERE Post_id = ?',
			arguments: [1]
		},
		success: res=>{
			// get the post_content in res
			post_content = res.result[0]["Post_content"]
		}, 
	})

	export default {
		data() {
			return {
				title: 'New Title',
				content: post_content
			}
		},
		onLoad() {

		},
		methods: { 

		}, 
		components: { 
			item
		} 
	}    
</script>

<style>
	/* solid black line style */
	.solidline {
		width: 100%;
		height: 2px;
		background-color: #000;
	}
	
	
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
