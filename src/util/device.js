
// 获取视频播放源
let videoSources = [
  // {
  //   title: '摄像头0001',
  //   devCode: 'gd3p051',
  //   type: 'video/mp4', // rtmp/flv（flash支持） rtmp/hls（原生video支持）
  //   src: 'http://vjs.zencdn.net/v/oceans.mp4' // 视频地址
  // },
  // {
  //   title: '摄像头0002',
  //   devCode: 'gd3p052',
  //   type: 'rtmp/flv',
  //   src: 'rtmp://58.200.131.2:1935/livetv/hunantv'
  // },
  // {
  //   title: '摄像头0003',
  //   devCode: 'gd3p053',
  //   type: 'application/x-mpegURL',
  //   src: 'https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8' // http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8
  // },
  // {
  //   title: '摄像头0004',
  //   devCode: 'gd3p054',
  //   type: 'video/mp4',
  //   src: 'http://vjs.zencdn.net/v/oceans.mp4'
  // }
]

// 获取视频播放源-假数据
export const getVideoSources = (devLen = 9) => {
  videoSources = []
  for (let i = 0; i < devLen; i++) {
    if (i === 0) {
      videoSources.push({
        title: `测试摄像头5300${i}`,
        devName: `gdp00${i}`,
        id: `gdp00${i}`,
        type: 'video/mp4',
        src: 'http://vjs.zencdn.net/v/oceans.mp4'
      })
    } else {
      videoSources.push({
        title: `测试摄像头5300${i}`,
        devName: `gdp00${i}`,
        id: `gdp00${i}`,
        type: 'rtmp/flv',
        src: 'rtmp://58.200.131.2:1935/livetv/hunantv'
      })
    }
  }
  return {
    'status_code': 1,
    'message': 'success',
    'data': videoSources
  }
}
