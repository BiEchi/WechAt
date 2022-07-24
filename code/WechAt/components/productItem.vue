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
				default: 'This is the default product price'
			},
			productSeller: {
				type: Number,
				default: 'This is the default product seller'
			}
		},
		onLoad() {

		},
		methods: {

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
