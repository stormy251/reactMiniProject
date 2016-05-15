//  Importing of Library Dependencies
import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

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

        YTSearch({ key:API_KEY,term:"Tennis"}, (videos) => {
            // This is just to prepopulate videos on the page, with the default search term of tennis.
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
            // ***NOTE*** This is es6 syntactical sugar to that compiles to this.setState({videos:videos})
            // This only works when the key and the value are the same names
        });
    }

    render(){
        return (
            <div>
                <div className="row header-padding">
                    <SearchBar />
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
