<template>
  <videoPlayer
    ref="videoPlayer"
    v-loading.lock="loading"
    :options="playerOptions"
    :playsinline="true"
    class="vjs-custom-skin videoPlayer"
    @play="onPlayerPlay($event)"
    @pause="onPlayerPause($event)"
    @ended="onPlayerEnded($event)"
    @waiting="onPlayerWaiting($event)"
    @playing="onPlayerPlaying($event)"
    @loadeddata="onPlayerLoadeddata($event)"
    @canplay="onPlayerCanplay($event)"
    @canplaythrough="onPlayerCanplaythrough($event)"
    @ready="onPlayerReadied"
  />
  <!-- @timeupdate="onPlayerTimeupdate($event)"
    @statechanged="onPlayerStateChanged($event)" -->
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import { videoPlayer } from 'vue-video-player'
// RTMP需要使用flash播放器
import 'videojs-flash'
// 播放HLS流（原生video）
import 'videojs-contrib-hls'
// 设置flash路径，用于在videojs发现浏览器不支持HTML5播放器的时候自动唤起flash播放器
// const SWF_URL = '/assets/video/video-js.swf' // 'https://cdn.bootcdn.net/ajax/libs/videojs-swf/5.4.2/video-js.swf'
import SWF_URL from '@/assets/video/video-js.swf'
videojs.options.flash.swf = SWF_URL
export default {
  /** *
   * @description web播放组件，只需要npm install vue-video-player --save，不要再安装videojs
  */
  name: 'WebVideo',
  components: {
    videoPlayer
  },
  props: {
    videoSource: { // 一个视频源，必须{type,src}
      type: Object,
      default: () => {},
      required: true
    },
    videoPosterUrl: { // 封面图片地址
      type: String,
      default: () => '' // https://file.digitaling.com/eImg/uimages/20150907/1441607120885946.gif
    }
  },
  data() {
    return {
      loading: false,
      initialized: false, // 视频初始化状态
      currentTech: '', // 当前播放方式
      currentMsg: {
        waiting: '开始预览，正在获取流',
        playing: '',
        disconnet: '从流媒体取流失败'
      },
      isFullScreen: false,
      // 播放器属性配置
      playerOptions: {
        // width: '800px', // 设置视频播放器的显示宽度（以像素为单位）
        // height: '400px', // 设置视频播放器的显示高度（以像素为单位） player.size(640,480); // 同时设置视频高宽
        live: true,
        autoplay: true, // 如果true，浏览器准备好时开始播放
        muted: false, // 默认情况下将会消除任何音频
        loop: false, // 是否视频一结束就重新开始
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 默认true，当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        language: 'zh-CN',
        poster: '', // 注意：设置了poster，看不到启用flash插件的按钮
        controls: false,
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          currentTimeDisplay: true, // 当前时间
          volumeControl: false, // 声音控制键
          playToggle: false, // 暂停和播放键
          progressControl: true, // 进度条
          fullscreenToggle: true // 全屏按钮

        },
        playbackRates: [0.5, 1, 1.5, 2, 2.5, 3], // 播放速率，controls=true时才会显示
        techOrder: ['html5', 'flash'], // 设置顺序
        flash: { hls: { withCredentials: false }, swf: SWF_URL },
        html5: { hls: { withCredentials: false }},
        sources: [{
          type: 'rtmp/flv', // rtmp/flv（flash支持） rtmp/hls（原生video支持）
          src: '' // 视频地址
        }],
        notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      }
    }
  },
  computed: {
    // 当前播放器实例
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  watch: {
    // 监听视频源变化
    videoSource: {
      deep: true,
      immediate: true, // 及时生效
      handler(val) {
        console.log('watch videoSource', val)
        if (!val && ('src' in val)) {
          return
        }
        // 重新初始化
        this.init()
      }
    }
  },
  created() {

  },
  beforeDestroy: function() {
    console.log('videoPlayer dispose')
    // 必须销毁，否则关闭弹框会一直报错
    this.$refs.videoPlayer.dispose()
    this.$emit('playerDispose', { player: this.player, videoSource: this.videoSource })
  },
  mounted() {
    // console.log('调用初始化')
    // this.$refs.videoPlayer.initialize()
  },
  methods: {
    // 初始化
    init() {
      this.loading = true
      // 设置必须参数，只要type和src
      const { type, src } = this.videoSource
      const source = {
        type,
        src
      }
      this.playerOptions.sources.splice(0, 1, source)
      console.log('playerOptions.sources', this.playerOptions.sources)
      // 播放视频则显示操作栏
      if (source.type.startsWith('video/')) {
        this.playerOptions['controls'] = true
      }
      // 其他参数
      if (this.videoPosterUrl) this.playerOptions['poster'] = this.videoPosterUrl
      // console.log('playerOptions', this.playerOptions)
      this.playerOptions.autoplay = true
      this.loading = false
    },
    onPlayerPlay(e) {
      console.log('onPlayerPlay e', e)
      this.videoSource.currentTitle = this.currentMsg.playing
    },
    onPlayerPause(e) {
      console.log('onPlayerPause e', e)
    },
    onPlayerEnded(e) {
      console.log('onPlayerEnded e', e)
    },
    // onPlayerWaiting onPlayerPlaying onPlayerLoadeddata onPlayerTimeupdate onPlayerCanplay 每隔一段时间触发
    onPlayerWaiting() {
      // console.log('onPlayerWaiting e', e)
    },
    onPlayerPlaying() {
      // console.log('onPlayerPlaying e', e)
    },
    onPlayerLoadeddata() {
      // console.log('onPlayerLoadeddata e', e)
    },
    onPlayerCanplay() {
      // console.log('onPlayerCanplay e', e)
    },
    onPlayerCanplaythrough() {
      // console.log('onPlayerCanplaythrough e', e)
      this.videoSource.currentTitle = this.currentMsg.playing
      this.$emit('playerCanplaythrough', { player: this.player, videoSource: this.videoSource })
    },
    // onPlayerTimeupdate(e) {
    //   // console.log('onPlayerTimeupdate e', e)
    // },
    // onPlayerStateChanged(e) {
    //   // console.log('onPlayerStateChanged e', e)
    // },
    onPlayerReadied() {
      if (!this.initialized) {
        this.initialized = true
        this.currentTech = this.player.techName_
        console.log('currentTech', this.currentTech)
        this.videoSource.currentTitle = this.currentMsg.waiting
        this.$emit('playerReadied', { player: this.player, videoSource: this.videoSource })
        this.player.play()
      }
    },
    // 手动播放，可外部调用
    play() {
      if (this.player) {
        this.player.play()
      }
    },
    // 手动暂停，可外部调用
    pause() {
      if (this.player) {
        this.player.pause()
      }
    },
    // 设置音量，可外部调用
    volume(vol = 0.2) {
      if (this.player) {
        this.player.volume(vol)
      }
    },
    // 设置进度，可外部调用
    currentTime(time = 1) {
      if (this.player) {
        this.player.currentTime(time)
      }
    },
    // 设置速度，可外部调用
    playbackRate(rate = 1) {
      if (this.player) {
        this.player.playbackRate = rate
      }
    }
  }
}
</script>

<style lang='scss'>
video,
.videoPlayer{
  width: 100% !important;
  height: 100% !important;
  object-fit:fill;  // 消除留白
}
// 为了填满如容器高度
.videoPlayer > div{
  height: 100% !important;
  padding: unset !important;
  overflow: hidden;
}
// 播放按钮前置
.vjs-big-play-button{
  z-index: 200;
}
// 操作栏前置
.vjs-control-bar{
  z-index: 200;
}
</style>
