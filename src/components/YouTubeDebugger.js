// Code YouTubeDebugger Component Here
import React from 'react';

export default class YoutubeDebugger extends React.Component {
  
  constructor(){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
        }
      }
    }
  }

  updateBitRate = () => {
    this.setState( previousState => {
      return {
        ...previousState, 
        settings: {
          ...this.state.settings, 
          bitrate: 12
        }
      }
    }, () => console.log(this.state.settings.bitrate))
  }

  updateResolution = () => {
    this.setState( previousState => {
      return {
        ...previousState, 
        settings: {
          ...this.state.settings, 
          video: {
            resolution: '720p'
          }
        }
      }
    }, () => console.log(this.state.settings.video.resolution))
  }

  render() {
    return( 
      <div>
      <button className="bitrate" onClick={this.updateBitRate}>Change Bitrate</button>
      <button className="resolution" onClick={this.updateResolution}>Change Resolution</button>
      </div>
    )
  }
}