<!-- puyu is modifying -->
<template>
	<view class="content">
		<image class="Bottle_image" src="/static/logo.png"></image>
		<view class="text-area"
			<text class="title">{{title}}</text>
		<div>
			<button v-on:click="sendMessage()" class="send_button">{{message_send}}</button>
			<button v-on:click="findBottle()" class="change_button">{{message_find}}</button> <!-- when you find a bottle, you can choose to discard or read -->
			<button v-on:click="discardBottle()" v-if="discard_box_toggle" class="discard_button">{{message_discard}}</button>  <!-- if the bottle is discard, it will be delete in database -->
		</div>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				title:'Bottle Message',
				bottleMessage:'message from the Databases',
				message_send: 'Send Message',
				message_find: 'Find Bottle',
				message_discard: 'Discard Message',
				my_user_id: 0,
				read_content:'',
				send_content:'',
				status:'',
				discard_box_toggle: false,
				send_confirm: false
			}
		},
		methods: {
			sendMessage() {
				console.log('send a message')
				
			// insert a row in bottle
				// INSERT INTO Bottle (Time, User_id2, Status, Content)
				// VALUES (GETDATE(), my_user_id, status, send_content)
			},
			
			// 换一个漂流瓶
			// this method is to change another random bottle
			findBottle(){
				console.log('find bottle'),
				this.discard_box_toggle = true
				
			// read the random bottle
				// SELECT column FROM table
				// ORDER BY RAND()
				// LIMIT 1
			},
			
			replyToBottle(){
			// bottle status change to read
				console.log('reply the bottle message'),
				
			// read the random bottle
				// SELECT column FROM table
				// ORDER BY RAND()
				// LIMIT 1
				
			// input message
				this.send_content = "I am replying a message";
				
				if (this.send_confirm == true){
				// reply to messgage, this become a private chat
				
				// create a private chat session
				}
				
				
			},
			
			discardBottle(){
				// if you discard the box, that means the message is not read, database not update
				console.log('discard the bottle'),
				this.discard_box_toggle = false
			}
		}
	}
	
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.Bottle_image {
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
	
	.send_button {
		background-color: #4CAF50; /* Green */
	    border: none;
	    color: white;
	    padding: 10px 25px;
		margin-top: 10px;
	    text-decoration: none;
	    display: inline-block;
	    font-size: 16px;
		display: block;
	}
	
	.change_button {
		background-color: #4CAF50; /* Green */
	    border: none;
		margin-top: 10px;
	    color: white;
	    padding: 10px 25px;
	    text-decoration: none;
	    display: inline-block;
	    font-size: 16px;
		display: block;
	}
	
	.discard_button {
		background-color: #4CAF50; /* Green */
		margin-top: 10px;
	    border: none;
	    color: white;
	    padding: 10px 25px;
	    text-decoration: none;
	    display: inline-block;
	    font-size: 16px;
		display: block;
	}
</style>