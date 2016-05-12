import React from 'react';

const VideoList = (props) => {
    const videos = props.videos;
    return (
        <ul className="col-md-4 list-group">
            <li>Number of videos: {videos.length}</li>
        </ul>
    )
};

export default VideoList;
