//  importing of dependencies
import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Importing components
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list';

// Data Section
const API_KEY = "AIzaSyCwvvTsbaHiHAFi89AT6tVTWIrKXJkruAE";

// Main Class Component
class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            videos:[]
        };

        YTSearch({ key:API_KEY,term:"Tennis"}, (videos) => {
            // This is just to prepopulate videos on the page, with the default search term of tennis.
            this.setState({videos});
            // ***NOTE*** This is es6 syntactical sugar to that compiles to this.setState({videos:videos})
            // This only works when the key and the value are the same names
        });
    }

    render(){
        return (
            <div>
                <h1>Building A Youtube Search Clone</h1>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
