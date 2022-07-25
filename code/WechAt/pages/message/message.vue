

<template>
  <van-row class="an-btm">
  <van-col span="24" v-bind:key="item" v-for="item in arr">
   <div v-if="item.is_user">
   <view class="chat-ls msg-left">
    <view class="chat-time1">{{ item.Msg_sender }}  {{ item.Msg_time }}
     <view class="background1">
      <view class="chat1">{{item.Msg_content}}</view>
     </view>
    </view>
   </view>
   </div>
   <div v-else>
   <view class="chat-ls msg-right">
    
    <view class="chat-time1">{{ item.Msg_sender }}  {{ item.Msg_time }}
     <view class="background1">
      <view class="chat1">{{item.Msg_content}}</view>
     </view>
    </view>
   </view>
 </div>
  </van-col>
  </van-row>

</template>
<!-- <div>
  <div v-if="show1">111111111111</div>
  <div v-else>22222222</div>
 </div>
</template>
<script>
 export default {
  data(){
   return{
    show1:true  //显示1111111
   } 
  }
 }
 -->

<script>
	// import submit from '../../components/submit.vue'
	
	export default {
	
		data() {
			return {
				
				my_user_id:1,
				show1:false,
				Msg_content:"",
				Msg_id:12121,
				Msg_time:"",
				Msg_status:"",
				Msg_sender:2,
				cur_user:3,
				
				arr: [
				     
				   { Msg_id: 1, Msg_time: "", Msg_status: "" ,Msg_sender:4,Msg_content:""}
				 ],
	
				title: 'Albert 07/24/2022 11:52',
				oneSentence:'Hi, your dress looks beautiful!'
			}
		},
		methods: {
			send(){	
				this.Msg_time = new Date();
				
			uniCloud.callFunction({
				name: 'query',
				data: {
					sentence: 'Insert Into Msg ( Msg_id, Msg_time, Msg_status, Msg_sender, Msg_content) Values ( ?, ?, ?, ?, ? )',
					
					arguments: [this.Msg_id, this.Msg_time,this.Msg_status,this.Msg_sender,this.Msg_content]
				},
				success: res => {
					console.log(res.result[0])
					
				},					
				fail: err=>{
					// console.log(this.username, this.passwords, this.avator, this.email)
					console.log(err)
				}
			})},
			
			find_msg(){
				this.my_user_id = getApp().globalData.user_id;
				console.log("Started!")
				var u = 0;
				var b = 105;
			    uniCloud.callFunction({
			     name: 'query',
			     data: {
			      sentence: 'SELECT * FROM Contain NATURAL JOIN Msg WHERE  Session_id=? ORDER BY Msg_time DESC  ',
			      arguments: [b]
			     },
			     success: res => {
					 console.log(res.result[0]);
				this.arr=res.result
			   for (u=0;u<this.arr.length;u++){
				   if (this.arr[u]["Msg_sender"]==this.my_user_id) {this.arr[u]["is_user"]=true;}
				   else {this.arr[u]["is_user"] = false;} 
			   }
				
					     
				  // this.arr=res.result
			      console.log(this.arr);
			      
			     },     
			     fail: err=>{
			      
			      console.log(err)
			     }
			    })
			    
			   },
			      created(){
			                     
			                     this.find_msg();
			                 }
			     
		
		},
		
		onLoad(){
			console.log("enter onLoad"),
			this.find_msg()
			
		}
	}
</script>

<style>
	input {
		border: 1px solid;
		padding: 10px;
		box-shadow: 5px 5px 20px #888888;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		width: 50px;
		height: 50px;
		object-fit: cover;
	}
	.chat-ls{
		display: flex;
	}
	.chat-time1{
		padding-top:5rpx;
		padding-left: 5rpx;
		font-size: 8rpx;
		color: #8f8f94;
	}
	.chat1{
		padding-bottom:15rpx;
		font-size: 16px;
		padding-left: 10rpx;
		color: #000000;
	}
	.background1{
		max-width:480rpx;
		border-radius: 10px 10px 10px 10px;
		background-color: #f0f0f0;
		padding-left: 10rpx;
	}
	.msg-left{
		flex-direction: row;
	}
	.chat-time2{
		padding-top:5rpx;
		padding-left:5rpx;
		font-size: 8rpx;
		color: #8f8f94;
	}
	.chat2{
		padding-left: 10rpx;
		padding-bottom:15rpx;
		font-size: 16px;
		color: #000000;
	}
	.background2{
		padding-left: 10rpx;
		max-width:480rpx;
		border-radius: 10px 10px 10px 10px;
		background-color: #55ff7f;
	}
	.msg-right{
		flex-direction: row-reverse;		
	}
	.sub{
		padding-top:0rpx;
		padding-left: 500rpx;
	}
	.sub-1{
		
		width:500rpx;
		padding-top:200rpx;
		padding-left: -100rpx;
	}
	
</style>
