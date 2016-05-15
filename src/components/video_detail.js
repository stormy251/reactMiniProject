import React from 'react';

const VideoDetail= ({video}) => {

    // If there is a render triggered prior to the API generating any videos
    // render a loading animation
    if(!video){
        return (
            <div>Loading...</div>
        )
    }

    // Data Block
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="col-md-8 video-detail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div><strong>Title: </strong>{video.snippet.title}</div>
                <div><strong>Description:</strong> <br/>
                    {video.snippet.description}
                </div>
            </div>
        </div>
    );
};

export default VideoDetail