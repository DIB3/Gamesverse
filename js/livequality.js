
var options = {
    //width: 100,
    height: 360,
    plugins: {
        videoJsResolutionSwitcher: {
            default: 'high',
            dynamicLabel: true
        }
    }
}

var player = videojs('c_video', options);

