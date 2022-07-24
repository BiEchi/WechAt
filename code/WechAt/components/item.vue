<template>
	<view>
		<!-- title with bold text -->
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

		<!-- normal text -->
		<view class="text-area">
			<text>{{content}}</text>
		</view>

		<!-- line for dividing the title and the content -->
		<view class="line"></view> 
	</view>
</template>

<script>
	export default { 
		name: "item",
		props: {
			title: {
				type: String,
				default: 'Default Title'
			},
			content: { 
				type: String,
				default: 'This is the default content'
			}	
		},
		data() {
			return {
				
			}
		},
		methods: {
		}
	}
</script>

<style>
	/* provide a thin solid gray line style as class 'line', which is as wide as the screen */
	.line { 
		width: 100%;
		height: 1px;
		background-color: #e5e5e5;
	}

	/* provide the style for a title with bold text */
	.text-area {
		display: flex;
		justify-content: center;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

</style>
