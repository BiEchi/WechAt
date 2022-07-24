<template>
	<view class="content">
		<!-- make a list of the contents using v-for and content_list -->
		<view v-for="item in items" :key="item['Product_id']">
			<productItem :productName="item['Name']" :productPrice="item['Price']" :productSeller="item['User_id']"></productItem>
		</view>
	</view>
</template>

<script>
	import productItem from '@/components/productItem.vue'
	
	// from App.vue
	var user_id = 2

	export default { 
		data() {
			return {
				items: [] 
			}
		},
		onLoad() {
			this.getProduct()
		},
		methods: {  
			// function for submitting the user input 
			getProduct() {
				uniCloud.callFunction({
					name: 'query',
					data: { 
						sentence: 'SELECT * FROM Product WHERE User_id = ?',
						arguments: [3]
					}, 
					success: res=>{ 
						// update the post content list
						this.items = res.result 
					}, 
					fail: err=>{  
						// jsonfy the error message
						console.log(JSON.stringify(err))
					} 
		        })
			},
		},
		components: { 
			productItem
		} 
	}    
</script>

<style>
	/* make a post id */
	.postid {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		text-align: center;
		font-size: 20px;
		color: #000;
	}

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
