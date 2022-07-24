<template>
	<view class="content">
		<item :title="title" :content="content"></item>
		<!-- capture user input -->
		<view>
			<view> input lowerbound: </view>
			<input type="text" :value='user_input' @input="user_input = $event.target.value" />
			<view> your lowerbound is set to: </view>
			<view> {{user_input}} </view>
		</view> 
		<!-- button to submit user_input -->
		<button class="btn" @click="submit">submit</button>
	</view>
</template>

<script>
	import item from '@/components/item.vue'
	
	// call the cloud function to get the post data
	var post_content = 'This is my Default Content!' 

	export default {
		data() {
			return { 
				title: 'New Title',
				content: post_content,
				user_input: 0,
			}
		},
		onLoad() {
 
		},
		methods: { 
			// function for submitting the user input 
			submit() {
				uniCloud.callFunction({
					name: 'query',
					data: {
						sentence: 'SELECT * FROM Post WHERE Post_id <= ? AND Post_id >= ?',
						arguments: [10, this.user_input]
					}, 
					success: res=>{ 
						// output the length of the result
						console.log(res.result.length)
						// get the post_content in res
						post_content = res.result[0]["Post_content"]
						post_id = res.result[0]["Post_id"]
					},
					fail: err=>{
						console.log(this.user_input)
						console.log(err)
					}
		        })
			}
		}, 
		components: { 
			item
		} 
	}    
</script>

<style>
	/* make a small button */
	.btn {
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background-color: #00bcd4;
		color: #fff;
		border-radius: 5px;
		margin-top: 20px;
	}

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
