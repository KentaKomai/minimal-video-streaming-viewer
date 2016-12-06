// initialize video.js
var video = videojs('example_video_1');

video.on('timeupdate', function(e) {
  console.dir(this.tech_.currentTime());
})

//load the marker plugin
video.markers({
  markerTip:{
    display: true,
    text: function(marker) {
      return "This is a break: " + marker.text;
    }
  },
  breakOverlay:{
    display: true,
    displayTime: 3,
    text: function(marker) {
      return "This is an break overlay: " + marker.text;
    }
  },
  onMarkerReached: function(marker) {
    $('.event-list').append("<div>marker reached: " + marker.text + "</div>");
  },
  onMarkerClick: function(marker){
    $('.event-list').append("<div>marker clicked: " + marker.text + "</div>");
  },
  markers: [
    {
      time: 9.5,
      text: "this"
    },
    {
      time: 16,
      text: "is"
    },
    {
      time: 23.6,
      text: "so"
    },
    {
      time: 28,
      text: "cool"
    },
    {
      time: 36,
      text: ":)"
    }
  ]
});

video.thumbnails({
  0: {
    src: 'https://s3-ap-northeast-1.amazonaws.com/video-streaming-sample/thumbnails-per-seconds/thumbnails-00080.png',
    width: '120px'
  },
  5: {
    src: 'https://s3-ap-northeast-1.amazonaws.com/video-streaming-sample/thumbnails-per-seconds/thumbnails-00131.png'
  }
});

/**
動画ファイルがアップロードされたとき、何をするべきか

1. 動画をストリーミング用にエンコードする
2. １秒単位でサムネイルを生成する
3. サムネイルがパブリックになってると困る
*/
