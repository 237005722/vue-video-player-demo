<template>
  <div :style="{ transition:'1s' }" :class="showTopState ? 'showTop' : ''" class="navPopTop">
    <div class="navPopContent">
      <div class="navPopContentBottom">
        <div v-loading.lock="loading" class="content">
          <!-- 左侧视频排列 -->
          <div :style="{ transition:'1s' }" :class="showRightTopState ? 'showRight' : ''" class="left">
            <el-row ref="videoRow" class="videoRow">
              <el-col
                v-for="(item, index) in videoDivList"
                :key="item.winNum"
                :ref="`videoBox_${index}`"
                :span="spanNum"
                :class="spanNum === 1 ? 'r0' : spanNum === 12 ? 'r2' : 'r3'"
                :style="item.fullScreen ? { width: '100%', height: '100%' } : ''"
              >
                <div :class="index === divIndex ? 'active' : ''" class="videoBox">
                  <!-- 标题栏操作栏 -->
                  <div v-if="item.show && item.source" class="videoTitleBar">
                    <div :title="item.source.title" class="title">
                      {{ '[窗口' + item.winNum + '] -- ' }}{{ item.source.title }}
                    </div>
                    <div class="action">
                      <el-tooltip content="全屏当前播放" effect="light" placement="bottom-end">
                        <el-button type="text" @click="fullScreen(index, item)">
                          <i class="el-icon-full-screen" />
                        </el-button>
                      </el-tooltip>
                      <el-tooltip content="暂停当前播放" effect="light" placement="bottom-end">
                        <el-button type="text" @click="pauseVideo(index, item)">
                          <i class="el-icon-video-pause" />
                        </el-button>
                      </el-tooltip>
                      <el-tooltip content="开始当前播放" effect="light" placement="bottom-end">
                        <el-button type="text" @click="playVideo(index, item)">
                          <i class="el-icon-video-play" />
                        </el-button>
                      </el-tooltip>
                      <el-tooltip content="关闭当前播放" effect="light" placement="bottom-end">
                        <el-button type="text" @click="closeVideo(index, item)">
                          <i class="el-icon-circle-close" />
                        </el-button>
                      </el-tooltip>
                    </div>
                  </div>
                  <!-- 遮罩栏 -->
                  <div v-if="item.showModal" class="videoModal" @click.self="gridClick(index, item)" @dblclick.self="gridDblClick(index, item)">
                    <div v-if="item.show && item.source && item.source.currentTitle" class="title">
                      {{ item.source.currentTitle }}
                    </div>
                  </div>
                  <!-- Web监控组件 -->
                  <WebVideo
                    v-if="item.show && item.source"
                    :ref="`webVideo_${index}`"
                    :video-source="item.source"
                    @playerReadied="playerReadied"
                    @playerCanplaythrough="playerCanplaythrough"
                    @playerDispose="playerDispose"
                  />
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 中间收起弹出控制台的按钮 -->
          <div :style="{ transition:'1s' }" :class="showRightTopState ? 'showRight' : ''" class="center" @click="showRightBtn">
            <i :class="showRightTopState ? 'el-icon-arrow-right' : 'el-icon-arrow-left'" />
          </div>
          <!-- 右侧控制台 -->
          <div :style="{ transition:'1s' }" :class="showRightTopState ? 'showRight' : ''" class="right">
            <div class="box-card">
              <div class="box-content">
                <el-table
                  :data="videoSources"
                  :row-class-name="tableRowClassName"
                  height="250"
                  border
                  style="width: 100%;"
                  fit
                  highlight-current-row
                  @row-click="rowClick"
                  @row-dblclick="rowDblclick"
                >
                  <el-table-column :resizable="resizable" prop="title" label="名称" align="left">
                    <template slot-scope="scope">
                      <el-tooltip content="单击选中，双击播放" effect="dark" placement="right">
                        <div :class="scope.$index === devIndex ? 'active' : ''">
                          {{ scope.row.title }}
                        </div>
                      </el-tooltip>
                    </template>
                  </el-table-column>
                  <el-table-column :resizable="resizable" prop="winNum" label="窗口" align="center" width="50" />
                </el-table>
                <!-- 快捷列表 -->
                <div class="content-list">
                  <el-tooltip content="播放全部" effect="dark" placement="top">
                    <el-button type="text" @click="cloudClick('播放')">
                      <i class="el-icon-video-play" />
                    </el-button>
                  </el-tooltip>
                  <el-tooltip content="暂停全部" effect="dark" placement="top">
                    <el-button type="text" @click="cloudClick('暂停')">
                      <i class="el-icon-video-pause" />
                    </el-button>
                  </el-tooltip>
                  <el-tooltip content="销毁全部" effect="dark" placement="top">
                    <el-button type="text" @click="cloudClick('销毁')">
                      <i class="el-icon-delete" />
                    </el-button>
                  </el-tooltip>
                  <el-tooltip content="重载全部" effect="dark" placement="top">
                    <el-button type="text" @click="cloudClick('重载')">
                      <i class="el-icon-refresh" />
                    </el-button>
                  </el-tooltip>
                </div>
                <!-- Slider调整 -->
                <div class="content-slider">
                  <div class="line-slider">
                    <div class="title">
                      进度
                    </div>
                    <el-slider v-model="cloudForm.schedule" :step="1" class="slider" @change="cloudSlider('schedule')" />
                    <div class="value">
                      {{ cloudForm.schedule }}
                    </div>
                  </div>
                  <div class="line-slider">
                    <div class="title">
                      速度
                    </div>
                    <el-slider v-model="cloudForm.speed" :step="0.5" :min="0.5" :max="4" class="slider" @change="cloudSlider('speed')" />
                    <div class="value">
                      {{ cloudForm.speed }}
                    </div>
                  </div>
                  <div class="line-slider">
                    <div class="title">
                      音量
                    </div>
                    <el-slider v-model="cloudForm.volume" :step="0.1" :max="1" class="slider" @change="cloudSlider('volume')" />
                    <div class="value">
                      {{ cloudForm.volume }}
                    </div>
                  </div>
                </div>
                <!-- 宫格切换 -->
                <div class="content-grids">
                  <el-row :gutter="10" style="width: 100%">
                    <el-col :span="6" class="cursor" @click.native="chooseGridType(4)">
                      <el-tooltip content="4宫格排列" effect="dark" placement="bottom">
                        <el-row :class="gridNum === 4 ? 'active' : ''" class="row-grid">
                          <el-col v-for="o in 4" :key="o" :span="12" class="grid" style="height: 30px;" />
                        </el-row>
                      </el-tooltip>
                    </el-col>
                    <el-col :span="8" class="cursor" @click.native="chooseGridType(9)">
                      <el-tooltip content="9宫格排列" effect="dark" placement="bottom">
                        <el-row :class="gridNum === 9 ? 'active' : ''" class="row-grid">
                          <el-col v-for="o in 9" :key="o" :span="8" class="grid" style="height: 20px;" />
                        </el-row>
                      </el-tooltip>
                    </el-col>
                    <el-col :span="10" class="cursor" @click.native="chooseGridType(12)">
                      <el-tooltip content="12宫格排列" effect="dark" placement="bottom">
                        <el-row :class="gridNum === 12 ? 'active' : ''" class="row-grid">
                          <el-col v-for="o in 12" :key="o" :span="6" class="grid" style="height: 20px;" />
                        </el-row>
                      </el-tooltip>
                    </el-col>
                  </el-row>
                </div>
                <!-- 关闭按钮 -->
                <div class="content-btn">
                  <el-button type="primary" @click="closeWebPlayReal">
                    结束视频播放
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebVideo from '@/components/video/WebVideo'
import { getVideoSources } from '@/util/device'
export default {
  /** *
   * @description Web播放应用组件
  */
  name: 'WebVideoPlay',
  components: {
    WebVideo
  },
  props: {
    // 开始状态
    showTopState: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      showRightTopState: true, // 是否显示右侧控制台
      // 控制台属性
      cloudForm: {
        schedule: 0, // 进度 0-100
        speed: 1, // 速度 0.5 1 1.5 2 2.5 3
        volume: 0 // 音量0-1
      },
      // 播放配置
      devLen: 15, // 默认初始化多少个测试视频源
      gridNum: 4, // 默认4宫格
      spanNum: 12, // 根据宫格量变化的占位量
      videoDivList: [], // 播放排列，固定规格4宫格、9宫格、12宫格
      divIndex: 0, // 选中的宫格的index，默认选中第一个宫格
      videoSources: [], // 播放源列表
      devIndex: -1, // 选中的播放源的index
      resizable: false
    }
  },
  computed: {
    // 是否启用flash
    hasUsableFlash() {
      let flashObj
      if (typeof window.ActiveXObject !== 'undefined') {
        // 传统浏览器
        // eslint-disable-next-line no-undef
        flashObj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
      } else {
        // 谷歌、火狐、微软Edge、Safari等现代浏览器
        flashObj = navigator.plugins['Shockwave Flash']
      }
      return !!flashObj
    }
  },
  watch: {
    showTopState: {
      deep: true,
      handler(val) {
        console.log('watch showTopState', val)
        if (val) {
          // 初始化参数集
          if (this.initVideoDivList()) {
            this.initParam()
          }
        } else {
          // 数据清除
          this.clearVideoData()
        }
      }
    }
  },
  created() {

  },
  destroyed() {

  },
  mounted() {

  },
  methods: {
    // 结束视频播放
    closeWebPlayReal() {
      this.$confirm('此操作将结束视频播放, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$parent.showTopState = !this.$parent.showTopState
      }).catch(() => {
      })
    },
    // 关闭时清除数据
    clearVideoData() {
      this.divIndex = 0
      this.videoDivList.splice(0, this.videoDivList.length)
      this.devIndex = -1
      this.videoSources.splice(0, this.videoSources.length)
    },
    // 显示pop里的right部分
    showRightBtn() {
      this.showRightTopState = !this.showRightTopState
    },
    // 视频播放准备完成回调
    playerReadied({ player, videoSource }) {
      console.log('playerReadied player', player, videoSource)
    },
    // 开始播放回调
    playerCanplaythrough({ player, videoSource }) {
      console.log('playerCanplaythrough player', player, videoSource)
    },
    // 视频播放销毁回调
    playerDispose({ player, videoSource }) {
      console.log('playerDispose player', player, videoSource)
    },
    // 当某一行被点击时
    rowClick(row) {
      console.log('rowClick row', row)
      this.devIndex = this.videoSources.findIndex(source => source.id === row.id)
      console.log('devIndex', this.devIndex)
      // 使正在播放当前点击行的宫格选中
      const lastIndex = this.videoDivList.findIndex(item => item.source && (item.source.id === row.id))
      if (lastIndex >= 0 && lastIndex !== this.divIndex) {
        // 检测是否有正在全屏的宫格，有则切换当前宫格为全屏
        const fullScreenIndex = this.videoDivList.findIndex(item => item.fullScreen)
        if (fullScreenIndex >= 0 && fullScreenIndex !== lastIndex) {
          // 原全屏的宫格取消全屏
          this.fullScreen(fullScreenIndex, this.videoDivList[fullScreenIndex])
          // 当前宫格切换为全屏
          this.fullScreen(lastIndex, this.videoDivList[lastIndex])
        } else {
          this.divIndex = lastIndex
        }
      }
    },
    // 当某一行被双击时
    rowDblclick(row) {
      console.log('rowDblclick row', row)
      // 换了宫格位置，重置此源的原播放宫格
      const lastIndex = this.videoDivList.findIndex(item => item.source && (item.source.id === row.id))
      console.log('rowDblclick lastIndex', lastIndex)
      if (lastIndex >= 0 && lastIndex !== this.divIndex) {
        this.videoDivList[lastIndex].show = false
        this.videoDivList[lastIndex].source = null
      }
      // 重设播放源
      row.winNum = this.videoDivList[this.divIndex].winNum
      this.videoDivList[this.divIndex].source = row
      this.videoDivList[this.divIndex].show = true
      // 重置列表其他同一窗口号
      this.videoSources = this.videoSources.map(source => {
        if (source.id !== row.id && source.winNum === row.winNum) {
          source.winNum = '--'
        }
        return source
      })
    },
    // 关闭这个视频
    closeVideo(index, item) {
      this.$confirm('此操作将关闭当前视频, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.closeVideoYes(index, item)
      }).catch(() => {
      })
    },
    // 确认关闭此视频
    closeVideoYes(index, item) {
      if (!item.show || !item.source) return
      // 重置列表显示窗口号
      this.videoSources = this.videoSources.map(source => {
        if (source.id === item.source.id) {
          source.winNum = '--'
        }
        return source
      })
      item.show = false
      item.source = null
    },
    // 播放此视频
    playVideo(index, item) {
      console.log('playVideo item', item)
      this.$refs['webVideo_' + index][0].play()
    },
    // 暂停此视频
    pauseVideo(index, item) {
      console.log('pauseVideo item', item)
      this.$refs['webVideo_' + index][0].pause()
    },
    // 自定义全屏这个视频
    fullScreen(index, item) {
      console.log('fullScreen item', item)
      // 选择宫格的状态
      this.gridClick(index, item)

      // 更新宫格全屏的状态
      const videoBox = this.$refs['videoBox_' + index][0]
      console.log('fullScreen videoBox', videoBox)
      item.fullScreen = !item.fullScreen
      console.log('fullScreen fullScreen', item.fullScreen)

      if (item.fullScreen) {
        // 全屏则显示一格
        this.spanNumLast = this.spanNum
        this.spanNum = 1
      } else {
        // 退出全屏则重置
        this.spanNum = this.spanNumLast
        this.spanNumLast = null
      }
      console.log('fullScreen spanNum', this.spanNum)
      videoBox.$forceUpdate()
    },
    // 行样式
    tableRowClassName() {
      return 'cursor'
    },
    // 选择左侧的宫格
    gridClick(index) {
      this.divIndex = index
      console.log('divIndex', this.divIndex)
    },
    // 双击左侧的宫格（占满）
    gridDblClick(index, item) {
      console.log('gridDblClick item', item)
      if (item.source) {
        this.fullScreen(index, item)
      }
    },
    // 切换宫格类型
    chooseGridType(num) {
      console.log('chooseGridType num', num)
      this.initVideoDivList(num)
    },
    // 初始化宫格，默认4宫格，从少切到多，往后push，从多切到少，从后切割
    initVideoDivList(num = this.gridNum) {
      this.gridNum = num
      const len = this.videoDivList.length
      if (len < num) {
        // 从少切到多
        for (let i = len; i < num; i++) {
          this.videoDivList.push({
            winNum: i + 1, // 窗口号
            show: false, // 此宫格是否播放视频源
            showModal: true, // 显示遮罩
            fullScreen: false, // 是否全屏
            source: null // 视频源
          })
        }
      } else if (len > num) {
        // 从多切到少
        this.videoDivList.splice(num, len)
        // 把被切掉的列表显示窗口号重置
        this.videoSources = this.videoSources.map(item => {
          if (!isNaN(item.winNum) && Number(item.winNum) > num) {
            item.winNum = '--'
          }
          return item
        })
      }
      // 宫格对应：4宫对12隔，9对8，12对6
      this.spanNum = num === 4 ? 12 : num === 12 ? 6 : 8
      // 如果当前正全屏，则也更新上次的
      if (this.spanNumLast) this.spanNumLast = this.spanNum
      return true
    },
    // 控制台--快捷按钮
    cloudClick(type) {
      this.videoDivList.map((item, index) => {
        if (item.source) {
          const webVideo = this.$refs['webVideo_' + index][0]
          if (type === '播放') {
            webVideo.play()
          } else if (type === '暂停') {
            webVideo.pause()
          } else if (type === '销毁') {
            item.show = false
          } else if (type === '重载') {
            item.show = true
          }
        }
      })
      this.$message({
        type: 'success',
        message: `${type}操作(^_^)`
      })
    },
    // 控制台-Slider滑动
    cloudSlider(type) {
      console.log('cloudSlider cloudForm', this.cloudForm)
      this.videoDivList.map((item, index) => {
        if (item.source && item.show) {
          const webVideo = this.$refs['webVideo_' + index][0]
          if (type === 'schedule') {
            webVideo.playbackRate(this.cloudForm.schedule)
          } else if (type === 'speed') {
            webVideo.currentTime(this.cloudForm.speed)
          } else if (type === 'volume') {
            webVideo.volume(this.cloudForm.volume)
          }
        }
      })
      this.$message({
        type: 'success',
        message: `设置${type}成功`
      })
    },
    // 初始化参数集
    async initParam() {
      try {
        this.showRightTopState = true
        this.loading = true

        const res = await getVideoSources(this.devLen)
        console.log('getVideoSources res', res)
        const data = res.data || []
        // 更新数据源
        this.videoSources = []
        data.map(item => {
          this.videoSources.push({
            winNum: '--', // 窗口号
            title: item.title, // 标题
            currentTitle: '播放视频加载中', // 状态说明
            // 设备信息
            id: item.id,
            devName: item.devName,
            // 播放源
            type: item.type,
            src: item.src
          })
        })
        const len = this.videoSources.length
        console.log('videoSources len', len)
        console.log('videoSources', this.videoSources)

        // 默认宫格数量接近视频源数量
        this.initVideoDivList(len <= 4 ? 4 : len <= 9 ? 9 : 12)

        // 默认丢当前宫格数量的视频源开始播放
        this.videoSources.map((item, index) => {
          if (index < this.videoDivList.length) {
            item.winNum = this.videoDivList[index].winNum
            this.videoDivList[index].source = item
            this.videoDivList[index].show = true
            this.videoDivList[index].showModal = true
            this.videoDivList[index].fullScreen = false
            // 如果有播放源的类型是type: 'rtmp/flv'，并且flash未启用，则隐藏遮罩，方便用户点击启用flash
            if (item.type === 'rtmp/flv' && !this.hasUsableFlash) {
              console.log(`videoDivList[${index}]`, this.hasUsableFlash)
              this.videoDivList[index].showModal = false
            }
          }
        })

        // 手动触发更新
        this.$refs.videoRow && this.$refs.videoRow.$forceUpdate()
      } catch (error) {
        this.$message({
          type: 'error',
          message: `${error.message}`
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped lang='scss'>
  @import "@/styles/videoPlay.scss";
</style>
