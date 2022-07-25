<!-- This file is used for accounts, ... -->

<template>

	<view class="content">
		<view class="text-area">
			<text class="time">{{time}}</text>	
		</view>
		
		<view class="text-area">
			<text class="name">{{name}}</text>	
		</view>
		<!-- <view style="text-align: left;">{{name}}</view> -->
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-left">
			<text class="oneSentence">{{oneSentence}}</text>	
		</view>
		 <button class="reg-button" @click="check_snippet" type="submit">register</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time: ' 07/24/2022 11:52',
				name : 'Albert',
				oneSentence:'Hi, your dress looks beautiful!. product_id://14',
				keyw:'9999',
				snippet_id:0,
				snippet_url:'',
				snippet_content:''
			}
		},
		methods: {
			check_snippet(){
				// console.log(this.keyw)
				var str=this.oneSentence;
				var arr=str.split(" ");
				var keyw=''
				var w=0;
				var i=0;
				for (i=0;i<arr.length;i++){
					if (arr[i].indexOf("https://") != -1){
						this.keyw=arr[i];
						w=0;
						break;
					}
					if (arr[i].indexOf("product_id://") != -1){
						this.keyw=arr[i].replace("product_id://","");
						w=1;
						break;
					}
				}
				
				
				if (keyw!='9999'&&w==1){
					
					uniCloud.callFunction({
										name: 'query',
										data: {
											sentence: 'SELECT * FROM Product WHERE product_id = ?',
											//forget !!!E_mail? EMAIL?
											arguments: [this.keyw]
										},
					
					success: res => {      console.log(this.keyw)
											// this.snippet_url="pages/product/product"
											this.snippet_url="pages/product/product"+String(this.keyw)
											this.snippet_content='This items name is'+String(res.result[0]['name'])+'and its price is' +String(res.result[0]['price'])
											this.add_snippet()
												
			
										},					
										fail: err=>{
											console.log('error')
											// console.log('price')
											console.log(err)
										}
									})
					
				}
				// if (keyw!=NULL&&W==0){
					
				// 	uniCloud.callFunction({
				// 						name: 'query',
				// 						data: {
				// 							sentence: 'SELECT * FROM Product WHERE product_id = ?',
				// 							//forget !!!E_mail? EMAIL?
				// 							arguments: [this.keyw]
				// 						},
					
				// 	success: res => {       
				// 							this.snippet_url="pages/product/product"+this.keyw
				// 							this.snippet_content='This item's name is'+res.result[0]['name']+' and its price is '+res.result[0]['price']
				// 							this.add_snippet()
				// 							console.log(res.result[0]['name'])
				// 							console.log(res.result[0]['price'])	
							
				// 						},					
				// 						fail: err=>{
											
				// 							console.log(err)
				// 						}
				// 					})
					
				// }
				
		},
		add_snippet(){
			console.log(this.snippet_url)
				uniCloud.callFunction({
				  		name: 'query',
				  		data: {
				  			sentence: 'Insert Into Snippet ( Snippet_link, Snippet_content) Values ( ?, ? );',
				  			arguments: [this.snippet_url, this.snippet_content]
				  		},
				  		success: res => {
							console.log("success add")
				  			// console.log(res.result[0])
				  		},					
				  		fail: err=>{
							console.log("fail add")
				  			console.log(err)
				  		}
				  	})
										} 
			}
		
		
			

		}
		
	
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: left;
		/* margin-top: 20rpx;
		margin-left: -600rpx; */
	}

	.logo {
		width: 50px;
		height: 50px;
		margin-top: 20rpx;
		margin-left: -600rpx;
		object-fit: cover;
	}

	.text-area {
		/* margin-top: 10rpx;
		margin-left: 10rpx; */
		display: flex;
		justify-content: center;
	}
	.text-left {
		/* margin-top: 10rpx;
		margin-left: 10rpx; */
		display: flex;
		justify-content:  flex-end;
	}
   .name{
		margin-top: 10rpx;
		margin-left: -620rpx;
		font-size: 5rpx;
		color: #8f8f94;
	}
	.oneSentence{
			margin-top: -100rpx;
			margin-left: 0rpx;
			font-size: 3rpx;
			color: #8f8f94;
		}
	
	.time {
		margin-top: 0rpx;
		margin-left: 0rpx;
		font-size: 5rpx;
		color: #8f8f94;
	}
	.reg-button:hover {
	  background-color: #f44336;
	  color: white;
	}
	.setting{
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  justify-content: center; 
	}
</style>
