 
import React from 'react';
import ReactPlayer from "react-player"

class VideoComponent extends React.Component {

    render() {
        return (
            <div className="col-lg-5">
            
                
                <ReactPlayer width="100%"
                    url="https://www.youtube.com/watch?v=iumsOCd5eJo"
                />
            
        </div>
        );
    }
}

export default VideoComponent;