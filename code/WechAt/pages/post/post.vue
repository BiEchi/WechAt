<template>
	<view class="content">
		<item></item>
	</view>
</template>

<script>
	import item from 'components/item.vue'
	
	// call the cloud function to get the post data
	uniCloud.callFunction({
		name: 'query',
		data: {
			hi: 111,
		},
		success: res=>{
			console.log(res['result'])
		}
	})
  

	export default {
		name: 'Post',
		data() {
			return {
				title: 'WechAtA'
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
