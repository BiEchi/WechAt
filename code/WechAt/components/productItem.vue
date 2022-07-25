<template>
	<view class="to-left">
		<!-- view for product name -->
		<view class="product-name">
			<text>{{productName}}</text>
		</view>

		<!-- view for product price -->
		<view class="product-price">
			<text>Product price is: {{productPrice}}</text>
		</view>

		<!-- view for product seller -->
		<view class="product-seller">
			<text>Product seller user ID is: {{productSeller}}</text>
		</view>

		<!-- button to delete the item -->
		<button class="btn" @click="deleteProduct">Delete</button>

		<!-- add a line -->
		<view class="line">------</view>
	</view>
</template>

<script>
	export default {
		name: "productItem",
		props: {
			productName: {
				type: String,
				default: 'This is the default product name'
			},
			productPrice: {
				type: Number,
				default: 0
			},
			productSeller: {
				type: Number,
				default: 1
			},
			productId: {
				type: Number,
				default: 0
			}
		},
		onLoad() {

		},
		methods: {
			deleteProduct() {
				// decide whether the user is the seller of the product
				if (this.productSeller == getApp().globalData.user_id) {
					uniCloud.callFunction({
						name: 'query',
						data: {
							sentence: 'DELETE FROM Product WHERE Product_id = ?',
							arguments: [this.productId]
						},
						success: res => {
							// update the post content list
							console.log("The deleteProduct() function is working!")
							this.$emit('deleteProduct', this.productId)
						},
						fail: err => {
							// jsonfy the error message
							console.log(JSON.stringify(err))
						}
					})
				} else {
					window.alert("You are not the seller of this product!")
				}
			}
		}
	}
</script>

<style>
	/* all items should go to very left */
	/* product name should be bold black */
	.product-name {
		font-weight: bold;
		color: #000;
	}
	.product-price,
	.product-seller {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		text-align: center;
	}
	.to-left {
		float: left;
	}
	.line {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: #e5e5e5;
	}
	.btn {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 10%;
		background: #fff;
		text-align: center;
	}
