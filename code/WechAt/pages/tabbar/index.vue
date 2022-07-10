<template>
	<view class="base">
		<scroll-view scroll-y style="height: 1600rpx;width: 100%;" @scrolltolower="reachBottom">
			<view class="back">
			<meta charset="utf-8">	
			</view>
		    <view class="announcementstatic">
				<view class="announcementedge"></view>
				<view class="announcementco1"></view>
				<view class="announcementco2"></view>
				<view class="announcementcotext">Announcement</view>
				<view class="announcementbubble"></view>
				<view @click="MoreAnnouncementClick()" class="announcementmorebutton">More...</view>
				
				<view @click="AnnouncementClick(AnnouncementShowList[0])" class="announcementinfo1">
					<view>{{AnnouncementShowList[0]["Title"]}}</view>
					<view>{{AnnouncementShowList[0]["Posted On"]}}</view>
				</view>
				<view @click="AnnouncementClick(AnnouncementShowList[1])" class="announcementinfo2">
					<view>{{AnnouncementShowList[1]["Title"]}}</view>
					<view>{{AnnouncementShowList[1]["Posted On"]}}</view>
				</view>
				<view @click="AnnouncementClick(AnnouncementShowList[2])" class="announcementinfo3">
					<view>{{AnnouncementShowList[2]["Title"]}}</view>
					<view>{{AnnouncementShowList[2]["Posted On"]}}</view>
				</view>
				<view @click="AnnouncementClick(AnnouncementShowList[3])" class="announcementinfo4">
					<view>{{AnnouncementShowList[3]["Title"]}}</view>
					<view>{{AnnouncementShowList[3]["Posted On"]}}</view>
				</view>
				
			</view>
			<view class="updatebutton">
				<view class="clockicon">
					<view class="clockco1"></view>
					<view class="clockco2"></view>
					<view class="clockco3"></view>
					<view class="clockco4"></view>
				</view>
			</view>
			<view class="calendarbutton">
				<view class="calendaricon">
					<view class="calendarco1"></view>
					<view class="calendarco2"></view>
					<view class="calendarco3"></view>
					<view class="calendarco4"></view>
					<view class="calendarco5"></view>
					<view class="calendarco6"></view>
					<view class="calendarco7"></view>
					<view class="calendarco8"></view>
					<view class="calendarco9"></view>
					<view class="calendarco10"></view>
				</view>
			</view>
			<view class="todaystatic">
				<view class="today">Today</view>
				<view @click="AnnouncementClick(TodayShowList[0])" class="todayinfo1">
					<view>{{TodayShowList[0]["Title"]}}</view>
					<view>{{TodayShowList[0]["Posted On"]}}</view>
				</view>
				<view @click="AnnouncementClick(TodayShowList[1])" class="todayinfo2">
					<view>{{TodayShowList[1]["Title"]}}</view>
					<view>{{TodayShowList[1]["Posted On"]}}</view>
				</view>
				<view class="todaylogo"></view>
				<view class="todaybubble"></view>
				<view @click="MoreTodayClick()" class="todaymorebutton">More...</view>
			</view>
			<view class="tomorrowstatic">
			    <view class="tomorrow">Tomorrow</view>
				<view @click="AnnouncementClick(TomorrowShowList[0])" class="tomorrowinfo1">
					<view>{{TomorrowShowList[0]["Title"]}}</view>
					<view>{{TomorrowShowList[0]["Posted On"]}}</view>
				</view>
				<view @click="AnnouncementClick(TomorrowShowList[1])" class="tomorrowinfo2">
					<view>{{TomorrowShowList[1]["Title"]}}</view>
					<view>{{TomorrowShowList[1]["Posted On"]}}</view>
				</view>
				<view class="tomorrowlogo"></view>
			    <view class="tomorrowbubble"></view>
			    <view @click="MoreTomorrowClick()" class="tomorrowmorebutton">More...</view>
			</view>
			<view class="futurestatic">
				<view class="future">Future</view>
				<view @click="AnnouncementClick(FutureShowList[0])" class="futureinfo1">
					<view>{{FutureShowList[0]["Title"]}}</view>
					<view>{{FutureShowList[0]["Posted On"]}}</view>
				</view>
				<view @click="AnnouncementClick(FutureShowList[1])" class="futureinfo2">
					<view>{{FutureShowList[1]["Title"]}}</view>
					<view>{{FutureShowList[1]["Posted On"]}}</view>
				</view>
				<view class="futurelogo"></view>
				<view class="futurebubble"></view>
				<view @click="MoreFutureClick()" class="futuremorebutton">More...</view>
			</view>
			<view class="todo">
				<view class="todaytodo"></view>
				<view class="tomorrowtodo"></view>
				<view class="futuretodo"></view>
			</view>
			<view class="clock">
			    <view>{{a}} {{b}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import json from 'database/client_helper/import_data.js';
	export default {
		data() {
			return {
				a:'',
				b:'',
				year:0,
				month:0,
				day:0,
				monthlist:["January","February","March","April","May","June","July","August","September","October","November","December"],
				month_to_num:{"January":1,"February":2,"March":3,"April":4,
							  "May":5,"June":6,"July":7,"August":8,
							  "September":9,"October":10,"November":11,"December":12},
				new_announcements_count:10,
				AnnouncementShowList:[],
				TodayShowList:[],
				TomorrowShowList:[],
				FutureShowList:[]
			}
		},
		created(){
			this.setTime()
			this.setDate()
		},
		onLoad() {
			let data=json.data;
			this.setTime();
			this.setDate();
			this.put_announcement();
			this.put_td_tmr_ftr();
		},
		methods: {
			datedifference(sDate1,sDate2) {    //2022-1-25
				var dateSpan,tempDate,iDays;
				sDate1=Date.parse(sDate1)
				sDate2=Date.parse(sDate2)
				dateSpan=sDate2-sDate1
				iDays=Math.ceil(dateSpan/(24*3600*1000))
				return iDays;
			},
			put_announcement: function(){
				var num_an=json.data[0]["Posted By"]["length"];
				var announcement;
				for(var i=0;i<num_an;i++){
					announcement={
						"Posted By":json.data[0]["Posted By"][i],
						"Posted On":json.data[0]["Posted On"][i],
						"Posted To":json.data[0]["Posted To"][i],
						"Stipulate":json.data[0]["Stipulate"][i],
						"Title":json.data[0]["Title"][i]
						};
					this.AnnouncementShowList.push(announcement);
				}
			},
			put_td_tmr_ftr: function(){
				var num_tot=json.data[0]["Posted By"]["length"]
				var month_en=this.monthlist[this.month];
				var year_str=this.year.toString();
				var month_str=(this.month+1).toString();
				var day_str=this.day.toString();
				var today_date=year_str+"-"+month_str+"-"+day_str;
				today_date='2021-4-25';
				var announcement;
				for(var i=0;i<num_tot;i++){
					announcement={
						"Posted By":json.data[0]["Posted By"][i],
						"Posted On":json.data[0]["Posted On"][i],
						"Posted To":json.data[0]["Posted To"][i],
						"Stipulate":json.data[0]["Stipulate"][i],
						"Title":json.data[0]["Title"][i]
						};
					var str_splited=json.data[0]["Posted On"][i].split(',');
					var date_info=str_splited[1].split(' ');
					var year_info=str_splited[2].split(' ');
					var that_date=year_info[1]+"-"+date_info[1]+"-"+date_info[2];
					var date_diff=this.$options.methods.datedifference(today_date,that_date);
					if(date_diff==0){
						this.TodayShowList.push(announcement);
					} else
					if(date_diff==1){
						this.TomorrowShowList.push(announcement);
					} else
					if(date_diff>1){
						this.FutureShowList.push(announcement);
					}
				}
				var len;
				len=this.TodayShowList.length;
				for(var i=1;i<=2-len;i++){
					announcement={"Posted By":"","Posted On":"","Posted To":"","Stipulate":"","Title":""};
					this.TodayShowList.push(announcement);
				}
				len=this.TomorrowShowList.length;
				for(var i=1;i<=2-len;i++){
					announcement={"Posted By":"","Posted On":"","Posted To":"","Stipulate":"","Title":""};
					this.TomorrowShowList.push(announcement);
				}
				len=this.FutureShowList.length;
				for(var i=1;i<=2-len;i++){
					announcement={"Posted By":"","Posted On":"","Posted To":"","Stipulate":"","Title":""};
					this.FutureShowList.push(announcement);
				}
			},
			setDate(){
				var date=new Date()
				var year=date.getFullYear();
				var month=date.getMonth()+1;
				var day=date.getUTCDate();
				var datepage=year+"/"+month+"/"+day
				this.a=datepage
				this.year=year;
				this.month=month-1;
				this.day=day;
				this.goTime()
			},
			setTime(){
				var time=new Date()
				var hours=time.getHours()
				var minute=time.getMinutes()
				var second=time.getSeconds()
				var daytime;
				if(minute==0){
					daytime=hours+":"+'00'
				}
				if(minute>0&&minute<10){
					daytime=hours+":"+'0'+minute
				}
				if(minute>=10){
					daytime=hours+":"+minute
				}
				if(second==0){
					daytime=daytime+":"+'00'
				}
				if(second>0&&second<10){
					daytime=daytime+":"+'0'+second
				}
				if(second>=10){
					daytime=daytime+":"+second
				}
				this.b=daytime
				this.goTime()
			},
			goTime(){
				setInterval(()=>{
					this.setDate()
					this.setTime()
				},1000)
			},
			AnnouncementClick(item){
				let items=encodeURIComponent(JSON.stringify(item));
				uni.navigateTo({
					url: '../announcement/announcement?itemlist='+items,
				})
			},
			MoreAnnouncementClick(){
				let items=encodeURIComponent(JSON.stringify(this.AnnouncementShowList));
				uni.navigateTo({
					url: '../more/moreannouncement?itemlist='+items,
				})
			},
			MoreTodayClick(){
				let items=encodeURIComponent(JSON.stringify(this.TodayShowList));
				uni.navigateTo({
					url: '../more/moretoday?itemlist='+items,
				})
			},
			MoreTomorrowClick(){
				let items=encodeURIComponent(JSON.stringify(this.TomorrowShowList));
				uni.navigateTo({
					url: '../more/moretomorrow?itemlist='+items,
				})
			},
			MoreFutureClick(){
				let items=encodeURIComponent(JSON.stringify(this.FutureShowList));
				uni.navigateTo({
					url: '../more/morefuture?itemlist='+items,
				})
			}
		}
	}
</script>

<style>
@import "/pages/tabbar/index.css";

</style>
