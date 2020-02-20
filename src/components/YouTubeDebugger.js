// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

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

  handleBitRate = () => {
    this.setState ({ 
      settings: {
        ...this.state.settings,
        bitrate : 12
      }
    }, () => console.log(this.state.settings.bitrate))
  }

  handleResolution = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }, () => console.log(this.state.settings.video.resolution))}
  


  render(){
    return(
    <div>
      <h1>Youtube Debugger</h1>
      <button className="bitrate" onClick={this.handleBitRate}>bitrate settings</button> 
      <button className="resolution" onClick={this.handleResolution}> resolution Setings</button>
    </div>
    )
  }
}
