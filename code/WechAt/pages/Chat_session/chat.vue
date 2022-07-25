<!-- jiayuan is modifying -->
<template>
	<view class="content">
		<div class="flex-container">
			<div class="card">
			  <img class="profile" src="/static/logo.png" alt="img1">
			</div>
			<div class="texting">
				<h4 class="name"><b>{{name1}}</b></h4>
				<p class="chatting">{{chat1}}</p>
			</div>
		</div>
		<div class="flex-container">
			<div class="card">
			  <img class="profile" src="/static/logo.png" alt="img1">
			</div>
			<div class="texting">
				<h4 class="name"><b>{{name2}}</b></h4>
				<p class="chatting">{{chat2}}</p>
			</div>
		</div>
		</div> 
		<div class="flex-container">
			<div class="card">
			  <img class="profile" src="/static/logo.png" alt="img1">
			</div>
			<div class="texting">
				<h4 class="name"><b>{{name3}}</b></h4>
				<p class="chatting">{{chat3}}</p>
			</div> 
		</div>
		</div>
		<div class="flex-container">
			<div class="card">
			  <img class="profile" src="/static/logo.png" alt="img1">
			</div>
			<div class="texting">
				<h4 class="name"><b>{{name4}}</b></h4>
				<p class="chatting">{{chat4}}</p>
			</div>
		</div>
		<div class="flex-container">
			<div class="card">
			  <img class="profile" src="/static/logo.png" alt="img1">
			</div>
			<div class="texting">
				<h4 class="name"><b>{{name5}}</b></h4>
				<p class="chatting">{{chat5}}</p>
			</div>
		</div>
		<div class="flex-container">
			<div class="card">
			  <img class="profile" src="/static/logo.png" alt="img1">
			</div>
			<div class="texting">
				<h4 class="name"><b>{{name6}}</b></h4>
				<p class="chatting">{{chat6}}</p>
			</div>
		</div>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				title: "Wechat",
				name1: "CS 411",
				name2: "CS 374",
				name3: "ECE 391",
				name4: "LAS 100",
				name5: "CS 446",
				name6: "411 Summer",
				chat1: "Let have midterm demo",
				chat2: "Final is coming",
				chat3: "plagiarism detected",
				chat4: "Useless",
				chat5: "ML is good!",
				chat6: "DDL AGAIN!!!"
			}
		},
		methods: {
			jumpToMessage() {
				// should jump to clicked message
			}
		}
	}
</script>

<style>
	
	.flex-container {
	  display: flex;
	  flex-direction: row;
	}
	
	.card{
		float: left;
		padding:6px;
	}
	
	.profile{
		flex:30%;
	}
	
	.name{
		flex:70%;
		padding:0.3em;
		clear:right;
	}
	
	.chatting{
		float: left;
		padding: 10px 0px 0px 3px;
	}
</style>