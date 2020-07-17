<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'" />
        below
      </p>
      <el-button @click="showVideoPlay">
        开始播放视频
      </el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <WebVideoPlay :show-top-state="showTopState" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import WebVideoPlay from '@/components/WebVideoPlay'

export default {
  name: 'App',
  components: {
    HelloWorld,
    WebVideoPlay
  },
  data() {
    return {
      showTopState: false
    }
  },
  methods: {
    showVideoPlay() {
      this.showTopState = !this.showTopState
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
