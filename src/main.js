//  Importing of Library Dependencies
import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Importing Styles
require('./styles/main.scss');

// Importing Components
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

// Data Section
const API_KEY = "AIzaSyCwvvTsbaHiHAFi89AT6tVTWIrKXJkruAE";

// Main Class Component
class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            videos:[],
            selectedVideo:null
        };

        this.videoSearch("tennis");

    }

    videoSearch(term){
        YTSearch({ key:API_KEY,term:term}, (videos) => {
            // This is just to prepopulate videos on the page, with the default search term of tennis.
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }

    render(){

        // This method is a wrapper for the videoSearch method that ensures that searches aren't done more than 3 times in a second.
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <div className="row header-padding">
                    <SearchBar onSearchTermChange={videoSearch} />
                </div>
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
