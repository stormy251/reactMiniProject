import React from 'react';

// This is using object destructure notation to assign a variable named video
// to the value of the video property on the object that's passed into the videolistitem aka props
const VideoListItem = ({video}) => {

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;