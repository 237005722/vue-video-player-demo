(function(e){function t(t){for(var i,r,l=t[0],a=t[1],c=t[2],d=0,p=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],i=!0,l=1;l<o.length;l++){var a=o[l];0!==s[a]&&(i=!1)}i&&(n.splice(t--,1),e=r(r.s=o[0]))}return e}var i={},s={app:0},n=[];function r(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=i,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=a;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},1:function(e,t){},"1f85":function(e,t,o){},"3e43":function(e,t,o){"use strict";var i=o("e7c5"),s=o.n(i);s.a},"4ac0":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),i("div",[i("p",[e._v(" If Element is successfully added to this project, you'll see an "),i("code",{domProps:{textContent:e._s("<el-button>")}}),e._v(" below ")]),i("el-button",{on:{click:e.showVideoPlay}},[e._v(" 开始播放视频 ")])],1),i("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}}),i("WebVideoPlay",{attrs:{"show-top-state":e.showTopState}})],1)},n=[],r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("h1",[e._v(e._s(e.msg))]),e._m(0),o("h3",[e._v("Installed CLI Plugins")]),e._m(1),o("h3",[e._v("Essential Links")]),e._m(2),o("h3",[e._v("Ecosystem")]),e._m(3)])},l=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),o("br"),e._v(" check out the "),o("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),o("li",[o("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),o("li",[o("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),o("li",[o("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],a={name:"HelloWorld",props:{msg:{type:String,default:function(){return""}}}},c=a,u=(o("6b91"),o("2877")),d=Object(u["a"])(c,r,l,!1,null,"f10c69e8",null),p=d.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"navPopTop",class:e.showTopState?"showTop":"",style:{transition:"1s"}},[o("div",{staticClass:"navPopContent"},[o("div",{staticClass:"navPopContentBottom"},[o("div",{directives:[{name:"loading",rawName:"v-loading.lock",value:e.loading,expression:"loading",modifiers:{lock:!0}}],staticClass:"content"},[o("div",{staticClass:"left",class:e.showRightTopState?"showRight":"",style:{transition:"1s"}},[o("el-row",{ref:"videoRow",staticClass:"videoRow"},e._l(e.videoDivList,(function(t,i){return o("el-col",{key:t.winNum,ref:"videoBox_"+i,refInFor:!0,class:1===e.spanNum?"r0":12===e.spanNum?"r2":"r3",style:t.fullScreen?{width:"100%",height:"100%"}:"",attrs:{span:e.spanNum}},[o("div",{staticClass:"videoBox",class:i===e.divIndex?"active":""},[t.show&&t.source?o("div",{staticClass:"videoTitleBar"},[o("div",{staticClass:"title",attrs:{title:t.source.title}},[e._v(" "+e._s("[窗口"+t.winNum+"] -- ")+e._s(t.source.title)+" ")]),o("div",{staticClass:"action"},[o("el-tooltip",{attrs:{content:"全屏当前播放",effect:"light",placement:"bottom-end"}},[o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.fullScreen(i,t)}}},[o("i",{staticClass:"el-icon-full-screen"})])],1),t.pause?o("el-tooltip",{attrs:{content:"开始当前播放",effect:"light",placement:"bottom-end"}},[o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.playVideo(i,t)}}},[o("i",{staticClass:"el-icon-video-play"})])],1):o("el-tooltip",{attrs:{content:"暂停当前播放",effect:"light",placement:"bottom-end"}},[o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.pauseVideo(i,t)}}},[o("i",{staticClass:"el-icon-video-pause"})])],1),o("el-tooltip",{attrs:{content:"关闭当前播放",effect:"light",placement:"bottom-end"}},[o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.closeVideo(i,t)}}},[o("i",{staticClass:"el-icon-circle-close"})])],1)],1)]):e._e(),t.showModal?o("div",{staticClass:"videoModal",on:{click:function(o){return o.target!==o.currentTarget?null:e.gridClick(i,t)},dblclick:function(o){return o.target!==o.currentTarget?null:e.gridDblClick(i,t)}}},[t.show&&t.source&&t.source.currentTitle?o("div",{staticClass:"title"},[e._v(" "+e._s(t.source.currentTitle)+" ")]):e._e()]):e._e(),t.show&&t.source?o("WebVideo",{ref:"webVideo_"+i,refInFor:!0,attrs:{"video-source":t.source},on:{playerReadied:e.playerReadied,playerCanplaythrough:e.playerCanplaythrough,playerDispose:e.playerDispose}}):e._e()],1)])})),1)],1),o("div",{staticClass:"center",class:e.showRightTopState?"showRight":"",style:{transition:"1s"},on:{click:e.showRightBtn}},[o("i",{class:e.showRightTopState?"el-icon-arrow-right":"el-icon-arrow-left"})]),o("div",{staticClass:"right",class:e.showRightTopState?"showRight":"",style:{transition:"1s"}},[o("div",{staticClass:"box-card"},[o("div",{staticClass:"box-content"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.videoSources,"row-class-name":e.tableRowClassName,height:"250",border:"",fit:"","highlight-current-row":""},on:{"row-click":e.rowClick,"row-dblclick":e.rowDblclick}},[o("el-table-column",{attrs:{resizable:e.resizable,prop:"title",label:"名称",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-tooltip",{attrs:{content:"单击选中，双击播放",effect:"dark",placement:"right"}},[o("div",{class:t.$index===e.devIndex?"active":""},[e._v(" "+e._s(t.row.title)+" ")])])]}}])}),o("el-table-column",{attrs:{resizable:e.resizable,prop:"winNum",label:"窗口",align:"center",width:"50"}})],1),o("div",{staticClass:"content-list"},[o("el-tooltip",{attrs:{content:"播放全部",effect:"dark",placement:"top"}},[o("el-button",{attrs:{type:"text"},on:{click:function(t){return e.cloudClick("播放")}}},[o("i",{staticClass:"el-icon-video-play"})])],1),o("el-tooltip",{attrs:{content:"暂停全部",effect:"dark",placement:"top"}},[o("el-button",{attrs:{type:"text"},on:{click:function(t){return e.cloudClick("暂停")}}},[o("i",{staticClass:"el-icon-video-pause"})])],1),o("el-tooltip",{attrs:{content:"销毁全部",effect:"dark",placement:"top"}},[o("el-button",{attrs:{type:"text"},on:{click:function(t){return e.cloudClick("销毁")}}},[o("i",{staticClass:"el-icon-delete"})])],1),o("el-tooltip",{attrs:{content:"重载全部",effect:"dark",placement:"top"}},[o("el-button",{attrs:{type:"text"},on:{click:function(t){return e.cloudClick("重载")}}},[o("i",{staticClass:"el-icon-refresh"})])],1)],1),o("div",{staticClass:"content-slider"},[o("div",{staticClass:"line-slider"},[o("div",{staticClass:"title"},[e._v(" 进度 ")]),o("el-slider",{staticClass:"slider",attrs:{step:1},on:{change:function(t){return e.cloudSlider("schedule")}},model:{value:e.cloudForm.schedule,callback:function(t){e.$set(e.cloudForm,"schedule",t)},expression:"cloudForm.schedule"}}),o("div",{staticClass:"value"},[e._v(" "+e._s(e.cloudForm.schedule)+" ")])],1),o("div",{staticClass:"line-slider"},[o("div",{staticClass:"title"},[e._v(" 速度 ")]),o("el-slider",{staticClass:"slider",attrs:{step:.5,min:.5,max:4},on:{change:function(t){return e.cloudSlider("speed")}},model:{value:e.cloudForm.speed,callback:function(t){e.$set(e.cloudForm,"speed",t)},expression:"cloudForm.speed"}}),o("div",{staticClass:"value"},[e._v(" "+e._s(e.cloudForm.speed)+" ")])],1),o("div",{staticClass:"line-slider"},[o("div",{staticClass:"title"},[e._v(" 音量 ")]),o("el-slider",{staticClass:"slider",attrs:{step:.1,max:1},on:{change:function(t){return e.cloudSlider("volume")}},model:{value:e.cloudForm.volume,callback:function(t){e.$set(e.cloudForm,"volume",t)},expression:"cloudForm.volume"}}),o("div",{staticClass:"value"},[e._v(" "+e._s(e.cloudForm.volume)+" ")])],1)]),o("div",{staticClass:"content-grids"},[o("el-row",{staticStyle:{width:"100%"},attrs:{gutter:10}},[o("el-col",{staticClass:"cursor",attrs:{span:6},nativeOn:{click:function(t){return e.chooseGridType(4)}}},[o("el-tooltip",{attrs:{content:"4宫格排列",effect:"dark",placement:"bottom"}},[o("el-row",{staticClass:"row-grid",class:4===e.gridNum?"active":""},e._l(4,(function(e){return o("el-col",{key:e,staticClass:"grid",staticStyle:{height:"30px"},attrs:{span:12}})})),1)],1)],1),o("el-col",{staticClass:"cursor",attrs:{span:8},nativeOn:{click:function(t){return e.chooseGridType(9)}}},[o("el-tooltip",{attrs:{content:"9宫格排列",effect:"dark",placement:"bottom"}},[o("el-row",{staticClass:"row-grid",class:9===e.gridNum?"active":""},e._l(9,(function(e){return o("el-col",{key:e,staticClass:"grid",staticStyle:{height:"20px"},attrs:{span:8}})})),1)],1)],1),o("el-col",{staticClass:"cursor",attrs:{span:10},nativeOn:{click:function(t){return e.chooseGridType(12)}}},[o("el-tooltip",{attrs:{content:"12宫格排列",effect:"dark",placement:"bottom"}},[o("el-row",{staticClass:"row-grid",class:12===e.gridNum?"active":""},e._l(12,(function(e){return o("el-col",{key:e,staticClass:"grid",staticStyle:{height:"20px"},attrs:{span:6}})})),1)],1)],1)],1)],1),o("div",{staticClass:"content-btn"},[o("el-button",{attrs:{type:"primary"},on:{click:e.closeWebPlayReal}},[e._v(" 结束视频播放 ")])],1)],1)])])])])])])},h=[],f=(o("c740"),o("d81d"),o("a434"),o("a9e3"),o("96cf"),o("1da1")),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("videoPlayer",{directives:[{name:"loading",rawName:"v-loading.lock",value:e.loading,expression:"loading",modifiers:{lock:!0}}],ref:"videoPlayer",staticClass:"vjs-custom-skin videoPlayer",attrs:{options:e.playerOptions,playsinline:!0},on:{play:function(t){return e.onPlayerPlay(t)},pause:function(t){return e.onPlayerPause(t)},ended:function(t){return e.onPlayerEnded(t)},waiting:function(t){return e.onPlayerWaiting(t)},playing:function(t){return e.onPlayerPlaying(t)},loadeddata:function(t){return e.onPlayerLoadeddata(t)},canplay:function(t){return e.onPlayerCanplay(t)},canplaythrough:function(t){return e.onPlayerCanplaythrough(t)},ready:e.onPlayerReadied}})},g=[],y=(o("2ca0"),o("3d33")),w=o.n(y),b=(o("fda2"),o("451f"),o("d6d3")),_=(o("b5c1"),o("a151"),o.p+"video/video-js.swf");w.a.options.flash.swf=_;var S={name:"WebVideo",components:{videoPlayer:b["videoPlayer"]},props:{videoSource:{type:Object,default:function(){},required:!0},videoPosterUrl:{type:String,default:function(){return""}}},data:function(){return{loading:!1,initialized:!1,currentTech:"",currentMsg:{waiting:"开始预览，正在获取流",playing:"",disconnet:"从流媒体取流失败"},isFullScreen:!1,playerOptions:{live:!0,autoplay:!0,muted:!1,loop:!1,preload:"auto",aspectRatio:"16:9",fluid:!0,language:"zh-CN",poster:"",controls:!1,controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,currentTimeDisplay:!0,volumeControl:!1,playToggle:!1,progressControl:!0,fullscreenToggle:!0},playbackRates:[.5,1,1.5,2,2.5,3],techOrder:["html5","flash"],flash:{hls:{withCredentials:!1},swf:_},html5:{hls:{withCredentials:!1}},sources:[{type:"rtmp/flv",src:""}],notSupportedMessage:"此视频暂无法播放，请稍后再试"}}},computed:{player:function(){return this.$refs.videoPlayer.player}},watch:{videoSource:{deep:!0,immediate:!0,handler:function(e){console.log("watch videoSource",e),!e&&"src"in e||this.init()}}},created:function(){},beforeDestroy:function(){console.log("videoPlayer dispose"),this.$refs.videoPlayer.dispose(),this.$emit("playerDispose",{player:this.player,videoSource:this.videoSource})},mounted:function(){},methods:{init:function(){this.loading=!0;var e=this.videoSource,t=e.type,o=e.src,i={type:t,src:o};this.playerOptions.sources.splice(0,1,i),console.log("playerOptions.sources",this.playerOptions.sources),i.type.startsWith("video/")&&(this.playerOptions["controls"]=!0),this.videoPosterUrl&&(this.playerOptions["poster"]=this.videoPosterUrl),this.playerOptions.autoplay=!0,this.loading=!1},onPlayerPlay:function(e){console.log("onPlayerPlay e",e),this.videoSource.currentTitle=this.currentMsg.playing},onPlayerPause:function(e){console.log("onPlayerPause e",e)},onPlayerEnded:function(e){console.log("onPlayerEnded e",e)},onPlayerWaiting:function(){},onPlayerPlaying:function(){},onPlayerLoadeddata:function(){},onPlayerCanplay:function(){},onPlayerCanplaythrough:function(){this.videoSource.currentTitle=this.currentMsg.playing,this.$emit("playerCanplaythrough",{player:this.player,videoSource:this.videoSource})},onPlayerReadied:function(){this.initialized||(this.initialized=!0,this.currentTech=this.player.techName_,console.log("currentTech",this.currentTech),this.videoSource.currentTitle=this.currentMsg.waiting,this.$emit("playerReadied",{player:this.player,videoSource:this.videoSource}),this.player.play())},play:function(){this.player&&this.player.play()},pause:function(){this.player&&this.player.pause()},volume:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.2;this.player&&this.player.volume(e)},currentTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.player&&this.player.currentTime(e)},playbackRate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.player&&(this.player.playbackRate=e)}}},C=S,k=(o("d84c"),Object(u["a"])(C,m,g,!1,null,null,null)),x=k.exports,P=[],T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;P=[];for(var t=0;t<e;t++)0===t?P.push({title:"测试摄像头5300".concat(t),devName:"gdp00".concat(t),id:"gdp00".concat(t),type:"video/mp4",src:"http://vjs.zencdn.net/v/oceans.mp4"}):P.push({title:"测试摄像头5300".concat(t),devName:"gdp00".concat(t),id:"gdp00".concat(t),type:"rtmp/flv",src:"rtmp://58.200.131.2:1935/livetv/hunantv"});return{status_code:1,message:"success",data:P}},D={name:"WebVideoPlay",components:{WebVideo:x},props:{showTopState:{type:Boolean,default:!1}},data:function(){return{loading:!1,showRightTopState:!0,cloudForm:{schedule:0,speed:1,volume:0},devLen:15,gridNum:4,spanNum:12,videoDivList:[],divIndex:0,videoSources:[],devIndex:-1,resizable:!1}},computed:{hasUsableFlash:function(){var e;return e="undefined"!==typeof window.ActiveXObject?new ActiveXObject("ShockwaveFlash.ShockwaveFlash"):navigator.plugins["Shockwave Flash"],!!e}},watch:{showTopState:{deep:!0,handler:function(e){console.log("watch showTopState",e),e?this.initVideoDivList()&&this.initParam():this.clearVideoData()}}},created:function(){},destroyed:function(){},mounted:function(){},methods:{closeWebPlayReal:function(){var e=this;this.$confirm("此操作将结束视频播放, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$parent.showTopState=!e.$parent.showTopState})).catch((function(){}))},clearVideoData:function(){this.divIndex=0,this.videoDivList.splice(0,this.videoDivList.length),this.devIndex=-1,this.videoSources.splice(0,this.videoSources.length)},showRightBtn:function(){this.showRightTopState=!this.showRightTopState},playerReadied:function(e){var t=e.player,o=e.videoSource;console.log("playerReadied player",t,o)},playerCanplaythrough:function(e){var t=e.player,o=e.videoSource;console.log("playerCanplaythrough player",t,o)},playerDispose:function(e){var t=e.player,o=e.videoSource;console.log("playerDispose player",t,o)},rowClick:function(e){console.log("rowClick row",e),this.devIndex=this.videoSources.findIndex((function(t){return t.id===e.id})),console.log("devIndex",this.devIndex);var t=this.videoDivList.findIndex((function(t){return t.source&&t.source.id===e.id}));if(t>=0&&t!==this.divIndex){var o=this.videoDivList.findIndex((function(e){return e.fullScreen}));o>=0&&o!==t?(this.fullScreen(o,this.videoDivList[o]),this.fullScreen(t,this.videoDivList[t])):this.divIndex=t}},rowDblclick:function(e){console.log("rowDblclick row",e);var t=this.videoDivList.findIndex((function(t){return t.source&&t.source.id===e.id}));console.log("rowDblclick lastIndex",t),t>=0&&t!==this.divIndex&&(this.videoDivList[t].show=!1,this.videoDivList[t].source=null),e.winNum=this.videoDivList[this.divIndex].winNum,this.videoDivList[this.divIndex].source=e,this.videoDivList[this.divIndex].show=!0,this.videoSources=this.videoSources.map((function(t){return t.id!==e.id&&t.winNum===e.winNum&&(t.winNum="--"),t}))},closeVideo:function(e,t){var o=this;this.$confirm("此操作将关闭当前视频, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o.closeVideoYes(e,t)})).catch((function(){}))},closeVideoYes:function(e,t){t.show&&t.source&&(this.videoSources=this.videoSources.map((function(e){return e.id===t.source.id&&(e.winNum="--"),e})),t.show=!1,t.source=null)},playVideo:function(e,t){console.log("playVideo item",t),t.pause=!1,this.$refs["webVideo_"+e][0].play()},pauseVideo:function(e,t){console.log("pauseVideo item",t),t.pause=!0,this.$refs["webVideo_"+e][0].pause()},fullScreen:function(e,t){console.log("fullScreen item",t),this.gridClick(e,t);var o=this.$refs["videoBox_"+e][0];console.log("fullScreen videoBox",o),t.fullScreen=!t.fullScreen,console.log("fullScreen fullScreen",t.fullScreen),t.fullScreen?(this.spanNumLast=this.spanNum,this.spanNum=1):(this.spanNum=this.spanNumLast,this.spanNumLast=null),console.log("fullScreen spanNum",this.spanNum),o.$forceUpdate()},tableRowClassName:function(){return"cursor"},gridClick:function(e){this.divIndex=e,console.log("divIndex",this.divIndex)},gridDblClick:function(e,t){console.log("gridDblClick item",t),t.source&&this.fullScreen(e,t)},chooseGridType:function(e){console.log("chooseGridType num",e),this.initVideoDivList(e)},initVideoDivList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.gridNum;this.gridNum=e;var t=this.videoDivList.length;if(t<e)for(var o=t;o<e;o++)this.videoDivList.push({winNum:o+1,show:!1,showModal:!0,fullScreen:!1,pause:!1,source:null});else t>e&&(this.videoDivList.splice(e,t),this.videoSources=this.videoSources.map((function(t){return!isNaN(t.winNum)&&Number(t.winNum)>e&&(t.winNum="--"),t})));return this.spanNum=4===e?12:12===e?6:8,this.spanNumLast&&(this.spanNumLast=this.spanNum),!0},cloudClick:function(e){var t=this;this.videoDivList.map((function(o,i){if(o.source){var s=t.$refs["webVideo_"+i][0];"播放"===e?s.play():"暂停"===e?s.pause():"销毁"===e?o.show=!1:"重载"===e&&(o.show=!0)}})),this.$message({type:"success",message:"".concat(e,"操作(^_^)")})},cloudSlider:function(e){var t=this;console.log("cloudSlider cloudForm",this.cloudForm),this.videoDivList.map((function(o,i){if(o.source&&o.show){var s=t.$refs["webVideo_"+i][0];"schedule"===e?s.playbackRate(t.cloudForm.schedule):"speed"===e?s.currentTime(t.cloudForm.speed):"volume"===e&&s.volume(t.cloudForm.volume)}})),this.$message({type:"success",message:"设置".concat(e,"成功")})},initParam:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.showRightTopState=!0,e.loading=!0,t.next=5,T(e.devLen);case 5:o=t.sent,console.log("getVideoSources res",o),i=o.data||[],e.videoSources=[],i.map((function(t){e.videoSources.push({winNum:"--",title:t.title,currentTitle:"播放视频加载中",id:t.id,devName:t.devName,type:t.type,src:t.src})})),s=e.videoSources.length,console.log("videoSources len",s),console.log("videoSources",e.videoSources),e.initVideoDivList(s<=4?4:s<=9?9:12),e.videoSources.map((function(t,o){o<e.videoDivList.length&&(t.winNum=e.videoDivList[o].winNum,e.videoDivList[o].source=t,e.videoDivList[o].show=!0,e.videoDivList[o].showModal=!0,e.videoDivList[o].fullScreen=!1,e.videoDivList[o].pause=!1,"rtmp/flv"!==t.type||e.hasUsableFlash||(console.log("videoDivList[".concat(o,"]"),e.hasUsableFlash),e.videoDivList[o].showModal=!1))})),e.$refs.videoRow&&e.$refs.videoRow.$forceUpdate(),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](0),e.$message({type:"error",message:"".concat(t.t0.message)});case 21:return t.prev=21,e.loading=!1,t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[0,18,21,24]])})))()}}},N=D,L=(o("3e43"),Object(u["a"])(N,v,h,!1,null,"401cd4ab",null)),j=L.exports,R={name:"App",components:{HelloWorld:p,WebVideoPlay:j},data:function(){return{showTopState:!1}},methods:{showVideoPlay:function(){this.showTopState=!this.showTopState}}},$=R,V=(o("5c0b"),Object(u["a"])($,s,n,!1,null,null,null)),O=V.exports,F=o("5c96"),I=o.n(F);o("0fae");i["default"].config.productionTip=!1,i["default"].use(I.a),new i["default"]({render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var i=o("9c0c"),s=o.n(i);s.a},"6b91":function(e,t,o){"use strict";var i=o("1f85"),s=o.n(i);s.a},"9c0c":function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},d84c:function(e,t,o){"use strict";var i=o("4ac0"),s=o.n(i);s.a},e7c5:function(e,t,o){}});
//# sourceMappingURL=app.963a64a6.js.map