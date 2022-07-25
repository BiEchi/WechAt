<template>
	<view class="content">
		<!-- button to create a new product, navigate to the product creation page -->
		<view class="create-btn">
			<button @click="navigate">Create a new product</button>
		</view>
		<!-- button to search for the expedcted item -->
		<view class="search">
			<!-- after clicking on the button, should execute the method getProduct() -->
			<button class="search-btn" @click="getProduct">Search/Refresh</button>
			<input class="search-input" v-model="search_content" placeholder="Input keywords here" />
		</view>
		<!-- draw a solid black line -->
		<view class="solidline"></view>
		<!-- make a list of the contents using v-for and content_list -->
		<view v-for="item in items" :key="item['Product_id']">
			<productItem :productName="item['Name']" :productPrice="item['Price']" :productSeller="item['User_id']" :productId="item['Product_id']"></productItem>
		</view>
	</view>
</template>

<script>
	import productItem from '@/components/productItem.vue'
	
	// from App.vue
	var user_id = getApp().globalData.user_id

	export default { 
		data() {
			return {
				items: [],
				search_content: ''
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
						// select tge products with the keywork input by the user
						sentence: 'SELECT * FROM Product WHERE Name LIKE ? ORDER BY Price ASC',
						arguments: ['%' + this.search_content + '%']
					}, 
					success: res=>{ 
						// update the post content list
						console.log("The getProduct() function is working!") 
						this.items = res.result
					}, 
					fail: err=>{  
						// jsonfy the error message
						console.log(JSON.stringify(err))
					} 
		        })
			},
			navigate() {
				 this.$router.push('/pages/product/create')
			}
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

	.search-btn {
		width: 150px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background-color: #00bcd4;
		color: #fff;
		border-radius: 5px;
		margin-top: 20px;
	}

	.search-input {
		width: 300px;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}

	/* the create-btn should be larger than the search-btn */
	.create-btn {
		display: flex;
		justify-content: center;
	}

</style>
