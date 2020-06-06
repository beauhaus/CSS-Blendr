import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import GlitchVid from '../../static/images/glitchvid.mp4'
class VideoApp extends Component {
    player = {}
    
    state = {
        video: {
            src: GlitchVid,
            // poster: "http://www.example.com/path/to/video_poster.jpg"
            
        }
    }

    onPlayerReady(player){
        console.clear()
        console.log("Player is ready: ", player);
        this.player = player;
        player.autoplay('muted')
        player.loop(true)
        player.controls(false)
        // player.playinline(true)
    }

    render() {
        return (
            <div>
                <VideoPlayer
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    onReady={this.onPlayerReady.bind(this)}

                />
            </div>
        );
    }
}
export default VideoApp;