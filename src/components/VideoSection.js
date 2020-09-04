import React from 'react'
import { Button }from './Button'
import "./VideoSection.css"
import { FaPlayCircle } from 'react-icons/fa'
function VideoSection() {
    return (
        <div className="video-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Adventure</h1>
            <p>What are you waiting for?</p>
            <div className="video-btns">
                    <Button className="btns" buttonStyle="btn--outline"
                    buttonSize="btn--large">
                        GET STARTED
                    </Button>
                    <Button className="btns" buttonStyle="btn--primary"
                    buttonSize="btn--large">
                        WATCH TRAILER <FaPlayCircle className="icons-circel" />
                    </Button>
                </div>
        </div>
    )
}

export default VideoSection
