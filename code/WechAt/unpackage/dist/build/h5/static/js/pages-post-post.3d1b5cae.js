(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-post-post"],{"0b1d":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"postid"},[e("v-uni-text",{staticClass:"postid-text"},[t._v("Your user ID is: "+t._s(t.user_id))])],1),e("v-uni-button",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.refresh.apply(void 0,arguments)}}},[t._v("Refresh")]),t._l(t.items,(function(t){return e("v-uni-view",{key:t["Post_id"]},[e("postItem",{attrs:{content:t["Post_content"],poster:t["Post_sender"],time:t["Publish_time"],post_id:t["Post_id"]}})],1)}))],2)},o=[]},"0ca6":function(t,n,e){"use strict";var i=e("6792"),a=e.n(i);a.a},"4c44":function(t,n,e){"use strict";var i=e("f7a9"),a=e.n(i);a.a},"5b73":function(t,n,e){"use strict";e.r(n);var i=e("a3de"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},6792:function(t,n,e){var i=e("bac1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("3a5586be",i,!0,{sourceMap:!1,shadowMode:!1})},"77d1":function(t,n,e){"use strict";e.r(n);var i=e("cf0e"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"946c":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"postItem"},[e("v-uni-view",{staticClass:"text-area"},[e("v-uni-text",[t._v(t._s(t.content))])],1),e("v-uni-view",{staticClass:"poster"},[e("v-uni-text",[t._v("The poster ID is: "+t._s(t.poster))])],1),e("v-uni-view",{staticClass:"time"},[e("v-uni-text",[t._v(t._s(t.time))])],1),e("v-uni-button",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deletePost.apply(void 0,arguments)}}},[t._v("Delete")]),e("v-uni-view",{staticClass:"line"})],1)},o=[]},a3de:function(t,n,e){"use strict";(function(t){e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"postItem",props:{content:{type:String,default:"This is the default content"},poster:{type:Number,default:0},time:{type:String,default:"This is the default time"},post_id:{type:Number,default:0}},data:function(){return{user_id:getApp().globalData.user_id}},methods:{deletePost:function(){this.poster==getApp().globalData.user_id?t.callFunction({name:"query",data:{sentence:"DELETE FROM Post WHERE Post_id = ?",arguments:[this.post_id]},success:function(t){console.log("The deletePost() function is working!")}}):window.alert("You are not the poster of this post!")}}};n.default=i}).call(this,e("a9ff")["default"])},b908:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* make a post id */.postid[data-v-46500a01]{position:relative;top:0;left:0;width:100%;height:100%;background:#fff;text-align:center;font-size:20px;color:#000}\n/* make a small button */.btn[data-v-46500a01]{width:100px;height:40px;line-height:40px;text-align:center;background-color:#00bcd4;color:#fff;border-radius:5px;margin-top:20px}\n/* solid black line style */.solidline[data-v-46500a01]{width:100%;height:2px;background-color:#000}.content[data-v-46500a01]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.logo[data-v-46500a01]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-46500a01]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-46500a01]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=n},bac1:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* provide a thin solid gray line style as class 'line', which occupies the whole width */.line[data-v-25db6ac2]{position:relative;top:0;left:0;width:100%;height:1px;background:#e5e5e5}\n/* provide the style for a title with bold text */.text-area[data-v-25db6ac2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\n/* title */.title[data-v-25db6ac2]{font-size:%?36?%;color:#8f8f94}\n/* define the class of poster and sending time of the post */.poster[data-v-25db6ac2]{font-size:%?24?%;color:#8f8f94}.time[data-v-25db6ac2]{font-size:%?24?%;color:#8f8f94}\n/* postItem should occupy the whole line */.postItem[data-v-25db6ac2]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.btn[data-v-25db6ac2]{width:100%;height:10%;background:#fff;text-align:center}",""]),t.exports=n},cf0e:function(t,n,e){"use strict";(function(t){var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("ea84")),o=getApp().globalData.user_id,s={data:function(){return{items:[],user_id:o}},onLoad:function(){this.getPost()},methods:{getPost:function(){var n=this;t.callFunction({name:"query",data:{sentence:"SELECT * FROM Post WHERE Post_sender = ? OR Post_sender IN (SELECT User1_id FROM Joined_pri WHERE User2_id = ?) OR Post_sender IN (SELECT User2_id FROM Joined_pri WHERE User1_id = ?)",arguments:[o,o,o]},success:function(t){n.items=t.result,console.log(t.result)},fail:function(t){console.log(JSON.stringify(t))}})},refresh:function(){this.getPost()}},components:{postItem:a.default}};n.default=s}).call(this,e("a9ff")["default"])},dbc5:function(t,n,e){"use strict";e.r(n);var i=e("0b1d"),a=e("77d1");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("4c44");var s,r=e("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"46500a01",null,!1,i["a"],s);n["default"]=c.exports},ea84:function(t,n,e){"use strict";e.r(n);var i=e("946c"),a=e("5b73");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("0ca6");var s,r=e("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"25db6ac2",null,!1,i["a"],s);n["default"]=c.exports},f7a9:function(t,n,e){var i=e("b908");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("7e045317",i,!0,{sourceMap:!1,shadowMode:!1})}}]);