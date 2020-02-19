// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
    constructor(){
        super()
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

    handleBitrateClick = () => {
        this.setState(prevState => {
            return {
                settings: {
                ...prevState.settings,
                bitrate: 12
                }
            }
        })
    }

    handleResolutionClick = () => {
        this.setState(prevState => {
            return {
                settings: {
                ...prevState.settings,
                video: {
                    resolution: '720p'
                }
                }
            }
        })
    }

    render(){
        return(
            <span>
                <button className="bitrate" onClick={this.handleBitrateClick}>BitRate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleResolutionClick}>Resolution: {this.state.settings.video.resolution}</button>
            </span>
        )
    }
}