<template>
  <view class="an-btm">
    <view span="24" v-for="(item, i) in arr2" v-bind:key="i">
      <div v-if="!item.is_user">
        <view class="chat-ls msg-left">
          <view class="chat-time1"
            >{{ item.Msg_sender }} {{ item.Msg_time }}
            <view class="background1">
              <view class="chat1">{{ item.Msg_content }}</view>
            </view>
          </view>
        </view>
      </div>
      <div v-if="item.is_user">
        <view class="chat-ls msg-right">
          <view class="chat-time1"
            >{{ item.Msg_sender }} {{ item.Msg_time }}
            <view class="background1">
              <view class="chat1">{{ item.Msg_content }}</view>
            </view>
          </view>
        </view>
      </div>
    </view>
    <view class="in">
      <input
        class="textbox"
        v-model="Msg_sent"
        placeholder="please input message"
      />
      <button class="bt" @click="send" type="submit">send</button>
    </view>
  </view>
</template>


<script>
// import submit from '../../components/submit.vue'

export default {
	
  data() {
    return {
      my_user_id: 0,
      show1: false,
      Msg_content: "",
      Msg_time: "",
      Msg_status: "Sent", 
      Msg_sender: 2,
      cur_user: 3,
      Session_id_num: 1,
      Msg_sent: "",
      snippet_url: "",
      snippet_content: "",

      arr: [
        {
          Msg_id: 1,
          Msg_time: "",
          Msg_status: "",
          Msg_sender: 4,
          Msg_content: "",
        },
      ],
      arr2: {},

      title: "Albert 07/24/2022 11:52",
      oneSentence: "Hi, your dress looks beautiful!",
    };
  },
  methods: {
    send() {
      this.Msg_time = new Date();
      this.my_user_id = getApp().globalData.user_id;
      this.check_snippet();
      this.Msg_content =
        this.Msg_sent + this.snippet_url + this.snippet_content;

      uniCloud.callFunction({
        name: "query",
        data: {
          sentence:
            "Insert Into Msg ( Msg_time, Msg_status, Msg_sender, Msg_content ) Values ( ?, ?, ?, ? )",
          arguments: [
            this.Msg_time,
            this.Msg_status,
            this.my_user_id,
            this.Msg_content,
          ],
        },
        success: (res) => {
          console.log(res.result[0]);
        },
        fail: (err) => {
          console.log(err);
        },
      });

      // refresh the message list
      this.get_msg();
    },

    find_msg() {
      this.my_user_id = getApp().globalData.user_id;
      console.log("Started!");
      var u = 0;
      uniCloud.callFunction({
        name: "query",
        data: {
          sentence:
            "SELECT * FROM Contain NATURAL JOIN Msg WHERE  Session_id=? ORDER BY Msg_time  ",
          arguments: [this.Session_id_num],
        },
        success: (res) => {
          for (u = 0; u < res.result.length; u++) {
            console.log("my user id is: " + this.my_user_id);
            console.log("opposite user id is: " + res.result[u]["Msg_sender"]);
            if (res.result[u]["Msg_sender"] == this.my_user_id) {
              res.result[u]["is_user"] = true;
              console.log("my user id is: " + this.my_user_id);
            } else {
              res.result[u]["is_user"] = false;
            }
          }
          this.arr2 = res.result;
          console.log("success!! ");

          // this.arr=res.result
          // console.log(this.arr);
        },
        fail: (err) => {
          console.log("Something is wrong");
          console.log(err);
        },
      });
    },
    created() {
      this.find_msg();
    },
    check_snippet() {
      // console.log(this.keyw)
      var str = this.Msg_sent;
      var arr = str.split(" ");
      var keyw = "";
      var w = 0;
      var i = 0;
      for (i = 0; i < arr.length; i++) {
        if (arr[i].indexOf("https://") != -1) {
          this.keyw = arr[i];
          w = 0;
          break;
        }
        if (arr[i].indexOf("product_id://") != -1) {
          this.keyw = arr[i].replace("product_id://", "");
          w = 1;
          break;
        }
      }

      if (keyw != "9999" && w == 1) {
        uniCloud.callFunction({
          name: "query",
          data: {
            sentence: "SELECT * FROM Product WHERE product_id = ?",
            //forget !!!E_mail? EMAIL?
            arguments: [this.keyw],
          },

          success: (res) => {
            console.log(this.keyw);
            // this.snippet_url="pages/product/product"
            this.snippet_url = "pages/product/product" + String(this.keyw);
            this.snippet_content =
              "This items name is" +
              String(res.result[0]["name"]) +
              "and its price is" +
              String(res.result[0]["price"]);
            // this.add_snippet()
          },
          fail: (err) => {
            console.log("error");
            // console.log('price')
            console.log(err);
          },
        });
      }
    },
    add_snippet() {
      console.log(this.snippet_url);
      uniCloud.callFunction({
        name: "query",
        data: {
          sentence:
            "Insert Into Snippet ( Snippet_link, Snippet_content) Values ( ?, ? );",
          arguments: [this.snippet_url, this.snippet_content],
        },
        success: (res) => {
          console.log("success add");
          // console.log(res.result[0])
        },
        fail: (err) => {
          console.log("fail add");
          console.log(err);
        },
      });
    },
  },

	onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数  
		console.log("The argument passed in is:", option.session_id);
		this.Session_id_num = option.session_id
		this.get_msg()
	}  
};
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
.chat-ls {
  display: flex;
}
.chat-time1 {
  padding-top: 5rpx;
  padding-left: 5rpx;
  font-size: 12rpx;
  color: #8f8f94;
}
.chat1 {
  padding-bottom: 15rpx;
  font-size: 16px;
  padding-left: 10rpx;
  color: #000000;
}
.background1 {
  max-width: 480rpx;
  border-radius: 10px 10px 10px 10px;
  background-color: #f0f0f0;
  padding-left: 10rpx;
}
.msg-left {
  flex-direction: row;
}
.chat-time2 {
  padding-top: 5rpx;
  padding-left: 5rpx;
  font-size: 8rpx;
  color: #8f8f94;
}
.chat2 {
  padding-left: 10rpx;
  padding-bottom: 15rpx;
  font-size: 16px;
  color: #000000;
}
.background2 {
  padding-left: 10rpx;
  max-width: 480rpx;
  border-radius: 10px 10px 10px 10px;
  background-color: #55ff7f;
}
.msg-right {
  flex-direction: row-reverse;
}
.sub {
  padding-top: 0rpx;
  padding-left: 500rpx;
}
.sub-1 {
  width: 500rpx;
  padding-top: 200rpx;
  padding-left: -100rpx;
}
.in {
  margin-top: 900rpx;
}
.bt {
  width: 20%;
  margin-top: -90rpx;
  margin-right: 0rpx;
}
.textbox {
  width: 70%;
  margin-top: 0rpx;
  margin-right: 0rpx;
}
</style>
